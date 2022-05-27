import Head from 'next/head'
import Home from './home'

export default function Index() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Create by Fajar Prasetya" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home/>
    </>
  )
}
