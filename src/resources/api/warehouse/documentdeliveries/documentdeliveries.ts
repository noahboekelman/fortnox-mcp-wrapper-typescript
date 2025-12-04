// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CustomAPI from './custom/custom';
import { Custom } from './custom/custom';

export class Documentdeliveries extends APIResource {
  custom: CustomAPI.Custom = new CustomAPI.Custom(this._client);
}

Documentdeliveries.Custom = Custom;

export declare namespace Documentdeliveries {
  export { Custom as Custom };
}
