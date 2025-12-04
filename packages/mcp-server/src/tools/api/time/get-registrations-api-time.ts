// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.time',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/time/registrations-v2',
  operationId: '1_list_2',
};

export const tool: Tool = {
  name: 'get_registrations_api_time',
  description:
    '<p>\n <b>Response property descriptions:</b><br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>id</i></b> - The unique id of the registration.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>userId</i></b> - The user ID who owns the registration.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>workedDate</i></b> - The date for which the registration is created.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>workedHours</i></b> - The time spent, or the time of absence.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>startTime</i></b> - The start of clock time.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>stopTime</i></b> - The end of clock time.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>invoiceText</i></b> - The text to be included in the invoice/order basis which would be used to create an invoice/order.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>note</i></b> - The note on the registration.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>chargeHours</i></b> - The time to be invoiced, or 0 for the absence, or locked for non-invoiceable.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>childId</i></b> - The child ID related to the absence registration of parental leave (FPE), which comes from Payroll application.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>nonInvoiceable</i></b> - If the registration would be ignored for charging or not.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>invoiceBasisId</i></b> - The ID of invoice/order basis which is used for creating an invoice/order.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>documentId</i></b> - The document ID which includes the registration and is created in Invoicing application.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>documentType</i></b> - The document type which could be "invoice" or "order".<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>unitCost</i></b> - The unit cost from the registration owner who takes the work.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>unitPrice</i></b> - The unit price for the service on the registration, which comes in priority from "invoice/order basis", "price group" or "service".\n <p>',
  inputSchema: {
    type: 'object',
    properties: {
      costCenterIds: {
        type: 'array',
        description: 'An array of cost center IDs.\n Example: cc1,cc2,cc3',
        items: {
          type: 'string',
        },
      },
      customerIds: {
        type: 'array',
        description:
          'An array of customer IDs which are being used in database and in one-to-one relation with customer numbers.\n Example: 100,101,102',
        items: {
          type: 'string',
        },
      },
      fromDate: {
        type: 'string',
        description:
          'The start date of the search span, the max of which should be 1 year to the end date ("toDate").\n Example: 2022-11-01',
        format: 'date',
      },
      includeNonInvoiceableChargeHours: {
        type: 'boolean',
        description: 'If the price of the non-invoiceable time/absence registration is included, or not.',
      },
      includeRegistrationsWithoutProject: {
        type: 'boolean',
        description: 'If the time/absence registration without project is included, or not.',
      },
      inInvoiceBasis: {
        type: 'boolean',
        description: 'If the time/absence registration is locked on an invoice basis, or not.',
      },
      internalTime: {
        type: 'boolean',
        description:
          'If the time/absence registration is internal, which is registered on an internal customer, or not.',
      },
      invoiced: {
        type: 'boolean',
        description: 'If a document is created with the time/absence registration, or not.',
      },
      nonInvoiceable: {
        type: 'boolean',
        description: 'If the time/absence registration has been moved to non-invoiceable, or not.',
      },
      projectIds: {
        type: 'array',
        description: 'An array of project IDs.\n Example: p1,p2,p3',
        items: {
          type: 'string',
        },
      },
      regCodes: {
        type: 'array',
        description: 'An array of registration codes.\n Example: TID,SEM,FPE',
        items: {
          type: 'string',
        },
      },
      serviceIds: {
        type: 'array',
        description: 'An array of service IDs.\n Example: s1,s2,s3',
        items: {
          type: 'string',
        },
      },
      toDate: {
        type: 'string',
        description:
          'The end date of the search span, the max of which should be 1 year back to the start date ("fromDate").\n Example: 2022-11-30',
        format: 'date',
      },
      userIds: {
        type: 'array',
        description: 'An array of user IDs that time/absence registrations belong to.\n Example: 1,2,3',
        items: {
          type: 'string',
        },
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.api.time.getRegistrations(body));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
