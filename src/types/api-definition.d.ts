import {GenericAPI, StringIdAPI, NumberIdAPI, API} from 'aegis-api-proxy';
import {
  ModelAndViewStatus,
  ModelAndView,
  View
} from './api-beans';

interface GeneratedApis<T> {
  /**
   * 后端服务起始页
   */
  Home: GenericAPI<T, ModelAndView, undefined>;
  /**
   * 查询机主信息
   */
  baseInfo: GenericAPI<T, any, undefined>;
  blog: BlogAPI<T>;
  /**
   * 查询文档分类信息
   */
  blogType: GenericAPI<T, any, undefined>;
  book: BookAPI<T>;
  /**
   * 查询书单分类信息
   */
  bookType: GenericAPI<T, any, undefined>;
  dicts: DictsAPI<T>;
  login: LoginAPI<T>;
  mood: MoodAPI<T>;
  msgBoard: MsgBoardAPI<T>;
  /**
   * 注册接口
   */
  register: GenericAPI<T, any, User对象>;
  /**
   * token是否过期
   */
  tokenCheck: GenericAPI<T, any, undefined>;
}

export interface BlogAPI<T>  {
  /**
   * 博客详情接口
   */
  getOne: NumberIdAPI<T, any, {
    /**
     * id
     */
    id?: number
  }>;
  /**
   * 博客新增接口
   */
  save: GenericAPI<T, any, {
    author?: number,
    commentNum?: number,
    content?: string,
    createTime?: string,
    des?: string,
    id?: number,
    loveNum?: number,
    readNum?: number,
    title?: string,
    type?: number
  }>;
  /**
   * 博客更新接口
   */
  update: GenericAPI<T, any, {
    author?: number,
    commentNum?: number,
    content?: string,
    createTime?: string,
    des?: string,
    id?: number,
    loveNum?: number,
    readNum?: number,
    title?: string,
    type?: number
  }>;
  /**
   * 博客删除接口
   */
  remove: NumberIdAPI<T, any, {
    /**
     * id
     */
    id?: number
  }>;
  /**
   * 博客列表接口
   */
  list: GenericAPI<T, any, {
    /**
     * current
     */
    current?: string,
    /**
     * size
     */
    size?: string
  }>;
}

export interface BookAPI<T>  {
  /**
   * 书单详情接口
   */
  getOne: NumberIdAPI<T, any, {
    /**
     * id
     */
    id?: number
  }>;
  /**
   * 书单新增接口
   */
  save: GenericAPI<T, any, {
    author?: string,
    /**
     * 评论数
     */
    commentNum?: number,
    content?: string,
    createTime?: string,
    des?: string,
    id?: number,
    loveNum?: number,
    name?: string,
    readNum?: number,
    star?: number,
    type?: string
  }>;
  /**
   * 书单更新接口
   */
  update: GenericAPI<T, any, {
    author?: string,
    /**
     * 评论数
     */
    commentNum?: number,
    content?: string,
    createTime?: string,
    des?: string,
    id?: number,
    loveNum?: number,
    name?: string,
    readNum?: number,
    star?: number,
    type?: string
  }>;
  /**
   * 书单删除接口
   */
  remove: NumberIdAPI<T, any, {
    /**
     * id
     */
    id?: number
  }>;
  /**
   * 书单列表接口
   */
  list: GenericAPI<T, any, undefined>;
}

export interface DictsAPI<T>  {
  /**
   * 查询新增接口
   */
  save: GenericAPI<T, any, {
    id?: number,
    name?: string,
    type?: string
  }>;
  /**
   * 查询字典列表
   */
  list: StringIdAPI<T, any, {
    /**
     * type
     */
    type?: string
  }>;
}

export interface LoginAPI<T>  {
  /**
   * 登录接口
   */
  Login: GenericAPI<T, any, {
    /**
     * email
     */
    email?: string,
    /**
     * pass
     */
    pass?: string
  }>;
}

export interface MoodAPI<T>  {
  /**
   * 说说新增接口
   */
  save: StringIdAPI<T, any, {
    /**
     * msg
     */
    msg?: string
  }>;
  /**
   * 说说列表接口
   */
  list: GenericAPI<T, any, undefined>;
}

export interface MsgBoardAPI<T>  {
  /**
   * 新增留言板列表接口
   */
  save: GenericAPI<T, any, {
    /**
     * msg
     */
    msg?: string,
    /**
     * token
     */
    token: string
  }>;
  /**
   * 留言板列表接口
   */
  list: GenericAPI<T, any, undefined>;
}