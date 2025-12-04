// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contracttemplates', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.number3.contracttemplates.create();
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
      client.number3.contracttemplates.create(
        {
          ContractTemplate: {
            TemplateName: 'x',
            '@url': '@url',
            AdministrationFee: 0,
            Continuous: true,
            ContractLength: 1,
            Freight: 0,
            InvoiceInterval: 1,
            InvoiceRows: [
              {
                AccountNumber: 0,
                ArticleNumber: 'ArticleNumber',
                CostCenter: 'CostCenter',
                DeliveredQuantity: 'DeliveredQuantity',
                Description: 'Description',
                Discount: 0,
                DiscountType: 'PERCENT',
                Price: 0,
                Project: 'Project',
                Unit: 'Unit',
              },
            ],
            OurReference: 'OurReference',
            PrintTemplate: 'PrintTemplate',
            Remarks: 'Remarks',
            TemplateNumber: 0,
            TermsOfDelivery: 'TermsOfDelivery',
            TermsOfPayment: 'TermsOfPayment',
            WayOfDelivery: 'WayOfDelivery',
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.number3.contracttemplates.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.number3.contracttemplates.update(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.number3.contracttemplates.update(
        0,
        {
          ContractTemplate: {
            TemplateName: 'x',
            '@url': '@url',
            AdministrationFee: 0,
            Continuous: true,
            ContractLength: 1,
            Freight: 0,
            InvoiceInterval: 1,
            InvoiceRows: [
              {
                AccountNumber: 0,
                ArticleNumber: 'ArticleNumber',
                CostCenter: 'CostCenter',
                DeliveredQuantity: 'DeliveredQuantity',
                Description: 'Description',
                Discount: 0,
                DiscountType: 'PERCENT',
                Price: 0,
                Project: 'Project',
                Unit: 'Unit',
              },
            ],
            OurReference: 'OurReference',
            PrintTemplate: 'PrintTemplate',
            Remarks: 'Remarks',
            TemplateNumber: 0,
            TermsOfDelivery: 'TermsOfDelivery',
            TermsOfPayment: 'TermsOfPayment',
            WayOfDelivery: 'WayOfDelivery',
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.number3.contracttemplates.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
