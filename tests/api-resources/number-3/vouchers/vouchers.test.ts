// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource vouchers', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.number3.vouchers.create();
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
      client.number3.vouchers.create(
        {
          financialyear: 0,
          Voucher: {
            Description: 'x',
            TransactionDate: '2019-12-27',
            VoucherSeries: 'VoucherSeries',
            Year: 0,
            '@url': '@url',
            ApprovalState: 0,
            Comments: 'Comments',
            CostCenter: 'CostCenter',
            Project: 'Project',
            ReferenceNumber: 'ReferenceNumber',
            ReferenceType: 'INVOICE',
            VoucherNumber: 0,
            VoucherRows: [
              {
                Account: 1000,
                CostCenter: 'CostCenter',
                Credit: 0,
                Debit: 0,
                Description: 'Description',
                Project: 'Project',
                Quantity: 0,
                Removed: true,
                TransactionInformation: 'TransactionInformation',
              },
              {
                Account: 1000,
                CostCenter: 'CostCenter',
                Credit: 0,
                Debit: 0,
                Description: 'Description',
                Project: 'Project',
                Quantity: 0,
                Removed: true,
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
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.number3.vouchers.retrieve(0, { VoucherSeries: 'VoucherSeries' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.number3.vouchers.retrieve(0, {
      VoucherSeries: 'VoucherSeries',
      financialyear: 0,
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.number3.vouchers.list();
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
      client.number3.vouchers.list({ financialyear: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });
});
