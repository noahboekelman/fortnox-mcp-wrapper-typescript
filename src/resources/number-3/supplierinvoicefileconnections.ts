// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Supplierinvoicefileconnections extends APIResource {
  /**
   * Create an supplier invoice file connection
   */
  create(
    body: SupplierinvoicefileconnectionCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxSupplierInvoiceFileConnectionWrap> {
    return this._client.post('/3/supplierinvoicefileconnections', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single supplier invoice file connection
   */
  retrieve(fileID: string, options?: RequestOptions): APIPromise<FortnoxSupplierInvoiceFileConnectionWrap> {
    return this._client.get(path`/3/supplierinvoicefileconnections/${fileID}`, options);
  }

  /**
   * The supplier invoice file connections register can return a list of records or a
   * single record. By specifying a FileId in the URL, a single record will be
   * returned. Not specifying a FileId will return a list of records.
   */
  list(options?: RequestOptions): APIPromise<SupplierinvoicefileconnectionListResponse> {
    return this._client.get('/3/supplierinvoicefileconnections', options);
  }

  /**
   * Remove an supplier invoice file connection
   */
  delete(fileID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/supplierinvoicefileconnections/${fileID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FortnoxSupplierInvoiceFileConnection {
  '@url'?: string;

  FileId?: string;

  Name?: string;

  SupplierInvoiceNumber?: string;

  SupplierName?: string;
}

export interface FortnoxSupplierInvoiceFileConnectionWrap {
  SupplierInvoiceFileConnection?: FortnoxSupplierInvoiceFileConnection;
}

export interface SupplierinvoicefileconnectionListResponse {
  SupplierInvoiceFileConnections?: Array<FortnoxSupplierInvoiceFileConnection>;
}

export interface SupplierinvoicefileconnectionCreateParams {
  SupplierInvoiceFileConnection?: FortnoxSupplierInvoiceFileConnection;
}

export declare namespace Supplierinvoicefileconnections {
  export {
    type FortnoxSupplierInvoiceFileConnection as FortnoxSupplierInvoiceFileConnection,
    type FortnoxSupplierInvoiceFileConnectionWrap as FortnoxSupplierInvoiceFileConnectionWrap,
    type SupplierinvoicefileconnectionListResponse as SupplierinvoicefileconnectionListResponse,
    type SupplierinvoicefileconnectionCreateParams as SupplierinvoicefileconnectionCreateParams,
  };
}
