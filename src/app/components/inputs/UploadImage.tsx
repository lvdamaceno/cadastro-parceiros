export default function UploadImage(props: any) {
  const required = props.required;
  if (required) {
    return (
      <div className="question">
        <h2 className="font-bold">
          {props.title} <span className="text-red-500">*</span>
        </h2>
        <input
          className="bg-zinc-200 w-full px-5 py-3 my-2  inline-block border border-dotted border-zinc-400 rounded-lg"
          type="file"
          id={props.id}
          name={props.id}
          accept="image/*"
          required
        />
      </div>
    );
  }
  return (
    <div className="question">
      <h2 className="font-bold">{props.title}</h2>
      <input
        className="bg-zinc-200 w-full px-5 py-3 my-2  inline-block border border-dotted border-zinc-400 rounded-lg"
        type="file"
        id={props.id}
        name={props.id}
        accept="image/*"
      />
    </div>
  );
}
