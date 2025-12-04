// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Termsofpayments extends APIResource {
  /**
   * Create a term of payment
   */
  create(body: TermsofpaymentCreateParams, options?: RequestOptions): APIPromise<FortnoxTermsOfPaymentWrap> {
    return this._client.post('/3/termsofpayments', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single terms of payment
   */
  retrieve(code: string, options?: RequestOptions): APIPromise<FortnoxTermsOfPaymentWrap> {
    return this._client.get(path`/3/termsofpayments/${code}`, options);
  }

  /**
   * Update a term of payment
   */
  update(
    code: string,
    body: TermsofpaymentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FortnoxTermsOfPaymentWrap> {
    return this._client.put(path`/3/termsofpayments/${code}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a list of all terms of payments
   */
  list(options?: RequestOptions): APIPromise<TermsofpaymentListResponse> {
    return this._client.get('/3/termsofpayments', options);
  }

  /**
   * Remove a term of payment
   */
  delete(code: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/termsofpayments/${code}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FortnoxTermsOfPayment {
  Code: string;

  Description: string;

  '@url'?: string;
}

export interface FortnoxTermsOfPaymentWrap {
  TermsOfPayment: FortnoxTermsOfPayment;
}

export interface TermsofpaymentListResponse {
  TermsOfPayments?: Array<FortnoxTermsOfPayment>;
}

export interface TermsofpaymentCreateParams {
  TermsOfPayment: FortnoxTermsOfPayment;
}

export interface TermsofpaymentUpdateParams {
  TermsOfPayment: FortnoxTermsOfPayment;
}

export declare namespace Termsofpayments {
  export {
    type FortnoxTermsOfPayment as FortnoxTermsOfPayment,
    type FortnoxTermsOfPaymentWrap as FortnoxTermsOfPaymentWrap,
    type TermsofpaymentListResponse as TermsofpaymentListResponse,
    type TermsofpaymentCreateParams as TermsofpaymentCreateParams,
    type TermsofpaymentUpdateParams as TermsofpaymentUpdateParams,
  };
}
