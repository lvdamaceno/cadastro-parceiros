export default function Experiencia(props: any) {
  const montador = props.montador;
  if (montador) {
    return (
      <div className="flex flex-col gap-5 border-solid border border-zinc-300 rounded-lg p-5  bg-zinc-100 drop-shadow-lg">
        <h1 className="underline text-center text-2xl font-bold">
          EXPERIÊNCIA PROFISSIONAL
        </h1>
        {/* Meio de transporte */}
        <div className="question">
          <h2 className="font-bold">
            Como você costuma se deslocar até os seus clientes? Escolha todas as
            opções que se aplicam:
            <span className="text-red-500">*</span>
          </h2>
          <fieldset>
            <div className="flex gap-1">
              <input
                type="checkbox"
                id="onibus"
                name="meio-transporte"
                required
              />
              <label htmlFor="onibus">Ônibus</label>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" id="moto" name="meio-transporte" />
              <label htmlFor="moto">Moto</label>
            </div>
            <div className="flex gap-1">
              <input
                type="checkbox"
                id="bicicleta-motorizada"
                name="meio-transporte"
              />
              <label htmlFor="bicicleta-motorizada">Scooter elétrico</label>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" id="carro" name="meio-transporte" />
              <label htmlFor="carro">Carro</label>
            </div>
            <div className="flex gap-1">
              <input
                type="checkbox"
                id="bicicleta-comum"
                name="meio-transporte"
              />
              <label htmlFor="bicicleta-comum">Bicicleta comum</label>
            </div>
          </fieldset>
        </div>
        <div className="question">
          <h2 className="font-bold">
            Quais tipos de móveis você manja montar? Marque todas as opções que
            se aplicam:
            <span className="text-red-500">*</span>
          </h2>
          <fieldset>
            <div className="flex gap-1">
              <input
                type="checkbox"
                id="planejato"
                name="moveis-conhecidos"
                required
              />
              <label htmlFor="planejato">
                Sob medida (Precisa de ajuste na hora)
              </label>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" id="modulado" name="moveis-conhecidos" />
              <label htmlFor="modulado">Modulares</label>
            </div>
            <div className="flex gap-1">
              <input
                type="checkbox"
                id="convencional"
                name="moveis-conhecidos"
              />
              <label htmlFor="convencional">Tradicionais</label>
            </div>
            <div className="flex gap-1">
              <input
                type="checkbox"
                id="moveis-escritorio"
                name="moveis-conhecidos"
              />
              <label htmlFor="moveis-escritorio">Para escritório</label>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" id="estofados" name="moveis-conhecidos" />
              <label htmlFor="estofados">Estofados</label>
            </div>
          </fieldset>
        </div>
        <div className="question">
          <h2 className="font-bold">
            E aí, tem habilidade em quê mais?
            <span className="text-red-500">*</span>
          </h2>
          <fieldset>
            <div className="flex gap-1">
              <input type="checkbox" id="chaveiro" name="moveis-conhecidos" />
              <label htmlFor="chaveiro">Fazer chave (Chaveiro)</label>
            </div>
            <div className="flex gap-1">
              <input
                type="checkbox"
                id="higienizacao"
                name="moveis-conhecidos"
              />
              <label htmlFor="higienizacao">Limpeza (Higienização)</label>
            </div>
            <div className="flex gap-1">
              <input
                type="checkbox"
                id="reparos-estofado-colchao"
                name="moveis-conhecidos"
              />
              <label htmlFor="reparos-estofado-colchao">
                Reparos e Concertos (Estofados e Colchões)
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="checkbox"
                id="reparos-moveis"
                name="moveis-conhecidos"
              />
              <label htmlFor="reparos-moveis">
                Reparos e Concertos (Móveis)
              </label>
            </div>
          </fieldset>
        </div>
        <div className="question">
          <h2 className="font-bold">
            Quais cidades você atende? <span className="text-red-500">*</span>
          </h2>
          <input
            type="text"
            className="w-full px-5 py-3 my-2  inline-block border border-solid border-zinc-200 rounded-lg"
            name="cidades-atendidas"
            id="cncidades-atendidaspj"
            placeholder="Informe as cidades separando por vírgula"
            required
          />
        </div>
        <div className="question">
          <h2 className="font-bold">
            Atende em quais bairros? (ou todos){' '}
            <span className="text-red-500">*</span>
          </h2>
          <input
            type="text"
            className="w-full px-5 py-3 my-2  inline-block border border-solid border-zinc-200 rounded-lg"
            name="cidades-atendidas"
            id="cidades-atendidas"
            placeholder="Informe os bairros separando por vírgula"
            required
          />
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-5 border-solid border border-zinc-300 rounded-lg p-5  bg-zinc-100 drop-shadow-lg">
      <h1 className="underline text-center text-2xl font-bold">
        EXPERIÊNCIA PROFISSIONAL
      </h1>
      {/* Meio de transporte */}
      <div className="question">
        <h2 className="font-bold">
          Qual o tipo do seu veículo usado para as entregas? Escolha todas as
          opções que se aplicam:
          <span className="text-red-500">*</span>
        </h2>
        <fieldset>
          <div className="flex gap-1">
            <input type="checkbox" id="moto" name="meio-transporte" />
            <label htmlFor="moto">Moto</label>
          </div>
          <div className="flex gap-1">
            <input
              type="checkbox"
              id="bicicleta-motorizada"
              name="meio-transporte"
            />
            <label htmlFor="bicicleta-motorizada">Scooter elétrico</label>
          </div>
          <div className="flex gap-1">
            <input
              type="checkbox"
              id="bicicleta-comum"
              name="meio-transporte"
            />
            <label htmlFor="bicicleta-comum">Bicicleta comum</label>
          </div>
          <div className="flex gap-1">
            <input type="checkbox" id="carro-pequeno" name="meio-transporte" />
            <label htmlFor="carro-pequeno">Carro pequeno (Hatch)</label>
          </div>
          <div className="flex gap-1">
            <input type="checkbox" id="carro-grande" name="meio-transporte" />
            <label htmlFor="carro-grande">
              Carro grande (sedans, SUVs e Minivans)
            </label>
          </div>
          <div className="flex gap-1">
            <input type="checkbox" id="fiorino" name="meio-transporte" />
            <label htmlFor="fiorino">Fiorino, Kangoo ou similares</label>
          </div>
          <div className="flex gap-1">
            <input type="checkbox" id="kombi" name="meio-transporte" />
            <label htmlFor="kombi">Kombi</label>
          </div>
          <div className="flex gap-1">
            <input type="checkbox" id="van" name="meio-transporte" />
            <label htmlFor="van">Van (Ducato, Dailym Boxer, etc)</label>
          </div>
          <div className="flex gap-1">
            <input
              type="checkbox"
              id="pickup-maritima"
              name="meio-transporte"
            />
            <label htmlFor="pickup-maritima">Pickup com capota marítima</label>
          </div>
          <div className="flex gap-1">
            <input type="checkbox" id="pickup-fibra" name="meio-transporte" />
            <label htmlFor="pickup-fibra">Pickup com capota de fibra</label>
          </div>
          <div className="flex gap-1">
            <input type="checkbox" id="carreto-medio" name="meio-transporte" />
            <label htmlFor="carreto-medio">
              Carreto médio (HR, Bongo, Iveco, etc)
            </label>
          </div>
          <div className="flex gap-1">
            <input type="checkbox" id="carreto-grande" name="meio-transporte" />
            <label htmlFor="carreto-grande">
              Carreto grande (apartir de 1 toneladas)
            </label>
          </div>
        </fieldset>
      </div>
      <div className="question">
        <h2 className="font-bold">
          Quais cidades você atende? <span className="text-red-500">*</span>
        </h2>
        <input
          type="text"
          className="w-full px-5 py-3 my-2  inline-block border border-solid border-zinc-200 rounded-lg"
          name="cidades-atendidas"
          id="cncidades-atendidaspj"
          placeholder="Informe as cidades separando por vírgula"
          required
        />
      </div>
      <div className="question">
        <h2 className="font-bold">
          Atende em quais bairros? (ou todos){' '}
          <span className="text-red-500">*</span>
        </h2>
        <input
          type="text"
          className="w-full px-5 py-3 my-2  inline-block border border-solid border-zinc-200 rounded-lg"
          name="cidades-atendidas"
          id="cidades-atendidas"
          placeholder="Informe os bairros separando por vírgula"
          required
        />
      </div>
    </div>
  );
}
