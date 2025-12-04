// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.warehouse.purchaseorders_v1.response',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/warehouse/purchaseorders-v1/{id}/response',
  operationId: 'updateResponseState',
};

export const tool: Tool = {
  name: 'create_purchaseorders_v1_warehouse_api_response',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate response state\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/warehouse_purchase_order',\n  $defs: {\n    warehouse_purchase_order: {\n      type: 'object',\n      properties: {\n        currencyCode: {\n          type: 'string'\n        },\n        currencyRate: {\n          type: 'number'\n        },\n        deliveryAddress: {\n          type: 'string'\n        },\n        deliveryCity: {\n          type: 'string'\n        },\n        deliveryName: {\n          type: 'string'\n        },\n        deliveryZipCode: {\n          type: 'string'\n        },\n        orderDate: {\n          type: 'string',\n          format: 'date'\n        },\n        paymentTermsCode: {\n          type: 'string'\n        },\n        supplierNumber: {\n          type: 'string'\n        },\n        id: {\n          type: 'integer'\n        },\n        confirmationEmail: {\n          type: 'string'\n        },\n        costCenterCode: {\n          type: 'string'\n        },\n        currencyUnit: {\n          type: 'integer'\n        },\n        customerId: {\n          type: 'string'\n        },\n        customerName: {\n          type: 'string'\n        },\n        customerNumber: {\n          type: 'string'\n        },\n        deliveryAddress2: {\n          type: 'string'\n        },\n        deliveryCountryCode: {\n          type: 'string'\n        },\n        deliveryDate: {\n          type: 'string',\n          format: 'date'\n        },\n        dropship: {\n          type: 'boolean'\n        },\n        internalReference: {\n          type: 'string'\n        },\n        languageCode: {\n          type: 'string'\n        },\n        manuallyCompleted: {\n          type: 'boolean'\n        },\n        messageToSupplier: {\n          type: 'string'\n        },\n        note: {\n          type: 'string'\n        },\n        orderValue: {\n          type: 'number'\n        },\n        orderValueInSEK: {\n          type: 'number'\n        },\n        ourReference: {\n          type: 'string'\n        },\n        outboundDocumentReference: {\n          $ref: '#/$defs/warehouse_document_reference'\n        },\n        projectId: {\n          type: 'string'\n        },\n        purchaseOrderState: {\n          type: 'string',\n          enum: [            'NOT_SENT',\n            'SENT',\n            'SENT_NOT_REJECTED',\n            'DELAYED',\n            'RECEIVED',\n            'VOIDED',\n            'CURRENT',\n            'ALL'\n          ]\n        },\n        purchaseType: {\n          type: 'string',\n          enum: [            'WAREHOUSE',\n            'DROPSHIP'\n          ]\n        },\n        responseState: {\n          type: 'string',\n          enum: [            'NOT_SENT',\n            'SENT',\n            'ACCEPTED_WITH_REQ_DLV_DATE',\n            'ACCEPTED_WITH_CHANGED_DLV_DATE',\n            'PARTLY_ACCEPTED_WITH_REQ_DLV_DATE',\n            'PARTLY_ACCEPTED_WITH_CHANGED_DLV_DATE',\n            'REJECTED'\n          ]\n        },\n        rows: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              currencyCode: {\n                type: 'string'\n              },\n              itemId: {\n                type: 'string'\n              },\n              orderedQuantity: {\n                type: 'number'\n              },\n              remainingOrderedQuantity: {\n                type: 'number'\n              },\n              id: {\n                type: 'string'\n              },\n              backOrderQuantity: {\n                type: 'number'\n              },\n              costCenterCode: {\n                type: 'string'\n              },\n              isStockItem: {\n                type: 'boolean'\n              },\n              itemDescription: {\n                type: 'string'\n              },\n              itemUnit: {\n                type: 'string'\n              },\n              notes: {\n                type: 'array',\n                items: {\n                  $ref: '#/$defs/warehouse_purchase_order_row_note'\n                }\n              },\n              price: {\n                type: 'number'\n              },\n              projectId: {\n                type: 'string'\n              },\n              purchaseOrderId: {\n                type: 'integer'\n              },\n              receivedQuantity: {\n                type: 'number'\n              },\n              rowNum: {\n                type: 'integer'\n              },\n              stockLocationCode: {\n                type: 'string'\n              },\n              stockLocationId: {\n                type: 'string'\n              },\n              stockLocationName: {\n                type: 'string'\n              },\n              stockPointCode: {\n                type: 'string'\n              },\n              stockPointId: {\n                type: 'string'\n              },\n              stockPointName: {\n                type: 'string'\n              }\n            },\n            required: [              'currencyCode',\n              'itemId',\n              'orderedQuantity',\n              'remainingOrderedQuantity'\n            ]\n          }\n        },\n        stockPointCode: {\n          type: 'string'\n        },\n        stockPointId: {\n          type: 'string'\n        },\n        supplier: {\n          type: 'string'\n        },\n        supplierAddress: {\n          type: 'string'\n        },\n        supplierAddress2: {\n          type: 'string'\n        },\n        supplierCity: {\n          type: 'string'\n        },\n        supplierCountryCode: {\n          type: 'string'\n        },\n        supplierEmail: {\n          type: 'string'\n        },\n        supplierName: {\n          type: 'string'\n        },\n        supplierPostCode: {\n          type: 'string'\n        },\n        totalReceivedQuantity: {\n          type: 'number'\n        },\n        translatedResponseState: {\n          type: 'string'\n        },\n        voided: {\n          type: 'boolean'\n        },\n        yourReference: {\n          type: 'string'\n        }\n      },\n      required: [        'currencyCode',\n        'currencyRate',\n        'deliveryAddress',\n        'deliveryCity',\n        'deliveryName',\n        'deliveryZipCode',\n        'orderDate',\n        'paymentTermsCode',\n        'supplierNumber'\n      ]\n    },\n    warehouse_document_reference: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string'\n        }\n      }\n    },\n    warehouse_purchase_order_row_note: {\n      type: 'object',\n      properties: {\n        note: {\n          type: 'string'\n        },\n        purchaseOrderId: {\n          type: 'integer'\n        },\n        purchaseOrderRowId: {\n          type: 'string'\n        },\n        rowNum: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      responseState: {
        type: 'string',
        enum: [
          'NOT_SENT',
          'SENT',
          'ACCEPTED_WITH_REQ_DLV_DATE',
          'ACCEPTED_WITH_CHANGED_DLV_DATE',
          'PARTLY_ACCEPTED_WITH_REQ_DLV_DATE',
          'PARTLY_ACCEPTED_WITH_CHANGED_DLV_DATE',
          'REJECTED',
        ],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.api.warehouse.purchaseordersV1.response.create(id, body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
