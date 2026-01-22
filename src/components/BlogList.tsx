import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import BlogCard from "./BlogCard"
import { Skeleton } from "@/components/ui/skeleton"
import { getBlogs } from "@/services/blogApi"


/* ---------------- Types ---------------- */
interface Blog {
  id: number
  title: string
  category: string
  date: string
  description: string
}

interface BlogListProps {
  selectedBlogId: number | null
  onSelectBlog: (id: number) => void
}

/* ---------------- Component ---------------- */
const BlogList = ({ selectedBlogId, onSelectBlog }: BlogListProps) => {
  const [search, setSearch] = useState("")

  const {
    data: blogs,
    isLoading,
    isError,
  } = useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  })

  /* ---------------- Search Filter ---------------- */
  const filteredBlogs = blogs?.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  )

  /* ---------------- Loading State ---------------- */
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-24 w-full rounded-lg" />
        ))}
      </div>
    )
  }

  /* ---------------- Error State ---------------- */
  if (isError) {
    return (
      <p className="text-sm text-red-500">
        Failed to load articles
      </p>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-sm font-semibold text-gray-900">
          Latest Articles
        </h2>
        <p className="text-xs text-gray-500">
          Browse and read insights
        </p>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search articles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
      />

      {/* Blog List */}
      <div className="space-y-2">
        {filteredBlogs && filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              category={blog.category}
              date={blog.date}
              description={blog.description}
              isActive={selectedBlogId === blog.id}
              onClick={() => onSelectBlog(blog.id)}
            />
          ))
        ) : (
          <p className="text-sm text-gray-500">
            No articles found
          </p>
        )}
      </div>
    </div>
  )
}

export default BlogList
