import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layout/PreLoader";
import "/styles/glitch.css";
import "/styles/globals.css";
import "../public/static/css/style.css"; // Import the global style sheet

// // Import fonts from next/font/google
// import { Rubik, Playfair_Display } from 'next/font/google';

// // Instantiate the fonts
// const rubik = Rubik({
//   subsets: ['latin'],
//   variable: '--font-rubik', // Optional: for CSS variables
// });
// const playfairDisplay = Playfair_Display({
//   subsets: ['latin'],
//   variable: '--font-playfair-display', // Optional: for CSS variables
// });

function MyApp({ Component, pageProps }) {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Bouchniba - Mansour</title>
        {/* <!-- Favicon --> */}
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        {/* Fonts are now handled by next/font, so no need for <link> tags for fonts */}
      </Head>
      {/* Apply font classes to the main component */}
      <div className={`${rubik.variable} ${playfairDisplay.variable}`}>
        {load && <PreLoader />}
        <Component {...pageProps} />
      </div>
    </Fragment>
  );
}

export default MyApp;
