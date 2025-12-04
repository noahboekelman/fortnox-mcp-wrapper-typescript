// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Supplierinvoiceexternalurlconnections extends APIResource {
  /**
   * The connection will initially be inactive. It will show up once a file has been
   * connected to the supplier invoice via POST /3/supplierinvoicefileconnections
   */
  create(
    body: SupplierinvoiceexternalurlconnectionCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SupplierInvoiceExternalURLConnectionSingle> {
    return this._client.post('/3/supplierinvoiceexternalurlconnections', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single supplier invoice external URL connection
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<SupplierInvoiceExternalURLConnectionSingle> {
    return this._client.get(path`/3/supplierinvoiceexternalurlconnections/${id}`, options);
  }

  /**
   * Update a supplier invoice external URL connection
   */
  update(
    id: number,
    body: SupplierinvoiceexternalurlconnectionUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SupplierInvoiceExternalURLConnectionSingle> {
    return this._client.put(path`/3/supplierinvoiceexternalurlconnections/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Remove a supplier invoice external URL connection
   */
  delete(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/supplierinvoiceexternalurlconnections/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SupplierInvoiceExternalURLConnectionSingle {
  SupplierInvoiceExternalURLConnection?: SupplierInvoiceExternalURLConnectionSingle.SupplierInvoiceExternalURLConnection;
}

export namespace SupplierInvoiceExternalURLConnectionSingle {
  export interface SupplierInvoiceExternalURLConnection {
    ExternalURLConnection?: string;

    Id?: number;

    SupplierInvoiceNumber?: number;

    Url?: string;
  }
}

export interface SupplierInvoiceExternalURLConnectionUpdate {
  ExternalURLConnection?: string;

  SupplierInvoiceNumber?: number;
}

export interface SupplierinvoiceexternalurlconnectionCreateParams {
  ExternalURLConnection?: string;

  SupplierInvoiceNumber?: number;
}

export interface SupplierinvoiceexternalurlconnectionUpdateParams {
  ExternalURLConnection?: string;

  SupplierInvoiceNumber?: number;
}

export declare namespace Supplierinvoiceexternalurlconnections {
  export {
    type SupplierInvoiceExternalURLConnectionSingle as SupplierInvoiceExternalURLConnectionSingle,
    type SupplierInvoiceExternalURLConnectionUpdate as SupplierInvoiceExternalURLConnectionUpdate,
    type SupplierinvoiceexternalurlconnectionCreateParams as SupplierinvoiceexternalurlconnectionCreateParams,
    type SupplierinvoiceexternalurlconnectionUpdateParams as SupplierinvoiceexternalurlconnectionUpdateParams,
  };
}
