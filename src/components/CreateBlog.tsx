import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { createBlog } from "@/services/blogApi"

const CreateBlog = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] })
    },
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    mutation.mutate({
      author: formData.get("author"),
      title: formData.get("title"),
      category: ["FINANCE"],
      description: formData.get("description"),
      content: formData.get("content"),
      date: new Date().toISOString(),
      coverImage:
        "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
    })

    e.currentTarget.reset()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border bg-white p-6"
    >
      <h2 className="text-lg font-semibold text-gray-900">
        Create New Blog
      </h2>

      <Input
        name="author"
        placeholder="Author name"
        required
      />

      <Input
        name="title"
        placeholder="Blog title"
        required
      />

      <Textarea
        name="description"
        placeholder="Short description"
        required
      />

      <Textarea
        name="content"
        placeholder="Full blog content"
        rows={5}
        required
      />

      <Button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Creating..." : "Create Blog"}
      </Button>

      {mutation.isError && (
        <p className="text-sm text-red-500">
          Failed to create blog
        </p>
      )}
    </form>
  )
}

export default CreateBlog
