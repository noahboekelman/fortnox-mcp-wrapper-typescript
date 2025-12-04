// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rows', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.api.warehouse.stocktakingV1.rows.create(0);
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
      client.api.warehouse.stocktakingV1.rows.create(
        0,
        {
          body: [
            {
              id: 'id',
              countedBy: 'countedBy',
              currentRowNo: 0,
              hasPostReleaseStockChanges: true,
              itemId: 'itemId',
              stockLocationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              stockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              stockTakenQuantity: 0,
              stockTakingId: 0,
              stockTakingRowId: 'stockTakingRowId',
              totalQuantityInStock: 0,
            },
          ],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.api.warehouse.stocktakingV1.rows.list(0);
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
      client.api.warehouse.stocktakingV1.rows.list(
        0,
        {
          excludeZeroBalanceItems: true,
          itemDescriptionSearch: 'itemDescriptionSearch',
          itemIds: ['string'],
          itemIdSearch: 'itemIdSearch',
          secondaryorder: 'secondaryorder',
          secondarysortby: 'secondarysortby',
          startingItemId: 'startingItemId',
          startingRowNo: 0,
          stateFilter: 'all',
          stockLocationIds: ['string'],
          stockPointIds: ['string'],
          supplierNumbers: ['string'],
          transactionDate: '2019-12-27',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.api.warehouse.stocktakingV1.rows.delete('rowId', { id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.api.warehouse.stocktakingV1.rows.delete('rowId', { id: 0 });
  });

  // Prism tests are disabled
  test.skip('deleteAll', async () => {
    const responsePromise = client.api.warehouse.stocktakingV1.rows.deleteAll(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteAll: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.warehouse.stocktakingV1.rows.deleteAll(
        0,
        {
          excludeZeroBalanceItems: true,
          itemDescriptionSearch: 'itemDescriptionSearch',
          itemIds: ['string'],
          itemIdSearch: 'itemIdSearch',
          stockLocationIds: ['string'],
          stockPointIds: ['string'],
          supplierNumbers: ['string'],
          transactionDate: '2019-12-27',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });
});
