"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateNote() {
  
  const [titlePb, setTitlePb] = useState("");
  const [mainTextPb, setmainTextPb] = useState("");

  const router = useRouter();

  const create = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titlePb,
        mainTextPb,
      }),
    });

    setmainTextPb("");
    setTitlePb("");

    router.refresh();
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-1 m-4 text-cyan-600"
      onSubmit={create}
    >
      <h3>Create a new Note</h3>
      <input
        type="text"
        placeholder="TitlePb"
        value={titlePb}
        onChange={(e) => setTitlePb(e.target.value)}
      />
      <textarea
        placeholder="mainTextPb"
        value={mainTextPb}
        onChange={(e) => setmainTextPb(e.target.value)}
      />
      <button type="submit">Create note</button>
    </form>
  );
}
