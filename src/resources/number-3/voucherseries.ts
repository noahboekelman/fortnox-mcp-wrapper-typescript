// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Voucherseries extends APIResource {
  /**
   * Create a voucher series
   */
  create(body: VoucherseryCreateParams, options?: RequestOptions): APIPromise<FortnoxVoucherSeriesWrap> {
    return this._client.post('/3/voucherseries', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single voucher series
   */
  retrieve(code: string, options?: RequestOptions): APIPromise<FortnoxVoucherSeriesWrap> {
    return this._client.get(path`/3/voucherseries/${code}`, options);
  }

  /**
   * Update a voucher series
   */
  update(
    code: string,
    body: VoucherseryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FortnoxVoucherSeriesWrap> {
    return this._client.put(path`/3/voucherseries/${code}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * The voucher series register can return a list of records or a single record. By
   * specifying a Code in the URL, a single record will be returned. Not specifying a
   * Code will return a list of records.
   */
  list(options?: RequestOptions): APIPromise<VoucherseryListResponse> {
    return this._client.get('/3/voucherseries', options);
  }
}

export interface FortnoxVoucherSeries {
  Code: string;

  '@url'?: string;

  Approver?: FortnoxVoucherSeriesApprover;

  Description?: string;

  Manual?: boolean;

  NextVoucherNumber?: number;

  Year?: number;
}

export interface FortnoxVoucherSeriesApprover {
  Id?: number;

  Name?: string;
}

export interface FortnoxVoucherSeriesWrap {
  VoucherSeries: FortnoxVoucherSeries;
}

export interface VoucherseryListResponse {
  VoucherSeriesCollection?: Array<VoucherseryListResponse.VoucherSeriesCollection>;
}

export namespace VoucherseryListResponse {
  export interface VoucherSeriesCollection {
    Code: string;

    '@url'?: string;

    Approver?: VoucherSeriesCollection.Approver;

    Description?: string;

    Manual?: boolean;

    Year?: number;
  }

  export namespace VoucherSeriesCollection {
    export interface Approver {
      Id?: number;

      Name?: string;
    }
  }
}

export interface VoucherseryCreateParams {
  VoucherSeries: FortnoxVoucherSeries;
}

export interface VoucherseryUpdateParams {
  VoucherSeries: FortnoxVoucherSeries;
}

export declare namespace Voucherseries {
  export {
    type FortnoxVoucherSeries as FortnoxVoucherSeries,
    type FortnoxVoucherSeriesApprover as FortnoxVoucherSeriesApprover,
    type FortnoxVoucherSeriesWrap as FortnoxVoucherSeriesWrap,
    type VoucherseryListResponse as VoucherseryListResponse,
    type VoucherseryCreateParams as VoucherseryCreateParams,
    type VoucherseryUpdateParams as VoucherseryUpdateParams,
  };
}
