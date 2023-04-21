const ResourcePage = () => {
  return (
    <div>
      <h1>Welcome from resources page</h1>
    </div>
  );
};

export async function getStaticPaths() {
  const { all_resources } = await import("../../data/resource.json");
  const allPaths = all_resources.map((path) => {
    return {
      params: {
        id: path.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {

  const id = context?.params.id;
  console.log(id);
  return {
    props: {},
  };
}

export default ResourcePage;
