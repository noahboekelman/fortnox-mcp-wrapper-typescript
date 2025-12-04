// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Pricelists extends APIResource {
  /**
   * Create a price list
   */
  create(body: PricelistCreateParams, options?: RequestOptions): APIPromise<PriceListWrap> {
    return this._client.post('/3/pricelists', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single price list
   */
  retrieve(code: string, options?: RequestOptions): APIPromise<PriceListWrap> {
    return this._client.get(path`/3/pricelists/${code}`, options);
  }

  /**
   * Update a price list
   */
  update(code: string, body: PricelistUpdateParams, options?: RequestOptions): APIPromise<PriceListWrap> {
    return this._client.put(path`/3/pricelists/${code}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * The price lists register can return a list of records or a single record. By
   * specifying a Code in the URL, a single record will be returned. Not specifying a
   * Code will return a list of records.
   */
  list(options?: RequestOptions): APIPromise<PricelistListResponse> {
    return this._client.get('/3/pricelists', options);
  }
}

export interface PriceList {
  Code: string;

  Description: string;

  '@url'?: string;

  Comments?: string;

  PreSelected?: boolean;
}

export interface PriceListWrap {
  PriceList: PriceList;
}

export interface PricelistListResponse {
  PriceLists?: Array<PriceList>;
}

export interface PricelistCreateParams {
  PriceList: PriceList;
}

export interface PricelistUpdateParams {
  PriceList: PriceList;
}

export declare namespace Pricelists {
  export {
    type PriceList as PriceList,
    type PriceListWrap as PriceListWrap,
    type PricelistListResponse as PricelistListResponse,
    type PricelistCreateParams as PricelistCreateParams,
    type PricelistUpdateParams as PricelistUpdateParams,
  };
}
