import '../styles/globals.scss'
import Layout from '../components/layout';
import "../styles/pages/eventos.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

}

export default MyApp
