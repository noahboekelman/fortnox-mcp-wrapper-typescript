// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ArchiveAPI from './archive';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Inbox extends APIResource {
  /**
   * Retrieve the root folder containing files and folders
   */
  retrieve(options?: RequestOptions): APIPromise<ArchiveAPI.FolderWrap> {
    return this._client.get('/3/inbox', options);
  }

  /**
   * Remove a file or folder
   */
  remove(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/inbox/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single file
   */
  retrieveFile(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/3/inbox/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Upload a file to a specific subdirectory.
   */
  upload(
    params: InboxUploadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ArchiveAPI.FileRowWrap> {
    const { folderId, path: path_, ...body } = params ?? {};
    return this._client.post(
      '/3/inbox',
      multipartFormRequestOptions({ query: { folderId, path: path_ }, body, ...options }, this._client),
    );
  }
}

export interface InboxUploadParams {
  /**
   * Query param: folder id
   */
  folderId?: string;

  /**
   * Query param: path
   */
  path?: string;

  /**
   * Body param: file
   */
  file?: unknown;
}

export declare namespace Inbox {
  export { type InboxUploadParams as InboxUploadParams };
}
