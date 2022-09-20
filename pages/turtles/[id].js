import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((turtle) => {
    return {
      params: { id: turtle.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { turtle: data },
  };
};

const Details = ({ turtle }) => {
  return (
    <>
      <Head>
        <title>{turtle.name} | Turtle List</title>
        <meta name="keywords" content={turtle.name} />
      </Head>
      <div>
        <h1>{turtle.name}</h1>
        <p>{turtle.email}</p>
        <p>{turtle.website}</p>
        <p>{turtle.address.city}</p>
      </div>
    </>
  );
};

export default Details;
