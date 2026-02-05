// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Scheduletimes extends APIResource {
  /**
   * Retrieve a specific schedule time
   */
  retrieve(
    date: string,
    params: ScheduletimeRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ScheduleTimeWrap> {
    const { EmployeeId } = params;
    return this._client.get(path`/3/scheduletimes/${EmployeeId}/${date}`, options);
  }

  /**
   * Update a schedule time
   */
  update(
    date: string,
    params: ScheduletimeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ScheduleTimeWrap> {
    const { EmployeeId, ...body } = params;
    return this._client.put(path`/3/scheduletimes/${EmployeeId}/${date}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Reset schedule time
   */
  resetDay(
    date: string,
    params: ScheduletimeResetDayParams,
    options?: RequestOptions,
  ): APIPromise<ScheduleTimeWrap> {
    const { EmployeeId } = params;
    return this._client.put(path`/3/scheduletimes/${EmployeeId}/${date}/resetday`, options);
  }
}

export interface ScheduleTimeWrap {
  ScheduleTime?: ScheduleTimeWrap.ScheduleTime;
}

export namespace ScheduleTimeWrap {
  export interface ScheduleTime {
    Date?: string;

    EmployeeId?: string;

    Hours?: string;

    IWH1?: string;

    IWH2?: string;

    IWH3?: string;

    IWH4?: string;

    IWH5?: string;

    ScheduleId?: string;
  }
}

export interface ScheduletimeRetrieveParams {
  /**
   * identifies the employee
   */
  EmployeeId: string;
}

export interface ScheduletimeUpdateParams {
  /**
   * Path param: identifies the employee
   */
  EmployeeId: string;

  /**
   * Body param
   */
  ScheduleTime?: ScheduletimeUpdateParams.ScheduleTime;
}

export namespace ScheduletimeUpdateParams {
  export interface ScheduleTime {
    Date?: string;

    EmployeeId?: string;

    Hours?: string;

    IWH1?: string;

    IWH2?: string;

    IWH3?: string;

    IWH4?: string;

    IWH5?: string;

    ScheduleId?: string;
  }
}

export interface ScheduletimeResetDayParams {
  /**
   * identifies the employee
   */
  EmployeeId: string;
}

export declare namespace Scheduletimes {
  export {
    type ScheduleTimeWrap as ScheduleTimeWrap,
    type ScheduletimeRetrieveParams as ScheduletimeRetrieveParams,
    type ScheduletimeUpdateParams as ScheduletimeUpdateParams,
    type ScheduletimeResetDayParams as ScheduletimeResetDayParams,
  };
}
