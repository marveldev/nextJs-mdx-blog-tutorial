import Head from 'next/head'
import React from 'react'

const Bio = () => {
  return (
    <div>
      <Head>
        <title>NextJs Blog Bio</title>
      </Head>

      <main className="mt-3">
        <p className="display-4 text-center">I&apos;m Marvellous Alika</p>
        <p className="text-center">Marvellous Alika&apos;s bio here</p>
      </main>
    </div>
  )
}

export default Bio
