// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Number3API from './number-3';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Offers extends APIResource {
  /**
   * An endpoint for creating an offer.
   *
   * Should you have EasyVat enabled, it is mandatory to provide an account in the
   * request should you use a custom VAT rate.
   *
   * This endpoint can produce errors, some of which may only be relevant for
   * EasyVat. Refer to the table below.
   *
   *  <table>
   *  <caption>Errors that can be raised by this endpoint.</caption>
   *  		<tr>
   *  			<th>Error Code</th>
   *  			<th>HTTP Code</th>
   *  			<th>Description</th>
   *  			<th>Solution</th>
   *  		</tr>
   *  		<tr>
   *  			<td>2004167</td>
   *  			<td>400</td>
   *  			<td>An account must be provided when using a custom VAT rate and EasyVat has been enabled.</td>
   *  			<td>Supply each row which has a custom VAT rate with an account.</td>
   *  		</tr>
   *  </table>
   */
  create(body: OfferCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<OfferWrap> {
    return this._client.post('/3/offers', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single offer
   */
  retrieve(documentNumber: string, options?: RequestOptions): APIPromise<OfferWrap> {
    return this._client.get(path`/3/offers/${documentNumber}`, options);
  }

  /**
   * Note that there are two approaches for updating the rows on an offer.
   *
   * If RowId is not specified on any row, the rows will be mapped and updated in the
   * order in which they are set in the array. All rows that should remain on the
   * offer needs to be provided.
   *
   * If RowId is specified on one or more rows the following goes: Corresponding row
   * with that id will be updated. The rows without RowId will be interpreted as new
   * rows. If a row should not be updated but remain on the offer then specify only
   * RowId like { "RowId": 123 }, otherwise it will be removed. Note that new RowIds
   * are generated for all rows every time an offer is updated.
   */
  update(
    documentNumber: string,
    body: OfferUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OfferWrap> {
    return this._client.put(path`/3/offers/${documentNumber}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a list of offers
   */
  list(
    query: OfferListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OfferListResponse> {
    return this._client.get('/3/offers', { query, ...options });
  }

  /**
   * Cancels given offer
   */
  cancel(documentNumber: string, options?: RequestOptions): APIPromise<OfferWrap> {
    return this._client.put(path`/3/offers/${documentNumber}/cancel`, options);
  }

  /**
   * Create invoice out of given offer
   */
  createInvoice(documentNumber: string, options?: RequestOptions): APIPromise<OrderWrap> {
    return this._client.put(path`/3/offers/${documentNumber}/createinvoice`, options);
  }

  /**
   * Create order out of given offer
   */
  createOrder(documentNumber: string, options?: RequestOptions): APIPromise<OrderWrap> {
    return this._client.put(path`/3/offers/${documentNumber}/createorder`, options);
  }

  /**
   * The difference between this and the print-endpoint is that property Sent is not
   * set to TRUE.
   */
  preview(documentNumber: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/3/offers/${documentNumber}/preview`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Print given offer
   */
  print(documentNumber: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/3/offers/${documentNumber}/print`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * You can use the properties in the EmailInformation to customize the e-mail
   * message on each offer.
   */
  sendEmail(documentNumber: string, options?: RequestOptions): APIPromise<OfferWrap> {
    return this._client.get(path`/3/offers/${documentNumber}/email`, options);
  }

  /**
   * Use this endpoint to set offer as sent, without generating an offer.
   */
  setSent(documentNumber: string, options?: RequestOptions): APIPromise<OfferWrap> {
    return this._client.put(path`/3/offers/${documentNumber}/externalprint`, options);
  }
}

export interface FortnoxOffer {
  CustomerNumber: string;

  '@url'?: string;

  '@urlTaxReductionList'?: string;

  Address1?: string;

  Address2?: string;

  AdministrationFee?: number;

  AdministrationFeeVAT?: number;

  BasisTaxReduction?: number;

  Cancelled?: boolean;

  City?: string;

  Comments?: string;

  ContributionPercent?: number;

  ContributionValue?: number;

  CopyRemarks?: boolean;

  CostCenter?: string;

  Country?: string;

  Currency?: string;

  CurrencyRate?: number;

  CurrencyUnit?: number;

  CustomerName?: string;

  DeliveryAddress1?: string;

  DeliveryAddress2?: string;

  DeliveryCity?: string;

  DeliveryCountry?: string;

  DeliveryDate?: string;

  DeliveryName?: string;

  DeliveryZipCode?: string;

  DocumentNumber?: string;

  EmailInformation?: FortnoxOfferEmailInformation;

  ExpireDate?: string;

  Freight?: number;

  FreightVAT?: number;

  Gross?: number;

  HouseWork?: boolean;

  InvoiceReference?: string;

  Labels?: Array<FortnoxOfferLabel>;

  Language?: string;

  Net?: number;

  NotCompleted?: boolean;

  OfferDate?: string;

  OfferRows?: Array<FortnoxOfferOfferRow>;

  OrderReference?: string;

  OrganisationNumber?: string;

  OurReference?: string;

  Phone1?: string;

  Phone2?: string;

  PriceList?: string;

  PrintTemplate?: string;

  Project?: string;

  Remarks?: string;

  RoundOff?: number;

  Sent?: boolean;

  TaxReduction?: number;

  TaxReductionType?: 'none' | 'rot' | 'rut' | 'green';

  TermsOfDelivery?: string;

  TermsOfPayment?: string;

  Total?: number;

  TotalToPay?: number;

  TotalVAT?: number;

  VATIncluded?: boolean;

  WayOfDelivery?: string;

  YourReference?: string;

  YourReferenceNumber?: string;

  ZipCode?: string;
}

export interface FortnoxOfferEmailInformation {
  EmailAddressBCC?: string;

  EmailAddressCC?: string;

  EmailAddressFrom?: string;

  EmailAddressTo?: string;

  EmailBody?: string;

  EmailSubject?: string;
}

export interface FortnoxOfferLabel {
  Id?: number;
}

export interface FortnoxOfferOfferRow {
  AccountNumber?: number;

  ArticleNumber?: string;

  ContributionPercent?: string;

  ContributionValue?: string;

  CostCenter?: string;

  Description?: string;

  Discount?: number;

  DiscountType?: 'AMOUNT' | 'PERCENT';

  HouseWork?: boolean;

  HouseWorkHoursToReport?: number;

  HouseWorkType?:
    | 'CONSTRUCTION'
    | 'ELECTRICITY'
    | 'GLASSMETALWORK'
    | 'GROUNDDRAINAGEWORK'
    | 'MASONRY'
    | 'PAINTINGWALLPAPERING'
    | 'HVAC'
    | 'CLEANING'
    | 'TEXTILECLOTHING'
    | 'COOKING'
    | 'SNOWPLOWING'
    | 'GARDENING'
    | 'BABYSITTING'
    | 'OTHERCARE'
    | 'TUTORING'
    | 'OTHERCOSTS';

  Price?: number;

  Project?: string;

  Quantity?: string;

  RowId?: number;

  Total?: number;

  Unit?: string;

  VAT?: number;

  VATCode?: string;
}

export interface OfferWrap {
  Offer?: FortnoxOffer;
}

export interface OrderWrap {
  Order?: Number3API.FortnoxOrder;
}

export interface OfferListResponse {
  Offers?: Array<OfferListResponse.Offer>;
}

export namespace OfferListResponse {
  export interface Offer {
    CustomerNumber: string;

    '@url'?: string;

    Cancelled?: boolean;

    Currency?: string;

    CustomerName?: string;

    DocumentNumber?: string;

    OfferDate?: string;

    Project?: string;

    Sent?: boolean;

    Total?: number;
  }
}

export interface OfferCreateParams {
  Offer?: FortnoxOffer;
}

export interface OfferUpdateParams {
  Offer?: FortnoxOffer;
}

export interface OfferListParams {
  /**
   * filter by cost center
   */
  costcenter?: string;

  /**
   * filter by customer name
   */
  customername?: string;

  /**
   * filter by customer number
   */
  customernumber?: string;

  /**
   * filter by document number
   */
  documentnumber?: string;

  /**
   * possibility to filter offers
   */
  filter?: 'cancelled' | 'expired' | 'completed' | 'notcompleted' | 'ordercreated' | 'ordernotcreated';

  /**
   * filter by from date
   */
  fromdate?: string;

  /**
   * filter by label
   */
  label?: string;

  /**
   * filter by last modified
   */
  lastmodified?: string;

  /**
   * filter by not completed
   */
  notcompleted?: boolean;

  /**
   * filter by our reference
   */
  ourreference?: string;

  /**
   * filter by project
   */
  project?: string;

  /**
   * filter by sent
   */
  sent?: boolean;

  /**
   * sort returned list of offers
   */
  sortby?: 'customerName' | 'id' | 'transactionDate' | 'total';

  /**
   * filter by to date
   */
  todate?: string;

  /**
   * filter by your reference
   */
  yourreference?: string;
}

export declare namespace Offers {
  export {
    type FortnoxOffer as FortnoxOffer,
    type FortnoxOfferEmailInformation as FortnoxOfferEmailInformation,
    type FortnoxOfferLabel as FortnoxOfferLabel,
    type FortnoxOfferOfferRow as FortnoxOfferOfferRow,
    type OfferWrap as OfferWrap,
    type OrderWrap as OrderWrap,
    type OfferListResponse as OfferListResponse,
    type OfferCreateParams as OfferCreateParams,
    type OfferUpdateParams as OfferUpdateParams,
    type OfferListParams as OfferListParams,
  };
}
