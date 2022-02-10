import { builder, BuilderComponent, Builder } from '@builder.io/react'

builder.init('fb0e5cc283ee41ed967bd97a41783fce')

const MyComponent = (props) => (
  <>
    {/* <YourHeader /> */}
    {props.content || Builder.isPreviewing ?
      <BuilderComponent
        content={props.content}
        model="page" />
     : null}
    {/* <YourFooter /> */}
  </>
)

export default MyComponent;

// Get page data
// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
export const getStaticProps = async (context) => {
  const content = await builder.get('page', { url: context.resolvedUrl }).promise();

  return { 
    props: { content }, 
    revalidate: true,
    notFound: !content
  }
}

// List all Builder pages
// https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export const getStaticPaths = async () => {
  const results = await builder.getAll('page', {
    fields: 'data.url',
    key: 'all-pages',
    limit: 200,
    options: {
      noTargeting: true,
    },
  });

  return {
    paths: results.map((item) => ({
      params: {
        page: item.data.url.substr(1) // Remove preceeding slash
      },
    })),
    fallback: true,
  };
};