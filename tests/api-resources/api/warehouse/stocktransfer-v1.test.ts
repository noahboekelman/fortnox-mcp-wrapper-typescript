// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource stocktransferV1', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.api.warehouse.stocktransferV1.retrieve(0);
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
    const responsePromise = client.api.warehouse.stocktransferV1.update(0, {
      rows: [
        {
          fromStockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          itemId: 'x',
          requestedQuantity: 0.01,
          toStockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
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
    const response = await client.api.warehouse.stocktransferV1.update(0, {
      rows: [
        {
          fromStockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          itemId: 'x',
          requestedQuantity: 0.01,
          toStockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          fromStockLocationCode: 'fromStockLocationCode',
          fromStockLocationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          fromStockLocationName: 'fromStockLocationName',
          fromStockPointCode: 'fromStockPointCode',
          fromStockPointName: 'fromStockPointName',
          itemDescription: 'itemDescription',
          itemUnit: 'itemUnit',
          quantity: 0,
          rowNum: 0,
          toStockLocationCode: 'toStockLocationCode',
          toStockLocationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          toStockLocationName: 'toStockLocationName',
          toStockPointCode: 'toStockPointCode',
          toStockPointName: 'toStockPointName',
        },
      ],
      body_id: 1,
      note: 'note',
      released: true,
      transferDate: '2019-12-27',
      version: 0,
      voided: true,
    });
  });

  // Prism tests are disabled
  test.skip('stocktransferV1: only required params', async () => {
    const responsePromise = client.api.warehouse.stocktransferV1.stocktransferV1({
      rows: [
        {
          fromStockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          itemId: 'x',
          requestedQuantity: 0.01,
          toStockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
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
  test.skip('stocktransferV1: required and optional params', async () => {
    const response = await client.api.warehouse.stocktransferV1.stocktransferV1({
      rows: [
        {
          fromStockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          itemId: 'x',
          requestedQuantity: 0.01,
          toStockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          fromStockLocationCode: 'fromStockLocationCode',
          fromStockLocationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          fromStockLocationName: 'fromStockLocationName',
          fromStockPointCode: 'fromStockPointCode',
          fromStockPointName: 'fromStockPointName',
          itemDescription: 'itemDescription',
          itemUnit: 'itemUnit',
          quantity: 0,
          rowNum: 0,
          toStockLocationCode: 'toStockLocationCode',
          toStockLocationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          toStockLocationName: 'toStockLocationName',
          toStockPointCode: 'toStockPointCode',
          toStockPointName: 'toStockPointName',
        },
      ],
      id: 1,
      note: 'note',
      released: true,
      transferDate: '2019-12-27',
      version: 0,
      voided: true,
    });
  });

  // Prism tests are disabled
  test.skip('updateRelease', async () => {
    const responsePromise = client.api.warehouse.stocktransferV1.updateRelease(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateVoid', async () => {
    const responsePromise = client.api.warehouse.stocktransferV1.updateVoid(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateVoid: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.warehouse.stocktransferV1.updateVoid(
        0,
        { force: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });
});
