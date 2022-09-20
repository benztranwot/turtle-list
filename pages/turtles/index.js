import styles from "../../styles/Turtles.module.css";
import Link from "next/link";
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { turtles: data },
  };
};

const Turtles = ({ turtles }) => {
  return (
    <>
      <Head>
        <title>Turtles | Turtle List</title>
        <meta name="keywords" content="turtle" />
      </Head>
      <div>
        <h1>All Turtles</h1>
        {turtles.map((turtle) => (
          <Link key={turtle.id} href={`/turtles/${turtle.id}`}>
            <a className={styles.single}>
              <h3>{turtle.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Turtles;
