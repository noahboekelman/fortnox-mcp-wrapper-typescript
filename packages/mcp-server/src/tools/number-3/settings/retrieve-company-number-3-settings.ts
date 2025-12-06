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
  resource: 'number_3.settings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/settings/company',
  operationId: '1_get_12',
};

export const tool: Tool = {
  name: 'retrieve_company_number_3_settings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve the company settings\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/setting_retrieve_company_response',\n  $defs: {\n    setting_retrieve_company_response: {\n      type: 'object',\n      properties: {\n        CompanySettings: {\n          type: 'object',\n          properties: {\n            Address: {\n              type: 'string'\n            },\n            BG: {\n              type: 'string'\n            },\n            BIC: {\n              type: 'string'\n            },\n            BranchCode: {\n              type: 'string'\n            },\n            City: {\n              type: 'string'\n            },\n            ContactFirstName: {\n              type: 'string'\n            },\n            ContactLastName: {\n              type: 'string'\n            },\n            Country: {\n              type: 'string'\n            },\n            CountryCode: {\n              type: 'string'\n            },\n            DatabaseNumber: {\n              type: 'string'\n            },\n            Domicile: {\n              type: 'string'\n            },\n            Email: {\n              type: 'string'\n            },\n            Fax: {\n              type: 'string'\n            },\n            IBAN: {\n              type: 'string'\n            },\n            Name: {\n              type: 'string'\n            },\n            OrganizationNumber: {\n              type: 'string'\n            },\n            PG: {\n              type: 'string'\n            },\n            Phone1: {\n              type: 'string'\n            },\n            Phone2: {\n              type: 'string'\n            },\n            TaxEnabled: {\n              type: 'boolean'\n            },\n            VATNumber: {\n              type: 'string'\n            },\n            VisitAddress: {\n              type: 'string'\n            },\n            VisitCity: {\n              type: 'string'\n            },\n            VisitCountry: {\n              type: 'string'\n            },\n            VisitCountryCode: {\n              type: 'string'\n            },\n            VisitName: {\n              type: 'string'\n            },\n            VisitZipCode: {\n              type: 'string'\n            },\n            WWW: {\n              type: 'string'\n            },\n            ZipCode: {\n              type: 'string'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.number3.settings.retrieveCompany()));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
