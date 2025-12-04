// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Contracttemplates extends APIResource {
  /**
   * Create a contract template
   */
  create(
    body: ContracttemplateCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxContractTemplateWrap> {
    return this._client.post('/3/contracttemplates', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single contract template
   */
  retrieve(templateNumber: number, options?: RequestOptions): APIPromise<FortnoxContractTemplateWrap> {
    return this._client.get(path`/3/contracttemplates/${templateNumber}`, options);
  }

  /**
   * Update a contract template
   */
  update(
    templateNumber: number,
    body: ContracttemplateUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxContractTemplateWrap> {
    return this._client.put(path`/3/contracttemplates/${templateNumber}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * The contract template resource can return a list of records or a single record.
   * By specifying a TemplateNumber in the URL, a single record will be returned. Not
   * specifying a TemplateNumber will return a list of records.
   */
  list(options?: RequestOptions): APIPromise<ContracttemplateListResponse> {
    return this._client.get('/3/contracttemplates', options);
  }
}

export interface FortnoxContractTemplate {
  TemplateName: string;

  '@url'?: string;

  AdministrationFee?: number;

  Continuous?: boolean;

  ContractLength?: number;

  Freight?: number;

  InvoiceInterval?: number;

  InvoiceRows?: Array<FortnoxContractTemplateInvoiceRow>;

  OurReference?: string;

  PrintTemplate?: string;

  Remarks?: string;

  TemplateNumber?: number;

  TermsOfDelivery?: string;

  TermsOfPayment?: string;

  WayOfDelivery?: string;
}

export interface FortnoxContractTemplateInvoiceRow {
  AccountNumber?: number;

  ArticleNumber?: string;

  CostCenter?: string;

  DeliveredQuantity?: string;

  Description?: string;

  Discount?: number;

  DiscountType?: 'PERCENT' | 'AMOUNT';

  Price?: number;

  Project?: string;

  Unit?: string;
}

export interface FortnoxContractTemplateWrap {
  ContractTemplate?: FortnoxContractTemplate;
}

export interface ContracttemplateListResponse {
  ContractTemplates?: Array<ContracttemplateListResponse.ContractTemplate>;
}

export namespace ContracttemplateListResponse {
  export interface ContractTemplate {
    '@url'?: string;

    ContractLength?: number;

    ContractTemplate?: number;

    ContractTemplateName?: string;

    InvoiceInterval?: number;
  }
}

export interface ContracttemplateCreateParams {
  ContractTemplate?: FortnoxContractTemplate;
}

export interface ContracttemplateUpdateParams {
  ContractTemplate?: FortnoxContractTemplate;
}

export declare namespace Contracttemplates {
  export {
    type FortnoxContractTemplate as FortnoxContractTemplate,
    type FortnoxContractTemplateInvoiceRow as FortnoxContractTemplateInvoiceRow,
    type FortnoxContractTemplateWrap as FortnoxContractTemplateWrap,
    type ContracttemplateListResponse as ContracttemplateListResponse,
    type ContracttemplateCreateParams as ContracttemplateCreateParams,
    type ContracttemplateUpdateParams as ContracttemplateUpdateParams,
  };
}
