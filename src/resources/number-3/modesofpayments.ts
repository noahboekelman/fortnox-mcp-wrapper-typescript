// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Modesofpayments extends APIResource {
  /**
   * Create a mode of payment
   */
  create(body: ModesofpaymentCreateParams, options?: RequestOptions): APIPromise<ModeOfPaymentWrap> {
    return this._client.post('/3/modesofpayments', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single mode of payment
   */
  retrieve(code: string, options?: RequestOptions): APIPromise<ModeOfPaymentWrap> {
    return this._client.get(path`/3/modesofpayments/${code}`, options);
  }

  /**
   * Update a mode of payment
   */
  update(
    code: string,
    body: ModesofpaymentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ModeOfPaymentWrap> {
    return this._client.put(path`/3/modesofpayments/${code}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * The modes of payments register can return a list of records or a single record.
   * By specifying a Code in the URL, a single record will be returned. Not
   * specifying a Code will return a list of records.
   */
  list(options?: RequestOptions): APIPromise<ModesofpaymentListResponse> {
    return this._client.get('/3/modesofpayments', options);
  }

  /**
   * Remove a mode of payment
   */
  delete(code: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/modesofpayments/${code}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ModeOfPayment {
  AccountNumber: string;

  '@url'?: string;

  Code?: string;

  Description?: string;
}

export interface ModeOfPaymentWrap {
  ModeOfPayment: ModeOfPayment;
}

export interface ModesofpaymentListResponse {
  ModesOfPayments?: Array<ModeOfPayment>;
}

export interface ModesofpaymentCreateParams {
  ModeOfPayment: ModeOfPayment;
}

export interface ModesofpaymentUpdateParams {
  ModeOfPayment: ModeOfPayment;
}

export declare namespace Modesofpayments {
  export {
    type ModeOfPayment as ModeOfPayment,
    type ModeOfPaymentWrap as ModeOfPaymentWrap,
    type ModesofpaymentListResponse as ModesofpaymentListResponse,
    type ModesofpaymentCreateParams as ModesofpaymentCreateParams,
    type ModesofpaymentUpdateParams as ModesofpaymentUpdateParams,
  };
}
