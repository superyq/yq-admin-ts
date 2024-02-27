// 日期格式化
export const parseTime = (
  time: string | number | Date,
  pattern?: string
): string | null => {
  if (!time) {
    return null;
  }
  const format = pattern || "{y}-{m}-{d} {h}:{i}:{s}";

  // time 转 Date 格式
  let date: Date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (typeof time === "string" && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    } else if (typeof time === "string") {
      time = time
        .replace(/-/gm, "/")
        .replace("T", "")
        .replace(/\.[\d]{3}/gm, "");
    }
    if (typeof time === "number" && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }

  const formatObj: { [key: string]: number } = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const time_str = format.replace(
    /{(y|m|d|h|i|s|a)+}/g,
    (result, key: string): string => {
      // 无效判断
      if (result.length == 0) {
        console.log("日期格式化失败");
      }
      let value = formatObj[key];
      if (key === "a") {
        return ["日", "一", "二", "三", "四", "五", "六"][value];
      }
      return value.toString().padStart(2, "0");
    }
  );
  return time_str;
};

// 添加日期范围
export const addDateRange = (
  params: { [key: string]: any },
  dateRange: string[],
  propName = "Time"
) => {
  let search = params;
  search.params =
    typeof search.params === "object" &&
    search.params !== null &&
    !Array.isArray(search.params)
      ? search.params
      : {};
  dateRange = Array.isArray(dateRange) ? dateRange : [];

  search.params[`begin${propName}`] = dateRange[0];
  search.params[`end${propName}`] = dateRange[1];

  return search;
};

// 构造树形结构
export const toTreeData = (
  arr: { [key: string]: any }[],
  rootValue: string | number
): { [key: string]: any }[] => {
  const _arr: any[] = [];
  arr.forEach((item) => {
    if (item.parentId === rootValue) {
      const children = toTreeData(arr, item.menuId);
      if (children.length > 0) {
        item.children = children;
      }
      _arr.push(item);
    }
  });
  return _arr;
};

// 参数处理
export const tansParams = (params: { [key: string]: any }): string => {
  let result = "";
  for (const propName of Object.keys(params)) {
    const value = params[propName];
    var part = encodeURIComponent(propName) + "=";
    if (value !== null && value !== "" && typeof value !== "undefined") {
      if (typeof value === "object") {
        for (const key of Object.keys(value)) {
          if (
            value[key] !== null &&
            value[key] !== "" &&
            typeof value[key] !== "undefined"
          ) {
            let params = propName + "[" + key + "]";
            var subPart = encodeURIComponent(params) + "=";
            result += subPart + encodeURIComponent(value[key]) + "&";
          }
        }
      } else {
        result += part + encodeURIComponent(value) + "&";
      }
    }
  }
  return result;
};
