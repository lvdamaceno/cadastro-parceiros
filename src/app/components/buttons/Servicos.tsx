export default function BtnServicos() {
  return (
    <div className="buttons flex flex-col gap-5 md:flex-row">
      <a
        href="/montador"
        className="flex-1 p-3 border-2 border-orange-400 rounded-lg bg-orange-300 hover:bg-orange-400 drop-shadow-lg text-center"
      >
        Seja um Montador
      </a>
      <a
        href="/entregador"
        className="flex-1 p-3 border-2 border-orange-400 rounded-lg bg-orange-300 hover:bg-orange-400 drop-shadow-lg text-center"
      >
        Seja um Entregador
      </a>
    </div>
  );
}
