// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Expenses extends APIResource {
  /**
   * Create an expense
   */
  create(
    body: ExpenseCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExpenseWrap> {
    return this._client.post('/3/expenses', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves expense information for specified expense.
   */
  retrieve(expenseCode: string, options?: RequestOptions): APIPromise<ExpenseWrap> {
    return this._client.get(path`/3/expenses/${expenseCode}`, options);
  }

  /**
   * Retrieve expense codes.
   */
  list(options?: RequestOptions): APIPromise<ExpenseListResponse> {
    return this._client.get('/3/expenses', options);
  }
}

export interface ExpenseWrap {
  Expense?: ExpenseWrap.Expense;
}

export namespace ExpenseWrap {
  export interface Expense {
    Account: number;

    Code: string;

    Text: string;
  }
}

export interface ExpenseListResponse {
  Expenses?: Array<ExpenseListResponse.Expense>;
}

export namespace ExpenseListResponse {
  export interface Expense {
    Account: number;

    Code: string;

    Text: string;

    '@url'?: string;
  }
}

export interface ExpenseCreateParams {
  Expense?: ExpenseCreateParams.Expense;
}

export namespace ExpenseCreateParams {
  export interface Expense {
    Account: number;

    Code: string;

    Text: string;
  }
}

export declare namespace Expenses {
  export {
    type ExpenseWrap as ExpenseWrap,
    type ExpenseListResponse as ExpenseListResponse,
    type ExpenseCreateParams as ExpenseCreateParams,
  };
}
