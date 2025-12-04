// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource incominggoodsV1', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.api.warehouse.incominggoodsV1.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.warehouse.incominggoodsV1.retrieve(
        0,
        { ignoreSupplierInvoiceId: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.warehouse.incominggoodsV1.update(0, { deliveryNoteId: 'x' });
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
    const response = await client.api.warehouse.incominggoodsV1.update(0, {
      deliveryNoteId: 'x',
      body_id: 0,
      completed: true,
      costCenterCode: 'costCenterCode',
      date: '2019-12-27',
      hasDeliveryNote: true,
      note: 'note',
      projectId: 'projectId',
      released: true,
      rows: [
        {
          backOrderQuantity: 0,
          invoicedQuantity: 0,
          itemId: 'x',
          orderedQuantity: 0,
          receivedQuantity: 0,
          takenQuantity: 0,
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          batch: 'batch',
          costCenterCode: 'costCenterCode',
          directCost: 0,
          isStockItem: true,
          itemDescription: 'itemDescription',
          itemUnit: 'itemUnit',
          projectId: 'projectId',
          purchaseOrderId: 0,
          purchaseOrderRowId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          remainingOrderedQuantity: 0,
          rowOrder: 0,
          stockLocationCode: 'stockLocationCode',
          stockLocationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          stockLocationName: 'stockLocationName',
          stockPointCode: 'stockPointCode',
          stockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          stockPointName: 'stockPointName',
        },
      ],
      stockPointCode: 'stockPointCode',
      stockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      stockPointName: 'stockPointName',
      supplierName: 'supplierName',
      supplierNumber: 'supplierNumber',
      voided: true,
    });
  });

  // Prism tests are disabled
  test.skip('incominggoodsV1: only required params', async () => {
    const responsePromise = client.api.warehouse.incominggoodsV1.incominggoodsV1({ deliveryNoteId: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('incominggoodsV1: required and optional params', async () => {
    const response = await client.api.warehouse.incominggoodsV1.incominggoodsV1({
      deliveryNoteId: 'x',
      id: 0,
      completed: true,
      costCenterCode: 'costCenterCode',
      date: '2019-12-27',
      hasDeliveryNote: true,
      note: 'note',
      projectId: 'projectId',
      released: true,
      rows: [
        {
          backOrderQuantity: 0,
          invoicedQuantity: 0,
          itemId: 'x',
          orderedQuantity: 0,
          receivedQuantity: 0,
          takenQuantity: 0,
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          batch: 'batch',
          costCenterCode: 'costCenterCode',
          directCost: 0,
          isStockItem: true,
          itemDescription: 'itemDescription',
          itemUnit: 'itemUnit',
          projectId: 'projectId',
          purchaseOrderId: 0,
          purchaseOrderRowId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          remainingOrderedQuantity: 0,
          rowOrder: 0,
          stockLocationCode: 'stockLocationCode',
          stockLocationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          stockLocationName: 'stockLocationName',
          stockPointCode: 'stockPointCode',
          stockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          stockPointName: 'stockPointName',
        },
      ],
      stockPointCode: 'stockPointCode',
      stockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      stockPointName: 'stockPointName',
      supplierName: 'supplierName',
      supplierNumber: 'supplierNumber',
      voided: true,
    });
  });

  // Prism tests are disabled
  test.skip('retrieveIncominggoodsV1', async () => {
    const responsePromise = client.api.warehouse.incominggoodsV1.retrieveIncominggoodsV1();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveIncominggoodsV1: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.warehouse.incominggoodsV1.retrieveIncominggoodsV1(
        {
          completed: true,
          deliveryNote: 'deliveryNote',
          itemId: 'itemId',
          note: 'note',
          q: 'q',
          released: true,
          supplierNumber: 'supplierNumber',
          voided: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('updateCompleted', async () => {
    const responsePromise = client.api.warehouse.incominggoodsV1.updateCompleted(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateCompleted: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.warehouse.incominggoodsV1.updateCompleted(
        0,
        { body: 'body' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('updateRelease', async () => {
    const responsePromise = client.api.warehouse.incominggoodsV1.updateRelease(0);
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
    const responsePromise = client.api.warehouse.incominggoodsV1.updateVoid(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
