export default function DadosBancarios() {
  return (
    <div className="flex flex-col gap-5 border-solid border border-zinc-300 rounded-lg p-5  bg-zinc-100 drop-shadow-lg">
      <h1 className="underline text-center text-2xl font-bold">
        DADOS BANCÁRIOS
      </h1>
      <div className="question">
        <h2 className="font-bold">Conta bancária</h2>
        <fieldset>
          <div className="flex gap-1">
            <input
              type="checkbox"
              id="conta-corrente"
              name="dados-bancarios"
              required
            />
            <label htmlFor="conta-corrente">
              Tenho conta corrente/poupança em meu nome
            </label>
          </div>
          <div className="flex gap-1">
            <input type="checkbox" id="chave-pix" name="dados-bancarios" />
            <label htmlFor="chave-pix">Tenho chave pix</label>
          </div>
          <div className="flex gap-1">
            <input
              type="checkbox"
              id="chave-pix-terceiro"
              name="dados-bancarios"
            />
            <label htmlFor="chave-pix-terceiro">
              Tenho chave pix em nome de terceiros
            </label>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
