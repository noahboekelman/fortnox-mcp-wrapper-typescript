// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Contractaccruals extends APIResource {
  /**
   * Create a contract accrual
   */
  create(
    body: ContractaccrualCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxContractAccrualWrap> {
    return this._client.post('/3/contractaccruals', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single contract accrual
   */
  retrieve(documentNumber: number, options?: RequestOptions): APIPromise<FortnoxContractAccrualWrap> {
    return this._client.get(path`/3/contractaccruals/${documentNumber}`, options);
  }

  /**
   * Update a contract accrual
   */
  update(
    documentNumber: number,
    body: ContractaccrualUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxContractAccrualWrap> {
    return this._client.put(path`/3/contractaccruals/${documentNumber}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * The contract accruals register can return a list of records or a single record.
   * By specifying a DocumentNumber in the URL, a single record will be returned. Not
   * specifying a DocumentNumber will return a list of records.
   */
  list(options?: RequestOptions): APIPromise<ContractaccrualListResponse> {
    return this._client.get('/3/contractaccruals', options);
  }

  /**
   * Remove a contract accrual
   */
  delete(documentNumber: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/contractaccruals/${documentNumber}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FortnoxContractAccrual {
  AccrualAccount: number;

  AccrualRows: Array<FortnoxContractAccrualAccrualRow>;

  CostAccount: number;

  Description: string;

  DocumentNumber: number;

  Total: number;

  '@url'?: string;

  Period?: 'MONTHLY' | 'BIMONTHLY' | 'QUARTERLY' | 'SEMIANNUALLY' | 'ANNUALLY';

  Times?: number;

  VATIncluded?: boolean;
}

export interface FortnoxContractAccrualAccrualRow {
  Account: number;

  Credit: number;

  Debit: number;

  CostCenter?: string;

  Project?: string;

  TransactionInformation?: string;
}

export interface FortnoxContractAccrualWrap {
  ContractAccrual?: FortnoxContractAccrual;
}

export interface ContractaccrualListResponse {
  ContractAccruals?: Array<ContractaccrualListResponse.ContractAccrual>;
}

export namespace ContractaccrualListResponse {
  export interface ContractAccrual {
    Description: string;

    DocumentNumber: number;

    '@url'?: string;

    Period?: 'MONTHLY' | 'BIMONTHLY' | 'QUARTERLY' | 'SEMIANNUALLY' | 'ANNUALLY';
  }
}

export interface ContractaccrualCreateParams {
  ContractAccrual?: FortnoxContractAccrual;
}

export interface ContractaccrualUpdateParams {
  ContractAccrual?: FortnoxContractAccrual;
}

export declare namespace Contractaccruals {
  export {
    type FortnoxContractAccrual as FortnoxContractAccrual,
    type FortnoxContractAccrualAccrualRow as FortnoxContractAccrualAccrualRow,
    type FortnoxContractAccrualWrap as FortnoxContractAccrualWrap,
    type ContractaccrualListResponse as ContractaccrualListResponse,
    type ContractaccrualCreateParams as ContractaccrualCreateParams,
    type ContractaccrualUpdateParams as ContractaccrualUpdateParams,
  };
}
