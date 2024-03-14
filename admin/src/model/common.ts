export interface IOptions {
  [key: string]: any;
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
  parentId: number;
  menuId: number;
  menuName: string;
  path: string;
  component: string;
  status: number;
  children?: IRouter[];
}

export interface IMenu {
  label: any;
  key: [number | string];
  icon: string;
  children?: IMenu[];
}
