// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Supplierinvoices extends APIResource {
  /**
   * Create a supplier invoice
   */
  create(
    body: SupplierinvoiceCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxSupplierInvoiceWrap> {
    return this._client.post('/3/supplierinvoices', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single supplier invoice
   */
  retrieve(givenNumber: number, options?: RequestOptions): APIPromise<FortnoxSupplierInvoiceWrap> {
    return this._client.get(path`/3/supplierinvoices/${givenNumber}`, options);
  }

  /**
   * Update a supplier invoice
   */
  update(
    givenNumber: number,
    body: SupplierinvoiceUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxSupplierInvoiceWrap> {
    return this._client.put(path`/3/supplierinvoices/${givenNumber}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a list of supplier invoices
   */
  list(
    query: SupplierinvoiceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SupplierinvoiceListResponse> {
    return this._client.get('/3/supplierinvoices', { query, ...options });
  }

  /**
   * Approval of bookkeep of given supplier invoice
   */
  updateApprovalbookkeep(
    givenNumber: number,
    options?: RequestOptions,
  ): APIPromise<FortnoxSupplierInvoiceWrap> {
    return this._client.put(path`/3/supplierinvoices/${givenNumber}/approvalbookkeep`, options);
  }

  /**
   * Approval of payment of given supplier invoice
   */
  updateApprovalpayment(
    givenNumber: number,
    options?: RequestOptions,
  ): APIPromise<FortnoxSupplierInvoiceWrap> {
    return this._client.put(path`/3/supplierinvoices/${givenNumber}/approvalpayment`, options);
  }

  /**
   * Bookkeep given supplier invoice
   */
  updateBookkeep(givenNumber: number, options?: RequestOptions): APIPromise<FortnoxSupplierInvoiceWrap> {
    return this._client.put(path`/3/supplierinvoices/${givenNumber}/bookkeep`, options);
  }

  /**
   * Cancels given supplier invoice
   */
  updateCancel(givenNumber: number, options?: RequestOptions): APIPromise<FortnoxSupplierInvoiceWrap> {
    return this._client.put(path`/3/supplierinvoices/${givenNumber}/cancel`, options);
  }

  /**
   * The created credit invoice will be referenced in the property CreditReference.
   */
  updateCredit(givenNumber: number, options?: RequestOptions): APIPromise<FortnoxSupplierInvoiceWrap> {
    return this._client.put(path`/3/supplierinvoices/${givenNumber}/credit`, options);
  }
}

export interface FortnoxSupplierInvoice {
  SupplierNumber: string;

  '@url'?: string;

  AccountingMethod?: 'ACCRUAL' | 'CASH';

  AdministrationFee?: string;

  Balance?: string;

  Booked?: boolean;

  Cancelled?: boolean;

  Comments?: string;

  CostCenter?: string;

  Credit?: boolean;

  CreditReference?: number;

  Currency?: string;

  CurrencyRate?: string;

  CurrencyUnit?: number;

  DisablePaymentFile?: boolean;

  DueDate?: string;

  ExternalInvoiceNumber?: string;

  ExternalInvoiceSeries?: string;

  FinalPayDate?: string;

  Freight?: string;

  GivenNumber?: string;

  InvoiceDate?: string;

  InvoiceNumber?: string;

  OCR?: string;

  OurReference?: string;

  PaymentPending?: boolean;

  Project?: string;

  RoundOffValue?: string;

  SalesType?: 'STOCK' | 'SERVICE';

  SupplierInvoiceRows?: Array<FortnoxSupplierInvoiceSupplierInvoiceRow>;

  SupplierName?: string;

  Total?: string;

  VAT?: string;

  VATType?: 'NORMAL' | 'EUINTERNAL' | 'REVERSE';

  VoucherNumber?: number;

  Vouchers?: Array<FortnoxSupplierInvoiceVoucher>;

  VoucherSeries?: string;

  VoucherYear?: number;

  YourReference?: string;
}

export interface FortnoxSupplierInvoiceSupplierInvoiceRow {
  Account?: number;

  AccountDescription?: string;

  ArticleNumber?: string;

  Code?:
    | 'TOT'
    | 'VAT'
    | 'FRT'
    | 'AFE'
    | 'ROV'
    | 'CND'
    | 'CNC'
    | 'PRD'
    | 'PRC'
    | 'SRD'
    | 'SRC'
    | 'PRE'
    | 'GWB'
    | 'ACC';

  CostCenter?: string;

  Credit?: number;

  CreditCurrency?: number;

  Debit?: number;

  DebitCurrency?: number;

  ItemDescription?: string;

  Price?: number;

  Project?: string;

  Quantity?: number;

  StockLocationCode?: string;

  StockPointCode?: string;

  Total?: number;

  TransactionInformation?: string;

  Unit?: string;
}

export interface FortnoxSupplierInvoiceVoucher {
  Number?: number;

  ReferenceType?: string;

  Series?: string;

  Year?: number;
}

export interface FortnoxSupplierInvoiceWrap {
  SupplierInvoice?: FortnoxSupplierInvoice;
}

export interface SupplierinvoiceListResponse {
  SupplierInvoices?: Array<SupplierinvoiceListResponse.SupplierInvoice>;
}

export namespace SupplierinvoiceListResponse {
  export interface SupplierInvoice {
    SupplierNumber: string;

    '@url'?: string;

    AuthorizerName?: string;

    Balance?: string;

    Booked?: boolean;

    Cancel?: boolean;

    CostCenter?: string;

    Credit?: boolean;

    Currency?: string;

    CurrencyRate?: string;

    CurrencyUnit?: number;

    DueDate?: string;

    ExternalInvoiceNumber?: string;

    ExternalInvoiceSeries?: string;

    FinalPayDate?: string;

    GivenNumber?: string;

    InvoiceDate?: string;

    InvoiceNumber?: string;

    Project?: string;

    SupplierName?: string;

    Total?: string;

    Vouchers?: Array<SupplierInvoice.Voucher>;
  }

  export namespace SupplierInvoice {
    export interface Voucher {
      Number?: number;

      ReferenceType?: string;

      Series?: string;

      Year?: number;
    }
  }
}

export interface SupplierinvoiceCreateParams {
  SupplierInvoice?: FortnoxSupplierInvoice;
}

export interface SupplierinvoiceUpdateParams {
  SupplierInvoice?: FortnoxSupplierInvoice;
}

export interface SupplierinvoiceListParams {
  /**
   * possibility to filter supplier invoices
   */
  filter?:
    | 'cancelled'
    | 'fullypaid'
    | 'unpaid'
    | 'unpaidoverdue'
    | 'unbooked'
    | 'pendingpayment'
    | 'authorizepending';
}

export declare namespace Supplierinvoices {
  export {
    type FortnoxSupplierInvoice as FortnoxSupplierInvoice,
    type FortnoxSupplierInvoiceSupplierInvoiceRow as FortnoxSupplierInvoiceSupplierInvoiceRow,
    type FortnoxSupplierInvoiceVoucher as FortnoxSupplierInvoiceVoucher,
    type FortnoxSupplierInvoiceWrap as FortnoxSupplierInvoiceWrap,
    type SupplierinvoiceListResponse as SupplierinvoiceListResponse,
    type SupplierinvoiceCreateParams as SupplierinvoiceCreateParams,
    type SupplierinvoiceUpdateParams as SupplierinvoiceUpdateParams,
    type SupplierinvoiceListParams as SupplierinvoiceListParams,
  };
}
