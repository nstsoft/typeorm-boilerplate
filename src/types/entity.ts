export type BaseEntity<T> = {
  [key in keyof T]: T[key];
} & {
  toRaw(): T;
  toObject(): T;
  toRaw(): T;
  toJson(): string;
  properties(): Record<string, unknown>;
};
