// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VouchersAPI from './vouchers';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Sublist extends APIResource {
  /**
   * Retrieve a list of vouchers for a specific series
   */
  retrieve(
    voucherSeries: string,
    query: SublistRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VouchersAPI.FortnoxVoucherListItemList> {
    return this._client.get(path`/3/vouchers/sublist/${voucherSeries}`, { query, ...options });
  }

  /**
   * Retrieve all vouchers for the current financial year
   */
  list(options?: RequestOptions): APIPromise<VouchersAPI.FortnoxVoucherListItemList> {
    return this._client.get('/3/vouchers/sublist', options);
  }
}

export interface SublistRetrieveParams {
  /**
   * filter on financial year
   */
  financialyear?: number;
}

export declare namespace Sublist {
  export { type SublistRetrieveParams as SublistRetrieveParams };
}
