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
