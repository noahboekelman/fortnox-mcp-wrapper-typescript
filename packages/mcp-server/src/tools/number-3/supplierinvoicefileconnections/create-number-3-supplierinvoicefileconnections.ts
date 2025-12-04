// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.supplierinvoicefileconnections',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/3/supplierinvoicefileconnections',
  operationId: 'create_37',
};

export const tool: Tool = {
  name: 'create_number_3_supplierinvoicefileconnections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate an supplier invoice file connection\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fortnox_supplier_invoice_file_connection_wrap',\n  $defs: {\n    fortnox_supplier_invoice_file_connection_wrap: {\n      type: 'object',\n      properties: {\n        SupplierInvoiceFileConnection: {\n          $ref: '#/$defs/fortnox_supplier_invoice_file_connection'\n        }\n      }\n    },\n    fortnox_supplier_invoice_file_connection: {\n      type: 'object',\n      properties: {\n        '@url': {\n          type: 'string'\n        },\n        FileId: {\n          type: 'string'\n        },\n        Name: {\n          type: 'string'\n        },\n        SupplierInvoiceNumber: {\n          type: 'string'\n        },\n        SupplierName: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      SupplierInvoiceFileConnection: {
        $ref: '#/$defs/fortnox_supplier_invoice_file_connection',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
    $defs: {
      fortnox_supplier_invoice_file_connection: {
        type: 'object',
        properties: {
          '@url': {
            type: 'string',
          },
          FileId: {
            type: 'string',
          },
          Name: {
            type: 'string',
          },
          SupplierInvoiceNumber: {
            type: 'string',
          },
          SupplierName: {
            type: 'string',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.supplierinvoicefileconnections.create(body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
