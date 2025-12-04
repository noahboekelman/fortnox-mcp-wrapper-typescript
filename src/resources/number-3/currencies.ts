// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AssetfileconnectionsAPI from './assetfileconnections';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Currencies extends APIResource {
  /**
   * Create a currency
   */
  create(body: CurrencyCreateParams, options?: RequestOptions): APIPromise<CurrencyWrap> {
    return this._client.post('/3/currencies', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single currency
   */
  retrieve(code: string, options?: RequestOptions): APIPromise<CurrencyWrap> {
    return this._client.get(path`/3/currencies/${code}`, options);
  }

  /**
   * Update a currency
   */
  update(code: string, body: CurrencyUpdateParams, options?: RequestOptions): APIPromise<CurrencyWrap> {
    return this._client.put(path`/3/currencies/${code}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * The currency register can return a list of records or a single record. By
   * specifying a Code in the URL, a single record will be returned. Not specifying a
   * Code will return a list of records.
   */
  list(options?: RequestOptions): APIPromise<CurrencyListResponse> {
    return this._client.get('/3/currencies', options);
  }

  /**
   * Remove a currency
   */
  delete(code: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/currencies/${code}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Currency {
  Code: string;

  Description: string;

  '@url'?: string;

  BuyRate?: number;

  Date?: string;

  IsAutomatic?: boolean;

  SellRate?: number;

  Unit?: number;
}

export interface CurrencyWrap {
  Currency: Currency;
}

export interface CurrencyListResponse {
  Currencies?: Array<Currency>;

  MetaInformation?: AssetfileconnectionsAPI.FortnoxMetaInformation;
}

export interface CurrencyCreateParams {
  Currency: Currency;
}

export interface CurrencyUpdateParams {
  Currency: Currency;
}

export declare namespace Currencies {
  export {
    type Currency as Currency,
    type CurrencyWrap as CurrencyWrap,
    type CurrencyListResponse as CurrencyListResponse,
    type CurrencyCreateParams as CurrencyCreateParams,
    type CurrencyUpdateParams as CurrencyUpdateParams,
  };
}
