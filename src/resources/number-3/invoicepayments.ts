// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Invoicepayments extends APIResource {
  /**
   * Create an invoice payment
   */
  create(
    body: InvoicepaymentCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoicePaymentWrap> {
    return this._client.post('/3/invoicepayments', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single invoice payment
   */
  retrieve(number: string, options?: RequestOptions): APIPromise<InvoicePaymentWrap> {
    return this._client.get(path`/3/invoicepayments/${number}`, options);
  }

  /**
   * Update an invoice payment
   */
  update(
    number: string,
    body: InvoicepaymentUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoicePaymentWrap> {
    return this._client.put(path`/3/invoicepayments/${number}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a list of invoice payments
   */
  list(
    query: InvoicepaymentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoicepaymentListResponse> {
    return this._client.get('/3/invoicepayments', { query, ...options });
  }

  /**
   * Bookkeep an invoice payment
   */
  bookkeep(
    number: string,
    body: InvoicepaymentBookkeepParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoicePaymentWrap> {
    return this._client.put(path`/3/invoicepayments/${number}/bookkeep`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Remove an invoice payment
   */
  remove(number: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/invoicepayments/${number}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FortnoxInvoicePayment {
  InvoiceNumber: number;

  '@url'?: string;

  Amount?: number;

  AmountCurrency?: number;

  Booked?: boolean;

  Currency?: string;

  CurrencyRate?: number;

  CurrencyUnit?: number;

  ExternalInvoiceReference1?: string;

  ExternalInvoiceReference2?: string;

  InvoiceCustomerName?: string;

  InvoiceCustomerNumber?: string;

  InvoiceDueDate?: string;

  InvoiceOCR?: string;

  InvoiceTotal?: string;

  ModeOfPayment?: string;

  ModeOfPaymentAccount?: number;

  Number?: string;

  PaymentDate?: string;

  Source?: string;

  VoucherNumber?: number;

  VoucherSeries?: string;

  VoucherYear?: number;

  WriteOffs?: Array<FortnoxInvoicePaymentWriteOff>;
}

export interface FortnoxInvoicePaymentWriteOff {
  AccountNumber?: number;

  Amount?: number;

  CostCenter?: string;

  Currency?: string;

  Description?: string;

  Project?: string;

  TransactionInformation?: string;
}

export interface InvoicePaymentWrap {
  InvoicePayment?: FortnoxInvoicePayment;
}

export interface InvoicepaymentListResponse {
  InvoicePayments?: Array<InvoicepaymentListResponse.InvoicePayment>;
}

export namespace InvoicepaymentListResponse {
  export interface InvoicePayment {
    InvoiceNumber: number;

    '@url'?: string;

    Amount?: number;

    Booked?: boolean;

    Currency?: string;

    CurrencyRate?: number;

    CurrencyUnit?: number;

    Number?: string;

    PaymentDate?: string;

    Source?: string;

    WriteOffExist?: boolean;
  }
}

export interface InvoicepaymentCreateParams {
  InvoicePayment?: FortnoxInvoicePayment;
}

export interface InvoicepaymentUpdateParams {
  InvoicePayment?: FortnoxInvoicePayment;
}

export interface InvoicepaymentListParams {
  /**
   * filter by invoice number
   */
  invoicenumber?: number;

  /**
   * filter by last modified
   */
  lastmodified?: string;

  /**
   * field to sort returned list on
   */
  sortby?: 'paymentdate';
}

export interface InvoicepaymentBookkeepParams {
  InvoicePayment?: FortnoxInvoicePayment;
}

export declare namespace Invoicepayments {
  export {
    type FortnoxInvoicePayment as FortnoxInvoicePayment,
    type FortnoxInvoicePaymentWriteOff as FortnoxInvoicePaymentWriteOff,
    type InvoicePaymentWrap as InvoicePaymentWrap,
    type InvoicepaymentListResponse as InvoicepaymentListResponse,
    type InvoicepaymentCreateParams as InvoicepaymentCreateParams,
    type InvoicepaymentUpdateParams as InvoicepaymentUpdateParams,
    type InvoicepaymentListParams as InvoicepaymentListParams,
    type InvoicepaymentBookkeepParams as InvoicepaymentBookkeepParams,
  };
}
