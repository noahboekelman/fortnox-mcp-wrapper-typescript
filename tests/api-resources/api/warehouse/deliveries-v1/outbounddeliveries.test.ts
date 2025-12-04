// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource outbounddeliveries', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.api.warehouse.deliveriesV1.outbounddeliveries.create({
      date: '2019-12-27',
      rows: [{ itemId: 'x', quantity: 0.01 }],
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
    const response = await client.api.warehouse.deliveriesV1.outbounddeliveries.create({
      date: '2019-12-27',
      rows: [
        {
          itemId: 'x',
          quantity: 0.01,
          costCenterCode: 'costCenterCode',
          deliveredQuantity: 0,
          forcedQuantity: 0,
          itemDescription: 'itemDescription',
          itemUnit: 'itemUnit',
          projectId: 'projectId',
          stockLocationCode: 'stockLocationCode',
          stockLocationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          stockLocationName: 'stockLocationName',
          stockPointCode: 'stockPointCode',
          stockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          stockPointName: 'stockPointName',
        },
      ],
      id: 0,
      note: 'note',
      released: true,
      stockPointCode: 'stockPointCode',
      stockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      stockPointName: 'stockPointName',
      voided: true,
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.api.warehouse.deliveriesV1.outbounddeliveries.retrieve(0);
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
    const responsePromise = client.api.warehouse.deliveriesV1.outbounddeliveries.update(0, {
      date: '2019-12-27',
      rows: [{ itemId: 'x', quantity: 0.01 }],
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
    const response = await client.api.warehouse.deliveriesV1.outbounddeliveries.update(0, {
      date: '2019-12-27',
      rows: [
        {
          itemId: 'x',
          quantity: 0.01,
          costCenterCode: 'costCenterCode',
          deliveredQuantity: 0,
          forcedQuantity: 0,
          itemDescription: 'itemDescription',
          itemUnit: 'itemUnit',
          projectId: 'projectId',
          stockLocationCode: 'stockLocationCode',
          stockLocationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          stockLocationName: 'stockLocationName',
          stockPointCode: 'stockPointCode',
          stockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          stockPointName: 'stockPointName',
        },
      ],
      body_id: 0,
      note: 'note',
      released: true,
      stockPointCode: 'stockPointCode',
      stockPointId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      stockPointName: 'stockPointName',
      voided: true,
    });
  });

  // Prism tests are disabled
  test.skip('updateRelease', async () => {
    const responsePromise = client.api.warehouse.deliveriesV1.outbounddeliveries.updateRelease(0);
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
    const responsePromise = client.api.warehouse.deliveriesV1.outbounddeliveries.updateVoid(0);
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
      client.api.warehouse.deliveriesV1.outbounddeliveries.updateVoid(
        0,
        { customVoidDate: '2019-12-27' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });
});
