// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EmployeesAPI from './employees';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Employees extends APIResource {
  /**
   * EmployeeId is optional. If not supplied the program will generate a unique id.
   *
   * VacationDaysSaved and all registered and pending vacationdays are read only.
   *
   * Only one of DatedSchedules and ScheduleId may be supplied. If DatedSchedules are
   * supplied it must have one and only one record where FirstDay = '1970-01-01'. All
   * FirstDay values must greater or equal to '1970-01-01' and unique.
   *
   * If DatedWages is supplied neither MonthlySalary nor HourlyPay may be supplied.
   * If MonthlySalary or HourlyPay are supplied, DatedWages may not be supplied. If
   * DatedWages are supplied it must have one and only one record where FirstDay =
   * '1970-01-01'. All FirstDay values must greater or equal to '1970-01-01' and
   * unique.
   */
  create(
    body: EmployeeCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmployeeWrap> {
    return this._client.post('/3/employees', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * ScheduleId, MonthlySalary and HourlyPay reflect current values, all ScheduleIds
   * are returned in DatedSchedules and all MonthlySalary and HourlyPay pairs are
   * returned in DatedWages.
   */
  retrieve(employeeID: string, options?: RequestOptions): APIPromise<EmployeeWrap> {
    return this._client.get(path`/3/employees/${employeeID}`, options);
  }

  /**
   * Only one of DatedSchedules and ScheduleId may be supplied. If DatedSchedules are
   * supplied it must have one and only one record where FirstDay = '1970-01-01'. All
   * FirstDay values must greater or equal to '1970-01-01' and unique.
   *
   * VacationDaysSaved and all registered and pending vacationdays are read only.
   *
   * If DatedWages is supplied neither MonthlySalary nor HourlyPay may be supplied.
   * If MonthlySalary or HourlyPay are supplied, DatedWages may not be supplied. If
   * DatedWages are supplied it must have one and only one record where FirstDay =
   * '1970-01-01'. All FirstDay values must greater or equal to '1970-01-01' and
   * unique.
   */
  update(
    employeeID: string,
    body: EmployeeUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmployeeWrap> {
    return this._client.put(path`/3/employees/${employeeID}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * ScheduleId, MonthlySalary and HourlyPay reflect current values, all ScheduleIds
   * are returned in DatedSchedules and all MonthlySalary and HourlyPay pairs are
   * returned in DatedWages.
   */
  list(options?: RequestOptions): APIPromise<EmployeeListResponse> {
    return this._client.get('/3/employees', options);
  }
}

export interface DatedSchedule {
  EmployeeId: string;

  FirstDay: string;

  ScheduleId?: string;
}

export interface DatedWage {
  EmployeeId: string;

  FirstDay: string;

  HourlyPay?: string;

  MonthlySalary?: string;
}

export interface EmployeeCategory {
  Name?: string;

  value?: string;
}

export interface EmployeeChild {
  ApprovedDays: number;

  Child: string;

  EmployeeId: string;

  IngoingWithdrawnDays: number;

  Id?: string;

  WithdrawnDays?: number;
}

export interface EmployeeWrap {
  Employee?: FortnoxEmployee;
}

export interface FortnoxEmployee {
  Email: string;

  FirstName: string;

  LastName: string;

  AbsenceHoursNonVacationBased?: number;

  AbsenceHoursVacationBased?: number;

  AbsenceWorkdaysNonVacationBased?: number;

  AbsenceWorkdaysVacationBased?: number;

  Address1?: string;

  Address2?: string;

  ATFValue?: number;

  ATKValue?: number;

  AutoNonRecurringTax?: boolean;

  AverageHourlyWage?: string;

  AverageWeeklyHours?: string;

  BankAccountNo?: string;

  City?: string;

  ClearingNo?: string;

  CostCenter?: string;

  Country?: string;

  CurrentCompBalance?: number;

  CurrentFlexBalance?: number;

  DatedSchedules?: Array<DatedSchedule>;

  DatedWages?: Array<DatedWage>;

  EmployedTo?: string;

  EmployeeCategories?: Array<EmployeeCategory>;

  EmployeeChildren?: Array<EmployeeChild>;

  EmployeeId?: string;

  EmploymentDate?: string;

  EmploymentForm?: 'TV' | 'PRO' | 'TID' | 'SVT' | 'VIK' | 'PRJ' | 'PRA' | 'FER' | 'SES' | 'NEJ';

  ForaType?:
    | 'A'
    | 'A51'
    | 'A52'
    | 'A53'
    | 'A54'
    | 'A55'
    | 'A56'
    | 'A57'
    | 'A58'
    | 'A59'
    | 'A60'
    | 'A61'
    | 'A62'
    | 'A63'
    | 'A64'
    | 'A65'
    | 'A66'
    | 'A67'
    | 'A68'
    | 'A69'
    | 'A70'
    | 'A71'
    | 'A72'
    | 'A73'
    | 'A74'
    | 'A75'
    | 'A76'
    | 'A77'
    | 'A78'
    | 'A79'
    | 'A80'
    | 'A81'
    | 'A82'
    | 'A83'
    | 'A84'
    | 'A85'
    | 'A86'
    | 'A3'
    | 'A91'
    | 'A92'
    | 'A93'
    | 'A11'
    | 'A12'
    | 'A13'
    | 'A14'
    | 'A15'
    | 'A16'
    | 'A17'
    | 'A18'
    | 'A19'
    | 'A20'
    | 'A21'
    | 'A22'
    | 'A23'
    | 'A24'
    | 'A25'
    | 'A26'
    | 'A27'
    | 'A28'
    | 'A29'
    | 'A30'
    | 'A41'
    | 'A42'
    | 'A43'
    | 'A44'
    | 'A45'
    | 'A46'
    | 'A47'
    | 'A48'
    | 'T'
    | 'T6'
    | '-';

  FullName?: string;

  FullTimeEquivalent?: number;

  HourlyPay?: string;

  Inactive?: boolean;

  InitialComp?: number;

  InitialFlex?: number;

  JobTitle?: string;

  MonthlySalary?: string;

  NonRecurringTax?: string;

  NonVacationBasedCalendarDaysPartial?: number;

  NonVacationBasedCalendarDaysWhole?: number;

  OpeningSalaries?: Array<OpeningSalary>;

  PayslipType?: 'pdf' | 'digital' | 'kivra';

  PersonalIdentityNumber?: string;

  PersonelType?: 'TJM' | 'ARB';

  Phone1?: string;

  Phone2?: string;

  PostCode?: string;

  PreliminaryTaxDeducted?: number;

  Project?: string;

  SalaryForm?: 'MAN' | 'TIM';

  ScheduleId?: string;

  TaxAllowance?: 'HUV' | 'EXT' | 'TMP' | 'STU' | 'EJ' | '???';

  TaxColumn?: number;

  TaxTable?: string;

  VacationBasedAttendanceDays?: number;

  VacationBasedAttendanceHours?: number;

  VacationBasedCalendarDaysWhole?: number;

  VacationBasedSalaryTotal?: number;

  VacationBasedSalaryVariableAddition?: number;

  VacationBasedSalaryWorkedTime?: number;

  VacationCalculationAdvanceVacationDebt?: number;

  VacationCalculationIncludeInCalculation?: boolean;

  VacationCalculationSameWagePercent?: boolean;

  VacationCalculationSoleCustody?: boolean;

  VacationCalculationSumOnlyNoDays?: boolean;

  VacationCalculationTotalVacationSalarySum?: number;

  VacationCalculationVacationEntitlement?: number;

  VacationCalculationVariableAdditionSum?: number;

  VacationDaysPaid?: number;

  VacationDaysPendingPaid?: number;

  VacationDaysPendingPrepaid?: number;

  VacationDaysPendingSaved?: number;

  VacationDaysPendingSavedYear1?: number;

  VacationDaysPendingSavedYear2?: number;

  VacationDaysPendingSavedYear3?: number;

  VacationDaysPendingSavedYear4?: number;

  VacationDaysPendingSavedYear5?: number;

  VacationDaysPendingSavedYear6Plus?: number;

  VacationDaysPendingUnpaid?: number;

  VacationDaysPrepaid?: number;

  VacationDaysRegisteredPaid?: number;

  VacationDaysRegisteredPrepaid?: number;

  VacationDaysRegisteredSaved?: number;

  VacationDaysRegisteredSavedYear1?: number;

  VacationDaysRegisteredSavedYear2?: number;

  VacationDaysRegisteredSavedYear3?: number;

  VacationDaysRegisteredSavedYear4?: number;

  VacationDaysRegisteredSavedYear5?: number;

  VacationDaysRegisteredSavedYear6Plus?: number;

  VacationDaysRegisteredUnpaid?: number;

  VacationDaysSaved?: number;

  VacationDaysSavedEmploymentRateYear1?: number;

  VacationDaysSavedEmploymentRateYear2?: number;

  VacationDaysSavedEmploymentRateYear3?: number;

  VacationDaysSavedEmploymentRateYear4?: number;

  VacationDaysSavedEmploymentRateYear5?: number;

  VacationDaysSavedEmploymentRateYear6Plus?: number;

  VacationDaysSavedYear1?: number;

  VacationDaysSavedYear2?: number;

  VacationDaysSavedYear3?: number;

  VacationDaysSavedYear4?: number;

  VacationDaysSavedYear5?: number;

  VacationDaysSavedYear6Plus?: number;

  VacationDaysUnpaid?: number;

  WorkingTimeEnumeration?: string;
}

export interface OpeningSalary {
  EmployeeId: string;

  SalaryTypeNumber: string;

  Amount?: number;

  Period?: string;

  ProductGroup?: string;

  Quantity?: number;

  QuantityUnit?: string;

  RowId?: number;

  SalaryTypeName?: string;

  SortCode?: string;

  TextRow?: string;

  Total?: number;

  VAT?: number;
}

export interface EmployeeListResponse {
  Employees?: Array<EmployeeListResponse.Employee>;
}

export namespace EmployeeListResponse {
  export interface Employee {
    Email: string;

    FirstName: string;

    LastName: string;

    '@url'?: string;

    AbsenceHoursNonVacationBased?: number;

    AbsenceHoursVacationBased?: number;

    AbsenceWorkdaysNonVacationBased?: number;

    AbsenceWorkdaysVacationBased?: number;

    Address1?: string;

    Address2?: string;

    ATFValue?: number;

    ATKValue?: number;

    AutoNonRecurringTax?: boolean;

    AverageHourlyWage?: string;

    AverageWeeklyHours?: string;

    BankAccountNo?: string;

    City?: string;

    ClearingNo?: string;

    CostCenter?: string;

    Country?: string;

    CurrentCompBalance?: number;

    CurrentFlexBalance?: number;

    DatedSchedules?: Array<EmployeesAPI.DatedSchedule>;

    DatedWages?: Array<EmployeesAPI.DatedWage>;

    EmployedTo?: string;

    EmployeeCategories?: Array<EmployeesAPI.EmployeeCategory>;

    EmployeeChildren?: Array<EmployeesAPI.EmployeeChild>;

    EmployeeId?: string;

    EmploymentDate?: string;

    EmploymentForm?: 'TV' | 'PRO' | 'TID' | 'SVT' | 'VIK' | 'PRJ' | 'PRA' | 'FER' | 'SES' | 'NEJ';

    ForaType?:
      | 'A'
      | 'A51'
      | 'A52'
      | 'A53'
      | 'A54'
      | 'A55'
      | 'A56'
      | 'A57'
      | 'A58'
      | 'A59'
      | 'A60'
      | 'A61'
      | 'A62'
      | 'A63'
      | 'A64'
      | 'A65'
      | 'A66'
      | 'A67'
      | 'A68'
      | 'A69'
      | 'A70'
      | 'A71'
      | 'A72'
      | 'A73'
      | 'A74'
      | 'A75'
      | 'A76'
      | 'A77'
      | 'A78'
      | 'A79'
      | 'A80'
      | 'A81'
      | 'A82'
      | 'A83'
      | 'A84'
      | 'A85'
      | 'A86'
      | 'A3'
      | 'A91'
      | 'A92'
      | 'A93'
      | 'A11'
      | 'A12'
      | 'A13'
      | 'A14'
      | 'A15'
      | 'A16'
      | 'A17'
      | 'A18'
      | 'A19'
      | 'A20'
      | 'A21'
      | 'A22'
      | 'A23'
      | 'A24'
      | 'A25'
      | 'A26'
      | 'A27'
      | 'A28'
      | 'A29'
      | 'A30'
      | 'A41'
      | 'A42'
      | 'A43'
      | 'A44'
      | 'A45'
      | 'A46'
      | 'A47'
      | 'A48'
      | 'T'
      | 'T6'
      | '-';

    FullName?: string;

    FullTimeEquivalent?: number;

    HourlyPay?: string;

    Inactive?: boolean;

    InitialComp?: number;

    InitialFlex?: number;

    JobTitle?: string;

    MonthlySalary?: string;

    NonRecurringTax?: string;

    NonVacationBasedCalendarDaysPartial?: number;

    NonVacationBasedCalendarDaysWhole?: number;

    OpeningSalaries?: Array<EmployeesAPI.OpeningSalary>;

    PayslipType?: 'pdf' | 'digital' | 'kivra';

    PersonalIdentityNumber?: string;

    PersonelType?: 'TJM' | 'ARB';

    Phone1?: string;

    Phone2?: string;

    PostCode?: string;

    PreliminaryTaxDeducted?: number;

    Project?: string;

    SalaryForm?: 'MAN' | 'TIM';

    ScheduleId?: string;

    TaxAllowance?: 'HUV' | 'EXT' | 'TMP' | 'STU' | 'EJ' | '???';

    TaxColumn?: number;

    TaxTable?: string;

    VacationBasedAttendanceDays?: number;

    VacationBasedAttendanceHours?: number;

    VacationBasedCalendarDaysWhole?: number;

    VacationBasedSalaryTotal?: number;

    VacationBasedSalaryVariableAddition?: number;

    VacationBasedSalaryWorkedTime?: number;

    VacationCalculationAdvanceVacationDebt?: number;

    VacationCalculationIncludeInCalculation?: boolean;

    VacationCalculationSameWagePercent?: boolean;

    VacationCalculationSoleCustody?: boolean;

    VacationCalculationSumOnlyNoDays?: boolean;

    VacationCalculationTotalVacationSalarySum?: number;

    VacationCalculationVacationEntitlement?: number;

    VacationCalculationVariableAdditionSum?: number;

    VacationDaysPaid?: number;

    VacationDaysPendingPaid?: number;

    VacationDaysPendingPrepaid?: number;

    VacationDaysPendingSaved?: number;

    VacationDaysPendingSavedYear1?: number;

    VacationDaysPendingSavedYear2?: number;

    VacationDaysPendingSavedYear3?: number;

    VacationDaysPendingSavedYear4?: number;

    VacationDaysPendingSavedYear5?: number;

    VacationDaysPendingSavedYear6Plus?: number;

    VacationDaysPendingUnpaid?: number;

    VacationDaysPrepaid?: number;

    VacationDaysRegisteredPaid?: number;

    VacationDaysRegisteredPrepaid?: number;

    VacationDaysRegisteredSaved?: number;

    VacationDaysRegisteredSavedYear1?: number;

    VacationDaysRegisteredSavedYear2?: number;

    VacationDaysRegisteredSavedYear3?: number;

    VacationDaysRegisteredSavedYear4?: number;

    VacationDaysRegisteredSavedYear5?: number;

    VacationDaysRegisteredSavedYear6Plus?: number;

    VacationDaysRegisteredUnpaid?: number;

    VacationDaysSaved?: number;

    VacationDaysSavedEmploymentRateYear1?: number;

    VacationDaysSavedEmploymentRateYear2?: number;

    VacationDaysSavedEmploymentRateYear3?: number;

    VacationDaysSavedEmploymentRateYear4?: number;

    VacationDaysSavedEmploymentRateYear5?: number;

    VacationDaysSavedEmploymentRateYear6Plus?: number;

    VacationDaysSavedYear1?: number;

    VacationDaysSavedYear2?: number;

    VacationDaysSavedYear3?: number;

    VacationDaysSavedYear4?: number;

    VacationDaysSavedYear5?: number;

    VacationDaysSavedYear6Plus?: number;

    VacationDaysUnpaid?: number;

    WorkingTimeEnumeration?: string;
  }
}

export interface EmployeeCreateParams {
  Employee?: FortnoxEmployee;
}

export interface EmployeeUpdateParams {
  Employee?: FortnoxEmployee;
}

export declare namespace Employees {
  export {
    type DatedSchedule as DatedSchedule,
    type DatedWage as DatedWage,
    type EmployeeCategory as EmployeeCategory,
    type EmployeeChild as EmployeeChild,
    type EmployeeWrap as EmployeeWrap,
    type FortnoxEmployee as FortnoxEmployee,
    type OpeningSalary as OpeningSalary,
    type EmployeeListResponse as EmployeeListResponse,
    type EmployeeCreateParams as EmployeeCreateParams,
    type EmployeeUpdateParams as EmployeeUpdateParams,
  };
}
