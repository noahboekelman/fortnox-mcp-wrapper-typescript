// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AppsAPI from './apps/apps';
import { Apps } from './apps/apps';

export class IntegrationPartner extends APIResource {
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
}

IntegrationPartner.Apps = Apps;

export declare namespace IntegrationPartner {
  export { Apps as Apps };
}
