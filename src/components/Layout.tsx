import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import BlogList from "./BlogList"
import BlogDetails from "./BlogDetails"
import { getBlogs, getBlogById } from "@/services/blogApi"
import CreateBlog from "./CreateBlog"


const Layout = () => {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null)

  // 1️⃣ Get all blogs
  const {
    data: blogs,
    isLoading: blogsLoading,
    isError: blogsError,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  })

  // 2️⃣ Auto-select first blog when blogs load
  useEffect(() => {
    if (blogs && blogs.length > 0 && selectedBlogId === null) {
      setSelectedBlogId(blogs[0].id)
    }
  }, [blogs, selectedBlogId])

  // 3️⃣ Get selected blog details
  const {
    data: selectedBlog,
    isLoading: blogLoading,
    isError: blogError,
  } = useQuery({
    queryKey: ["blog", selectedBlogId],
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey
      return getBlogById(id as number)
    },
    enabled: selectedBlogId !== null,
  })

  // 4️⃣ Global error handling
  if (blogsError) {
    return (
      <div className="p-6 text-sm text-red-500">
        Failed to load blogs
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-6 pb-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
        {/* Sidebar */}
        <aside className="space-y-6">
          <CreateBlog />
          <BlogList
            selectedBlogId={selectedBlogId}
            onSelectBlog={setSelectedBlogId}
          />
        </aside>

        {/* Main Content */}
        <main>
          {blogError ? (
            <p className="text-sm text-red-500">
              Failed to load blog
            </p>
          ) : (
            <BlogDetails
              blog={selectedBlog ?? null}
              isLoading={blogsLoading || blogLoading}
            />
          )}
        </main>
      </div>
    </div>
  )
}

export default Layout
