// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.supplierinvoiceaccruals',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/supplierinvoiceaccruals/{SupplierInvoiceNumber}',
  operationId: 'get_44',
};

export const tool: Tool = {
  name: 'retrieve_number_3_supplierinvoiceaccruals',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a single supplier invoice accrual\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/supplier_invoice_accrual_wrap',\n  $defs: {\n    supplier_invoice_accrual_wrap: {\n      type: 'object',\n      properties: {\n        SupplierInvoiceAccrual: {\n          $ref: '#/$defs/fortnox_supplier_invoice_accrual'\n        }\n      },\n      required: [        'SupplierInvoiceAccrual'\n      ]\n    },\n    fortnox_supplier_invoice_accrual: {\n      type: 'object',\n      properties: {\n        AccrualAccount: {\n          type: 'integer'\n        },\n        CostAccount: {\n          type: 'integer'\n        },\n        EndDate: {\n          type: 'string',\n          format: 'date'\n        },\n        Period: {\n          type: 'string',\n          enum: [            'MONTHLY',\n            'BIMONTHLY',\n            'QUARTERLY',\n            'SEMIANNUALLY',\n            'ANNUALLY',\n            '1_MONTHS',\n            '2_MONTHS',\n            '3_MONTHS',\n            '6_MONTHS',\n            '12_MONTHS'\n          ]\n        },\n        StartDate: {\n          type: 'string',\n          format: 'date'\n        },\n        SupplierInvoiceAccrualRows: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/fortnox_supplier_invoice_accrual_supplier_invoice_accrual_rows'\n          }\n        },\n        SupplierInvoiceNumber: {\n          type: 'integer'\n        },\n        Times: {\n          type: 'integer'\n        },\n        Total: {\n          type: 'number'\n        },\n        '@url': {\n          type: 'string'\n        },\n        Description: {\n          type: 'string'\n        },\n        VATIncluded: {\n          type: 'boolean'\n        }\n      },\n      required: [        'AccrualAccount',\n        'CostAccount',\n        'EndDate',\n        'Period',\n        'StartDate',\n        'SupplierInvoiceAccrualRows',\n        'SupplierInvoiceNumber',\n        'Times',\n        'Total'\n      ]\n    },\n    fortnox_supplier_invoice_accrual_supplier_invoice_accrual_rows: {\n      type: 'object',\n      properties: {\n        Account: {\n          type: 'integer'\n        },\n        CostCenter: {\n          type: 'string'\n        },\n        Credit: {\n          type: 'number'\n        },\n        Debit: {\n          type: 'number'\n        },\n        Project: {\n          type: 'string'\n        },\n        TransactionInformation: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      SupplierInvoiceNumber: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['SupplierInvoiceNumber'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { SupplierInvoiceNumber, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.number3.supplierinvoiceaccruals.retrieve(SupplierInvoiceNumber),
      ),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
