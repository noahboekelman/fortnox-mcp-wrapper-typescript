// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource time', () => {
  // Prism tests are disabled
  test.skip('getArticles', async () => {
    const responsePromise = client.api.time.getArticles();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getArticles: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.time.getArticles(
        {
          costCenterIds: ['string'],
          customerIds: ['string'],
          fromDate: '2019-12-27',
          includeNonInvoiceablePrice: true,
          includeRegistrationsWithoutProject: true,
          inInvoiceBasis: true,
          internalArticles: true,
          invoiced: true,
          itemIds: ['string'],
          nonInvoiceable: true,
          ownerIds: ['string'],
          projectIds: ['string'],
          toDate: '2019-12-27',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getRegistrations', async () => {
    const responsePromise = client.api.time.getRegistrations();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getRegistrations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.time.getRegistrations(
        {
          costCenterIds: ['string'],
          customerIds: ['string'],
          fromDate: '2019-12-27',
          includeNonInvoiceableChargeHours: true,
          includeRegistrationsWithoutProject: true,
          inInvoiceBasis: true,
          internalTime: true,
          invoiced: true,
          nonInvoiceable: true,
          projectIds: ['string'],
          regCodes: ['string'],
          serviceIds: ['string'],
          toDate: '2019-12-27',
          userIds: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });
});
