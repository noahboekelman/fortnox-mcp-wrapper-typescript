// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class InboundV1 extends APIResource {
  /**
   * Get custom inbound document
   */
  retrieve(
    id: string,
    params: InboundV1RetrieveParams,
    options?: RequestOptions,
  ): APIPromise<WarehouseCustomInboundDocument> {
    const { type } = params;
    return this._client.get(path`/api/warehouse/documentdeliveries/custom/inbound-v1/${type}/${id}`, options);
  }

  /**
   * Save custom inbound document
   */
  update(
    pathID: string,
    params: InboundV1UpdateParams,
    options?: RequestOptions,
  ): APIPromise<WarehouseCustomInboundDocument> {
    const { path_type, ...body } = params;
    return this._client.put(
      path`/api/warehouse/documentdeliveries/custom/inbound-v1/${path_type}/${pathID}`,
      { body, ...options },
    );
  }

  /**
   * The document will be locked and bookkept. The inbound deliveries will affect
   * available stock.
   */
  updateRelease(
    id: string,
    params: InboundV1UpdateReleaseParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { type } = params;
    return this._client.put(path`/api/warehouse/documentdeliveries/custom/inbound-v1/${type}/${id}/release`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Voiding a document will undo the possible stock changes that the document had
   * made, note that the document and the transactions created are not deleted. Some
   * limitations apply, see below.
   */
  updateVoid(id: string, params: InboundV1UpdateVoidParams, options?: RequestOptions): APIPromise<void> {
    const { type, force } = params;
    return this._client.put(path`/api/warehouse/documentdeliveries/custom/inbound-v1/${type}/${id}/void`, {
      query: { force },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface WarehouseCustomInboundDocument {
  date: string;

  rows: Array<WarehouseCustomInboundDocument.Row>;

  id?: string;

  currency?: WarehouseCustomInboundDocument.Currency;

  note?: string;

  type?: string;

  voided?: boolean;

  warehouseReady?: boolean;
}

export namespace WarehouseCustomInboundDocument {
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

    stockPointCode?: string;

    stockPointId?: string;
  }

  export interface Currency {
    currency: string;

    rate: number;

    unit?: number;
  }
}

export interface InboundV1RetrieveParams {
  /**
   * Document type.
   */
  type: string;
}

export interface InboundV1UpdateParams {
  /**
   * Path param: min 1 character, max 25 characters, may contain letters A-Z, digits
   * 0-9, underscore (\_), and dash (-), type is case-insensitive
   *
   *  <blockquote><pre>
   *       Type is a custom name/reference of the document that will be used to reference the document type
   *
   *       * If type is not known, it will be registered as belonging to the INBOUND category.
   *
   *       * If type is an existing custom document type of category OUTBOUND an error is thrown.
   *
   *       * If type is invalid an error is thrown.
   *
   *  </pre></blockquote>
   */
  path_type: string;

  /**
   * Body param
   */
  date: string;

  /**
   * Body param
   */
  rows: Array<InboundV1UpdateParams.Row>;

  /**
   * Body param
   */
  body_id?: string;

  /**
   * Body param
   */
  currency?: InboundV1UpdateParams.Currency;

  /**
   * Body param
   */
  note?: string;

  /**
   * Body param
   */
  body_type?: string;

  /**
   * Body param
   */
  voided?: boolean;

  /**
   * Body param
   */
  warehouseReady?: boolean;
}

export namespace InboundV1UpdateParams {
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

    stockPointCode?: string;

    stockPointId?: string;
  }

  export interface Currency {
    currency: string;

    rate: number;

    unit?: number;
  }
}

export interface InboundV1UpdateReleaseParams {
  /**
   * document type
   */
  type: string;
}

export interface InboundV1UpdateVoidParams {
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

export declare namespace InboundV1 {
  export {
    type WarehouseCustomInboundDocument as WarehouseCustomInboundDocument,
    type InboundV1RetrieveParams as InboundV1RetrieveParams,
    type InboundV1UpdateParams as InboundV1UpdateParams,
    type InboundV1UpdateReleaseParams as InboundV1UpdateReleaseParams,
    type InboundV1UpdateVoidParams as InboundV1UpdateVoidParams,
  };
}
