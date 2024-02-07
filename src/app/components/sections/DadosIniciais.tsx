export default function DadosIniciais() {
  return (
    <div className="flex flex-col gap-5 border-solid border border-zinc-300 rounded-lg p-5 bg-zinc-100 drop-shadow-lg">
      <h1 className="underline text-center text-2xl font-bold">
        DADOS INICIAIS
      </h1>
      <div className="question">
        <h2 className="font-bold text-justify">
          E aí! Pra começar a se cadastrar, dá uma garantida que você tem em
          mãos as fotos dos documentos a seguir para anexar, beleza?
        </h2>
        <ul className="list-disc ml-10">
          <li>Uma selfie sua;</li>
          <li>
            Uma foto sua segurando seu documento (RG ou CNH) bem pertinho do seu
            rosto;
          </li>
          <li>Uma foto do seu RG junto com o CPF, mostrando os dois lados;</li>
          <li>
            Uma foto da parte da sua carteira de trabalho que mostra qual é a
            sua profissão; e
          </li>
          <li>Uma foto do seu comprovante de endereço.</li>
        </ul>

        <div className="flex gap-1">
          <input type="radio" name="documentos" id="documentos" required />
          <label htmlFor="documentos">Show! Já tenho tudo isso aqui.</label>
        </div>
      </div>
      {/* Gênero */}
      <div className="question">
        <h2 className="font-bold">
          Gênero: <span className="text-red-500">*</span>
        </h2>
        <div className="options flex gap-5">
          <div className="flex gap-1">
            <input type="radio" name="sexo" id="masculino" required />
            <label htmlFor="masculino">Masculino</label>
          </div>
          <div className="flex gap-1">
            <input type="radio" name="sexo" id="feminino" />
            <label htmlFor="feminino">Feminino</label>
          </div>
          <div className="flex gap-1">
            <input type="radio" name="sexo" id="outros" />
            <label htmlFor="outros">Outros</label>
          </div>
        </div>
      </div>
      {/* Ajudante */}
      <div className="question">
        <h2 className="font-bold">
          Tem ajudante? <span className="text-red-500">*</span>
        </h2>
        <div className="options flex gap-5">
          <div className="flex gap-1">
            <input type="radio" name="ajudante" id="sim" required />
            <label htmlFor="sim">Sim</label>
          </div>
          <div className="flex gap-1">
            <input type="radio" name="ajudante" id="nao" />
            <label htmlFor="nao">Não</label>
          </div>
        </div>
      </div>
      {/* Documentos */}

      {/* Vínculo */}
      <div className="question">
        <h2 className="font-bold">
          Você é? <span className="text-red-500">*</span>
        </h2>
        <div className="options flex gap-5">
          <div className="flex gap-1">
            <input type="radio" name="vinculo" id="mei" required />
            <label htmlFor="mei">MEI - Micro Empreendedor Individual</label>
          </div>
          <div className="flex gap-1">
            <input type="radio" name="vinculo" id="me" />
            <label htmlFor="me">ME - Micro Empresa</label>
          </div>
        </div>
      </div>
    </div>
  );
}
