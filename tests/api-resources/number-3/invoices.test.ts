// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invoices', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.number3.invoices.create();
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
      client.number3.invoices.create(
        {
          Invoice: {
            CustomerNumber: 'CustomerNumber',
            Address1: 'Address1',
            Address2: 'Address2',
            AdministrationFee: 0,
            City: 'City',
            Comments: 'Comments',
            CostCenter: 'CostCenter',
            Country: 'Country',
            CreditInvoiceReference: 'CreditInvoiceReference',
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
            DueDate: '2019-12-27',
            EDIInformation: {
              EDIGlobalLocationNumber: 'EDIGlobalLocationNumber',
              EDIGlobalLocationNumberDelivery: 'EDIGlobalLocationNumberDelivery',
              EDIInvoiceExtra1: 'EDIInvoiceExtra1',
              EDIInvoiceExtra2: 'EDIInvoiceExtra2',
              EDIOurElectronicReference: 'EDIOurElectronicReference',
              EDIYourElectronicReference: 'EDIYourElectronicReference',
            },
            EmailInformation: {
              EmailAddressBCC: 'EmailAddressBCC',
              EmailAddressCC: 'EmailAddressCC',
              EmailAddressFrom: 'EmailAddressFrom',
              EmailAddressTo: 'EmailAddressTo',
              EmailBody: 'EmailBody',
              EmailSubject: 'EmailSubject',
            },
            EUQuarterlyReport: true,
            ExternalInvoiceReference1: 'ExternalInvoiceReference1',
            ExternalInvoiceReference2: 'ExternalInvoiceReference2',
            Freight: 0,
            InvoiceDate: '2019-12-27',
            InvoiceRows: [
              {
                AccountNumber: 1000,
                ArticleNumber: 'ArticleNumber',
                CostCenter: 'CostCenter',
                DeliveredQuantity: 'DeliveredQuantity',
                Description: 'Description',
                Discount: 0,
                DiscountType: 'AMOUNT',
                HouseWork: true,
                HouseWorkHoursToReport: 999,
                HouseWorkType: 'CONSTRUCTION',
                Price: 0,
                Project: 'Project',
                RowId: 0,
                StockPointCode: 'StockPointCode',
                Unit: 'Unit',
                VAT: 0,
                VATCode: 'VATCode',
              },
            ],
            InvoiceType: 'INVOICE',
            Labels: [{ Id: 0 }],
            Language: 'SV',
            NotCompleted: true,
            OCR: 'OCR',
            OurReference: 'OurReference',
            OutboundDate: '2019-12-27',
            PaymentWay: 'PaymentWay',
            Phone1: 'Phone1',
            Phone2: 'Phone2',
            PriceList: 'PriceList',
            PrintTemplate: 'PrintTemplate',
            Project: 'Project',
            Remarks: 'Remarks',
            TaxReductionType: 'none',
            TermsOfDelivery: 'TermsOfDelivery',
            TermsOfPayment: 'TermsOfPayment',
            VATIncluded: true,
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
    const responsePromise = client.number3.invoices.retrieve('DocumentNumber');
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
    const responsePromise = client.number3.invoices.update('DocumentNumber');
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
      client.number3.invoices.update(
        'DocumentNumber',
        {
          Invoice: {
            CustomerNumber: 'CustomerNumber',
            Address1: 'Address1',
            Address2: 'Address2',
            AdministrationFee: 0,
            City: 'City',
            Comments: 'Comments',
            CostCenter: 'CostCenter',
            Country: 'Country',
            CreditInvoiceReference: 'CreditInvoiceReference',
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
            DueDate: '2019-12-27',
            EDIInformation: {
              EDIGlobalLocationNumber: 'EDIGlobalLocationNumber',
              EDIGlobalLocationNumberDelivery: 'EDIGlobalLocationNumberDelivery',
              EDIInvoiceExtra1: 'EDIInvoiceExtra1',
              EDIInvoiceExtra2: 'EDIInvoiceExtra2',
              EDIOurElectronicReference: 'EDIOurElectronicReference',
              EDIYourElectronicReference: 'EDIYourElectronicReference',
            },
            EmailInformation: {
              EmailAddressBCC: 'EmailAddressBCC',
              EmailAddressCC: 'EmailAddressCC',
              EmailAddressFrom: 'EmailAddressFrom',
              EmailAddressTo: 'EmailAddressTo',
              EmailBody: 'EmailBody',
              EmailSubject: 'EmailSubject',
            },
            EUQuarterlyReport: true,
            ExternalInvoiceReference1: 'ExternalInvoiceReference1',
            ExternalInvoiceReference2: 'ExternalInvoiceReference2',
            Freight: 0,
            InvoiceDate: '2019-12-27',
            InvoiceRows: [
              {
                AccountNumber: 1000,
                ArticleNumber: 'ArticleNumber',
                CostCenter: 'CostCenter',
                DeliveredQuantity: 'DeliveredQuantity',
                Description: 'Description',
                Discount: 0,
                DiscountType: 'AMOUNT',
                HouseWork: true,
                HouseWorkHoursToReport: 999,
                HouseWorkType: 'CONSTRUCTION',
                Price: 0,
                Project: 'Project',
                RowId: 0,
                StockPointCode: 'StockPointCode',
                Unit: 'Unit',
                VAT: 0,
                VATCode: 'VATCode',
              },
            ],
            InvoiceType: 'INVOICE',
            Labels: [{ Id: 0 }],
            Language: 'SV',
            NotCompleted: true,
            OCR: 'OCR',
            OurReference: 'OurReference',
            OutboundDate: '2019-12-27',
            PaymentWay: 'PaymentWay',
            Phone1: 'Phone1',
            Phone2: 'Phone2',
            PriceList: 'PriceList',
            PrintTemplate: 'PrintTemplate',
            Project: 'Project',
            Remarks: 'Remarks',
            TaxReductionType: 'none',
            TermsOfDelivery: 'TermsOfDelivery',
            TermsOfPayment: 'TermsOfPayment',
            VATIncluded: true,
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
    const responsePromise = client.number3.invoices.list();
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
      client.number3.invoices.list(
        {
          accountnumberfrom: 'accountnumberfrom',
          accountnumberto: 'accountnumberto',
          articledescription: 'articledescription',
          articlenumber: 'articlenumber',
          costcenter: 'costcenter',
          credit: 'credit',
          currency: 'currency',
          customername: 'customername',
          customernumber: 'customernumber',
          documentnumber: 'documentnumber',
          externalinvoicereference1: 'externalinvoicereference1',
          externalinvoicereference2: 'externalinvoicereference2',
          filter: 'cancelled',
          fromdate: 'fromdate',
          fromfinalpaydate: 'fromfinalpaydate',
          invoicetype: 'invoicetype',
          label: 'label',
          lastmodified: 'lastmodified',
          notcompleted: 'notcompleted',
          ocr: 'ocr',
          ourreference: 'ourreference',
          project: 'project',
          sent: 'sent',
          sortby: 'customername',
          todate: 'todate',
          tofinalpaydate: 'tofinalpaydate',
          yourordernumber: 'yourordernumber',
          yourreference: 'yourreference',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('bookkeep', async () => {
    const responsePromise = client.number3.invoices.bookkeep('DocumentNumber');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('cancel', async () => {
    const responsePromise = client.number3.invoices.cancel('DocumentNumber');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('credit', async () => {
    const responsePromise = client.number3.invoices.credit('DocumentNumber');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('sendEinvoice', async () => {
    const responsePromise = client.number3.invoices.sendEinvoice('DocumentNumber');
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
    const responsePromise = client.number3.invoices.sendEmail('DocumentNumber');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('sendEprint', async () => {
    const responsePromise = client.number3.invoices.sendEprint('DocumentNumber');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('setDone', async () => {
    const responsePromise = client.number3.invoices.setDone('DocumentNumber');
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
    const responsePromise = client.number3.invoices.setSent('DocumentNumber');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
