import '../styles/globals.css';
// import withGraphQLReact from "next-graphql-react/withGraphQLReact.mjs";
import { DefaultSeo } from 'next-seo'

import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  
  return(
        <>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </>
  )
}

export default MyApp

// export default withGraphQLReact(MyApp);