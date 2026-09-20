// Same fonts as Home.jsx (see the <link> comment there).
const body = "font-['Figtree',ui-sans-serif,system-ui,sans-serif]";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D4CFF]";

const inputClass =
  "w-full rounded-xl border-2 border-[#17193B]/15 bg-white px-4 py-3.5 text-base text-[#17193B] placeholder:text-[#17193B]/40 transition-colors hover:border-[#17193B]/30 focus:border-[#3D4CFF] focus:outline-none focus:ring-4 focus:ring-[#3D4CFF]/15";

function TodoForm({
  title,
  content,
  editId,
  setTitle,
  setContent,
  onSubmit,
  onCancel,
}) {
  return (
    <div className={`${body} flex justify-center px-4 pt-7`}>
      <div className="flex w-full max-w-lg flex-col gap-4 rounded-2xl border border-[#17193B]/10 bg-white p-5 shadow-sm sm:p-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter Title"
          aria-label="Title"
          className={`${inputClass} font-semibold`}
        />

        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
          placeholder="Enter Content ..."
          aria-label="Content"
          className={inputClass}
        />

        <button
          onClick={onSubmit}
          className={`w-full cursor-pointer rounded-full bg-[#3D4CFF] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#3D4CFF]/25 transition-colors hover:bg-[#2c3bee] active:bg-[#2432d4] ${focusRing}`}
        >
          {editId !== null ? "EditTodo" : "+ Add Todo"}
        </button>

        {editId !== null && (
          <button
            onClick={onCancel}
            className={`w-full cursor-pointer rounded-full border-2 border-[#17193B]/15 bg-white px-8 py-3.5 text-base font-semibold text-[#17193B]/80 transition-colors hover:border-[#17193B]/30 hover:bg-[#F2F5FA] ${focusRing}`}
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}

export default TodoForm;