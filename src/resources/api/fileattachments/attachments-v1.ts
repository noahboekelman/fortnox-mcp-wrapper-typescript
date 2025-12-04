// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class AttachmentsV1 extends APIResource {
  /**
   * Attach files to one or more entities
   */
  create(
    params: AttachmentsV1CreateParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<FileattachmentsAttachment> {
    const { body } = params ?? {};
    return this._client.post('/api/fileattachments/attachments-v1', {
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Update attachment
   */
  update(
    attachmentID: string,
    body: AttachmentsV1UpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileattachmentsAttachment> {
    return this._client.put(path`/api/fileattachments/attachments-v1/${attachmentID}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Get attached files on an entity
   */
  list(query: AttachmentsV1ListParams, options?: RequestOptions): APIPromise<FileattachmentsAttachment> {
    return this._client.get('/api/fileattachments/attachments-v1', { query, ...options });
  }

  /**
   * Detach file
   */
  delete(attachmentID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/fileattachments/attachments-v1/${attachmentID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List number of attachments
   */
  count(query: AttachmentsV1CountParams, options?: RequestOptions): APIPromise<AttachmentsV1CountResponse> {
    return this._client.get('/api/fileattachments/attachments-v1/numberofattachments', { query, ...options });
  }

  /**
   * Validates a list of attachments that will be included on send
   */
  validate(
    params: AttachmentsV1ValidateParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params ?? {};
    return this._client.post('/api/fileattachments/attachments-v1/validateincludedonsend', {
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FileattachmentsAttachment {
  id?: string;

  entityId?: number;

  entityType?: 'OF' | 'O' | 'F' | 'C' | 'LGR_IO' | 'LGR_IG';

  fileId?: string;

  includeOnSend?: boolean;
}

export interface AttachmentsV1CountResponse {
  entityId: number;

  numberOfAttachments?: number;
}

export interface AttachmentsV1CreateParams {
  body?: Array<FileattachmentsAttachment>;
}

export interface AttachmentsV1UpdateParams {
  id?: string;

  entityId?: number;

  entityType?: 'OF' | 'O' | 'F' | 'C' | 'LGR_IO' | 'LGR_IG';

  fileId?: string;

  includeOnSend?: boolean;
}

export interface AttachmentsV1ListParams {
  /**
   * ids of the entities whose attachments should be fetched
   */
  entityid: Array<number>;

  /**
   * type of the entities whose attachments should be fetched
   */
  entitytype: 'OF' | 'O' | 'F' | 'C' | 'LGR_IO' | 'LGR_IG';
}

export interface AttachmentsV1CountParams {
  /**
   * ids of the entities to look for number of attachments on
   */
  entityids: Array<number>;

  /**
   * type of the entities to look for number of attachments on
   */
  entitytype: 'OF' | 'O' | 'F' | 'C' | 'LGR_IO' | 'LGR_IG';
}

export interface AttachmentsV1ValidateParams {
  body?: Array<FileattachmentsAttachment>;
}

export declare namespace AttachmentsV1 {
  export {
    type FileattachmentsAttachment as FileattachmentsAttachment,
    type AttachmentsV1CountResponse as AttachmentsV1CountResponse,
    type AttachmentsV1CreateParams as AttachmentsV1CreateParams,
    type AttachmentsV1UpdateParams as AttachmentsV1UpdateParams,
    type AttachmentsV1ListParams as AttachmentsV1ListParams,
    type AttachmentsV1CountParams as AttachmentsV1CountParams,
    type AttachmentsV1ValidateParams as AttachmentsV1ValidateParams,
  };
}
