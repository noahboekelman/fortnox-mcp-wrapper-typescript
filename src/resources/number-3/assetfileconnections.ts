// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Assetfileconnections extends APIResource {
  /**
   * Create an asset file connection
   */
  create(
    body: AssetfileconnectionCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxAssetFileConnection> {
    return this._client.post('/3/assetfileconnections', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * The asset register can return a list of assets or a single asset. By specifying
   * a FileId in the URL, a single asset will be returned. Not specifying a FileId
   * will return a list of records.
   */
  list(options?: RequestOptions): APIPromise<AssetfileconnectionListResponse> {
    return this._client.get('/3/assetfileconnections', options);
  }

  /**
   * Remove an asset file connection
   */
  delete(fileID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/assetfileconnections/${fileID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FortnoxAssetFileConnection {
  '@url'?: string;

  AssetId?: string;

  FileId?: string;

  Name?: string;
}

export interface FortnoxMetaInformation {
  '@CurrentPage'?: number;

  '@TotalPages'?: number;

  '@TotalResources'?: number;
}

export interface AssetfileconnectionListResponse {
  AssetFileConnections?: Array<FortnoxAssetFileConnection>;

  MetaInformation?: FortnoxMetaInformation;
}

export interface AssetfileconnectionCreateParams {
  AssetId?: string;

  FileId?: string;
}

export declare namespace Assetfileconnections {
  export {
    type FortnoxAssetFileConnection as FortnoxAssetFileConnection,
    type FortnoxMetaInformation as FortnoxMetaInformation,
    type AssetfileconnectionListResponse as AssetfileconnectionListResponse,
    type AssetfileconnectionCreateParams as AssetfileconnectionCreateParams,
  };
}
