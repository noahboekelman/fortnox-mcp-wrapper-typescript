// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource prices', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.number3.prices.create();
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
      client.number3.prices.create(
        {
          Price: {
            ArticleNumber: 'ArticleNumber',
            PriceList: 'PriceList',
            '@url': '@url',
            Date: '2019-12-27T18:11:19.117Z',
            FromQuantity: 0,
            Percent: 0,
            Price: 0,
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.number3.prices.retrieve(0, {
      PriceList: 'PriceList',
      ArticleNumber: 'ArticleNumber',
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
    const response = await client.number3.prices.retrieve(0, {
      PriceList: 'PriceList',
      ArticleNumber: 'ArticleNumber',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.number3.prices.update(0, {
      PriceList: 'PriceList',
      ArticleNumber: 'ArticleNumber',
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
    const response = await client.number3.prices.update(0, {
      PriceList: 'PriceList',
      ArticleNumber: 'ArticleNumber',
      Price: {
        ArticleNumber: 'ArticleNumber',
        PriceList: 'PriceList',
        '@url': '@url',
        Date: '2019-12-27T18:11:19.117Z',
        FromQuantity: 0,
        Percent: 0,
        Price: 0,
      },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.number3.prices.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.number3.prices.delete(0, {
      PriceList: 'PriceList',
      ArticleNumber: 'ArticleNumber',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.number3.prices.delete(0, {
      PriceList: 'PriceList',
      ArticleNumber: 'ArticleNumber',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveFirst: only required params', async () => {
    const responsePromise = client.number3.prices.retrieveFirst('ArticleNumber', { PriceList: 'PriceList' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveFirst: required and optional params', async () => {
    const response = await client.number3.prices.retrieveFirst('ArticleNumber', { PriceList: 'PriceList' });
  });

  // Prism tests are disabled
  test.skip('retrieveSublist: only required params', async () => {
    const responsePromise = client.number3.prices.retrieveSublist('ArticleNumber', {
      PriceList: 'PriceList',
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
  test.skip('retrieveSublist: required and optional params', async () => {
    const response = await client.number3.prices.retrieveSublist('ArticleNumber', { PriceList: 'PriceList' });
  });

  // Prism tests are disabled
  test.skip('updateFirst: only required params', async () => {
    const responsePromise = client.number3.prices.updateFirst('ArticleNumber', { PriceList: 'PriceList' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateFirst: required and optional params', async () => {
    const response = await client.number3.prices.updateFirst('ArticleNumber', {
      PriceList: 'PriceList',
      Price: {
        ArticleNumber: 'ArticleNumber',
        PriceList: 'PriceList',
        '@url': '@url',
        Date: '2019-12-27T18:11:19.117Z',
        FromQuantity: 0,
        Percent: 0,
        Price: 0,
      },
    });
  });
});
