export const soma = (value: number): number => {
  return value + 1
}

export const multiplica = (value: number, mult: number): number | string => {
  if (mult === 2 || mult === 3) {
    return value * mult
  }

  return 'Multiplicador não aceito'
}