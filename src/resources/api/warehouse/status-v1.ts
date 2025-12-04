// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class StatusV1 extends APIResource {
  /**
   * <p>
   *  Get stock balance for each stockpoint.
   *  <p>
   *  Returns a list of <code>itemId</code>, <code>stockPointCode</code>,
   *  <code>availableStock</code>, <code>inStock</code>.
   *  <p>
   *  (The difference between <code>availableStock</code> and <code>inStock</code>
   *  is the reserved amount.)
   */
  retrieveStockbalance(
    query: StatusV1RetrieveStockbalanceParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StatusV1RetrieveStockbalanceResponse> {
    return this._client.get('/api/warehouse/status-v1/stockbalance', { query, ...options });
  }
}

export interface StatusV1RetrieveStockbalanceResponse {
  availableStock?: number;

  inStock?: number;

  itemId?: string;

  stockPointCode?: string;
}

export interface StatusV1RetrieveStockbalanceParams {
  /**
   * Optional filter on itemIds (comma-separated)
   */
  itemIds?: Array<string>;

  /**
   * Optional filter on stock point codes (comma-separated).
   */
  stockPointCodes?: Array<string>;
}

export declare namespace StatusV1 {
  export {
    type StatusV1RetrieveStockbalanceResponse as StatusV1RetrieveStockbalanceResponse,
    type StatusV1RetrieveStockbalanceParams as StatusV1RetrieveStockbalanceParams,
  };
}
