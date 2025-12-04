// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Labels extends APIResource {
  /**
   * The created label will be returned if everything succeeded, if there was any
   * problems an error will be returned.
   */
  create(body: LabelCreateParams, options?: RequestOptions): APIPromise<LabelWrap> {
    return this._client.post('/3/labels', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates the specified label with the values provided in the properties. Any
   * property not provided will be left unchanged.
   */
  update(id: number, body: LabelUpdateParams, options?: RequestOptions): APIPromise<LabelWrap> {
    return this._client.put(path`/3/labels/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a list of labels
   */
  list(options?: RequestOptions): APIPromise<LabelListResponse> {
    return this._client.get('/3/labels', options);
  }

  /**
   * Deletes the label and its connection to documents permanently. You need to
   * supply the unique label id that was returned when the label was created or
   * retrieved from the list of labels.
   */
  delete(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/labels/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Label {
  Description: string;

  Id?: number;
}

export interface LabelWrap {
  Label: Label;
}

export interface LabelListResponse {
  Labels?: Array<Label>;
}

export interface LabelCreateParams {
  Label: Label;
}

export interface LabelUpdateParams {
  Label: Label;
}

export declare namespace Labels {
  export {
    type Label as Label,
    type LabelWrap as LabelWrap,
    type LabelListResponse as LabelListResponse,
    type LabelCreateParams as LabelCreateParams,
    type LabelUpdateParams as LabelUpdateParams,
  };
}
