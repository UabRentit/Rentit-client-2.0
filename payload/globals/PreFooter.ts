import type { GlobalConfig } from 'payload/types';
import { Image } from '../blocks/Image/Config';
import link, { Type as LinkType } from '../fields/link';
import { MediaType } from '../collections/Media';

export type Type = {
    heading: {
        heading: string
        subheading: string
    },
    footerImage: MediaType,
    ctaButton: LinkType
}
export const PreFooter: GlobalConfig = {
  slug: 'prefooter',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'heading',
          type: 'group',
          fields: [
            {
              name: 'heading',
              label: 'Heading',
              type: 'text',
              required: true,
            },
            {
              name: 'subheading',
              label: 'SubHeading',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'footerImage',
          label: 'Footer Image',
          type: 'blocks',
          minRows: 1,
          blocks: [
            Image,
          ],
        },
      ],
    },
    {
      name: 'ctaButton',
      label: 'CTA Button',
      type: 'group',
      fields: [
        link,
      ],
    },
  ],
};
