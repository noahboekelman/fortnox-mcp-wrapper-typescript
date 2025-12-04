// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Supplierinvoiceaccruals extends APIResource {
  /**
   * Create a supplier invoice accrual
   */
  create(
    body: SupplierinvoiceaccrualCreateParams,
    options?: RequestOptions,
  ): APIPromise<SupplierInvoiceAccrualWrap> {
    return this._client.post('/3/supplierinvoiceaccruals', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single supplier invoice accrual
   */
  retrieve(supplierInvoiceNumber: number, options?: RequestOptions): APIPromise<SupplierInvoiceAccrualWrap> {
    return this._client.get(path`/3/supplierinvoiceaccruals/${supplierInvoiceNumber}`, options);
  }

  /**
   * Update a supplier invoice accrual
   */
  update(
    supplierInvoiceNumber: number,
    body: SupplierinvoiceaccrualUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SupplierInvoiceAccrualWrap> {
    return this._client.put(path`/3/supplierinvoiceaccruals/${supplierInvoiceNumber}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * The supplier invoice accruals register can return a list of records or a single
   * record. By specifying a SupplierInvoiceNumber in the URL, a single record will
   * be returned. Not specifying a SupplierInvoiceNumber will return a list of
   * records.
   */
  list(options?: RequestOptions): APIPromise<SupplierinvoiceaccrualListResponse> {
    return this._client.get('/3/supplierinvoiceaccruals', options);
  }

  /**
   * Remove a supplier invoice accrual
   */
  delete(supplierInvoiceNumber: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/supplierinvoiceaccruals/${supplierInvoiceNumber}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FortnoxSupplierInvoiceAccrual {
  AccrualAccount: number;

  CostAccount: number;

  EndDate: string;

  Period:
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

  StartDate: string;

  SupplierInvoiceAccrualRows: Array<FortnoxSupplierInvoiceAccrualSupplierInvoiceAccrualRows>;

  SupplierInvoiceNumber: number;

  Times: number;

  Total: number;

  '@url'?: string;

  Description?: string;

  VATIncluded?: boolean;
}

export interface FortnoxSupplierInvoiceAccrualSupplierInvoiceAccrualRows {
  Account?: number;

  CostCenter?: string;

  Credit?: number;

  Debit?: number;

  Project?: string;

  TransactionInformation?: string;
}

export interface SupplierInvoiceAccrualWrap {
  SupplierInvoiceAccrual: FortnoxSupplierInvoiceAccrual;
}

export interface SupplierinvoiceaccrualListResponse {
  SupplierInvoiceAccruals?: Array<SupplierinvoiceaccrualListResponse.SupplierInvoiceAccrual>;
}

export namespace SupplierinvoiceaccrualListResponse {
  export interface SupplierInvoiceAccrual {
    Period:
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

    '@url'?: string;

    Description?: string;

    SupplierInvoiceNumber?: number;
  }
}

export interface SupplierinvoiceaccrualCreateParams {
  SupplierInvoiceAccrual: FortnoxSupplierInvoiceAccrual;
}

export interface SupplierinvoiceaccrualUpdateParams {
  SupplierInvoiceAccrual: FortnoxSupplierInvoiceAccrual;
}

export declare namespace Supplierinvoiceaccruals {
  export {
    type FortnoxSupplierInvoiceAccrual as FortnoxSupplierInvoiceAccrual,
    type FortnoxSupplierInvoiceAccrualSupplierInvoiceAccrualRows as FortnoxSupplierInvoiceAccrualSupplierInvoiceAccrualRows,
    type SupplierInvoiceAccrualWrap as SupplierInvoiceAccrualWrap,
    type SupplierinvoiceaccrualListResponse as SupplierinvoiceaccrualListResponse,
    type SupplierinvoiceaccrualCreateParams as SupplierinvoiceaccrualCreateParams,
    type SupplierinvoiceaccrualUpdateParams as SupplierinvoiceaccrualUpdateParams,
  };
}
