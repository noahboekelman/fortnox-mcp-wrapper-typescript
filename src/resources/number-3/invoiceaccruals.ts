// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Invoiceaccruals extends APIResource {
  /**
   * Create an invoice accrual
   */
  create(
    body: InvoiceaccrualCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoiceAccrualWrap> {
    return this._client.post('/3/invoiceaccruals', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single invoice accrual
   */
  retrieve(invoiceNumber: number, options?: RequestOptions): APIPromise<InvoiceAccrualWrap> {
    return this._client.get(path`/3/invoiceaccruals/${invoiceNumber}`, options);
  }

  /**
   * Update an invoice accrual
   */
  update(
    invoiceNumber: number,
    body: InvoiceaccrualUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoiceAccrualWrap> {
    return this._client.put(path`/3/invoiceaccruals/${invoiceNumber}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * The invoice accruals register can return a list of records or a single record.
   * By specifying a InvoiceNumber in the URL, a single record will be returned. Not
   * specifying a InvoiceNumber will return a list of records.
   */
  list(options?: RequestOptions): APIPromise<InvoiceaccrualListResponse> {
    return this._client.get('/3/invoiceaccruals', options);
  }

  /**
   * Remove an invoice accrual
   */
  remove(invoiceNumber: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/invoiceaccruals/${invoiceNumber}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FortnoxInvoiceAccrual {
  AccrualAccount: number;

  Description: string;

  EndDate: string;

  InvoiceAccrualRows: Array<FortnoxInvoiceAccrualInvoiceAccrualRow>;

  InvoiceNumber: number;

  RevenueAccount: number;

  StartDate: string;

  Total: number;

  '@url'?: string;

  Period?:
    | 'MONTHLY'
    | 'BIMONTHLY'
    | 'QUARTERLY'
    | 'SEMIANNUALLY'
    | 'ANNUALLY'
    | '1_MONTHS'
    | '2_MONTHS'
    | '3_MONTHS'
    | '6_MONTHS'
    | '12_MONTHS';

  Times?: number;

  VATIncluded?: boolean;
}

export interface FortnoxInvoiceAccrualInvoiceAccrualRow {
  Account?: number;

  CostCenter?: string;

  Credit?: number;

  Debit?: number;

  Project?: string;

  TransactionInformation?: string;
}

export interface InvoiceAccrualWrap {
  InvoiceAccrual?: FortnoxInvoiceAccrual;
}

export interface InvoiceaccrualListResponse {
  InvoiceAccruals?: Array<InvoiceaccrualListResponse.InvoiceAccrual>;
}

export namespace InvoiceaccrualListResponse {
  export interface InvoiceAccrual {
    Description: string;

    InvoiceNumber: number;

    '@url'?: string;

    Period?:
      | 'MONTHLY'
      | 'BIMONTHLY'
      | 'QUARTERLY'
      | 'SEMIANNUALLY'
      | 'ANNUALLY'
      | '1_MONTHS'
      | '2_MONTHS'
      | '3_MONTHS'
      | '6_MONTHS'
      | '12_MONTHS';
  }
}

export interface InvoiceaccrualCreateParams {
  InvoiceAccrual?: FortnoxInvoiceAccrual;
}

export interface InvoiceaccrualUpdateParams {
  InvoiceAccrual?: FortnoxInvoiceAccrual;
}

export declare namespace Invoiceaccruals {
  export {
    type FortnoxInvoiceAccrual as FortnoxInvoiceAccrual,
    type FortnoxInvoiceAccrualInvoiceAccrualRow as FortnoxInvoiceAccrualInvoiceAccrualRow,
    type InvoiceAccrualWrap as InvoiceAccrualWrap,
    type InvoiceaccrualListResponse as InvoiceaccrualListResponse,
    type InvoiceaccrualCreateParams as InvoiceaccrualCreateParams,
    type InvoiceaccrualUpdateParams as InvoiceaccrualUpdateParams,
  };
}
