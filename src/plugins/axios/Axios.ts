import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import { ElLoading, ElMessage } from 'element-plus';
import errorsStore from '@/store/errorsStore';
import MyLocalStore from '@/composables/myLocalStore';
import router from '@/router';

interface MyOptions {
  loading?: boolean;
  message?: boolean;
  clearValidateError?: boolean;
}

const storage = MyLocalStore();
export default class Axios {
  private instance: AxiosInstance;
  private loading: any;
  private options: MyOptions = { loading: true, message: true, clearValidateError: true };
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors();
  }

  public request<T>(config: AxiosRequestConfig, options?: MyOptions) {
    this.options = Object.assign(this.options, options ?? {});
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<T>(config);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    }) as Promise<T>;
  }

  private interceptors() {
    this.interceptorsRequest();
    this.interceptorsResponse();
  }

  // 请求拦截器
  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (!this.loading && this.options.loading) {
          this.loading = ElLoading.service({ background: 'rgba(255,255,255,0.1)', fullscreen: true });
        }
        if (this.options.clearValidateError) errorsStore().resetError();
        config.headers.Accept = 'application/json';
        // config.headers.Authorization = `Bearer ${storage.get('token')}`;
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      },
    );
  }

  // 响应拦截器
  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      // 成功响应
      (response) => {
        if (this.loading) {
          this.loading.close();
          this.loading = undefined;
        }

        const message = response.data?.message ?? response.data?.success;
        if (message && this.options.message) {
          ElMessage({
            type: 'success',
            message,
            grouping: true,
            duration: 2000,
          });
        }

        this.options = { loading: true, message: true, clearValidateError: true };
        return response;
      },

      //失败响应
      (error) => {
        if (this.loading) {
          this.loading.close();
          this.loading = undefined;
        }
        this.options = { loading: true, message: true, clearValidateError: true };
        console.log('error', error);

        const {
          response: { status, data },
        } = error;
        const message = data.error ?? data.message;

        switch (status) {
          case 401:
            // 未认证
            storage.remove('token');
            router.push({ name: 'login' });
            break;
          case 422:
            errorsStore().setErrors(data.errors ?? data);
            break;
          case 403:
            ElMessage({ type: 'error', message: message ?? '您无权操作' });
            break;
          case 404:
            ElMessage.error('您请求的资源不存在');
            router.push({ name: 'home' });
            break;
          case 429:
            ElMessage({ type: 'error', message: '请求过于频繁，请稍候再试' });
            break;
          default:
            if (message) {
              ElMessage({ type: 'error', message: message ?? '服务器错误' });
            }
        }
        return Promise.reject(error);
      },
    );
  }
}
