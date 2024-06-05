import { getInvoices } from 'queries/getInvoices';
import React from 'react';
import { Box, Paragraph } from 'theme/components';

export const DisplayedTable = async () => {
  const invoices = await getInvoices();

  return (
    <Box
      sx={{
        gridColumn: ['1/13', '1/25', '1/25', '1/25']
      }}>
      <pre>
        <Paragraph as="code">{JSON.stringify(invoices, null, 2)}</Paragraph>
      </pre>
    </Box>
  );
};
