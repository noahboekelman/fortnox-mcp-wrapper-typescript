// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.warehouse.incominggoods_v1',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/warehouse/incominggoods-v1',
  operationId: 'getAll_7',
};

export const tool: Tool = {
  name: 'retrieve_incominggoods_v1_warehouse_api_incominggoods_v1',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n<p>\n     List incoming goods documents matching the given parameters.\n </p>\n <p>\n     Sortable fields:\n     <code>id</code>,\n     <code>has_delivery_note</code>,\n     <code>delivery_note_id</code>,\n     <code>supplier_number</code>,\n     <code>date</code>\n </p>\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/incominggoods_v1_retrieve_incominggoods_v1_response',\n  $defs: {\n    incominggoods_v1_retrieve_incominggoods_v1_response: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'integer'\n          },\n          completed: {\n            type: 'boolean'\n          },\n          date: {\n            type: 'string',\n            format: 'date'\n          },\n          deliveryNoteId: {\n            type: 'string'\n          },\n          hasDeliveryNote: {\n            type: 'boolean'\n          },\n          note: {\n            type: 'string'\n          },\n          released: {\n            type: 'boolean'\n          },\n          stockPointId: {\n            type: 'string'\n          },\n          supplierName: {\n            type: 'string'\n          },\n          supplierNumber: {\n            type: 'string'\n          },\n          unmatchedValue: {\n            type: 'number'\n          },\n          voided: {\n            type: 'boolean'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      completed: {
        type: 'boolean',
        description:
          '`true` to include only completed documents.\n `false` to include only non-completed documents.',
      },
      deliveryNote: {
        type: 'string',
        description:
          'Include only documents where `deliveryNote`-field contains the given text (case-insensitive).',
      },
      itemId: {
        type: 'string',
        description: 'Include only documents with the given `itemId`.',
      },
      note: {
        type: 'string',
        description: 'Include only documents where `note`-field contains the given text (case-insensitive).',
      },
      q: {
        type: 'string',
        description:
          'Include only documents where `id` or `deliveryNote`-field contains the given text (case-insensitive).',
      },
      released: {
        type: 'boolean',
        description:
          '`true` to include only released documents.\n `false` to include only non-released documents.',
      },
      supplierNumber: {
        type: 'string',
        description: 'Include only documents with the given `supplierNumber`.',
      },
      voided: {
        type: 'boolean',
        description:
          '`true` to include only voided documents.\n `false` to include only non-voided documents.',
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.api.warehouse.incominggoodsV1.retrieveIncominggoodsV1(body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
