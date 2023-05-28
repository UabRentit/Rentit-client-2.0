import type { GlobalConfig } from 'payload/types';
import link from '../fields/link';


export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'nav',
      label: 'Navigation',
      type: 'array',
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      fields: [
        link,
      ],
    },
  ],
};
