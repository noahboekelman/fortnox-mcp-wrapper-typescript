// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Predefinedvoucherseries extends APIResource {
  /**
   * Retrieve a specific predefined voucher series
   */
  retrieve(name: string, options?: RequestOptions): APIPromise<PredefinedVoucherSeriesWrap> {
    return this._client.get(path`/3/predefinedvoucherseries/${name}`, options);
  }

  /**
   * Update a predefined voucher series
   */
  update(
    name: string,
    body: PredefinedvoucherseryUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PredefinedVoucherSeriesWrap> {
    return this._client.put(path`/3/predefinedvoucherseries/${name}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a list of predefined voucher series
   */
  list(options?: RequestOptions): APIPromise<PredefinedvoucherseryListResponse> {
    return this._client.get('/3/predefinedvoucherseries', options);
  }
}

export interface PredefinedVoucherSeries {
  VoucherSeries: string;

  '@url'?: string;

  Name?: string;
}

export interface PredefinedVoucherSeriesWrap {
  PreDefinedVoucherSeries?: PredefinedVoucherSeries;
}

export interface PredefinedvoucherseryListResponse {
  PreDefinedVoucherSeriesCollection?: Array<PredefinedVoucherSeries>;
}

export interface PredefinedvoucherseryUpdateParams {
  PreDefinedVoucherSeries?: PredefinedVoucherSeries;
}

export declare namespace Predefinedvoucherseries {
  export {
    type PredefinedVoucherSeries as PredefinedVoucherSeries,
    type PredefinedVoucherSeriesWrap as PredefinedVoucherSeriesWrap,
    type PredefinedvoucherseryListResponse as PredefinedvoucherseryListResponse,
    type PredefinedvoucherseryUpdateParams as PredefinedvoucherseryUpdateParams,
  };
}
