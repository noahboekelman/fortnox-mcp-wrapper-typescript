// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as IncominggoodsV1API from './incominggoods-v1';
import {
  IncominggoodsV1,
  IncominggoodsV1IncominggoodsV1Params,
  IncominggoodsV1RetrieveIncominggoodsV1Params,
  IncominggoodsV1RetrieveIncominggoodsV1Response,
  IncominggoodsV1RetrieveParams,
  IncominggoodsV1UpdateCompletedParams,
  IncominggoodsV1UpdateParams,
  WarehouseIncomingGoods,
} from './incominggoods-v1';
import * as ProductionordersV1API from './productionorders-v1';
import {
  ProductionordersV1,
  ProductionordersV1ProductionordersV1Params,
  ProductionordersV1RetrieveProductionordersV1Params,
  ProductionordersV1UpdateParams,
  WarehousePackageItem,
  WarehouseProductionOrder,
} from './productionorders-v1';
import * as StatusV1API from './status-v1';
import {
  StatusV1,
  StatusV1RetrieveStockbalanceParams,
  StatusV1RetrieveStockbalanceResponse,
} from './status-v1';
import * as StockpointsV1API from './stockpoints-v1';
import {
  StockpointsV1,
  StockpointsV1RetrieveMultiParams,
  StockpointsV1RetrieveStocklocationsParams,
  StockpointsV1RetrieveStockpointsV1Params,
  StockpointsV1StockpointsV1Params,
  StockpointsV1UpdateParams,
  WarehouseStockLocation,
  WarehouseStockPoint,
} from './stockpoints-v1';
import * as StocktransferV1API from './stocktransfer-v1';
import {
  StocktransferV1,
  StocktransferV1StocktransferV1Params,
  StocktransferV1UpdateParams,
  StocktransferV1UpdateVoidParams,
  WarehouseStockTransferDocument,
} from './stocktransfer-v1';
import * as DeliveriesV1API from './deliveries-v1/deliveries-v1';
import {
  DeliveriesV1,
  DeliveriesV1RetrieveDeliveriesV1Params,
  DeliveriesV1RetrieveDeliveriesV1Response,
} from './deliveries-v1/deliveries-v1';
import * as DocumentdeliveriesAPI from './documentdeliveries/documentdeliveries';
import { Documentdeliveries } from './documentdeliveries/documentdeliveries';
import * as PurchaseordersV1API from './purchaseorders-v1/purchaseorders-v1';
import {
  PurchaseordersV1,
  PurchaseordersV1PurchaseordersV1Params,
  PurchaseordersV1RetrieveCsvParams,
  PurchaseordersV1RetrieveCsvResponse,
  PurchaseordersV1RetrieveParams,
  PurchaseordersV1RetrievePurchaseordersV1Params,
  PurchaseordersV1SendParams,
  PurchaseordersV1SendpurchaseordersParams,
  PurchaseordersV1UpdateDropshipcompleteResponse,
  PurchaseordersV1UpdateParams,
  PurchaseordersV1UpdatePartialParams,
  WarehouseDocumentReference,
  WarehousePartialPurchaseOrder,
  WarehousePurchaseOrder,
  WarehousePurchaseOrderRowNote,
} from './purchaseorders-v1/purchaseorders-v1';
import * as StocktakingV1API from './stocktaking-v1/stocktaking-v1';
import {
  StocktakingV1,
  StocktakingV1AddrowsParams,
  StocktakingV1AddrowsResponse,
  StocktakingV1RetrieveCandidatesParams,
  StocktakingV1RetrieveStocktakingV1Params,
  StocktakingV1StocktakingV1Params,
  StocktakingV1UpdateParams,
  WarehouseStockTaking,
  WarehouseStockTakingRow,
  WarehouseStockTakingSortParams,
} from './stocktaking-v1/stocktaking-v1';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Warehouse extends APIResource {
  deliveriesV1: DeliveriesV1API.DeliveriesV1 = new DeliveriesV1API.DeliveriesV1(this._client);
  documentdeliveries: DocumentdeliveriesAPI.Documentdeliveries = new DocumentdeliveriesAPI.Documentdeliveries(
    this._client,
  );
  incominggoodsV1: IncominggoodsV1API.IncominggoodsV1 = new IncominggoodsV1API.IncominggoodsV1(this._client);
  productionordersV1: ProductionordersV1API.ProductionordersV1 = new ProductionordersV1API.ProductionordersV1(
    this._client,
  );
  purchaseordersV1: PurchaseordersV1API.PurchaseordersV1 = new PurchaseordersV1API.PurchaseordersV1(
    this._client,
  );
  statusV1: StatusV1API.StatusV1 = new StatusV1API.StatusV1(this._client);
  stockpointsV1: StockpointsV1API.StockpointsV1 = new StockpointsV1API.StockpointsV1(this._client);
  stocktakingV1: StocktakingV1API.StocktakingV1 = new StocktakingV1API.StocktakingV1(this._client);
  stocktransferV1: StocktransferV1API.StocktransferV1 = new StocktransferV1API.StocktransferV1(this._client);

  /**
   * <p>
   *  Check if current tenant has activated Fortnox Warehouse.
   */
  retrieveTenantsV4(options?: RequestOptions): APIPromise<WarehouseRetrieveTenantsV4Response> {
    return this._client.get('/api/warehouse/tenants-v4', options);
  }
}

