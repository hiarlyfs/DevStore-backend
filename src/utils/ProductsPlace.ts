export enum ProductsPlace {
  LOCAL,
  PERSONAL
}

export function getEnumByValue(value: string): ProductsPlace {
  const valueEnum = value === 'local' ? 'LOCAL' : 'PERSONAL'
  return ProductsPlace[valueEnum]
}
