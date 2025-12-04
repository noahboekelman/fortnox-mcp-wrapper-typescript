// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ProductionordersV1 extends APIResource {
  /**
   * Get Production Order document
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<WarehouseProductionOrder> {
    return this._client.get(path`/api/warehouse/productionorders-v1/${id}`, options);
  }

  /**
   * <p>
   *  Note that you must submit the full Production Order document
   *  when updating.
   */
  update(
    pathID: number,
    body: ProductionordersV1UpdateParams,
    options?: RequestOptions,
  ): APIPromise<WarehouseProductionOrder> {
    return this._client.put(path`/api/warehouse/productionorders-v1/${pathID}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * <p>
   *  Set <code>itemId</code> to the item to be produced.
   *  <p>
   *  Set <code>quantity</code> to number of units to produce.
   *  <p>
   *  Set <code>startDate</code> to production start state.
   *  <p>
   *  ProductionState is set to <code>reserved</code> by default.
   *  It can also be <code>registered</code>. Then no reservations
   *  will be made (no quantities will be assigned to the <code>packageItems</code> yet).
   *  <p>
   *  Setting <code>outboundStockPointId</code> (where the <code>packageItems</code>
   *  will be taken from), and <code>inboundStockPointId</code> (where the
   *  produced item will be put) is mandatory multiple stockpoints has been activated
   *  in the warehouse settings.
   *  <p>
   *  Before the document is released, the <code>productionDate</code> must be set.
   *  <p>
   *  The <code>packageItems</code> to include is easiest to get by calling
   *  the method <code>getRequiredProductionParts</code>.
   */
  productionordersV1(
    body: ProductionordersV1ProductionordersV1Params,
    options?: RequestOptions,
  ): APIPromise<WarehouseProductionOrder> {
    return this._client.post('/api/warehouse/productionorders-v1', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * List production orders
   */
  retrieveProductionordersV1(
    query: ProductionordersV1RetrieveProductionordersV1Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WarehouseProductionOrder> {
    return this._client.get('/api/warehouse/productionorders-v1', { query, ...options });
  }
}

export interface WarehousePackageItem {
  itemId: string;

  quantityRequired: number;

  itemDescription?: string;

  itemUnit?: string;

  quantityReserved?: number;

  totalQuantityRequired?: number;
}

export interface WarehouseProductionOrder {
  productionState: 'registered' | 'reserved' | 'ongoing';

  quantity: number;

  startDate: string;

  id?: number;

  batch?: string;

  costCenterCode?: string;

  documentState?: 'completed' | 'voided';

  inboundStockLocationId?: string;

  inboundStockPointId?: string;

  itemDescription?: string;

  itemId?: string;

  itemUnit?: string;

  note?: string;

  outboundStockPointId?: string;

  packageItems?: Array<WarehousePackageItem>;

  productionDate?: string;

  projectId?: string;
}

export interface ProductionordersV1UpdateParams {
  productionState: 'registered' | 'reserved' | 'ongoing';

  quantity: number;

  startDate: string;

  body_id?: number;

  batch?: string;

  costCenterCode?: string;

  documentState?: 'completed' | 'voided';

  inboundStockLocationId?: string;

  inboundStockPointId?: string;

  itemDescription?: string;

  itemId?: string;

  itemUnit?: string;

  note?: string;

  outboundStockPointId?: string;

  packageItems?: Array<WarehousePackageItem>;

  productionDate?: string;

  projectId?: string;
}

export interface ProductionordersV1ProductionordersV1Params {
  productionState: 'registered' | 'reserved' | 'ongoing';

  quantity: number;

  startDate: string;

  id?: number;

  batch?: string;

  costCenterCode?: string;

  documentState?: 'completed' | 'voided';

  inboundStockLocationId?: string;

  inboundStockPointId?: string;

  itemDescription?: string;

  itemId?: string;

  itemUnit?: string;

  note?: string;

  outboundStockPointId?: string;

  packageItems?: Array<WarehousePackageItem>;

  productionDate?: string;

  projectId?: string;
}

export interface ProductionordersV1RetrieveProductionordersV1Params {
  /**
   * Include only production orders with the given production item.
   */
  itemId?: string;

  /**
   * Include only production orders with the given state. Allowed states: all,
   * incomplete, delayed, completed, voided. (Default is incomplete)
   */
  state?: 'all' | 'incomplete' | 'delayed' | 'completed' | 'voided';
}

export declare namespace ProductionordersV1 {
  export {
    type WarehousePackageItem as WarehousePackageItem,
    type WarehouseProductionOrder as WarehouseProductionOrder,
    type ProductionordersV1UpdateParams as ProductionordersV1UpdateParams,
    type ProductionordersV1ProductionordersV1Params as ProductionordersV1ProductionordersV1Params,
    type ProductionordersV1RetrieveProductionordersV1Params as ProductionordersV1RetrieveProductionordersV1Params,
  };
}
