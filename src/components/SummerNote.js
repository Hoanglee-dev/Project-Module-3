import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";

export default function SummerNote() {
  const editorRef = useRef(null);
  const log = async () => {
    if (editorRef.current) {
      let myPost = editorRef.current.getContent({ format: "text" });
      console.log(myPost);
      try {
        const response = await axios.post(
          "http://localhost:3000/posts",
          { content: myPost },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("Dữ liệu đã được gửi thành công:", response.data);
        window.location.reload();
      } catch (error) {
        console.error("Lỗi khi gửi dữ liệu:", error);
      }
    }
  };

  return (
    <>
      <Editor
        apiKey="axbtw8w9ihm6e917k23lz032s7rud695lw1dpfpg2itbklbu"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        // initialValue="What's on your mind ?"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          placeholder: "What's on your mind ?", // Add this line for placeholder
        }}
      />
      <button
        onClick={log}
        className="w-1/3 bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Post
      </button>
    </>
  );
}
