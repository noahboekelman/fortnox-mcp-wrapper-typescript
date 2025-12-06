// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import {
  Metadata,
  asErrorResult,
  asTextContentResult,
} from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.contracts',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/3/contracts/{DocumentNumber}',
  operationId: 'update_9',
};

export const tool: Tool = {
  name: 'update_number_3_contracts',
  description:
    'Note that there are two approaches for updating the rows on a contract.\n\n If RowId is not specified on any row, the rows will be mapped and updated in the order in which they are set in the array. All rows that should remain on the contract needs to be provided.\n\n If RowId is specified on one or more rows the following goes: Corresponding row with that id will be updated. The rows without RowId will be interpreted as new rows. If a row should not be updated but remain on the contract then specify only RowId like { "RowId": 123 }, otherwise it will be removed. Note that new RowIds are generated for all rows every time a contract is updated.\n\n When the InvoiceDiscount value is set on the rows and the Contract, the value set on the Contract takes precedence over the row-level InvoiceDiscount.',
  inputSchema: {
    type: 'object',
    properties: {
      DocumentNumber: {
        type: 'string',
      },
      Contract: {
        $ref: '#/$defs/fortnox_contract',
      },
    },
    required: ['DocumentNumber'],
    $defs: {
      fortnox_contract: {
        type: 'object',
        properties: {
          CustomerNumber: {
            type: 'string',
          },
          InvoiceRows: {
            type: 'array',
            items: {
              $ref: '#/$defs/fortnox_contract_invoice_row',
            },
          },
          PeriodEnd: {
            type: 'string',
            format: 'date',
          },
          '@url': {
            type: 'string',
          },
          '@urlTaxReductionList': {
            type: 'string',
          },
          Active: {
            type: 'boolean',
          },
          AdministrationFee: {
            type: 'number',
          },
          BasisTaxReduction: {
            type: 'number',
          },
          Comments: {
            type: 'string',
          },
          Continuous: {
            type: 'boolean',
          },
          ContractDate: {
            type: 'string',
            format: 'date',
          },
          ContractLength: {
            type: 'integer',
          },
          ContributionPercent: {
            type: 'number',
          },
          ContributionValue: {
            type: 'number',
          },
          CostCenter: {
            type: 'string',
          },
          Currency: {
            type: 'string',
          },
          CustomerName: {
            type: 'string',
          },
          DocumentNumber: {
            type: 'string',
          },
          EmailInformation: {
            $ref: '#/$defs/fortnox_contract_email_information',
          },
          ExternalInvoiceReference1: {
            type: 'string',
          },
          ExternalInvoiceReference2: {
            type: 'string',
          },
          Freight: {
            type: 'number',
          },
          Gross: {
            type: 'number',
          },
          HouseWork: {
            type: 'boolean',
          },
          InvoiceDiscount: {
            type: 'number',
          },
          InvoiceInterval: {
            type: 'integer',
          },
          InvoicesRemaining: {
            type: 'string',
          },
          Language: {
            type: 'string',
            enum: ['SV', 'EN'],
          },
          LastInvoiceDate: {
            type: 'string',
          },
          Net: {
            type: 'number',
          },
          OurReference: {
            type: 'string',
          },
          PeriodStart: {
            type: 'string',
            format: 'date',
          },
          PriceList: {
            type: 'string',
          },
          PrintTemplate: {
            type: 'string',
          },
          Project: {
            type: 'string',
          },
          Remarks: {
            type: 'string',
          },
          RoundOff: {
            type: 'number',
          },
          TaxReduction: {
            type: 'number',
          },
          TaxReductionType: {
            type: 'string',
            enum: ['none', 'rot', 'rut', 'green'],
          },
          TemplateName: {
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
          Total: {
            type: 'number',
          },
          TotalToPay: {
            type: 'number',
          },
          TotalVAT: {
            type: 'number',
          },
          VatIncluded: {
            type: 'boolean',
          },
          WayOfDelivery: {
            type: 'string',
          },
          YourOrderNumber: {
            type: 'string',
          },
          YourReference: {
            type: 'string',
          },
        },
        required: ['CustomerNumber', 'InvoiceRows', 'PeriodEnd'],
      },
      fortnox_contract_invoice_row: {
        type: 'object',
        properties: {
          ArticleNumber: {
            type: 'string',
          },
          DeliveredQuantity: {
            type: 'string',
          },
          AccountNumber: {
            type: 'integer',
          },
          ContributionPercent: {
            type: 'string',
          },
          ContributionValue: {
            type: 'string',
          },
          CostCenter: {
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
            enum: ['AMOUNT', 'PERCENT'],
          },
          HouseWork: {
            type: 'boolean',
          },
          HouseWorkHoursToReport: {
            type: 'integer',
          },
          HouseWorkType: {
            type: 'string',
          },
          Price: {
            type: 'number',
          },
          PriceExcludingVAT: {
            type: 'number',
          },
          Project: {
            type: 'string',
          },
          RowId: {
            type: 'integer',
          },
          Total: {
            type: 'number',
          },
          TotalExcludingVAT: {
            type: 'number',
          },
          Unit: {
            type: 'string',
          },
          VAT: {
            type: 'number',
          },
        },
        required: ['ArticleNumber', 'DeliveredQuantity'],
      },
      fortnox_contract_email_information: {
        type: 'object',
        properties: {
          EmailAddressBCC: {
            type: 'string',
          },
          EmailAddressCC: {
            type: 'string',
          },
          EmailAddressFrom: {
            type: 'string',
          },
          EmailAddressTo: {
            type: 'string',
          },
          EmailBody: {
            type: 'string',
          },
          EmailSubject: {
            type: 'string',
          },
        },
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { DocumentNumber, ...body } = args as any;
  try {
    return asTextContentResult(await client.number3.contracts.update(DocumentNumber, body));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
