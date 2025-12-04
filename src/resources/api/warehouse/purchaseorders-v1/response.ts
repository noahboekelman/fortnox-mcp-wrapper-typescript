// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PurchaseordersV1API from './purchaseorders-v1';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Response extends APIResource {
  /**
   * Update response state
   */
  create(
    id: number,
    body: ResponseCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PurchaseordersV1API.WarehousePurchaseOrder> {
    return this._client.put(path`/api/warehouse/purchaseorders-v1/${id}/response`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }
}

export interface WarehouseResponseStateChange {
  responseState?:
    | 'NOT_SENT'
    | 'SENT'
    | 'ACCEPTED_WITH_REQ_DLV_DATE'
    | 'ACCEPTED_WITH_CHANGED_DLV_DATE'
    | 'PARTLY_ACCEPTED_WITH_REQ_DLV_DATE'
    | 'PARTLY_ACCEPTED_WITH_CHANGED_DLV_DATE'
    | 'REJECTED';
}

export interface ResponseCreateParams {
  responseState?:
    | 'NOT_SENT'
    | 'SENT'
    | 'ACCEPTED_WITH_REQ_DLV_DATE'
    | 'ACCEPTED_WITH_CHANGED_DLV_DATE'
    | 'PARTLY_ACCEPTED_WITH_REQ_DLV_DATE'
    | 'PARTLY_ACCEPTED_WITH_CHANGED_DLV_DATE'
    | 'REJECTED';
}

export declare namespace Response {
  export {
    type WarehouseResponseStateChange as WarehouseResponseStateChange,
    type ResponseCreateParams as ResponseCreateParams,
  };
}
