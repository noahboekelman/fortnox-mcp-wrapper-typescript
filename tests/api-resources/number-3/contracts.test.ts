// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contracts', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.number3.contracts.create();
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
      client.number3.contracts.create(
        {
          Contract: {
            CustomerNumber: 'CustomerNumber',
            InvoiceRows: [
              {
                ArticleNumber: 'ArticleNumber',
                DeliveredQuantity: 'DeliveredQuantity',
                AccountNumber: 1000,
                ContributionPercent: 'ContributionPercent',
                ContributionValue: 'ContributionValue',
                CostCenter: 'CostCenter',
                Description: 'Description',
                Discount: 0,
                DiscountType: 'AMOUNT',
                HouseWork: true,
                HouseWorkHoursToReport: 0,
                HouseWorkType: 'HouseWorkType',
                Price: 0,
                PriceExcludingVAT: 0,
                Project: 'Project',
                RowId: 0,
                Total: 0,
                TotalExcludingVAT: 0,
                Unit: 'Unit',
                VAT: 0,
              },
            ],
            PeriodEnd: '2019-12-27',
            '@url': '@url',
            '@urlTaxReductionList': '@urlTaxReductionList',
            Active: true,
            AdministrationFee: 0,
            BasisTaxReduction: 0,
            Comments: 'Comments',
            Continuous: true,
            ContractDate: '2019-12-27',
            ContractLength: 0,
            ContributionPercent: 0,
            ContributionValue: 0,
            CostCenter: 'CostCenter',
            Currency: 'Currency',
            CustomerName: 'CustomerName',
            DocumentNumber: 'DocumentNumber',
            EmailInformation: {
              EmailAddressBCC: 'EmailAddressBCC',
              EmailAddressCC: 'EmailAddressCC',
              EmailAddressFrom: 'EmailAddressFrom',
              EmailAddressTo: 'EmailAddressTo',
              EmailBody: 'EmailBody',
              EmailSubject: 'EmailSubject',
            },
            ExternalInvoiceReference1: 'ExternalInvoiceReference1',
            ExternalInvoiceReference2: 'ExternalInvoiceReference2',
            Freight: 0,
            Gross: 0,
            HouseWork: true,
            InvoiceDiscount: 0,
            InvoiceInterval: 0,
            InvoicesRemaining: 'InvoicesRemaining',
            Language: 'SV',
            LastInvoiceDate: 'LastInvoiceDate',
            Net: 0,
            OurReference: 'OurReference',
            PeriodStart: '2019-12-27',
            PriceList: 'PriceList',
            PrintTemplate: 'PrintTemplate',
            Project: 'Project',
            Remarks: 'Remarks',
            RoundOff: 0,
            TaxReduction: 0,
            TaxReductionType: 'none',
            TemplateName: 'TemplateName',
            TemplateNumber: 0,
            TermsOfDelivery: 'TermsOfDelivery',
            TermsOfPayment: 'TermsOfPayment',
            Total: 0,
            TotalToPay: 0,
            TotalVAT: 0,
            VatIncluded: true,
            WayOfDelivery: 'WayOfDelivery',
            YourOrderNumber: 'YourOrderNumber',
            YourReference: 'YourReference',
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.number3.contracts.retrieve('DocumentNumber');
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
    const responsePromise = client.number3.contracts.update('DocumentNumber');
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
      client.number3.contracts.update(
        'DocumentNumber',
        {
          Contract: {
            CustomerNumber: 'CustomerNumber',
            InvoiceRows: [
              {
                ArticleNumber: 'ArticleNumber',
                DeliveredQuantity: 'DeliveredQuantity',
                AccountNumber: 1000,
                ContributionPercent: 'ContributionPercent',
                ContributionValue: 'ContributionValue',
                CostCenter: 'CostCenter',
                Description: 'Description',
                Discount: 0,
                DiscountType: 'AMOUNT',
                HouseWork: true,
                HouseWorkHoursToReport: 0,
                HouseWorkType: 'HouseWorkType',
                Price: 0,
                PriceExcludingVAT: 0,
                Project: 'Project',
                RowId: 0,
                Total: 0,
                TotalExcludingVAT: 0,
                Unit: 'Unit',
                VAT: 0,
              },
            ],
            PeriodEnd: '2019-12-27',
            '@url': '@url',
            '@urlTaxReductionList': '@urlTaxReductionList',
            Active: true,
            AdministrationFee: 0,
            BasisTaxReduction: 0,
            Comments: 'Comments',
            Continuous: true,
            ContractDate: '2019-12-27',
            ContractLength: 0,
            ContributionPercent: 0,
            ContributionValue: 0,
            CostCenter: 'CostCenter',
            Currency: 'Currency',
            CustomerName: 'CustomerName',
            DocumentNumber: 'DocumentNumber',
            EmailInformation: {
              EmailAddressBCC: 'EmailAddressBCC',
              EmailAddressCC: 'EmailAddressCC',
              EmailAddressFrom: 'EmailAddressFrom',
              EmailAddressTo: 'EmailAddressTo',
              EmailBody: 'EmailBody',
              EmailSubject: 'EmailSubject',
            },
            ExternalInvoiceReference1: 'ExternalInvoiceReference1',
            ExternalInvoiceReference2: 'ExternalInvoiceReference2',
            Freight: 0,
            Gross: 0,
            HouseWork: true,
            InvoiceDiscount: 0,
            InvoiceInterval: 0,
            InvoicesRemaining: 'InvoicesRemaining',
            Language: 'SV',
            LastInvoiceDate: 'LastInvoiceDate',
            Net: 0,
            OurReference: 'OurReference',
            PeriodStart: '2019-12-27',
            PriceList: 'PriceList',
            PrintTemplate: 'PrintTemplate',
            Project: 'Project',
            Remarks: 'Remarks',
            RoundOff: 0,
            TaxReduction: 0,
            TaxReductionType: 'none',
            TemplateName: 'TemplateName',
            TemplateNumber: 0,
            TermsOfDelivery: 'TermsOfDelivery',
            TermsOfPayment: 'TermsOfPayment',
            Total: 0,
            TotalToPay: 0,
            TotalVAT: 0,
            VatIncluded: true,
            WayOfDelivery: 'WayOfDelivery',
            YourOrderNumber: 'YourOrderNumber',
            YourReference: 'YourReference',
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.number3.contracts.list();
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
      client.number3.contracts.list({ filter: 'active' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('createInvoice', async () => {
    const responsePromise = client.number3.contracts.createInvoice('DocumentNumber');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('finish', async () => {
    const responsePromise = client.number3.contracts.finish('DocumentNumber');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('increaseInvoiceCount', async () => {
    const responsePromise = client.number3.contracts.increaseInvoiceCount('DocumentNumber');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
