declare module "*.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "bundle-text:*" {
  const value: string;
  export default value;
}
