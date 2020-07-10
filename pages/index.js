import Head from 'next/head'

const Home = () => (
  <div className="container">
    <Head>
      <title>Magno Correa</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        Magno Correa personal Website
      </h1>

      <p className="description">
        Solving poorly defined <code>problems</code>
      </p>

      <div className="grid">
        <a href="https://nextjs.org/docs" className="card">
          <h3>Telecom &rarr;</h3>
          <p>Here we can see some problems solved to Telecom Industry, expecialy in OSS.</p>
        </a>

        <a href="https://nextjs.org/learn" className="card">
          <h3>Mechatronics &rarr;</h3>
          <p>Some stufs in the phisical world! Mostly about Domotics and Manufacturing.</p>
        </a>

        <a
          href="https://github.com/zeit/next.js/tree/master/examples"
          className="card"
        >
          <h3>Legacy &rarr;</h3>
          <p>Seem the past to provide best solutions to the future.</p>
        </a>

        <a
          href="https://vercel.com/new?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className="card"
        >
          <h3>Hype &rarr;</h3>
          <p>
            Looking ahead to be in the future now! Hardware, software and beyond!
          </p>
        </a>
      </div>
    </main>

    <footer>
		Powered by MagnoCorrea.com @2020
    </footer>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 3rem 0 2rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 75px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 3rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 0.75rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.25rem;
      }

      .card p {
        margin: 0;
        font-size: 1rem;
        line-height: 1.25;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
