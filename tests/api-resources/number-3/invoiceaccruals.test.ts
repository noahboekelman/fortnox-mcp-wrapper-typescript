// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invoiceaccruals', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.number3.invoiceaccruals.create();
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
      client.number3.invoiceaccruals.create(
        {
          InvoiceAccrual: {
            AccrualAccount: 1000,
            Description: 'Description',
            EndDate: '2019-12-27',
            InvoiceAccrualRows: [
              {
                Account: 0,
                CostCenter: 'CostCenter',
                Credit: 0,
                Debit: 0,
                Project: 'Project',
                TransactionInformation: 'TransactionInformation',
              },
              {
                Account: 0,
                CostCenter: 'CostCenter',
                Credit: 0,
                Debit: 0,
                Project: 'Project',
                TransactionInformation: 'TransactionInformation',
              },
            ],
            InvoiceNumber: 0,
            RevenueAccount: 1000,
            StartDate: '2019-12-27',
            Total: 0,
            '@url': '@url',
            Period: 'MONTHLY',
            Times: 0,
            VATIncluded: true,
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.number3.invoiceaccruals.retrieve(0);
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
    const responsePromise = client.number3.invoiceaccruals.update(0);
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
      client.number3.invoiceaccruals.update(
        0,
        {
          InvoiceAccrual: {
            AccrualAccount: 1000,
            Description: 'Description',
            EndDate: '2019-12-27',
            InvoiceAccrualRows: [
              {
                Account: 0,
                CostCenter: 'CostCenter',
                Credit: 0,
                Debit: 0,
                Project: 'Project',
                TransactionInformation: 'TransactionInformation',
              },
              {
                Account: 0,
                CostCenter: 'CostCenter',
                Credit: 0,
                Debit: 0,
                Project: 'Project',
                TransactionInformation: 'TransactionInformation',
              },
            ],
            InvoiceNumber: 0,
            RevenueAccount: 1000,
            StartDate: '2019-12-27',
            Total: 0,
            '@url': '@url',
            Period: 'MONTHLY',
            Times: 0,
            VATIncluded: true,
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.number3.invoiceaccruals.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('remove', async () => {
    const responsePromise = client.number3.invoiceaccruals.remove(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
