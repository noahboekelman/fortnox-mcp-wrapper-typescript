// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource productionordersV1', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.api.warehouse.productionordersV1.retrieve(0);
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
    const responsePromise = client.api.warehouse.productionordersV1.update(0, {
      productionState: 'registered',
      quantity: 0.01,
      startDate: '2019-12-27',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.api.warehouse.productionordersV1.update(0, {
      productionState: 'registered',
      quantity: 0.01,
      startDate: '2019-12-27',
      body_id: 0,
      batch: 'batch',
      costCenterCode: 'costCenterCode',
      documentState: 'completed',
      inboundStockLocationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      inboundStockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      itemDescription: 'itemDescription',
      itemId: 'itemId',
      itemUnit: 'itemUnit',
      note: 'note',
      outboundStockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      packageItems: [
        {
          itemId: 'itemId',
          quantityRequired: 0,
          itemDescription: 'itemDescription',
          itemUnit: 'itemUnit',
          quantityReserved: 0,
          totalQuantityRequired: 0,
        },
      ],
      productionDate: '2019-12-27',
      projectId: 'projectId',
    });
  });

  // Prism tests are disabled
  test.skip('productionordersV1: only required params', async () => {
    const responsePromise = client.api.warehouse.productionordersV1.productionordersV1({
      productionState: 'registered',
      quantity: 0.01,
      startDate: '2019-12-27',
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
  test.skip('productionordersV1: required and optional params', async () => {
    const response = await client.api.warehouse.productionordersV1.productionordersV1({
      productionState: 'registered',
      quantity: 0.01,
      startDate: '2019-12-27',
      id: 0,
      batch: 'batch',
      costCenterCode: 'costCenterCode',
      documentState: 'completed',
      inboundStockLocationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      inboundStockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      itemDescription: 'itemDescription',
      itemId: 'itemId',
      itemUnit: 'itemUnit',
      note: 'note',
      outboundStockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      packageItems: [
        {
          itemId: 'itemId',
          quantityRequired: 0,
          itemDescription: 'itemDescription',
          itemUnit: 'itemUnit',
          quantityReserved: 0,
          totalQuantityRequired: 0,
        },
      ],
      productionDate: '2019-12-27',
      projectId: 'projectId',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveProductionordersV1', async () => {
    const responsePromise = client.api.warehouse.productionordersV1.retrieveProductionordersV1();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveProductionordersV1: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.warehouse.productionordersV1.retrieveProductionordersV1(
        { itemId: 'itemId', state: 'all' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });
});
