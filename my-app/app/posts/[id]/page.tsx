import styles from "./Post.module.css";
import Layout from "@/app/navigation";

export interface Post {
  id: string;
}

export default async function Post({ params }: { params: Promise<Post> }) {
  const { id } = await params;
  return (
    <Layout>
      <div className={styles["post-container"]}>Post {id}</div>
    </Layout>
  );
}
