// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Projects extends APIResource {
  /**
   * Create a project
   */
  create(
    body: ProjectCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectWrap> {
    return this._client.post('/3/projects', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single project
   */
  retrieve(projectNumber: number, options?: RequestOptions): APIPromise<ProjectWrap> {
    return this._client.get(path`/3/projects/${projectNumber}`, options);
  }

  /**
   * Update a project
   */
  update(
    projectNumber: number,
    body: ProjectUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectWrap> {
    return this._client.put(path`/3/projects/${projectNumber}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * The project register can return a list of records or a single record. By
   * specifying a ProjectNumber in the URL, a single record will be returned. If no
   * ProjectNumber is provided, a list of records will be returned.
   */
  list(options?: RequestOptions): APIPromise<ProjectListResponse> {
    return this._client.get('/3/projects', options);
  }

  /**
   * Remove a project
   */
  delete(projectNumber: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/3/projects/${projectNumber}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FortnoxProject {
  Description: string;

  '@url'?: string;

  Comments?: string;

  ContactPerson?: string;

  EndDate?: string;

  ProjectLeader?: string;

  ProjectNumber?: string;

  StartDate?: string;

  Status?: 'NOTSTARTED' | 'ONGOING' | 'COMPLETED';
}

export interface ProjectWrap {
  Project?: FortnoxProject;
}

export interface ProjectListResponse {
  Projects?: Array<ProjectListResponse.Project>;
}

export namespace ProjectListResponse {
  export interface Project {
    Description: string;

    '@url'?: string;

    EndDate?: string;

    ProjectLeader?: string;

    ProjectNumber?: string;

    StartDate?: string;

    Status?: 'NOTSTARTED' | 'ONGOING' | 'COMPLETED';
  }
}

export interface ProjectCreateParams {
  Project?: FortnoxProject;
}

export interface ProjectUpdateParams {
  Project?: FortnoxProject;
}

export declare namespace Projects {
  export {
    type FortnoxProject as FortnoxProject,
    type ProjectWrap as ProjectWrap,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
  };
}
