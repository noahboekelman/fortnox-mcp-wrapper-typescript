// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Salarytransactions extends APIResource {
  /**
   * Create a new salary transaction for an employee
   */
  create(body: SalarytransactionCreateParams, options?: RequestOptions): APIPromise<SalaryTransactionWrap> {
    return this._client.post('/3/salarytransactions', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single salary transaction
   */
  retrieve(salaryRow: number, options?: RequestOptions): APIPromise<SalaryTransactionWrap> {
    return this._client.get(path`/3/salarytransactions/${salaryRow}`, options);
  }

  /**
   * Update a salary transaction
   */
  update(
    salaryRow: number,
    body: SalarytransactionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SalaryTransactionWrap> {
    return this._client.put(path`/3/salarytransactions/${salaryRow}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Supports query-string parameters <b>employeeid</b> and <b>date</b> for filtering
   * the result.
   */
  list(
    query: SalarytransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SalarytransactionListResponse> {
    return this._client.get('/3/salarytransactions', { query, ...options });
  }

  /**
   * Delete a single salary transaction
   */
  delete(salaryRow: number, options?: RequestOptions): APIPromise<SalaryTransactionWrap> {
    return this._client.delete(path`/3/salarytransactions/${salaryRow}`, options);
  }
}

export interface FortnoxSalaryTransaction {
  Date: string;

  EmployeeId: string;

  SalaryCode: string;

  Amount?: string;

  CostCenter?: string;

  Expense?: string;

  Number?: string;

  Project?: string;

  SalaryRow?: number;

  TextRow?: string;

  Total?: string;

  VAT?: string;
}

export interface SalaryTransactionWrap {
  SalaryTransaction: FortnoxSalaryTransaction;
}

export interface SalarytransactionListResponse {
  SalaryTransactions?: Array<SalarytransactionListResponse.SalaryTransaction>;
}

export namespace SalarytransactionListResponse {
  export interface SalaryTransaction {
    Date: string;

    EmployeeId: string;

    SalaryCode: string;

    '@url'?: string;

    Amount?: string;

    CostCenter?: string;

    Expense?: string;

    Number?: string;

    Project?: string;

    SalaryRow?: number;

    TextRow?: string;

    Total?: string;

    VAT?: string;
  }
}

export interface SalarytransactionCreateParams {
  SalaryTransaction: FortnoxSalaryTransaction;
}

export interface SalarytransactionUpdateParams {
  SalaryTransaction: FortnoxSalaryTransaction;
}

export interface SalarytransactionListParams {
  /**
   * filter on date
   */
  date?: string;

  /**
   * filter on employeeId
   */
  employeeId?: string;
}

export declare namespace Salarytransactions {
  export {
    type FortnoxSalaryTransaction as FortnoxSalaryTransaction,
    type SalaryTransactionWrap as SalaryTransactionWrap,
    type SalarytransactionListResponse as SalarytransactionListResponse,
    type SalarytransactionCreateParams as SalarytransactionCreateParams,
    type SalarytransactionUpdateParams as SalarytransactionUpdateParams,
    type SalarytransactionListParams as SalarytransactionListParams,
  };
}
