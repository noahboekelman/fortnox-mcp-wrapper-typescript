// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Predefinedaccounts extends APIResource {
  /**
   * Retrieve information for a specific account type
   */
  retrieve(name: string, options?: RequestOptions): APIPromise<PredefinedAccountWrap> {
    return this._client.get(path`/3/predefinedaccounts/${name}`, options);
  }

  /**
   * An endpoint for updating a Predefined Account. Predefined Accounts are
   * identified by their <em>name</em>-field, and as such must be unique. Some
   * Predefined Accounts distinguish between Goods and Services. In this case, the
   * former retains the original name whereas the latter ends with a 2. Such as
   * <em>SALES</em> and <em>SALES2</em>. Accounts are chosen from the Account
   * Registry, and if you have EasyVat enabled then the new EasyVat Predefined
   * Accounts (<em>SALES_25_SE</em>, etc.) have certain restrictions on the accounts
   * that can be selected. Refer to the table below.
   *
   *  <table>
   *      <caption>Account restrictions when EasyVat has been enabled.</caption>
   *      <tr>
   *          <th>Name</th>
   *          <th>VAT Code</th>
   *          <th>Restrictions</th>
   *      </tr>
   *      <tr>
   *          <td>SALES_25_SE</td>
   *          <td>MP1</td>
   *          <td>Must have a compatible VAT Code.</td>
   *      </tr>
   *      <tr>
   *          <td>SALES_12_SE</td>
   *          <td>MP2</td>
   *          <td>Must have a compatible VAT Code.</td>
   *      </tr>
   *      <tr>
   *          <td>SALES_6_SE</td>
   *          <td>MP3</td>
   *          <td>Must have a compatible VAT Code.</td>
   *      </tr>
   *      <tr>
   *          <td>SALES_0_SE</td>
   *          <td>MF</td>
   *          <td>Must have a compatible VAT Code.</td>
   *      </tr>
   *  </table>
   *
   * This endpoint can produce errors, some of which may only be relevant for
   * EasyVat. Refer to the table below.
   *
   *  <table>
   *      <caption>Errors that can be raised by this endpoint.</caption>
   *      <tr>
   *          <th>Error Code</th>
   *          <th>HTTP Code</th>
   *          <th>Description</th>
   *          <th>Solution</th>
   *      </tr>
   *      <tr>
   *          <td>2001265</td>
   *          <td>400</td>
   *          <td>The provided account is invalid. It either has not been provided, does not exist, or is inactive.</td>
   *          <td>Verify that an account has been provided and that it exists and is active.</td>
   *      </tr>
   *      <tr>
   *          <td>2002462</td>
   *          <td>400</td>
   *          <td>The account is not in a valid format.</td>
   *          <td>Verify that the format of the account is correct. It has to consist of 4 digits.</td>
   *      </tr>
   *      <tr>
   *          <td>2000729</td>
   *          <td>400</td>
   *          <td>A Predefined Account has not been provided.</td>
   *          <td>Verify that a valid Predefined Account has been provided as a PATH-parameter.</td>
   *      </tr>
   *      <tr>
   *          <td>2004052</td>
   *          <td>400</td>
   *          <td>The provided account has an incompatible VAT Code. Only applies if EasyVat has been enabled.</td>
   *          <td>Verify that the provided account has a VAT Code that is compatible with the selected Predefined Account. Refer to the table above for more information about compatibility.</td>
   *      </tr>
   *  </table>
   *
   * If you have activated EasyVat, you can read more about how to use the new
   * Predefined Accounts with your documents in their respective api documentation.
   */
  update(
    name: string,
    body: PredefinedaccountUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PredefinedAccountWrap> {
    return this._client.put(path`/3/predefinedaccounts/${name}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a list of all predefined accounts
   */
  list(options?: RequestOptions): APIPromise<PredefinedaccountListResponse> {
    return this._client.get('/3/predefinedaccounts', options);
  }
}

export interface PredefinedAccount {
  Account: number;

  '@url'?: string;

  Name?: string;
}

export interface PredefinedAccountWrap {
  PreDefinedAccount: PredefinedAccount;
}

export interface PredefinedaccountListResponse {
  PreDefinedAccounts?: Array<PredefinedAccount>;
}

export interface PredefinedaccountUpdateParams {
  PreDefinedAccount: PredefinedAccount;
}

export declare namespace Predefinedaccounts {
  export {
    type PredefinedAccount as PredefinedAccount,
    type PredefinedAccountWrap as PredefinedAccountWrap,
    type PredefinedaccountListResponse as PredefinedaccountListResponse,
    type PredefinedaccountUpdateParams as PredefinedaccountUpdateParams,
  };
}
