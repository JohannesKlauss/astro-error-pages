<hr>
<div align="center">
  <h1 align="center">
    Astro Error Pages
  </h1>
</div>

<p align="center">
  <a href="https://bundlephobia.com/result?p=astro-error-pages">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/astro-error-pages?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Types" href="https://www.npmjs.com/package/astro-error-pages">
    <img alt="Types" src="https://img.shields.io/npm/types/astro-error-pages?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/astro-error-pages">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/astro-error-pages?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/astro-error-pages?style=for-the-badge&labelColor=24292e">
  </a>
</p>

<p align="center">
  <a aria-label="Developed during Spacetime" href="https://spaceteams.de">
    <img alt="Developed during Spacetime" src="https://raw.githubusercontent.com/spaceteams/badges/main/developed-during-spacetime.svg">
  </a>
</p>

<pre align="center">npm i astro-error-pages</pre>

<p align="center">
Astro Error Pages is a simple yet effective middleware for your Astro SSR (Server-Side Rendered) applications.
It provides you with a way to intercept server responses, analyze status codes, and redirect to custom error pages when necessary.
This functionality enables a more user-friendly error handling and overall smoother user experience.
</p>

<hr>

## Quick Start

In your Astro project create a file `src/middleware.ts` if you don't have one already. Then add the following code:

```jsx harmony
import {sequence} from "astro/middleware"
import {astroErrorPages} from "error-pages"

export const onRequest = sequence(astroErrorPages())
```

### Custom Error Pages

To take advantage of Astro Error Pages, you'll need to create corresponding error pages at the specified path.
For example, if you keep the default configuration, you should create pages like `/error-pages/404`, `/error-pages/500`, etc.

When a server response with a status code >= 400 is encountered, the user will be redirected to the corresponding error page.

For unexpected errors (those that throw exceptions), the user will be redirected to the `500` error page.
If `logInternalServerErrors` is set to `true` (default), the error will also be logged to the console.

## Documentation

* [Quick Start](https://astro-error-pages.vercel.app/docs/intro)
* [Documentation](https://astro-error-pages.vercel.app/docs/documentation/installation)

## Config

| Option                    | Type       | Default value   | Description                                                           |
|---------------------------|------------|-----------------|-----------------------------------------------------------------------|
| `path`                    | `string`   | `/error-pages`  | The base path to redirect to if the server encountered an error.      |
| `logInternalServerErrors` | `boolean`  | `true`          | Whether to log internal server errors that causes a 500 error or not. |

## Support

* Ask your question in the [Github Discussions]([Support](https://github.com/JohannesKlauss/astro-error-pages/discussions))
* Ask your question on [StackOverflow](https://stackoverflow.com/search?page=1&tab=Relevance&q=astro-error-pages)

## Found an issue or have a feature request?

Open up an [issue](https://github.com/JohannesKlauss/astro-error-pages/issues/new)
or [pull request](https://github.com/JohannesKlauss/astro-error-pages/compare) and participate.

## Local Development

Checkout this repo, run `npm i` and then go into the proper example (or add a new one) to test your case.

## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Johannes Klauss - [@JohannesKlauss](https://github.com/JohannesKlauss) - klauss.johannes@gmail.com

Project Link: [https://github.com/JohannesKlauss/astro-error-pages](https://github.com/JohannesKlauss/astro-error-pages)

## Contributors

<a href="https://github.com/johannesklauss/astro-error-pages/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=johannesklauss/astro-error-pages" />
</a>
