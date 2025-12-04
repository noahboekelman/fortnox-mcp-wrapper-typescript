// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AttachmentsV1API from './attachments-v1';
import {
  AttachmentsV1,
  AttachmentsV1CountParams,
  AttachmentsV1CountResponse,
  AttachmentsV1CreateParams,
  AttachmentsV1ListParams,
  AttachmentsV1UpdateParams,
  AttachmentsV1ValidateParams,
  FileattachmentsAttachment,
} from './attachments-v1';

export class Fileattachments extends APIResource {
  attachmentsV1: AttachmentsV1API.AttachmentsV1 = new AttachmentsV1API.AttachmentsV1(this._client);
}

Fileattachments.AttachmentsV1 = AttachmentsV1;

export declare namespace Fileattachments {
  export {
    AttachmentsV1 as AttachmentsV1,
    type FileattachmentsAttachment as FileattachmentsAttachment,
    type AttachmentsV1CountResponse as AttachmentsV1CountResponse,
    type AttachmentsV1CreateParams as AttachmentsV1CreateParams,
    type AttachmentsV1UpdateParams as AttachmentsV1UpdateParams,
    type AttachmentsV1ListParams as AttachmentsV1ListParams,
    type AttachmentsV1CountParams as AttachmentsV1CountParams,
    type AttachmentsV1ValidateParams as AttachmentsV1ValidateParams,
  };
}
