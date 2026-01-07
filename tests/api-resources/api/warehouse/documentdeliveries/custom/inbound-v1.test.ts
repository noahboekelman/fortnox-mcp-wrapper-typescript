// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inboundV1', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.warehouse.documentdeliveries.custom.inboundV1.retrieve('id', {
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
    const response = await client.api.warehouse.documentdeliveries.custom.inboundV1.retrieve('id', {
      type: 'type',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.warehouse.documentdeliveries.custom.inboundV1.update('id', {
      path_type: 'type',
      date: '2019-12-27',
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
    const response = await client.api.warehouse.documentdeliveries.custom.inboundV1.update('id', {
      path_type: 'type',
      date: '2019-12-27',
      rows: [
        {
          itemId: 'x',
          quantity: 0,
          batch: 'batch',
          costCenterCode: 'x',
          directCost: 0,
          freightCost: 0,
          itemDescription: 'itemDescription',
          itemUnit: 'itemUnit',
          otherCost: 0,
          projectId: 'x',
          rowId: 1,
          stockLocationCode: 'stockLocationCode',
          stockLocationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          stockPointCode: 'stockPointCode',
          stockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      body_id: '269125115713',
      currency: {
        currency: 'xxx',
        rate: 0.000001,
        unit: 1,
      },
      note: 'note',
      body_type: 'type',
      voided: true,
      warehouseReady: true,
    });
  });

  // Prism tests are disabled
  test.skip('updateRelease: only required params', async () => {
    const responsePromise = client.api.warehouse.documentdeliveries.custom.inboundV1.updateRelease('id', {
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
    const response = await client.api.warehouse.documentdeliveries.custom.inboundV1.updateRelease('id', {
      type: 'type',
    });
  });

  // Prism tests are disabled
  test.skip('updateVoid: only required params', async () => {
    const responsePromise = client.api.warehouse.documentdeliveries.custom.inboundV1.updateVoid('id', {
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
    const response = await client.api.warehouse.documentdeliveries.custom.inboundV1.updateVoid('id', {
      type: 'type',
      force: true,
    });
  });
});
