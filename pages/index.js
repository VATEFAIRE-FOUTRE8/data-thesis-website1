import Head from 'next/head';
import DataThesisWebsite from '../components/DataThesisWebsite';

export default function Home() {
  return (
    <>
      <Head>
        <title>The Data Thesis | 8-Week Macro Trading Mentorship</title>
        <meta 
          name="description" 
          content="Learn a structured macro framework for understanding economic data, central-bank expectations, Treasury yields, and market context through one-on-one intensive mentorship." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="The Data Thesis | 8-Week Macro Trading Mentorship" />
        <meta 
          property="og:description" 
          content="Stop trading the chart. Start understanding what moves the market." 
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Data Thesis | 8-Week Macro Trading Mentorship" />
        <meta 
          name="twitter:description" 
          content="Stop trading the chart. Start understanding what moves the market." 
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://thedatathesis.com" />
      </Head>
      
      <DataThesisWebsite />
    </>
  );
}
