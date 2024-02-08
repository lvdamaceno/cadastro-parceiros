export default function TextInfo(props: any) {
  const ativo = props.ativo;
  if (ativo) {
    return (
      <fieldset className="border border-solid border-zinc-400 w-full rounded-lg px-2 bg-green-100">
        <legend className="text-left font-bold">{props.title}</legend>
        <p className="pb-">{props.info}</p>
      </fieldset>
    );
  } else {
    return (
      <fieldset className="border border-solid border-zinc-400 w-full rounded-lg px-2">
        <legend className="text-left font-bold">{props.title}</legend>
        <p className="pb-2">{props.info}</p>
      </fieldset>
    );
  }
}
