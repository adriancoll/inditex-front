import axios from 'axios'
import wrapper from 'axios-cache-plugin'

/**
 * Crea la instancia de axios para el proxy de cache
 * @param {Srring} service nombre del prefijo del endpoint
 * @returns
 */
export const http = (service) =>
  axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}${service}`
  })

/**
 * Cachear peticiones de axios en una instancia de axios
 * @param {Srring} service nombre del prefijo del endpoint
 * @returns
 */
export const httpProxy = (service) =>
  wrapper(http(service), {
    maxCacheSize: 15
  })
