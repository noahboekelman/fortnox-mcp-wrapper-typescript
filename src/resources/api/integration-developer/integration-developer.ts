// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as UsersAPI from './users';
import { UserGetUserInfoParams, UserGetUserInfoResponse, Users } from './users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class IntegrationDeveloper extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * <p>
   *  Prerequisites
   *  The partner has an active developer account and a published integration that is purchased through Fortnox.
   */
  getSalesInfo(
    integrationID: number,
    options?: RequestOptions,
  ): APIPromise<IntegrationDeveloperGetSalesInfoResponse> {
    return this._client.get(path`/api/integration-developer/sales-v1/${integrationID}`, options);
  }

  /**
   * List rating and reviews for integrations that you own
   */
  listRatings(options?: RequestOptions): APIPromise<IntegrationDeveloperListRatingsResponse> {
    return this._client.get('/api/integration-developer/ratings-v1', options);
  }
}

export type IntegrationDeveloperGetSalesInfoResponse =
  Array<IntegrationDeveloperGetSalesInfoResponse.IntegrationDeveloperGetSalesInfoResponseItem>;

export namespace IntegrationDeveloperGetSalesInfoResponse {
  export interface IntegrationDeveloperGetSalesInfoResponseItem {
    amount?: number;

    date?: string;

    orderId?: string;

    tenantId?: string;

    type?: string;
  }
}

export type IntegrationDeveloperListRatingsResponse =
  Array<IntegrationDeveloperListRatingsResponse.IntegrationDeveloperListRatingsResponseItem>;

export namespace IntegrationDeveloperListRatingsResponse {
  export interface IntegrationDeveloperListRatingsResponseItem {
    comment?: string;

    companyEmployeeRange?: string;

    companyName?: string;

    created?: string;

    integrationId?: number;

    isMyRating?: boolean;

    rating?: number;

    ratingId?: number;

    response?: IntegrationDeveloperListRatingsResponseItem.Response;

    updated?: string;
  }

  export namespace IntegrationDeveloperListRatingsResponseItem {
    export interface Response {
      comment?: string;

      created?: string;

      updated?: string;
    }
  }
}

IntegrationDeveloper.Users = Users;

export declare namespace IntegrationDeveloper {
  export {
    type IntegrationDeveloperGetSalesInfoResponse as IntegrationDeveloperGetSalesInfoResponse,
    type IntegrationDeveloperListRatingsResponse as IntegrationDeveloperListRatingsResponse,
  };

  export {
    Users as Users,
    type UserGetUserInfoResponse as UserGetUserInfoResponse,
    type UserGetUserInfoParams as UserGetUserInfoParams,
  };
}
