import Image from "next/image";
import NotePage from ".//notes/page.jsx";
import CreateNote from ".//crNotes/page.jsx";

export default function Home() {

  return (
    <>
      <CreateNote></CreateNote>
      <NotePage></NotePage>
    </>
  );
}