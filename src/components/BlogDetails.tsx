import { Badge } from "./ui/badge"
import { Skeleton } from "./ui/skeleton"

interface BlogDetailsProps {
  blog: {
    id: number
    title: string
    category: string[] | string
    date: string
    content: string
    coverImage: string
    tags?: string[]
    author?: string 
  } | null
  isLoading: boolean
}

const BlogDetails = ({ blog, isLoading }: BlogDetailsProps) => {
  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-64 w-full rounded-xl" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-32 w-full" />
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
        Select an article to read
      </div>
    )
  }

  return (
    <article className="space-y-6">
      {/* Cover Image */}
      <img
        src={blog.coverImage}
        alt={blog.title}
        className="h-[360px] w-full rounded-xl object-cover"
      />

      {/* Meta Info */}
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <Badge variant="secondary">
          {Array.isArray(blog.category)
            ? blog.category.join(", ")
            : blog.category}
        </Badge>
        <span>5 min read</span>
        <span>{blog.date}</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold leading-tight text-gray-900">
        {blog.title}
      </h1>

      {/* Content */}
      <div className="prose prose-gray max-w-none">
        <p>{blog.content}</p>
      </div>

      {/* Tags */}
      {Array.isArray(blog.tags) && blog.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-4">
          {blog.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              #{tag}
            </Badge>
          ))}
        </div>
      )}

      {/* Author Section */}
      <div className="mt-10 flex items-center gap-4 border-t pt-6">
    <div className="h-10 w-10 rounded-full bg-gray-300" />
    <div>
    <p className="text-sm font-medium text-gray-900">
      Written by {blog.author ?? "Anonymous"}
    </p>
    <p className="text-xs text-muted-foreground">
      Blog Contributor
    </p>
    </div>
</div>
    </article>
  )
}

export default BlogDetails
