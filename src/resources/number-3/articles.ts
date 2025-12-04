// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Articles extends APIResource {
  /**
   * The created article will be returned if everything succeeded, if there was any
   * problems an error will be returned.
   */
  create(
    body: ArticleCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxArticleWrap> {
    return this._client.post('/3/articles', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves the details of an article. You need to supply the unique article
   * number that was returned when the article was created or retrieved from the list
   * of articles.
   */
  retrieve(articleNumber: number, options?: RequestOptions): APIPromise<FortnoxArticleWrap> {
    return this._client.get(path`/3/articles/${articleNumber}`, options);
  }

  /**
   * Updates the specified article with the values provided in the properties. Any
   * property not provided will be left unchanged. You need to supply the unique
   * article number that was returned when the article was created or retrieved from
   * the list of articles. Note that even though the article number is writeable you
   * can not change the number of an existing article.
   */
  update(
    articleNumber: number,
    body: ArticleUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxArticleWrap> {
    return this._client.put(path`/3/articles/${articleNumber}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a list of articles. The articles are returned sorted by article number
   * with the lowest number appearing first.
   */
  list(
    query: ArticleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ArticleListResponse> {
    return this._client.get('/3/articles', { query, ...options });
  }

  /**
   * <p>Deletes the article permanently.</p>
   *  <p>You need to supply the unique article number that was returned when the article was created or retrieved from the list of articles.</p>
   */
  delete(articleNumber: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/articles/${articleNumber}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FortnoxArticle {
  Description: string;

  '@url'?: string;

  Active?: boolean;

  ArticleNumber?: string;

  Bulky?: boolean;

  ConstructionAccount?: number;

  CostCalculationMethod?: string;

  DefaultStockLocation?: string;

  DefaultStockPoint?: string;

  Depth?: number;

  DirectCost?: number;

  DisposableQuantity?: number;

  EAN?: string;

  EUAccount?: number;

  EUVATAccount?: number;

  Expired?: boolean;

  ExportAccount?: number;

  FreightCost?: number;

  Height?: number;

  Housework?: boolean;

  HouseworkType?:
    | 'CONSTRUCTION'
    | 'ELECTRICITY'
    | 'GLASSMETALWORK'
    | 'GROUNDDRAINAGEWORK'
    | 'MASONRY'
    | 'PAINTINGWALLPAPERING'
    | 'HVAC'
    | 'CLEANING'
    | 'TEXTILECLOTHING'
    | 'COOKING'
    | 'SNOWPLOWING'
    | 'GARDENING'
    | 'BABYSITTING'
    | 'OTHERCARE'
    | 'TUTORING'
    | 'FURNISHING'
    | 'HOMEMAINTENANCE'
    | 'TRANSPORTATIONSERVICES'
    | 'WASHINGANDCAREOFCLOTHING'
    | 'SOLARCELLS'
    | 'STORAGESELFPRODUCEDELECTRICITY'
    | 'CHARGINGSTATIONELECTRICVEHICLE'
    | 'EMPTYHOUSEWORK'
    | 'OTHERCOSTS';

  Manufacturer?: string;

  ManufacturerArticleNumber?: string;

  Note?: string;

  OtherCost?: number;

  PurchaseAccount?: number;

  PurchasePrice?: number;

  QuantityInStock?: number;

  ReservedQuantity?: number;

  SalesAccount?: number;

  SalesPrice?: number;

  StockAccount?: number;

  StockChangeAccount?: number;

  StockGoods?: boolean;

  StockPlace?: string;

  StockValue?: number;

  StockWarning?: number;

  SupplierName?: string;

  SupplierNumber?: string;

  Type?: 'STOCK' | 'SERVICE';

  Unit?: string;

  VAT?: number;

  WebshopArticle?: boolean;

  Weight?: number;

  Width?: number;
}

export interface FortnoxArticleWrap {
  Article?: FortnoxArticle;
}

export interface ArticleListResponse {
  Articles?: Array<ArticleListResponse.Article>;
}

export namespace ArticleListResponse {
  export interface Article {
    Description: string;

    '@url'?: string;

    ArticleNumber?: string;

    DisposableQuantity?: string;

    EAN?: string;

    Housework?: boolean;

    PurchasePrice?: string;

    QuantityInStock?: number;

    ReservedQuantity?: string;

    SalesPrice?: string;

    StockPlace?: string;

    StockValue?: string;

    Unit?: string;

    VAT?: string;

    WebshopArticle?: boolean;
  }
}

export interface ArticleCreateParams {
  Article?: FortnoxArticle;
}

export interface ArticleUpdateParams {
  Article?: FortnoxArticle;
}

export interface ArticleListParams {
  /**
   * filter by article number
   */
  articlenumber?: string;

  /**
   * filter by description
   */
  description?: string;

  /**
   * filter by ean
   */
  ean?: string;

  /**
   * possibility to filter supplier invoices
   */
  filter?: 'active' | 'inactive';

  /**
   * filter by lastmodified
   */
  lastmodified?: string;

  /**
   * filter by manufacturer
   */
  manufacturer?: string;

  /**
   * filter by manufacturerarticlenumber
   */
  manufacturerarticlenumber?: string;

  /**
   * field to sort returned list
   */
  sortby?: 'articlenumber' | 'quantityinstock' | 'reservedquantity' | 'stockvalue';

  /**
   * filter by supplier number
   */
  suppliernumber?: string;

  /**
   * filter by web shop
   */
  webshop?: string;
}

export declare namespace Articles {
  export {
    type FortnoxArticle as FortnoxArticle,
    type FortnoxArticleWrap as FortnoxArticleWrap,
    type ArticleListResponse as ArticleListResponse,
    type ArticleCreateParams as ArticleCreateParams,
    type ArticleUpdateParams as ArticleUpdateParams,
    type ArticleListParams as ArticleListParams,
  };
}
