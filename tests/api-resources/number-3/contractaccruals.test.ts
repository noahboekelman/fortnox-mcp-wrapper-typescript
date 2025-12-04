// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contractaccruals', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.number3.contractaccruals.create();
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
      client.number3.contractaccruals.create(
        {
          ContractAccrual: {
            AccrualAccount: 1000,
            AccrualRows: [
              {
                Account: 0,
                Credit: 0,
                Debit: 0,
                CostCenter: 'CostCenter',
                Project: 'Project',
                TransactionInformation: 'TransactionInformation',
              },
              {
                Account: 0,
                Credit: 0,
                Debit: 0,
                CostCenter: 'CostCenter',
                Project: 'Project',
                TransactionInformation: 'TransactionInformation',
              },
            ],
            CostAccount: 1000,
            Description: 'Description',
            DocumentNumber: 0,
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
    const responsePromise = client.number3.contractaccruals.retrieve(0);
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
    const responsePromise = client.number3.contractaccruals.update(0);
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
      client.number3.contractaccruals.update(
        0,
        {
          ContractAccrual: {
            AccrualAccount: 1000,
            AccrualRows: [
              {
                Account: 0,
                Credit: 0,
                Debit: 0,
                CostCenter: 'CostCenter',
                Project: 'Project',
                TransactionInformation: 'TransactionInformation',
              },
              {
                Account: 0,
                Credit: 0,
                Debit: 0,
                CostCenter: 'CostCenter',
                Project: 'Project',
                TransactionInformation: 'TransactionInformation',
              },
            ],
            CostAccount: 1000,
            Description: 'Description',
            DocumentNumber: 0,
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
    const responsePromise = client.number3.contractaccruals.list();
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
    const responsePromise = client.number3.contractaccruals.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
