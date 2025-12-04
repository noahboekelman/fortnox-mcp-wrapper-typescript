// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource employees', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.number3.employees.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.number3.employees.create(
        {
          Employee: {
            Email: 'Email',
            FirstName: 'FirstName',
            LastName: 'LastName',
            AbsenceHoursNonVacationBased: 0,
            AbsenceHoursVacationBased: 0,
            AbsenceWorkdaysNonVacationBased: 0,
            AbsenceWorkdaysVacationBased: 0,
            Address1: 'Address1',
            Address2: 'Address2',
            ATFValue: 0,
            ATKValue: 0,
            AutoNonRecurringTax: true,
            AverageHourlyWage: 'AverageHourlyWage',
            AverageWeeklyHours: 'AverageWeeklyHours',
            BankAccountNo: 'BankAccountNo',
            City: 'City',
            ClearingNo: 'ClearingNo',
            CostCenter: 'CostCenter',
            Country: 'Country',
            CurrentCompBalance: 0,
            CurrentFlexBalance: 0,
            DatedSchedules: [{ EmployeeId: 'x', FirstDay: '2019-12-27', ScheduleId: 'ScheduleId' }],
            DatedWages: [
              {
                EmployeeId: 'x',
                FirstDay: '2019-12-27',
                HourlyPay: 'HourlyPay',
                MonthlySalary: 'MonthlySalary',
              },
            ],
            EmployedTo: '2019-12-27',
            EmployeeCategories: [{ Name: 'Name', value: 'value' }],
            EmployeeChildren: [
              {
                ApprovedDays: 0,
                Child: 'Child',
                EmployeeId: 'x',
                IngoingWithdrawnDays: 0,
                Id: 'Id',
                WithdrawnDays: 0,
              },
            ],
            EmployeeId: 'x',
            EmploymentDate: '2019-12-27',
            EmploymentForm: 'TV',
            ForaType: 'A',
            FullName: 'FullName',
            FullTimeEquivalent: 0,
            HourlyPay: 'HourlyPay',
            Inactive: true,
            InitialComp: 0,
            InitialFlex: 0,
            JobTitle: 'JobTitle',
            MonthlySalary: 'MonthlySalary',
            NonRecurringTax: 'NonRecurringTax',
            NonVacationBasedCalendarDaysPartial: 0,
            NonVacationBasedCalendarDaysWhole: 0,
            OpeningSalaries: [
              {
                EmployeeId: 'x',
                SalaryTypeNumber: 'SalaryTypeNumber',
                Amount: 0,
                Period: 'Period',
                ProductGroup: 'ProductGroup',
                Quantity: 0,
                QuantityUnit: 'QuantityUnit',
                RowId: 0,
                SalaryTypeName: 'SalaryTypeName',
                SortCode: 'SortCode',
                TextRow: 'TextRow',
                Total: 0,
                VAT: 0,
              },
            ],
            PayslipType: 'pdf',
            PersonalIdentityNumber: 'PersonalIdentityNumber',
            PersonelType: 'TJM',
            Phone1: 'Phone1',
            Phone2: 'Phone2',
            PostCode: 'PostCode',
            PreliminaryTaxDeducted: 0,
            Project: 'Project',
            SalaryForm: 'MAN',
            ScheduleId: 'ScheduleId',
            TaxAllowance: 'HUV',
            TaxColumn: 1,
            TaxTable: 'TaxTable',
            VacationBasedAttendanceDays: 0,
            VacationBasedAttendanceHours: 0,
            VacationBasedCalendarDaysWhole: 0,
            VacationBasedSalaryTotal: 0,
            VacationBasedSalaryVariableAddition: 0,
            VacationBasedSalaryWorkedTime: 0,
            VacationCalculationAdvanceVacationDebt: 0,
            VacationCalculationIncludeInCalculation: true,
            VacationCalculationSameWagePercent: true,
            VacationCalculationSoleCustody: true,
            VacationCalculationSumOnlyNoDays: true,
            VacationCalculationTotalVacationSalarySum: 0,
            VacationCalculationVacationEntitlement: 0,
            VacationCalculationVariableAdditionSum: 0,
            VacationDaysPaid: 0,
            VacationDaysPendingPaid: 0,
            VacationDaysPendingPrepaid: 0,
            VacationDaysPendingSaved: 0,
            VacationDaysPendingSavedYear1: 0,
            VacationDaysPendingSavedYear2: 0,
            VacationDaysPendingSavedYear3: 0,
            VacationDaysPendingSavedYear4: 0,
            VacationDaysPendingSavedYear5: 0,
            VacationDaysPendingSavedYear6Plus: 0,
            VacationDaysPendingUnpaid: 0,
            VacationDaysPrepaid: 0,
            VacationDaysRegisteredPaid: 0,
            VacationDaysRegisteredPrepaid: 0,
            VacationDaysRegisteredSaved: 0,
            VacationDaysRegisteredSavedYear1: 0,
            VacationDaysRegisteredSavedYear2: 0,
            VacationDaysRegisteredSavedYear3: 0,
            VacationDaysRegisteredSavedYear4: 0,
            VacationDaysRegisteredSavedYear5: 0,
            VacationDaysRegisteredSavedYear6Plus: 0,
            VacationDaysRegisteredUnpaid: 0,
            VacationDaysSaved: 0,
            VacationDaysSavedEmploymentRateYear1: 0,
            VacationDaysSavedEmploymentRateYear2: 0,
            VacationDaysSavedEmploymentRateYear3: 0,
            VacationDaysSavedEmploymentRateYear4: 0,
            VacationDaysSavedEmploymentRateYear5: 0,
            VacationDaysSavedEmploymentRateYear6Plus: 0,
            VacationDaysSavedYear1: 0,
            VacationDaysSavedYear2: 0,
            VacationDaysSavedYear3: 0,
            VacationDaysSavedYear4: 0,
            VacationDaysSavedYear5: 0,
            VacationDaysSavedYear6Plus: 0,
            VacationDaysUnpaid: 0,
            WorkingTimeEnumeration: 'WorkingTimeEnumeration',
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.number3.employees.retrieve('EmployeeId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.number3.employees.update('EmployeeId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.number3.employees.update(
        'EmployeeId',
        {
          Employee: {
            Email: 'Email',
            FirstName: 'FirstName',
            LastName: 'LastName',
            AbsenceHoursNonVacationBased: 0,
            AbsenceHoursVacationBased: 0,
            AbsenceWorkdaysNonVacationBased: 0,
            AbsenceWorkdaysVacationBased: 0,
            Address1: 'Address1',
            Address2: 'Address2',
            ATFValue: 0,
            ATKValue: 0,
            AutoNonRecurringTax: true,
            AverageHourlyWage: 'AverageHourlyWage',
            AverageWeeklyHours: 'AverageWeeklyHours',
            BankAccountNo: 'BankAccountNo',
            City: 'City',
            ClearingNo: 'ClearingNo',
            CostCenter: 'CostCenter',
            Country: 'Country',
            CurrentCompBalance: 0,
            CurrentFlexBalance: 0,
            DatedSchedules: [{ EmployeeId: 'x', FirstDay: '2019-12-27', ScheduleId: 'ScheduleId' }],
            DatedWages: [
              {
                EmployeeId: 'x',
                FirstDay: '2019-12-27',
                HourlyPay: 'HourlyPay',
                MonthlySalary: 'MonthlySalary',
              },
            ],
            EmployedTo: '2019-12-27',
            EmployeeCategories: [{ Name: 'Name', value: 'value' }],
            EmployeeChildren: [
              {
                ApprovedDays: 0,
                Child: 'Child',
                EmployeeId: 'x',
                IngoingWithdrawnDays: 0,
                Id: 'Id',
                WithdrawnDays: 0,
              },
            ],
            EmployeeId: 'x',
            EmploymentDate: '2019-12-27',
            EmploymentForm: 'TV',
            ForaType: 'A',
            FullName: 'FullName',
            FullTimeEquivalent: 0,
            HourlyPay: 'HourlyPay',
            Inactive: true,
            InitialComp: 0,
            InitialFlex: 0,
            JobTitle: 'JobTitle',
            MonthlySalary: 'MonthlySalary',
            NonRecurringTax: 'NonRecurringTax',
            NonVacationBasedCalendarDaysPartial: 0,
            NonVacationBasedCalendarDaysWhole: 0,
            OpeningSalaries: [
              {
                EmployeeId: 'x',
                SalaryTypeNumber: 'SalaryTypeNumber',
                Amount: 0,
                Period: 'Period',
                ProductGroup: 'ProductGroup',
                Quantity: 0,
                QuantityUnit: 'QuantityUnit',
                RowId: 0,
                SalaryTypeName: 'SalaryTypeName',
                SortCode: 'SortCode',
                TextRow: 'TextRow',
                Total: 0,
                VAT: 0,
              },
            ],
            PayslipType: 'pdf',
            PersonalIdentityNumber: 'PersonalIdentityNumber',
            PersonelType: 'TJM',
            Phone1: 'Phone1',
            Phone2: 'Phone2',
            PostCode: 'PostCode',
            PreliminaryTaxDeducted: 0,
            Project: 'Project',
            SalaryForm: 'MAN',
            ScheduleId: 'ScheduleId',
            TaxAllowance: 'HUV',
            TaxColumn: 1,
            TaxTable: 'TaxTable',
            VacationBasedAttendanceDays: 0,
            VacationBasedAttendanceHours: 0,
            VacationBasedCalendarDaysWhole: 0,
            VacationBasedSalaryTotal: 0,
            VacationBasedSalaryVariableAddition: 0,
            VacationBasedSalaryWorkedTime: 0,
            VacationCalculationAdvanceVacationDebt: 0,
            VacationCalculationIncludeInCalculation: true,
            VacationCalculationSameWagePercent: true,
            VacationCalculationSoleCustody: true,
            VacationCalculationSumOnlyNoDays: true,
            VacationCalculationTotalVacationSalarySum: 0,
            VacationCalculationVacationEntitlement: 0,
            VacationCalculationVariableAdditionSum: 0,
            VacationDaysPaid: 0,
            VacationDaysPendingPaid: 0,
            VacationDaysPendingPrepaid: 0,
            VacationDaysPendingSaved: 0,
            VacationDaysPendingSavedYear1: 0,
            VacationDaysPendingSavedYear2: 0,
            VacationDaysPendingSavedYear3: 0,
            VacationDaysPendingSavedYear4: 0,
            VacationDaysPendingSavedYear5: 0,
            VacationDaysPendingSavedYear6Plus: 0,
            VacationDaysPendingUnpaid: 0,
            VacationDaysPrepaid: 0,
            VacationDaysRegisteredPaid: 0,
            VacationDaysRegisteredPrepaid: 0,
            VacationDaysRegisteredSaved: 0,
            VacationDaysRegisteredSavedYear1: 0,
            VacationDaysRegisteredSavedYear2: 0,
            VacationDaysRegisteredSavedYear3: 0,
            VacationDaysRegisteredSavedYear4: 0,
            VacationDaysRegisteredSavedYear5: 0,
            VacationDaysRegisteredSavedYear6Plus: 0,
            VacationDaysRegisteredUnpaid: 0,
            VacationDaysSaved: 0,
            VacationDaysSavedEmploymentRateYear1: 0,
            VacationDaysSavedEmploymentRateYear2: 0,
            VacationDaysSavedEmploymentRateYear3: 0,
            VacationDaysSavedEmploymentRateYear4: 0,
            VacationDaysSavedEmploymentRateYear5: 0,
            VacationDaysSavedEmploymentRateYear6Plus: 0,
            VacationDaysSavedYear1: 0,
            VacationDaysSavedYear2: 0,
            VacationDaysSavedYear3: 0,
            VacationDaysSavedYear4: 0,
            VacationDaysSavedYear5: 0,
            VacationDaysSavedYear6Plus: 0,
            VacationDaysUnpaid: 0,
            WorkingTimeEnumeration: 'WorkingTimeEnumeration',
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FortnoxMcpWrapper.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.number3.employees.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
