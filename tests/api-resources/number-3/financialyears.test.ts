// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource financialyears', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.number3.financialyears.create({
      FinancialYear: { FromDate: '2019-12-27', ToDate: '2019-12-27' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.number3.financialyears.create({
      FinancialYear: {
        FromDate: '2019-12-27',
        ToDate: '2019-12-27',
        '@url': '@url',
        AccountChartType: 'AccountChartType',
        AccountingMethod: 'ACCRUAL',
        Id: 0,
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.number3.financialyears.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.number3.financialyears.list();
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
      client.number3.financialyears.list({ Date: '2019-12-27' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });
});
