// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CustomerreferencesAPI from './customerreferences';
import * as Number3API from './number-3';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Customerreferences extends APIResource {
  /**
   * </p>
   *  <p>The created customer reference row will be returned if everything succeeded, if there was any problems an error will be returned.</p>
   */
  create(
    body: CustomerreferenceCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerReferenceWrap> {
    return this._client.post('/3/customerreferences', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * </p>
   *  <p>You need to supply the unique customer reference row id that was returned when the customer reference row was created or retrieved from the list of customer reference rows.</p>
   */
  retrieve(customerReferenceRowID: string, options?: RequestOptions): APIPromise<CustomerReferenceWrap> {
    return this._client.get(path`/3/customerreferences/${customerReferenceRowID}`, options);
  }

  /**
   * </p>
   *  <p>The updated customer reference row will be returned if everything succeeded, if there was any problems an error will be returned.</p>
   *  <p>You need to supply the unique customer reference row id of the customer reference row that you want to update.</p>
   *  <p>Only the properties provided in the request body will be updated, properties not provided will be left unchanged.</p>
   *  <p>CustomerNumber cannot be changed by this request.</p>
   */
  update(
    customerReferenceRowID: string,
    body: CustomerreferenceUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerWrap> {
    return this._client.put(path`/3/customerreferences/${customerReferenceRowID}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * </p>
   */
  list(
    query: CustomerreferenceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerReferenceWrap> {
    return this._client.get('/3/customerreferences', { query, ...options });
  }

  /**
   * </p>
   *  <p>Deletes the customer reference row permanently. If everything succeeded the response will be of the type 204, No content and the response body will be empty.</p>
   *  <p>If there was any problems an error will be returned.</p>
   *  <p>You need to supply the unique customer reference row id of the customer reference row that you want to delete.</p>
   */
  delete(customerReferenceRowID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/customerreferences/${customerReferenceRowID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CustomerReferenceRow {
  CustomerNumber?: string;

  Id?: number;

  Reference?: string;
}

export interface CustomerReferenceRowWrap {
  CustomerReferenceRow?: CustomerReferenceRow;
}

export interface CustomerReferenceWrap {
  CustomerReference?: CustomerReferenceWrap.CustomerReference;
}

export namespace CustomerReferenceWrap {
  export interface CustomerReference {
    CustomerReferenceRows?: Array<CustomerreferencesAPI.CustomerReferenceRow>;
  }
}

export interface CustomerWrap {
  Customer?: Number3API.FortnoxCustomer;
}

export interface CustomerreferenceCreateParams {
  CustomerReferenceRow?: CustomerReferenceRow;
}

export interface CustomerreferenceUpdateParams {
  CustomerReferenceRow?: CustomerReferenceRow;
}

export interface CustomerreferenceListParams {
  /**
   * possibility to filter by customer number
   */
  customer?: string;
}

export declare namespace Customerreferences {
  export {
    type CustomerReferenceRow as CustomerReferenceRow,
    type CustomerReferenceRowWrap as CustomerReferenceRowWrap,
    type CustomerReferenceWrap as CustomerReferenceWrap,
    type CustomerWrap as CustomerWrap,
    type CustomerreferenceCreateParams as CustomerreferenceCreateParams,
    type CustomerreferenceUpdateParams as CustomerreferenceUpdateParams,
    type CustomerreferenceListParams as CustomerreferenceListParams,
  };
}
