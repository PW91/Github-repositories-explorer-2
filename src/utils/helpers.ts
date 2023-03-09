type isEmptyFnType = (obj: Record<string, any>) => boolean

export const isEmpty: isEmptyFnType = obj => obj &&
  Object.keys(obj).length === 0 &&
  Object.getPrototypeOf(obj) === Object.prototype
