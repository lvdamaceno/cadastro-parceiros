export default function Identificacao() {
  return (
    <div className="flex flex-col gap-5 border-solid border border-zinc-300 rounded-lg p-5  bg-zinc-100 drop-shadow-lg">
      {/* Nome */}
      <h1 className="underline text-center text-2xl font-bold">
        IDENTIFICAÇÃO
      </h1>
      <div className="question">
        <h2 className="font-bold">
          Seu nome <span className="text-red-500">*</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <input
            type="text"
            className="w-full px-5 py-3 my-2  inline-block border border-solid border-zinc-200 rounded-lg"
            name="nome"
            id="nome"
            placeholder="Informe seu nome"
            required
          />
          <input
            type="text"
            className="w-full px-5 py-3 my-2  inline-block border border-solid border-zinc-200 rounded-lg"
            name="sobrenome"
            id="sobrenome"
            placeholder="Informe seu sobrenome"
            required
          />
        </div>
      </div>
      {/* CNPJ */}
      <div className="question">
        <h2 className="font-bold">
          CNPJ <span className="text-red-500">*</span>
        </h2>
        <div className="flex justify-between">
          <input
            type="number"
            className="w-full px-5 py-3 my-2  inline-block border border-solid border-zinc-200 rounded-lg"
            name="cnpj"
            id="cnpj"
            placeholder="00.000.000/0000-00"
            required
          />
        </div>
      </div>
      {/* Razão Social */}
      <div className="question">
        <h2 className="font-bold">
          Razão Social <span className="text-red-500">*</span>
        </h2>
        <div className="flex justify-between">
          <input
            type="text"
            className="w-full px-5 py-3 my-2  inline-block border border-solid border-zinc-200 rounded-lg"
            name="razao-social"
            id="razao-social"
            placeholder="Informe sua Razão Social"
            required
          />
        </div>
      </div>
      {/* CPF */}
      <div className="question">
        <h2 className="font-bold">
          CPF <span className="text-red-500">*</span>
        </h2>
        <div className="flex justify-between">
          <input
            type="number"
            className="w-full px-5 py-3 my-2  inline-block border border-solid border-zinc-200 rounded-lg"
            name="cpf"
            id="cpf"
            placeholder="000.000.000-00"
            required
          />
        </div>
      </div>
      {/* RG */}
      <div className="question">
        <h2 className="font-bold">
          RG <span className="text-red-500">*</span>
        </h2>
        <div className="flex justify-between">
          <input
            type="number"
            className="w-full px-5 py-3 my-2  inline-block border border-solid border-zinc-200 rounded-lg"
            name="rg"
            id="rg"
            placeholder="00000000000"
            required
          />
        </div>
      </div>
      {/* Nascimento */}
      <div className="question">
        <h2 className="font-bold">
          Data de nascimento <span className="text-red-500">*</span>
        </h2>
        <div className="flex justify-between">
          <input
            className="w-full px-5 py-3 my-2  inline-block border border-solid border-zinc-200 rounded-lg"
            type="date"
            name="dt-nascimento"
            id="dt-nascimento"
            placeholder="00/00/0000"
            required
          />
        </div>
      </div>
      {/* Nome da Mãe */}
      <div className="question">
        <h2 className="font-bold">
          Nome da mãe completo <span className="text-red-500">*</span>
        </h2>
        <div className="flex justify-between">
          <input
            type="text"
            className="w-full px-5 py-3 my-2  inline-block border border-solid border-zinc-200 rounded-lg"
            name="nome-mae"
            id="nome-mae"
            placeholder="Informe o nome da sua mãe completo"
            required
          />
        </div>
      </div>
    </div>
  );
}
