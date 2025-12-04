// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as StocktakingV1API from './stocktaking-v1';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Rows extends APIResource {
  /**
   * <p>
   *  Add rows to a stock taking.
   *  If you add an already existing row noting happens.
   */
  create(
    id: number,
    params: RowCreateParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params ?? {};
    return this._client.post(path`/api/warehouse/stocktaking-v1/${id}/rows`, {
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get Stock Taking Rows
   */
  list(
    id: number,
    query: RowListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StocktakingV1API.WarehouseStockTakingRow> {
    return this._client.get(path`/api/warehouse/stocktaking-v1/${id}/rows`, { query, ...options });
  }

  /**
   * <p>
   *  Remove single row by id from the Stock Taking document.
   */
  delete(rowID: string, params: RowDeleteParams, options?: RequestOptions): APIPromise<RowDeleteResponse> {
    const { id } = params;
    return this._client.delete(path`/api/warehouse/stocktaking-v1/${id}/rows/${rowID}`, options);
  }

  /**
   * <p>
   *  Remove all rows matching the filter parameters from the Stock Taking document.
   */
  deleteAll(
    id: number,
    params: RowDeleteAllParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RowDeleteAllResponse> {
    const {
      excludeZeroBalanceItems,
      itemDescriptionSearch,
      itemIds,
      itemIdSearch,
      stockLocationIds,
      stockPointIds,
      supplierNumbers,
      transactionDate,
    } = params ?? {};
    return this._client.delete(path`/api/warehouse/stocktaking-v1/${id}/rows`, {
      query: {
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
}

export type RowDeleteResponse = number;

export type RowDeleteAllResponse = number;

export interface RowCreateParams {
  body?: Array<StocktakingV1API.WarehouseStockTakingRow>;
}

export interface RowListParams {
  excludeZeroBalanceItems?: boolean;

  itemDescriptionSearch?: string;

  itemIds?: Array<string>;

  itemIdSearch?: string;

  /**
   * Secondary sorting order
   */
  secondaryorder?: string;

  /**
   * Secondary sorting column
   */
  secondarysortby?: string;

  /**
   * the itemId that should be on top of the rows list (used to jump to specific
   * row), can be empty
   */
  startingItemId?: string;

  /**
   * the row number to start the search from, used with startingItemId to jump to
   * specific rows, can be empty
   */
  startingRowNo?: number;

  stateFilter?: 'all' | 'notStockTaken' | 'stockTakenNoDeviation' | 'stockTakenWithDeviation';

  stockLocationIds?: Array<string>;

  stockPointIds?: Array<string>;

  supplierNumbers?: Array<string>;

  transactionDate?: string;
}

export interface RowDeleteParams {
  /**
   * Stock Taking document id.
   */
  id: number;
}

export interface RowDeleteAllParams {
  excludeZeroBalanceItems?: boolean;

  itemDescriptionSearch?: string;

  itemIds?: Array<string>;

  itemIdSearch?: string;

  stockLocationIds?: Array<string>;

  stockPointIds?: Array<string>;

  supplierNumbers?: Array<string>;

  transactionDate?: string;
}

export declare namespace Rows {
  export {
    type RowDeleteResponse as RowDeleteResponse,
    type RowDeleteAllResponse as RowDeleteAllResponse,
    type RowCreateParams as RowCreateParams,
    type RowListParams as RowListParams,
    type RowDeleteParams as RowDeleteParams,
    type RowDeleteAllParams as RowDeleteAllParams,
  };
}
