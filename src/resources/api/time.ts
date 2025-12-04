// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TimeAPI from './time';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Time extends APIResource {
  /**
   * <p>
   *  <b>Response property descriptions:</b><br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>id</i></b> - The unique id of a basic common combination of article registrations. (The basic common combination means "user/purchase date/customer/project/cost center", which leads to a dialog with several article registrations.)<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>purchaseDate</i></b> - The date on which the article is purchased or registered for charging.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>ownerId</i></b> - The user ID who creates the basic common combination.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>version</i></b> - The version of the basic common combination (article dialog) being updated, which is used for handling the concurrency issue.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>registrationType</i></b> - It is always "ARTICLE" for article list endpoint.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;    <b>Sub-Class - ArticleRegistration:</b><br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>id</i></b> - The unique id of an article registration.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>registrationId</i></b> - The id of the basic common combination.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>orderIndex</i></b> - the order index for the article registration in regard of the common combination.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>ownerId</i></b> - The user ID who owns the article registration.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>totalQuantity</i></b> - The quantity of the article.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>unitPrice</i></b> - The unit price connected to the article registration, which might be locked on an invoice/order basis or for non-invoiceable.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>unitCost</i></b> - The unit cost connected to the article registration, which might be locked on an invoice/order basis.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>invoiceBasisId</i></b> - The ID of invoice/order basis which is used for creating an invoice/order.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>nonInvoiceable</i></b> - If the article registration would be ignored for charging or not.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>note</i></b> - The note on the article registration.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>documentId</i></b> - The document ID which includes the article registration and is created in Invoicing application.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>documentType</i></b> - The document type which could be "invoice" or "order".
   *  </p>
   */
  getArticles(
    query: TimeGetArticlesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimeGetArticlesResponse> {
    return this._client.get('/api/time/articles-v1', { query, ...options });
  }

  /**
   * <p>
   *  <b>Response property descriptions:</b><br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>id</i></b> - The unique id of the registration.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>userId</i></b> - The user ID who owns the registration.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>workedDate</i></b> - The date for which the registration is created.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>workedHours</i></b> - The time spent, or the time of absence.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>startTime</i></b> - The start of clock time.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>stopTime</i></b> - The end of clock time.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>invoiceText</i></b> - The text to be included in the invoice/order basis which would be used to create an invoice/order.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>note</i></b> - The note on the registration.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>chargeHours</i></b> - The time to be invoiced, or 0 for the absence, or locked for non-invoiceable.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>childId</i></b> - The child ID related to the absence registration of parental leave (FPE), which comes from Payroll application.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>nonInvoiceable</i></b> - If the registration would be ignored for charging or not.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>invoiceBasisId</i></b> - The ID of invoice/order basis which is used for creating an invoice/order.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>documentId</i></b> - The document ID which includes the registration and is created in Invoicing application.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>documentType</i></b> - The document type which could be "invoice" or "order".<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>unitCost</i></b> - The unit cost from the registration owner who takes the work.<br/>
   *  &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>unitPrice</i></b> - The unit price for the service on the registration, which comes in priority from "invoice/order basis", "price group" or "service".
   *  <p>
   */
  getRegistrations(
    query: TimeGetRegistrationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimeGetRegistrationsResponse> {
    return this._client.get('/api/time/registrations-v2', { query, ...options });
  }
}

export interface TimeReportingArticleRegistration {
  id?: string;

  createdBy?: string;

  createdTime?: string;

  documentId?: number;

  documentType?: 'order' | 'invoice';

  invoiceBasisId?: number;

  invoiceText?: string;

  item?: TimeReportingTrItem;

  nonInvoiceable?: boolean;

  note?: string;

  orderIndex?: number;

  ownerId?: string;

  timeLocked?: boolean;

  totalQuantity?: number;

  unitCost?: number;

  unitPrice?: number;
}

export interface TimeReportingTrCostCenter {
  id?: string;

  active?: string;

  name?: string;
}

export interface TimeReportingTrCustomer {
  id?: string;

  accountManager?: string;

  active?: boolean;

  defaultProjectId?: string;

  deleted?: boolean;

  invoiceCity?: string;

  invoiceZipCode?: string;

  isBusiness?: number;

  name?: string;

  number?: string;

  priceList?: string;

  propertyDesignation?: string;
}

export interface TimeReportingTrItem {
  id?: string;

  active?: boolean;

  description?: string;

  isStock?: boolean;

  purchasePrice?: number;

  salesPrices?: Array<TimeReportingTrItem.SalesPrice>;

  type?: 'SERVICE' | 'STOCK';

  unit?: string;
}

export namespace TimeReportingTrItem {
  export interface SalesPrice {
    list?: string;

    price?: number;
  }
}

export interface TimeReportingTrProject {
  id?: string;

  description?: string;

  endDate?: string;

  invoicedAmount?: number;

  orderAmount?: number;

  orderTime?: number;

  projectLeader?: string;

  startDate?: string;

  status?: number;

  totalAmountInInvoices?: number;
}

export type TimeGetArticlesResponse = Array<TimeGetArticlesResponse.TimeGetArticlesResponseItem>;

export namespace TimeGetArticlesResponse {
  export interface TimeGetArticlesResponseItem {
    customer: TimeAPI.TimeReportingTrCustomer;

    purchaseDate: string;

    id?: string;

    articleRegistrations?: Array<TimeAPI.TimeReportingArticleRegistration>;

    costCenter?: TimeAPI.TimeReportingTrCostCenter;

    createdTime?: string;

    ownerId?: string;

    project?: TimeAPI.TimeReportingTrProject;

    registeredArticle?: TimeAPI.TimeReportingArticleRegistration;

    registrationType?: 'WORK' | 'ABSENCE' | 'ARTICLE';

    version?: number;
  }
}

export type TimeGetRegistrationsResponse =
  Array<TimeGetRegistrationsResponse.TimeGetRegistrationsResponseItem>;

export namespace TimeGetRegistrationsResponse {
  export interface TimeGetRegistrationsResponseItem {
    registrationCode: TimeGetRegistrationsResponseItem.RegistrationCode;

    workedDate: string;

    id?: string;

    chargeHours?: number;

    childId?: string;

    costCenter?: TimeAPI.TimeReportingTrCostCenter;

    createdBy?: string;

    createdTime?: string;

    customer?: TimeAPI.TimeReportingTrCustomer;

    documentId?: number;

    documentType?: 'order' | 'invoice';

    invoiceBasisId?: number;

    invoiceText?: string;

    nonInvoiceable?: boolean;

    note?: string;

    project?: TimeAPI.TimeReportingTrProject;

    service?: TimeAPI.TimeReportingTrItem;

    startTime?: string;

    stopTime?: string;

    unitCost?: number;

    unitPrice?: number;

    updatedBy?: string;

    userId?: string;

    workedHours?: number;
  }

  export namespace TimeGetRegistrationsResponseItem {
    export interface RegistrationCode {
      code: string;

      type: 'WORK' | 'ABSENCE';

      id?: string;

      active?: boolean;

      costMultiplier?: number;

      name?: string;

      priceMultiplier?: number;
    }
  }
}

export interface TimeGetArticlesParams {
  /**
   * An array of cost center IDs. Example: cc1,cc2,cc3
   */
  costCenterIds?: Array<string>;

  /**
   * An array of customer IDs which are being used in database and in one-to-one
   * relation with customer numbers. Example: 100,101,102
   */
  customerIds?: Array<string>;

  /**
   * The start date of the search span, the max of which should be 1 year to the end
   * date ("toDate"). Example: 2022-11-01
   */
  fromDate?: string;

  /**
   * If the price of the non-invoiceable article registration is included, or not.
   */
  includeNonInvoiceablePrice?: boolean;

  /**
   * If the article registration without project is included, or not.
   */
  includeRegistrationsWithoutProject?: boolean;

  /**
   * If the article registration is locked on an invoice basis, or not.
   */
  inInvoiceBasis?: boolean;

  /**
   * If the article registration is internal, which is registered on an internal
   * customer, or not.
   */
  internalArticles?: boolean;

  /**
   * If a document is created with the article registration, or not.
   */
  invoiced?: boolean;

  /**
   * An array of article IDs. Example: s1,s2,s3
   */
  itemIds?: Array<string>;

  /**
   * If the article registration has been moved to non-invoiceable, or not.
   */
  nonInvoiceable?: boolean;

  /**
   * An array of user ids who own the article registrations. Example: 1,2,3
   */
  ownerIds?: Array<string>;

  /**
   * An array of project IDs. Example: p1,p2,p3
   */
  projectIds?: Array<string>;

  /**
   * The end date of the search span, the max of which should be 1 year back to the
   * start date ("fromDate"). Example: 2022-11-30
   */
  toDate?: string;
}

export interface TimeGetRegistrationsParams {
  /**
   * An array of cost center IDs. Example: cc1,cc2,cc3
   */
  costCenterIds?: Array<string>;

  /**
   * An array of customer IDs which are being used in database and in one-to-one
   * relation with customer numbers. Example: 100,101,102
   */
  customerIds?: Array<string>;

  /**
   * The start date of the search span, the max of which should be 1 year to the end
   * date ("toDate"). Example: 2022-11-01
   */
  fromDate?: string;

  /**
   * If the price of the non-invoiceable time/absence registration is included, or
   * not.
   */
  includeNonInvoiceableChargeHours?: boolean;

  /**
   * If the time/absence registration without project is included, or not.
   */
  includeRegistrationsWithoutProject?: boolean;

  /**
   * If the time/absence registration is locked on an invoice basis, or not.
   */
  inInvoiceBasis?: boolean;

  /**
   * If the time/absence registration is internal, which is registered on an internal
   * customer, or not.
   */
  internalTime?: boolean;

  /**
   * If a document is created with the time/absence registration, or not.
   */
  invoiced?: boolean;

  /**
   * If the time/absence registration has been moved to non-invoiceable, or not.
   */
  nonInvoiceable?: boolean;

  /**
   * An array of project IDs. Example: p1,p2,p3
   */
  projectIds?: Array<string>;

  /**
   * An array of registration codes. Example: TID,SEM,FPE
   */
  regCodes?: Array<string>;

  /**
   * An array of service IDs. Example: s1,s2,s3
   */
  serviceIds?: Array<string>;

  /**
   * The end date of the search span, the max of which should be 1 year back to the
   * start date ("fromDate"). Example: 2022-11-30
   */
  toDate?: string;

  /**
   * An array of user IDs that time/absence registrations belong to. Example: 1,2,3
   */
  userIds?: Array<string>;
}

export declare namespace Time {
  export {
    type TimeReportingArticleRegistration as TimeReportingArticleRegistration,
    type TimeReportingTrCostCenter as TimeReportingTrCostCenter,
    type TimeReportingTrCustomer as TimeReportingTrCustomer,
    type TimeReportingTrItem as TimeReportingTrItem,
    type TimeReportingTrProject as TimeReportingTrProject,
    type TimeGetArticlesResponse as TimeGetArticlesResponse,
    type TimeGetRegistrationsResponse as TimeGetRegistrationsResponse,
    type TimeGetArticlesParams as TimeGetArticlesParams,
    type TimeGetRegistrationsParams as TimeGetRegistrationsParams,
  };
}
