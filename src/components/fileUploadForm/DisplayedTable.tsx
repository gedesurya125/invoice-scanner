import { getInvoices } from 'queries/getInvoices';
import React from 'react';
import { Box, Heading, Paragraph } from 'theme/components';
import { Invoice, Item } from '@prisma/client';

export const DisplayedTable = async () => {
  const invoices = await getInvoices();

  return (
    <Box
      sx={{
        gridColumn: ['1/13', '1/25', '1/25', '1/25'],
        mt: '4rem'
      }}>
      <InvoiceList invoices={invoices} />
    </Box>
  );
};

const InvoiceList = ({ invoices }: { invoices: Invoice[] }) => {
  return (
    <Box
      as="ul"
      sx={{
        pl: 0,
        listStyle: 'none',
        display: ['flex', 'flex', 'flex', 'grid'],
        flexDirection: ['column', 'column', 'column', 'unset'],
        gridTemplateColumns: [null, null, null, '1fr 1fr'],
        gap: '3rem'
      }}>
      {invoices.map((data, index) => {
        return <InvoiceListItem key={data.id} invoice={data} />;
      })}
    </Box>
  );
};

const InvoiceListItem = ({ invoice }: { invoice: Invoice }) => {
  return (
    <Box
      sx={{
        border: '1px solid white',
        p: '1rem'
      }}>
      <Heading
        as="h3"
        sx={{
          variant: 'text.body-125-normal',
          fontSize: '2rem'
        }}>
        Date: {invoice.invoiceDate?.toLocaleDateString()}
      </Heading>
      <InvoiceDetailParagraph>
        Currency: {invoice.currency}
      </InvoiceDetailParagraph>
      <InvoiceDetailParagraph>
        Document Type: {invoice.documentType}
      </InvoiceDetailParagraph>
      <InvoiceDetailParagraph>
        Language: {invoice.language}
      </InvoiceDetailParagraph>
      <InvoiceDetailParagraph>
        Total Price: {invoice.totalPrice}
      </InvoiceDetailParagraph>

      <Box
        as="table"
        sx={{
          mt: '1rem',
          width: '100%',
          borderCollapse: 'collapse',
          '& th, & td': {
            border: '1px solid white',
            p: '4px'
          }
        }}>
        <Box as="thead">
          <Box as="tr">
            <ThElement>Id</ThElement>
            <ThElement>Amount</ThElement>
            <ThElement>Unit</ThElement>
            <ThElement>Unit Price</ThElement>
            <ThElement>Total Price</ThElement>
            <ThElement>Currency</ThElement>
          </Box>
        </Box>
        <Box as="tbody">
          {
            // @ts-ignore
            invoice?.items?.map((data: any, index: number) => {
              return <RowElement item={data} key={index} />;
            })
          }
        </Box>
      </Box>
    </Box>
  );
};

const ThElement = ({ children }: { children: React.ReactNode }) => {
  return (
    <Paragraph
      as="th"
      sx={{
        variant: 'text.body-125-normal',
        fontSize: '1.5rem'
      }}>
      {children}
    </Paragraph>
  );
};

const RowElement = ({ item }: { item: Item }) => {
  return (
    <Box as="tr">
      <ColumnElement>{item.id}</ColumnElement>
      <ColumnElement>{item.amount}</ColumnElement>
      <ColumnElement>{item.unit}</ColumnElement>
      <ColumnElement>{item.unitPrice}</ColumnElement>
      <ColumnElement>{item.totalPrice}</ColumnElement>
      <ColumnElement>{item.currency}</ColumnElement>
    </Box>
  );
};

const ColumnElement = ({ children }: { children: React.ReactNode }) => {
  return (
    <Paragraph
      as="td"
      sx={{
        variant: 'text.body-125-normal',
        fontSize: '1.4rem'
      }}>
      {children}
    </Paragraph>
  );
};

const InvoiceDetailParagraph = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <Paragraph
      sx={{
        variant: 'text.body-125-normal',
        fontSize: '1.4rem'
      }}>
      {children}
    </Paragraph>
  );
};
