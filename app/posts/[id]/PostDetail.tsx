import { Post } from '../types'
import styles from './PostDetail.module.css'

export default function PostDetail({ post }: { post: Post }) {
  return (
    <div className={styles.detail}>
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}
