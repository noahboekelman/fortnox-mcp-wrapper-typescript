// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.taxreductions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/3/taxreductions',
  operationId: 'create_41',
};

export const tool: Tool = {
  name: 'create_number_3_taxreductions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nNote that different types of tax reduction, i.e. ROT, RUT, or Green Technology, applications work differently.\n When creating an application for Green Technology, the field <em>TaxReductionAmounts</em> becomes mandatory as\n it is used to determine how much of the asked amount is intended for which type of work. Similarly, the <em>AskedAmount</em>\n field of the <em>TaxReduction</em> becomes optional, as it will always be considered to be equal to the sum of the <em>TaxReductionAmounts</em>.\n\n For the other types, ROT and RUT, this field is not required and should be omitted.\n\n Unlike earlier iterations of this endpoint, specifying the type of reduction for the provided <em>TaxReduction</em> (e.g. ROT, RUT, or Green)\n is not necessary as this value will always be equal to the type set on the provided document instead.\n\n This endpoint can raise a variety of validation errors, some of which are only relevant for Green Technology applications.\n Those errors will always return an HTTP Code of 400 and include, but are not limited to, those shown below:\n\n <table>\n     <caption>Errors that can be raised by this endpoint.</caption>\n     <tr>\n         <th>Error Code</th>\n         <th>Types</th>\n         <th>Description</th>\n         <th>Solution</th>\n     </tr>\n     <tr>\n         <td>2000600</td>\n         <td>ROT, RUT, GREEN</td>\n         <td>The provided Social Security Number is already in use for this document.</td>\n         <td>Verify that the Social Security Number is different from any other applicants already added.</td>\n     </tr>\n     <tr>\n         <td>2004217, 2004218</td>\n         <td>ROT, RUT, GREEN</td>\n         <td>The total asked amount of the application is either in an invalid format or is negative.</td>\n         <td>Verify that the <em>AskedAmount</em>-field is a positive number (0 is valid for Green Technology) and that it is an integer.</td>\n     </tr>\n     <tr>\n         <td>2004209</td>\n         <td>GREEN</td>\n         <td>The <em>WorkType</em>-field contains a work type that is not valid for the given type of reduction.</td>\n         <td>Ensure that the <em>WorkType</em> contains a valid type of work for Green Technology.</td>\n     </tr>\n     <tr>\n         <td>2004263</td>\n         <td>GREEN</td>\n         <td>The <em>TaxReductionAmounts</em>-field is missing for a Green Technology application.</td>\n         <td>Ensure that the field is included, that it is an array, and that each contained object denotes a specific type's asked amount.</td>\n     </tr>\n     <tr>\n         <td>2004262</td>\n         <td>GREEN</td>\n         <td>There are more than one object denoting the asked amount for the same type in the <em>TaxReductionAmounts</em>-field.</td>\n         <td>Ensure that there is only one object denoting the asked amount per type contained in the array.</td>\n     </tr>\n </table>\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fortnox_tax_reduction_wrap',\n  $defs: {\n    fortnox_tax_reduction_wrap: {\n      type: 'object',\n      properties: {\n        TaxReduction: {\n          $ref: '#/$defs/fortnox_tax_reduction'\n        }\n      },\n      required: [        'TaxReduction'\n      ]\n    },\n    fortnox_tax_reduction: {\n      type: 'object',\n      properties: {\n        AskedAmount: {\n          type: 'number'\n        },\n        CustomerName: {\n          type: 'string'\n        },\n        ReferenceDocumentType: {\n          type: 'string',\n          enum: [            'OFFER',\n            'ORDER',\n            'INVOICE'\n          ]\n        },\n        ReferenceNumber: {\n          type: 'string'\n        },\n        SocialSecurityNumber: {\n          type: 'string'\n        },\n        '@url': {\n          type: 'string'\n        },\n        ApprovedAmount: {\n          type: 'number'\n        },\n        BilledAmount: {\n          type: 'number'\n        },\n        Id: {\n          type: 'integer'\n        },\n        PropertyDesignation: {\n          type: 'string'\n        },\n        RequestSent: {\n          type: 'boolean'\n        },\n        ResidenceAssociationOrganisationNumber: {\n          type: 'string'\n        },\n        TaxReductionAmounts: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/fortnox_tax_reduction_tax_reduction_amount'\n          }\n        },\n        VoucherNumber: {\n          type: 'integer'\n        },\n        VoucherSeries: {\n          type: 'string'\n        },\n        VoucherYear: {\n          type: 'integer'\n        }\n      },\n      required: [        'AskedAmount',\n        'CustomerName',\n        'ReferenceDocumentType',\n        'ReferenceNumber',\n        'SocialSecurityNumber'\n      ]\n    },\n    fortnox_tax_reduction_tax_reduction_amount: {\n      type: 'object',\n      properties: {\n        AskedAmount: {\n          type: 'number'\n        },\n        WorkType: {\n          type: 'string',\n          enum: [            'SOLARCELLS',\n            'STORAGESELFPRODUCEDELECTRICITY',\n            'CHARGINGSTATIONELECTRICVEHICLE'\n          ]\n        }\n      },\n      required: [        'AskedAmount',\n        'WorkType'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      TaxReduction: {
        $ref: '#/$defs/fortnox_tax_reduction',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['TaxReduction'],
    $defs: {
      fortnox_tax_reduction: {
        type: 'object',
        properties: {
          AskedAmount: {
            type: 'number',
          },
          CustomerName: {
            type: 'string',
          },
          ReferenceDocumentType: {
            type: 'string',
            enum: ['OFFER', 'ORDER', 'INVOICE'],
          },
          ReferenceNumber: {
            type: 'string',
          },
          SocialSecurityNumber: {
            type: 'string',
          },
          '@url': {
            type: 'string',
          },
          ApprovedAmount: {
            type: 'number',
          },
          BilledAmount: {
            type: 'number',
          },
          Id: {
            type: 'integer',
          },
          PropertyDesignation: {
            type: 'string',
          },
          RequestSent: {
            type: 'boolean',
          },
          ResidenceAssociationOrganisationNumber: {
            type: 'string',
          },
          TaxReductionAmounts: {
            type: 'array',
            items: {
              $ref: '#/$defs/fortnox_tax_reduction_tax_reduction_amount',
            },
          },
          VoucherNumber: {
            type: 'integer',
          },
          VoucherSeries: {
            type: 'string',
          },
          VoucherYear: {
            type: 'integer',
          },
        },
        required: [
          'AskedAmount',
          'CustomerName',
          'ReferenceDocumentType',
          'ReferenceNumber',
          'SocialSecurityNumber',
        ],
      },
      fortnox_tax_reduction_tax_reduction_amount: {
        type: 'object',
        properties: {
          AskedAmount: {
            type: 'number',
          },
          WorkType: {
            type: 'string',
            enum: ['SOLARCELLS', 'STORAGESELFPRODUCEDELECTRICITY', 'CHARGINGSTATIONELECTRICVEHICLE'],
          },
        },
        required: ['AskedAmount', 'WorkType'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.number3.taxreductions.create(body)));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
