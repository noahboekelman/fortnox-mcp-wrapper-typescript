// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SublistAPI from './sublist';
import { Sublist, SublistRetrieveParams } from './sublist';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Vouchers extends APIResource {
  sublist: SublistAPI.Sublist = new SublistAPI.Sublist(this._client);

  /**
   * The created voucher will be returned if everything succeeded, if there was any
   * problems an error will be returned. If no query param is used the voucher will
   * be created in the preselected financial year. Go to the financialyears endpoint
   * to read on how to retreive the Financial year id.
   */
  create(
    params: VoucherCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxVoucherWrap> {
    const { financialyear, ...body } = params ?? {};
    return this._client.post('/3/vouchers', {
      query: { financialyear },
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a specific voucher
   */
  retrieve(
    voucherNumber: number,
    params: VoucherRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<FortnoxVoucherWrap> {
    const { VoucherSeries, ...query } = params;
    return this._client.get(path`/3/vouchers/${VoucherSeries}/${voucherNumber}`, { query, ...options });
  }

  /**
   * Note that vouchers have two keys, one for voucher series and one for voucher
   * number. The financial year is also specified for each voucher, this is due to
   * the same voucher series and number is used each year. To get a unique voucher
   * you need the voucher series, the voucher number and the financial year. These
   * properties will always be returned where ever vouchers is used.
   */
  list(
    query: VoucherListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxVoucherListItemList> {
    return this._client.get('/3/vouchers', { query, ...options });
  }
}

export interface FortnoxVoucherListItemList {
  Vouchers?: Array<FortnoxVoucherListItemList.Voucher>;
}

export namespace FortnoxVoucherListItemList {
  export interface Voucher {
    '@url'?: string;

    ApprovalState?: number;

    Comments?: string;

    Description?: string;

    ReferenceNumber?: string;

    ReferenceType?:
      | 'INVOICE'
      | 'SUPPLIERINVOICE'
      | 'INVOICEPAYMENT'
      | 'SUPPLIERPAYMENT'
      | 'MANUAL'
      | 'CASHINVOICE'
      | 'ACCRUAL';

    TransactionDate?: string;

    VoucherNumber?: number;

    VoucherSeries?: string;

    Year?: number;
  }
}

export interface FortnoxVoucherWrap {
  Voucher?: FortnoxVoucherWrap.Voucher;
}

export namespace FortnoxVoucherWrap {
  export interface Voucher {
    Description: string;

    TransactionDate: string;

    VoucherSeries: string;

    Year: number;

    '@url'?: string;

    ApprovalState?: number;

    Comments?: string;

    CostCenter?: string;

    Project?: string;

    ReferenceNumber?: string;

    ReferenceType?:
      | 'INVOICE'
      | 'SUPPLIERINVOICE'
      | 'INVOICEPAYMENT'
      | 'SUPPLIERPAYMENT'
      | 'MANUAL'
      | 'CASHINVOICE'
      | 'ACCRUAL';

    VoucherNumber?: number;

    VoucherRows?: Array<Voucher.VoucherRow>;
  }

  export namespace Voucher {
    export interface VoucherRow {
      Account: number;

      CostCenter?: string;

      Credit?: number;

      Debit?: number;

      Description?: string;

      Project?: string;

      Quantity?: number;

      Removed?: boolean;

      TransactionInformation?: string;
    }
  }
}

export interface VoucherCreateParams {
  /**
   * Query param: Financial year id, used to determine which financial year the
   * voucher is created in
   */
  financialyear?: number;

  /**
   * Body param:
   */
  Voucher?: VoucherCreateParams.Voucher;
}

export namespace VoucherCreateParams {
  export interface Voucher {
    Description: string;

    TransactionDate: string;

    VoucherSeries: string;

    Year: number;

    '@url'?: string;

    ApprovalState?: number;

    Comments?: string;

    CostCenter?: string;

    Project?: string;

    ReferenceNumber?: string;

    ReferenceType?:
      | 'INVOICE'
      | 'SUPPLIERINVOICE'
      | 'INVOICEPAYMENT'
      | 'SUPPLIERPAYMENT'
      | 'MANUAL'
      | 'CASHINVOICE'
      | 'ACCRUAL';

    VoucherNumber?: number;

    VoucherRows?: Array<Voucher.VoucherRow>;
  }

  export namespace Voucher {
    export interface VoucherRow {
      Account: number;

      CostCenter?: string;

      Credit?: number;

      Debit?: number;

      Description?: string;

      Project?: string;

      Quantity?: number;

      Removed?: boolean;

      TransactionInformation?: string;
    }
  }
}

export interface VoucherRetrieveParams {
  /**
   * Path param: identifies the voucher series
   */
  VoucherSeries: string;

  /**
   * Query param: filter on financial year
   */
  financialyear?: number;
}

export interface VoucherListParams {
  /**
   * filter on financial year
   */
  financialyear?: number;
}

Vouchers.Sublist = Sublist;

export declare namespace Vouchers {
  export {
    type FortnoxVoucherListItemList as FortnoxVoucherListItemList,
    type FortnoxVoucherWrap as FortnoxVoucherWrap,
    type VoucherCreateParams as VoucherCreateParams,
    type VoucherRetrieveParams as VoucherRetrieveParams,
    type VoucherListParams as VoucherListParams,
  };

  export { Sublist as Sublist, type SublistRetrieveParams as SublistRetrieveParams };
}
