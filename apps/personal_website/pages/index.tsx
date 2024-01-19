import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import { GetStaticPropsResult, InferGetStaticPropsType } from "next";
import Date from "../components/date";
import { PostsData } from "../types";
import { sayHello } from "utils";

/* This is possible because getStaticProps only runs on the server-side. It will never run on the
client-side. It won’t even be included in the JS bundle for the browser. That means you can write code
such as direct database queries without them being sent to browsers.
In development (npm run dev or yarn dev), getStaticProps runs on every request.
In production, getStaticProps runs at build time. However, this behavior can be
enhanced using the fallback key returned by getStaticPaths
*/
export async function getStaticProps(): Promise<
  GetStaticPropsResult<{ allPostsData: PostsData[] }>
> {
  const allPostsData: PostsData[] = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({
  allPostsData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  sayHello();
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I&apos;m David. I am a senior software engineer</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
