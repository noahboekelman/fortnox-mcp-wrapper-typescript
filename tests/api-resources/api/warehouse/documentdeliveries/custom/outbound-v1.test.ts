// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource outboundV1', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.warehouse.documentdeliveries.custom.outboundV1.retrieve('id', {
      type: 'type',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.api.warehouse.documentdeliveries.custom.outboundV1.retrieve('id', {
      type: 'type',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.warehouse.documentdeliveries.custom.outboundV1.update('id', {
      type: 'type',
      date: '2019-12-27',
      deliveryState: 'registration',
      rows: [{ itemId: 'x', quantity: 0 }],
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
    const response = await client.api.warehouse.documentdeliveries.custom.outboundV1.update('id', {
      type: 'type',
      date: '2019-12-27',
      deliveryState: 'registration',
      rows: [
        {
          itemId: 'x',
          quantity: 0,
          costCenterCode: 'x',
          deliveredQuantity: 0,
          forcedQuantity: 0,
          itemDescription: 'itemDescription',
          itemUnit: 'itemUnit',
          projectId: 'x',
          reservedQuantity: 0,
          rowId: 1,
          stockLocationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          stockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      body_id: '269125115713',
      averageCosts: [
        { averageCostInSEK: 0, itemId: 'itemId', stockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
      ],
      forcedDelivery: true,
      note: 'note',
      referenceType: 'referenceType',
      voided: true,
      warehouseReady: true,
    });
  });

  // Prism tests are disabled
  test.skip('updateRelease: only required params', async () => {
    const responsePromise = client.api.warehouse.documentdeliveries.custom.outboundV1.updateRelease('id', {
      type: 'type',
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
  test.skip('updateRelease: required and optional params', async () => {
    const response = await client.api.warehouse.documentdeliveries.custom.outboundV1.updateRelease('id', {
      type: 'type',
    });
  });

  // Prism tests are disabled
  test.skip('updateVoid: only required params', async () => {
    const responsePromise = client.api.warehouse.documentdeliveries.custom.outboundV1.updateVoid('id', {
      type: 'type',
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
  test.skip('updateVoid: required and optional params', async () => {
    const response = await client.api.warehouse.documentdeliveries.custom.outboundV1.updateVoid('id', {
      type: 'type',
      force: true,
    });
  });
});
