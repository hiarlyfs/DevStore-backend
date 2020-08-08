export enum ProductsPlace {
  DEFAULT,
  ADD
}

export function getEnumByValue(value: string): ProductsPlace {
  const valueEnum = value === 'default' ? 'DEFAULT' : 'ADD'
  return ProductsPlace[valueEnum]
}
