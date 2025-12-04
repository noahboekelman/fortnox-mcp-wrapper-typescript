// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource orders', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.number3.orders.create();
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
      client.number3.orders.create(
        {
          Order: {
            CustomerNumber: 'CustomerNumber',
            '@url': '@url',
            '@urlTaxReductionList': '@urlTaxReductionList',
            Address1: 'Address1',
            Address2: 'Address2',
            AdministrationFee: 0,
            AdministrationFeeVAT: 0,
            BasisTaxReduction: 0,
            Cancelled: true,
            City: 'City',
            Comments: 'Comments',
            ContributionPercent: 0,
            ContributionValue: 0,
            CopyRemarks: true,
            CostCenter: 'CostCenter',
            Country: 'Country',
            Currency: 'xxx',
            CurrencyRate: 0,
            CurrencyUnit: 0,
            CustomerName: 'CustomerName',
            DeliveryAddress1: 'DeliveryAddress1',
            DeliveryAddress2: 'DeliveryAddress2',
            DeliveryCity: 'DeliveryCity',
            DeliveryCountry: 'DeliveryCountry',
            DeliveryDate: '2019-12-27',
            DeliveryName: 'DeliveryName',
            DeliveryState: 'registration',
            DeliveryZipCode: 'DeliveryZipCode',
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
            FreightVAT: 0,
            Gross: 0,
            HouseWork: true,
            InvoiceReference: 'InvoiceReference',
            Labels: [{ Id: 0 }],
            Language: 'Language',
            Net: 0,
            NotCompleted: true,
            OfferReference: 'OfferReference',
            OrderDate: '2019-12-27',
            OrderRows: [
              {
                AccountNumber: 0,
                ArticleNumber: 'ArticleNumber',
                ContributionPercent: 'ContributionPercent',
                ContributionValue: 'ContributionValue',
                CostCenter: 'CostCenter',
                DeliveredQuantity: 'DeliveredQuantity',
                Description: 'Description',
                Discount: 0,
                DiscountType: 'AMOUNT',
                HouseWork: true,
                HouseWorkHoursToReport: 0,
                HouseWorkType: 'CONSTRUCTION',
                OrderedQuantity: 'OrderedQuantity',
                Price: 0,
                Project: 'Project',
                ReservedQuantity: 'ReservedQuantity',
                RowId: 0,
                StockPointCode: 'StockPointCode',
                StockPointId: 'StockPointId',
                Total: 0,
                Unit: 'Unit',
                VAT: 0,
                VATCode: 'VATCode',
              },
            ],
            OrderType: 'OrderType',
            OrganisationNumber: 'OrganisationNumber',
            OurReference: 'OurReference',
            OutboundDate: '2019-12-27',
            Phone1: 'Phone1',
            Phone2: 'Phone2',
            PriceList: 'PriceList',
            PrintTemplate: 'PrintTemplate',
            Project: 'Project',
            Remarks: 'Remarks',
            RoundOff: 0,
            Sent: true,
            StockPointCode: 'StockPointCode',
            StockPointId: 'StockPointId',
            TaxReduction: 0,
            TaxReductionType: 'none',
            TermsOfDelivery: 'TermsOfDelivery',
            TermsOfPayment: 'TermsOfPayment',
            TimeBasisReference: 0,
            Total: 0,
            TotalToPay: 0,
            TotalVAT: 0,
            VATIncluded: true,
            WarehouseReady: true,
            WayOfDelivery: 'WayOfDelivery',
            YourOrderNumber: 'YourOrderNumber',
            YourReference: 'YourReference',
            ZipCode: 'ZipCode',
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.number3.orders.retrieve('DocumentNumber');
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
    const responsePromise = client.number3.orders.update('DocumentNumber');
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
      client.number3.orders.update(
        'DocumentNumber',
        {
          Order: {
            CustomerNumber: 'CustomerNumber',
            '@url': '@url',
            '@urlTaxReductionList': '@urlTaxReductionList',
            Address1: 'Address1',
            Address2: 'Address2',
            AdministrationFee: 0,
            AdministrationFeeVAT: 0,
            BasisTaxReduction: 0,
            Cancelled: true,
            City: 'City',
            Comments: 'Comments',
            ContributionPercent: 0,
            ContributionValue: 0,
            CopyRemarks: true,
            CostCenter: 'CostCenter',
            Country: 'Country',
            Currency: 'xxx',
            CurrencyRate: 0,
            CurrencyUnit: 0,
            CustomerName: 'CustomerName',
            DeliveryAddress1: 'DeliveryAddress1',
            DeliveryAddress2: 'DeliveryAddress2',
            DeliveryCity: 'DeliveryCity',
            DeliveryCountry: 'DeliveryCountry',
            DeliveryDate: '2019-12-27',
            DeliveryName: 'DeliveryName',
            DeliveryState: 'registration',
            DeliveryZipCode: 'DeliveryZipCode',
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
            FreightVAT: 0,
            Gross: 0,
            HouseWork: true,
            InvoiceReference: 'InvoiceReference',
            Labels: [{ Id: 0 }],
            Language: 'Language',
            Net: 0,
            NotCompleted: true,
            OfferReference: 'OfferReference',
            OrderDate: '2019-12-27',
            OrderRows: [
              {
                AccountNumber: 0,
                ArticleNumber: 'ArticleNumber',
                ContributionPercent: 'ContributionPercent',
                ContributionValue: 'ContributionValue',
                CostCenter: 'CostCenter',
                DeliveredQuantity: 'DeliveredQuantity',
                Description: 'Description',
                Discount: 0,
                DiscountType: 'AMOUNT',
                HouseWork: true,
                HouseWorkHoursToReport: 0,
                HouseWorkType: 'CONSTRUCTION',
                OrderedQuantity: 'OrderedQuantity',
                Price: 0,
                Project: 'Project',
                ReservedQuantity: 'ReservedQuantity',
                RowId: 0,
                StockPointCode: 'StockPointCode',
                StockPointId: 'StockPointId',
                Total: 0,
                Unit: 'Unit',
                VAT: 0,
                VATCode: 'VATCode',
              },
            ],
            OrderType: 'OrderType',
            OrganisationNumber: 'OrganisationNumber',
            OurReference: 'OurReference',
            OutboundDate: '2019-12-27',
            Phone1: 'Phone1',
            Phone2: 'Phone2',
            PriceList: 'PriceList',
            PrintTemplate: 'PrintTemplate',
            Project: 'Project',
            Remarks: 'Remarks',
            RoundOff: 0,
            Sent: true,
            StockPointCode: 'StockPointCode',
            StockPointId: 'StockPointId',
            TaxReduction: 0,
            TaxReductionType: 'none',
            TermsOfDelivery: 'TermsOfDelivery',
            TermsOfPayment: 'TermsOfPayment',
            TimeBasisReference: 0,
            Total: 0,
            TotalToPay: 0,
            TotalVAT: 0,
            VATIncluded: true,
            WarehouseReady: true,
            WayOfDelivery: 'WayOfDelivery',
            YourOrderNumber: 'YourOrderNumber',
            YourReference: 'YourReference',
            ZipCode: 'ZipCode',
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.number3.orders.list();
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
      client.number3.orders.list(
        {
          costcenter: 'costcenter',
          customername: 'customername',
          customernumber: 'customernumber',
          documentnumber: 'documentnumber',
          externalinvoicereference1: 'externalinvoicereference1',
          externalinvoicereference2: 'externalinvoicereference2',
          filter: 'cancelled',
          fromdate: 'fromdate',
          label: 'label',
          lastmodified: 'lastmodified',
          notcompleted: true,
          ordertype: 'ordertype',
          ourreference: 'ourreference',
          project: 'project',
          sent: true,
          sortby: 'customername',
          todate: 'todate',
          yourreference: 'yourreference',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('cancel', async () => {
    const responsePromise = client.number3.orders.cancel('DocumentNumber');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createInvoice', async () => {
    const responsePromise = client.number3.orders.createInvoice('DocumentNumber');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('sendEmail', async () => {
    const responsePromise = client.number3.orders.sendEmail('DocumentNumber');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('setSent', async () => {
    const responsePromise = client.number3.orders.setSent('DocumentNumber');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
