// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Voucherfileconnections extends APIResource {
  /**
   * Create a voucher file connection
   */
  create(
    body: VoucherfileconnectionCreateParams,
    options?: RequestOptions,
  ): APIPromise<FortnoxVoucherFileConnectionWrap> {
    return this._client.post('/3/voucherfileconnections', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single voucher file connection
   */
  retrieve(fileID: string, options?: RequestOptions): APIPromise<FortnoxVoucherFileConnectionWrap> {
    return this._client.get(path`/3/voucherfileconnections/${fileID}`, options);
  }

  /**
   * The voucher file connections register can return a list of records or a single
   * record. By specifying a FileId in the URL, a single record will be returned. Not
   * specifying a FileId will return a list of records.
   */
  list(options?: RequestOptions): APIPromise<VoucherfileconnectionListResponse> {
    return this._client.get('/3/voucherfileconnections', options);
  }

  /**
   * Remove a voucher file connection
   */
  delete(fileID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/voucherfileconnections/${fileID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FortnoxVoucherFileConnection {
  FileId: string;

  VoucherNumber: string;

  VoucherSeries: string;

  '@url'?: string;

  VoucherDescription?: string;

  VoucherYear?: number;
}

export interface FortnoxVoucherFileConnectionWrap {
  VoucherFileConnection: FortnoxVoucherFileConnection;
}

export interface VoucherfileconnectionListResponse {
  VoucherFileConnections?: Array<FortnoxVoucherFileConnection>;
}

export interface VoucherfileconnectionCreateParams {
  VoucherFileConnection: FortnoxVoucherFileConnection;
}

export declare namespace Voucherfileconnections {
  export {
    type FortnoxVoucherFileConnection as FortnoxVoucherFileConnection,
    type FortnoxVoucherFileConnectionWrap as FortnoxVoucherFileConnectionWrap,
    type VoucherfileconnectionListResponse as VoucherfileconnectionListResponse,
    type VoucherfileconnectionCreateParams as VoucherfileconnectionCreateParams,
  };
}
