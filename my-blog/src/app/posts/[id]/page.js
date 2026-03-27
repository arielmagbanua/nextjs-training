import { posts } from "@/app/data/posts";
import styles from "./Post.module.css";
import Layout from "@/app/navigation";

export default async function PostPage({ params }) {
  const { id } = await params;
  const post = posts.find((post) => post.id === id);

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.content}>{post.content}</p>
      </div>
    </Layout>
  );
}
