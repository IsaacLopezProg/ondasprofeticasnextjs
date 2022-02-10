import '../styles/globals.css';
// import withGraphQLReact from "next-graphql-react/withGraphQLReact.mjs";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

// export default withGraphQLReact(MyApp);