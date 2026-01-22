const Footer = () => {
  return (
    <footer className="mt-20 bg-gradient-to-b from-gray-900 to-black text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white font-semibold">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-sm">
                CA
              </div>
              <span>CA Monk</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Empowering the next generation of financial leaders with tools,
              community, and knowledge.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Webinars</li>
              <li className="hover:text-white cursor-pointer">Case Studies</li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Job Board</li>
              <li className="hover:text-white cursor-pointer">Practice Tests</li>
              <li className="hover:text-white cursor-pointer">Mentorship</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">LinkedIn</li>
              <li className="hover:text-white cursor-pointer">Twitter</li>
              <li className="hover:text-white cursor-pointer">Instagram</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-800" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
          <p>© 2026 CA Monk. All rights reserved.</p>
          <p>Built by Awanish Singh</p>

          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-white">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
