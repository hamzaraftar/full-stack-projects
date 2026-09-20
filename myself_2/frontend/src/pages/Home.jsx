import { useState } from "react";
import { Link } from "react-router-dom";

// Change the name here and it updates everywhere on the page.
const APP_NAME = "Todo App";

// Add these fonts in your index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=Figtree:wght@400;500;600&display=swap" rel="stylesheet" />
const display =
  "font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif]";
const body = "font-['Figtree',ui-sans-serif,system-ui,sans-serif]";

const initialTasks = [
  { id: 1, label: "Book dentist appointment", due: "Today", done: true },
  { id: 2, label: "Send invoice to Maya", due: "Today", done: false },
  { id: 3, label: "Water the plants", due: "6 pm", done: true },
  { id: 4, label: "Plan Saturday hike", due: "Fri", done: false },
];

const features = [
  {
    title: "Add a task in seconds",
    text: "Type it, press Enter, and it's on your list.",
  },
  {
    title: "Never miss a deadline",
    text: "Set a due date and get a reminder before it arrives.",
  },
  {
    title: "Your list, everywhere",
    text: "Stays in sync across your phone, tablet, and laptop.",
  },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D4CFF]";

function CheckIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

function TaskPreview() {
  const [tasks, setTasks] = useState(initialTasks);

  const doneCount = tasks.filter((t) => t.done).length;
  const percent = Math.round((doneCount / tasks.length) * 100);

  const toggle = (id) =>
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );

  return (
    <div className="relative pb-4 pr-4">
      {/* Offset colour block behind the panel */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-[#FFC83D]"
      />

      <div className="relative rounded-3xl border border-[#17193B]/10 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-baseline justify-between">
          <h2 className={`${display} text-2xl font-extrabold text-[#17193B]`}>
            Today
          </h2>
          <p className="text-sm font-medium text-[#17193B]/60">
            {doneCount} of {tasks.length} done
          </p>
        </div>

        {/* Progress bar */}
        <div
          className="mt-4 h-2 overflow-hidden rounded-full bg-[#17193B]/10"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
          aria-label="Tasks completed"
        >
          <div
            className="h-full rounded-full bg-[#3D4CFF] transition-all duration-500 motion-reduce:transition-none"
            style={{ width: `${percent}%` }}
          />
        </div>

        <ul className="mt-6 divide-y divide-[#17193B]/10">
          {tasks.map((task) => (
            <li key={task.id}>
              <button
                type="button"
                role="checkbox"
                aria-checked={task.done}
                onClick={() => toggle(task.id)}
                className={`group flex w-full items-center gap-4 rounded-lg py-4 text-left ${focusRing}`}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-200 motion-reduce:transition-none ${
                    task.done
                      ? "border-[#3D4CFF] bg-[#3D4CFF] text-white"
                      : "border-[#17193B]/30 text-transparent group-hover:border-[#3D4CFF]"
                  }`}
                >
                  <CheckIcon className="h-4 w-4" />
                </span>

                {/* Strike-through line draws across when a task is done */}
                <span
                  className={`relative flex-1 text-base font-medium transition-colors duration-300 motion-reduce:transition-none after:absolute after:left-0 after:top-1/2 after:h-0.5 after:bg-current after:transition-all after:duration-300 motion-reduce:after:transition-none ${
                    task.done
                      ? "text-[#17193B]/40 after:w-full"
                      : "text-[#17193B] after:w-0"
                  }`}
                >
                  {task.label}
                </span>

                <span className="shrink-0 rounded-full bg-[#F2F5FA] px-3 py-1 text-xs font-semibold text-[#17193B]/70">
                  {task.due}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-sm text-[#17193B]/60">Try ticking one off.</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div
      className={`${body} flex min-h-screen flex-col bg-[#F2F5FA] text-[#17193B]`}
    >
      {/* Navigation */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Link
          to="/"
          className={`flex items-center gap-2.5 rounded-lg ${focusRing}`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#3D4CFF] text-white">
            <CheckIcon className="h-5 w-5" />
          </span>
          <span className={`${display} text-xl font-extrabold`}>
            {APP_NAME}
          </span>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/login"
            className={`rounded-full px-4 py-2 text-sm font-semibold hover:bg-[#17193B]/5 ${focusRing}`}
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className={`rounded-full bg-[#17193B] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#2b2f66] ${focusRing}`}
          >
            Create account
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pb-20 pt-10 lg:grid-cols-2 lg:gap-16 lg:pt-16">
          <div className="max-w-xl">
            <h1
              className={`${display} text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl`}
            >
              Welcome. Let&rsquo;s get your day in order.
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#17193B]/75">
              {APP_NAME} keeps your tasks, deadlines, and reminders in one
              simple list, so nothing slips through.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/signup"
                className={`inline-flex items-center justify-center rounded-full bg-[#3D4CFF] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#3D4CFF]/25 transition-colors hover:bg-[#2c3bee] ${focusRing}`}
              >
                Create free account
              </Link>
              <Link
                to="/login"
                className={`inline-flex items-center justify-center rounded-full border-2 border-[#17193B]/20 px-8 py-4 text-base font-semibold transition-colors hover:border-[#17193B] ${focusRing}`}
              >
                Log in
              </Link>
            </div>

            <p className="mt-5 text-sm text-[#17193B]/60">
              Free to use. Set up in under a minute.
            </p>
          </div>

          <TaskPreview />
        </section>

        {/* Features */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-24">
          <div className="grid gap-10 border-t-2 border-[#17193B] pt-8 md:grid-cols-3 md:gap-12">
            {features.map((f) => (
              <div key={f.title}>
                <h3 className={`${display} text-xl font-extrabold`}>
                  {f.title}
                </h3>
                <p className="mt-2 max-w-xs leading-relaxed text-[#17193B]/70">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-6 pb-8 text-sm text-[#17193B]/60">
        &copy; {new Date().getFullYear()} {APP_NAME}
      </footer>
    </div>
  );
}
