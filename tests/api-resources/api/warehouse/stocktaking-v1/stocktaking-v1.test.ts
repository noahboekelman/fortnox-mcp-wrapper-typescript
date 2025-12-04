// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource stocktakingV1', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.api.warehouse.stocktakingV1.retrieve(0);
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
    const responsePromise = client.api.warehouse.stocktakingV1.update(0, {
      name: 'x',
      responsible: 'x',
      state: 'S?oC"voided',
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
    const response = await client.api.warehouse.stocktakingV1.update(0, {
      name: 'x',
      responsible: 'x',
      state: 'S?oC"voided',
      body_id: 0,
      costCenterCode: 'costCenterCode',
      date: '2019-12-27',
      projectId: 'projectId',
      rows: [
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
      sortingId: 0,
      sortParams: {
        primarySort: 'primarySort',
        primarySortOrder: 'primarySortOrder',
        secondarySort: 'secondarySort',
        secondarySortOrder: 'secondarySortOrder',
      },
      usingStockPoints: true,
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.api.warehouse.stocktakingV1.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('addrows', async () => {
    const responsePromise = client.api.warehouse.stocktakingV1.addrows(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('addrows: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.warehouse.stocktakingV1.addrows(
        0,
        {
          excludeNonInboundItems: true,
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

  // Prism tests are disabled
  test.skip('retrieveCandidates', async () => {
    const responsePromise = client.api.warehouse.stocktakingV1.retrieveCandidates(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveCandidates: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.warehouse.stocktakingV1.retrieveCandidates(
        0,
        {
          excludeZeroBalanceItems: true,
          includeNonInboundItems: true,
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

  // Prism tests are disabled
  test.skip('retrieveStocktakingV1', async () => {
    const responsePromise = client.api.warehouse.stocktakingV1.retrieveStocktakingV1();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveStocktakingV1: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.warehouse.stocktakingV1.retrieveStocktakingV1(
        { itemId: 'itemId', state: 'all' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('stocktakingV1: only required params', async () => {
    const responsePromise = client.api.warehouse.stocktakingV1.stocktakingV1({
      name: 'x',
      responsible: 'x',
      state: 'S?oC"voided',
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
  test.skip('stocktakingV1: required and optional params', async () => {
    const response = await client.api.warehouse.stocktakingV1.stocktakingV1({
      name: 'x',
      responsible: 'x',
      state: 'S?oC"voided',
      id: 0,
      costCenterCode: 'costCenterCode',
      date: '2019-12-27',
      projectId: 'projectId',
      rows: [
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
      sortingId: 0,
      sortParams: {
        primarySort: 'primarySort',
        primarySortOrder: 'primarySortOrder',
        secondarySort: 'secondarySort',
        secondarySortOrder: 'secondarySortOrder',
      },
      usingStockPoints: true,
    });
  });

  // Prism tests are disabled
  test.skip('updateRelease', async () => {
    const responsePromise = client.api.warehouse.stocktakingV1.updateRelease(0);
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
    const responsePromise = client.api.warehouse.stocktakingV1.updateVoid(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
