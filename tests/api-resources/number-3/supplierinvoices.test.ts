// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource supplierinvoices', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.number3.supplierinvoices.create();
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
      client.number3.supplierinvoices.create(
        {
          SupplierInvoice: {
            SupplierNumber: 'SupplierNumber',
            '@url': '@url',
            AccountingMethod: 'ACCRUAL',
            AdministrationFee: 'AdministrationFee',
            Balance: 'Balance',
            Booked: true,
            Cancelled: true,
            Comments: 'Comments',
            CostCenter: 'CostCenter',
            Credit: true,
            CreditReference: 0,
            Currency: 'Currency',
            CurrencyRate: 'CurrencyRate',
            CurrencyUnit: 0,
            DisablePaymentFile: true,
            DueDate: '2019-12-27',
            ExternalInvoiceNumber: 'ExternalInvoiceNumber',
            ExternalInvoiceSeries: 'ExternalInvoiceSeries',
            FinalPayDate: '2019-12-27',
            Freight: 'Freight',
            GivenNumber: 'GivenNumber',
            InvoiceDate: '2019-12-27',
            InvoiceNumber: 'InvoiceNumber',
            OCR: 'OCR',
            OurReference: 'OurReference',
            PaymentPending: true,
            Project: 'Project',
            RoundOffValue: 'RoundOffValue',
            SalesType: 'STOCK',
            SupplierInvoiceRows: [
              {
                Account: 1000,
                AccountDescription: 'AccountDescription',
                ArticleNumber: 'ArticleNumber',
                Code: 'TOT',
                CostCenter: 'CostCenter',
                Credit: 0,
                CreditCurrency: 0,
                Debit: 0,
                DebitCurrency: 0,
                ItemDescription: 'ItemDescription',
                Price: 0,
                Project: 'Project',
                Quantity: 0,
                StockLocationCode: 'StockLocationCode',
                StockPointCode: 'StockPointCode',
                Total: 0,
                TransactionInformation: 'TransactionInformation',
                Unit: 'Unit',
              },
            ],
            SupplierName: 'SupplierName',
            Total: 'Total',
            VAT: 'VAT',
            VATType: 'NORMAL',
            VoucherNumber: 0,
            Vouchers: [
              {
                Number: 0,
                ReferenceType: 'ReferenceType',
                Series: 'Series',
                Year: 0,
              },
            ],
            VoucherSeries: 'VoucherSeries',
            VoucherYear: 0,
            YourReference: 'YourReference',
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.number3.supplierinvoices.retrieve(0);
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
    const responsePromise = client.number3.supplierinvoices.update(0);
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
      client.number3.supplierinvoices.update(
        0,
        {
          SupplierInvoice: {
            SupplierNumber: 'SupplierNumber',
            '@url': '@url',
            AccountingMethod: 'ACCRUAL',
            AdministrationFee: 'AdministrationFee',
            Balance: 'Balance',
            Booked: true,
            Cancelled: true,
            Comments: 'Comments',
            CostCenter: 'CostCenter',
            Credit: true,
            CreditReference: 0,
            Currency: 'Currency',
            CurrencyRate: 'CurrencyRate',
            CurrencyUnit: 0,
            DisablePaymentFile: true,
            DueDate: '2019-12-27',
            ExternalInvoiceNumber: 'ExternalInvoiceNumber',
            ExternalInvoiceSeries: 'ExternalInvoiceSeries',
            FinalPayDate: '2019-12-27',
            Freight: 'Freight',
            GivenNumber: 'GivenNumber',
            InvoiceDate: '2019-12-27',
            InvoiceNumber: 'InvoiceNumber',
            OCR: 'OCR',
            OurReference: 'OurReference',
            PaymentPending: true,
            Project: 'Project',
            RoundOffValue: 'RoundOffValue',
            SalesType: 'STOCK',
            SupplierInvoiceRows: [
              {
                Account: 1000,
                AccountDescription: 'AccountDescription',
                ArticleNumber: 'ArticleNumber',
                Code: 'TOT',
                CostCenter: 'CostCenter',
                Credit: 0,
                CreditCurrency: 0,
                Debit: 0,
                DebitCurrency: 0,
                ItemDescription: 'ItemDescription',
                Price: 0,
                Project: 'Project',
                Quantity: 0,
                StockLocationCode: 'StockLocationCode',
                StockPointCode: 'StockPointCode',
                Total: 0,
                TransactionInformation: 'TransactionInformation',
                Unit: 'Unit',
              },
            ],
            SupplierName: 'SupplierName',
            Total: 'Total',
            VAT: 'VAT',
            VATType: 'NORMAL',
            VoucherNumber: 0,
            Vouchers: [
              {
                Number: 0,
                ReferenceType: 'ReferenceType',
                Series: 'Series',
                Year: 0,
              },
            ],
            VoucherSeries: 'VoucherSeries',
            VoucherYear: 0,
            YourReference: 'YourReference',
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.number3.supplierinvoices.list();
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
      client.number3.supplierinvoices.list({ filter: 'cancelled' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('updateApprovalbookkeep', async () => {
    const responsePromise = client.number3.supplierinvoices.updateApprovalbookkeep(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateApprovalpayment', async () => {
    const responsePromise = client.number3.supplierinvoices.updateApprovalpayment(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateBookkeep', async () => {
    const responsePromise = client.number3.supplierinvoices.updateBookkeep(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateCancel', async () => {
    const responsePromise = client.number3.supplierinvoices.updateCancel(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateCredit', async () => {
    const responsePromise = client.number3.supplierinvoices.updateCredit(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
