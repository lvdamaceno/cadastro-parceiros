export default function Button(props: any) {
  return (
    <button className="border border-solid border-zinc-400 rounded-lg px-5 py-1 hover:bg-zinc-300">
      {props.title}
    </button>
  );
}
