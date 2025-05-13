import { getPostById } from './utils'
import PostDetail from './PostDetail'

interface Params {
  params: { id: string }
}

export default async function PostPage({ params }: Params) {
  const post = await getPostById(params.id)

  return (
    <main className="p-6">
      <PostDetail post={post} />
    </main>
  )
}
