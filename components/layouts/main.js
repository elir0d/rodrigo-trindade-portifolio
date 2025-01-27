import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container, Divider } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Rodrigo's homepage" />
        <meta name="author" content="Rodrigo Trindade" />
        <meta name="author" content="Personal" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Rodrigo Trindade" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@elir0d" />
        <meta name="twitter:creator" content="@Rodrigo Trindade" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Rodrigo Trindade" />
        <meta name="og:title" content="Rodrigo Trindade" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Rodrigo Trindade - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <Divider my={6} />
        <LazyVoxelDog />
        <Divider my={6} />

        {children}

        <Divider my={6} />
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
