// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssetfileconnectionsAPI from '../assetfileconnections';
import * as AssetsAPI from './assets';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Types extends APIResource {
  /**
   * Create an asset type
   */
  create(
    id: number,
    body: TypeCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxAssetTypeWrapSingle> {
    return this._client.post(path`/3/assets/types/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve an asset type
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<FortnoxAssetTypeWrapSingle> {
    return this._client.get(path`/3/assets/types/${id}`, options);
  }

  /**
   * Update an asset type
   */
  update(
    id: number,
    body: TypeUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxAssetTypeWrapSingle> {
    return this._client.put(path`/3/assets/types/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a list of asset types
   */
  list(options?: RequestOptions): APIPromise<TypeListResponse> {
    return this._client.get('/3/assets/types', options);
  }

  /**
   * Delete an asset type
   */
  delete(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/assets/types/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FortnoxAssetType {
  '@url'?: string;

  AccountAsset?: number;

  AccountAssetId?: number;

  AccountDepreciation?: number;

  AccountDepreciationId?: number;

  AccountRevaluation?: number;

  AccountRevaluationId?: number;

  AccountSaleLoss?: number;

  AccountSaleLossId?: number;

  AccountSaleWin?: number;

  AccountSaleWinId?: number;

  AccountValueLoss?: number;

  AccountValueLossId?: number;

  AccountWriteDown?: number;

  AccountWriteDownAck?: number;

  AccountWriteDownAckId?: number;

  AccountWriteDownId?: number;

  Description?: string;

  Id?: number;

  InUse?: boolean;

  Notes?: string;

  Number?: string;

  Type?: number;
}

export interface FortnoxAssetTypeWrapSingle {
  Type?: FortnoxAssetType;
}

export interface FortnoxUpdateAsset {
  Description?: string;

  Notes?: string;
}

export interface TypeListResponse {
  MetaInformation?: AssetfileconnectionsAPI.FortnoxMetaInformation;

  Types?: Array<FortnoxAssetType>;
}

export interface TypeCreateParams {
  AssetType?: AssetsAPI.FortnoxCreateAsset;
}

export interface TypeUpdateParams {
  AssetType?: FortnoxUpdateAsset;
}

export declare namespace Types {
  export {
    type FortnoxAssetType as FortnoxAssetType,
    type FortnoxAssetTypeWrapSingle as FortnoxAssetTypeWrapSingle,
    type FortnoxUpdateAsset as FortnoxUpdateAsset,
    type TypeListResponse as TypeListResponse,
    type TypeCreateParams as TypeCreateParams,
    type TypeUpdateParams as TypeUpdateParams,
  };
}
