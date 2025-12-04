// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Attendancetransactions extends APIResource {
  /**
   * Create a new attendance transaction
   */
  create(
    body: AttendancetransactionCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxAttendanceTransactionWrap> {
    return this._client.post('/3/attendancetransactions', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a specific transaction
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<FortnoxAttendanceTransactionWrap> {
    return this._client.get(path`/3/attendancetransactions/${id}`, options);
  }

  /**
   * Update a single attendance transaction
   */
  update(
    id: string,
    body: AttendancetransactionUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxAttendanceTransactionWrap> {
    return this._client.put(path`/3/attendancetransactions/${id}`, {
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
    query: AttendancetransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxAttendanceTransactionListItemList> {
    return this._client.get('/3/attendancetransactions', { query, ...options });
  }

  /**
   * Delete an attendance transaction
   */
  delete(id: string, options?: RequestOptions): APIPromise<FortnoxAttendanceTransactionWrap> {
    return this._client.delete(path`/3/attendancetransactions/${id}`, options);
  }

  /**
   * Retrieves a list of attendance transaction for an employee on a specific date
   * and cause code.
   */
  retrieveByDateAndCode(
    code:
      | 'ARB'
      | 'BE2'
      | 'BER'
      | 'FLX'
      | 'HLG'
      | 'JO2'
      | 'JOR'
      | 'MER'
      | 'OB1'
      | 'OB2'
      | 'OB3'
      | 'OB4'
      | 'OB5'
      | 'OK0'
      | 'OK1'
      | 'OK2'
      | 'OK3'
      | 'OK4'
      | 'OK5'
      | 'OT1'
      | 'OT2'
      | 'OT3'
      | 'OT4'
      | 'OT5'
      | 'RES'
      | 'TID',
    params: AttendancetransactionRetrieveByDateAndCodeParams,
    options?: RequestOptions,
  ): APIPromise<FortnoxAttendanceTransactionListItemList> {
    const { id, Date } = params;
    return this._client.get(path`/3/attendancetransactions/${id}/${Date}/${code}`, options);
  }
}

export interface FortnoxAttendanceTransaction {
  CauseCode:
    | 'ARB'
    | 'BE2'
    | 'BER'
    | 'FLX'
    | 'HLG'
    | 'JO2'
    | 'JOR'
    | 'MER'
    | 'OB1'
    | 'OB2'
    | 'OB3'
    | 'OB4'
    | 'OB5'
    | 'OK0'
    | 'OK1'
    | 'OK2'
    | 'OK3'
    | 'OK4'
    | 'OK5'
    | 'OT1'
    | 'OT2'
    | 'OT3'
    | 'OT4'
    | 'OT5'
    | 'RES'
    | 'TID';

  Date: string;

  EmployeeId: string;

  CostCenter?: string;

  Hours?: string;

  Project?: string;
}

export interface FortnoxAttendanceTransactionListItemList {
  AttendanceTransactions?: Array<FortnoxAttendanceTransactionListItemList.AttendanceTransaction>;
}

export namespace FortnoxAttendanceTransactionListItemList {
  export interface AttendanceTransaction {
    CauseCode:
      | 'ARB'
      | 'BE2'
      | 'BER'
      | 'FLX'
      | 'HLG'
      | 'JO2'
      | 'JOR'
      | 'MER'
      | 'OB1'
      | 'OB2'
      | 'OB3'
      | 'OB4'
      | 'OB5'
      | 'OK0'
      | 'OK1'
      | 'OK2'
      | 'OK3'
      | 'OK4'
      | 'OK5'
      | 'OT1'
      | 'OT2'
      | 'OT3'
      | 'OT4'
      | 'OT5'
      | 'RES'
      | 'TID';

    Date: string;

    EmployeeId: string;

    id?: string;

    '@url'?: string;

    CostCenter?: string;

    Hours?: string;

    Project?: string;
  }
}

export interface FortnoxAttendanceTransactionWrap {
  AttendanceTransaction?: FortnoxAttendanceTransaction;
}

export interface AttendancetransactionCreateParams {
  AttendanceTransaction?: FortnoxAttendanceTransaction;
}

export interface AttendancetransactionUpdateParams {
  AttendanceTransaction?: FortnoxAttendanceTransaction;
}

export interface AttendancetransactionListParams {
  /**
   * filter by date
   */
  date?: string;

  /**
   * filter by employee id
   */
  employeeid?: string;
}

export interface AttendancetransactionRetrieveByDateAndCodeParams {
  /**
   * identifies the employee
   */
  id: string;

  /**
   * date of the attendance
   */
  Date: string;
}

export declare namespace Attendancetransactions {
  export {
    type FortnoxAttendanceTransaction as FortnoxAttendanceTransaction,
    type FortnoxAttendanceTransactionListItemList as FortnoxAttendanceTransactionListItemList,
    type FortnoxAttendanceTransactionWrap as FortnoxAttendanceTransactionWrap,
    type AttendancetransactionCreateParams as AttendancetransactionCreateParams,
    type AttendancetransactionUpdateParams as AttendancetransactionUpdateParams,
    type AttendancetransactionListParams as AttendancetransactionListParams,
    type AttendancetransactionRetrieveByDateAndCodeParams as AttendancetransactionRetrieveByDateAndCodeParams,
  };
}
