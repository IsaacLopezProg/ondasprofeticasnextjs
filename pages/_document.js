import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic&display=optional' rel='stylesheet' type='text/css'/>
            <link href='https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900&display=optional' rel='stylesheet' type='text/css'/>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument