// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class SalesV1 extends APIResource {
  /**
   * <h3>Prerequisites</h3>
   *  The partner has an active developer account and a published integration that is purchased through Fortnox.
   *
   * @deprecated
   */
  getSalesInfo(appID: string, options?: RequestOptions): APIPromise<IntegrationPartnerAppSalesResponse> {
    return this._client.get(path`/api/integration-partner/apps/sales-v1/${appID}`, options);
  }

  /**
   * <h3>Prerequisites</h3>
   *  The partner has an active developer account and a published integration that is purchased through Fortnox.
   *
   * @deprecated
   */
  getSalesInfoForTenant(
    tenantID: number,
    params: SalesV1GetSalesInfoForTenantParams,
    options?: RequestOptions,
  ): APIPromise<IntegrationPartnerAppSalesResponse> {
    const { appId } = params;
    return this._client.get(path`/api/integration-partner/apps/sales-v1/${appId}/${tenantID}`, options);
  }
}

export interface IntegrationPartnerAppSalesResponse {
  appId?: string;

  tenants?: Array<IntegrationPartnerAppSalesResponse.Tenant>;
}

export namespace IntegrationPartnerAppSalesResponse {
  export interface Tenant {
    purchases?: Array<Tenant.Purchase>;

    tenantId?: string;

    terminations?: Array<Tenant.Termination>;

    users?: Array<Tenant.User>;
  }

  export namespace Tenant {
    export interface Purchase {
      amount?: number;

      identifier?: string;

      purchaseTime?: unknown;
    }

    export interface Termination {
      amount?: number;

      identifier?: string;

      onCancellationTime?: unknown;
    }

    export interface User {
      activationTime?: unknown;

      email?: string;

      externalSourceId?: string;

      name?: string;

      userType?: string;
    }
  }
}

export interface SalesV1GetSalesInfoForTenantParams {
  /**
   * clientId of the integration to look up sales information for
   */
  appId: string;
}

export declare namespace SalesV1 {
  export {
    type IntegrationPartnerAppSalesResponse as IntegrationPartnerAppSalesResponse,
    type SalesV1GetSalesInfoForTenantParams as SalesV1GetSalesInfoForTenantParams,
  };
}
