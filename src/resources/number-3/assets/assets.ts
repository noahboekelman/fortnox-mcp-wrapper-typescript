// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TypesAPI from './types';
import {
  FortnoxAssetType,
  FortnoxAssetTypeWrapSingle,
  FortnoxUpdateAsset,
  TypeCreateParams,
  TypeListResponse,
  TypeUpdateParams,
  Types,
} from './types';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Assets extends APIResource {
  types: TypesAPI.Types = new TypesAPI.Types(this._client);

  /**
   * The created asset will be returned if everything succeeded, if there was any
   * problems an error will be returned.
   */
  create(
    body: AssetCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxAssetSingle> {
    return this._client.post('/3/assets', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single asset
   */
  retrieve(givenNumber: string, options?: RequestOptions): APIPromise<FortnoxAssetSingle> {
    return this._client.get(path`/3/assets/${givenNumber}`, options);
  }

  /**
   * The updated asset will be returned if everything succeeded, if there were any
   * problems an error will be returned.
   */
  update(
    givenNumber: string,
    body: AssetUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxAssetSingle> {
    return this._client.put(path`/3/assets/${givenNumber}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a list of assets
   */
  list(options?: RequestOptions): APIPromise<FortnoxListAssetWrap> {
    return this._client.get('/3/assets', options);
  }

  /**
   * By specifying a {GivenNumber} in the URL a single &quot;Not active&quot; asset
   * or asset with a type &quot;Not depreciable&quot; can be deleted. By specifying a
   * {GivenNumber} in the URL a single &quot;Active&quot; or &quot;Fully
   * depreciated&quot; assets can be voided and in this case in request body voiddate
   * should be provided, otherwise it will use todays date.
   */
  delete(
    givenNumber: string,
    body: AssetDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.delete(path`/3/assets/${givenNumber}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * The updated asset will be returned if everything succeeded, if there was any
   * problems an error will be returned.
   */
  changeOb(
    givenNumber: string,
    body: AssetChangeObParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxAssetSingle> {
    return this._client.put(path`/3/assets/changeob/${givenNumber}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * The created vouchers list will be returned if everything succeeded, if there was
   * any problems an error will be returned.
   */
  depreciate(
    body: AssetDepreciateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AssetDepreciateResponse> {
    return this._client.post('/3/assets/depreciate', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a list of assets to depreciate.
   */
  listDepreciations(toDate: string, options?: RequestOptions): APIPromise<FortnoxListAssetWrap> {
    return this._client.get(path`/3/assets/depreciations/${toDate}`, options);
  }

  /**
   * The updated asset will be returned if everything succeeded, if there was any
   * problems an error will be returned.
   */
  scrap(
    givenNumber: string,
    body: AssetScrapParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxAssetSingle> {
    return this._client.put(path`/3/assets/scrap/${givenNumber}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Partial sell or full sell of an asset.
   */
  sell(
    givenNumber: string,
    body: AssetSellParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxAssetSingle> {
    return this._client.put(path`/3/assets/sell/${givenNumber}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * The updated asset will be returned if everything succeeded, if there was any
   * problems an error will be returned.
   */
  writeDown(
    givenNumber: string,
    body: AssetWriteDownParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxAssetSingle> {
    return this._client.put(path`/3/assets/writedown/${givenNumber}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * The updated asset will be returned if everything succeeded, if there was any
   * problems an error will be returned.
   */
  writeUp(
    givenNumber: string,
    body: AssetWriteUpParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxAssetSingle> {
    return this._client.put(path`/3/assets/writeup/${givenNumber}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }
}

export interface FortnoxAssetSingle {
  Assets?: FortnoxAssetSingle.Assets;
}

export namespace FortnoxAssetSingle {
  export interface Assets {
    '@url'?: string;

    AcquisitionDate?: string;

    AcquisitionStart?: string;

    AcquisitionValue?: number;

    Brand?: string;

    CostCenter?: string;

    Department?: string;

    DepreciatedTo?: string;

    DepreciateToResidualValue?: number;

    DepreciationFinal?: string;

    DepreciationMethod?: number;

    Description?: string;

    Group?: string;

    History?: Array<Assets.History>;

    Id?: number;

    InsuredNumber?: string;

    InsuredWith?: string;

    ManualOb?: number;

    Notes?: string;

    Number?: string;

    Placement?: string;

    Project?: string;

    Reference?: string;

    Room?: string;

    Status?: string;

    StatusId?: string;

    Type?: string;

    TypeId?: number;
  }

  export namespace Assets {
    export interface History {
      Amount?: string;

      Date?: string;

      EventId?: number;

      Id?: number;

      Notes?: string;

      SupplierInvoice?: number;

      UserId?: number;

      UserName?: string;

      VoucherNumber?: number;

      VoucherSeries?: string;

      VoucherYear?: number;
    }
  }
}

export interface FortnoxCreateAsset {
  AccountAssetId?: number;

  AccountDepreciationId?: number;

  AccountValueLossId?: number;

  Description?: string;

  Notes?: string;

  Number?: string;

  Type?: number;
}

export interface FortnoxCreateAssetWrap {
  AssetType?: FortnoxCreateAsset;
}

export interface FortnoxListAssetWrap {
  Assets?: Array<FortnoxListAssetWrap.Asset>;
}

export namespace FortnoxListAssetWrap {
  export interface Asset {
    '@url'?: string;

    AcquisitionDate?: string;

    AcquisitionValue?: number;

    DepreciatedTo?: string;

    DepreciationFinal?: string;

    Description?: string;

    Id?: number;

    Number?: string;

    Status?: string;

    StatusId?: string;

    Type?: string;

    TypeId?: number;
  }
}

export interface AssetDepreciateResponse {
  AssetsDepreciation?: Array<AssetDepreciateResponse.AssetsDepreciation>;
}

export namespace AssetDepreciateResponse {
  export interface AssetsDepreciation {
    '@url'?: string;

    FinancialYear?: number;

    VoucherNumber?: number;

    VoucherSeries?: string;
  }
}

export interface AssetCreateParams {
  AssetType?: FortnoxCreateAsset;
}

export interface AssetUpdateParams {
  Asset?: TypesAPI.FortnoxUpdateAsset;
}

export interface AssetDeleteParams {
  Asset?: AssetDeleteParams.Asset;
}

export namespace AssetDeleteParams {
  export interface Asset {
    Date?: string;
  }
}

export interface AssetChangeObParams {
  Amount?: number;

  Comment?: string;
}

export interface AssetDepreciateParams {
  Asset?: AssetDepreciateParams.Asset;
}

export namespace AssetDepreciateParams {
  export interface Asset {
    AssetIds?: Array<number>;

    DepreciateUntil?: string;
  }
}

export interface AssetScrapParams {
  Asset?: AssetScrapParams.Asset;
}

export namespace AssetScrapParams {
  export interface Asset {
    Comment?: string;

    Date?: string;

    Percentage?: number;
  }
}

export interface AssetSellParams {
  Asset?: AssetSellParams.Asset;
}

export namespace AssetSellParams {
  export interface Asset {
    Comment?: string;

    Date?: string;

    Percentage?: number;

    Price?: number;
  }
}

export interface AssetWriteDownParams {
  Asset?: AssetWriteDownParams.Asset;
}

export namespace AssetWriteDownParams {
  export interface Asset {
    Amount?: number;

    Comment?: string;

    Date?: string;
  }
}

export interface AssetWriteUpParams {
  Asset?: AssetWriteUpParams.Asset;
}

export namespace AssetWriteUpParams {
  export interface Asset {
    Amount?: number;

    Comment?: string;

    Date?: string;
  }
}

Assets.Types = Types;

export declare namespace Assets {
  export {
    type FortnoxAssetSingle as FortnoxAssetSingle,
    type FortnoxCreateAsset as FortnoxCreateAsset,
    type FortnoxCreateAssetWrap as FortnoxCreateAssetWrap,
    type FortnoxListAssetWrap as FortnoxListAssetWrap,
    type AssetDepreciateResponse as AssetDepreciateResponse,
    type AssetCreateParams as AssetCreateParams,
    type AssetUpdateParams as AssetUpdateParams,
    type AssetDeleteParams as AssetDeleteParams,
    type AssetChangeObParams as AssetChangeObParams,
    type AssetDepreciateParams as AssetDepreciateParams,
    type AssetScrapParams as AssetScrapParams,
    type AssetSellParams as AssetSellParams,
    type AssetWriteDownParams as AssetWriteDownParams,
    type AssetWriteUpParams as AssetWriteUpParams,
  };

  export {
    Types as Types,
    type FortnoxAssetType as FortnoxAssetType,
    type FortnoxAssetTypeWrapSingle as FortnoxAssetTypeWrapSingle,
    type FortnoxUpdateAsset as FortnoxUpdateAsset,
    type TypeListResponse as TypeListResponse,
    type TypeCreateParams as TypeCreateParams,
    type TypeUpdateParams as TypeUpdateParams,
  };
}
