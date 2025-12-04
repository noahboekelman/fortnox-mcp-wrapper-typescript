// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PurchaseordersV1API from './purchaseorders-v1';
import * as ResponseAPI from './response';
import { Response, ResponseCreateParams, WarehouseResponseStateChange } from './response';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class PurchaseordersV1 extends APIResource {
  response: ResponseAPI.Response = new ResponseAPI.Response(this._client);

  /**
   * Get Purchase Order
   */
  retrieve(
    id: number,
    query: PurchaseordersV1RetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WarehousePurchaseOrder> {
    return this._client.get(path`/api/warehouse/purchaseorders-v1/${id}`, { query, ...options });
  }

  /**
   * Update Purchase Order
   */
  update(
    pathID: number,
    body: PurchaseordersV1UpdateParams,
    options?: RequestOptions,
  ): APIPromise<WarehousePurchaseOrder> {
    return this._client.put(path`/api/warehouse/purchaseorders-v1/${pathID}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Create Purchase Order
   */
  purchaseordersV1(
    body: PurchaseordersV1PurchaseordersV1Params,
    options?: RequestOptions,
  ): APIPromise<WarehousePurchaseOrder> {
    return this._client.post('/api/warehouse/purchaseorders-v1', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Get CSV list of Purchase Orders
   */
  retrieveCsv(
    query: PurchaseordersV1RetrieveCsvParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/api/warehouse/purchaseorders-v1/csv', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/csv' }, options?.headers]),
    });
  }

  /**
   * <p>
   *  Get a list of <code>DocumentReference</code> of linked/connected purchase orders to incoming goods and/or invoice document.
   */
  retrieveMatches(id: number, options?: RequestOptions): APIPromise<WarehouseDocumentReference> {
    return this._client.get(path`/api/warehouse/purchaseorders-v1/${id}/matches`, options);
  }

  /**
   * <p>
   *  Get notes for a purchase order.
   */
  retrieveNotes(id: number, options?: RequestOptions): APIPromise<WarehousePurchaseOrderRowNote> {
    return this._client.get(path`/api/warehouse/purchaseorders-v1/${id}/notes`, options);
  }

  /**
   * <p>
   *  List purchase orders matching the given parameters.
   *  </p>
   *  <p>
   *  Sortable fields:
   *  <code>id</code>,
   *  <code>supplier_number</code>,
   *  <code>order_date</code>,
   *  <code>internal_reference</code>,
   *  <code>response_state</code>,
   *  <code>delivery_date</code>
   *  </p>
   */
  retrievePurchaseordersV1(
    query: PurchaseordersV1RetrievePurchaseordersV1Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WarehousePurchaseOrder> {
    return this._client.get('/api/warehouse/purchaseorders-v1', { query, ...options });
  }

  /**
   * <p>
   *  Sends the purchase order with the specified <code>id</code> to the recipient and sets the purchase order state to SENT
   */
  send(id: number, body: PurchaseordersV1SendParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/warehouse/purchaseorders-v1/${id}/send`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Sends multiple purchase orders via email
   */
  sendpurchaseorders(
    params: PurchaseordersV1SendpurchaseordersParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params ?? {};
    return this._client.post('/api/warehouse/purchaseorders-v1/sendpurchaseorders', {
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * <p>
   *  The purchase order will be treated as fully received.
   *  Any remaining quantity will be ignored.
   */
  updateComplete(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/warehouse/purchaseorders-v1/${id}/complete`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * <p>
   *  The dropship order will be treated as fully received.
   *  Any remaining quantity will be ignored.
   */
  updateDropshipcomplete(
    id: number,
    options?: RequestOptions,
  ): APIPromise<PurchaseordersV1UpdateDropshipcompleteResponse> {
    return this._client.put(path`/api/warehouse/purchaseorders-v1/${id}/dropshipcomplete`, options);
  }

  /**
   * <p>
   *  Perform a partial update of a purchase order, see <code>PartialPurchaseOrder</code> for possible
   *  fields that are updateable.
   */
  updatePartial(
    id: number,
    body: PurchaseordersV1UpdatePartialParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WarehousePartialPurchaseOrder> {
    return this._client.patch(path`/api/warehouse/purchaseorders-v1/${id}/partial`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Void Purchase Order
   */
  updateVoid(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/warehouse/purchaseorders-v1/${id}/void`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface WarehouseDocumentReference {
  id?: string;

  type?: string;
}

export interface WarehousePartialPurchaseOrder {
  deliveryDate?: string;

  internalReference?: string;

  messageToSupplier?: string;

  note?: string;

  supplierName?: string;
}

export interface WarehousePurchaseOrder {
  currencyCode: string;

  currencyRate: number;

  deliveryAddress: string;

  deliveryCity: string;

  deliveryName: string;

  deliveryZipCode: string;

  orderDate: string;

  paymentTermsCode: string;

  supplierNumber: string;

  id?: number;

  confirmationEmail?: string;

  costCenterCode?: string;

  currencyUnit?: number;

  customerId?: string;

  customerName?: string;

  customerNumber?: string;

  deliveryAddress2?: string;

  deliveryCountryCode?: string;

  deliveryDate?: string;

  dropship?: boolean;

  internalReference?: string;

  languageCode?: string;

  manuallyCompleted?: boolean;

  messageToSupplier?: string;

  note?: string;

  orderValue?: number;

  orderValueInSEK?: number;

  ourReference?: string;

  outboundDocumentReference?: WarehouseDocumentReference;

  projectId?: string;

  purchaseOrderState?:
    | 'NOT_SENT'
    | 'SENT'
    | 'SENT_NOT_REJECTED'
    | 'DELAYED'
    | 'RECEIVED'
    | 'VOIDED'
    | 'CURRENT'
    | 'ALL';

  purchaseType?: 'WAREHOUSE' | 'DROPSHIP';

  responseState?:
    | 'NOT_SENT'
    | 'SENT'
    | 'ACCEPTED_WITH_REQ_DLV_DATE'
    | 'ACCEPTED_WITH_CHANGED_DLV_DATE'
    | 'PARTLY_ACCEPTED_WITH_REQ_DLV_DATE'
    | 'PARTLY_ACCEPTED_WITH_CHANGED_DLV_DATE'
    | 'REJECTED';

  rows?: Array<WarehousePurchaseOrder.Row>;

  stockPointCode?: string;

  stockPointId?: string;

  supplier?: string;

  supplierAddress?: string;

  supplierAddress2?: string;

  supplierCity?: string;

  supplierCountryCode?: string;

  supplierEmail?: string;

  supplierName?: string;

  supplierPostCode?: string;

  totalReceivedQuantity?: number;

  translatedResponseState?: string;

  voided?: boolean;

  yourReference?: string;
}

export namespace WarehousePurchaseOrder {
  export interface Row {
    currencyCode: string;

    itemId: string;

    orderedQuantity: number;

    remainingOrderedQuantity: number;

    id?: string;

    backOrderQuantity?: number;

    costCenterCode?: string;

    isStockItem?: boolean;

    itemDescription?: string;

    itemUnit?: string;

    notes?: Array<PurchaseordersV1API.WarehousePurchaseOrderRowNote>;

    price?: number;

    projectId?: string;

    purchaseOrderId?: number;

    receivedQuantity?: number;

    rowNum?: number;

    stockLocationCode?: string;

    stockLocationId?: string;

    stockLocationName?: string;

    stockPointCode?: string;

    stockPointId?: string;

    stockPointName?: string;
  }
}

export interface WarehousePurchaseOrderRowNote {
  note?: string;

  purchaseOrderId?: number;

  purchaseOrderRowId?: string;

  rowNum?: number;
}

export type PurchaseordersV1RetrieveCsvResponse = string;

export interface PurchaseordersV1UpdateDropshipcompleteResponse {
  releasedParentOrder?: boolean;
}

export interface PurchaseordersV1RetrieveParams {
  /**
   * used for calculating the remaining ordered quantity. null will take the received
   * quantity from all incoming goods
   */
  ignoreIncomingGoodsId?: number;
}

export interface PurchaseordersV1UpdateParams {
  currencyCode: string;

  currencyRate: number;

  deliveryAddress: string;

  deliveryCity: string;

  deliveryName: string;

  deliveryZipCode: string;

  orderDate: string;

  paymentTermsCode: string;

  supplierNumber: string;

  body_id?: number;

  confirmationEmail?: string;

  costCenterCode?: string;

  currencyUnit?: number;

  customerId?: string;

  customerName?: string;

  customerNumber?: string;

  deliveryAddress2?: string;

  deliveryCountryCode?: string;

  deliveryDate?: string;

  dropship?: boolean;

  internalReference?: string;

  languageCode?: string;

  manuallyCompleted?: boolean;

  messageToSupplier?: string;

  note?: string;

  orderValue?: number;

  orderValueInSEK?: number;

  ourReference?: string;

  outboundDocumentReference?: WarehouseDocumentReference;

  projectId?: string;

  purchaseOrderState?:
    | 'NOT_SENT'
    | 'SENT'
    | 'SENT_NOT_REJECTED'
    | 'DELAYED'
    | 'RECEIVED'
    | 'VOIDED'
    | 'CURRENT'
    | 'ALL';

  purchaseType?: 'WAREHOUSE' | 'DROPSHIP';

  responseState?:
    | 'NOT_SENT'
    | 'SENT'
    | 'ACCEPTED_WITH_REQ_DLV_DATE'
    | 'ACCEPTED_WITH_CHANGED_DLV_DATE'
    | 'PARTLY_ACCEPTED_WITH_REQ_DLV_DATE'
    | 'PARTLY_ACCEPTED_WITH_CHANGED_DLV_DATE'
    | 'REJECTED';

  rows?: Array<PurchaseordersV1UpdateParams.Row>;

  stockPointCode?: string;

  stockPointId?: string;

  supplier?: string;

  supplierAddress?: string;

  supplierAddress2?: string;

  supplierCity?: string;

  supplierCountryCode?: string;

  supplierEmail?: string;

  supplierName?: string;

  supplierPostCode?: string;

  totalReceivedQuantity?: number;

  translatedResponseState?: string;

  voided?: boolean;

  yourReference?: string;
}

export namespace PurchaseordersV1UpdateParams {
  export interface Row {
    currencyCode: string;

    itemId: string;

    orderedQuantity: number;

    remainingOrderedQuantity: number;

    id?: string;

    backOrderQuantity?: number;

    costCenterCode?: string;

    isStockItem?: boolean;

    itemDescription?: string;

    itemUnit?: string;

    notes?: Array<PurchaseordersV1API.WarehousePurchaseOrderRowNote>;

    price?: number;

    projectId?: string;

    purchaseOrderId?: number;

    receivedQuantity?: number;

    rowNum?: number;

    stockLocationCode?: string;

    stockLocationId?: string;

    stockLocationName?: string;

    stockPointCode?: string;

    stockPointId?: string;

    stockPointName?: string;
  }
}

export interface PurchaseordersV1PurchaseordersV1Params {
  currencyCode: string;

  currencyRate: number;

  deliveryAddress: string;

  deliveryCity: string;

  deliveryName: string;

  deliveryZipCode: string;

  orderDate: string;

  paymentTermsCode: string;

  supplierNumber: string;

  id?: number;

  confirmationEmail?: string;

  costCenterCode?: string;

  currencyUnit?: number;

  customerId?: string;

  customerName?: string;

  customerNumber?: string;

  deliveryAddress2?: string;

  deliveryCountryCode?: string;

  deliveryDate?: string;

  dropship?: boolean;

  internalReference?: string;

  languageCode?: string;

  manuallyCompleted?: boolean;

  messageToSupplier?: string;

  note?: string;

  orderValue?: number;

  orderValueInSEK?: number;

  ourReference?: string;

  outboundDocumentReference?: WarehouseDocumentReference;

  projectId?: string;

  purchaseOrderState?:
    | 'NOT_SENT'
    | 'SENT'
    | 'SENT_NOT_REJECTED'
    | 'DELAYED'
    | 'RECEIVED'
    | 'VOIDED'
    | 'CURRENT'
    | 'ALL';

  purchaseType?: 'WAREHOUSE' | 'DROPSHIP';

  responseState?:
    | 'NOT_SENT'
    | 'SENT'
    | 'ACCEPTED_WITH_REQ_DLV_DATE'
    | 'ACCEPTED_WITH_CHANGED_DLV_DATE'
    | 'PARTLY_ACCEPTED_WITH_REQ_DLV_DATE'
    | 'PARTLY_ACCEPTED_WITH_CHANGED_DLV_DATE'
    | 'REJECTED';

  rows?: Array<PurchaseordersV1PurchaseordersV1Params.Row>;

  stockPointCode?: string;

  stockPointId?: string;

  supplier?: string;

  supplierAddress?: string;

  supplierAddress2?: string;

  supplierCity?: string;

  supplierCountryCode?: string;

  supplierEmail?: string;

  supplierName?: string;

  supplierPostCode?: string;

  totalReceivedQuantity?: number;

  translatedResponseState?: string;

  voided?: boolean;

  yourReference?: string;
}

export namespace PurchaseordersV1PurchaseordersV1Params {
  export interface Row {
    currencyCode: string;

    itemId: string;

    orderedQuantity: number;

    remainingOrderedQuantity: number;

    id?: string;

    backOrderQuantity?: number;

    costCenterCode?: string;

    isStockItem?: boolean;

    itemDescription?: string;

    itemUnit?: string;

    notes?: Array<PurchaseordersV1API.WarehousePurchaseOrderRowNote>;

    price?: number;

    projectId?: string;

    purchaseOrderId?: number;

    receivedQuantity?: number;

    rowNum?: number;

    stockLocationCode?: string;

    stockLocationId?: string;

    stockLocationName?: string;

    stockPointCode?: string;

    stockPointId?: string;

    stockPointName?: string;
  }
}

export interface PurchaseordersV1RetrieveCsvParams {
  /**
   * Include only documents where `internalReference' contains the given text
   * (case-insensitive).
   */
  internalReference?: string;

  /**
   * Include only documents with the given `itemId`.
   */
  itemId?: string;

  /**
   * Include only documents where `note`-field contains the given text
   * (case-insensitive).
   */
  note?: string;

  /**
   * Include only documents with the given `purchaseType`
   */
  purchaseType?: 'WAREHOUSE' | 'DROPSHIP';

  /**
   * Include only documents where `id` or `internalReference`-field contains the
   * given text (case-insensitive).
   */
  q?: string;

  /**
   * True to include the purchase type column, default is false.
   */
  showPurchaseTypeColumn?: boolean;

  /**
   * Include only documents with the given `purchaseOrderState`.
   */
  state?: 'NOT_SENT' | 'SENT' | 'SENT_NOT_REJECTED' | 'DELAYED' | 'RECEIVED' | 'VOIDED' | 'CURRENT' | 'ALL';

  /**
   * Include only documents with the given `supplierNumber`.
   */
  supplierNumber?: string;
}

export interface PurchaseordersV1RetrievePurchaseordersV1Params {
  /**
   * Include only documents where `internalReference' contains the given text
   * (case-insensitive).
   */
  internalReference?: string;

  /**
   * Include only documents with the given `itemId`.
   */
  itemId?: string;

  /**
   * Include only documents where `note`-field contains the given text
   * (case-insensitive).
   */
  note?: string;

  /**
   * Include only documents with the given `purchaseType`
   */
  purchaseType?: 'WAREHOUSE' | 'DROPSHIP';

  /**
   * Include only documents where `id` or `internalReference`-field contains the
   * given text (case-insensitive).
   */
  q?: string;

  /**
   * Include only documents with the given `purchaseOrderState`.
   */
  state?: 'NOT_SENT' | 'SENT' | 'SENT_NOT_REJECTED' | 'DELAYED' | 'RECEIVED' | 'VOIDED' | 'CURRENT' | 'ALL';

  /**
   * Include only documents with the given `supplierNumber`.
   */
  supplierNumber?: string;
}

export interface PurchaseordersV1SendParams {
  body: string;

  receiver: string;

  replyTo: string;

  subject: string;

  bodyAsHtml?: string;

  receiverCopy?: string;

  receiverSecretCopy?: string;

  senderName?: string;
}

export interface PurchaseordersV1SendpurchaseordersParams {
  body?: Array<number>;
}

export interface PurchaseordersV1UpdatePartialParams {
  deliveryDate?: string;

  internalReference?: string;

  messageToSupplier?: string;

  note?: string;

  supplierName?: string;
}

PurchaseordersV1.Response = Response;

export declare namespace PurchaseordersV1 {
  export {
    type WarehouseDocumentReference as WarehouseDocumentReference,
    type WarehousePartialPurchaseOrder as WarehousePartialPurchaseOrder,
    type WarehousePurchaseOrder as WarehousePurchaseOrder,
    type WarehousePurchaseOrderRowNote as WarehousePurchaseOrderRowNote,
    type PurchaseordersV1RetrieveCsvResponse as PurchaseordersV1RetrieveCsvResponse,
    type PurchaseordersV1UpdateDropshipcompleteResponse as PurchaseordersV1UpdateDropshipcompleteResponse,
    type PurchaseordersV1RetrieveParams as PurchaseordersV1RetrieveParams,
    type PurchaseordersV1UpdateParams as PurchaseordersV1UpdateParams,
    type PurchaseordersV1PurchaseordersV1Params as PurchaseordersV1PurchaseordersV1Params,
    type PurchaseordersV1RetrieveCsvParams as PurchaseordersV1RetrieveCsvParams,
    type PurchaseordersV1RetrievePurchaseordersV1Params as PurchaseordersV1RetrievePurchaseordersV1Params,
    type PurchaseordersV1SendParams as PurchaseordersV1SendParams,
    type PurchaseordersV1SendpurchaseordersParams as PurchaseordersV1SendpurchaseordersParams,
    type PurchaseordersV1UpdatePartialParams as PurchaseordersV1UpdatePartialParams,
  };

  export {
    Response as Response,
    type WarehouseResponseStateChange as WarehouseResponseStateChange,
    type ResponseCreateParams as ResponseCreateParams,
  };
}
