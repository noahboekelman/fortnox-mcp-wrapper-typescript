// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Articlefileconnections extends APIResource {
  /**
   * Create an article file connection
   */
  create(
    body: ArticlefileconnectionCreateParams,
    options?: RequestOptions,
  ): APIPromise<FortnoxArticleFileConnectionWrap> {
    return this._client.post('/3/articlefileconnections', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single article file connection
   */
  retrieve(fileID: string, options?: RequestOptions): APIPromise<FortnoxArticleFileConnectionWrap> {
    return this._client.get(path`/3/articlefileconnections/${fileID}`, options);
  }

  /**
   * The article file connections register can return a list of records or a single
   * record. By specifying a FileId in the URL, a single record will be returned. Not
   * specifying a FileId will return a list of records.
   */
  list(options?: RequestOptions): APIPromise<ArticlefileconnectionListResponse> {
    return this._client.get('/3/articlefileconnections', options);
  }

  /**
   * Remove an article file connection
   */
  remove(fileID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/articlefileconnections/${fileID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FortnoxArticleFileConnectionWrap {
  ArticleFileConnection: FortnoxArticleFileConnectionWrap.ArticleFileConnection;
}

export namespace FortnoxArticleFileConnectionWrap {
  export interface ArticleFileConnection {
    ArticleNumber: string;

    FileId: string;

    '@url'?: string;
  }
}

export interface ArticlefileconnectionListResponse {
  ArticleFileConnections?: Array<ArticlefileconnectionListResponse.ArticleFileConnection>;
}

export namespace ArticlefileconnectionListResponse {
  export interface ArticleFileConnection {
    ArticleNumber: string;

    FileId: string;

    '@url'?: string;
  }
}

export interface ArticlefileconnectionCreateParams {
  ArticleFileConnection: ArticlefileconnectionCreateParams.ArticleFileConnection;
}

export namespace ArticlefileconnectionCreateParams {
  export interface ArticleFileConnection {
    ArticleNumber: string;

    FileId: string;

    '@url'?: string;
  }
}

export declare namespace Articlefileconnections {
  export {
    type FortnoxArticleFileConnectionWrap as FortnoxArticleFileConnectionWrap,
    type ArticlefileconnectionListResponse as ArticlefileconnectionListResponse,
    type ArticlefileconnectionCreateParams as ArticlefileconnectionCreateParams,
  };
}
