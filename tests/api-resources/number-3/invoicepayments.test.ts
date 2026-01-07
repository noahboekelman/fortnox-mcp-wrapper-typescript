// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invoicepayments', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.number3.invoicepayments.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.number3.invoicepayments.create(
        {
          InvoicePayment: {
            InvoiceNumber: 0,
            '@url': '@url',
            Amount: 0,
            AmountCurrency: 0,
            Booked: true,
            Currency: 'xxx',
            CurrencyRate: 0,
            CurrencyUnit: 0,
            ExternalInvoiceReference1: 'ExternalInvoiceReference1',
            ExternalInvoiceReference2: 'ExternalInvoiceReference2',
            InvoiceCustomerName: 'InvoiceCustomerName',
            InvoiceCustomerNumber: 'InvoiceCustomerNumber',
            InvoiceDueDate: '2019-12-27',
            InvoiceOCR: 'InvoiceOCR',
            InvoiceTotal: 'InvoiceTotal',
            ModeOfPayment: 'ModeOfPayment',
            ModeOfPaymentAccount: 1000,
            Number: 'Number',
            PaymentDate: '2019-12-27',
            Source: 'Source',
            VoucherNumber: 0,
            VoucherSeries: 'VoucherSeries',
            VoucherYear: 0,
            WriteOffs: [
              {
                AccountNumber: 1000,
                Amount: 0,
                CostCenter: 'CostCenter',
                Currency: 'xxx',
                Description: 'Description',
                Project: 'Project',
                TransactionInformation: 'TransactionInformation',
              },
            ],
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.number3.invoicepayments.retrieve('Number');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.number3.invoicepayments.update('Number');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.number3.invoicepayments.update(
        'Number',
        {
          InvoicePayment: {
            InvoiceNumber: 0,
            '@url': '@url',
            Amount: 0,
            AmountCurrency: 0,
            Booked: true,
            Currency: 'xxx',
            CurrencyRate: 0,
            CurrencyUnit: 0,
            ExternalInvoiceReference1: 'ExternalInvoiceReference1',
            ExternalInvoiceReference2: 'ExternalInvoiceReference2',
            InvoiceCustomerName: 'InvoiceCustomerName',
            InvoiceCustomerNumber: 'InvoiceCustomerNumber',
            InvoiceDueDate: '2019-12-27',
            InvoiceOCR: 'InvoiceOCR',
            InvoiceTotal: 'InvoiceTotal',
            ModeOfPayment: 'ModeOfPayment',
            ModeOfPaymentAccount: 1000,
            Number: 'Number',
            PaymentDate: '2019-12-27',
            Source: 'Source',
            VoucherNumber: 0,
            VoucherSeries: 'VoucherSeries',
            VoucherYear: 0,
            WriteOffs: [
              {
                AccountNumber: 1000,
                Amount: 0,
                CostCenter: 'CostCenter',
                Currency: 'xxx',
                Description: 'Description',
                Project: 'Project',
                TransactionInformation: 'TransactionInformation',
              },
            ],
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.number3.invoicepayments.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.number3.invoicepayments.list(
        {
          invoicenumber: 0,
          lastmodified: 'lastmodified',
          sortby: 'paymentdate',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('bookkeep', async () => {
    const responsePromise = client.number3.invoicepayments.bookkeep('Number');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('bookkeep: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.number3.invoicepayments.bookkeep(
        'Number',
        {
          InvoicePayment: {
            InvoiceNumber: 0,
            '@url': '@url',
            Amount: 0,
            AmountCurrency: 0,
            Booked: true,
            Currency: 'xxx',
            CurrencyRate: 0,
            CurrencyUnit: 0,
            ExternalInvoiceReference1: 'ExternalInvoiceReference1',
            ExternalInvoiceReference2: 'ExternalInvoiceReference2',
            InvoiceCustomerName: 'InvoiceCustomerName',
            InvoiceCustomerNumber: 'InvoiceCustomerNumber',
            InvoiceDueDate: '2019-12-27',
            InvoiceOCR: 'InvoiceOCR',
            InvoiceTotal: 'InvoiceTotal',
            ModeOfPayment: 'ModeOfPayment',
            ModeOfPaymentAccount: 1000,
            Number: 'Number',
            PaymentDate: '2019-12-27',
            Source: 'Source',
            VoucherNumber: 0,
            VoucherSeries: 'VoucherSeries',
            VoucherYear: 0,
            WriteOffs: [
              {
                AccountNumber: 1000,
                Amount: 0,
                CostCenter: 'CostCenter',
                Currency: 'xxx',
                Description: 'Description',
                Project: 'Project',
                TransactionInformation: 'TransactionInformation',
              },
            ],
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('remove', async () => {
    const responsePromise = client.number3.invoicepayments.remove('Number');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
