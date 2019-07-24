export const removeEmpty = obj =>
  Object.keys(obj)
    .filter(key =>
      typeof obj[key] === "object" ? !!Object.keys(obj[key]).length : !!obj[key]
    )
    .reduce((acc, cur) => ({ ...acc, [cur]: obj[cur] }), {});
