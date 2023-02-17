/**
 * Funcion para poder crear classes de manera condicional para evitar el uso de librerías
 * @param  {...String} classes
 * @returns
 */
export function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}
