import { Box } from '@chakra-ui/core';
import React from 'react';

function Header() {
  return (
    <Box as="header" bg="white">
      Header
    </Box>
  );
}

export function CenteredContainer({
  as: Component = Box,
  max = '1200px',
  children,
  ...props
}) {
  return (
    <Component maxW={max} mx="auto" px={{ base: '4', lg: 0 }} {...props}>
      {children}
    </Component>
  );
}

function Footer() {
  return (
    <Box as="footer" py={6} mt={10}>
      Footer
    </Box>
  );
}

export function BaseLayout({
  children,
  containerProps,
  categories,
  popularTags,
  ...props
}) {
  return (
    <Box {...props}>
      <Header categories={categories} />
      <CenteredContainer {...containerProps}>{children}</CenteredContainer>
      <Footer popularTags={popularTags} />
    </Box>
  );
}
