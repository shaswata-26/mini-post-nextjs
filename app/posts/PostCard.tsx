import Link from 'next/link'
import { Post } from './types'
import styles from './PostCard.module.css'

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className={styles.card}>
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p>{post.body.slice(0, 100)}...</p>
      <Link href={`/posts/${post.id}`} className="text-blue-600 underline mt-2 block">
        Read more
      </Link>
    </div>
  )
}
