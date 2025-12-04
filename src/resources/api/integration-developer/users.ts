// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Users extends APIResource {
  /**
   * Fetch user information for a single published integration and tenant
   */
  getUserInfo(
    tenantID: number,
    params: UserGetUserInfoParams,
    options?: RequestOptions,
  ): APIPromise<UserGetUserInfoResponse> {
    const { integrationId } = params;
    return this._client.get(
      path`/api/integration-developer/users/users-v1/${integrationId}/${tenantID}`,
      options,
    );
  }
}

export type UserGetUserInfoResponse = Array<UserGetUserInfoResponse.UserGetUserInfoResponseItem>;

export namespace UserGetUserInfoResponse {
  export interface UserGetUserInfoResponseItem {
    activationTime?: string;

    email?: string;

    externalSourceId?: string;

    name?: string;

    userType?: string;
  }
}

export interface UserGetUserInfoParams {
  integrationId: number;
}

export declare namespace Users {
  export {
    type UserGetUserInfoResponse as UserGetUserInfoResponse,
    type UserGetUserInfoParams as UserGetUserInfoParams,
  };
}
