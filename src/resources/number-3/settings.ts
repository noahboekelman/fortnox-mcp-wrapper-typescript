// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Settings extends APIResource {
  /**
   * Retrieve the company settings
   */
  retrieveCompany(options?: RequestOptions): APIPromise<SettingRetrieveCompanyResponse> {
    return this._client.get('/3/settings/company', options);
  }

  /**
   * If no date is returned, no period is locked.
   */
  retrieveLockedPeriod(options?: RequestOptions): APIPromise<SettingRetrieveLockedPeriodResponse> {
    return this._client.get('/3/settings/lockedperiod', options);
  }
}

export interface SettingRetrieveCompanyResponse {
  CompanySettings?: SettingRetrieveCompanyResponse.CompanySettings;
}

export namespace SettingRetrieveCompanyResponse {
  export interface CompanySettings {
    Address?: string;

    BG?: string;

    BIC?: string;

    BranchCode?: string;

    City?: string;

    ContactFirstName?: string;

    ContactLastName?: string;

    Country?: string;

    CountryCode?: string;

    DatabaseNumber?: string;

    Domicile?: string;

    Email?: string;

    Fax?: string;

    IBAN?: string;

    Name?: string;

    OrganizationNumber?: string;

    PG?: string;

    Phone1?: string;

    Phone2?: string;

    TaxEnabled?: boolean;

    VATNumber?: string;

    VisitAddress?: string;

    VisitCity?: string;

    VisitCountry?: string;

    VisitCountryCode?: string;

    VisitName?: string;

    VisitZipCode?: string;

    WWW?: string;

    ZipCode?: string;
  }
}

export interface SettingRetrieveLockedPeriodResponse {
  LockedPeriod?: SettingRetrieveLockedPeriodResponse.LockedPeriod;
}

export namespace SettingRetrieveLockedPeriodResponse {
  export interface LockedPeriod {
    EndDate?: string;
  }
}

export declare namespace Settings {
  export {
    type SettingRetrieveCompanyResponse as SettingRetrieveCompanyResponse,
    type SettingRetrieveLockedPeriodResponse as SettingRetrieveLockedPeriodResponse,
  };
}
