// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Units extends APIResource {
  /**
   * Create a unit
   */
  create(body: UnitCreateParams, options?: RequestOptions): APIPromise<FortnoxUnitWrap> {
    return this._client.post('/3/units', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single unit
   */
  retrieve(code: string, options?: RequestOptions): APIPromise<FortnoxUnitWrap> {
    return this._client.get(path`/3/units/${code}`, options);
  }

  /**
   * Update a unit
   */
  update(code: string, body: UnitUpdateParams, options?: RequestOptions): APIPromise<FortnoxUnitWrap> {
    return this._client.put(path`/3/units/${code}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * The units register can return a list of records or a single record. By
   * specifying a Code in the URL, a single record will be returned. Not specifying a
   * Code will return a list of records.
   */
  list(options?: RequestOptions): APIPromise<UnitListResponse> {
    return this._client.get('/3/units', options);
  }

  /**
   * Remove a unit
   */
  delete(code: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/units/${code}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FortnoxUnit {
  Code: string;

  Description: string;

  '@url'?: string;

  CodeEnglish?: string;
}

export interface FortnoxUnitWrap {
  Unit: FortnoxUnit;
}

export interface UnitListResponse {
  Units?: Array<FortnoxUnit>;
}

export interface UnitCreateParams {
  Unit: FortnoxUnit;
}

export interface UnitUpdateParams {
  Unit: FortnoxUnit;
}

export declare namespace Units {
  export {
    type FortnoxUnit as FortnoxUnit,
    type FortnoxUnitWrap as FortnoxUnitWrap,
    type UnitListResponse as UnitListResponse,
    type UnitCreateParams as UnitCreateParams,
    type UnitUpdateParams as UnitUpdateParams,
  };
}
