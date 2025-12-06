// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import {
  Metadata,
  asErrorResult,
  asTextContentResult,
} from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.time',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/time/articles-v1',
  operationId: 'list_8',
};

export const tool: Tool = {
  name: 'get_articles_api_time',
  description:
    '<p>\n <b>Response property descriptions:</b><br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>id</i></b> - The unique id of a basic common combination of article registrations. (The basic common combination means "user/purchase date/customer/project/cost center", which leads to a dialog with several article registrations.)<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>purchaseDate</i></b> - The date on which the article is purchased or registered for charging.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>ownerId</i></b> - The user ID who creates the basic common combination.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>version</i></b> - The version of the basic common combination (article dialog) being updated, which is used for handling the concurrency issue.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>registrationType</i></b> - It is always "ARTICLE" for article list endpoint.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b>Sub-Class - ArticleRegistration:</b><br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>id</i></b> - The unique id of an article registration.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>registrationId</i></b> - The id of the basic common combination.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>orderIndex</i></b> - the order index for the article registration in regard of the common combination.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>ownerId</i></b> - The user ID who owns the article registration.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>totalQuantity</i></b> - The quantity of the article.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>unitPrice</i></b> - The unit price connected to the article registration, which might be locked on an invoice/order basis or for non-invoiceable.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>unitCost</i></b> - The unit cost connected to the article registration, which might be locked on an invoice/order basis.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>invoiceBasisId</i></b> - The ID of invoice/order basis which is used for creating an invoice/order.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>nonInvoiceable</i></b> - If the article registration would be ignored for charging or not.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>note</i></b> - The note on the article registration.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>documentId</i></b> - The document ID which includes the article registration and is created in Invoicing application.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>documentType</i></b> - The document type which could be "invoice" or "order".\n </p>',
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
      includeNonInvoiceablePrice: {
        type: 'boolean',
        description: 'If the price of the non-invoiceable article registration is included, or not.',
      },
      includeRegistrationsWithoutProject: {
        type: 'boolean',
        description: 'If the article registration without project is included, or not.',
      },
      inInvoiceBasis: {
        type: 'boolean',
        description: 'If the article registration is locked on an invoice basis, or not.',
      },
      internalArticles: {
        type: 'boolean',
        description:
          'If the article registration is internal, which is registered on an internal customer, or not.',
      },
      invoiced: {
        type: 'boolean',
        description: 'If a document is created with the article registration, or not.',
      },
      itemIds: {
        type: 'array',
        description: 'An array of article IDs.\n Example: s1,s2,s3',
        items: {
          type: 'string',
        },
      },
      nonInvoiceable: {
        type: 'boolean',
        description: 'If the article registration has been moved to non-invoiceable, or not.',
      },
      ownerIds: {
        type: 'array',
        description: 'An array of user ids who own the article registrations.\n Example: 1,2,3',
        items: {
          type: 'string',
        },
      },
      projectIds: {
        type: 'array',
        description: 'An array of project IDs.\n Example: p1,p2,p3',
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
    return asTextContentResult(await client.api.time.getArticles(body));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
