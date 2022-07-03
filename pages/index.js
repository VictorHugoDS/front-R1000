import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      olá munbdo

      <Link href={'/eventos'}>eventoss</Link>
    </Layout>
  )
}
