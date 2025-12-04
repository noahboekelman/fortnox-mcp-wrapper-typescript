// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ArchiveAPI from './archive';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Archive extends APIResource {
  /**
   * If no path is provided the root will be returned. Providing fileId will return
   * given file from fileattachments.
   */
  retrieve(
    query: ArchiveRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FolderWrap> {
    return this._client.get('/3/archive', { query, ...options });
  }

  /**
   * Delete a single file
   */
  deleteFile(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/archive/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Please note that removing a folder will also resulting in removal of all the
   * contents within!
   */
  removeFiles(
    params: ArchiveRemoveFilesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { path: path_ } = params ?? {};
    return this._client.delete('/3/archive', {
      query: { path: path_ },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Providing fileId will return given file from fileattachments.
   */
  retrieveFile(
    id: string,
    query: ArchiveRetrieveFileParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/3/archive/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * If not path or folderId is provided, the file will be uploaded to the root
   * directory.
   */
  uploadFile(
    params: ArchiveUploadFileParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileRowWrap> {
    const { folderid, path: path_, ...body } = params ?? {};
    return this._client.post(
      '/3/archive',
      multipartFormRequestOptions({ query: { folderid, path: path_ }, body, ...options }, this._client),
    );
  }
}

export interface FileRow {
  '@url'?: string;

  ArchiveFileId?: string;

  Comments?: string;

  Id?: string;

  Name?: string;

  Path?: string;

  Size?: number;
}

export interface FileRowWrap {
  File?: FileRow;
}

export interface FolderWrap {
  Folder?: FolderWrap.Folder;
}

export namespace FolderWrap {
  export interface Folder {
    Name: string;

    '@url'?: string;

    Email?: string;

    Files?: Array<ArchiveAPI.FileRow>;

    Folders?: Array<Folder.Folder>;

    Id?: string;
  }

  export namespace Folder {
    export interface Folder {
      '@url'?: string;

      Id?: string;

      Name?: string;
    }
  }
}

export interface ArchiveRetrieveParams {
  /**
   * fileId from fileattachments
   */
  fileid?: string;

  /**
   * name of folder
   */
  path?: string;
}

export interface ArchiveRemoveFilesParams {
  /**
   * identifies file/folder to remove
   */
  path?: string;
}

export interface ArchiveRetrieveFileParams {
  /**
   * fileId from fileattachments
   */
  fileid?: string;
}

export interface ArchiveUploadFileParams {
  /**
   * Query param: id of folder
   */
  folderid?: string;

  /**
   * Query param: name of folder
   */
  path?: string;

  /**
   * Body param: file to uplad
   */
  file?: unknown;
}

export declare namespace Archive {
  export {
    type FileRow as FileRow,
    type FileRowWrap as FileRowWrap,
    type FolderWrap as FolderWrap,
    type ArchiveRetrieveParams as ArchiveRetrieveParams,
    type ArchiveRemoveFilesParams as ArchiveRemoveFilesParams,
    type ArchiveRetrieveFileParams as ArchiveRetrieveFileParams,
    type ArchiveUploadFileParams as ArchiveUploadFileParams,
  };
}
