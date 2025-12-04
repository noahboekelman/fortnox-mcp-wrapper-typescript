// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Suppliers extends APIResource {
  /**
   * Create a supplier
   */
  create(
    body: SupplierCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxSupplierWrap> {
    return this._client.post('/3/suppliers', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single supplier
   */
  retrieve(supplierNumber: string, options?: RequestOptions): APIPromise<FortnoxSupplierWrap> {
    return this._client.get(path`/3/suppliers/${supplierNumber}`, options);
  }

  /**
   * Update a supplier
   */
  update(
    supplierNumber: string,
    body: SupplierUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxSupplierWrap> {
    return this._client.put(path`/3/suppliers/${supplierNumber}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * The supplier register can return a list of records or a single record. By
   * specifying a SupplierNumber in the URL, a single record will be returned. Not
   * specifying a SupplierNumber will return a list of records.
   */
  list(options?: RequestOptions): APIPromise<SupplierListResponse> {
    return this._client.get('/3/suppliers', options);
  }
}

export interface FortnoxSupplier {
  Name: string;

  '@url'?: string;

  Active?: boolean;

  Address1?: string;

  Address2?: string;

  Bank?: string;

  BankAccountNumber?: string;

  BG?: string;

  BIC?: string;

  BranchCode?: string;

  City?: string;

  ClearingNumber?: string;

  Comments?: string;

  CostCenter?: string;

  Country?: string;

  CountryCode?: string;

  Currency?: string;

  DisablePaymentFile?: boolean;

  Email?: string;

  Fax?: string;

  IBAN?: string;

  OrganisationNumber?: string;

  OurCustomerNumber?: string;

  OurReference?: string;

  PG?: string;

  Phone1?: string;

  Phone2?: string;

  PreDefinedAccount?: string;

  Project?: string;

  SupplierNumber?: string;

  TermsOfPayment?: string;

  VATNumber?: string;

  VATType?: string;

  VisitingAddress?: string;

  VisitingCity?: string;

  VisitingCountry?: string;

  VisitingCountryCode?: string;

  VisitingZipCode?: string;

  WorkPlace?: string;

  WWW?: string;

  YourReference?: string;

  ZipCode?: string;
}

export interface FortnoxSupplierWrap {
  Supplier?: FortnoxSupplier;
}

export interface SupplierListResponse {
  Suppliers?: Array<SupplierListResponse.Supplier>;
}

export namespace SupplierListResponse {
  export interface Supplier {
    Name: string;

    '@url'?: string;

    Active?: boolean;

    Address1?: string;

    Address2?: string;

    BankAccountNumber?: string;

    BG?: string;

    BIC?: string;

    City?: string;

    CostCenter?: string;

    CountryCode?: string;

    Currency?: string;

    DisablePaymentFile?: boolean;

    Email?: string;

    IBAN?: string;

    OrganisationNumber?: string;

    PG?: string;

    Phone?: string;

    PreDefinedAccount?: string;

    Project?: string;

    SupplierNumber?: string;

    TermsOfPayment?: string;

    ZipCode?: string;
  }
}

export interface SupplierCreateParams {
  Supplier?: FortnoxSupplier;
}

export interface SupplierUpdateParams {
  Supplier?: FortnoxSupplier;
}

export declare namespace Suppliers {
  export {
    type FortnoxSupplier as FortnoxSupplier,
    type FortnoxSupplierWrap as FortnoxSupplierWrap,
    type SupplierListResponse as SupplierListResponse,
    type SupplierCreateParams as SupplierCreateParams,
    type SupplierUpdateParams as SupplierUpdateParams,
  };
}
