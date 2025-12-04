// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource offers', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.number3.offers.create();
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
      client.number3.offers.create(
        {
          Offer: {
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
            Currency: 'Currency',
            CurrencyRate: 0,
            CurrencyUnit: 0,
            CustomerName: 'CustomerName',
            DeliveryAddress1: 'DeliveryAddress1',
            DeliveryAddress2: 'DeliveryAddress2',
            DeliveryCity: 'DeliveryCity',
            DeliveryCountry: 'DeliveryCountry',
            DeliveryDate: '2019-12-27',
            DeliveryName: 'DeliveryName',
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
            ExpireDate: '2019-12-27',
            Freight: 0,
            FreightVAT: 0,
            Gross: 0,
            HouseWork: true,
            InvoiceReference: 'InvoiceReference',
            Labels: [{ Id: 0 }],
            Language: 'Language',
            Net: 0,
            NotCompleted: true,
            OfferDate: '2019-12-27',
            OfferRows: [
              {
                AccountNumber: 0,
                ArticleNumber: 'ArticleNumber',
                ContributionPercent: 'ContributionPercent',
                ContributionValue: 'ContributionValue',
                CostCenter: 'CostCenter',
                Description: 'Description',
                Discount: 0,
                DiscountType: 'AMOUNT',
                HouseWork: true,
                HouseWorkHoursToReport: 999,
                HouseWorkType: 'CONSTRUCTION',
                Price: 0,
                Project: 'Project',
                Quantity: 'Quantity',
                RowId: 0,
                Total: 0,
                Unit: 'Unit',
                VAT: 0,
                VATCode: 'VATCode',
              },
            ],
            OrderReference: 'OrderReference',
            OrganisationNumber: 'OrganisationNumber',
            OurReference: 'OurReference',
            Phone1: 'Phone1',
            Phone2: 'Phone2',
            PriceList: 'PriceList',
            PrintTemplate: 'PrintTemplate',
            Project: 'Project',
            Remarks: 'Remarks',
            RoundOff: 0,
            Sent: true,
            TaxReduction: 0,
            TaxReductionType: 'none',
            TermsOfDelivery: 'TermsOfDelivery',
            TermsOfPayment: 'TermsOfPayment',
            Total: 0,
            TotalToPay: 0,
            TotalVAT: 0,
            VATIncluded: true,
            WayOfDelivery: 'WayOfDelivery',
            YourReference: 'YourReference',
            YourReferenceNumber: 'YourReferenceNumber',
            ZipCode: 'ZipCode',
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.number3.offers.retrieve('DocumentNumber');
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
    const responsePromise = client.number3.offers.update('DocumentNumber');
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
      client.number3.offers.update(
        'DocumentNumber',
        {
          Offer: {
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
            Currency: 'Currency',
            CurrencyRate: 0,
            CurrencyUnit: 0,
            CustomerName: 'CustomerName',
            DeliveryAddress1: 'DeliveryAddress1',
            DeliveryAddress2: 'DeliveryAddress2',
            DeliveryCity: 'DeliveryCity',
            DeliveryCountry: 'DeliveryCountry',
            DeliveryDate: '2019-12-27',
            DeliveryName: 'DeliveryName',
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
            ExpireDate: '2019-12-27',
            Freight: 0,
            FreightVAT: 0,
            Gross: 0,
            HouseWork: true,
            InvoiceReference: 'InvoiceReference',
            Labels: [{ Id: 0 }],
            Language: 'Language',
            Net: 0,
            NotCompleted: true,
            OfferDate: '2019-12-27',
            OfferRows: [
              {
                AccountNumber: 0,
                ArticleNumber: 'ArticleNumber',
                ContributionPercent: 'ContributionPercent',
                ContributionValue: 'ContributionValue',
                CostCenter: 'CostCenter',
                Description: 'Description',
                Discount: 0,
                DiscountType: 'AMOUNT',
                HouseWork: true,
                HouseWorkHoursToReport: 999,
                HouseWorkType: 'CONSTRUCTION',
                Price: 0,
                Project: 'Project',
                Quantity: 'Quantity',
                RowId: 0,
                Total: 0,
                Unit: 'Unit',
                VAT: 0,
                VATCode: 'VATCode',
              },
            ],
            OrderReference: 'OrderReference',
            OrganisationNumber: 'OrganisationNumber',
            OurReference: 'OurReference',
            Phone1: 'Phone1',
            Phone2: 'Phone2',
            PriceList: 'PriceList',
            PrintTemplate: 'PrintTemplate',
            Project: 'Project',
            Remarks: 'Remarks',
            RoundOff: 0,
            Sent: true,
            TaxReduction: 0,
            TaxReductionType: 'none',
            TermsOfDelivery: 'TermsOfDelivery',
            TermsOfPayment: 'TermsOfPayment',
            Total: 0,
            TotalToPay: 0,
            TotalVAT: 0,
            VATIncluded: true,
            WayOfDelivery: 'WayOfDelivery',
            YourReference: 'YourReference',
            YourReferenceNumber: 'YourReferenceNumber',
            ZipCode: 'ZipCode',
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.number3.offers.list();
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
      client.number3.offers.list(
        {
          costcenter: 'costcenter',
          customername: 'customername',
          customernumber: 'customernumber',
          documentnumber: 'documentnumber',
          filter: 'cancelled',
          fromdate: 'fromdate',
          label: 'label',
          lastmodified: 'lastmodified',
          notcompleted: true,
          ourreference: 'ourreference',
          project: 'project',
          sent: true,
          sortby: 'customerName',
          todate: 'todate',
          yourreference: 'yourreference',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('cancel', async () => {
    const responsePromise = client.number3.offers.cancel('DocumentNumber');
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
    const responsePromise = client.number3.offers.createInvoice('DocumentNumber');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createOrder', async () => {
    const responsePromise = client.number3.offers.createOrder('DocumentNumber');
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
    const responsePromise = client.number3.offers.sendEmail('DocumentNumber');
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
    const responsePromise = client.number3.offers.setSent('DocumentNumber');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
