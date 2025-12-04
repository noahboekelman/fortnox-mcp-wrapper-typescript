// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Supplierinvoicepayments extends APIResource {
  /**
   * Create a supplier invoice payment
   */
  create(
    body: SupplierinvoicepaymentCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxSupplierInvoicePaymentWrap> {
    return this._client.post('/3/supplierinvoicepayments', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single supplier invoice payment
   */
  retrieve(number: number, options?: RequestOptions): APIPromise<FortnoxSupplierInvoicePaymentWrap> {
    return this._client.get(path`/3/supplierinvoicepayments/${number}`, options);
  }

  /**
   * Update a supplier invoice payment
   */
  update(
    number: number,
    body: SupplierinvoicepaymentUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxSupplierInvoicePaymentWrap> {
    return this._client.put(path`/3/supplierinvoicepayments/${number}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a list of supplier invoice payments
   */
  list(options?: RequestOptions): APIPromise<SupplierinvoicepaymentListResponse> {
    return this._client.get('/3/supplierinvoicepayments', options);
  }

  /**
   * Remove a supplier invoice payment
   */
  delete(number: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/supplierinvoicepayments/${number}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Bookkeep a supplier invoice payment
   */
  bookkeep(number: number, options?: RequestOptions): APIPromise<FortnoxSupplierInvoicePaymentWrap> {
    return this._client.put(path`/3/supplierinvoicepayments/${number}/bookkeep`, options);
  }
}

export interface FortnoxSupplierInvoicePayment {
  InvoiceNumber: string;

  '@url'?: string;

  Amount?: number;

  AmountCurrency?: number;

  Booked?: boolean;

  Currency?: string;

  CurrencyRate?: number;

  CurrencyUnit?: number;

  Information?: string;

  InvoiceDueDate?: string;

  InvoiceOCR?: string;

  InvoiceSupplierName?: string;

  InvoiceSupplierNumber?: string;

  InvoiceTotal?: string;

  ModeOfPayment?: string;

  Number?: number;

  PaymentDate?: string;

  Source?: 'manual' | 'direct';

  VoucherNumber?: number;

  VoucherSeries?: string;

  VoucherYear?: number;

  WriteOffs?: Array<FortnoxSupplierInvoicePaymentWriteOff>;
}

export interface FortnoxSupplierInvoicePaymentWrap {
  SupplierInvoicePayment?: FortnoxSupplierInvoicePayment;
}

export interface FortnoxSupplierInvoicePaymentWriteOff {
  AccountNumber?: number;

  Amount?: number;

  CostCenter?: string;

  Currency?: string;

  Description?: string;

  Project?: string;

  TransactionInformation?: string;
}

export interface SupplierinvoicepaymentListResponse {
  SupplierInvoicePayments?: Array<SupplierinvoicepaymentListResponse.SupplierInvoicePayment>;
}

export namespace SupplierinvoicepaymentListResponse {
  export interface SupplierInvoicePayment {
    InvoiceNumber: string;

    '@url'?: string;

    Amount?: number;

    Booked?: boolean;

    Currency?: string;

    CurrencyRate?: number;

    CurrencyUnit?: number;

    Number?: number;

    PaymentDate?: string;

    Source?: 'manual' | 'direct';

    WriteOffExist?: boolean;
  }
}

export interface SupplierinvoicepaymentCreateParams {
  SupplierInvoicePayment?: FortnoxSupplierInvoicePayment;
}

export interface SupplierinvoicepaymentUpdateParams {
  SupplierInvoicePayment?: FortnoxSupplierInvoicePayment;
}

export declare namespace Supplierinvoicepayments {
  export {
    type FortnoxSupplierInvoicePayment as FortnoxSupplierInvoicePayment,
    type FortnoxSupplierInvoicePaymentWrap as FortnoxSupplierInvoicePaymentWrap,
    type FortnoxSupplierInvoicePaymentWriteOff as FortnoxSupplierInvoicePaymentWriteOff,
    type SupplierinvoicepaymentListResponse as SupplierinvoicepaymentListResponse,
    type SupplierinvoicepaymentCreateParams as SupplierinvoicepaymentCreateParams,
    type SupplierinvoicepaymentUpdateParams as SupplierinvoicepaymentUpdateParams,
  };
}
