import Link from "next/link";

export default async function PostsPage() {
  const posts = await prisma.post.findMany();

  return (
    <main className="flex flex-col items-center gap-y-3 pt-24 text-center">
      <h1 className="text-3xl font-semibold">All posts (0)</h1>
      <ul className="border-t border-b border-black/10 py-5 leading-8">
        {posts.map((post) => (
          <li key={post.id} className="flex items-center justify-between px-5">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
