📝 Blog Application (Frontend Assignment)

A modern blog application built using React, TanStack Query, Tailwind CSS, and shadcn/ui.
The app allows users to view blogs, read a blog in detail, and create new blogs using a mock backend powered by JSON Server.

🚀 Features

📄 View all blogs

🔍 View blog details by ID

✍️ Create a new blog

⚡ Server state management using TanStack Query

⏳ Loading states with skeletons

❌ Error handling

📱 Responsive UI

🎨 Styled using Tailwind CSS and shadcn/ui components

🛠️ Tech Stack

React (Vite)

TypeScript

TanStack Query

Tailwind CSS

shadcn/ui

JSON Server (Mock API)

📂 Project Structure
src/
 ├── components/
 │   ├── BlogCard.tsx
 │   ├── BlogDetails.tsx
 │   ├── BlogList.tsx
 │   ├── CreateBlog.tsx
 │   ├── Layout.tsx
 │   ├── Navbar.tsx
 │   ├── Hero.tsx
 │   ├── Footer.tsx
 │   └── ui/
 │       ├── button.tsx
 │       ├── input.tsx
 │       ├── textarea.tsx
 │       ├── badge.tsx
 │       └── skeleton.tsx
 ├── services/
 │   └── blogApi.ts
 ├── App.tsx
 ├── main.tsx
 └── index.css

🔗 API Endpoints (JSON Server)
Method	Endpoint	Description
GET	/blogs	Get all blogs
GET	/blogs/:id	Get blog by ID
POST	/blogs	Create a new blog
📦 Sample Blog Object
{
  "id": 1,
  "title": "Future of Fintech",
  "category": ["FINANCE", "TECH"],
  "description": "Exploring how AI and blockchain are reshaping financial services",
  "date": "2026-01-11T09:12:45.120Z",
  "coverImage": "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
  "content": "Full blog content...",
  "author": "John Doe"
}

▶️ Getting Started
1️⃣ Clone the repository
git clone <your-repo-url>
cd FRONTEND-INTERVIEW

2️⃣ Install dependencies
npm install

3️⃣ Start JSON Server
npx json-server --watch db.json --port 4000


Make sure the API is accessible at:

http://localhost:4000/blogs

4️⃣ Start the frontend
npm run dev


The app will run at:

http://localhost:5173

🧠 Key Implementation Details

TanStack Query is used for:

Fetching all blogs

Fetching blog by ID

Creating a blog with query invalidation

Conditional queries prevent unnecessary API calls

Skeleton loaders improve UX during loading states

Optional fields are handled safely to prevent runtime crashes

✅ Assignment Checklist

 Get all blogs

 Get blog by ID

 Create blog

 TanStack Query integration

 Tailwind CSS styling

 shadcn/ui components

 Error & loading states

 Responsive design

👤 Author

Developed by Awanish Singh

📌 Notes

This project uses JSON Server as a mock backend.

No authentication is implemented as it was not part of the assignment scope.

📘 What I Learned

While building this blog application, I gained hands-on experience with modern frontend development practices. Key learnings include:

TanStack Query for Server State

Learned how to fetch, cache, and manage server data using useQuery and useMutation

Used query invalidation to automatically refresh data after creating a new blog

Implemented conditional queries to avoid unnecessary API calls

Handling Loading and Error States

Implemented skeleton loaders for better user experience during API calls

Handled API errors gracefully to prevent application crashes

Component-Based Architecture

Broke the UI into reusable components like BlogList, BlogDetails, and CreateBlog

Improved readability and maintainability through proper file organization

TypeScript in Real Projects

Learned the importance of keeping TypeScript interfaces in sync with API data

Handled optional fields safely to avoid runtime errors

Styling with Tailwind CSS and shadcn/ui

Built consistent and responsive UI using utility-first CSS

Used shadcn/ui components for faster and cleaner UI development

Debugging Real-World Issues

Fixed common React issues such as blank screens, undefined data access, and runtime crashes

Learned how to debug using browser console errors and component isolation.