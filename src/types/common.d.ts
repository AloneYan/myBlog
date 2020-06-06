declare interface ListFooter {
  time: string;
  look: number;
  good: number;
  talk: number;
}

// 新增部分
declare module "rc-form" {
  // 在此只是简单地进行类型描述
  export const createForm: any;
  export const createFormField: any;
  export const formShape: any;
}