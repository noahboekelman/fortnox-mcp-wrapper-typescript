// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.contracts',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/3/contracts/{DocumentNumber}/finish',
  operationId: 'finish',
};

export const tool: Tool = {
  name: 'finish_number_3_contracts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSet a contract as finished\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fortnox_contract_wrap',\n  $defs: {\n    fortnox_contract_wrap: {\n      type: 'object',\n      properties: {\n        Contract: {\n          $ref: '#/$defs/fortnox_contract'\n        }\n      }\n    },\n    fortnox_contract: {\n      type: 'object',\n      properties: {\n        CustomerNumber: {\n          type: 'string'\n        },\n        InvoiceRows: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/fortnox_contract_invoice_row'\n          }\n        },\n        PeriodEnd: {\n          type: 'string',\n          format: 'date'\n        },\n        '@url': {\n          type: 'string'\n        },\n        '@urlTaxReductionList': {\n          type: 'string'\n        },\n        Active: {\n          type: 'boolean'\n        },\n        AdministrationFee: {\n          type: 'number'\n        },\n        BasisTaxReduction: {\n          type: 'number'\n        },\n        Comments: {\n          type: 'string'\n        },\n        Continuous: {\n          type: 'boolean'\n        },\n        ContractDate: {\n          type: 'string',\n          format: 'date'\n        },\n        ContractLength: {\n          type: 'integer'\n        },\n        ContributionPercent: {\n          type: 'number'\n        },\n        ContributionValue: {\n          type: 'number'\n        },\n        CostCenter: {\n          type: 'string'\n        },\n        Currency: {\n          type: 'string'\n        },\n        CustomerName: {\n          type: 'string'\n        },\n        DocumentNumber: {\n          type: 'string'\n        },\n        EmailInformation: {\n          $ref: '#/$defs/fortnox_contract_email_information'\n        },\n        ExternalInvoiceReference1: {\n          type: 'string'\n        },\n        ExternalInvoiceReference2: {\n          type: 'string'\n        },\n        Freight: {\n          type: 'number'\n        },\n        Gross: {\n          type: 'number'\n        },\n        HouseWork: {\n          type: 'boolean'\n        },\n        InvoiceDiscount: {\n          type: 'number'\n        },\n        InvoiceInterval: {\n          type: 'integer'\n        },\n        InvoicesRemaining: {\n          type: 'string'\n        },\n        Language: {\n          type: 'string',\n          enum: [            'SV',\n            'EN'\n          ]\n        },\n        LastInvoiceDate: {\n          type: 'string'\n        },\n        Net: {\n          type: 'number'\n        },\n        OurReference: {\n          type: 'string'\n        },\n        PeriodStart: {\n          type: 'string',\n          format: 'date'\n        },\n        PriceList: {\n          type: 'string'\n        },\n        PrintTemplate: {\n          type: 'string'\n        },\n        Project: {\n          type: 'string'\n        },\n        Remarks: {\n          type: 'string'\n        },\n        RoundOff: {\n          type: 'number'\n        },\n        TaxReduction: {\n          type: 'number'\n        },\n        TaxReductionType: {\n          type: 'string',\n          enum: [            'none',\n            'rot',\n            'rut',\n            'green'\n          ]\n        },\n        TemplateName: {\n          type: 'string'\n        },\n        TemplateNumber: {\n          type: 'integer'\n        },\n        TermsOfDelivery: {\n          type: 'string'\n        },\n        TermsOfPayment: {\n          type: 'string'\n        },\n        Total: {\n          type: 'number'\n        },\n        TotalToPay: {\n          type: 'number'\n        },\n        TotalVAT: {\n          type: 'number'\n        },\n        VatIncluded: {\n          type: 'boolean'\n        },\n        WayOfDelivery: {\n          type: 'string'\n        },\n        YourOrderNumber: {\n          type: 'string'\n        },\n        YourReference: {\n          type: 'string'\n        }\n      },\n      required: [        'CustomerNumber',\n        'InvoiceRows',\n        'PeriodEnd'\n      ]\n    },\n    fortnox_contract_invoice_row: {\n      type: 'object',\n      properties: {\n        ArticleNumber: {\n          type: 'string'\n        },\n        DeliveredQuantity: {\n          type: 'string'\n        },\n        AccountNumber: {\n          type: 'integer'\n        },\n        ContributionPercent: {\n          type: 'string'\n        },\n        ContributionValue: {\n          type: 'string'\n        },\n        CostCenter: {\n          type: 'string'\n        },\n        Description: {\n          type: 'string'\n        },\n        Discount: {\n          type: 'number'\n        },\n        DiscountType: {\n          type: 'string',\n          enum: [            'AMOUNT',\n            'PERCENT'\n          ]\n        },\n        HouseWork: {\n          type: 'boolean'\n        },\n        HouseWorkHoursToReport: {\n          type: 'integer'\n        },\n        HouseWorkType: {\n          type: 'string'\n        },\n        Price: {\n          type: 'number'\n        },\n        PriceExcludingVAT: {\n          type: 'number'\n        },\n        Project: {\n          type: 'string'\n        },\n        RowId: {\n          type: 'integer'\n        },\n        Total: {\n          type: 'number'\n        },\n        TotalExcludingVAT: {\n          type: 'number'\n        },\n        Unit: {\n          type: 'string'\n        },\n        VAT: {\n          type: 'number'\n        }\n      },\n      required: [        'ArticleNumber',\n        'DeliveredQuantity'\n      ]\n    },\n    fortnox_contract_email_information: {\n      type: 'object',\n      properties: {\n        EmailAddressBCC: {\n          type: 'string'\n        },\n        EmailAddressCC: {\n          type: 'string'\n        },\n        EmailAddressFrom: {\n          type: 'string'\n        },\n        EmailAddressTo: {\n          type: 'string'\n        },\n        EmailBody: {\n          type: 'string'\n        },\n        EmailSubject: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      DocumentNumber: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['DocumentNumber'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { DocumentNumber, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.contracts.finish(DocumentNumber)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
