import {sequence, defineMiddleware} from "astro/middleware";
import {astroErrorPages} from "error-pages";

export const onRequest = sequence(astroErrorPages());
