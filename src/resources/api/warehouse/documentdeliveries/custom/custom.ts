// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as DocumenttypesV1API from './documenttypes-v1';
import {
  DocumenttypesV1,
  DocumenttypesV1DocumenttypesV1Params,
  DocumenttypesV1DocumenttypesV1Response,
  WarehouseCustomDocumentType,
} from './documenttypes-v1';
import * as InboundV1API from './inbound-v1';
import {
  InboundV1,
  InboundV1RetrieveParams,
  InboundV1UpdateParams,
  InboundV1UpdateReleaseParams,
  InboundV1UpdateVoidParams,
  WarehouseCustomInboundDocument,
} from './inbound-v1';
import * as OutboundV1API from './outbound-v1';
import {
  OutboundV1,
  OutboundV1RetrieveParams,
  OutboundV1UpdateParams,
  OutboundV1UpdateReleaseParams,
  OutboundV1UpdateVoidParams,
  WarehouseCustomOutboundDocument,
} from './outbound-v1';

export class Custom extends APIResource {
  documenttypesV1: DocumenttypesV1API.DocumenttypesV1 = new DocumenttypesV1API.DocumenttypesV1(this._client);
  inboundV1: InboundV1API.InboundV1 = new InboundV1API.InboundV1(this._client);
  outboundV1: OutboundV1API.OutboundV1 = new OutboundV1API.OutboundV1(this._client);
}

Custom.DocumenttypesV1 = DocumenttypesV1;
Custom.InboundV1 = InboundV1;
Custom.OutboundV1 = OutboundV1;

export declare namespace Custom {
  export {
    DocumenttypesV1 as DocumenttypesV1,
    type WarehouseCustomDocumentType as WarehouseCustomDocumentType,
    type DocumenttypesV1DocumenttypesV1Response as DocumenttypesV1DocumenttypesV1Response,
    type DocumenttypesV1DocumenttypesV1Params as DocumenttypesV1DocumenttypesV1Params,
  };

  export {
    InboundV1 as InboundV1,
    type WarehouseCustomInboundDocument as WarehouseCustomInboundDocument,
    type InboundV1RetrieveParams as InboundV1RetrieveParams,
    type InboundV1UpdateParams as InboundV1UpdateParams,
    type InboundV1UpdateReleaseParams as InboundV1UpdateReleaseParams,
    type InboundV1UpdateVoidParams as InboundV1UpdateVoidParams,
  };

  export {
    OutboundV1 as OutboundV1,
    type WarehouseCustomOutboundDocument as WarehouseCustomOutboundDocument,
    type OutboundV1RetrieveParams as OutboundV1RetrieveParams,
    type OutboundV1UpdateParams as OutboundV1UpdateParams,
    type OutboundV1UpdateReleaseParams as OutboundV1UpdateReleaseParams,
    type OutboundV1UpdateVoidParams as OutboundV1UpdateVoidParams,
  };
}
