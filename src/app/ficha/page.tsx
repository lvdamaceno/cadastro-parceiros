import Footer from '../components/sections/Footer';
import Header from '../components/sections/Header';
import TextInfo from './components/TextInfo';
import ImagemDocumento from './components/ImagemDocumento';
import Image from 'next/image';
import signature from '/src/app/assets/signature.jpg';

export default function ficha() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Header />
        <div className="container max-w-5xl">
          <div className="ficha p-5 flex flex-col gap-5">
            <h2 className="font-bold text-2xl underline">DADOS CADASTRAIS</h2>
            <section>
              <h3 className="font-bold text-2xl">Dados de Identificação</h3>
              <div className="flex flex-col gap-5 pb-5 border-b">
                <div className="infos flex justify-between gap-5">
                  <TextInfo title="Nome" info="Jhon" />
                  <TextInfo title="Sobrenome" info="Doe" />
                  <TextInfo title="Nome da Mãe" info="Mary Jane" />
                  <TextInfo title="Dt. Nascimento" info="14/12/1991" />
                </div>
                <div className="infos flex justify-between gap-5">
                  <TextInfo title="Razão Social" info="Entregas S.A." />
                  <TextInfo title="CNPJ" info="00.000.000.0001-00" />
                  <TextInfo title="CPF" info="000.000.000-00" />
                </div>
                <div className="infos flex justify-between gap-5">
                  <TextInfo title="Gênero" info="Masculino" />
                  <TextInfo title="Tem ajudante" info="Não" />
                  <TextInfo title="Você é?" info="MEI" />
                </div>
              </div>
              <div className="flex flex-col gap-5 pb-5 border-b">
                <h3 className="font-bold text-2xl mt-5">Endereço</h3>
                <div className="infos flex justify-between gap-5 ">
                  <TextInfo
                    title="Endereço principal"
                    info="Travessa Padre Eutíquio"
                  />
                  <TextInfo title="Travessa Boa Ventura" info="Não" />
                </div>
                <div className="infos flex justify-between gap-5">
                  <TextInfo title="Cidade" info="Belém" />
                  <TextInfo title="Estado" info="Pará" />
                  <TextInfo title="CEP" info="00.000-000" />
                  <TextInfo title="País" info="Brasil" />
                </div>
              </div>
              <div className="flex flex-col gap-5 pb-5 border-b">
                <h3 className="font-bold text-2xl mt-5 ">Contatos</h3>
                <div className="infos flex justify-between gap-5">
                  <TextInfo
                    title="Email"
                    info="casacontente@casacontente.com.br"
                  />
                  <TextInfo title="Telefones" info="(91) 99999-9999" />
                  <TextInfo title="Telefones" info="(91) 99999-9999" />
                </div>
              </div>
            </section>
            <section>
              <h2 className="font-bold text-2xl mb-5 underline ">DOCUMENTOS</h2>
              <div className="infos flex flex-col justify-between gap-5 border-b pb-5">
                <div className="row w-full flex justify-between gap-5">
                  <ImagemDocumento
                    src="/src/app/assets/documento.jpeg"
                    title="Selfie"
                    alt="Selfie"
                  />
                  <ImagemDocumento
                    src="/src/app/assets/tuco.png"
                    title="RH/CNH Rosto"
                    alt="RH/CNH Rosto"
                  />
                  <ImagemDocumento
                    src="/src/app/assets/tuco.png"
                    title="Ajudante"
                    alt="Ajudante"
                  />
                  <ImagemDocumento
                    src="/src/app/assets/tuco.png"
                    title="Carteira Profissional"
                    alt="Carteira Profissional"
                  />
                </div>
                <div className="row w-full justify-between flex gap-5">
                  <ImagemDocumento
                    src="/src/app/assets/tuco.png"
                    title="RG com CPF"
                    alt="RG com CPF"
                  />
                  <ImagemDocumento
                    src="/src/app/assets/tuco.png"
                    title="Compr. Residência"
                    alt="Compr. Residência"
                  />
                  <ImagemDocumento
                    src="/src/app/assets/tuco.png"
                    title="Certificado Mei"
                    alt="Certificado Mei"
                  />
                  <ImagemDocumento
                    src="/src/app/assets/tuco.png"
                    title=""
                    alt=""
                  />
                </div>
              </div>
            </section>
            <section>
              <h2 className="font-bold text-2xl mb-5 underline">
                EXPERIÊNCIA PROFISSIONAL
              </h2>
              <div className="flex flex-col gap-5 pb-5 border-b">
                <h3 className="font-bold text-2xl ">Deslocamento</h3>
                <div className="infos flex justify-between gap-5 border-b pb-5">
                  <TextInfo title="Onibus" info="Não" />
                  <TextInfo title="Moto" info="Sim" ativo />
                  <TextInfo title="Scooter" info="Não" />
                  <TextInfo title="Carro" info="Sim" ativo />
                  <TextInfo title="Bicicleta" info="Não" />
                </div>
                <h3 className="font-bold text-2xl">Expertise</h3>
                <div className="infos flex justify-between gap-5 border-b pb-5">
                  <TextInfo title="Sob Medida" info="Não" />
                  <TextInfo title="Modular" info="Sim" ativo />
                  <TextInfo title="Tradicionais" info="Sim" ativo />
                  <TextInfo title="Escritorio" info="Não" />
                  <TextInfo title="Estofados" info="Não" />
                </div>
                <h3 className="font-bold text-2xl">Habilidades</h3>
                <div className="infos flex justify-between gap-5 border-b pb-5">
                  <TextInfo title="Chaveiro" info="Não" />
                  <TextInfo title="Higienização" info="Sim" ativo />
                  <TextInfo title="Reparos (Estofados)" info="Sim" ativo />
                  <TextInfo title="Reparos (Móveis)" info="Não" />
                </div>
                <h3 className="font-bold text-2xl">Atendimento</h3>
                <div className="infos flex justify-between gap-5 ">
                  <TextInfo title="Cidades" info="Região metropolitana" />
                  <TextInfo title="Bairros" info="Todos" />
                </div>
              </div>
            </section>
            <section>
              <h2 className="font-bold text-2xl mb-5 underline">
                DADOS BANCÁRIOS
              </h2>
              <div className="flex flex-col gap-5 ">
                <div className="infos flex justify-between gap-5 border-b pb-5">
                  <TextInfo title="Conta própria" info="Sim" ativo />
                  <TextInfo title="Pix próprio" info="Sim" ativo />
                  <TextInfo title="Pix terceiros" info="Não" />
                </div>
              </div>
            </section>
            <section>
              <h2 className="font-bold text-2xl mb-5 underline">CONTRATO</h2>
              <div className="flex flex-col gap-5 pb-5">
                <div className="infos flex justify-between gap-5 ">
                  <TextInfo
                    title="Aceite dos termos"
                    info="12/01/2024 17:15:00 "
                  />
                </div>
                <div className="">
                  <Image src={signature} alt="Assinatura" width={300} />
                </div>
              </div>
            </section>
            <section className="flex flex-row gap-5 justify-center w-full ">
              <button className="p-5 border rounded-lg bg-green-500 uppercase hover:bg-green-400 hover:shadow-xl">
                <a href="/admin">Aprovar Credenciamento</a>
              </button>
              <button className="p-5 border rounded-lg bg-red-500 uppercase hover:bg-red-400 hover:shadow-xl">
                Reprovar Credenciamento
              </button>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
