import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import path from 'path';
import Page from './payload/collections/Page';
import Media from './payload/collections/Media';
import { Header } from './payload/globals/Header';
import { Footer } from './payload/globals/Footer';
import { PreFooter } from './payload/globals/PreFooter';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Page,
    Media,
  ],
  globals: [
    Header,
    Footer,
    PreFooter,
  ],
  admin: {
    css: path.resolve(__dirname, 'css/adminStyles.scss'),
  },
});
