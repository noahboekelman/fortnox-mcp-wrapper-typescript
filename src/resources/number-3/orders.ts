// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ContractsAPI from './contracts';
import * as Number3API from './number-3';
import * as OffersAPI from './offers';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Orders extends APIResource {
  /**
   * An endpoint for creating an order.
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
  create(
    body: OrderCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OffersAPI.OrderWrap> {
    return this._client.post('/3/orders', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single order
   */
  retrieve(documentNumber: string, options?: RequestOptions): APIPromise<OffersAPI.OrderWrap> {
    return this._client.get(path`/3/orders/${documentNumber}`, options);
  }

  /**
   * Note that there are two approaches for updating the rows on an order.
   *
   * If RowId is not specified on any row, the rows will be mapped and updated in the
   * order in which they are set in the array. All rows that should remain on the
   * order needs to be provided.
   *
   * If RowId is specified on one or more rows the following goes: Corresponding row
   * with that id will be updated. The rows without RowId will be interpreted as new
   * rows. If a row should not be updated but remain on the order then specify only
   * RowId like { "RowId": 123 }, otherwise it will be removed. Note that new RowIds
   * are generated for all rows every time an order is updated.
   */
  update(
    documentNumber: string,
    body: OrderUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OffersAPI.OrderWrap> {
    return this._client.put(path`/3/orders/${documentNumber}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a list of orders
   */
  list(
    query: OrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderListResponse> {
    return this._client.get('/3/orders', { query, ...options });
  }

  /**
   * Cancels given order
   */
  cancel(documentNumber: string, options?: RequestOptions): APIPromise<OffersAPI.OrderWrap> {
    return this._client.put(path`/3/orders/${documentNumber}/cancel`, options);
  }

  /**
   * Create invoice out of given order
   */
  createInvoice(
    documentNumber: string,
    options?: RequestOptions,
  ): APIPromise<ContractsAPI.FortnoxInvoiceWrap> {
    return this._client.put(path`/3/orders/${documentNumber}/createinvoice`, options);
  }

  /**
   * The difference between this and the print-endpoint is that property Sent is not
   * set to TRUE.
   */
  preview(documentNumber: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/3/orders/${documentNumber}/preview`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Print given order
   */
  print(documentNumber: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/3/orders/${documentNumber}/print`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * You can use the properties in the EmailInformation to customize the e-mail
   * message on each order.
   */
  sendEmail(documentNumber: string, options?: RequestOptions): APIPromise<OffersAPI.OrderWrap> {
    return this._client.get(path`/3/orders/${documentNumber}/email`, options);
  }

  /**
   * Use this endpoint to set order as sent, without generating an order.
   */
  setSent(documentNumber: string, options?: RequestOptions): APIPromise<OffersAPI.OrderWrap> {
    return this._client.put(path`/3/orders/${documentNumber}/externalprint`, options);
  }
}

export interface OrderListResponse {
  Orders?: Array<OrderListResponse.Order>;
}

export namespace OrderListResponse {
  export interface Order {
    CustomerNumber: string;

    '@url'?: string;

    Cancelled?: boolean;

    Currency?: string;

    CustomerName?: string;

    DeliveryDate?: string;

    DocumentNumber?: string;

    ExternalInvoiceReference1?: string;

    ExternalInvoiceReference2?: string;

    OrderDate?: string;

    OrderType?: string;

    Project?: string;

    Sent?: boolean;

    Total?: number;
  }
}

export interface OrderCreateParams {
  Order?: Number3API.FortnoxOrder;
}

export interface OrderUpdateParams {
  Order?: Number3API.FortnoxOrder;
}

export interface OrderListParams {
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
   * filter by external invoice reference 1
   */
  externalinvoicereference1?: string;

  /**
   * filter by external invoice reference 2
   */
  externalinvoicereference2?: string;

  /**
   * possibility to filter orders
   */
  filter?: 'cancelled' | 'expired' | 'invoicecreated' | 'invoicenotcreated';

  /**
   * filter by from date
   */
  fromdate?: string;

  /**
   * filter by label
   */
  label?: string;

  /**
   * filter by lastmodified
   */
  lastmodified?: string;

  /**
   * filter by not completed
   */
  notcompleted?: boolean;

  /**
   * filter by order type
   */
  ordertype?: string;

  /**
   * filter by ourreference
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
   * field to sort returned list
   */
  sortby?: 'customername' | 'customernumber' | 'orderdate' | 'documentnumber' | 'total';

  /**
   * filter by to date
   */
  todate?: string;

  /**
   * filter by your reference
   */
  yourreference?: string;
}

export declare namespace Orders {
  export {
    type OrderListResponse as OrderListResponse,
    type OrderCreateParams as OrderCreateParams,
    type OrderUpdateParams as OrderUpdateParams,
    type OrderListParams as OrderListParams,
  };
}
