/// <reference types="astro/client" />
import type library from "hydro-jsintegrations/server";

type ModifiedEventHandlers<T> = {
  [K in keyof T]: T[K];
};

type CustomAttributes<Type> = Omit<
  Partial<ModifiedEventHandlers<Type>>,
  "children"
> & {
  class?: string;
  is?: string;
};
type CastToCustomAttributes<T> = {
  [P in keyof T]: CustomAttributes<T[P]>;
};

export declare global {
  namespace JSX {
    interface IntrinsicElements
      extends CastToCustomAttributes<HTMLElementTagNameMap> {}
  }
}
