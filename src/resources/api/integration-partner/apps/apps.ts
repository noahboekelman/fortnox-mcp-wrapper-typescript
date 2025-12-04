// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SalesV1API from './sales-v1';
import { IntegrationPartnerAppSalesResponse, SalesV1, SalesV1GetSalesInfoForTenantParams } from './sales-v1';

export class Apps extends APIResource {
  salesV1: SalesV1API.SalesV1 = new SalesV1API.SalesV1(this._client);
}

Apps.SalesV1 = SalesV1;

export declare namespace Apps {
  export {
    SalesV1 as SalesV1,
    type IntegrationPartnerAppSalesResponse as IntegrationPartnerAppSalesResponse,
    type SalesV1GetSalesInfoForTenantParams as SalesV1GetSalesInfoForTenantParams,
  };
}
