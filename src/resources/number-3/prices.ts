// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Prices extends APIResource {
  /**
   * Create a price
   */
  create(body: PriceCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<PriceWrap> {
    return this._client.post('/3/prices', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a price for a specified article
   */
  retrieve(
    fromQuantity: number,
    params: PriceRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<PriceWrap> {
    const { PriceList, ArticleNumber } = params;
    return this._client.get(path`/3/prices/${PriceList}/${ArticleNumber}/${fromQuantity}`, options);
  }

  /**
   * Update a price
   */
  update(fromQuantity: number, params: PriceUpdateParams, options?: RequestOptions): APIPromise<PriceWrap> {
    const { PriceList, ArticleNumber, ...body } = params;
    return this._client.put(path`/3/prices/${PriceList}/${ArticleNumber}/${fromQuantity}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a list of prices
   */
  list(options?: RequestOptions): APIPromise<PriceWrap> {
    return this._client.get('/3/prices', options);
  }

  /**
   * Delete a single price
   */
  delete(fromQuantity: number, params: PriceDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { PriceList, ArticleNumber } = params;
    return this._client.delete(path`/3/prices/${PriceList}/${ArticleNumber}/${fromQuantity}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve the first price for the specified article
   */
  retrieveFirst(
    articleNumber: string,
    params: PriceRetrieveFirstParams,
    options?: RequestOptions,
  ): APIPromise<PriceWrap> {
    const { PriceList } = params;
    return this._client.get(path`/3/prices/${PriceList}/${articleNumber}`, options);
  }

  /**
   * The list contains a slimmer version of the prices. To get a full entity, use the
   * GET with a price list, article number and from quantity.
   */
  retrieveSublist(
    articleNumber: string,
    params: PriceRetrieveSublistParams,
    options?: RequestOptions,
  ): APIPromise<PriceRetrieveSublistResponse> {
    const { PriceList } = params;
    return this._client.get(path`/3/prices/sublist/${PriceList}/${articleNumber}`, options);
  }

  /**
   * Update the first price in the specified article
   */
  updateFirst(
    articleNumber: string,
    params: PriceUpdateFirstParams,
    options?: RequestOptions,
  ): APIPromise<PriceWrap> {
    const { PriceList, ...body } = params;
    return this._client.put(path`/3/prices/${PriceList}/${articleNumber}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }
}

export interface FortnoxPrice {
  ArticleNumber: string;

  PriceList: string;

  '@url'?: string;

  Date?: string;

  FromQuantity?: number;

  Percent?: number;

  Price?: number;
}

export interface PriceWrap {
  Price?: FortnoxPrice;
}

export interface PriceRetrieveSublistResponse {
  Prices?: Array<PriceRetrieveSublistResponse.Price>;
}

export namespace PriceRetrieveSublistResponse {
  export interface Price {
    ArticleNumber: string;

    PriceList: string;

    '@url'?: string;

    FromQuantity?: number;

    Price?: number;
  }
}

export interface PriceCreateParams {
  Price?: FortnoxPrice;
}

export interface PriceRetrieveParams {
  /**
   * identifies the price list
   */
  PriceList: string;

  /**
   * identifies the article
   */
  ArticleNumber: string;
}

export interface PriceUpdateParams {
  /**
   * Path param: identifies the price list
   */
  PriceList: string;

  /**
   * Path param: identifies the article number
   */
  ArticleNumber: string;

  /**
   * Body param:
   */
  Price?: FortnoxPrice;
}

export interface PriceDeleteParams {
  /**
   * identifies the price list
   */
  PriceList: string;

  /**
   * identifies the article number
   */
  ArticleNumber: string;
}

export interface PriceRetrieveFirstParams {
  /**
   * identifies the price list
   */
  PriceList: string;
}

export interface PriceRetrieveSublistParams {
  /**
   * identifies the price list of the prices
   */
  PriceList: string;
}

export interface PriceUpdateFirstParams {
  /**
   * Path param: identifies the price list
   */
  PriceList: string;

  /**
   * Body param:
   */
  Price?: FortnoxPrice;
}

export declare namespace Prices {
  export {
    type FortnoxPrice as FortnoxPrice,
    type PriceWrap as PriceWrap,
    type PriceRetrieveSublistResponse as PriceRetrieveSublistResponse,
    type PriceCreateParams as PriceCreateParams,
    type PriceRetrieveParams as PriceRetrieveParams,
    type PriceUpdateParams as PriceUpdateParams,
    type PriceDeleteParams as PriceDeleteParams,
    type PriceRetrieveFirstParams as PriceRetrieveFirstParams,
    type PriceRetrieveSublistParams as PriceRetrieveSublistParams,
    type PriceUpdateFirstParams as PriceUpdateFirstParams,
  };
}
