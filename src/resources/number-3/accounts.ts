// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Accounts extends APIResource {
  /**
   * The created account will be returned if everything succeeded, if there was any
   * problems an error will be returned.
   */
  create(
    params: AccountCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxAccountSingleItemWrap> {
    const { financialyear, ...body } = params ?? {};
    return this._client.post('/3/accounts', {
      query: { financialyear },
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves the details of an account. You need to supply the unique account
   * number that was returned when the account was created or retrieved from the list
   * of accounts.
   */
  retrieve(number: number, options?: RequestOptions): APIPromise<FortnoxAccountSingleItemWrap> {
    return this._client.get(path`/3/accounts/${number}`, options);
  }

  /**
   * Updates the specified account with the values provided in the properties. Any
   * property not provided will be left unchanged. Note that even though the account
   * number is writeable you can&acute;t change the number of an existing account.
   */
  update(
    number: number,
    params: AccountUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxAccountSingleItemWrap> {
    const { financialyear, ...body } = params ?? {};
    return this._client.put(path`/3/accounts/${number}`, {
      query: { financialyear },
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * The accounts are returned sorted by account number with the lowest number
   * appearing first.
   */
  list(
    query: AccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountListResponse> {
    return this._client.get('/3/accounts', { query, ...options });
  }

  /**
   * Deletes the specified account in the users current year
   */
  delete(number: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/accounts/${number}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FortnoxAccountPayload {
  Description: string;

  Number: number;

  Active?: boolean;

  BalanceBroughtForward?: number;

  CostCenter?: string;

  CostCenterSettings?: 'ALLOWED' | 'MANDATORY' | 'NOTALLOWED';

  OpeningQuantities?: Array<FortnoxAccountPayloadOpeningQuantities>;

  Project?: string;

  ProjectSettings?: 'ALLOWED' | 'MANDATORY' | 'NOTALLOWED';

  SRU?: number;

  TransactionInformation?: string;

  TransactionInformationSettings?: 'ALLOWED' | 'MANDATORY' | 'NOTALLOWED';

  VATCode?: string;
}

export interface FortnoxAccountPayloadOpeningQuantities {
  Balance?: number;

  Project?: string;
}

export interface FortnoxAccountPayloadWrap {
  Account?: FortnoxAccountPayload;
}

export interface FortnoxAccountSingleItemWrap {
  Account?: FortnoxAccountSingleItemWrap.Account;
}

export namespace FortnoxAccountSingleItemWrap {
  export interface Account {
    Description: string;

    Number: number;

    '@url'?: string;

    Active?: boolean;

    BalanceBroughtForward?: number;

    BalanceCarriedForward?: number;

    CostCenter?: string;

    CostCenterSettings?: 'ALLOWED' | 'MANDATORY' | 'NOTALLOWED';

    OpeningQuantities?: Array<Account.OpeningQuantity>;

    Project?: string;

    ProjectSettings?: 'ALLOWED' | 'MANDATORY' | 'NOTALLOWED';

    QuantitySettings?: 'ALLOWED' | 'MANDATORY' | 'NOTALLOWED';

    QuantityUnit?: string;

    SRU?: number;

    TransactionInformation?: string;

    TransactionInformationSettings?: 'ALLOWED' | 'MANDATORY' | 'NOTALLOWED';

    VATCode?: string;

    Year?: number;
  }

  export namespace Account {
    export interface OpeningQuantity {
      Balance?: number;

      Project?: string;
    }
  }
}

export interface AccountListResponse {
  Accounts?: Array<AccountListResponse.Account>;
}

export namespace AccountListResponse {
  export interface Account {
    Description: string;

    Number: number;

    '@url'?: string;

    Active?: boolean;

    BalanceBroughtForward?: number;

    CostCenter?: string;

    CostCenterSettings?: 'ALLOWED' | 'MANDATORY' | 'NOTALLOWED';

    Project?: string;

    ProjectSettings?: 'ALLOWED' | 'MANDATORY' | 'NOTALLOWED';

    SRU?: number;

    VATCode?: string;

    Year?: number;
  }
}

export interface AccountCreateParams {
  /**
   * Query param: financial year to create account against
   */
  financialyear?: number;

  /**
   * Body param:
   */
  Account?: FortnoxAccountPayload;
}

export interface AccountUpdateParams {
  /**
   * Query param: financial year to update account against
   */
  financialyear?: number;

  /**
   * Body param:
   */
  Account?: FortnoxAccountPayload;
}

export interface AccountListParams {
  lastmodified?: string;

  /**
   * field to sort returned list on
   */
  sortby?: 'number';

  sru?: number;
}

export declare namespace Accounts {
  export {
    type FortnoxAccountPayload as FortnoxAccountPayload,
    type FortnoxAccountPayloadOpeningQuantities as FortnoxAccountPayloadOpeningQuantities,
    type FortnoxAccountPayloadWrap as FortnoxAccountPayloadWrap,
    type FortnoxAccountSingleItemWrap as FortnoxAccountSingleItemWrap,
    type AccountListResponse as AccountListResponse,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
  };
}
