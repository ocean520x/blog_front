import { IconType } from '@icon-park/vue-next/es/all';

export interface UserModel {
  updated_at: string;
  name: string;
  created_at: string;
  email_verified_at: string;
  id: number;
  avatar?: string;
  email: string;
  is_super_admin: string;
}

export interface LoginData {
  user: UserModel;
  token: string;
}

export interface RegisterData {
  user: UserModel;
  token: string;
}

export interface ApiData<T> {
  code: number;
  message?: string;
  data: T;
  success: boolean;
}

export interface PageData<T> {
  data: T[];
  links: { first: string; last: string; prev?: any; next?: any };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    links: { url?: string; label: string; active: boolean }[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
}

export interface MyCaptcha {
  img: string;
  sensitive: boolean;
  key: string;
}

export interface MyCategory {
  updated_at: string;
  icon: IconType;
  created_at: string;
  id: number;
  sort: number;
  title: string;
}

export interface MyTopic {
  category_id: number;
  updated_at: string;
  user_id: number;
  is_hot: string;
  created_at: string;
  id: number;
  sort: number;
  title: string;
  category: MyCategory;
  user: UserModel;
  content: string;
  html: string;
}

export interface MyConfig {
  site_name?: string;
  copyright?: string;
  address?: string;
  ICP?: string;
  tel?: string;
  wechat_pay?: string;
  aliyun_pay?: string;
}

export interface MyComment {
  id: number | string;
  user_id: number;
  topic_id: number;
  reply_comment_id?: number;
  reply_user_id?: number;
  content: string;
  created_at: string;
  updated_at: string;
  topic?: MyTopic;
  user: UserModel;
  html: string;
  reply_user?: UserModel;
  reply_comments?: MyComment[];
  belong_to_comment?: MyComment;
}

export interface MyFavorite {
  is_favorite: boolean;
}
