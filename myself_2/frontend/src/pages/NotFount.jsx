import { Link } from 'react-router-dom'

const actions = [
  { to: '/', label: 'Go to home', hint: 'Head back to your tasks' },
  { to: '/login', label: 'Log in', hint: 'Already have an account?' },
  { to: '/signup', label: 'Create an account', hint: 'New here? It only takes a minute' },
]

function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 dark:bg-slate-950">
      <div className="w-full max-w-md">
        {/* Big 404, with the 0 drawn as an empty, unchecked task */}
        <div
          aria-hidden="true"
          className="flex items-center justify-center gap-3 text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          <span>4</span>
          <span className="h-20 w-20 rounded-full border-8 border-dashed border-indigo-400" />
          <span>4</span>
        </div>

        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Page not found
          </h1>
          <p className="mx-auto mt-2 max-w-sm text-slate-600 dark:text-slate-400">
            The link may be broken, or the page may have moved. Pick one of these to keep going.
          </p>
        </div>

        {/* Actions styled like todo items: hovering "checks" the box */}
        <ul className="mt-8 space-y-3">
          {actions.map(({ to, label, hint }) => (
            <li key={to}>
              <Link
                to={to}
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm transition-colors hover:border-indigo-300 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500 dark:hover:bg-slate-800 dark:focus-visible:ring-offset-slate-950"
              >
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 text-white transition-colors group-hover:border-indigo-600 group-hover:bg-indigo-600 group-focus-visible:border-indigo-600 group-focus-visible:bg-indigo-600 dark:border-slate-600"
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="min-w-0">
                  <span className="block font-semibold text-slate-900 dark:text-white">
                    {label}
                  </span>
                  <span className="block text-sm text-slate-500 dark:text-slate-400">
                    {hint}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default NotFoundPage