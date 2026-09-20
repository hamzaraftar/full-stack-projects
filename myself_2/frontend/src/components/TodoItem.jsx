// Same fonts as Home.jsx (see the <link> comment there).
const display =
  "font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif]";
const body = "font-['Figtree',ui-sans-serif,system-ui,sans-serif]";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D4CFF]";

// API sends UTC timestamps like "2026-09-18T15:51:20.386485Z".
// Intl converts them to the viewer's local time zone automatically.
const dateFormatter = new Intl.DateTimeFormat(undefined, {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

function formatDate(value) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return dateFormatter.format(date);
}

// Django sets created_at and updated_at a few microseconds apart on a brand
// new record, so only call it "edited" if they differ by more than a second.
function isEdited(createdAt, updatedAt) {
  const created = new Date(createdAt).getTime();
  const updated = new Date(updatedAt).getTime();
  if (Number.isNaN(created) || Number.isNaN(updated)) return false;
  return updated - created > 1000;
}

function TodoItem({ item, handleEdit, handleDelete }) {
  const createdLabel = formatDate(item.created_at);
  const updatedLabel = formatDate(item.updated_at);
  const edited = isEdited(item.created_at, item.updated_at);

  return (
    <div
      className={`${body} m-2 overflow-hidden rounded-2xl border border-[#17193B]/10 bg-white text-[#17193B] shadow-sm transition-colors hover:border-[#3D4CFF]/40`}
    >
      <div className="flex">
        {/* Accent stripe */}
        <div aria-hidden="true" className="w-1.5 shrink-0 bg-[#FFC83D]" />

        <div className="min-w-0 flex-1 p-5">
          <h2
            className={`${display} wrap-break-word text-xl font-extrabold tracking-tight`}
          >
            {item.title}
          </h2>
          <p className="mt-1.5 wrap-break-word leading-relaxed text-[#17193B]/70">
            {item.content}
          </p>

          {/* Timestamps */}
          {(createdLabel || (edited && updatedLabel)) && (
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs font-medium text-[#17193B]/60">
              {createdLabel && (
                <span className="inline-flex items-center gap-1.5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5 shrink-0"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M3 10h18M8 3v4M16 3v4" />
                  </svg>
                  <span>Created</span>
                  <time
                    dateTime={item.created_at}
                    className="text-[#17193B]/80"
                  >
                    {createdLabel}
                  </time>
                </span>
              )}

              {edited && updatedLabel && (
                <span className="inline-flex items-center gap-1.5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5 shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M20 12a8 8 0 1 1-2.3-5.7" />
                    <path d="M20 4v4h-4" />
                  </svg>
                  <span>Updated</span>
                  <time
                    dateTime={item.updated_at}
                    className="text-[#17193B]/80"
                  >
                    {updatedLabel}
                  </time>
                </span>
              )}
            </div>
          )}

          <div className="mt-5 flex items-center justify-end gap-2 border-t border-[#17193B]/10 pt-4">
            <button
              onClick={() => handleEdit(item)}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#3D4CFF]/10 px-4 py-2 text-sm font-semibold text-[#3D4CFF] transition-colors hover:bg-[#3D4CFF] hover:text-white ${focusRing}`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4z" />
                <path d="M13.5 6.5l4 4" />
              </svg>
              Edit
            </button>

            <button
              onClick={() => handleDelete(item.id)}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#C62828]/10 px-4 py-2 text-sm font-semibold text-[#C62828] transition-colors hover:bg-[#C62828] hover:text-white ${focusRing}`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M4 7h16" />
                <path d="M10 11v6M14 11v6" />
                <path d="M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12" />
                <path d="M9 7V4h6v3" />
              </svg>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
