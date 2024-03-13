import { h } from "vue";
import SvgIcon from "@/components/SvgIcon.vue";
import AppLink from "@/components/AppLink.vue";
import Layout from "@/layout/index.vue";
import { IRouter } from "@/model/common.ts";

const modules = import.meta.glob("../pages/*/index.vue");
// 字符权限校验
export const checkPermi = (value: string[]): boolean => {
  if (value && value instanceof Array && value.length > 0) {
    const permissions = ["system:user:add"];
    const permissionDatas = value;
    const all_permission = "*:*:*";

    const hasPermission = permissions.some(
      (permission) =>
        all_permission === permission || permissionDatas.includes(permission)
    );

    return hasPermission;
  } else {
    console.error(
      `need roles! Like checkPermi="['system:user:add','system:user:edit']"`
    );
    return false;
  }
};

// 角色权限校验
export const checkRole = (value: string[]): boolean => {
  if (value && value instanceof Array && value.length > 0) {
    const roles = ["admin", "editor"];
    const permissionRoles = value;
    const super_admin = "admin";

    const hasRole = roles.some(
      (role) => super_admin === role || permissionRoles.includes(role)
    );

    return hasRole;
  } else {
    console.error(`need roles! Like checkRole="['admin','editor']"`);
    return false;
  }
};

// 生成 icon Dom
export const renderIcon =
  (name: string): Function =>
  () =>
    h(SvgIcon, { name }, null);

// 生成 单个路由
export const getRouterItem = (item: IRouter) => {
  const { name, path, meta, component } = item;
  return {
    path,
    name,
    meta,
    component: modules[`../pages/${component}/index.vue`],
  };
};

// 获取异步路由
// 所有异步路由都是layout的子路由，并且routers只有一层children，没有考虑很复杂的情况。
// 将所有异步路由都存放在rmenu数组中，返回。
export const getAayncRouter = (routers) => {
  let rmenu = [];
  routers.forEach((item) => {
    if (item.children && item.children.length) {
      item.children.forEach((_item) => {
        let obj = getRouterItem(_item);
        obj.meta.parentTitle = item.meta.title;
        rmenu.push(obj);
      });
    } else {
      rmenu.push(getRouterItem(item));
    }
  });
};

// 获取侧边栏导航
export const getSiderMenu = (routers) => {
  let smenu = [];

  routers.forEach((item) => {
    let children = [];
    let obj = {};

    if (item.children && item.children.length) {
      // 二级 menu
      item.children.map((_item) => {
        if (!_item.hidden) {
          children.push({
            label: () =>
              h(
                AppLink,
                { to: _item.path },
                { default: () => _item.meta.title }
              ),
            title: _item.meta.title,
            key: _item.name,
            // icon: renderIcon(_item.meta.icon),
          });
        }
      });

      obj = {
        label: item.meta.title,
        title: item.meta.title,
        key: item.name,
        icon: renderIcon(item.meta.icon),
        children,
      };
    } else {
      // 一级 menu
      obj = {
        label: () =>
          h(RouterLink, { to: item.path }, { default: () => item.meta.title }),
        title: item.meta.title,
        key: item.name,
        icon: renderIcon(item.meta.icon),
      };
    }

    smenu.push(obj);
  });
  return smenu;
};

export const filterChildren = (childrenMap, lastRouter = false) => {
  let children = [];
  childrenMap.forEach((el, index) => {
    if (el.children && el.children.length) {
      if (el.component === "ParentView" && !lastRouter) {
        el.children.forEach((c) => {
          c.path = el.path + "/" + c.path;
          if (c.children && c.children.length) {
            children = children.concat(filterChildren(c.children, c));
            return;
          }
          children.push(c);
        });
        return;
      }
    }
    if (lastRouter) {
      el.path = lastRouter.path + "/" + el.path;
      if (el.children && el.children.length) {
        children = children.concat(filterChildren(el.children, el));
        return;
      }
    }
    children = children.concat(el);
  });
  return children;
};

export const filterAsyncRouter = (
  asyncRouterMap: IRouter[],
  lastRouter = false,
  type = false
) => {
  return asyncRouterMap.filter((route) => {
    if (type && route.children) {
      route.children = filterChildren(route.children);
    }
    if (route.component) {
      // Layout ParentView 组件特殊处理
      if (route.component === "Layout") {
        route.component = Layout;
      } else {
        route.component = renderIcon(route.component);
      }
    }
    if (route.children != null && route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children, route, type);
    } else {
      delete route["children"];
      delete route["redirect"];
    }
    return true;
  });
};
