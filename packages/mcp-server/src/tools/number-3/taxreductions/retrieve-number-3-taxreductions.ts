// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.taxreductions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/taxreductions/{Id}',
  operationId: 'get_50',
};

export const tool: Tool = {
  name: 'retrieve_number_3_taxreductions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a single tax reduction\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fortnox_tax_reduction_wrap',\n  $defs: {\n    fortnox_tax_reduction_wrap: {\n      type: 'object',\n      properties: {\n        TaxReduction: {\n          $ref: '#/$defs/fortnox_tax_reduction'\n        }\n      },\n      required: [        'TaxReduction'\n      ]\n    },\n    fortnox_tax_reduction: {\n      type: 'object',\n      properties: {\n        AskedAmount: {\n          type: 'number'\n        },\n        CustomerName: {\n          type: 'string'\n        },\n        ReferenceDocumentType: {\n          type: 'string',\n          enum: [            'OFFER',\n            'ORDER',\n            'INVOICE'\n          ]\n        },\n        ReferenceNumber: {\n          type: 'string'\n        },\n        SocialSecurityNumber: {\n          type: 'string'\n        },\n        '@url': {\n          type: 'string'\n        },\n        ApprovedAmount: {\n          type: 'number'\n        },\n        BilledAmount: {\n          type: 'number'\n        },\n        Id: {\n          type: 'integer'\n        },\n        PropertyDesignation: {\n          type: 'string'\n        },\n        RequestSent: {\n          type: 'boolean'\n        },\n        ResidenceAssociationOrganisationNumber: {\n          type: 'string'\n        },\n        TaxReductionAmounts: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/fortnox_tax_reduction_tax_reduction_amount'\n          }\n        },\n        VoucherNumber: {\n          type: 'integer'\n        },\n        VoucherSeries: {\n          type: 'string'\n        },\n        VoucherYear: {\n          type: 'integer'\n        }\n      },\n      required: [        'AskedAmount',\n        'CustomerName',\n        'ReferenceDocumentType',\n        'ReferenceNumber',\n        'SocialSecurityNumber'\n      ]\n    },\n    fortnox_tax_reduction_tax_reduction_amount: {\n      type: 'object',\n      properties: {\n        AskedAmount: {\n          type: 'number'\n        },\n        WorkType: {\n          type: 'string',\n          enum: [            'SOLARCELLS',\n            'STORAGESELFPRODUCEDELECTRICITY',\n            'CHARGINGSTATIONELECTRICVEHICLE'\n          ]\n        }\n      },\n      required: [        'AskedAmount',\n        'WorkType'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      Id: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['Id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { Id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.number3.taxreductions.retrieve(Id)));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
