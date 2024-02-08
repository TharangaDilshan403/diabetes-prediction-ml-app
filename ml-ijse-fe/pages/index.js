import Footer from "@/components/Footer";
import Form from "../components/DetailForm";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { SSRProvider } from 'react-bootstrap';

export default function Home() {
  return (
    <SSRProvider>
      <>
        <Head>
          <title>Diabetes Prediction System</title>
          <meta name="description" content="Check your Diabetes status" />\
          <link rel="icon" href="/favicon.svg" />
        </Head>

        <Navbar />
        <Form/>
        <Footer />
      </>
    </SSRProvider>
  );
}
