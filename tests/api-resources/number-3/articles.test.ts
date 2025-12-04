// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource articles', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.number3.articles.create();
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
      client.number3.articles.create(
        {
          Article: {
            Description: 'x',
            '@url': '@url',
            Active: true,
            ArticleNumber: 'ArticleNumber',
            Bulky: true,
            ConstructionAccount: 1000,
            CostCalculationMethod: 'CostCalculationMethod',
            DefaultStockLocation: 'DefaultStockLocation',
            DefaultStockPoint: 'DefaultStockPoint',
            Depth: 0,
            DirectCost: 0,
            DisposableQuantity: 0,
            EAN: 'EAN',
            EUAccount: 1000,
            EUVATAccount: 1000,
            Expired: true,
            ExportAccount: 1000,
            FreightCost: 0,
            Height: 0,
            Housework: true,
            HouseworkType: 'CONSTRUCTION',
            Manufacturer: 'Manufacturer',
            ManufacturerArticleNumber: 'ManufacturerArticleNumber',
            Note: 'Note',
            OtherCost: 0,
            PurchaseAccount: 1000,
            PurchasePrice: 0,
            QuantityInStock: 0,
            ReservedQuantity: 0,
            SalesAccount: 1000,
            SalesPrice: 0,
            StockAccount: 0,
            StockChangeAccount: 0,
            StockGoods: true,
            StockPlace: 'StockPlace',
            StockValue: 0,
            StockWarning: 0,
            SupplierName: 'SupplierName',
            SupplierNumber: 'SupplierNumber',
            Type: 'STOCK',
            Unit: 'Unit',
            VAT: 0,
            WebshopArticle: true,
            Weight: 0,
            Width: 0,
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.number3.articles.retrieve(0);
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
    const responsePromise = client.number3.articles.update(0);
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
      client.number3.articles.update(
        0,
        {
          Article: {
            Description: 'x',
            '@url': '@url',
            Active: true,
            ArticleNumber: 'ArticleNumber',
            Bulky: true,
            ConstructionAccount: 1000,
            CostCalculationMethod: 'CostCalculationMethod',
            DefaultStockLocation: 'DefaultStockLocation',
            DefaultStockPoint: 'DefaultStockPoint',
            Depth: 0,
            DirectCost: 0,
            DisposableQuantity: 0,
            EAN: 'EAN',
            EUAccount: 1000,
            EUVATAccount: 1000,
            Expired: true,
            ExportAccount: 1000,
            FreightCost: 0,
            Height: 0,
            Housework: true,
            HouseworkType: 'CONSTRUCTION',
            Manufacturer: 'Manufacturer',
            ManufacturerArticleNumber: 'ManufacturerArticleNumber',
            Note: 'Note',
            OtherCost: 0,
            PurchaseAccount: 1000,
            PurchasePrice: 0,
            QuantityInStock: 0,
            ReservedQuantity: 0,
            SalesAccount: 1000,
            SalesPrice: 0,
            StockAccount: 0,
            StockChangeAccount: 0,
            StockGoods: true,
            StockPlace: 'StockPlace',
            StockValue: 0,
            StockWarning: 0,
            SupplierName: 'SupplierName',
            SupplierNumber: 'SupplierNumber',
            Type: 'STOCK',
            Unit: 'Unit',
            VAT: 0,
            WebshopArticle: true,
            Weight: 0,
            Width: 0,
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.number3.articles.list();
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
      client.number3.articles.list(
        {
          articlenumber: 'articlenumber',
          description: 'description',
          ean: 'ean',
          filter: 'active',
          lastmodified: 'lastmodified',
          manufacturer: 'manufacturer',
          manufacturerarticlenumber: 'manufacturerarticlenumber',
          sortby: 'articlenumber',
          suppliernumber: 'suppliernumber',
          webshop: 'webshop',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.number3.articles.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
