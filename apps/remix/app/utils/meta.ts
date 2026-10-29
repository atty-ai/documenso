import { NEXT_PUBLIC_WEBAPP_URL } from '@documenso/lib/constants/app';
import { i18n, type MessageDescriptor } from '@lingui/core';

export const appMetaTags = (title?: MessageDescriptor) => {
  const description =
    'Atty AI agreements: review and sign your Atty AI documents securely online.';

  return [
    {
      title: title ? `${i18n._(title)} - Atty AI` : 'Atty AI',
    },
    {
      name: 'description',
      content: description,
    },
    {
      name: 'keywords',
      content:
        'Atty AI, agreements, electronic signature',
    },
    {
      name: 'author',
      content: 'Jonie.ai, LLC d/b/a Atty AI',
    },
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
    {
      property: 'og:title',
      content: 'Atty AI Agreements',
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: '@atty_ai',
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
  ];
};
