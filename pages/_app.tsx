import React from 'react';
import App from 'next/app';
import '@fontsource/roboto';
import '../css/style.scss';
import Menu from '../components/Layout/Menu';
import { Type as MenuType } from '../payload/globals/Header';
import Footer from '../components/Layout/Footer';


type AppProps = {
  pageProps: any
  Component: React.FC } & {
  menuData: MenuType
};

const MyApp = (appProps: AppProps): React.ReactElement => {
  const { Component, pageProps, menuData } = appProps;
  return (
    <div className="px-10 mt-4">
      <Menu
        menu={menuData}
      />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const [menuData, footer] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/header`).then((res) => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/footer`).then((res) => res.json()),
  ]);

  return {
    ...appProps,
    menuData,
    footer,
  };
};

export default MyApp;
