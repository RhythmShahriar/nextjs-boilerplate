import { Box, Grid, SimpleGrid, Stack } from '@chakra-ui/core';
import { BaseLayout } from 'components/layout/layout';
import Head from 'next/head';

function Home() {
  return (
    <>
      <Head>
        <title>Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BaseLayout></BaseLayout>
    </>
  );
}

export default Home;
