// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class IncominggoodsV1 extends APIResource {
  /**
   * Get Incoming Goods document
   */
  retrieve(
    id: number,
    query: IncominggoodsV1RetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WarehouseIncomingGoods> {
    return this._client.get(path`/api/warehouse/incominggoods-v1/${id}`, { query, ...options });
  }

  /**
   * Update Incoming Goods document
   */
  update(
    pathID: number,
    body: IncominggoodsV1UpdateParams,
    options?: RequestOptions,
  ): APIPromise<WarehouseIncomingGoods> {
    return this._client.put(path`/api/warehouse/incominggoods-v1/${pathID}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Create Incoming Goods document
   */
  incominggoodsV1(
    body: IncominggoodsV1IncominggoodsV1Params,
    options?: RequestOptions,
  ): APIPromise<WarehouseIncomingGoods> {
    return this._client.post('/api/warehouse/incominggoods-v1', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * <p>
   *      List incoming goods documents matching the given parameters.
   *  </p>
   *  <p>
   *      Sortable fields:
   *      <code>id</code>,
   *      <code>has_delivery_note</code>,
   *      <code>delivery_note_id</code>,
   *      <code>supplier_number</code>,
   *      <code>date</code>
   *  </p>
   */
  retrieveIncominggoodsV1(
    query: IncominggoodsV1RetrieveIncominggoodsV1Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IncominggoodsV1RetrieveIncominggoodsV1Response> {
    return this._client.get('/api/warehouse/incominggoods-v1', { query, ...options });
  }

  /**
   * Mark a released Incoming Goods document as Completed. Bookkeeping will be
   * finalized. A Completed Incoming Goods document cannot be matched against any
   * more Supplier Invoices.
   */
  updateCompleted(
    id: number,
    params: IncominggoodsV1UpdateCompletedParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params ?? {};
    return this._client.put(path`/api/warehouse/incominggoods-v1/${id}/completed`, {
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * The document will be locked and bookkept. The inbound deliveries will affect
   * available stock.
   */
  updateRelease(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/warehouse/incominggoods-v1/${id}/release`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Void a document. If an Incoming Goods document has been Completed, or matched
   * against Supplier Invoice, it cannot be voided.
   */
  updateVoid(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/warehouse/incominggoods-v1/${id}/void`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface WarehouseIncomingGoods {
  deliveryNoteId: string;

  id?: number;

  completed?: boolean;

  costCenterCode?: string;

  date?: string;

  hasDeliveryNote?: boolean;

  note?: string;

  projectId?: string;

  released?: boolean;

  rows?: Array<WarehouseIncomingGoods.Row>;

  stockPointCode?: string;

  stockPointId?: string;

  stockPointName?: string;

  supplierName?: string;

  supplierNumber?: string;

  voided?: boolean;
}

export namespace WarehouseIncomingGoods {
  export interface Row {
    backOrderQuantity: number;

    invoicedQuantity: number;

    itemId: string;

    orderedQuantity: number;

    receivedQuantity: number;

    takenQuantity: number;

    id?: string;

    batch?: string;

    costCenterCode?: string;

    directCost?: number;

    isStockItem?: boolean;

    itemDescription?: string;

    itemUnit?: string;

    projectId?: string;

    purchaseOrderId?: number;

    purchaseOrderRowId?: string;

    remainingOrderedQuantity?: number;

    rowOrder?: number;

    stockLocationCode?: string;

    stockLocationId?: string;

    stockLocationName?: string;

    stockPointCode?: string;

    stockPointId?: string;

    stockPointName?: string;
  }
}

export type IncominggoodsV1RetrieveIncominggoodsV1Response =
  Array<IncominggoodsV1RetrieveIncominggoodsV1Response.IncominggoodsV1RetrieveIncominggoodsV1ResponseItem>;

export namespace IncominggoodsV1RetrieveIncominggoodsV1Response {
  export interface IncominggoodsV1RetrieveIncominggoodsV1ResponseItem {
    id?: number;

    completed?: boolean;

    date?: string;

    deliveryNoteId?: string;

    hasDeliveryNote?: boolean;

    note?: string;

    released?: boolean;

    stockPointId?: string;

    supplierName?: string;

    supplierNumber?: string;

    unmatchedValue?: number;

    voided?: boolean;
  }
}

export interface IncominggoodsV1RetrieveParams {
  /**
   * This Supplier Invoice id will be excluded when calculating the takenQuantity.
   */
  ignoreSupplierInvoiceId?: number;
}

export interface IncominggoodsV1UpdateParams {
  deliveryNoteId: string;

  body_id?: number;

  completed?: boolean;

  costCenterCode?: string;

  date?: string;

  hasDeliveryNote?: boolean;

  note?: string;

  projectId?: string;

  released?: boolean;

  rows?: Array<IncominggoodsV1UpdateParams.Row>;

  stockPointCode?: string;

  stockPointId?: string;

  stockPointName?: string;

  supplierName?: string;

  supplierNumber?: string;

  voided?: boolean;
}

export namespace IncominggoodsV1UpdateParams {
  export interface Row {
    backOrderQuantity: number;

    invoicedQuantity: number;

    itemId: string;

    orderedQuantity: number;

    receivedQuantity: number;

    takenQuantity: number;

    id?: string;

    batch?: string;

    costCenterCode?: string;

    directCost?: number;

    isStockItem?: boolean;

    itemDescription?: string;

    itemUnit?: string;

    projectId?: string;

    purchaseOrderId?: number;

    purchaseOrderRowId?: string;

    remainingOrderedQuantity?: number;

    rowOrder?: number;

    stockLocationCode?: string;

    stockLocationId?: string;

    stockLocationName?: string;

    stockPointCode?: string;

    stockPointId?: string;

    stockPointName?: string;
  }
}

export interface IncominggoodsV1IncominggoodsV1Params {
  deliveryNoteId: string;

  id?: number;

  completed?: boolean;

  costCenterCode?: string;

  date?: string;

  hasDeliveryNote?: boolean;

  note?: string;

  projectId?: string;

  released?: boolean;

  rows?: Array<IncominggoodsV1IncominggoodsV1Params.Row>;

  stockPointCode?: string;

  stockPointId?: string;

  stockPointName?: string;

  supplierName?: string;

  supplierNumber?: string;

  voided?: boolean;
}

export namespace IncominggoodsV1IncominggoodsV1Params {
  export interface Row {
    backOrderQuantity: number;

    invoicedQuantity: number;

    itemId: string;

    orderedQuantity: number;

    receivedQuantity: number;

    takenQuantity: number;

    id?: string;

    batch?: string;

    costCenterCode?: string;

    directCost?: number;

    isStockItem?: boolean;

    itemDescription?: string;

    itemUnit?: string;

    projectId?: string;

    purchaseOrderId?: number;

    purchaseOrderRowId?: string;

    remainingOrderedQuantity?: number;

    rowOrder?: number;

    stockLocationCode?: string;

    stockLocationId?: string;

    stockLocationName?: string;

    stockPointCode?: string;

    stockPointId?: string;

    stockPointName?: string;
  }
}

export interface IncominggoodsV1RetrieveIncominggoodsV1Params {
  /**
   * `true` to include only completed documents. `false` to include only
   * non-completed documents.
   */
  completed?: boolean;

  /**
   * Include only documents where `deliveryNote`-field contains the given text
   * (case-insensitive).
   */
  deliveryNote?: string;

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
   * Include only documents where `id` or `deliveryNote`-field contains the given
   * text (case-insensitive).
   */
  q?: string;

  /**
   * `true` to include only released documents. `false` to include only non-released
   * documents.
   */
  released?: boolean;

  /**
   * Include only documents with the given `supplierNumber`.
   */
  supplierNumber?: string;

  /**
   * `true` to include only voided documents. `false` to include only non-voided
   * documents.
   */
  voided?: boolean;
}

export interface IncominggoodsV1UpdateCompletedParams {
  body?: string;
}

export declare namespace IncominggoodsV1 {
  export {
    type WarehouseIncomingGoods as WarehouseIncomingGoods,
    type IncominggoodsV1RetrieveIncominggoodsV1Response as IncominggoodsV1RetrieveIncominggoodsV1Response,
    type IncominggoodsV1RetrieveParams as IncominggoodsV1RetrieveParams,
    type IncominggoodsV1UpdateParams as IncominggoodsV1UpdateParams,
    type IncominggoodsV1IncominggoodsV1Params as IncominggoodsV1IncominggoodsV1Params,
    type IncominggoodsV1RetrieveIncominggoodsV1Params as IncominggoodsV1RetrieveIncominggoodsV1Params,
    type IncominggoodsV1UpdateCompletedParams as IncominggoodsV1UpdateCompletedParams,
  };
}
