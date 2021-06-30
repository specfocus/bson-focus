export type Key = string | number;
export type Comparator<T = any> = (a: T, b: T) => boolean;
export const typeChecker = <TType>(type: string) => {
  const typeString = "[object " + type + "]";
  return function(value: unknown): value is TType {
    return getClassName(value) === typeString;
  };
};

const getClassName = (value: any) => Object.prototype.toString.call(value);

type Comparable = number | string | Comparable[];

export const comparable = (value: any): Comparable => {
  if (value instanceof Date) {
    return value.getTime();
  } else if (isArray(value)) {
    return value.map(comparable);
  } else if (value && typeof value.toJSON === "function") {
    return value.toJSON();
  }

  return value;
};

export const isArray = typeChecker<Array<any>>("Array");
export const isObject = typeChecker<Object>("Object");
export const isFunction = typeChecker<Function>("Function");
export const isVanillaObject = (value: any) => {
  return (
    value &&
    (value.constructor === Object ||
      value.constructor === Array ||
      value.constructor.toString() === "function Object() { [native code] }" ||
      value.constructor.toString() === "function Array() { [native code] }") &&
    !value.toJSON
  );
};

export const equals = (a: any, b: any) => {
  if (a == null && a == b) {
    return true;
  }
  if (a === b) {
    return true;
  }

  if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
    return false;
  }

  if (isArray(a)) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0, { length } = a; i < length; i++) {
      if (!equals(a[i], b[i])) return false;
    }
    return true;
  } else if (isObject(a)) {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }
    for (const key in a) {
      if (!equals(a[key], b[key])) return false;
    }
    return true;
  }
  return false;
};