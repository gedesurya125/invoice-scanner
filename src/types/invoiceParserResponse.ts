type ApiRequest = {
  error: any;
  resources: string[];
  status: string;
  status_code: number;
  url: string;
};

type PredictionValue = {
  confidence: number;
  page_id?: string;
  polygon: number[][];
  value: any;
  type?: string;
  raw_value?: string;
};

type LineItemPrediction = {
  confidence: number;
  description: string;
  page_id?: number;
  polygon: number[][];
  product_code: string;
  quantity: number;
  tax_amount: any;
  tax_rate: any;
  total_amount: number;
  unit_price: number;
};

type ParsedPage = {
  extras: any;
  id: number;
  orientation: {
    value: number;
  };
  prediction: {
    billing_address: PredictionValue;
    customer_address: PredictionValue;
    customer_company_registrations: PredictionValue[];
    customer_id: PredictionValue;
    customer_name: PredictionValue;
    date: PredictionValue;
    document_type: {
      value: string;
    };
    due_date: PredictionValue;
    invoice_number: PredictionValue;
    line_items: LineItemPrediction[];
    locale: PredictionValue;
    orientation: {
      confidence: number;
      degrees: number;
    };
    reference_numbers: PredictionValue[];
    shipping_address: PredictionValue;
    supplier_address: PredictionValue;
    supplier_company_registrations: PredictionValue[];
    supplier_email: PredictionValue;
    supplier_name: PredictionValue;
    supplier_payment_details: PaymentDetails[];
    supplier_phone_number: PredictionValue;
    supplier_website: PredictionValue;
    taxes: TaxesValue[];
    total_amount: PredictionValue;
    total_net: PredictionValue;
    total_tax: PredictionValue;
  };
};

type ReferenceNumberPrediction = {
  confidence: number;
  polygon: number[][];
  value: string;
};

type PaymentDetails = {
  account_number: string;
  confidence: 0.95;
  iban: string;
  page_id: 0;
  polygon: number[][];
  routing_number: string;
  swift: string;
};

type TaxesValue = {
  base: any;
  confidence: number;
  page_id: number;
  polygon: number[][];
  rate: number;
  value: number;
};

export type ParsedInvoiceDocument = {
  id: string;
  name: string;
  n_pages: number;
  is_rotation_applied: boolean;
  inference: {
    extras: any;
    finished_at: string;
    is_rotation_applied: true;
    pages: ParsedPage[];
    prediction: {
      billing_address: PredictionValue;
      customer_address: PredictionValue;
      customer_company_registrations: PredictionValue[];
      customer_id: PredictionValue;
      customer_name: PredictionValue;
      date: PredictionValue;
      document_type: {
        value: string;
      };
      due_date: PredictionValue;
      invoice_number: PredictionValue;
      line_items: LineItemPrediction[];
      locale: {
        confidence: number;
        currency: string;
        language: string;
      };
      reference_numbers: ReferenceNumberPrediction[];
      shipping_address: PredictionValue;
      supplier_address: PredictionValue;
      supplier_company_registrations: PredictionValue[];
      supplier_email: PredictionValue;
      supplier_name: PredictionValue;
      supplier_payment_details: PaymentDetails[];
      supplier_phone_number: PredictionValue;
      supplier_website: PredictionValue;
      taxes: TaxesValue[];
      total_amount: PredictionValue;
      total_net: PredictionValue;
      total_tax: PredictionValue;
    };
    processing_time: number;
    product: {
      features: string[];
      name: string;
      type: string;
      version: string;
    };
    started_at: string;
  };
};

export type InvoiceParseResponse = {
  api_request: ApiRequest;
  document: ParsedInvoiceDocument;
};
