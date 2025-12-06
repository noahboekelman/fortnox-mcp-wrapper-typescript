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
  resource: 'number_3.suppliers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/suppliers/{SupplierNumber}',
  operationId: 'get_49',
};

export const tool: Tool = {
  name: 'retrieve_number_3_suppliers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a single supplier\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fortnox_supplier_wrap',\n  $defs: {\n    fortnox_supplier_wrap: {\n      type: 'object',\n      properties: {\n        Supplier: {\n          $ref: '#/$defs/fortnox_supplier'\n        }\n      }\n    },\n    fortnox_supplier: {\n      type: 'object',\n      properties: {\n        Name: {\n          type: 'string'\n        },\n        '@url': {\n          type: 'string'\n        },\n        Active: {\n          type: 'boolean'\n        },\n        Address1: {\n          type: 'string'\n        },\n        Address2: {\n          type: 'string'\n        },\n        Bank: {\n          type: 'string'\n        },\n        BankAccountNumber: {\n          type: 'string'\n        },\n        BG: {\n          type: 'string'\n        },\n        BIC: {\n          type: 'string'\n        },\n        BranchCode: {\n          type: 'string'\n        },\n        City: {\n          type: 'string'\n        },\n        ClearingNumber: {\n          type: 'string'\n        },\n        Comments: {\n          type: 'string'\n        },\n        CostCenter: {\n          type: 'string'\n        },\n        Country: {\n          type: 'string'\n        },\n        CountryCode: {\n          type: 'string'\n        },\n        Currency: {\n          type: 'string'\n        },\n        DisablePaymentFile: {\n          type: 'boolean'\n        },\n        Email: {\n          type: 'string'\n        },\n        Fax: {\n          type: 'string'\n        },\n        IBAN: {\n          type: 'string'\n        },\n        OrganisationNumber: {\n          type: 'string'\n        },\n        OurCustomerNumber: {\n          type: 'string'\n        },\n        OurReference: {\n          type: 'string'\n        },\n        PG: {\n          type: 'string'\n        },\n        Phone1: {\n          type: 'string'\n        },\n        Phone2: {\n          type: 'string'\n        },\n        PreDefinedAccount: {\n          type: 'string'\n        },\n        Project: {\n          type: 'string'\n        },\n        SupplierNumber: {\n          type: 'string'\n        },\n        TermsOfPayment: {\n          type: 'string'\n        },\n        VATNumber: {\n          type: 'string'\n        },\n        VATType: {\n          type: 'string'\n        },\n        VisitingAddress: {\n          type: 'string'\n        },\n        VisitingCity: {\n          type: 'string'\n        },\n        VisitingCountry: {\n          type: 'string'\n        },\n        VisitingCountryCode: {\n          type: 'string'\n        },\n        VisitingZipCode: {\n          type: 'string'\n        },\n        WorkPlace: {\n          type: 'string'\n        },\n        WWW: {\n          type: 'string'\n        },\n        YourReference: {\n          type: 'string'\n        },\n        ZipCode: {\n          type: 'string'\n        }\n      },\n      required: [        'Name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      SupplierNumber: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['SupplierNumber'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { SupplierNumber, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.suppliers.retrieve(SupplierNumber)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
