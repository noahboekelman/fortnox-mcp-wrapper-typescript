// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class DocumenttypesV1 extends APIResource {
  /**
   * Get custom document type
   */
  retrieve(type: string, options?: RequestOptions): APIPromise<WarehouseCustomDocumentType> {
    return this._client.get(path`/api/warehouse/documentdeliveries/custom/documenttypes-v1/${type}`, options);
  }

  /**
   * Create type, if it doesn't already exists. Note that new custom document types
   * are created automatically when you create custom documents, so normally you do
   * not need to call this method.
   *
   * Throws HTTP 400 <code>referenceTypeNotAllowed</code> if the name of the type is
   * not allowed.
   */
  documenttypesV1(
    body: DocumenttypesV1DocumenttypesV1Params,
    options?: RequestOptions,
  ): APIPromise<DocumenttypesV1DocumenttypesV1Response> {
    return this._client.post('/api/warehouse/documentdeliveries/custom/documenttypes-v1', {
      body,
      ...options,
    });
  }

  /**
   * List custom document types
   */
  retrieveDocumenttypesV1(options?: RequestOptions): APIPromise<WarehouseCustomDocumentType> {
    return this._client.get('/api/warehouse/documentdeliveries/custom/documenttypes-v1', options);
  }
}

export interface WarehouseCustomDocumentType {
  category: 'INBOUND' | 'OUTBOUND';

  referenceType: string;
}

export type DocumenttypesV1DocumenttypesV1Response = number;

export interface DocumenttypesV1DocumenttypesV1Params {
  category: 'INBOUND' | 'OUTBOUND';

  referenceType: string;
}

export declare namespace DocumenttypesV1 {
  export {
    type WarehouseCustomDocumentType as WarehouseCustomDocumentType,
    type DocumenttypesV1DocumenttypesV1Response as DocumenttypesV1DocumenttypesV1Response,
    type DocumenttypesV1DocumenttypesV1Params as DocumenttypesV1DocumenttypesV1Params,
  };
}
