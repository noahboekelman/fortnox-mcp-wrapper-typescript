// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ContractsAPI from './contracts';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Invoices extends APIResource {
  /**
   * An endpoint for creating an invoice. While it is possible to create an invoice
   * without rows, we encourage you to add them if you can. Omitted values in the
   * payload will be supplied by Predefined values which can be edited in the Fortnox
   * account settings. Note that Predefined values will always be overwritten by
   * values provided through the API.
   *
   * Should you have EasyVat enabled, it is mandatory to provide an account in the
   * request should you use a custom VAT rate.
   *
   * This endpoint can produce errors, some of which may only be relevant for
   * EasyVat. Refer to the table below.
   *
   *  <table>
   *  <caption>Errors that can be raised by this endpoint.</caption>
   *  		<tr>
   *  			<th>Error Code</th>
   *  			<th>HTTP Code</th>
   *  			<th>Description</th>
   *  			<th>Solution</th>
   *  		</tr>
   *  		<tr>
   *  			<td>2004167</td>
   *  			<td>400</td>
   *  			<td>An account must be provided when using a custom VAT rate and EasyVat has been enabled.</td>
   *  			<td>Supply each row which has a custom VAT rate with an account.</td>
   *  		</tr>
   *  </table>
   *
   * Note: The <b>EuQuarterlyReport</b> property will become obsolete at 2021-12-01.
   * This property is currently used by the <b>Quarterly</b> report as one of the
   * conditions that determine if an invoice should be included in the report or not.
   * A new version of the <b>Quarterly</b> report is released at 2021-12-01. In the
   * new report, this property will not be used when determining if an invoice should
   * be included in the report or not, with one exception: if the invoice is created
   * before 2021-12-01, and this property is false, the invoice will be excluded from
   * the report. For invoices created 2021-12-01 and later, this property will have
   * no effect.
   */
  create(
    body: InvoiceCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ContractsAPI.FortnoxInvoiceWrap> {
    return this._client.post('/3/invoices', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single invoice
   */
  retrieve(documentNumber: string, options?: RequestOptions): APIPromise<ContractsAPI.FortnoxInvoiceWrap> {
    return this._client.get(path`/3/invoices/${documentNumber}`, options);
  }

  /**
   * Note that there are two approaches for updating the rows on an invoice.
   *
   * If RowId is not specified on any row, the rows will be mapped and updated in the
   * order in which they are set in the array. All rows that should remain on the
   * invoice needs to be provided.
   *
   * If RowId is specified on one or more rows the following goes: Corresponding row
   * with that id will be updated. The rows without RowId will be interpreted as new
   * rows. If a row should not be updated but remain on the invoice then specify only
   * RowId like { "RowId": 123 }, otherwise it will be removed. Note that new RowIds
   * are generated for all rows every time an invoice is updated.
   *
   * Note: The <b>EuQuarterlyReport</b> property will become obsolete at 2021-12-01.
   * This property is currently used by the <b>Quarterly</b> report as one of the
   * conditions that determine if an invoice should be included in the report or not.
   * A new version of the <b>Quarterly</b> report is released at 2021-12-01. In the
   * new report, this property will not be used when determining if an invoice should
   * be included in the report or not, with one exception: if the invoice is created
   * before 2021-12-01, and this property is false, the invoice will be excluded from
   * the report. For invoices created 2021-12-01 and later, this property will have
   * no effect.
   */
  update(
    documentNumber: string,
    body: InvoiceUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ContractsAPI.FortnoxInvoiceWrap> {
    return this._client.put(path`/3/invoices/${documentNumber}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a list of invoices
   */
  list(
    query: InvoiceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoiceListResponse> {
    return this._client.get('/3/invoices', { query, ...options });
  }

  /**
   * Bookkeep an invoice
   */
  bookkeep(documentNumber: string, options?: RequestOptions): APIPromise<ContractsAPI.FortnoxInvoiceWrap> {
    return this._client.put(path`/3/invoices/${documentNumber}/bookkeep`, options);
  }

  /**
   * Cancel an invoice
   */
  cancel(documentNumber: string, options?: RequestOptions): APIPromise<ContractsAPI.FortnoxInvoiceWrap> {
    return this._client.put(path`/3/invoices/${documentNumber}/cancel`, options);
  }

  /**
   * The created credit invoice will be referenced in the property
   * CreditInvoiceReference.
   */
  credit(documentNumber: string, options?: RequestOptions): APIPromise<ContractsAPI.FortnoxInvoiceWrap> {
    return this._client.put(path`/3/invoices/${documentNumber}/credit`, options);
  }

  /**
   * The difference between this and the print-endpoint is that property Sent is not
   * set to TRUE.
   */
  preview(documentNumber: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/3/invoices/${documentNumber}/preview`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Print an invoice
   */
  print(documentNumber: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/3/invoices/${documentNumber}/print`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Print an invoice as reminder
   */
  printReminder(documentNumber: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/3/invoices/${documentNumber}/printreminder`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Send an invoice as e-invoice
   */
  sendEinvoice(
    documentNumber: string,
    options?: RequestOptions,
  ): APIPromise<ContractsAPI.FortnoxInvoiceWrap> {
    return this._client.get(path`/3/invoices/${documentNumber}/einvoice`, options);
  }

  /**
   * You can use the properties in the EmailInformation to customize the e-mail
   * message on each invoice.
   */
  sendEmail(documentNumber: string, options?: RequestOptions): APIPromise<ContractsAPI.FortnoxInvoiceWrap> {
    return this._client.get(path`/3/invoices/${documentNumber}/email`, options);
  }

  /**
   * Send an invoice as e-print
   */
  sendEprint(documentNumber: string, options?: RequestOptions): APIPromise<ContractsAPI.FortnoxInvoiceWrap> {
    return this._client.get(path`/3/invoices/${documentNumber}/eprint`, options);
  }

  /**
   * Used for marking a document as ready in the warehouse module. DeliveryState
   * needs to be set to &quot;delivery&quot;.
   */
  setDone(documentNumber: string, options?: RequestOptions): APIPromise<ContractsAPI.FortnoxInvoiceWrap> {
    return this._client.put(path`/3/invoices/${documentNumber}/warehouseready`, options);
  }

  /**
   * Use this endpoint to set invoice as sent, without generating an invoice.
   */
  setSent(documentNumber: string, options?: RequestOptions): APIPromise<ContractsAPI.FortnoxInvoiceWrap> {
    return this._client.put(path`/3/invoices/${documentNumber}/externalprint`, options);
  }
}

export interface FortnoxInvoicePayload {
  CustomerNumber: string;

  Address1?: string;

  Address2?: string;

  AdministrationFee?: number;

  City?: string;

  Comments?: string;

  CostCenter?: string;

  Country?: string;

  CreditInvoiceReference?: string;

  Currency?: string;

  CurrencyRate?: number;

  CurrencyUnit?: number;

  CustomerName?: string;

  DeliveryAddress1?: string;

  DeliveryAddress2?: string;

  DeliveryCity?: string;

  DeliveryCountry?: string;

  DeliveryDate?: string;

  DeliveryName?: string;

  DeliveryZipCode?: string;

  DocumentNumber?: string;

  DueDate?: string;

  EDIInformation?: FortnoxInvoicePayloadEdiInformation;

  EmailInformation?: FortnoxInvoicePayloadEmailInformation;

  EUQuarterlyReport?: boolean;

  ExternalInvoiceReference1?: string;

  ExternalInvoiceReference2?: string;

  Freight?: number;

  InvoiceDate?: string;

  InvoiceRows?: Array<FortnoxInvoicePayloadInvoiceRow>;

  InvoiceType?: 'INVOICE' | 'AGREEMENTINVOICE' | 'INTRESTINVOICE' | 'SUMMARYINVOICE' | 'CASHINVOICE';

  Labels?: Array<FortnoxInvoicePayloadLabel>;

  Language?: 'SV' | 'EN';

  NotCompleted?: boolean;

  OCR?: string;

  OurReference?: string;

  OutboundDate?: string;

  PaymentWay?: string;

  Phone1?: string;

  Phone2?: string;

  PriceList?: string;

  PrintTemplate?: string;

  Project?: string;

  Remarks?: string;

  TaxReductionType?: 'none' | 'rot' | 'rut' | 'green';

  TermsOfDelivery?: string;

  TermsOfPayment?: string;

  VATIncluded?: boolean;

  WayOfDelivery?: string;

  YourOrderNumber?: string;

  YourReference?: string;

  ZipCode?: string;
}

export interface FortnoxInvoicePayloadEdiInformation {
  EDIGlobalLocationNumber?: string;

  EDIGlobalLocationNumberDelivery?: string;

  EDIInvoiceExtra1?: string;

  EDIInvoiceExtra2?: string;

  EDIOurElectronicReference?: string;

  EDIYourElectronicReference?: string;
}

export interface FortnoxInvoicePayloadEmailInformation {
  EmailAddressBCC?: string;

  EmailAddressCC?: string;

  EmailAddressFrom?: string;

  EmailAddressTo?: string;

  EmailBody?: string;

  EmailSubject?: string;
}

export interface FortnoxInvoicePayloadInvoiceRow {
  AccountNumber?: number;

  ArticleNumber?: string;

  CostCenter?: string;

  DeliveredQuantity?: string;

  Description?: string;

  Discount?: number;

  DiscountType?: 'AMOUNT' | 'PERCENT';

  HouseWork?: boolean;

  HouseWorkHoursToReport?: number;

  HouseWorkType?:
    | 'CONSTRUCTION'
    | 'ELECTRICITY'
    | 'GLASSMETALWORK'
    | 'GROUNDDRAINAGEWORK'
    | 'MASONRY'
    | 'PAINTINGWALLPAPERING'
    | 'HVAC'
    | 'MAJORAPPLIANCEREPAIR'
    | 'MOVINGSERVICES'
    | 'ITSERVICES'
    | 'CLEANING'
    | 'TEXTILECLOTHING'
    | 'SNOWPLOWING'
    | 'GARDENING'
    | 'BABYSITTING'
    | 'OTHERCARE'
    | 'OTHERCOSTS'
    | 'SOLARCELLS'
    | 'STORAGESELFPRODUCEDELECTRICITY'
    | 'CHARGINGSTATIONELECTRICVEHICLE'
    | 'HOMEMAINTENANCE'
    | 'FURNISHING'
    | 'TRANSPORTATIONSERVICES'
    | 'WASHINGANDCAREOFCLOTHING';

  Price?: number;

  Project?: string;

  RowId?: number;

  StockPointCode?: string;

  Unit?: string;

  VAT?: number;

  VATCode?: string;
}

export interface FortnoxInvoicePayloadLabel {
  Id?: number;
}

export interface InvoicePayloadWrap {
  Invoice?: FortnoxInvoicePayload;
}

export interface InvoiceListResponse {
  Invoices?: Array<InvoiceListResponse.Invoice>;
}

export namespace InvoiceListResponse {
  export interface Invoice {
    '@url'?: string;

    Balance?: number;

    Booked?: boolean;

    Cancelled?: boolean;

    CostCenter?: string;

    Currency?: string;

    CurrencyRate?: number;

    CurrencyUnit?: number;

    CustomerName?: string;

    CustomerNumber?: string;

    DocumentNumber?: string;

    DueDate?: string;

    ExternalInvoiceReference1?: string;

    ExternalInvoiceReference2?: string;

    FinalPayDate?: string;

    InvoiceDate?: string;

    InvoiceType?: 'INVOICE' | 'AGREEMENTINVOICE' | 'INTRESTINVOICE' | 'SUMMARYINVOICE' | 'CASHINVOICE';

    NoxFinans?: boolean;

    OCR?: string;

    Project?: string;

    Sent?: boolean;

    TermsOfPayment?: string;

    Total?: number;

    VoucherNumber?: number;

    VoucherSeries?: string;

    VoucherYear?: number;

    WayOfDelivery?: string;
  }
}

export interface InvoiceCreateParams {
  Invoice?: FortnoxInvoicePayload;
}

export interface InvoiceUpdateParams {
  Invoice?: FortnoxInvoicePayload;
}

export interface InvoiceListParams {
  accountnumberfrom?: string;

  accountnumberto?: string;

  articledescription?: string;

  articlenumber?: string;

  costcenter?: string;

  credit?: string;

  currency?: string;

  customername?: string;

  customernumber?: string;

  documentnumber?: string;

  externalinvoicereference1?: string;

  externalinvoicereference2?: string;

  /**
   * possibility to filter invoices
   */
  filter?: 'cancelled' | 'fullypaid' | 'unpaid' | 'unpaidoverdue' | 'unbooked';

  fromdate?: string;

  fromfinalpaydate?: string;

  invoicetype?: string;

  label?: string;

  lastmodified?: string;

  notcompleted?: string;

  ocr?: string;

  ourreference?: string;

  project?: string;

  sent?: string;

  /**
   * field to sort returned list on
   */
  sortby?: 'customername' | 'customernumber' | 'documentnumber' | 'invoicedate' | 'ocr' | 'total';

  todate?: string;

  tofinalpaydate?: string;

  yourordernumber?: string;

  yourreference?: string;
}

export declare namespace Invoices {
  export {
    type FortnoxInvoicePayload as FortnoxInvoicePayload,
    type FortnoxInvoicePayloadEdiInformation as FortnoxInvoicePayloadEdiInformation,
    type FortnoxInvoicePayloadEmailInformation as FortnoxInvoicePayloadEmailInformation,
    type FortnoxInvoicePayloadInvoiceRow as FortnoxInvoicePayloadInvoiceRow,
    type FortnoxInvoicePayloadLabel as FortnoxInvoicePayloadLabel,
    type InvoicePayloadWrap as InvoicePayloadWrap,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceUpdateParams as InvoiceUpdateParams,
    type InvoiceListParams as InvoiceListParams,
  };
}
