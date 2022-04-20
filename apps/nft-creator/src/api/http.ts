import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_API_URL } from '../utils/vars';
import { setupInterceptorsTo } from './interceptors';

export class Http {
  private _instance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this._instance = axios.create(config);

    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.patch = this.patch.bind(this);
    this.setDefaults = this.setDefaults.bind(this);

    this.setDefaults();
    setupInterceptorsTo(this._instance);
  }

  public async get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this._instance.get(url, config);
  }

  public async post<T = unknown, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return this._instance.post<T, R>(url, data, config);
  }

  public async patch<T = unknown, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this._instance.patch(url, data, config);
  }

  public async put<T = unknown, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return this._instance.put<T, R>(url, data, config);
  }

  public async delete<T = unknown, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this._instance.delete<T, R>(url, config);
  }

  set jwt(jwt: string) {
    this._instance.defaults.headers.common.Authorization = jwt;
  }

  set xCallId(xCallId: string) {
    this._instance.defaults.headers.common['X-Call-ID'] = xCallId;
  }

  private setDefaults(): void {
    // this._instance.defaults.withCredentials = true;
    this._instance.defaults.baseURL = BASE_API_URL;
    // this._instance.defaults.headers.common['X-Initiator-Service'] = 'gear-js-api';
    this._instance.defaults.headers.post['Content-Type'] = 'application/json';
  }
}

export const http = new Http();
