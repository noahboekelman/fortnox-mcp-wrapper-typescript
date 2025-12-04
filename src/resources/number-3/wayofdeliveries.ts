// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Wayofdeliveries extends APIResource {
  /**
   * Create a way of delivery
   */
  create(
    body: WayofdeliveryCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxWayOfDeliveryWrap> {
    return this._client.post('/3/wayofdeliveries', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single way of delivery
   */
  retrieve(code: string, options?: RequestOptions): APIPromise<FortnoxWayOfDeliveryWrap> {
    return this._client.get(path`/3/wayofdeliveries/${code}`, options);
  }

  /**
   * Update a way of delivery
   */
  update(
    code: string,
    body: WayofdeliveryUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxWayOfDeliveryWrap> {
    return this._client.put(path`/3/wayofdeliveries/${code}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * The way of delivery register can return a list of records or a single record. By
   * specifying a Code in the URL, a single record will be returned. Not specifying a
   * Code will return a list of records.
   */
  list(options?: RequestOptions): APIPromise<WayofdeliveryListResponse> {
    return this._client.get('/3/wayofdeliveries', options);
  }

  /**
   * Remove a way of delivery
   */
  delete(code: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/wayofdeliveries/${code}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FortnoxWayOfDelivery {
  Code: string;

  '@url'?: string;

  Description?: string;

  DescriptionEnglish?: string;
}

export interface FortnoxWayOfDeliveryWrap {
  WayOfDelivery?: FortnoxWayOfDelivery;
}

export interface WayofdeliveryListResponse {
  WayOfDeliveries?: Array<FortnoxWayOfDelivery>;
}

export interface WayofdeliveryCreateParams {
  WayOfDelivery?: FortnoxWayOfDelivery;
}

export interface WayofdeliveryUpdateParams {
  WayOfDelivery?: FortnoxWayOfDelivery;
}

export declare namespace Wayofdeliveries {
  export {
    type FortnoxWayOfDelivery as FortnoxWayOfDelivery,
    type FortnoxWayOfDeliveryWrap as FortnoxWayOfDeliveryWrap,
    type WayofdeliveryListResponse as WayofdeliveryListResponse,
    type WayofdeliveryCreateParams as WayofdeliveryCreateParams,
    type WayofdeliveryUpdateParams as WayofdeliveryUpdateParams,
  };
}
