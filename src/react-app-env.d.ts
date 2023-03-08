/// <reference types="react" />
declare module "*.gif";
declare module "*.module.scss" {
  const content: { [className: string]: string };
  export default content;
}
declare type valueOf<T> = T[keyof T];
