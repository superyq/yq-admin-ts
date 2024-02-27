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


