async function getNotes() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30"
    ,{cache: "no-store"}
  );
  const data = await res.json();
  console.log (data)
  return data?.items;
}

export default async function NotePage() {
  const notes = await getNotes();
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Notes</h1>
      {notes?.map((note) => {
        return <Note key={note.id} note={note} />;
      })}
    </div>
  );
}
function Note({ note }) {
  const { id, titlePb, mainTextPb, created } = note || {};
  
  return (
      <div className="w-6/12 flex flex-col border m-2 justify-center items-center">
        <h2>{titlePb}</h2>
        <h5>{mainTextPb}</h5>
        <p>{created}</p>
      </div>
  );
}
