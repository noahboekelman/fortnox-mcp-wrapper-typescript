// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as InbounddeliveriesAPI from './inbounddeliveries';
import {
  Inbounddeliveries,
  InbounddeliveryCreateParams,
  InbounddeliveryUpdateParams,
  InbounddeliveryUpdateVoidParams,
  WarehouseManualInboundDocument,
} from './inbounddeliveries';
import * as OutbounddeliveriesAPI from './outbounddeliveries';
import {
  Outbounddeliveries,
  OutbounddeliveryCreateParams,
  OutbounddeliveryUpdateParams,
  OutbounddeliveryUpdateVoidParams,
  WarehouseManualOutboundDocument,
} from './outbounddeliveries';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class DeliveriesV1 extends APIResource {
  inbounddeliveries: InbounddeliveriesAPI.Inbounddeliveries = new InbounddeliveriesAPI.Inbounddeliveries(
    this._client,
  );
  outbounddeliveries: OutbounddeliveriesAPI.Outbounddeliveries = new OutbounddeliveriesAPI.Outbounddeliveries(
    this._client,
  );

  /**
   * List manual documents
   */
  retrieveDeliveriesV1(
    query: DeliveriesV1RetrieveDeliveriesV1Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeliveriesV1RetrieveDeliveriesV1Response> {
    return this._client.get('/api/warehouse/deliveries-v1', { query, ...options });
  }
}

export interface DeliveriesV1RetrieveDeliveriesV1Response {
  date?: string;

  deliveryId?: number;

  entityId?: string;

  note?: string;

  released?: boolean;

  type?: 'Inbound' | 'Outbound' | 'StockTransfer';

  voided?: boolean;
}

export interface DeliveriesV1RetrieveDeliveriesV1Params {
  /**
   * Include only documents containing the given item.
   */
  itemId?: string;

  /**
   * Include only documents with given state.
   */
  state?: 'all' | 'unreleased' | 'released' | 'voided';

  /**
   * Include only documents with given type.
   */
  type?: 'all' | 'inbound' | 'outbound' | 'stocktransfer';
}

DeliveriesV1.Inbounddeliveries = Inbounddeliveries;
DeliveriesV1.Outbounddeliveries = Outbounddeliveries;

export declare namespace DeliveriesV1 {
  export {
    type DeliveriesV1RetrieveDeliveriesV1Response as DeliveriesV1RetrieveDeliveriesV1Response,
    type DeliveriesV1RetrieveDeliveriesV1Params as DeliveriesV1RetrieveDeliveriesV1Params,
  };

  export {
    Inbounddeliveries as Inbounddeliveries,
    type WarehouseManualInboundDocument as WarehouseManualInboundDocument,
    type InbounddeliveryCreateParams as InbounddeliveryCreateParams,
    type InbounddeliveryUpdateParams as InbounddeliveryUpdateParams,
    type InbounddeliveryUpdateVoidParams as InbounddeliveryUpdateVoidParams,
  };

  export {
    Outbounddeliveries as Outbounddeliveries,
    type WarehouseManualOutboundDocument as WarehouseManualOutboundDocument,
    type OutbounddeliveryCreateParams as OutbounddeliveryCreateParams,
    type OutbounddeliveryUpdateParams as OutbounddeliveryUpdateParams,
    type OutbounddeliveryUpdateVoidParams as OutbounddeliveryUpdateVoidParams,
  };
}
