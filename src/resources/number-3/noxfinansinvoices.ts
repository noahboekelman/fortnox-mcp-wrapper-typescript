// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Noxfinansinvoices extends APIResource {
  /**
   * <p>
   *  Retrieves the status and balance of an invoice sent to Fortnox Finans.
   *  You need to supply the invoice number in Fortox to retrieve the invoice.
   *  <p>
   *  <b>Note that</b> invoices sent with the old &quot;Noxbox&quot; platform will not have the &quot;ServiceName&quot;
   *  property in the response. This new property is added to the response if the invoice is
   *  sent with the new finance service.
   *  <p>
   *  Response explanation for <b>Service</b> and <b>ServiceName</b>
   *  <p>
   *  <b>Service:</b>
   *  <ul>
   *      <li><b>LEDGERBASE</b>: if the invoice is sent by using the old &quot;Noxbox&quot; platform, or the new finance service with the subtypes &quot;Service Full&quot; or &quot;Service Light&quot;. These services are explained above in the &quot;Fortnox Finans services&quot; section</li>
   *      <li><b>REMINDER</b>: If the invoice is sent by the new finance service, with the service Reminder Service</li>
   *  </ul>
   *  <p>
   *  <b>ServiceName</b> (only provided for <u>new finance service</u> invoices):
   *  <ul>
   *      <li><b>SERVICE_FULL</b>: Ledgerbase service <u>with</u> automatic reminders is used</li>
   *      <li><b>SERVICE_LIGHT</b>: Ledgerbase service <u>without</u> automatic reminders is used.</li>
   *      <li><b>REMINDER_SERVICE</b>: Reminder service is used</li>
   *  </ul>
   */
  retrieve(number: string, options?: RequestOptions): APIPromise<InvoiceResponseWrap> {
    return this._client.get(path`/3/noxfinansinvoices/${number}`, options);
  }

  /**
   * <p>
   *  Pauses an invoice for up to 60 days. Pause means that Fortnox Finans reminder process will stop for the invoice. All invoices which have the status OPEN can be paused.
   *  <p>
   *  <b>Note:</b> this action is <b>not</b> available for invoices sent by the old Noxbox platform
   *  <p>
   *  <i>Parameters in the body:</i>
   *  <ul>
   *      <li><b>PausedUntilDate</b>: the invoice will be paused to and including this date.</li>
   *  </ul>
   *  <p>
   */
  pause(
    number: string,
    body: NoxfinansinvoicePauseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoiceResponseWrap> {
    return this._client.put(path`/3/noxfinansinvoices/${number}/pause`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * <p>
   *  If a customer has paid some or all of the capital on an invoice directly to the client, this can be reported
   *  for bookkeeping purposes and reported to Fortnox Finans to actually deduct the paid amount from the invoice.
   *  <p>
   *  <b>Note:</b> this action is <b>not</b> available for invoices sent by the old Noxbox platform
   *  <p>
   *  <i>Parameters in the body:</i>
   *  <ul>
   *      <li><b>PaymentAmount</b>: a decimal field with the amount to report.</li>
   *      <li><b>PaymentMethodCode</b>: a string with the method code (e.g. BG, PG or other). Could be omitted if BookkeepPaymentInFortnox is false.</li>
   *      <li><b>PaymentMethodAccount</b>: an integer with the account number to bookkeep the payment on (e.g. 1920 or other). Could be omitted if BookkeepPaymentInFortnox is false.</li>
   *      <li><b>ClientTakesFees</b>: a boolean indicating if the client should take the customer fees or not.</li>
   *      <li><b>BookkeepPaymentInFortnox</b>: a boolean indicating if the payment should be bookkept in Fortnox or not. Usually the payment should be bookkept.</li>
   *      <li><b>ReportToFinance</b>: a boolean indicating if the payment should be reported to Fortnox Finans or not. Usually the payment should be reported.</li>
   *  </ul>
   *  <p>
   */
  reportPayment(
    number: string,
    body: NoxfinansinvoiceReportPaymentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoiceResponseWrap> {
    return this._client.put(path`/3/noxfinansinvoices/${number}/report-payment`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * <p>
   *  When sending an invoice with Fortnox Finans you will get the invoice status returned if everything succeeded,
   *  if there were any problems, an error will be returned.
   *  <p>
   *  Please note that it can take 1 min to several hours before you will get back status, OCR number and link to
   *  PDF document, meanwhile the invoice will have status UNKNOWN or NOT_AUTHORIZED.
   *  <p>
   *  Fortnox Finans is currently only accepting invoices in SEK
   *  <p>
   *  <i>Parameters in the body:</i>
   *  <ul>
   *      <li><b>InvoiceNumber</b>: the invoice number for the invoice which should be sent with Fortnox Finans</li>
   *      <li><b>SendMethod</b>: how to send the invoice; EMAIL, LETTER, EINVOICE or NONE</li>
   *      <li><b>Service</b>: which service to use; LEDGERBASE or REMINDER</li>
   *  </ul>
   *  <p>
   */
  send(
    body: NoxfinansinvoiceSendParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoiceResponseWrap> {
    return this._client.post('/3/noxfinansinvoices', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * <p>
   *  Removes the invoice from Fortnox Finans process. The invoice can still be handled manually, but no further automatic process will be applied
   *  <p>
   *  <b>Note:</b> this action is <b>not</b> available for invoices sent by the old Noxbox platform
   */
  stop(number: string, options?: RequestOptions): APIPromise<InvoiceResponseWrap> {
    return this._client.put(path`/3/noxfinansinvoices/${number}/stop`, options);
  }

  /**
   * <p>
   *  If fees have been added to an invoice, e.g. reminder fees, the client can choose to pay those fees instead of letting the customer pay.
   *  <p>
   *  <b>Note:</b> this action is <b>not</b> available for invoices sent by the old Noxbox platform
   */
  takeFees(number: string, options?: RequestOptions): APIPromise<InvoiceResponseWrap> {
    return this._client.put(path`/3/noxfinansinvoices/${number}/take-fees`, options);
  }

  /**
   * <p>
   *  Unpauses a paused invoice. If the invoice is manually paused, then this action will remove the pause status immediately. Invoices which are paused by the system cannot be unpaused.
   *  <p>
   *  <b>Note:</b> this action is <b>not</b> available for invoices sent by the old Noxbox platform
   */
  unpause(number: string, options?: RequestOptions): APIPromise<InvoiceResponseWrap> {
    return this._client.put(path`/3/noxfinansinvoices/${number}/unpause`, options);
  }
}

export interface InvoiceResponseWrap {
  NoxFinansInvoice?: InvoiceResponseWrap.NoxFinansInvoice;
}

export namespace InvoiceResponseWrap {
  export interface NoxFinansInvoice {
    '@url': string;

    BalanceIncludeFees: number;

    BalanceIncludeFeesCurrency: number;

    CurrentCapitalBalance: number;

    CurrentCapitalBalanceCurrency: number;

    InvoiceNumber: number;

    NextEvent: string;

    NextEventDate: string;

    OCRNumber: string;

    Service: string;

    ServiceName: string;

    Status: string;

    InvoiceDocumentURL?: string;
  }
}

export interface NoxfinansinvoicePauseParams {
  NoxFinansInvoice?: NoxfinansinvoicePauseParams.NoxFinansInvoice;
}

export namespace NoxfinansinvoicePauseParams {
  export interface NoxFinansInvoice {
    PausedUntilDate: string;
  }
}

export interface NoxfinansinvoiceReportPaymentParams {
  NoxFinansInvoice?: NoxfinansinvoiceReportPaymentParams.NoxFinansInvoice;
}

export namespace NoxfinansinvoiceReportPaymentParams {
  export interface NoxFinansInvoice {
    BookkeepPaymentInFortnox: boolean;

    ClientTakesFees: boolean;

    PaymentAmount: number;

    PaymentMethodAccount: number;

    PaymentMethodCode: string;

    ReportToFinance: boolean;
  }
}

export interface NoxfinansinvoiceSendParams {
  NoxFinansInvoice?: NoxfinansinvoiceSendParams.NoxFinansInvoice;
}

export namespace NoxfinansinvoiceSendParams {
  export interface NoxFinansInvoice {
    InvoiceNumber: string;

    SendMethod: string;

    Service: string;
  }
}

export declare namespace Noxfinansinvoices {
  export {
    type InvoiceResponseWrap as InvoiceResponseWrap,
    type NoxfinansinvoicePauseParams as NoxfinansinvoicePauseParams,
    type NoxfinansinvoiceReportPaymentParams as NoxfinansinvoiceReportPaymentParams,
    type NoxfinansinvoiceSendParams as NoxfinansinvoiceSendParams,
  };
}
