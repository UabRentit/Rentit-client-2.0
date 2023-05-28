import React, { useEffect } from 'react';
import payload from 'payload';
import { GetServerSideProps } from 'next';
import getConfig from 'next/config';
import { Type as PageType } from '../payload/collections/Page';
import NotFound from '../components/NotFound';
import Head from '../components/Head';
import classes from '../css/page.module.scss';
import RenderBlocks from '../components/RenderBlocks';
import PreFooter from '../components/Layout/PreFooter';
import { Type as PreFooterType } from '../payload/globals/PreFooter';

const { publicRuntimeConfig: { SERVER_URL } } = getConfig();

export type Props = {
  page?: PageType
  statusCode: number
  prefooter: PreFooterType
}

const Page = (props: Props): React.ReactElement => {
  const { page, prefooter } = props;

  useEffect(() => {
    console.log(page.image, 'page.image');
  }, [page]);

  if (!page) {
    return <NotFound />;
  }

  return (
    <main className={classes.page}>
      <Head
        title={page.meta?.title || page.title}
        description={page.meta?.description}
        keywords={page.meta?.keywords}
      />
      <header className={classes.header} />
      <h1>{page.title}</h1>
      <div className={classes.featuredImage}>
        {page.image && (
          <img
            src={`${SERVER_URL}/media/${page.image.sizes?.feature?.filename || page.image.filename}`}
            alt={page.image.alt}
          />
        )}
      </div>
      <RenderBlocks layout={page.layout} />
      <PreFooter prefooter={prefooter} />
    </main>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug ? (ctx.params.slug as string[]).join('/') : 'pagrindinis';
  const [prefooter] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/prefooter`).then((res) => res.json()),
  ]);

  const pageQuery = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!pageQuery.docs[0]) {
    ctx.res.statusCode = 404;

    return {
      props: {},
    };
  }

  return {
    props: {
      page: pageQuery.docs[0],
      prefooter,
    },
  };
};
