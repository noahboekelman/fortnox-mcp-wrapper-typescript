// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TrustedAPI from './trusted';
import {
  FortnoxTrustedEmailSenderTrustedSender,
  FortnoxTrustedEmailSenderTrustedSenderWrap,
  Trusted,
  TrustedAddParams,
} from './trusted';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Emailsenders extends APIResource {
  trusted: TrustedAPI.Trusted = new TrustedAPI.Trusted(this._client);

  /**
   * Retrieve a list of all trusted and rejected senders
   */
  list(options?: RequestOptions): APIPromise<EmailsenderListResponse> {
    return this._client.get('/3/emailsenders', options);
  }
}

export interface EmailsenderListResponse {
  EmailSenders?: EmailsenderListResponse.EmailSenders;
}

export namespace EmailsenderListResponse {
  export interface EmailSenders {
    RejectedSenders?: Array<EmailSenders.RejectedSender>;

    TrustedSenders?: Array<TrustedAPI.FortnoxTrustedEmailSenderTrustedSender>;
  }

  export namespace EmailSenders {
    export interface RejectedSender {
      Email: string;

      Id?: number;
    }
  }
}

Emailsenders.Trusted = Trusted;

export declare namespace Emailsenders {
  export { type EmailsenderListResponse as EmailsenderListResponse };

  export {
    Trusted as Trusted,
    type FortnoxTrustedEmailSenderTrustedSender as FortnoxTrustedEmailSenderTrustedSender,
    type FortnoxTrustedEmailSenderTrustedSenderWrap as FortnoxTrustedEmailSenderTrustedSenderWrap,
    type TrustedAddParams as TrustedAddParams,
  };
}
