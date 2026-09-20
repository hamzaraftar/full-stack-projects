import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constant";

// Same fonts as Home.jsx (see the <link> comment there).
const display =
  "font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif]";
const body = "font-['Figtree',ui-sans-serif,system-ui,sans-serif]";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D4CFF]";

const inputClass =
  "w-full rounded-xl border-2 border-[#17193B]/15 bg-white px-4 py-3.5 text-base text-[#17193B] placeholder:text-[#17193B]/40 transition-colors hover:border-[#17193B]/30 focus:border-[#3D4CFF] focus:outline-none focus:ring-4 focus:ring-[#3D4CFF]/15 disabled:cursor-not-allowed disabled:opacity-60";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // request in progress
  const [success, setSuccess] = useState(false); // login worked

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await api.post("api/login/", {
        username: username,
        password: password,
      });

      localStorage.setItem(ACCESS_TOKEN, response.data.access);
      localStorage.setItem(REFRESH_TOKEN, response.data.refresh);

      // Show the success message, then go to the todos page
      setSuccess(true);
      setTimeout(() => navigate("/todos"), 1200);
    } catch (error) {
      console.error(error.message);
      setLoading(false); // let the user try again
    }
  };

  const locked = loading || success;

  return (
    <div
      className={`${body} flex min-h-screen flex-col items-center justify-center bg-[#F2F5FA] px-6 py-12 text-[#17193B]`}
    >
      {/* Logo */}
      <Link
        to="/"
        className={`mb-8 flex items-center gap-2.5 rounded-lg ${focusRing}`}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#3D4CFF] text-white">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </span>
        <span className={`${display} text-xl font-extrabold`}>Todo App</span>
      </Link>

      {/* Card with offset colour block behind it */}
      <div className="relative w-full max-w-md pb-4 pr-4">
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-[#FFC83D]"
        />

        <div className="relative rounded-3xl border border-[#17193B]/10 bg-white p-8 shadow-sm sm:p-10">
          <h1 className={`${display} text-4xl font-extrabold tracking-tight`}>
            Welcome back
          </h1>
          <p className="mt-2 text-[#17193B]/70">Log in to see your tasks.</p>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-semibold"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={locked}
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={locked}
                className={inputClass}
              />
            </div>

            {/* Success message */}
            {success && (
              <div
                role="status"
                className="flex items-start gap-3 rounded-xl border border-[#1B7F4B]/30 bg-[#E6F6EC] px-4 py-3 text-sm font-medium text-[#14603A]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 h-5 w-5 shrink-0"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12.5l3 3 5-6" />
                </svg>
                <span>Login successful! Taking you to your tasks…</span>
              </div>
            )}

            <button
              type="submit"
              disabled={locked}
              className={`flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#3D4CFF] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#3D4CFF]/25 transition-colors hover:bg-[#2c3bee] active:bg-[#2432d4] disabled:cursor-not-allowed disabled:opacity-70 ${focusRing}`}
            >
              {/* Logging-in indicator (spinner) */}
              {loading && !success && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="h-5 w-5 animate-spin motion-reduce:animate-none"
                  aria-hidden="true"
                >
                  <path d="M12 3a9 9 0 1 0 9 9" />
                </svg>
              )}
              {success ? "Logged in" : loading ? "Logging in…" : "Login"}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-[#17193B]/70">
            New here?{" "}
            <Link
              to="/signup"
              className={`rounded font-semibold text-[#3D4CFF] underline decoration-2 underline-offset-4 hover:text-[#2c3bee] ${focusRing}`}
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;