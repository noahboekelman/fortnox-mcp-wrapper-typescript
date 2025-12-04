// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Trusted extends APIResource {
  /**
   * Provide an id matching an email to delete.
   */
  delete(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/emailsenders/trusted/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Add a new email address as trusted
   */
  add(
    body: TrustedAddParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxTrustedEmailSenderTrustedSenderWrap> {
    return this._client.post('/3/emailsenders/trusted', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }
}

export interface FortnoxTrustedEmailSenderTrustedSender {
  Email: string;

  Id?: number;
}

export interface FortnoxTrustedEmailSenderTrustedSenderWrap {
  TrustedSender?: FortnoxTrustedEmailSenderTrustedSender;
}

export interface TrustedAddParams {
  TrustedSender?: FortnoxTrustedEmailSenderTrustedSender;
}

export declare namespace Trusted {
  export {
    type FortnoxTrustedEmailSenderTrustedSender as FortnoxTrustedEmailSenderTrustedSender,
    type FortnoxTrustedEmailSenderTrustedSenderWrap as FortnoxTrustedEmailSenderTrustedSenderWrap,
    type TrustedAddParams as TrustedAddParams,
  };
}
