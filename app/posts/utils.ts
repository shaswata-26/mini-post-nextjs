import { Post } from './types'

export async function getAllPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}
