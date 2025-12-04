// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource supplierinvoicepayments', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.number3.supplierinvoicepayments.create();
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
      client.number3.supplierinvoicepayments.create(
        {
          SupplierInvoicePayment: {
            InvoiceNumber: 'InvoiceNumber',
            '@url': '@url',
            Amount: 0,
            AmountCurrency: 0,
            Booked: true,
            Currency: 'xxx',
            CurrencyRate: 0,
            CurrencyUnit: 0,
            Information: 'Information',
            InvoiceDueDate: '2019-12-27',
            InvoiceOCR: 'InvoiceOCR',
            InvoiceSupplierName: 'InvoiceSupplierName',
            InvoiceSupplierNumber: 'InvoiceSupplierNumber',
            InvoiceTotal: 'InvoiceTotal',
            ModeOfPayment: 'ModeOfPayment',
            Number: 0,
            PaymentDate: '2019-12-27',
            Source: 'manual',
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
    const responsePromise = client.number3.supplierinvoicepayments.retrieve(0);
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
    const responsePromise = client.number3.supplierinvoicepayments.update(0);
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
      client.number3.supplierinvoicepayments.update(
        0,
        {
          SupplierInvoicePayment: {
            InvoiceNumber: 'InvoiceNumber',
            '@url': '@url',
            Amount: 0,
            AmountCurrency: 0,
            Booked: true,
            Currency: 'xxx',
            CurrencyRate: 0,
            CurrencyUnit: 0,
            Information: 'Information',
            InvoiceDueDate: '2019-12-27',
            InvoiceOCR: 'InvoiceOCR',
            InvoiceSupplierName: 'InvoiceSupplierName',
            InvoiceSupplierNumber: 'InvoiceSupplierNumber',
            InvoiceTotal: 'InvoiceTotal',
            ModeOfPayment: 'ModeOfPayment',
            Number: 0,
            PaymentDate: '2019-12-27',
            Source: 'manual',
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
    const responsePromise = client.number3.supplierinvoicepayments.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.number3.supplierinvoicepayments.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('bookkeep', async () => {
    const responsePromise = client.number3.supplierinvoicepayments.bookkeep(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
