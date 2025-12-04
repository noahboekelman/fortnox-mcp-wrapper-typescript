// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Financialyears extends APIResource {
  /**
   * Create a financial year
   */
  create(body: FinancialyearCreateParams, options?: RequestOptions): APIPromise<FinancialYearWrap> {
    return this._client.post('/3/financialyears', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve financial year by id
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<FinancialYearWrap> {
    return this._client.get(path`/3/financialyears/${id}`, options);
  }

  /**
   * Add the query param to filter on specific date.
   */
  list(
    query: FinancialyearListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FinancialyearListResponse> {
    return this._client.get('/3/financialyears', { query, ...options });
  }
}

export interface FinancialYear {
  FromDate: string;

  ToDate: string;

  '@url'?: string;

  AccountChartType?: string;

  AccountingMethod?: 'ACCRUAL' | 'CASH';

  Id?: number;
}

export interface FinancialYearWrap {
  FinancialYear: FinancialYear;
}

export interface FinancialyearListResponse {
  FinancialYears?: Array<FinancialYear>;
}

export interface FinancialyearCreateParams {
  FinancialYear: FinancialYear;
}

export interface FinancialyearListParams {
  /**
   * date to filter on, for example 2020-06-30
   */
  Date?: string;
}

export declare namespace Financialyears {
  export {
    type FinancialYear as FinancialYear,
    type FinancialYearWrap as FinancialYearWrap,
    type FinancialyearListResponse as FinancialyearListResponse,
    type FinancialyearCreateParams as FinancialyearCreateParams,
    type FinancialyearListParams as FinancialyearListParams,
  };
}
