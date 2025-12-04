// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource suppliers', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.number3.suppliers.create();
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
      client.number3.suppliers.create(
        {
          Supplier: {
            Name: 'x',
            '@url': '@url',
            Active: true,
            Address1: 'Address1',
            Address2: 'Address2',
            Bank: 'Bank',
            BankAccountNumber: 'BankAccountNumber',
            BG: 'BG',
            BIC: 'BIC',
            BranchCode: 'BranchCode',
            City: 'City',
            ClearingNumber: 'ClearingNumber',
            Comments: 'Comments',
            CostCenter: 'CostCenter',
            Country: 'Country',
            CountryCode: 'xx',
            Currency: 'xxx',
            DisablePaymentFile: true,
            Email: 'Email',
            Fax: 'Fax',
            IBAN: 'IBAN',
            OrganisationNumber: 'OrganisationNumber',
            OurCustomerNumber: 'OurCustomerNumber',
            OurReference: 'OurReference',
            PG: 'PG',
            Phone1: 'Phone1',
            Phone2: 'Phone2',
            PreDefinedAccount: 'xxxx',
            Project: 'Project',
            SupplierNumber: 'SupplierNumber',
            TermsOfPayment: 'TermsOfPayment',
            VATNumber: 'VATNumber',
            VATType: 'VATType',
            VisitingAddress: 'VisitingAddress',
            VisitingCity: 'VisitingCity',
            VisitingCountry: 'VisitingCountry',
            VisitingCountryCode: 'VisitingCountryCode',
            VisitingZipCode: 'VisitingZipCode',
            WorkPlace: 'WorkPlace',
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
    const responsePromise = client.number3.suppliers.retrieve('SupplierNumber');
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
    const responsePromise = client.number3.suppliers.update('SupplierNumber');
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
      client.number3.suppliers.update(
        'SupplierNumber',
        {
          Supplier: {
            Name: 'x',
            '@url': '@url',
            Active: true,
            Address1: 'Address1',
            Address2: 'Address2',
            Bank: 'Bank',
            BankAccountNumber: 'BankAccountNumber',
            BG: 'BG',
            BIC: 'BIC',
            BranchCode: 'BranchCode',
            City: 'City',
            ClearingNumber: 'ClearingNumber',
            Comments: 'Comments',
            CostCenter: 'CostCenter',
            Country: 'Country',
            CountryCode: 'xx',
            Currency: 'xxx',
            DisablePaymentFile: true,
            Email: 'Email',
            Fax: 'Fax',
            IBAN: 'IBAN',
            OrganisationNumber: 'OrganisationNumber',
            OurCustomerNumber: 'OurCustomerNumber',
            OurReference: 'OurReference',
            PG: 'PG',
            Phone1: 'Phone1',
            Phone2: 'Phone2',
            PreDefinedAccount: 'xxxx',
            Project: 'Project',
            SupplierNumber: 'SupplierNumber',
            TermsOfPayment: 'TermsOfPayment',
            VATNumber: 'VATNumber',
            VATType: 'VATType',
            VisitingAddress: 'VisitingAddress',
            VisitingCity: 'VisitingCity',
            VisitingCountry: 'VisitingCountry',
            VisitingCountryCode: 'VisitingCountryCode',
            VisitingZipCode: 'VisitingZipCode',
            WorkPlace: 'WorkPlace',
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
    const responsePromise = client.number3.suppliers.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
