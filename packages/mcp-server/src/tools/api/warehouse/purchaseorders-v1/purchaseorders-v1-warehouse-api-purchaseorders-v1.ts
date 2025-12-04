// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.warehouse.purchaseorders_v1',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/warehouse/purchaseorders-v1',
  operationId: 'create_11',
};

export const tool: Tool = {
  name: 'purchaseorders_v1_warehouse_api_purchaseorders_v1',
  description: 'Create Purchase Order',
  inputSchema: {
    type: 'object',
    properties: {
      currencyCode: {
        type: 'string',
      },
      currencyRate: {
        type: 'number',
      },
      deliveryAddress: {
        type: 'string',
      },
      deliveryCity: {
        type: 'string',
      },
      deliveryName: {
        type: 'string',
      },
      deliveryZipCode: {
        type: 'string',
      },
      orderDate: {
        type: 'string',
        format: 'date',
      },
      paymentTermsCode: {
        type: 'string',
      },
      supplierNumber: {
        type: 'string',
      },
      id: {
        type: 'integer',
      },
      confirmationEmail: {
        type: 'string',
      },
      costCenterCode: {
        type: 'string',
      },
      currencyUnit: {
        type: 'integer',
      },
      customerId: {
        type: 'string',
      },
      customerName: {
        type: 'string',
      },
      customerNumber: {
        type: 'string',
      },
      deliveryAddress2: {
        type: 'string',
      },
      deliveryCountryCode: {
        type: 'string',
      },
      deliveryDate: {
        type: 'string',
        format: 'date',
      },
      dropship: {
        type: 'boolean',
      },
      internalReference: {
        type: 'string',
      },
      languageCode: {
        type: 'string',
      },
      manuallyCompleted: {
        type: 'boolean',
      },
      messageToSupplier: {
        type: 'string',
      },
      note: {
        type: 'string',
      },
      orderValue: {
        type: 'number',
      },
      orderValueInSEK: {
        type: 'number',
      },
      ourReference: {
        type: 'string',
      },
      outboundDocumentReference: {
        $ref: '#/$defs/warehouse_document_reference',
      },
      projectId: {
        type: 'string',
      },
      purchaseOrderState: {
        type: 'string',
        enum: ['NOT_SENT', 'SENT', 'SENT_NOT_REJECTED', 'DELAYED', 'RECEIVED', 'VOIDED', 'CURRENT', 'ALL'],
      },
      purchaseType: {
        type: 'string',
        enum: ['WAREHOUSE', 'DROPSHIP'],
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
      rows: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            currencyCode: {
              type: 'string',
            },
            itemId: {
              type: 'string',
            },
            orderedQuantity: {
              type: 'number',
            },
            remainingOrderedQuantity: {
              type: 'number',
            },
            id: {
              type: 'string',
            },
            backOrderQuantity: {
              type: 'number',
            },
            costCenterCode: {
              type: 'string',
            },
            isStockItem: {
              type: 'boolean',
            },
            itemDescription: {
              type: 'string',
            },
            itemUnit: {
              type: 'string',
            },
            notes: {
              type: 'array',
              items: {
                $ref: '#/$defs/warehouse_purchase_order_row_note',
              },
            },
            price: {
              type: 'number',
            },
            projectId: {
              type: 'string',
            },
            purchaseOrderId: {
              type: 'integer',
            },
            receivedQuantity: {
              type: 'number',
            },
            rowNum: {
              type: 'integer',
            },
            stockLocationCode: {
              type: 'string',
            },
            stockLocationId: {
              type: 'string',
            },
            stockLocationName: {
              type: 'string',
            },
            stockPointCode: {
              type: 'string',
            },
            stockPointId: {
              type: 'string',
            },
            stockPointName: {
              type: 'string',
            },
          },
          required: ['currencyCode', 'itemId', 'orderedQuantity', 'remainingOrderedQuantity'],
        },
      },
      stockPointCode: {
        type: 'string',
      },
      stockPointId: {
        type: 'string',
      },
      supplier: {
        type: 'string',
      },
      supplierAddress: {
        type: 'string',
      },
      supplierAddress2: {
        type: 'string',
      },
      supplierCity: {
        type: 'string',
      },
      supplierCountryCode: {
        type: 'string',
      },
      supplierEmail: {
        type: 'string',
      },
      supplierName: {
        type: 'string',
      },
      supplierPostCode: {
        type: 'string',
      },
      totalReceivedQuantity: {
        type: 'number',
      },
      translatedResponseState: {
        type: 'string',
      },
      voided: {
        type: 'boolean',
      },
      yourReference: {
        type: 'string',
      },
    },
    required: [
      'currencyCode',
      'currencyRate',
      'deliveryAddress',
      'deliveryCity',
      'deliveryName',
      'deliveryZipCode',
      'orderDate',
      'paymentTermsCode',
      'supplierNumber',
    ],
    $defs: {
      warehouse_document_reference: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          type: {
            type: 'string',
          },
        },
      },
      warehouse_purchase_order_row_note: {
        type: 'object',
        properties: {
          note: {
            type: 'string',
          },
          purchaseOrderId: {
            type: 'integer',
          },
          purchaseOrderRowId: {
            type: 'string',
          },
          rowNum: {
            type: 'integer',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.api.warehouse.purchaseordersV1.purchaseordersV1(body));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
