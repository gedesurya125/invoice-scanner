'use client';
import React from 'react';
import { Box, Button, Input, Paragraph } from 'theme/components';

export const FileUploadForm = ({}) => {
  const [result, setResult] = React.useState(null);

  const token = process.env.NEXT_PUBLIC_MINDEE_API_KEY;

  const handleFormSubmit = async (evt: React.FormEvent<HTMLInputElement>) => {
    evt.preventDefault();
    let myFileInput = document.getElementById(
      'invoice-file-input'
    ) as HTMLInputElement;
    let myFile = myFileInput?.files && myFileInput?.files[0];
    if (!myFile) {
      return;
    }

    let data = new FormData();
    data.append('document', myFile, myFile.name);

    const responseData = await fetch(
      'https://api.mindee.net/v1/products/mindee/invoices/v4/predict',
      {
        method: 'POST',
        headers: {
          Authorization: `Token ${token}`,
          Accept: 'application/json'
        },
        body: data
      }
    )
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log('error sending the invoice file', err);
      });

    setResult(responseData);
  };

  console.log('this is the result', result);

  return (
    <Box
      as="form"
      onSubmit={handleFormSubmit}
      sx={{
        gridColumn: ['1/13', '1/25', '1/25', '1/25'],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: '5rem'
      }}>
      <Input type="file" id="invoice-file-input" name="file" />
      <Button
        type="submit"
        sx={{
          variant: 'buttons.secondary.small',
          mt: '3rem'
        }}>
        Submit
      </Button>
      {result && (
        <pre>
          <Paragraph as="code" className="response">
            {JSON.stringify(result, null, 2)}
          </Paragraph>
        </pre>
      )}
    </Box>
  );
};
