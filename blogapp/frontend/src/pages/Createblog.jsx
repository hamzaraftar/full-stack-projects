import { Helmet } from "react-helmet";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

// Function to remove HTML tags
const stripHtmlTags = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

export default function Createblog() {
  const [formData, setFormData] = useState({
    title: "",
    image: null, // Store file object
    content: "",
  });

  async function handleSubmit() {
    try {
      // Convert HTML content to plain text
      const plainTextContent = stripHtmlTags(formData.content);

      // Create a FormData object for file upload
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("image", formData.image);
      formDataToSend.append("content", plainTextContent); // Send only text

      const response = await axios.post(
        "http://127.0.0.1:8000/api/blog/",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log(response.data);

      // Reset form
      setFormData({
        title: "",
        image: null,
        content: "",
      });

      // Reset file input field
      document.getElementById("fileInput").value = "";
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="flex w-full item-center justify-center">
      <Helmet>
        <title>Create Blog</title>
      </Helmet>
      <div className="bg-slate-200 w-[60%]  p-5 rounded-xl">
        <h1 className="text-2xl mb-5">Create Blog Post</h1>
        <div className="flex flex-col">
          <label className="ml-1 text-gray-500">Title</label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData.title}
            autoFocus
            autoComplete="off"
            type="text"
            className="h-10 border outline-none border-gray-300 rounded my-2 p-2"
          />

          <label className="ml-1 text-gray-500">Image</label>
          <input
            id="fileInput"
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.files[0] })
            }
            type="file"
          />

          <label className="ml-1 text-gray-500">Post</label>
          <ReactQuill
            onChange={(value) => setFormData({ ...formData, content: value })}
            value={formData.content}
            className="bg-white rounded mb-2 mt-2"
            theme="snow"
          />
          <hr />
          <button
            onClick={handleSubmit}
            className="bg-slate-500 text-white h-8 w-[100px] mt-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
