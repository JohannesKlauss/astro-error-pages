import { Config } from './types'
import { defineMiddleware } from 'astro/middleware'

const defaultConfig: Config = {
  path: '/error-pages',
  logInternalServerErrors: true,
}

export function astroErrorPages(config?: Config) {
  config = {
    ...defaultConfig,
    ...config,
  }

  return defineMiddleware(async ({ redirect }, next) => {
    try {
      const response = await next()

      if (response.status > 399) {
        return redirect(`${config.path}/${response.status}`)
      }

      return response
    } catch (e) {
      if (config.logInternalServerErrors) {
        console.log(e)
      }

      return redirect(`${config.path}/500`)
    }
  })
}
