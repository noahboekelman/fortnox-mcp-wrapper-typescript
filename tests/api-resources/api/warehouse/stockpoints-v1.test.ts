// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource stockpointsV1', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.api.warehouse.stockpointsV1.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.warehouse.stockpointsV1.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { code: 'x', name: 'x' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.api.warehouse.stockpointsV1.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      code: 'x',
      name: 'x',
      body_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      active: true,
      deliveryAddress: 'deliveryAddress',
      deliveryAddress2: 'deliveryAddress2',
      deliveryCity: 'deliveryCity',
      deliveryCountryCode: 'xxx',
      deliveryName: 'deliveryName',
      deliveryPhone: 'deliveryPhone',
      deliveryZipCode: 'deliveryZipCode',
      stockLocations: [
        {
          code: 'x',
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          name: 'name',
          stockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      usingCompanyAddress: true,
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.api.warehouse.stockpointsV1.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveMulti', async () => {
    const responsePromise = client.api.warehouse.stockpointsV1.retrieveMulti();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveMulti: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.warehouse.stockpointsV1.retrieveMulti(
        { ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'], state: 'ALL' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveStocklocations', async () => {
    const responsePromise = client.api.warehouse.stockpointsV1.retrieveStocklocations('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveStocklocations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.warehouse.stockpointsV1.retrieveStocklocations(
        'id',
        { q: 'q' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveStockpointsV1', async () => {
    const responsePromise = client.api.warehouse.stockpointsV1.retrieveStockpointsV1();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveStockpointsV1: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.warehouse.stockpointsV1.retrieveStockpointsV1(
        { q: 'q', state: 'ALL' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('stockpointsV1: only required params', async () => {
    const responsePromise = client.api.warehouse.stockpointsV1.stockpointsV1({ code: 'x', name: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('stockpointsV1: required and optional params', async () => {
    const response = await client.api.warehouse.stockpointsV1.stockpointsV1({
      code: 'x',
      name: 'x',
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      active: true,
      deliveryAddress: 'deliveryAddress',
      deliveryAddress2: 'deliveryAddress2',
      deliveryCity: 'deliveryCity',
      deliveryCountryCode: 'xxx',
      deliveryName: 'deliveryName',
      deliveryPhone: 'deliveryPhone',
      deliveryZipCode: 'deliveryZipCode',
      stockLocations: [
        {
          code: 'x',
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          name: 'name',
          stockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      usingCompanyAddress: true,
    });
  });
});
