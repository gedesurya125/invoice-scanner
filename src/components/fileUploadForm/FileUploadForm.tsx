'use client';
// import { useRouter } from 'next/navigation';
// import { createInvoice } from 'queries/createInvoice';
import React from 'react';
import { Box, Button, Input, Paragraph, Spinner } from 'theme/components';
// import { InvoiceParseResponse } from 'types/invoiceParserResponse';
// import pdfParse from 'pdf-parse';

export const FileUploadForm = ({}) => {
  const [selectedFile, setSelectedFile] = React.useState<Blob | string>('');
  const [result, setResult] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(
      (event?.target?.files &&
        event?.target?.files?.length > 0 &&
        event?.target?.files[0]) ||
        ''
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData();
    formData.append('invoiceFile', selectedFile);

    const response = await fetch('/api/upload/', {
      method: 'POST',
      body: formData
    });

    try {
      const data = await response?.json();
      console.log('this is the response', data);

      setResult(data?.extractedData);
      setLoading(false);
    } catch (error) {
      console.log('error parsed json', error);
    }
  };

  console.log('this is the result', result);

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      sx={{
        gridColumn: ['1/13', '1/25', '1/25', '1/25'],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: '5rem'
      }}>
      <Input
        type="file"
        id="invoice-file-input"
        name="file"
        onChange={handleFileChange}
      />
      <Button
        type="submit"
        sx={{
          variant: 'buttons.secondary.small',
          mt: '3rem'
        }}>
        {loading ? <Spinner /> : 'Submit'}
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
