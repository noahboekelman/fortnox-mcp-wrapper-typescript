// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Taxreductions extends APIResource {
  /**
   * Note that different types of tax reduction, i.e. ROT, RUT, or Green Technology,
   * applications work differently. When creating an application for Green
   * Technology, the field <em>TaxReductionAmounts</em> becomes mandatory as it is
   * used to determine how much of the asked amount is intended for which type of
   * work. Similarly, the <em>AskedAmount</em> field of the <em>TaxReduction</em>
   * becomes optional, as it will always be considered to be equal to the sum of the
   * <em>TaxReductionAmounts</em>.
   *
   * For the other types, ROT and RUT, this field is not required and should be
   * omitted.
   *
   * Unlike earlier iterations of this endpoint, specifying the type of reduction for
   * the provided <em>TaxReduction</em> (e.g. ROT, RUT, or Green) is not necessary as
   * this value will always be equal to the type set on the provided document
   * instead.
   *
   * This endpoint can raise a variety of validation errors, some of which are only
   * relevant for Green Technology applications. Those errors will always return an
   * HTTP Code of 400 and include, but are not limited to, those shown below:
   *
   *  <table>
   *      <caption>Errors that can be raised by this endpoint.</caption>
   *      <tr>
   *          <th>Error Code</th>
   *          <th>Types</th>
   *          <th>Description</th>
   *          <th>Solution</th>
   *      </tr>
   *      <tr>
   *          <td>2000600</td>
   *          <td>ROT, RUT, GREEN</td>
   *          <td>The provided Social Security Number is already in use for this document.</td>
   *          <td>Verify that the Social Security Number is different from any other applicants already added.</td>
   *      </tr>
   *      <tr>
   *          <td>2004217, 2004218</td>
   *          <td>ROT, RUT, GREEN</td>
   *          <td>The total asked amount of the application is either in an invalid format or is negative.</td>
   *          <td>Verify that the <em>AskedAmount</em>-field is a positive number (0 is valid for Green Technology) and that it is an integer.</td>
   *      </tr>
   *      <tr>
   *          <td>2004209</td>
   *          <td>GREEN</td>
   *          <td>The <em>WorkType</em>-field contains a work type that is not valid for the given type of reduction.</td>
   *          <td>Ensure that the <em>WorkType</em> contains a valid type of work for Green Technology.</td>
   *      </tr>
   *      <tr>
   *          <td>2004263</td>
   *          <td>GREEN</td>
   *          <td>The <em>TaxReductionAmounts</em>-field is missing for a Green Technology application.</td>
   *          <td>Ensure that the field is included, that it is an array, and that each contained object denotes a specific type's asked amount.</td>
   *      </tr>
   *      <tr>
   *          <td>2004262</td>
   *          <td>GREEN</td>
   *          <td>There are more than one object denoting the asked amount for the same type in the <em>TaxReductionAmounts</em>-field.</td>
   *          <td>Ensure that there is only one object denoting the asked amount per type contained in the array.</td>
   *      </tr>
   *  </table>
   */
  create(body: TaxreductionCreateParams, options?: RequestOptions): APIPromise<FortnoxTaxReductionWrap> {
    return this._client.post('/3/taxreductions', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single tax reduction
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<FortnoxTaxReductionWrap> {
    return this._client.get(path`/3/taxreductions/${id}`, options);
  }

  /**
   * Update a tax reduction
   */
  update(
    id: number,
    body: TaxreductionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FortnoxTaxReductionWrap> {
    return this._client.put(path`/3/taxreductions/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a list of tax reductions
   */
  list(
    query: TaxreductionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TaxreductionListResponse> {
    return this._client.get('/3/taxreductions', { query, ...options });
  }

  /**
   * Remove a tax reduction
   */
  delete(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/taxreductions/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FortnoxTaxReduction {
  AskedAmount: number;

  CustomerName: string;

  ReferenceDocumentType: 'OFFER' | 'ORDER' | 'INVOICE';

  ReferenceNumber: string;

  SocialSecurityNumber: string;

  '@url'?: string;

  ApprovedAmount?: number;

  BilledAmount?: number;

  Id?: number;

  PropertyDesignation?: string;

  RequestSent?: boolean;

  ResidenceAssociationOrganisationNumber?: string;

  TaxReductionAmounts?: Array<FortnoxTaxReductionTaxReductionAmount>;

  VoucherNumber?: number;

  VoucherSeries?: string;

  VoucherYear?: number;
}

export interface FortnoxTaxReductionTaxReductionAmount {
  AskedAmount: number;

  WorkType: 'SOLARCELLS' | 'STORAGESELFPRODUCEDELECTRICITY' | 'CHARGINGSTATIONELECTRICVEHICLE';
}

export interface FortnoxTaxReductionWrap {
  TaxReduction: FortnoxTaxReduction;
}

export interface TaxreductionListResponse {
  TaxReductions?: Array<TaxreductionListResponse.TaxReduction>;
}

export namespace TaxreductionListResponse {
  export interface TaxReduction {
    CustomerName: string;

    ReferenceDocumentType: 'OFFER' | 'ORDER' | 'INVOICE';

    ReferenceNumber: number;

    SocialSecurityNumber: string;

    '@url'?: string;

    ApprovedAmount?: number;

    Id?: number;
  }
}

export interface TaxreductionCreateParams {
  TaxReduction: FortnoxTaxReduction;
}

export interface TaxreductionUpdateParams {
  TaxReduction: FortnoxTaxReduction;
}

export interface TaxreductionListParams {
  /**
   * possibility to filter tax reductions
   */
  filter?: 'invoices' | 'orders' | 'offers';
}

export declare namespace Taxreductions {
  export {
    type FortnoxTaxReduction as FortnoxTaxReduction,
    type FortnoxTaxReductionTaxReductionAmount as FortnoxTaxReductionTaxReductionAmount,
    type FortnoxTaxReductionWrap as FortnoxTaxReductionWrap,
    type TaxreductionListResponse as TaxreductionListResponse,
    type TaxreductionCreateParams as TaxreductionCreateParams,
    type TaxreductionUpdateParams as TaxreductionUpdateParams,
    type TaxreductionListParams as TaxreductionListParams,
  };
}
