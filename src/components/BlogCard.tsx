interface BlogCardProps {
  title: string
  category: string
  date: string
  description: string
  isActive?: boolean
  onClick?: () => void
}

const BlogCard = ({
  title,
  category,
  date,
  description,
  isActive = false,
  onClick,
}: BlogCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer rounded-lg px-4 py-3 transition
        hover:bg-gray-50
        ${isActive ? "bg-gray-50" : ""}
      `}
    >
      {/* Active indicator */}
      {isActive && (
        <span className="absolute left-0 top-3 h-8 w-1 rounded-r bg-blue-600" />
      )}

      {/* Category */}
      <p className="text-xs font-medium uppercase tracking-wide text-blue-600">
        {category}
      </p>

      {/* Title */}
      <h3 className="mt-1 text-sm font-semibold leading-snug text-gray-900">
        {title}
      </h3>

      {/* Meta */}
      <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
        <span>{date}</span>
        <span>•</span>
        <span>5 min read</span>
      </div>

      {/* Description */}
      <p className="mt-1 text-xs text-gray-600 line-clamp-2">
        {description}
      </p>
    </div>
  )
}

export default BlogCard
