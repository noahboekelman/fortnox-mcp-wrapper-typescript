// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TimeAPI from './time';
import {
  Time,
  TimeGetArticlesParams,
  TimeGetArticlesResponse,
  TimeGetRegistrationsParams,
  TimeGetRegistrationsResponse,
  TimeReportingArticleRegistration,
  TimeReportingTrCostCenter,
  TimeReportingTrCustomer,
  TimeReportingTrItem,
  TimeReportingTrProject,
} from './time';
import * as FileattachmentsAPI from './fileattachments/fileattachments';
import { Fileattachments } from './fileattachments/fileattachments';
import * as IntegrationDeveloperAPI from './integration-developer/integration-developer';
import {
  IntegrationDeveloper,
  IntegrationDeveloperGetSalesInfoResponse,
  IntegrationDeveloperListRatingsResponse,
} from './integration-developer/integration-developer';
import * as IntegrationPartnerAPI from './integration-partner/integration-partner';
import { IntegrationPartner } from './integration-partner/integration-partner';
import * as WarehouseAPI from './warehouse/warehouse';
import { Warehouse, WarehouseRetrieveTenantsV4Response } from './warehouse/warehouse';

export class API extends APIResource {
  fileattachments: FileattachmentsAPI.Fileattachments = new FileattachmentsAPI.Fileattachments(this._client);
  integrationDeveloper: IntegrationDeveloperAPI.IntegrationDeveloper =
    new IntegrationDeveloperAPI.IntegrationDeveloper(this._client);
  integrationPartner: IntegrationPartnerAPI.IntegrationPartner = new IntegrationPartnerAPI.IntegrationPartner(
    this._client,
  );
  time: TimeAPI.Time = new TimeAPI.Time(this._client);
  warehouse: WarehouseAPI.Warehouse = new WarehouseAPI.Warehouse(this._client);
}

API.Fileattachments = Fileattachments;
API.IntegrationDeveloper = IntegrationDeveloper;
API.IntegrationPartner = IntegrationPartner;
API.Time = Time;
API.Warehouse = Warehouse;

export declare namespace API {
  export { Fileattachments as Fileattachments };

  export {
    IntegrationDeveloper as IntegrationDeveloper,
    type IntegrationDeveloperGetSalesInfoResponse as IntegrationDeveloperGetSalesInfoResponse,
    type IntegrationDeveloperListRatingsResponse as IntegrationDeveloperListRatingsResponse,
  };

  export { IntegrationPartner as IntegrationPartner };

  export {
    Time as Time,
    type TimeReportingArticleRegistration as TimeReportingArticleRegistration,
    type TimeReportingTrCostCenter as TimeReportingTrCostCenter,
    type TimeReportingTrCustomer as TimeReportingTrCustomer,
    type TimeReportingTrItem as TimeReportingTrItem,
    type TimeReportingTrProject as TimeReportingTrProject,
    type TimeGetArticlesResponse as TimeGetArticlesResponse,
    type TimeGetRegistrationsResponse as TimeGetRegistrationsResponse,
    type TimeGetArticlesParams as TimeGetArticlesParams,
    type TimeGetRegistrationsParams as TimeGetRegistrationsParams,
  };

  export {
    Warehouse as Warehouse,
    type WarehouseRetrieveTenantsV4Response as WarehouseRetrieveTenantsV4Response,
  };
}
