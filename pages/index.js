import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="Home page ">
      Home page
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4"></div>
    </Layout>
  );
}
