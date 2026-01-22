const Navbar = () => {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold text-gray-900">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-white text-sm">
            CA
          </div>
          <span>CA Monk</span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a className="hover:text-gray-900 cursor-pointer">Tools</a>
          <a className="hover:text-gray-900 cursor-pointer">Practice</a>
          <a className="hover:text-gray-900 cursor-pointer">Events</a>
          <a className="hover:text-gray-900 cursor-pointer">Job Board</a>
          <a className="hover:text-gray-900 cursor-pointer">Points</a>
        </nav>

        {/* Profile */}
        <button className="rounded-md bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700">
          Profile
        </button>
      </div>
    </header>
  )
}

export default Navbar
