export interface IOptions {
  [value: string]: any;
}

export interface IPages {
  page: number;
  pageSize: number;
  pageSizes: number[];
}

export interface ITag {
  title: string;
  key: string;
}

export interface IRouter {
  name: string;
  path: string;
  meta: [string | object];
  component: string;
  children?: IRouter[];
}
