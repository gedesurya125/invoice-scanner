// app/api/upload/route.js

import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import multer from 'multer';
import { promisify } from 'util';
import pdfParse from 'pdf-parse';
import Tesseract from 'tesseract.js';
import { writeFile } from 'fs/promises';

export async function GET(req: Request) {
  return NextResponse.json({ message: 'get api is working' }, { status: 200 });
}

// const unlinkAsync = promisify(fs.unlink);

// const storage = multer.diskStorage({
//   destination: './public',
//   filename: (req, file, cb) => cb(null, file.originalname)
// });

// const upload = multer({ storage });

// type NextApiRequestWithFormData = NextRequest &
//   Request & {
//     files: any[];
//   };

export async function POST(request: any) {
  // ? Get the file from the request
  const formData = await request.formData();
  const file = formData.get('invoiceFile');
  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: 'No files received.' }, { status: 400 });
  }
  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = file?.name?.replaceAll(' ', '_');
  const mimeType = file?.type;

  // ? Define the path to store the file on the server
  const filePath = path.join(process.cwd(), 'public', 'uploads', fileName);

  // ? Store the file on the server
  try {
    await writeFile(filePath, buffer);
  } catch (error) {
    console.log('Error occured ', error);
    return NextResponse.json({ Message: 'Failed', status: 500 });
  }

  // ? Try to extract the text from pdf or image
  let extractedText = '';
  try {
    const isPdf = mimeType === 'application/pdf';
    const isImage = ['image/png', 'image/jpeg'].includes(mimeType);
    if (isPdf) {
      const data = fs.readFileSync(filePath);
      const pdfData = await pdfParse(data);
      extractedText = pdfData?.text;
    } else if (isImage) {
      const worker = await Tesseract.createWorker('eng', 1, {
        workerPath:
          './node_modules/tesseract.js/src/worker-script/node/index.js'
      });
      const data = await worker.recognize(filePath);
      extractedText = data?.data?.text;
    } else {
      return NextResponse.json({
        message: 'file type is not supported',
        mimeType,
        isPdf,
        isImage
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Error extracting data from the file' },
      { status: 200 }
    );
  }

  try {
    const apiKey = process.env.NEXT_PUBLIC_OPEN_AI_KEY;
    const prompt = `Extract the following information from this invoice:
    - Product Name
    - Original Unit Price
    - Discount
    - Adjusted Unit Price
    - Packaging Size per Unit
    - Quantity Bought
    - Total Price
    Invoice text: ${extractedText}`;
    const apiResponse = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo-16k',
        prompt: prompt,
        max_tokens: 150
      })
    }).catch((err) => {
      throw err;
    });

    const responseContentType = apiResponse.headers.get('Content-Type');
    if (responseContentType?.includes('application/json')) {
      const apiData = await apiResponse?.json();
      const extractedData =
        apiData?.choices &&
        apiData?.choices?.length > 0 &&
        apiData?.choices[0]?.text?.trim();
      if (!extractedData) {
        return NextResponse.json({
          message: 'error',
          chatGptResponse: apiData
        });
      } else {
        return NextResponse.json({
          message: 'success',
          extractedData
        });
      }
    }

    const textResponse = await apiResponse.text();
    return NextResponse.json({
      message: 'the chat gpt response is not json',
      response: textResponse,
      responseContentType
    });
  } catch (error) {
    console.log('error processing the file', error);

    return NextResponse.json({
      message: 'Error processing the file',
      error
    });
  }

  return NextResponse.json({
    message: 'success',
    filePath,
    fileName,
    mimeType,
    extractedText
  });

  // uploadMiddleware(request, res as any, async (err) => {
  //   if (err) {
  //     return NextResponse.json(
  //       { error: 'Error uploading file' },
  //       { status: 500 }
  //     );
  //   }
  //   let extractedText = '';
  //   try {
  //     if (mimeType === 'application/pdf') {
  //       const data = fs.readFileSync(filePath);
  //       const pdfData = await pdfParse(data);
  //       extractedText = pdfData.text;

  //       return res
  //         .status(200)
  //         .json({ message: 'success', type: 'pdf', extractedText });
  //     } else if (
  //       ['image/png', 'image/jpeg'].includes((req as any).file.mimetype)
  //     ) {
  //       const data = await Tesseract.recognize(filePath, 'eng');
  //       extractedText = data.data.text;
  //       return res
  //         .status(200)
  //         .json({ message: 'success', type: 'image', extractedText });
  //     }
  // // Send the extracted text to the OpenAI API using fetch
  // const apiKey = process.env.NEXT_PUBLIC_OPEN_AI_KEY;
  // const prompt = `Extract the following information from this invoice:
  //   - Product Name
  //   - Original Unit Price
  //   - Discount
  //   - Adjusted Unit Price
  //   - Packaging Size per Unit
  //   - Quantity Bought
  //   - Total Price
  //   Invoice text: ${extractedText}`;
  // const apiResponse = await fetch('https://api.openai.com/v1/completions', {
  //   method: 'POST',
  //   headers: {
  //     Authorization: `Bearer ${apiKey}`,
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     model: 'text-davinci-004',
  //     prompt: prompt,
  //     max_tokens: 150
  //   })
  // });
  // const apiData = await apiResponse.json();
  // const extractedData = apiData.choices[0].text.trim();
  // await unlinkAsync(filePath);
  // return res.status(200).json({ extractedData });
  // Clean up the uploaded file
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).json({ error: 'Error processing the file' });
  //   }
  // });
}

//? Uploading file in next js source : https://medium.com/@xhowais/next-js-file-upload-api-tutorial-local-directroy-7ec039efbd66
//? enable parse pdf in next js  https://stackoverflow.com/questions/76424198/why-do-pdf-parsing-libraries-pdf2json-and-pdf-parse-seem-to-not-work-with-next-j
//? fix the tesseract issue in next js https://github.com/naptha/tesseract.js/issues/868
