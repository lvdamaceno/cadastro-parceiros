import Image from 'next/image';
import logo from '/src/app/assets/logo-grande-bg.png';
import tuco from '/src/app/assets/tuco.png';
import working from '/src/app/assets/tuco-work.jpeg';

export default function page() {
  return (
    <div className="questions  w-full bg-gradient-to-b from-[#f85014] to-[#fb923c]">
      {/* header */}
      <div className="header flex flex-col items-center w-full bg-zinc-100 p-5">
        <a href="/">
          <Image src={logo} alt="Logotipo da Ultralog" height={96} />
        </a>
      </div>
      <div className="max-w-4xl p-5 flex flex-col gap-5 m-auto">
        {/* title */}
        <section className=" m-auto w-full flex flex-col border-solid border border-zinc-300 rounded-lg p-5 bg-zinc-100 drop-shadow-lg ">
          <div className="flex flex-col gap-5">
            <h2 className="text-center text-3xl md:text-5xl font-bold leading-snug">
              Quer prestar serviços para a UltraLog?
            </h2>
            <h1 className="text-center font-light">
              Seja um entregador parceiro e ajude a crescer e melhorar a
              logística mais rápida do norte do Brasil!
            </h1>
          </div>
        </section>
        {/* mid section */}
        <section className="max-w-4xl m-auto w-full flex flex-col gap-5 border-solid border border-zinc-300 rounded-lg p-5 bg-zinc-100 drop-shadow-lg">
          <div className="presentation flex flex-col gap-5 items-center md:flex-row">
            <div className="logo">
              <Image src={tuco} width={850} alt="Logotipo da Ultralog" />
            </div>
            <div className="text w-full">
              <h1 className="text-left text-2xl font-bold mb-5">
                Vem ser feliz!
              </h1>
              <div className="question text-justify flex flex-col gap-5">
                <p>
                  Sendo um parceiro você consegue ganhar dinheiro fazendo
                  entregas, ter uma rotina de trabalho flexível além de usufruir
                  de benefícios do ecossistema UltraLog.
                </p>
                <p>
                  Neste site você consegue fazer um cadastro inicial onde nosso
                  time tomará conhecimento da localidade que você deseja atender
                  além do veículo que possui e com isso conseguiremos definir
                  qual a melhor modalidade de entrega dentro do ecossistema
                  UltraLog para o seu perfil para enfim entrar em contato com
                  você e falar sobre os próximos passos!
                </p>
                <p>
                  Vale ressaltar que o cadastro não garante que você receba
                  demandas de entrega imediatamente, ainda será necessário o
                  contato do nosso time para passar orientações, por favor,
                  aguarde com paciência, tentaremos entrar em contato o mais
                  rápido possível!
                </p>
                <p>Obrigado por demostrar interesse em ser um parceiro!</p>
              </div>
            </div>
          </div>
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
        </section>
        {/* mid section */}
        <section className="max-w-4xl m-auto w-full flex flex-col gap-5 border-solid border border-zinc-300 rounded-lg p-5 bg-zinc-100 drop-shadow-lg">
          <div className="presentation flex flex-col gap-5 items-center md:flex-row">
            <div className="text w-full">
              <h1 className="text-left text-2xl font-bold mb-5">
                O que é necessário?
              </h1>
              <div className="question text-justify flex flex-col gap-5">
                <ul className="text-justify list-disc ml-5">
                  <li>Possuir mais de 18 anos</li>
                  <li>
                    Celular Android e um plano de dados móveis ativo para o
                    aparelho
                  </li>
                  <li>
                    Seu veículo pode ser desde uma bicicleta até um caminhão,
                    porém, para os veículos motorizados você deve possuir
                    habilitação válida e na categoria correta
                  </li>
                  <li>O veículo também deve estar com a documentação em dia</li>
                  <li>
                    No cadastro é possível selecionar somente 1 veículo, caso
                    possua mais de 1, selecione aquele que quer utilizar com
                    maior frequência!
                  </li>
                </ul>
              </div>
            </div>
            <div className="logo rounded-lg overflow-hidden">
              <Image src={working} width={850} alt="Logotipo da Ultralog" />
            </div>
          </div>
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
        </section>
      </div>

      {/* footer */}
      <div className="footer flex flex-col justify-center w-full bg-zinc-100 text-center p-5">
        <h2 className="font-bold">Tv. Santa Maria, 47 - Ananindeua/PA</h2>
        <h2 className="font-bold">
          UltraLog Logistica LTDA | 50.652.391/0001-05 | © 2024 – Todos os
          Direitos Reservados
        </h2>
      </div>
    </div>
  );
}
