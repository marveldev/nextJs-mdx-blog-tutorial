import React from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import '../../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>NextJs Blog</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="container">
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default MyApp
