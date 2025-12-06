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
  resource: 'number_3.customers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/customers',
  operationId: 'list_15',
};

export const tool: Tool = {
  name: 'list_number_3_customers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThe customers are returned sorted by customer number with the lowest number appearing first.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/customer_list_response',\n  $defs: {\n    customer_list_response: {\n      type: 'object',\n      properties: {\n        Customers: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              Name: {\n                type: 'string'\n              },\n              '@url': {\n                type: 'string'\n              },\n              Address1: {\n                type: 'string'\n              },\n              Address2: {\n                type: 'string'\n              },\n              City: {\n                type: 'string'\n              },\n              CustomerNumber: {\n                type: 'string'\n              },\n              Email: {\n                type: 'string'\n              },\n              OrganisationNumber: {\n                type: 'string'\n              },\n              Phone: {\n                type: 'string'\n              },\n              ZipCode: {\n                type: 'string'\n              }\n            },\n            required: [              'Name'\n            ]\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      city: {
        type: 'string',
        description: 'filter by city',
      },
      customernumber: {
        type: 'string',
        description: 'filter by customer number',
      },
      email: {
        type: 'string',
        description: 'filter by email',
      },
      filter: {
        type: 'string',
        description: 'possibility to filter customers',
        enum: ['active', 'inactive'],
      },
      gln: {
        type: 'string',
        description: 'filter by gln',
      },
      glndelivery: {
        type: 'string',
        description: 'filter by gln delivery',
      },
      lastmodified: {
        type: 'string',
        description: 'filter by last modified',
      },
      name: {
        type: 'string',
        description: 'filter by name',
      },
      organisationnumber: {
        type: 'string',
        description: 'filter by organisation number',
      },
      phone: {
        type: 'string',
        description: 'filter by phone',
      },
      sortby: {
        type: 'string',
        description: 'field to sort returned list',
        enum: ['customernumber', 'name'],
      },
      zipcode: {
        type: 'string',
        description: 'filter by zip code',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.number3.customers.list(body)));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
