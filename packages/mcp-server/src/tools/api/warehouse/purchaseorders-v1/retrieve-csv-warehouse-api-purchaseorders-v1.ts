// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.warehouse.purchaseorders_v1',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/warehouse/purchaseorders-v1/csv',
  operationId: 'getCsvReport',
};

export const tool: Tool = {
  name: 'retrieve_csv_warehouse_api_purchaseorders_v1',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet CSV list of Purchase Orders\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/purchaseorders_v1_retrieve_csv_response',\n  $defs: {\n    purchaseorders_v1_retrieve_csv_response: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      internalReference: {
        type: 'string',
        description:
          "Include only documents where `internalReference' contains the given text (case-insensitive).",
      },
      itemId: {
        type: 'string',
        description: 'Include only documents with the given `itemId`.',
      },
      note: {
        type: 'string',
        description: 'Include only documents where `note`-field contains the given text (case-insensitive).',
      },
      purchaseType: {
        type: 'string',
        description: 'Include only documents with the given `purchaseType`',
        enum: ['WAREHOUSE', 'DROPSHIP'],
      },
      q: {
        type: 'string',
        description:
          'Include only documents where `id` or `internalReference`-field contains the given text (case-insensitive).',
      },
      showPurchaseTypeColumn: {
        type: 'boolean',
        description: 'True to include the purchase type column, default is false.',
      },
      state: {
        type: 'string',
        description: 'Include only documents with the given `purchaseOrderState`.',
        enum: ['NOT_SENT', 'SENT', 'SENT_NOT_REJECTED', 'DELAYED', 'RECEIVED', 'VOIDED', 'CURRENT', 'ALL'],
      },
      supplierNumber: {
        type: 'string',
        description: 'Include only documents with the given `supplierNumber`.',
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
      await maybeFilter(jq_filter, await client.api.warehouse.purchaseordersV1.retrieveCsv(body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
