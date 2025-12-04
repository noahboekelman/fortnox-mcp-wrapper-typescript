// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource purchaseordersV1', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.api.warehouse.purchaseordersV1.retrieve(0);
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
      client.api.warehouse.purchaseordersV1.retrieve(
        0,
        { ignoreIncomingGoodsId: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.warehouse.purchaseordersV1.update(0, {
      currencyCode: 'xxx',
      currencyRate: 0,
      deliveryAddress: 'x',
      deliveryCity: 'x',
      deliveryName: 'x',
      deliveryZipCode: 'x',
      orderDate: '2019-12-27',
      paymentTermsCode: 'paymentTermsCode',
      supplierNumber: 'supplierNumber',
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
    const response = await client.api.warehouse.purchaseordersV1.update(0, {
      currencyCode: 'xxx',
      currencyRate: 0,
      deliveryAddress: 'x',
      deliveryCity: 'x',
      deliveryName: 'x',
      deliveryZipCode: 'x',
      orderDate: '2019-12-27',
      paymentTermsCode: 'paymentTermsCode',
      supplierNumber: 'supplierNumber',
      body_id: 0,
      confirmationEmail: 'confirmationEmail',
      costCenterCode: 'costCenterCode',
      currencyUnit: 1,
      customerId: 'customerId',
      customerName: 'customerName',
      customerNumber: 'customerNumber',
      deliveryAddress2: 'deliveryAddress2',
      deliveryCountryCode: 'xxx',
      deliveryDate: '2019-12-27',
      dropship: true,
      internalReference: 'internalReference',
      languageCode: 'xxx',
      manuallyCompleted: true,
      messageToSupplier: 'messageToSupplier',
      note: 'note',
      orderValue: 0,
      orderValueInSEK: 0,
      ourReference: 'ourReference',
      outboundDocumentReference: { id: 'id', type: 'type' },
      projectId: 'projectId',
      purchaseOrderState: 'NOT_SENT',
      purchaseType: 'WAREHOUSE',
      responseState: 'NOT_SENT',
      rows: [
        {
          currencyCode: 'xxx',
          itemId: 'x',
          orderedQuantity: 0,
          remainingOrderedQuantity: 0,
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          backOrderQuantity: 0,
          costCenterCode: 'costCenterCode',
          isStockItem: true,
          itemDescription: 'itemDescription',
          itemUnit: 'itemUnit',
          notes: [
            {
              note: 'note',
              purchaseOrderId: 0,
              purchaseOrderRowId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              rowNum: 0,
            },
          ],
          price: 0,
          projectId: 'projectId',
          purchaseOrderId: 0,
          receivedQuantity: 0,
          rowNum: 0,
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
      supplier: 'supplier',
      supplierAddress: 'supplierAddress',
      supplierAddress2: 'supplierAddress2',
      supplierCity: 'supplierCity',
      supplierCountryCode: 'xxx',
      supplierEmail: 'supplierEmail',
      supplierName: 'supplierName',
      supplierPostCode: 'supplierPostCode',
      totalReceivedQuantity: 0,
      translatedResponseState: 'translatedResponseState',
      voided: true,
      yourReference: 'yourReference',
    });
  });

  // Prism tests are disabled
  test.skip('purchaseordersV1: only required params', async () => {
    const responsePromise = client.api.warehouse.purchaseordersV1.purchaseordersV1({
      currencyCode: 'xxx',
      currencyRate: 0,
      deliveryAddress: 'x',
      deliveryCity: 'x',
      deliveryName: 'x',
      deliveryZipCode: 'x',
      orderDate: '2019-12-27',
      paymentTermsCode: 'paymentTermsCode',
      supplierNumber: 'supplierNumber',
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
  test.skip('purchaseordersV1: required and optional params', async () => {
    const response = await client.api.warehouse.purchaseordersV1.purchaseordersV1({
      currencyCode: 'xxx',
      currencyRate: 0,
      deliveryAddress: 'x',
      deliveryCity: 'x',
      deliveryName: 'x',
      deliveryZipCode: 'x',
      orderDate: '2019-12-27',
      paymentTermsCode: 'paymentTermsCode',
      supplierNumber: 'supplierNumber',
      id: 0,
      confirmationEmail: 'confirmationEmail',
      costCenterCode: 'costCenterCode',
      currencyUnit: 1,
      customerId: 'customerId',
      customerName: 'customerName',
      customerNumber: 'customerNumber',
      deliveryAddress2: 'deliveryAddress2',
      deliveryCountryCode: 'xxx',
      deliveryDate: '2019-12-27',
      dropship: true,
      internalReference: 'internalReference',
      languageCode: 'xxx',
      manuallyCompleted: true,
      messageToSupplier: 'messageToSupplier',
      note: 'note',
      orderValue: 0,
      orderValueInSEK: 0,
      ourReference: 'ourReference',
      outboundDocumentReference: { id: 'id', type: 'type' },
      projectId: 'projectId',
      purchaseOrderState: 'NOT_SENT',
      purchaseType: 'WAREHOUSE',
      responseState: 'NOT_SENT',
      rows: [
        {
          currencyCode: 'xxx',
          itemId: 'x',
          orderedQuantity: 0,
          remainingOrderedQuantity: 0,
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          backOrderQuantity: 0,
          costCenterCode: 'costCenterCode',
          isStockItem: true,
          itemDescription: 'itemDescription',
          itemUnit: 'itemUnit',
          notes: [
            {
              note: 'note',
              purchaseOrderId: 0,
              purchaseOrderRowId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              rowNum: 0,
            },
          ],
          price: 0,
          projectId: 'projectId',
          purchaseOrderId: 0,
          receivedQuantity: 0,
          rowNum: 0,
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
      supplier: 'supplier',
      supplierAddress: 'supplierAddress',
      supplierAddress2: 'supplierAddress2',
      supplierCity: 'supplierCity',
      supplierCountryCode: 'xxx',
      supplierEmail: 'supplierEmail',
      supplierName: 'supplierName',
      supplierPostCode: 'supplierPostCode',
      totalReceivedQuantity: 0,
      translatedResponseState: 'translatedResponseState',
      voided: true,
      yourReference: 'yourReference',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveCsv', async () => {
    const responsePromise = client.api.warehouse.purchaseordersV1.retrieveCsv();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveCsv: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.warehouse.purchaseordersV1.retrieveCsv(
        {
          internalReference: 'internalReference',
          itemId: 'itemId',
          note: 'note',
          purchaseType: 'WAREHOUSE',
          q: 'q',
          showPurchaseTypeColumn: true,
          state: 'NOT_SENT',
          supplierNumber: 'supplierNumber',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveMatches', async () => {
    const responsePromise = client.api.warehouse.purchaseordersV1.retrieveMatches(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveNotes', async () => {
    const responsePromise = client.api.warehouse.purchaseordersV1.retrieveNotes(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrievePurchaseordersV1', async () => {
    const responsePromise = client.api.warehouse.purchaseordersV1.retrievePurchaseordersV1();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrievePurchaseordersV1: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.warehouse.purchaseordersV1.retrievePurchaseordersV1(
        {
          internalReference: 'internalReference',
          itemId: 'itemId',
          note: 'note',
          purchaseType: 'WAREHOUSE',
          q: 'q',
          state: 'NOT_SENT',
          supplierNumber: 'supplierNumber',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('send: only required params', async () => {
    const responsePromise = client.api.warehouse.purchaseordersV1.send(0, {
      body: 'body',
      receiver: 'receiver',
      replyTo: 'replyTo',
      subject: 'subject',
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
  test.skip('send: required and optional params', async () => {
    const response = await client.api.warehouse.purchaseordersV1.send(0, {
      body: 'body',
      receiver: 'receiver',
      replyTo: 'replyTo',
      subject: 'subject',
      bodyAsHtml: 'bodyAsHtml',
      receiverCopy: 'receiverCopy',
      receiverSecretCopy: 'receiverSecretCopy',
      senderName: 'senderName',
    });
  });

  // Prism tests are disabled
  test.skip('sendpurchaseorders', async () => {
    const responsePromise = client.api.warehouse.purchaseordersV1.sendpurchaseorders();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('sendpurchaseorders: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.warehouse.purchaseordersV1.sendpurchaseorders(
        { body: [0] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('updateComplete', async () => {
    const responsePromise = client.api.warehouse.purchaseordersV1.updateComplete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateDropshipcomplete', async () => {
    const responsePromise = client.api.warehouse.purchaseordersV1.updateDropshipcomplete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updatePartial', async () => {
    const responsePromise = client.api.warehouse.purchaseordersV1.updatePartial(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updatePartial: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.warehouse.purchaseordersV1.updatePartial(
        0,
        {
          deliveryDate: '2019-12-27',
          internalReference: 'internalReference',
          messageToSupplier: 'messageToSupplier',
          note: 'note',
          supplierName: 'supplierName',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('updateVoid', async () => {
    const responsePromise = client.api.warehouse.purchaseordersV1.updateVoid(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
