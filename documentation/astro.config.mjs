import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Astro Error Pages',
      social: {
        github: 'https://github.com/JohannesKlauss/astro-error-pages',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Installation & Usage', link: '/' },
          ],
        },
        {
          label: 'Configuration',
          autogenerate: { directory: 'config' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
