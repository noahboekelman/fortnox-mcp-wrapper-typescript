// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class StockpointsV1 extends APIResource {
  /**
   * <p>
   *  Get stock point by id or code.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WarehouseStockPoint> {
    return this._client.get(path`/api/warehouse/stockpoints-v1/${id}`, options);
  }

  /**
   * <p>
   *  Remember to supply the complete representation of stock point including stock locations.
   */
  update(
    pathID: string,
    body: StockpointsV1UpdateParams,
    options?: RequestOptions,
  ): APIPromise<WarehouseStockPoint> {
    return this._client.put(path`/api/warehouse/stockpoints-v1/${pathID}`, { body, ...options });
  }

  /**
   * <p>
   *  Note that it is not allowed to delete a stock point that is in use.
   */
  delete(id: string, options?: RequestOptions): APIPromise<WarehouseStockPoint> {
    return this._client.delete(path`/api/warehouse/stockpoints-v1/${id}`, options);
  }

  /**
   * <p>
   *  Get stock points by IDs.
   *  <p>
   *  Use query param `state` to filter on ACTIVE, INACTIVE or ALL (default is to include ALL stock points).
   *  <p>
   *  Stock locations are NOT included in the response.
   */
  retrieveMulti(
    query: StockpointsV1RetrieveMultiParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WarehouseStockPoint> {
    return this._client.get('/api/warehouse/stockpoints-v1/multi', { query, ...options });
  }

  /**
   * <p>
   *  List stock locations for a specific stock point.
   *  <p>
   *  Optionally include a query parameter `q` to filter on stock location code or name.
   */
  retrieveStocklocations(
    id: string,
    query: StockpointsV1RetrieveStocklocationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WarehouseStockLocation> {
    return this._client.get(path`/api/warehouse/stockpoints-v1/${id}/stocklocations`, { query, ...options });
  }

  /**
   * <p>
   *  List stock points, optionally include a query parameter `q` to filter on stock point code or name.
   *  <p>
   *  Use query param `state` to filter on ACTIVE, INACTIVE or ALL (default is to include only ACTIVE stock points).
   *  <p>
   *  Stock locations are NOT included in the response.
   */
  retrieveStockpointsV1(
    query: StockpointsV1RetrieveStockpointsV1Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WarehouseStockPoint> {
    return this._client.get('/api/warehouse/stockpoints-v1', { query, ...options });
  }

  /**
   * <p>
   *  Both <code>code</code> and <code>name</code> are mandatory.
   *  <p>
   *  If you want to set a custom delivery address for this stock point,
   *  you must remember to set <code>usingCompanyAddress</code> to <code>false</code>.
   *  <p>
   *  Returns 400 <code>alreadyexists</code> if a stock point with same code already exists.
   *  <p>
   *  Returns 400 <code>duplicatestocklocations</code> if two or more stock locations have the same code.
   */
  stockpointsV1(
    body: StockpointsV1StockpointsV1Params,
    options?: RequestOptions,
  ): APIPromise<WarehouseStockPoint> {
    return this._client.post('/api/warehouse/stockpoints-v1', { body, ...options });
  }
}

export interface WarehouseStockLocation {
  code: string;

  id?: string;

  name?: string;

  stockPointId?: string;
}

export interface WarehouseStockPoint {
  code: string;

  name: string;

  id?: string;

  active?: boolean;

  deliveryAddress?: string;

  deliveryAddress2?: string;

  deliveryCity?: string;

  deliveryCountryCode?: string;

  deliveryName?: string;

  deliveryPhone?: string;

  deliveryZipCode?: string;

  stockLocations?: Array<WarehouseStockLocation>;

  usingCompanyAddress?: boolean;
}

export interface StockpointsV1UpdateParams {
  code: string;

  name: string;

  body_id?: string;

  active?: boolean;

  deliveryAddress?: string;

  deliveryAddress2?: string;

  deliveryCity?: string;

  deliveryCountryCode?: string;

  deliveryName?: string;

  deliveryPhone?: string;

  deliveryZipCode?: string;

  stockLocations?: Array<WarehouseStockLocation>;

  usingCompanyAddress?: boolean;
}

export interface StockpointsV1RetrieveMultiParams {
  /**
   * stock point ids (comma separated list of UUIDs)
   */
  ids?: Array<string>;

  /**
   * filter on <code>StockPointState</code>, default is to include ALL stock points.
   */
  state?: 'ALL' | 'ACTIVE' | 'INACTIVE';
}

export interface StockpointsV1RetrieveStocklocationsParams {
  /**
   * filters on stock location code or name.
   */
  q?: string;
}

export interface StockpointsV1RetrieveStockpointsV1Params {
  /**
   * filters on stock point code or name.
   */
  q?: string;

  /**
   * filter on stock point state
   */
  state?: 'ALL' | 'ACTIVE' | 'INACTIVE';
}

export interface StockpointsV1StockpointsV1Params {
  code: string;

  name: string;

  id?: string;

  active?: boolean;

  deliveryAddress?: string;

  deliveryAddress2?: string;

  deliveryCity?: string;

  deliveryCountryCode?: string;

  deliveryName?: string;

  deliveryPhone?: string;

  deliveryZipCode?: string;

  stockLocations?: Array<WarehouseStockLocation>;

  usingCompanyAddress?: boolean;
}

export declare namespace StockpointsV1 {
  export {
    type WarehouseStockLocation as WarehouseStockLocation,
    type WarehouseStockPoint as WarehouseStockPoint,
    type StockpointsV1UpdateParams as StockpointsV1UpdateParams,
    type StockpointsV1RetrieveMultiParams as StockpointsV1RetrieveMultiParams,
    type StockpointsV1RetrieveStocklocationsParams as StockpointsV1RetrieveStocklocationsParams,
    type StockpointsV1RetrieveStockpointsV1Params as StockpointsV1RetrieveStockpointsV1Params,
    type StockpointsV1StockpointsV1Params as StockpointsV1StockpointsV1Params,
  };
}
