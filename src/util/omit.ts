export const omit = <T, U extends keyof T>(
  obj: T,
  ...keys: U[]
): Omit<T, U> => {
  let ret = {} as { [K in keyof T]: (typeof obj)[K] };
  let key: keyof typeof obj;
  for (key in obj) {
    if (!~keys.indexOf(key as U)) {
      ret[key] = obj[key];
    }
  }
  return ret;
};
