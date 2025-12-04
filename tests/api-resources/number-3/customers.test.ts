// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customers', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.number3.customers.create();
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
      client.number3.customers.create(
        {
          Customer: {
            Name: 'x',
            '@url': '@url',
            Active: true,
            Address1: 'x',
            Address2: 'Address2',
            City: 'City',
            Comments: 'Comments',
            CostCenter: 'CostCenter',
            Country: 'Country',
            CountryCode: 'xx',
            Currency: 'xxx',
            CustomerNumber: 'CustomerNumber',
            DefaultDeliveryTypes: { Invoice: 'PRINT', Offer: 'PRINT', Order: 'PRINT' },
            DefaultTemplates: {
              CashInvoice: 'CashInvoice',
              Invoice: 'Invoice',
              Offer: 'Offer',
              Order: 'Order',
            },
            DeliveryAddress1: 'DeliveryAddress1',
            DeliveryAddress2: 'DeliveryAddress2',
            DeliveryCity: 'DeliveryCity',
            DeliveryCountry: 'DeliveryCountry',
            DeliveryCountryCode: 'xx',
            DeliveryFax: 'DeliveryFax',
            DeliveryName: 'DeliveryName',
            DeliveryPhone1: 'DeliveryPhone1',
            DeliveryPhone2: 'DeliveryPhone2',
            DeliveryZipCode: 'DeliveryZipCode',
            Email: 'Email',
            EmailInvoice: 'EmailInvoice',
            EmailInvoiceBCC: 'EmailInvoiceBCC',
            EmailInvoiceCC: 'EmailInvoiceCC',
            EmailOffer: 'EmailOffer',
            EmailOfferBCC: 'EmailOfferBCC',
            EmailOfferCC: 'EmailOfferCC',
            EmailOrder: 'EmailOrder',
            EmailOrderBCC: 'EmailOrderBCC',
            EmailOrderCC: 'EmailOrderCC',
            ExternalReference: 'ExternalReference',
            Fax: 'Fax',
            GLN: 'xxxxxxxxxxxxx',
            GLNDelivery: 'xxxxxxxxxxxxx',
            InvoiceAdministrationFee: 'InvoiceAdministrationFee',
            InvoiceDiscount: 0,
            InvoiceFreight: 'InvoiceFreight',
            InvoiceRemark: 'InvoiceRemark',
            OrganisationNumber: 'OrganisationNumber',
            OurReference: 'OurReference',
            Phone1: 'Phone1',
            Phone2: 'Phone2',
            PriceList: 'PriceList',
            Project: 'Project',
            SalesAccount: 'xxxx',
            ShowPriceVATIncluded: true,
            TermsOfDelivery: 'TermsOfDelivery',
            TermsOfPayment: 'TermsOfPayment',
            Type: 'PRIVATE',
            VATNumber: 'VATNumber',
            VATType: 'SEVAT',
            VisitingAddress: 'VisitingAddress',
            VisitingCity: 'VisitingCity',
            VisitingCountry: 'VisitingCountry',
            VisitingCountryCode: 'xx',
            VisitingZipCode: 'VisitingZipCode',
            WayOfDelivery: 'WayOfDelivery',
            WWW: 'WWW',
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
    const responsePromise = client.number3.customers.retrieve('CustomerNumber');
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
    const responsePromise = client.number3.customers.update('CustomerNumber');
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
      client.number3.customers.update(
        'CustomerNumber',
        {
          Customer: {
            Name: 'x',
            '@url': '@url',
            Active: true,
            Address1: 'x',
            Address2: 'Address2',
            City: 'City',
            Comments: 'Comments',
            CostCenter: 'CostCenter',
            Country: 'Country',
            CountryCode: 'xx',
            Currency: 'xxx',
            CustomerNumber: 'CustomerNumber',
            DefaultDeliveryTypes: { Invoice: 'PRINT', Offer: 'PRINT', Order: 'PRINT' },
            DefaultTemplates: {
              CashInvoice: 'CashInvoice',
              Invoice: 'Invoice',
              Offer: 'Offer',
              Order: 'Order',
            },
            DeliveryAddress1: 'DeliveryAddress1',
            DeliveryAddress2: 'DeliveryAddress2',
            DeliveryCity: 'DeliveryCity',
            DeliveryCountry: 'DeliveryCountry',
            DeliveryCountryCode: 'xx',
            DeliveryFax: 'DeliveryFax',
            DeliveryName: 'DeliveryName',
            DeliveryPhone1: 'DeliveryPhone1',
            DeliveryPhone2: 'DeliveryPhone2',
            DeliveryZipCode: 'DeliveryZipCode',
            Email: 'Email',
            EmailInvoice: 'EmailInvoice',
            EmailInvoiceBCC: 'EmailInvoiceBCC',
            EmailInvoiceCC: 'EmailInvoiceCC',
            EmailOffer: 'EmailOffer',
            EmailOfferBCC: 'EmailOfferBCC',
            EmailOfferCC: 'EmailOfferCC',
            EmailOrder: 'EmailOrder',
            EmailOrderBCC: 'EmailOrderBCC',
            EmailOrderCC: 'EmailOrderCC',
            ExternalReference: 'ExternalReference',
            Fax: 'Fax',
            GLN: 'xxxxxxxxxxxxx',
            GLNDelivery: 'xxxxxxxxxxxxx',
            InvoiceAdministrationFee: 'InvoiceAdministrationFee',
            InvoiceDiscount: 0,
            InvoiceFreight: 'InvoiceFreight',
            InvoiceRemark: 'InvoiceRemark',
            OrganisationNumber: 'OrganisationNumber',
            OurReference: 'OurReference',
            Phone1: 'Phone1',
            Phone2: 'Phone2',
            PriceList: 'PriceList',
            Project: 'Project',
            SalesAccount: 'xxxx',
            ShowPriceVATIncluded: true,
            TermsOfDelivery: 'TermsOfDelivery',
            TermsOfPayment: 'TermsOfPayment',
            Type: 'PRIVATE',
            VATNumber: 'VATNumber',
            VATType: 'SEVAT',
            VisitingAddress: 'VisitingAddress',
            VisitingCity: 'VisitingCity',
            VisitingCountry: 'VisitingCountry',
            VisitingCountryCode: 'xx',
            VisitingZipCode: 'VisitingZipCode',
            WayOfDelivery: 'WayOfDelivery',
            WWW: 'WWW',
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
    const responsePromise = client.number3.customers.list();
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
      client.number3.customers.list(
        {
          city: 'city',
          customernumber: 'customernumber',
          email: 'email',
          filter: 'active',
          gln: 'gln',
          glndelivery: 'glndelivery',
          lastmodified: 'lastmodified',
          name: 'name',
          organisationnumber: 'organisationnumber',
          phone: 'phone',
          sortby: 'customernumber',
          zipcode: 'zipcode',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.number3.customers.delete('CustomerNumber');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
