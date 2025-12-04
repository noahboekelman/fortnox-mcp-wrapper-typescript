// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Articleurlconnections extends APIResource {
  /**
   * Create an article url connection
   */
  create(
    body: ArticleurlconnectionCreateParams,
    options?: RequestOptions,
  ): APIPromise<FortnoxArticleURLConnectionWrap> {
    return this._client.post('/3/articleurlconnections', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single article url connection
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<FortnoxArticleURLConnectionWrap> {
    return this._client.get(path`/3/articleurlconnections/${id}`, options);
  }

  /**
   * Update an article url connection
   */
  update(
    id: string,
    body: ArticleurlconnectionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FortnoxArticleURLConnectionWrap> {
    return this._client.put(path`/3/articleurlconnections/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * The article url connections register can return a list of records or a single
   * record. By specifying an id in the URL, a single record will be returned. Not
   * specifying an id will return a list of records.
   */
  list(options?: RequestOptions): APIPromise<ArticleurlconnectionListResponse> {
    return this._client.get('/3/articleurlconnections', options);
  }

  /**
   * Remove an article url connection
   */
  remove(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/articleurlconnections/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FortnoxArticleURLConnection {
  ArticleNumber: string;

  URLConnection: string;

  '@url'?: string;

  Id?: number;
}

export interface FortnoxArticleURLConnectionWrap {
  ArticleUrlConnection: FortnoxArticleURLConnection;
}

export interface ArticleurlconnectionListResponse {
  ArticleUrlConnections?: Array<ArticleurlconnectionListResponse.ArticleURLConnection>;
}

export namespace ArticleurlconnectionListResponse {
  export interface ArticleURLConnection {
    ArticleNumber: string;

    URLConnection: string;

    '@url'?: string;

    Id?: number;
  }
}

export interface ArticleurlconnectionCreateParams {
  ArticleUrlConnection: FortnoxArticleURLConnection;
}

export interface ArticleurlconnectionUpdateParams {
  ArticleUrlConnection: FortnoxArticleURLConnection;
}

export declare namespace Articleurlconnections {
  export {
    type FortnoxArticleURLConnection as FortnoxArticleURLConnection,
    type FortnoxArticleURLConnectionWrap as FortnoxArticleURLConnectionWrap,
    type ArticleurlconnectionListResponse as ArticleurlconnectionListResponse,
    type ArticleurlconnectionCreateParams as ArticleurlconnectionCreateParams,
    type ArticleurlconnectionUpdateParams as ArticleurlconnectionUpdateParams,
  };
}
