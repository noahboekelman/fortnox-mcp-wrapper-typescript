// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CustomerreferencesAPI from './customerreferences';
import * as Number3API from './number-3';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Customers extends APIResource {
  /**
   * The created customer will be returned if everything succeeded, if there was any
   * problems an error will be returned.
   */
  create(
    body: CustomerCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerreferencesAPI.CustomerWrap> {
    return this._client.post('/3/customers', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * You need to supply the unique customer number that was returned when the
   * customer was created or retrieved from the list of customers.
   */
  retrieve(customerNumber: string, options?: RequestOptions): APIPromise<CustomerreferencesAPI.CustomerWrap> {
    return this._client.get(path`/3/customers/${customerNumber}`, options);
  }

  /**
   * <p>The updated customer will be returned if everything succeeded, if there was any problems an error will be returned.</p>
   *  <p>You need to supply the unique customer number of the customer that you want to update.</p>
   *  <p>Only the properties provided in the request body will be updated, properties not provided will left unchanged.</p>
   */
  update(
    customerNumber: string,
    body: CustomerUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerreferencesAPI.CustomerWrap> {
    return this._client.put(path`/3/customers/${customerNumber}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * The customers are returned sorted by customer number with the lowest number
   * appearing first.
   */
  list(
    query: CustomerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerListResponse> {
    return this._client.get('/3/customers', { query, ...options });
  }

  /**
   * Deletes the customer permanently. If everything succeeded the response will be
   * of the type 204 \u2013 No content and the response body will be empty. If there
   * was any problems an error will be returned. You need to supply the unique
   * customer number of the customer that you want to delete.
   */
  delete(customerNumber: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/customers/${customerNumber}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CustomerListResponse {
  Customers?: Array<CustomerListResponse.Customer>;
}

export namespace CustomerListResponse {
  export interface Customer {
    Name: string;

    '@url'?: string;

    Address1?: string;

    Address2?: string;

    City?: string;

    CustomerNumber?: string;

    Email?: string;

    OrganisationNumber?: string;

    Phone?: string;

    ZipCode?: string;
  }
}

export interface CustomerCreateParams {
  Customer?: Number3API.FortnoxCustomer;
}

export interface CustomerUpdateParams {
  Customer?: Number3API.FortnoxCustomer;
}

export interface CustomerListParams {
  /**
   * filter by city
   */
  city?: string;

  /**
   * filter by customer number
   */
  customernumber?: string;

  /**
   * filter by email
   */
  email?: string;

  /**
   * possibility to filter customers
   */
  filter?: 'active' | 'inactive';

  /**
   * filter by gln
   */
  gln?: string;

  /**
   * filter by gln delivery
   */
  glndelivery?: string;

  /**
   * filter by last modified
   */
  lastmodified?: string;

  /**
   * filter by name
   */
  name?: string;

  /**
   * filter by organisation number
   */
  organisationnumber?: string;

  /**
   * filter by phone
   */
  phone?: string;

  /**
   * field to sort returned list
   */
  sortby?: 'customernumber' | 'name';

  /**
   * filter by zip code
   */
  zipcode?: string;
}

export declare namespace Customers {
  export {
    type CustomerListResponse as CustomerListResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };
}
