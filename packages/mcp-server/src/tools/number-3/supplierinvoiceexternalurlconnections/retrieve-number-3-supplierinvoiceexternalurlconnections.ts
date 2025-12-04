// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.supplierinvoiceexternalurlconnections',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/supplierinvoiceexternalurlconnections/{Id}',
  operationId: 'get_45',
};

export const tool: Tool = {
  name: 'retrieve_number_3_supplierinvoiceexternalurlconnections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a single supplier invoice external URL connection\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/supplier_invoice_external_url_connection_single',\n  $defs: {\n    supplier_invoice_external_url_connection_single: {\n      type: 'object',\n      properties: {\n        SupplierInvoiceExternalURLConnection: {\n          type: 'object',\n          properties: {\n            ExternalURLConnection: {\n              type: 'string'\n            },\n            Id: {\n              type: 'integer'\n            },\n            SupplierInvoiceNumber: {\n              type: 'integer'\n            },\n            Url: {\n              type: 'string'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.supplierinvoiceexternalurlconnections.retrieve(Id)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
