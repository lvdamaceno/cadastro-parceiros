export default function Titulo(props: any) {
  return (
    <div className="flex flex-col gap-5 border-solid border border-zinc-300 rounded-lg p-5 bg-zinc-100 drop-shadow-lg">
      <h1 className="underline text-center text-2xl font-bold ">
        {props.title}
      </h1>
    </div>
  );
}
