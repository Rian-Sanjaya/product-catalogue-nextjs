import Head from "next/head";
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Product Catalogue</title>
      </Head>
      <Navbar />
      <>{children}</>
    </>
  )
}