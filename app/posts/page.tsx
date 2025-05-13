import { getAllPosts } from './utils'
import PostCard from './PostCard'

export default async function PostsPage() {
  const posts = await getAllPosts()

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  )
}
