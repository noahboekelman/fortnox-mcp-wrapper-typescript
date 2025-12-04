// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class OutboundV1 extends APIResource {
  /**
   * Get custom outbound document
   */
  retrieve(
    id: string,
    params: OutboundV1RetrieveParams,
    options?: RequestOptions,
  ): APIPromise<WarehouseCustomOutboundDocument> {
    const { type } = params;
    return this._client.get(
      path`/api/warehouse/documentdeliveries/custom/outbound-v1/${type}/${id}`,
      options,
    );
  }

  /**
   * If type is not known, it will be registered as belonging to the OUTBOUND
   * category.
   *
   * If type is an existing custom document type of category INBOUND an error is
   * thrown.
   *
   * If type is invalid an error is thrown.
   */
  update(
    pathID: string,
    params: OutboundV1UpdateParams,
    options?: RequestOptions,
  ): APIPromise<WarehouseCustomOutboundDocument> {
    const { type, ...body } = params;
    return this._client.put(path`/api/warehouse/documentdeliveries/custom/outbound-v1/${type}/${pathID}`, {
      body,
      ...options,
    });
  }

  /**
   * Release custom outbound document
   */
  updateRelease(
    id: string,
    params: OutboundV1UpdateReleaseParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { type } = params;
    return this._client.put(
      path`/api/warehouse/documentdeliveries/custom/outbound-v1/${type}/${id}/release`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Void custom outbound document
   */
  updateVoid(id: string, params: OutboundV1UpdateVoidParams, options?: RequestOptions): APIPromise<void> {
    const { type, force } = params;
    return this._client.put(path`/api/warehouse/documentdeliveries/custom/outbound-v1/${type}/${id}/void`, {
      query: { force },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface WarehouseCustomOutboundDocument {
  date: string;

  deliveryState: 'registration' | 'reservation' | 'delivery';

  rows: Array<WarehouseCustomOutboundDocument.Row>;

  id?: string;

  averageCosts?: Array<WarehouseCustomOutboundDocument.AverageCost>;

  forcedDelivery?: boolean;

  note?: string;

  referenceType?: string;

  voided?: boolean;

  warehouseReady?: boolean;
}

export namespace WarehouseCustomOutboundDocument {
  export interface Row {
    itemId: string;

    quantity: number;

    costCenterCode?: string;

    deliveredQuantity?: number;

    forcedQuantity?: number;

    itemDescription?: string;

    itemUnit?: string;

    projectId?: string;

    reservedQuantity?: number;

    rowId?: number;

    stockLocationId?: string;

    stockPointId?: string;
  }

  export interface AverageCost {
    averageCostInSEK?: number;

    itemId?: string;

    stockPointId?: string;
  }
}

export interface OutboundV1RetrieveParams {
  /**
   * document type
   */
  type: string;
}

export interface OutboundV1UpdateParams {
  /**
   * Path param: the type of the custom outbound document, min 1 character, max 25
   * characters, may contain letters A-Z, digits 0-9, underscore (\_), and dash (-).
   * Always stored as upper case.
   */
  type: string;

  /**
   * Body param:
   */
  date: string;

  /**
   * Body param:
   */
  deliveryState: 'registration' | 'reservation' | 'delivery';

  /**
   * Body param:
   */
  rows: Array<OutboundV1UpdateParams.Row>;

  /**
   * Body param:
   */
  body_id?: string;

  /**
   * Body param:
   */
  averageCosts?: Array<OutboundV1UpdateParams.AverageCost>;

  /**
   * Body param:
   */
  forcedDelivery?: boolean;

  /**
   * Body param:
   */
  note?: string;

  /**
   * Body param:
   */
  referenceType?: string;

  /**
   * Body param:
   */
  voided?: boolean;

  /**
   * Body param:
   */
  warehouseReady?: boolean;
}

export namespace OutboundV1UpdateParams {
  export interface Row {
    itemId: string;

    quantity: number;

    costCenterCode?: string;

    deliveredQuantity?: number;

    forcedQuantity?: number;

    itemDescription?: string;

    itemUnit?: string;

    projectId?: string;

    reservedQuantity?: number;

    rowId?: number;

    stockLocationId?: string;

    stockPointId?: string;
  }

  export interface AverageCost {
    averageCostInSEK?: number;

    itemId?: string;

    stockPointId?: string;
  }
}

export interface OutboundV1UpdateReleaseParams {
  /**
   * document type
   */
  type: string;
}

export interface OutboundV1UpdateVoidParams {
  /**
   * Path param: document type
   */
  type: string;

  /**
   * Query param: true if the document should be voided even if the document has
   * connected outbounds, defaults to false.
   */
  force?: boolean;
}

export declare namespace OutboundV1 {
  export {
    type WarehouseCustomOutboundDocument as WarehouseCustomOutboundDocument,
    type OutboundV1RetrieveParams as OutboundV1RetrieveParams,
    type OutboundV1UpdateParams as OutboundV1UpdateParams,
    type OutboundV1UpdateReleaseParams as OutboundV1UpdateReleaseParams,
    type OutboundV1UpdateVoidParams as OutboundV1UpdateVoidParams,
  };
}
