// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox_mcp_wrapper/fortnox-mcp-api/filtering';
import {
  Metadata,
  asErrorResult,
  asTextContentResult,
} from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.supplierinvoiceexternalurlconnections',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/3/supplierinvoiceexternalurlconnections',
  operationId: 'create_36',
};

export const tool: Tool = {
  name: 'create_number_3_supplierinvoiceexternalurlconnections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThe connection will initially be inactive. It will show up once a file has been connected to the supplier invoice via POST /3/supplierinvoicefileconnections\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/supplier_invoice_external_url_connection_single',\n  $defs: {\n    supplier_invoice_external_url_connection_single: {\n      type: 'object',\n      properties: {\n        SupplierInvoiceExternalURLConnection: {\n          type: 'object',\n          properties: {\n            ExternalURLConnection: {\n              type: 'string'\n            },\n            Id: {\n              type: 'integer'\n            },\n            SupplierInvoiceNumber: {\n              type: 'integer'\n            },\n            Url: {\n              type: 'string'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      ExternalURLConnection: {
        type: 'string',
      },
      SupplierInvoiceNumber: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.supplierinvoiceexternalurlconnections.create(body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
