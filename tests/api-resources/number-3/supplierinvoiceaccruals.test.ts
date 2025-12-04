// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource supplierinvoiceaccruals', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.number3.supplierinvoiceaccruals.create({
      SupplierInvoiceAccrual: {
        AccrualAccount: 1000,
        CostAccount: 1000,
        EndDate: '2019-12-27',
        Period: 'MONTHLY',
        StartDate: '2019-12-27',
        SupplierInvoiceAccrualRows: [{}, {}],
        SupplierInvoiceNumber: 0,
        Times: 0,
        Total: 0,
      },
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
    const response = await client.number3.supplierinvoiceaccruals.create({
      SupplierInvoiceAccrual: {
        AccrualAccount: 1000,
        CostAccount: 1000,
        EndDate: '2019-12-27',
        Period: 'MONTHLY',
        StartDate: '2019-12-27',
        SupplierInvoiceAccrualRows: [
          {
            Account: 0,
            CostCenter: 'CostCenter',
            Credit: 0,
            Debit: 0,
            Project: 'Project',
            TransactionInformation: 'TransactionInformation',
          },
          {
            Account: 0,
            CostCenter: 'CostCenter',
            Credit: 0,
            Debit: 0,
            Project: 'Project',
            TransactionInformation: 'TransactionInformation',
          },
        ],
        SupplierInvoiceNumber: 0,
        Times: 0,
        Total: 0,
        '@url': '@url',
        Description: 'Description',
        VATIncluded: true,
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.number3.supplierinvoiceaccruals.retrieve(0);
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
    const responsePromise = client.number3.supplierinvoiceaccruals.update(0, {
      SupplierInvoiceAccrual: {
        AccrualAccount: 1000,
        CostAccount: 1000,
        EndDate: '2019-12-27',
        Period: 'MONTHLY',
        StartDate: '2019-12-27',
        SupplierInvoiceAccrualRows: [{}, {}],
        SupplierInvoiceNumber: 0,
        Times: 0,
        Total: 0,
      },
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
    const response = await client.number3.supplierinvoiceaccruals.update(0, {
      SupplierInvoiceAccrual: {
        AccrualAccount: 1000,
        CostAccount: 1000,
        EndDate: '2019-12-27',
        Period: 'MONTHLY',
        StartDate: '2019-12-27',
        SupplierInvoiceAccrualRows: [
          {
            Account: 0,
            CostCenter: 'CostCenter',
            Credit: 0,
            Debit: 0,
            Project: 'Project',
            TransactionInformation: 'TransactionInformation',
          },
          {
            Account: 0,
            CostCenter: 'CostCenter',
            Credit: 0,
            Debit: 0,
            Project: 'Project',
            TransactionInformation: 'TransactionInformation',
          },
        ],
        SupplierInvoiceNumber: 0,
        Times: 0,
        Total: 0,
        '@url': '@url',
        Description: 'Description',
        VATIncluded: true,
      },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.number3.supplierinvoiceaccruals.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.number3.supplierinvoiceaccruals.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
