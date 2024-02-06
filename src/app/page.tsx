import { Scroll, Nut, WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import logo from '/src/app/logo.png';

export default function Page() {
  return (
    <div className="questions w-full mt-5">
      <div className="topbar flex flex-col place-items-center justify-center w-full">
        <Image src={logo} alt="Logotipo da Ultralog" height={96} />
        <h1>ULTRALOG - CADASTRO P/ PARCEIROS DE MONTAGEM</h1>
      </div>
      <div className="max-w-3xl p-5 flex m-auto">
        <form action="" className="flex flex-col gap-5 ">
          {/* Step 1 */}
          <section className="flex flex-col gap-5 border-solid border border-zinc-300 rounded-lg p-5 bg-zinc-100">
            <h1>DADOS INICIAIS</h1>
            {/* Gênero */}
            <div className="question">
              <h2>
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
              <h2>
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
            <div className="question">
              <h2>
                OBRIGATÓRIO. Antes de começar o seu credenciamento, providencie
                as fotos dos seguintes documentos abaixo para serem anexados:{' '}
                <span className="text-red-500">*</span>
              </h2>

              <ul className="list-disc ml-10">
                <li>Foto sua atual;</li>
                <li>Foto segurando o documento (RH/CNH) ao lado do rosto;</li>
                <li>Foto do RG com o CPF (frente e verso);</li>
                <li>
                  Foto da folha da carteira profissional que comprove sua
                  profisão e
                </li>
                <li>Foto do comprovante de residência.</li>
              </ul>

              <div className="flex gap-1">
                <input
                  type="radio"
                  name="documentos"
                  id="documentos"
                  required
                />
                <label htmlFor="documentos">
                  Sim! Já tenho todos os itens acima
                </label>
              </div>
            </div>
            {/* Vínculo */}
            <div className="question">
              <h2>
                Você é? <span className="text-red-500">*</span>
              </h2>
              <div className="options flex gap-5">
                <div className="flex gap-1">
                  <input type="radio" name="vinculo" id="mei" required />
                  <label htmlFor="mei">
                    MEI - Micro Empreendedor Individual
                  </label>
                </div>
                <div className="flex gap-1">
                  <input type="radio" name="vinculo" id="freelancer" />
                  <label htmlFor="freelancer">
                    FREELANCER - Profissional Autônomo
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Step 2 */}
          <section className="flex flex-col gap-5 border-solid border border-zinc-300 rounded-lg p-5  bg-zinc-100">
            {/* Nome */}
            <h1>IDENTIFICAÇÃO</h1>
            <div className="question">
              <h2>
                Seu nome <span className="text-red-500">*</span>
              </h2>
              <div className="flex justify-between gap-5">
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  placeholder="Informe seu nome"
                  required
                />
                <input
                  type="text"
                  name="sobrenome"
                  id="sobrenome"
                  placeholder="Informe seu sobrenome"
                  required
                />
              </div>
            </div>
            {/* CNPJ */}
            <div className="question">
              <h2>
                CNPJ <span className="text-red-500">*</span>
              </h2>
              <div className="flex justify-between">
                <input
                  type="number"
                  name="cnpj"
                  id="cnpj"
                  placeholder="00.000.000/0000-00"
                  required
                />
              </div>
            </div>
            {/* Razão Social */}
            <div className="question">
              <h2>
                Razão Social <span className="text-red-500">*</span>
              </h2>
              <div className="flex justify-between">
                <input
                  type="text"
                  name="razao-social"
                  id="razao-social"
                  placeholder="Informe sua Razão Social"
                  required
                />
              </div>
            </div>
            {/* CPF */}
            <div className="question">
              <h2>
                CPF <span className="text-red-500">*</span>
              </h2>
              <div className="flex justify-between">
                <input
                  type="number"
                  name="cpf"
                  id="cpf"
                  placeholder="000.000.000-00"
                  required
                />
              </div>
            </div>
            {/* RG */}
            <div className="question">
              <h2>
                RG <span className="text-red-500">*</span>
              </h2>
              <div className="flex justify-between">
                <input
                  type="number"
                  name="rg"
                  id="rg"
                  placeholder="00000000000"
                  required
                />
              </div>
            </div>
            {/* Nascimento */}
            <div className="question">
              <h2>
                Data de nascimento <span className="text-red-500">*</span>
              </h2>
              <div className="flex justify-between">
                <input
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
              <h2>
                Nome da mãe completo <span className="text-red-500">*</span>
              </h2>
              <div className="flex justify-between">
                <input
                  type="text"
                  name="nome-mae"
                  id="nome-mae"
                  placeholder="Informe o nome da sua mãe completo"
                  required
                />
              </div>
            </div>
          </section>

          {/* Step 3 */}
          <section className="flex flex-col gap-5 border-solid border border-zinc-300 rounded-lg p-5  bg-zinc-100">
            <h1>DADOS PARA CONTATO</h1>
            {/* Endereço */}
            <div className="question">
              <h2>
                Endereço <span className="text-red-500">*</span>
              </h2>
              <div className="flex justify-between">
                <input
                  type="text"
                  name="endereco-principal"
                  id="endereco-principal"
                  placeholder="Endereço principal"
                  required
                />
              </div>
              <div className="flex justify-between">
                <input
                  type="text"
                  name="endereco-secundário"
                  id="endereco-secundário"
                  placeholder="Endereço secundário"
                />
              </div>
              <div className="flex justify-between gap-5">
                <input
                  type="text"
                  name="cidade"
                  id="cidade"
                  placeholder="Cidade"
                  required
                />
                <input
                  type="text"
                  name="estado"
                  id="estado"
                  placeholder="Estado"
                  required
                />
              </div>
              <div className="flex justify-between gap-5">
                <input
                  type="number"
                  name="cep"
                  id="cep"
                  placeholder="CEP"
                  required
                />
                <input
                  type="text"
                  name="pais"
                  id="pais"
                  placeholder="País"
                  required
                />
              </div>
            </div>
            {/* Email */}
            <div className="question">
              <h2>
                Email <span className="text-red-500">*</span>
              </h2>
              <div className="flex justify-between">
                <input
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
              <h2>
                Telefones <span className="text-red-500">*</span>
              </h2>
              <div className="flex justify-between">
                <input
                  type="number"
                  name="telefone-principal"
                  id="telefone-principal"
                  placeholder="Informe o seu contato principal (apenas números)"
                  required
                />
              </div>
              <div className="flex justify-between">
                <input
                  type="number"
                  name="telefone-secundario"
                  id="telefone-secundario"
                  placeholder="Informe o seu contato secundario (apenas números)"
                />
              </div>
            </div>
          </section>

          {/* Step 4 */}
          <section className="flex flex-col gap-5 border-solid border border-zinc-300 rounded-lg p-5  bg-zinc-100">
            {/* Selfie */}
            <h1>ENVIO DE DOCUMENTOS</h1>
            <div className="question">
              <h2>
                Envie uma foto sua atual <span className="text-red-500">*</span>
              </h2>
              <input
                className="bg-zinc-200"
                type="file"
                id="selfie"
                name="selfie"
                accept="image/*"
                required
              />
            </div>
            {/* Foto com RG */}
            <div className="question">
              <h2>
                Envie uma foto segurando o documento (RG/CNH) ao lado do rosto{' '}
                <span className="text-red-500">*</span>
              </h2>
              <input
                className="bg-zinc-200"
                type="file"
                id="selfie-documento"
                name="selfie-documento"
                accept="image/*"
                required
              />
            </div>
            {/* Foto do Ajudante */}
            <div className="question">
              <h2>Envie uma foto atual do seu ajudante (opcional)</h2>
              <input
                className="bg-zinc-200"
                type="file"
                id="selfie-ajudante"
                name="selfie-ajudante"
                accept="image/*"
              />
            </div>
            {/* Foto do comprovante de trabalho */}
            <div className="question">
              <h2>
                Envie uma foto folha da carteira profissional que comprove sua
                profissão <span className="text-red-500">*</span>
              </h2>
              <input
                className="bg-zinc-200"
                type="file"
                id="comprovante-trabalho"
                name="comprovante-trabalho"
                accept="image/*"
                required
              />
            </div>
            {/* Foto do RG/CPF */}
            <div className="question">
              <h2>
                Envie uma foto do seu RG com CPF{' '}
                <span className="text-red-500">*</span>
              </h2>
              <input
                className="bg-zinc-200"
                type="file"
                id="foto-rg-cpf"
                name="foto-rg-cpf"
                accept="image/*"
                required
              />
            </div>
            {/* Foto do comprovante de residencia */}
            <div className="question">
              <h2>
                Envie uma foto do seu comprovante de residência{' '}
                <span className="text-red-500">*</span>
              </h2>
              <input
                className="bg-zinc-200"
                type="file"
                id="comprovante-residencia"
                name="comprovante-residencia"
                accept="image/*"
                required
              />
            </div>
            {/* Foto do certificado MEI */}
            <div className="question">
              <h2>Certificado MEI (Caso tenha)</h2>
              <input
                className="bg-zinc-200"
                type="file"
                id="certificado-mei"
                name="certificado-mei"
                accept="image/*"
              />
            </div>
          </section>

          {/* Step 5 */}
          <section className="flex flex-col gap-5 border-solid border border-zinc-300 rounded-lg p-5  bg-zinc-100">
            <h1>EXPERIÊNCIA PROFISSIONAL</h1>
            {/* Meio de transporte */}
            <div className="question">
              <h2>
                Qual meio de transporte você utiliza para ir ao cliente?{' '}
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
                  <label htmlFor="bicicleta-motorizada">
                    Bicicleta motorizada
                  </label>
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
              <h2>
                Qual tipo de móvel você sabe montar?{' '}
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
                    Planejado (Necessita recorte)
                  </label>
                </div>
                <div className="flex gap-1">
                  <input
                    type="checkbox"
                    id="modulado"
                    name="moveis-conhecidos"
                  />
                  <label htmlFor="modulado">Modulado</label>
                </div>
                <div className="flex gap-1">
                  <input
                    type="checkbox"
                    id="convencional"
                    name="moveis-conhecidos"
                  />
                  <label htmlFor="convencional">Convencional</label>
                </div>
                <div className="flex gap-1">
                  <input
                    type="checkbox"
                    id="moveis-escritorio"
                    name="moveis-conhecidos"
                  />
                  <label htmlFor="moveis-escritorio">
                    Móveis de escritório
                  </label>
                </div>
                <div className="flex gap-1">
                  <input
                    type="checkbox"
                    id="estofados"
                    name="moveis-conhecidos"
                  />
                  <label htmlFor="estofados">Estofados</label>
                </div>

                <div className="flex gap-1">
                  <input
                    type="checkbox"
                    id="chaveiro"
                    name="moveis-conhecidos"
                  />
                  <label htmlFor="chaveiro">Chaveiro</label>
                </div>
                <div className="flex gap-1">
                  <input
                    type="checkbox"
                    id="higienizacao"
                    name="moveis-conhecidos"
                  />
                  <label htmlFor="higienizacao">Higienização</label>
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
              <h2>
                Quais cidades você atende?{' '}
                <span className="text-red-500">*</span>
              </h2>
              <input
                type="text"
                name="cidades-atendidas"
                id="cncidades-atendidaspj"
                placeholder="Informe as cidades separando por vírgula"
                required
              />
            </div>
            <div className="question">
              <h2>
                Atende em quais bairros? (ou todos){' '}
                <span className="text-red-500">*</span>
              </h2>
              <input
                type="text"
                name="cidades-atendidas"
                id="cidades-atendidas"
                placeholder="Informe os bairros separando por vírgula"
                required
              />
            </div>
          </section>

          {/* Step 6 */}
          <section className="flex flex-col gap-5 border-solid border border-zinc-300 rounded-lg p-5  bg-zinc-100">
            <h1>DADOS BANCÁRIOS</h1>
            <div className="question">
              <h2>Conta bancária</h2>
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
                  <input
                    type="checkbox"
                    id="chave-pix"
                    name="dados-bancarios"
                  />
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
            <h1>LEIA COM ATENÇÃO NOSSO CONTRATO DE PRESTAÇÃO DE SERVIÇO</h1>
            <div className="question">
              <a
                href=""
                className="mb-4 flex justify-center items-center align-middle border-2 border-solid border-orange-400 rounded-lg bg-orange-300 hover:bg-orange-400"
              >
                <Scroll size={64} />
                <p>VISUALIZAR CONTRATO</p>
              </a>
              <fieldset>
                <div className="flex gap-1">
                  <input
                    type="checkbox"
                    id="contrato"
                    name="contrato"
                    required
                  />
                  <label htmlFor="contrato">
                    Eu li e aceito os termos e condições deste contrato
                  </label>
                </div>
              </fieldset>
            </div>
          </section>

          {/* Enviar */}
          <section className="flex border-solid border border-zinc-300 rounded-lg p-5  bg-zinc-100">
            <button className="flex-1 p-3 border-2 border-orange-400 rounded-lg bg-orange-300 hover:bg-orange-400">
              Finalizar credenciamento
            </button>
          </section>
        </form>
      </div>
      <div className="footer flex flex-col justify-center w-full bg-zinc-100 text-center p-5">
        <h2>Tv. Santa Maria, 47 - Ananindeua/PA</h2>
        <h2>
          UltraLog Logistica LTDA | 50.652.391/0001-05 | © 2024 – Todos os
          Direitos Reservados
        </h2>
      </div>
      <div className="contact absolute top-5 right-5">
        <a href="https://wa.me/559132224751">
          <WhatsappLogo size={48} />
        </a>
      </div>
      <p className="hidden">made by @lvdamaceno</p>
    </div>
  );
}
