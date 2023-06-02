---
title: Configuration
description: Configuration reference for Astro Error Pages middleware.
---

Astro Error Pages has a small set of configurations to customize its behavior. If you are missing a feature or a configuration,
feel free to open an issue on the [Github repository](https://github.com/JohannesKlauss/astro-error-pages/issues/new).

| Option                    | Type       | Default value   | Description                                                           |
|---------------------------|------------|-----------------|-----------------------------------------------------------------------|
| `path`                    | `string`   | `/error-pages`  | The base path to redirect to if the server encountered an error.      |
| `logInternalServerErrors` | `boolean`  | `true`          | Whether to log internal server errors that causes a 500 error or not. |
