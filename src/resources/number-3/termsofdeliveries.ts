// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Termsofdeliveries extends APIResource {
  /**
   * Create a terms of delivery
   */
  create(
    body: TermsofdeliveryCreateParams,
    options?: RequestOptions,
  ): APIPromise<FortnoxTermsOfDeliveryWrap> {
    return this._client.post('/3/termsofdeliveries', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single terms of delivery
   */
  retrieve(code: string, options?: RequestOptions): APIPromise<FortnoxTermsOfDeliveryWrap> {
    return this._client.get(path`/3/termsofdeliveries/${code}`, options);
  }

  /**
   * Update a terms of delivery
   */
  update(
    code: string,
    body: TermsofdeliveryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FortnoxTermsOfDeliveryWrap> {
    return this._client.put(path`/3/termsofdeliveries/${code}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * The terms of deliveries register can return a list of records or a single
   * record. By specifying a Code in the URL, a single record will be returned. Not
   * specifying a Code will return a list of records.
   */
  list(options?: RequestOptions): APIPromise<TermsofdeliveryListResponse> {
    return this._client.get('/3/termsofdeliveries', options);
  }
}

export interface FortnoxTermsOfDelivery {
  Code: string;

  Description: string;

  '@url'?: string;

  DescriptionEnglish?: string;
}

export interface FortnoxTermsOfDeliveryWrap {
  TermsOfDelivery: FortnoxTermsOfDelivery;
}

export interface TermsofdeliveryListResponse {
  TermsOfDeliveries?: Array<FortnoxTermsOfDelivery>;
}

export interface TermsofdeliveryCreateParams {
  TermsOfDelivery: FortnoxTermsOfDelivery;
}

export interface TermsofdeliveryUpdateParams {
  TermsOfDelivery: FortnoxTermsOfDelivery;
}

export declare namespace Termsofdeliveries {
  export {
    type FortnoxTermsOfDelivery as FortnoxTermsOfDelivery,
    type FortnoxTermsOfDeliveryWrap as FortnoxTermsOfDeliveryWrap,
    type TermsofdeliveryListResponse as TermsofdeliveryListResponse,
    type TermsofdeliveryCreateParams as TermsofdeliveryCreateParams,
    type TermsofdeliveryUpdateParams as TermsofdeliveryUpdateParams,
  };
}
