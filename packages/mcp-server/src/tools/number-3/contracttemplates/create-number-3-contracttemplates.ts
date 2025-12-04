// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.contracttemplates',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/3/contracttemplates',
  operationId: 'create_12',
};

export const tool: Tool = {
  name: 'create_number_3_contracttemplates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a contract template\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fortnox_contract_template_wrap',\n  $defs: {\n    fortnox_contract_template_wrap: {\n      type: 'object',\n      properties: {\n        ContractTemplate: {\n          $ref: '#/$defs/fortnox_contract_template'\n        }\n      }\n    },\n    fortnox_contract_template: {\n      type: 'object',\n      properties: {\n        TemplateName: {\n          type: 'string'\n        },\n        '@url': {\n          type: 'string'\n        },\n        AdministrationFee: {\n          type: 'number'\n        },\n        Continuous: {\n          type: 'boolean'\n        },\n        ContractLength: {\n          type: 'integer'\n        },\n        Freight: {\n          type: 'number'\n        },\n        InvoiceInterval: {\n          type: 'integer'\n        },\n        InvoiceRows: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/fortnox_contract_template_invoice_row'\n          }\n        },\n        OurReference: {\n          type: 'string'\n        },\n        PrintTemplate: {\n          type: 'string'\n        },\n        Remarks: {\n          type: 'string'\n        },\n        TemplateNumber: {\n          type: 'integer'\n        },\n        TermsOfDelivery: {\n          type: 'string'\n        },\n        TermsOfPayment: {\n          type: 'string'\n        },\n        WayOfDelivery: {\n          type: 'string'\n        }\n      },\n      required: [        'TemplateName'\n      ]\n    },\n    fortnox_contract_template_invoice_row: {\n      type: 'object',\n      properties: {\n        AccountNumber: {\n          type: 'integer'\n        },\n        ArticleNumber: {\n          type: 'string'\n        },\n        CostCenter: {\n          type: 'string'\n        },\n        DeliveredQuantity: {\n          type: 'string'\n        },\n        Description: {\n          type: 'string'\n        },\n        Discount: {\n          type: 'number'\n        },\n        DiscountType: {\n          type: 'string',\n          enum: [            'PERCENT',\n            'AMOUNT'\n          ]\n        },\n        Price: {\n          type: 'number'\n        },\n        Project: {\n          type: 'string'\n        },\n        Unit: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      ContractTemplate: {
        $ref: '#/$defs/fortnox_contract_template',
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
      fortnox_contract_template: {
        type: 'object',
        properties: {
          TemplateName: {
            type: 'string',
          },
          '@url': {
            type: 'string',
          },
          AdministrationFee: {
            type: 'number',
          },
          Continuous: {
            type: 'boolean',
          },
          ContractLength: {
            type: 'integer',
          },
          Freight: {
            type: 'number',
          },
          InvoiceInterval: {
            type: 'integer',
          },
          InvoiceRows: {
            type: 'array',
            items: {
              $ref: '#/$defs/fortnox_contract_template_invoice_row',
            },
          },
          OurReference: {
            type: 'string',
          },
          PrintTemplate: {
            type: 'string',
          },
          Remarks: {
            type: 'string',
          },
          TemplateNumber: {
            type: 'integer',
          },
          TermsOfDelivery: {
            type: 'string',
          },
          TermsOfPayment: {
            type: 'string',
          },
          WayOfDelivery: {
            type: 'string',
          },
        },
        required: ['TemplateName'],
      },
      fortnox_contract_template_invoice_row: {
        type: 'object',
        properties: {
          AccountNumber: {
            type: 'integer',
          },
          ArticleNumber: {
            type: 'string',
          },
          CostCenter: {
            type: 'string',
          },
          DeliveredQuantity: {
            type: 'string',
          },
          Description: {
            type: 'string',
          },
          Discount: {
            type: 'number',
          },
          DiscountType: {
            type: 'string',
            enum: ['PERCENT', 'AMOUNT'],
          },
          Price: {
            type: 'number',
          },
          Project: {
            type: 'string',
          },
          Unit: {
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
      await maybeFilter(jq_filter, await client.number3.contracttemplates.create(body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
