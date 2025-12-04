// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Absencetransactions extends APIResource {
  /**
   * Create a new absence transaction
   */
  create(
    body: AbsencetransactionCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxAbsenceTransactionSingleItemWrap> {
    return this._client.post('/3/absencetransactions', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a specific transaction
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<FortnoxAbsenceTransactionSingleItemWrap> {
    return this._client.get(path`/3/absencetransactions/${id}`, options);
  }

  /**
   * Update a single absence transaction
   */
  update(
    id: string,
    body: AbsencetransactionUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxAbsenceTransactionSingleItemWrap> {
    return this._client.put(path`/3/absencetransactions/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Supports query-string parameters <strong>employeeid</strong> and
   * <strong>date</strong> for filtering the result.
   */
  list(
    query: AbsencetransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxAbsenceTransactionListItemWrap> {
    return this._client.get('/3/absencetransactions', { query, ...options });
  }

  /**
   * Delete an absence transaction
   */
  delete(id: string, options?: RequestOptions): APIPromise<FortnoxAbsenceTransactionSingleItemWrap> {
    return this._client.delete(path`/3/absencetransactions/${id}`, options);
  }

  /**
   * Retrieves a list of absence transactions for an employee on a specific date and
   * cause code.
   */
  retrieveByDateAndCode(
    code:
      | 'ASK'
      | 'FPE'
      | 'FRA'
      | 'HAV'
      | 'KOM'
      | 'MIL'
      | 'NAR'
      | 'OS1'
      | 'OS2'
      | 'OS3'
      | 'OS4'
      | 'OS5'
      | 'PAP'
      | 'PEM'
      | 'PER'
      | 'SEM'
      | 'SJK'
      | 'SMB'
      | 'SVE'
      | 'TJL'
      | 'UTB'
      | 'VAB',
    params: AbsencetransactionRetrieveByDateAndCodeParams,
    options?: RequestOptions,
  ): APIPromise<FortnoxAbsenceTransactionListItemWrap> {
    const { id, Date } = params;
    return this._client.get(path`/3/absencetransactions/${id}/${Date}/${code}`, options);
  }
}

export interface FortnoxAbsenceTransactionListItemWrap {
  AbsenceTransactions?: Array<FortnoxAbsenceTransactionListItemWrap.AbsenceTransaction>;
}

export namespace FortnoxAbsenceTransactionListItemWrap {
  export interface AbsenceTransaction {
    CauseCode:
      | 'ASK'
      | 'FPE'
      | 'FRA'
      | 'HAV'
      | 'KOM'
      | 'MIL'
      | 'NAR'
      | 'OS1'
      | 'OS2'
      | 'OS3'
      | 'OS4'
      | 'OS5'
      | 'PAP'
      | 'PEM'
      | 'PER'
      | 'SEM'
      | 'SJK'
      | 'SMB'
      | 'SVE'
      | 'TJL'
      | 'UTB'
      | 'VAB';

    Date: string;

    EmployeeId: string;

    id?: string;

    '@url'?: string;

    CostCenter?: string;

    Extent?: number;

    HolidayEntitling?: boolean;

    Hours?: number;

    Project?: string;
  }
}

export interface FortnoxAbsenceTransactionPayload {
  CauseCode:
    | 'ASK'
    | 'FPE'
    | 'FRA'
    | 'HAV'
    | 'KOM'
    | 'MIL'
    | 'NAR'
    | 'OS1'
    | 'OS2'
    | 'OS3'
    | 'OS4'
    | 'OS5'
    | 'PAP'
    | 'PEM'
    | 'PER'
    | 'SEM'
    | 'SJK'
    | 'SMB'
    | 'SVE'
    | 'TJL'
    | 'UTB'
    | 'VAB';

  Date: string;

  EmployeeId: string;

  CostCenter?: string;

  Extent?: number;

  HolidayEntitling?: boolean;

  Hours?: number;

  Project?: string;
}

export interface FortnoxAbsenceTransactionPayloadWrap {
  AbsenceTransaction?: FortnoxAbsenceTransactionPayload;
}

export interface FortnoxAbsenceTransactionSingleItemWrap {
  AbsenceTransaction?: FortnoxAbsenceTransactionSingleItemWrap.AbsenceTransaction;
}

export namespace FortnoxAbsenceTransactionSingleItemWrap {
  export interface AbsenceTransaction {
    CauseCode:
      | 'ASK'
      | 'FPE'
      | 'FRA'
      | 'HAV'
      | 'KOM'
      | 'MIL'
      | 'NAR'
      | 'OS1'
      | 'OS2'
      | 'OS3'
      | 'OS4'
      | 'OS5'
      | 'PAP'
      | 'PEM'
      | 'PER'
      | 'SEM'
      | 'SJK'
      | 'SMB'
      | 'SVE'
      | 'TJL'
      | 'UTB'
      | 'VAB';

    Date: string;

    EmployeeId: string;

    id?: string;

    '@url'?: string;

    CostCenter?: string;

    Extent?: number;

    HolidayEntitling?: boolean;

    Hours?: number;

    Project?: string;
  }
}

export interface AbsencetransactionCreateParams {
  AbsenceTransaction?: FortnoxAbsenceTransactionPayload;
}

export interface AbsencetransactionUpdateParams {
  AbsenceTransaction?: FortnoxAbsenceTransactionPayload;
}

export interface AbsencetransactionListParams {
  /**
   * filter by date
   */
  date?: string;

  /**
   * filter by employee id
   */
  employeeid?: string;
}

export interface AbsencetransactionRetrieveByDateAndCodeParams {
  /**
   * identifies the employee
   */
  id: string;

  /**
   * of the absence transaction
   */
  Date: string;
}

export declare namespace Absencetransactions {
  export {
    type FortnoxAbsenceTransactionListItemWrap as FortnoxAbsenceTransactionListItemWrap,
    type FortnoxAbsenceTransactionPayload as FortnoxAbsenceTransactionPayload,
    type FortnoxAbsenceTransactionPayloadWrap as FortnoxAbsenceTransactionPayloadWrap,
    type FortnoxAbsenceTransactionSingleItemWrap as FortnoxAbsenceTransactionSingleItemWrap,
    type AbsencetransactionCreateParams as AbsencetransactionCreateParams,
    type AbsencetransactionUpdateParams as AbsencetransactionUpdateParams,
    type AbsencetransactionListParams as AbsencetransactionListParams,
    type AbsencetransactionRetrieveByDateAndCodeParams as AbsencetransactionRetrieveByDateAndCodeParams,
  };
}
