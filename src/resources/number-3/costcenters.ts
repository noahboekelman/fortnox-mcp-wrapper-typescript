// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Costcenters extends APIResource {
  /**
   * Create a cost center
   */
  create(
    body: CostcenterCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CostCenterWrap> {
    return this._client.post('/3/costcenters', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single cost center
   */
  retrieve(code: string, options?: RequestOptions): APIPromise<CostCenterWrap> {
    return this._client.get(path`/3/costcenters/${code}`, options);
  }

  /**
   * Update a cost center
   */
  update(
    code: string,
    body: CostcenterUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CostCenterWrap> {
    return this._client.put(path`/3/costcenters/${code}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * The cost centers register can return a list of records or a single record. By
   * specifying a Code in the URL, a single record will be returned. Not specifying a
   * Code will return a list of records.
   */
  list(options?: RequestOptions): APIPromise<CostcenterListResponse> {
    return this._client.get('/3/costcenters', options);
  }

  /**
   * Remove a cost center
   */
  delete(code: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/costcenters/${code}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CostCenter {
  Code: string;

  Description: string;

  '@url'?: string;

  Active?: boolean;

  Note?: string;
}

export interface CostCenterWrap {
  CostCenter?: CostCenter;
}

export interface CostcenterListResponse {
  CostCenters?: Array<CostCenter>;
}

export interface CostcenterCreateParams {
  CostCenter?: CostCenter;
}

export interface CostcenterUpdateParams {
  CostCenter?: CostCenter;
}

export declare namespace Costcenters {
  export {
    type CostCenter as CostCenter,
    type CostCenterWrap as CostCenterWrap,
    type CostcenterListResponse as CostcenterListResponse,
    type CostcenterCreateParams as CostcenterCreateParams,
    type CostcenterUpdateParams as CostcenterUpdateParams,
  };
}
