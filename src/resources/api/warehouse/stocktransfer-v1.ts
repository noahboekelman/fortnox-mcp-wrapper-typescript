// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class StocktransferV1 extends APIResource {
  /**
   * Get stock transfer document
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<WarehouseStockTransferDocument> {
    return this._client.get(path`/api/warehouse/stocktransfer-v1/${id}`, options);
  }

  /**
   * Update a stock transfer document
   */
  update(
    pathID: number,
    body: StocktransferV1UpdateParams,
    options?: RequestOptions,
  ): APIPromise<WarehouseStockTransferDocument> {
    return this._client.put(path`/api/warehouse/stocktransfer-v1/${pathID}`, { body, ...options });
  }

  /**
   * <p>
   *  Outbounds will be reserved in the from-place.
   *  Inbounds are created upon release of the stock transfer document.
   */
  stocktransferV1(
    body: StocktransferV1StocktransferV1Params,
    options?: RequestOptions,
  ): APIPromise<WarehouseStockTransferDocument> {
    return this._client.post('/api/warehouse/stocktransfer-v1', { body, ...options });
  }

  /**
   * <p>
   *  This will deliver all outbounds which are reserved in from-place, and
   *  create inbounds in the to-place.
   *  Nothing happens if you releasr an already released stock transfer document.
   *  <p>
   *  Returns <code>document_is_voided</code> if document is voided.
   */
  updateRelease(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/warehouse/stocktransfer-v1/${id}/release`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * <p>
   *  Voiding a released stock transfer document is not allowed, and
   *  will return <code>cannot_modify_released_document</code>
   */
  updateVoid(
    id: number,
    params: StocktransferV1UpdateVoidParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { force } = params ?? {};
    return this._client.put(path`/api/warehouse/stocktransfer-v1/${id}/void`, {
      query: { force },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface WarehouseStockTransferDocument {
  rows: Array<WarehouseStockTransferDocument.Row>;

  id?: number;

  note?: string;

  released?: boolean;

  transferDate?: string;

  version?: number;

  voided?: boolean;
}

export namespace WarehouseStockTransferDocument {
  export interface Row {
    fromStockPointId: string;

    itemId: string;

    requestedQuantity: number;

    toStockPointId: string;

    fromStockLocationCode?: string;

    fromStockLocationId?: string;

    fromStockLocationName?: string;

    fromStockPointCode?: string;

    fromStockPointName?: string;

    itemDescription?: string;

    itemUnit?: string;

    quantity?: number;

    rowNum?: number;

    toStockLocationCode?: string;

    toStockLocationId?: string;

    toStockLocationName?: string;

    toStockPointCode?: string;

    toStockPointName?: string;
  }
}

export interface StocktransferV1UpdateParams {
  rows: Array<StocktransferV1UpdateParams.Row>;

  body_id?: number;

  note?: string;

  released?: boolean;

  transferDate?: string;

  version?: number;

  voided?: boolean;
}

export namespace StocktransferV1UpdateParams {
  export interface Row {
    fromStockPointId: string;

    itemId: string;

    requestedQuantity: number;

    toStockPointId: string;

    fromStockLocationCode?: string;

    fromStockLocationId?: string;

    fromStockLocationName?: string;

    fromStockPointCode?: string;

    fromStockPointName?: string;

    itemDescription?: string;

    itemUnit?: string;

    quantity?: number;

    rowNum?: number;

    toStockLocationCode?: string;

    toStockLocationId?: string;

    toStockLocationName?: string;

    toStockPointCode?: string;

    toStockPointName?: string;
  }
}

export interface StocktransferV1StocktransferV1Params {
  rows: Array<StocktransferV1StocktransferV1Params.Row>;

  id?: number;

  note?: string;

  released?: boolean;

  transferDate?: string;

  version?: number;

  voided?: boolean;
}

export namespace StocktransferV1StocktransferV1Params {
  export interface Row {
    fromStockPointId: string;

    itemId: string;

    requestedQuantity: number;

    toStockPointId: string;

    fromStockLocationCode?: string;

    fromStockLocationId?: string;

    fromStockLocationName?: string;

    fromStockPointCode?: string;

    fromStockPointName?: string;

    itemDescription?: string;

    itemUnit?: string;

    quantity?: number;

    rowNum?: number;

    toStockLocationCode?: string;

    toStockLocationId?: string;

    toStockLocationName?: string;

    toStockPointCode?: string;

    toStockPointName?: string;
  }
}

export interface StocktransferV1UpdateVoidParams {
  force?: boolean;
}

export declare namespace StocktransferV1 {
  export {
    type WarehouseStockTransferDocument as WarehouseStockTransferDocument,
    type StocktransferV1UpdateParams as StocktransferV1UpdateParams,
    type StocktransferV1StocktransferV1Params as StocktransferV1StocktransferV1Params,
    type StocktransferV1UpdateVoidParams as StocktransferV1UpdateVoidParams,
  };
}