export interface WarehouseRetrieveTenantsV4Response {
  activated?: boolean;

  tenantId?: number;
}

Warehouse.DeliveriesV1 = DeliveriesV1;
Warehouse.Documentdeliveries = Documentdeliveries;
Warehouse.IncominggoodsV1 = IncominggoodsV1;
Warehouse.ProductionordersV1 = ProductionordersV1;
Warehouse.PurchaseordersV1 = PurchaseordersV1;
Warehouse.StatusV1 = StatusV1;
Warehouse.StockpointsV1 = StockpointsV1;
Warehouse.StocktakingV1 = StocktakingV1;
Warehouse.StocktransferV1 = StocktransferV1;

export declare namespace Warehouse {
  export { type WarehouseRetrieveTenantsV4Response as WarehouseRetrieveTenantsV4Response };

  export {
    DeliveriesV1 as DeliveriesV1,
    type DeliveriesV1RetrieveDeliveriesV1Response as DeliveriesV1RetrieveDeliveriesV1Response,
    type DeliveriesV1RetrieveDeliveriesV1Params as DeliveriesV1RetrieveDeliveriesV1Params,
  };

  export { Documentdeliveries as Documentdeliveries };

  export {
    IncominggoodsV1 as IncominggoodsV1,
    type WarehouseIncomingGoods as WarehouseIncomingGoods,
    type IncominggoodsV1RetrieveIncominggoodsV1Response as IncominggoodsV1RetrieveIncominggoodsV1Response,
    type IncominggoodsV1RetrieveParams as IncominggoodsV1RetrieveParams,
    type IncominggoodsV1UpdateParams as IncominggoodsV1UpdateParams,
    type IncominggoodsV1IncominggoodsV1Params as IncominggoodsV1IncominggoodsV1Params,
    type IncominggoodsV1RetrieveIncominggoodsV1Params as IncominggoodsV1RetrieveIncominggoodsV1Params,
    type IncominggoodsV1UpdateCompletedParams as IncominggoodsV1UpdateCompletedParams,
  };

  export {
    ProductionordersV1 as ProductionordersV1,
    type WarehousePackageItem as WarehousePackageItem,
    type WarehouseProductionOrder as WarehouseProductionOrder,
    type ProductionordersV1UpdateParams as ProductionordersV1UpdateParams,
    type ProductionordersV1ProductionordersV1Params as ProductionordersV1ProductionordersV1Params,
    type ProductionordersV1RetrieveProductionordersV1Params as ProductionordersV1RetrieveProductionordersV1Params,
  };

  export {
    PurchaseordersV1 as PurchaseordersV1,
    type WarehouseDocumentReference as WarehouseDocumentReference,
    type WarehousePartialPurchaseOrder as WarehousePartialPurchaseOrder,
    type WarehousePurchaseOrder as WarehousePurchaseOrder,
    type WarehousePurchaseOrderRowNote as WarehousePurchaseOrderRowNote,
    type PurchaseordersV1RetrieveCsvResponse as PurchaseordersV1RetrieveCsvResponse,
    type PurchaseordersV1UpdateDropshipcompleteResponse as PurchaseordersV1UpdateDropshipcompleteResponse,
    type PurchaseordersV1RetrieveParams as PurchaseordersV1RetrieveParams,
    type PurchaseordersV1UpdateParams as PurchaseordersV1UpdateParams,
    type PurchaseordersV1PurchaseordersV1Params as PurchaseordersV1PurchaseordersV1Params,
    type PurchaseordersV1RetrieveCsvParams as PurchaseordersV1RetrieveCsvParams,
    type PurchaseordersV1RetrievePurchaseordersV1Params as PurchaseordersV1RetrievePurchaseordersV1Params,
    type PurchaseordersV1SendParams as PurchaseordersV1SendParams,
    type PurchaseordersV1SendpurchaseordersParams as PurchaseordersV1SendpurchaseordersParams,
    type PurchaseordersV1UpdatePartialParams as PurchaseordersV1UpdatePartialParams,
  };

  export {
    StatusV1 as StatusV1,
    type StatusV1RetrieveStockbalanceResponse as StatusV1RetrieveStockbalanceResponse,
    type StatusV1RetrieveStockbalanceParams as StatusV1RetrieveStockbalanceParams,
  };

  export {
    StockpointsV1 as StockpointsV1,
    type WarehouseStockLocation as WarehouseStockLocation,
    type WarehouseStockPoint as WarehouseStockPoint,
    type StockpointsV1UpdateParams as StockpointsV1UpdateParams,
    type StockpointsV1RetrieveMultiParams as StockpointsV1RetrieveMultiParams,
    type StockpointsV1RetrieveStocklocationsParams as StockpointsV1RetrieveStocklocationsParams,
    type StockpointsV1RetrieveStockpointsV1Params as StockpointsV1RetrieveStockpointsV1Params,
    type StockpointsV1StockpointsV1Params as StockpointsV1StockpointsV1Params,
  };

  export {
    StocktakingV1 as StocktakingV1,
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
    StocktransferV1 as StocktransferV1,
    type WarehouseStockTransferDocument as WarehouseStockTransferDocument,
    type StocktransferV1UpdateParams as StocktransferV1UpdateParams,
    type StocktransferV1StocktransferV1Params as StocktransferV1StocktransferV1Params,
    type StocktransferV1UpdateVoidParams as StocktransferV1UpdateVoidParams,
  };
}
