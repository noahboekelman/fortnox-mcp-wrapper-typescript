// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RowsAPI from './rows';
import {
  RowCreateParams,
  RowDeleteAllParams,
  RowDeleteAllResponse,
  RowDeleteParams,
  RowDeleteResponse,
  RowListParams,
  Rows,
} from './rows';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class StocktakingV1 extends APIResource {
  rows: RowsAPI.Rows = new RowsAPI.Rows(this._client);

  /**
   * Get Stock Taking document
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<WarehouseStockTaking> {
    return this._client.get(path`/api/warehouse/stocktaking-v1/${id}`, options);
  }

  /**
   * <p>
   *  Updates can only be done when state is <code>planning</code> or <code>started</code>.
   *  <p>
   *  All updatable fields (<code>date</code>, <code>name</code>, <code>responsible</code>,
   *  <code>state</code>, <code>sortingId</code>, <code>costCenterCode</code>, <code>projectId</code>)
   *  in the document head are set to supplied values.
   *  <p>
   *  You cannot set <code>state</code> to <code>completed</code> or <code>voided</code>. Use endpoints
   *  release or void for this.
   *  <p>
   *  The <code>date</code>-field is mandatory for documents in state <code>started</code>.
   *  <p>
   *  When state is <code>started</code> you use this endpoint for setting the stock taken quantity.
   *  Only existing rows can be updated - no new rows will be created (use the addRows endpoint for this).
   *  Only the supplied rows will be updated. I.e. you don't have to send in <strong>all</strong>
   *  document rows - just supply the rows you want to set stockTakenQuantity for. Just make sure
   *  to always include all the fields from the document head as mentioned above.
   *  <p>
   *  The mandatory fields on the (optionally supplied) rows are: <code>itemId</code>,
   *  <code>stockPointId</code>, <code>stockLocationId</code>.
   *  Fields <code>countedBy</code> and <code>stockTakenQuantity</code> are technically
   *  not mandatory, but will be set to null if you don't supply them.
   */
  update(
    pathID: number,
    body: StocktakingV1UpdateParams,
    options?: RequestOptions,
  ): APIPromise<WarehouseStockTaking> {
    return this._client.put(path`/api/warehouse/stocktaking-v1/${pathID}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * <p>
   *  Permanently deletes a Stock Taking document and its rows.
   *  <p>
   *  Only for documents in state <code>planning</code> and <code>started</code>.
   */
  delete(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/warehouse/stocktaking-v1/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * <p>
   *  Add all matching candidate rows to a stock taking, as specified by filters.
   */
  addrows(
    id: number,
    params: StocktakingV1AddrowsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StocktakingV1AddrowsResponse> {
    const {
      excludeNonInboundItems,
      excludeZeroBalanceItems,
      itemDescriptionSearch,
      itemIds,
      itemIdSearch,
      stockLocationIds,
      stockPointIds,
      supplierNumbers,
      transactionDate,
    } = params ?? {};
    return this._client.post(path`/api/warehouse/stocktaking-v1/${id}/addrows`, {
      query: {
        excludeNonInboundItems,
        excludeZeroBalanceItems,
        itemDescriptionSearch,
        itemIds,
        itemIdSearch,
        stockLocationIds,
        stockPointIds,
        supplierNumbers,
        transactionDate,
      },
      ...options,
    });
  }

  /**
   * <p>
   *  A candidate row is a combination of itemId, stockPointId and stockLocationId
   *  that can be added to the Stock Taking document.
   *  <p>
   *  Rows already added to the Stock Taking are excluded from this list.
   */
  retrieveCandidates(
    id: number,
    query: StocktakingV1RetrieveCandidatesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WarehouseStockTakingRow> {
    return this._client.get(path`/api/warehouse/stocktaking-v1/${id}/candidates`, { query, ...options });
  }

  /**
   * <p>
   *  Sortable fields:
   *  <code>id</code>,
   *  <code>name</code>,
   *  <code>date</code>,
   *  <code>responsible</code>,
   *  <code>state</code>
   *  </p>
   */
  retrieveStocktakingV1(
    query: StocktakingV1RetrieveStocktakingV1Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WarehouseStockTaking> {
    return this._client.get('/api/warehouse/stocktaking-v1', { query, ...options });
  }

  /**
   * <p>
   *  Create a new Stock Taking document.
   *  The only mandatory fields are <code>name</code> and <code>responsible</code>.
   *  <code>state</code> will be set to <code>planning</code> for a newly created document.
   *  <p>
   *  The <code>date</code>-field is not mandatory for documents in state <code>planning</code>.
   *  However, when you update the state to <code>started</code> you have to provide a date.
   *
   * <code>name</code> is a descriptive name of the stock taking.
   *
   * <code>responsible</code> is the name of the responsible for the stock taking.
   *
   * <code>rows</code> are added after creation by using the addRows-method.
   *
   * <code>projectId</code> and <code>costCenterCode</code> are used for
   * book-keeping, when the Stock Taking document is released.
   *
   *  <p>
   *  The field <code>usingStockPoints</code> is set from Warehouse system settings upon creation.
   *  If multiple stockpoints is used, then the rows will be per item-stockPoint-stockLocation.
   *  If multiple stockpoints is NOT used, then the rows will be per item-stockLocation.
   */
  stocktakingV1(
    body: StocktakingV1StocktakingV1Params,
    options?: RequestOptions,
  ): APIPromise<WarehouseStockTaking> {
    return this._client.post('/api/warehouse/stocktaking-v1', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * <p>
   *  The document will be locked and bookkept.
   *  The Stock Taking document state will be set to <code>completed</code>.
   *  The stock amount will be adjusted according to the stock taken quantity.
   */
  updateRelease(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/warehouse/stocktaking-v1/${id}/release`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * <p>
   *  Sets the Stock Taking document state to <code>voided</code>.
   *  <p>
   *  Only documents in state <code>planning</code> and <code>started</code>
   *  can be voided. A <code>completed</code> document may not be voided.
   */
  updateVoid(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/warehouse/stocktaking-v1/${id}/void`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface WarehouseStockTaking {
  name: string;

  responsible: string;

  state: string;

  id?: number;

  costCenterCode?: string;

  date?: string;

  projectId?: string;

  rows?: Array<WarehouseStockTakingRow>;

  sortingId?: number;

  sortParams?: WarehouseStockTakingSortParams;

  usingStockPoints?: boolean;
}

export interface WarehouseStockTakingRow {
  id?: string;

  countedBy?: string;

  currentRowNo?: number;

  hasPostReleaseStockChanges?: boolean;

  itemId?: string;

  stockLocationId?: string;

  stockPointId?: string;

  stockTakenQuantity?: number;

  stockTakingId?: number;

  stockTakingRowId?: string;

  totalQuantityInStock?: number;
}

export interface WarehouseStockTakingSortParams {
  primarySort?: string;

  primarySortOrder?: string;

  secondarySort?: string;

  secondarySortOrder?: string;
}

export type StocktakingV1AddrowsResponse = number;

export interface StocktakingV1UpdateParams {
  name: string;

  responsible: string;

  state: string;

  body_id?: number;

  costCenterCode?: string;

  date?: string;

  projectId?: string;

  rows?: Array<WarehouseStockTakingRow>;

  sortingId?: number;

  sortParams?: WarehouseStockTakingSortParams;

  usingStockPoints?: boolean;
}

export interface StocktakingV1AddrowsParams {
  excludeNonInboundItems?: boolean;

  excludeZeroBalanceItems?: boolean;

  itemDescriptionSearch?: string;

  itemIds?: Array<string>;

  itemIdSearch?: string;

  stockLocationIds?: Array<string>;

  stockPointIds?: Array<string>;

  supplierNumbers?: Array<string>;

  transactionDate?: string;
}

export interface StocktakingV1RetrieveCandidatesParams {
  excludeZeroBalanceItems?: boolean;

  /**
   * Include items that do not exist on inbound deliveries.
   */
  includeNonInboundItems?: boolean;

  itemDescriptionSearch?: string;

  itemIds?: Array<string>;

  itemIdSearch?: string;

  stockLocationIds?: Array<string>;

  stockPointIds?: Array<string>;

  supplierNumbers?: Array<string>;

  transactionDate?: string;
}

export interface StocktakingV1RetrieveStocktakingV1Params {
  /**
   * Include only stock takings with the given item.
   */
  itemId?: string;

  /**
   * Include only stock takings with the given state.
   */
  state?: 'all' | 'planning' | 'started' | 'completed' | 'voided';
}

export interface StocktakingV1StocktakingV1Params {
  name: string;

  responsible: string;

  state: string;

  id?: number;

  costCenterCode?: string;

  date?: string;

  projectId?: string;

  rows?: Array<WarehouseStockTakingRow>;

  sortingId?: number;

  sortParams?: WarehouseStockTakingSortParams;

  usingStockPoints?: boolean;
}

StocktakingV1.Rows = Rows;

export declare namespace StocktakingV1 {
  export {
    type WarehouseStockTaking as WarehouseStockTaking,
    type WarehouseStockTakingRow as WarehouseStockTakingRow,
    type WarehouseStockTakingSortParams as WarehouseStockTakingSortParams,
    type StocktakingV1AddrowsResponse as StocktakingV1AddrowsResponse,
    type StocktakingV1UpdateParams as StocktakingV1UpdateParams,
    type StocktakingV1AddrowsParams as StocktakingV1AddrowsParams,
    type StocktakingV1RetrieveCandidatesParams as StocktakingV1RetrieveCandidatesParams,
    type StocktakingV1RetrieveStocktakingV1Params as StocktakingV1RetrieveStocktakingV1Params,
    type StocktakingV1StocktakingV1Params as StocktakingV1StocktakingV1Params,
  };

  export {
    Rows as Rows,
    type RowDeleteResponse as RowDeleteResponse,
    type RowDeleteAllResponse as RowDeleteAllResponse,
    type RowCreateParams as RowCreateParams,
    type RowListParams as RowListParams,
    type RowDeleteParams as RowDeleteParams,
    type RowDeleteAllParams as RowDeleteAllParams,
  };
}
