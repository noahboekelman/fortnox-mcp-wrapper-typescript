// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Outbounddeliveries extends APIResource {
  /**
   * <p>
   *  The <code>id</code> is set automatically.
   */
  create(
    body: OutbounddeliveryCreateParams,
    options?: RequestOptions,
  ): APIPromise<WarehouseManualOutboundDocument> {
    return this._client.post('/api/warehouse/deliveries-v1/outbounddeliveries', { body, ...options });
  }

  /**
   * Get manual outbound document
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<WarehouseManualOutboundDocument> {
    return this._client.get(path`/api/warehouse/deliveries-v1/outbounddeliveries/${id}`, options);
  }

  /**
   * <p>
   *  HTTP code 400 cannot_modify_released_document
   *  HTTP code 400 document_is_voided Document is voided.
   *  HTTP code 404 not found
   */
  update(
    pathID: number,
    body: OutbounddeliveryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WarehouseManualOutboundDocument> {
    return this._client.put(path`/api/warehouse/deliveries-v1/outbounddeliveries/${pathID}`, {
      body,
      ...options,
    });
  }

  /**
   * <p>
   *  The document will be locked and bookkept.
   *  <p>
   *  The following error codes might be thrown:
   *   <dl>
   *   <dt>cannot_release_later_than_current_date</dt>
   *     <dd>Document date cannot be in the future.</dd>
   *   <dt>document_is_voided</dt>
   *     <dd>Document is voided.</dd>
   *   <dt>period_locked</dt>
   *     <dd>Document date is within a locked bookkeeping period.</dd>
   *   </dl>
   */
  updateRelease(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/warehouse/deliveries-v1/outbounddeliveries/${id}/release`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Void manual outbound document
   */
  updateVoid(
    id: number,
    params: OutbounddeliveryUpdateVoidParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { customVoidDate } = params ?? {};
    return this._client.put(path`/api/warehouse/deliveries-v1/outbounddeliveries/${id}/void`, {
      query: { customVoidDate },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface WarehouseManualOutboundDocument {
  date: string;

  rows: Array<WarehouseManualOutboundDocument.Row>;

  id?: number;

  note?: string;

  released?: boolean;

  stockPointCode?: string;

  stockPointId?: string;

  stockPointName?: string;

  voided?: boolean;
}

export namespace WarehouseManualOutboundDocument {
  export interface Row {
    itemId: string;

    quantity: number;

    costCenterCode?: string;

    deliveredQuantity?: number;

    forcedQuantity?: number;

    itemDescription?: string;

    itemUnit?: string;

    projectId?: string;

    stockLocationCode?: string;

    stockLocationId?: string;

    stockLocationName?: string;

    stockPointCode?: string;

    stockPointId?: string;

    stockPointName?: string;
  }
}

export interface OutbounddeliveryCreateParams {
  date: string;

  rows: Array<OutbounddeliveryCreateParams.Row>;

  id?: number;

  note?: string;

  released?: boolean;

  stockPointCode?: string;

  stockPointId?: string;

  stockPointName?: string;

  voided?: boolean;
}

export namespace OutbounddeliveryCreateParams {
  export interface Row {
    itemId: string;

    quantity: number;

    costCenterCode?: string;

    deliveredQuantity?: number;

    forcedQuantity?: number;

    itemDescription?: string;

    itemUnit?: string;

    projectId?: string;

    stockLocationCode?: string;

    stockLocationId?: string;

    stockLocationName?: string;

    stockPointCode?: string;

    stockPointId?: string;

    stockPointName?: string;
  }
}

export interface OutbounddeliveryUpdateParams {
  date: string;

  rows: Array<OutbounddeliveryUpdateParams.Row>;

  body_id?: number;

  note?: string;

  released?: boolean;

  stockPointCode?: string;

  stockPointId?: string;

  stockPointName?: string;

  voided?: boolean;
}

export namespace OutbounddeliveryUpdateParams {
  export interface Row {
    itemId: string;

    quantity: number;

    costCenterCode?: string;

    deliveredQuantity?: number;

    forcedQuantity?: number;

    itemDescription?: string;

    itemUnit?: string;

    projectId?: string;

    stockLocationCode?: string;

    stockLocationId?: string;

    stockLocationName?: string;

    stockPointCode?: string;

    stockPointId?: string;

    stockPointName?: string;
  }
}

export interface OutbounddeliveryUpdateVoidParams {
  /**
   * if provided this date will be used as the voided date instead of the document
   * date
   */
  customVoidDate?: string;
}

export declare namespace Outbounddeliveries {
  export {
    type WarehouseManualOutboundDocument as WarehouseManualOutboundDocument,
    type OutbounddeliveryCreateParams as OutbounddeliveryCreateParams,
    type OutbounddeliveryUpdateParams as OutbounddeliveryUpdateParams,
    type OutbounddeliveryUpdateVoidParams as OutbounddeliveryUpdateVoidParams,
  };
}
