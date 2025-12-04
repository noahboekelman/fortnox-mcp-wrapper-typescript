// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.offers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/offers',
  operationId: 'list_24',
};

export const tool: Tool = {
  name: 'list_number_3_offers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a list of offers\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/offer_list_response',\n  $defs: {\n    offer_list_response: {\n      type: 'object',\n      properties: {\n        Offers: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              CustomerNumber: {\n                type: 'string'\n              },\n              '@url': {\n                type: 'string'\n              },\n              Cancelled: {\n                type: 'boolean'\n              },\n              Currency: {\n                type: 'string'\n              },\n              CustomerName: {\n                type: 'string'\n              },\n              DocumentNumber: {\n                type: 'string'\n              },\n              OfferDate: {\n                type: 'string',\n                format: 'date'\n              },\n              Project: {\n                type: 'string'\n              },\n              Sent: {\n                type: 'boolean'\n              },\n              Total: {\n                type: 'number'\n              }\n            },\n            required: [              'CustomerNumber'\n            ]\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      costcenter: {
        type: 'string',
        description: 'filter by cost center',
      },
      customername: {
        type: 'string',
        description: 'filter by customer name',
      },
      customernumber: {
        type: 'string',
        description: 'filter by customer number',
      },
      documentnumber: {
        type: 'string',
        description: 'filter by document number',
      },
      filter: {
        type: 'string',
        description: 'possibility to filter offers',
        enum: ['cancelled', 'expired', 'completed', 'notcompleted', 'ordercreated', 'ordernotcreated'],
      },
      fromdate: {
        type: 'string',
        description: 'filter by from date',
      },
      label: {
        type: 'string',
        description: 'filter by label',
      },
      lastmodified: {
        type: 'string',
        description: 'filter by last modified',
      },
      notcompleted: {
        type: 'boolean',
        description: 'filter by not completed',
      },
      ourreference: {
        type: 'string',
        description: 'filter by our reference',
      },
      project: {
        type: 'string',
        description: 'filter by project',
      },
      sent: {
        type: 'boolean',
        description: 'filter by sent',
      },
      sortby: {
        type: 'string',
        description: 'sort returned list of offers',
        enum: ['customerName', 'id', 'transactionDate', 'total'],
      },
      todate: {
        type: 'string',
        description: 'filter by to date',
      },
      yourreference: {
        type: 'string',
        description: 'filter by your reference',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.number3.offers.list(body)));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
