import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Emer Ní Chíobháin Art</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Header title="Emer Ní Chíobháin" subtitle="artist, coder, maker" />
        <p className="description">
        site under construction
        </p>
        <a href="http://emernichiobhainart.weebly.com/" className="description">
        see old portfolio website here
        </a>
      </main>

      {/* <Footer /> */}
    </div>
  )
}
