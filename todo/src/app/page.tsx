import Image from "next/image";
import pocketbase from "pocketbase";
import NotePage from ".//notes/page.jsx";

export default function Home() {
  const pb = new pocketbase(
    "http://127.0.0.1:8090/api/collections/notes/records"
  );

  // const handleSubmitPb = async (event: any) => {
  //   event.preventDefault();
  //   const data = {
  //     titlePb: event.target.title.value,
  //     mainTextPb: event.target.mainText.value,
  //   };
  //   const record = await pb.collection("notes").create(data);
  // };

  return (
    <>
      <form
        className="flex flex-col justify-center items-center gap-1 m-4 text-cyan-600"
        action="http://127.0.0.1:8090/api/collections/notes/records"
        // {handleSubmitPb()} 
        method="post"
      >
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="Enter text" name="mainText" />
        <button type="submit">Submit</button>
      </form>
      <NotePage></NotePage>
    </>
  );
}
