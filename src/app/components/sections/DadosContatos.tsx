export default function DadosContatos() {
  return (
    <div className="flex flex-col gap-5 border-solid border border-zinc-300 rounded-lg p-5  bg-zinc-100 drop-shadow-lg">
      <h1 className="underline text-center text-2xl font-bold">
        DADOS PARA CONTATO
      </h1>
      {/* Endereço */}
      <div className="question">
        <h2 className="font-bold">
          Endereço <span className="text-red-500">*</span>
        </h2>
        <div className="flex justify-between">
          <input
            type="text"
            className="w-full px-5 py-3 my-2  inline-block border border-solid border-zinc-200 rounded-lg"
            name="endereco-principal"
            id="endereco-principal"
            placeholder="Endereço principal"
            required
          />
        </div>
        <div className="flex justify-between">
          <input
            type="text"
            className="w-full px-5 py-3 my-2  inline-block border border-solid border-zinc-200 rounded-lg"
            name="endereco-secundário"
            id="endereco-secundário"
            placeholder="Endereço secundário"
          />
        </div>
        <div className="flex flex-col justify-between md:flex-row md:gap-5">
          <input
            type="text"
            className="w-full px-5 py-3 my-2 inline-block border border-solid border-zinc-200 rounded-lg"
            name="cidade"
            id="cidade"
            placeholder="Cidade"
            required
          />
          <input
            type="text"
            className="w-full px-5 py-3 my-2 inline-block border border-solid border-zinc-200 rounded-lg"
            name="estado"
            id="estado"
            placeholder="Estado"
            required
          />
        </div>
        <div className="flex flex-col justify-between md:flex-row md:gap-5">
          <input
            type="number"
            className="w-full px-5 py-3 my-2  inline-block border border-solid border-zinc-200 rounded-lg"
            name="cep"
            id="cep"
            placeholder="CEP"
            required
          />
          <input
            type="text"
            className="w-full px-5 py-3 my-2  inline-block border border-solid border-zinc-200 rounded-lg"
            name="pais"
            id="pais"
            placeholder="País"
            required
          />
        </div>
      </div>
      {/* Email */}
      <div className="question">
        <h2 className="font-bold">
          Email <span className="text-red-500">*</span>
        </h2>
        <div className="flex justify-between">
          <input
            className="w-full px-5 py-3 my-2  inline-block border border-solid border-zinc-200 rounded-lg"
            type="mail"
            name="mail"
            id="mail"
            placeholder="Informe o seu email de contato"
            required
          />
        </div>
      </div>
      {/* Telefones */}
      <div className="question">
        <h2 className="font-bold">
          Telefones <span className="text-red-500">*</span>
        </h2>
        <div className="flex flex-col justify-between md:flex-row md:gap-5">
          <input
            type="number"
            className="w-full px-5 py-3 my-2  inline-block border border-solid border-zinc-200 rounded-lg"
            name="telefone-principal"
            id="telefone-principal"
            placeholder="Informe o seu contato principal (apenas números)"
            required
          />
          <input
            type="number"
            className="w-full px-5 py-3 my-2  inline-block border border-solid border-zinc-200 rounded-lg"
            name="telefone-secundario"
            id="telefone-secundario"
            placeholder="Informe o seu contato secundario (apenas números)"
          />
        </div>
      </div>
    </div>
  );
}
