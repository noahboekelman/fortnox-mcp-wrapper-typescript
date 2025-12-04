// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Inbounddeliveries extends APIResource {
  /**
   * <p>
   *  The <code>id</code> is set automatically.
   */
  create(
    body: InbounddeliveryCreateParams,
    options?: RequestOptions,
  ): APIPromise<WarehouseManualInboundDocument> {
    return this._client.post('/api/warehouse/deliveries-v1/inbounddeliveries', { body, ...options });
  }

  /**
   * Get manual inbound document
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<WarehouseManualInboundDocument> {
    return this._client.get(path`/api/warehouse/deliveries-v1/inbounddeliveries/${id}`, options);
  }

  /**
   * Update manual inbound document
   */
  update(
    pathID: number,
    body: InbounddeliveryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WarehouseManualInboundDocument> {
    return this._client.put(path`/api/warehouse/deliveries-v1/inbounddeliveries/${pathID}`, {
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
    return this._client.put(path`/api/warehouse/deliveries-v1/inbounddeliveries/${id}/release`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * <p>
   *  A released manual inbound document might have connected outbounds, and can only be force voided.
   *  Note that a force void operation might cause a negative stock.
   *  <p>
   *  The following error codes might be thrown:
   *   <dl>
   *   <dt>void_linked_outbound</dt>
   *     <dd>If this document has any outbounds transactions connected to it.</dd>
   *   </dl>
   */
  updateVoid(
    id: number,
    params: InbounddeliveryUpdateVoidParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { customVoidDate, force } = params ?? {};
    return this._client.put(path`/api/warehouse/deliveries-v1/inbounddeliveries/${id}/void`, {
      query: { customVoidDate, force },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface WarehouseManualInboundDocument {
  currency: string;

  currencyRate: number;

  date: string;

  rows: Array<WarehouseManualInboundDocument.Row>;

  id?: number;

  currencyUnit?: number;

  note?: string;

  released?: boolean;

  stockPointCode?: string;

  stockPointId?: string;

  stockPointName?: string;

  voided?: boolean;
}

export namespace WarehouseManualInboundDocument {
  export interface Row {
    itemId: string;

    quantity: number;

    batch?: string;

    costCenterCode?: string;

    directCost?: number;

    freightCost?: number;

    itemDescription?: string;

    itemUnit?: string;

    otherCost?: number;

    projectId?: string;

    rowId?: number;

    stockLocationCode?: string;

    stockLocationId?: string;

    stockLocationName?: string;

    stockPointCode?: string;

    stockPointId?: string;

    stockPointName?: string;
  }
}

export interface InbounddeliveryCreateParams {
  currency: string;

  currencyRate: number;

  date: string;

  rows: Array<InbounddeliveryCreateParams.Row>;

  id?: number;

  currencyUnit?: number;

  note?: string;

  released?: boolean;

  stockPointCode?: string;

  stockPointId?: string;

  stockPointName?: string;

  voided?: boolean;
}

export namespace InbounddeliveryCreateParams {
  export interface Row {
    itemId: string;

    quantity: number;

    batch?: string;

    costCenterCode?: string;

    directCost?: number;

    freightCost?: number;

    itemDescription?: string;

    itemUnit?: string;

    otherCost?: number;

    projectId?: string;

    rowId?: number;

    stockLocationCode?: string;

    stockLocationId?: string;

    stockLocationName?: string;

    stockPointCode?: string;

    stockPointId?: string;

    stockPointName?: string;
  }
}

export interface InbounddeliveryUpdateParams {
  currency: string;

  currencyRate: number;

  date: string;

  rows: Array<InbounddeliveryUpdateParams.Row>;

  body_id?: number;

  currencyUnit?: number;

  note?: string;

  released?: boolean;

  stockPointCode?: string;

  stockPointId?: string;

  stockPointName?: string;

  voided?: boolean;
}

export namespace InbounddeliveryUpdateParams {
  export interface Row {
    itemId: string;

    quantity: number;

    batch?: string;

    costCenterCode?: string;

    directCost?: number;

    freightCost?: number;

    itemDescription?: string;

    itemUnit?: string;

    otherCost?: number;

    projectId?: string;

    rowId?: number;

    stockLocationCode?: string;

    stockLocationId?: string;

    stockLocationName?: string;

    stockPointCode?: string;

    stockPointId?: string;

    stockPointName?: string;
  }
}

export interface InbounddeliveryUpdateVoidParams {
  /**
   * date the void operation should be bookkeept on
   */
  customVoidDate?: string;

  /**
   * true if we should force void, defaults to false
   */
  force?: boolean;
}

export declare namespace Inbounddeliveries {
  export {
    type WarehouseManualInboundDocument as WarehouseManualInboundDocument,
    type InbounddeliveryCreateParams as InbounddeliveryCreateParams,
    type InbounddeliveryUpdateParams as InbounddeliveryUpdateParams,
    type InbounddeliveryUpdateVoidParams as InbounddeliveryUpdateVoidParams,
  };
}
