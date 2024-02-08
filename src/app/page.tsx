import Header from './components/sections/Header';
import Footer from './components/sections/Footer';

import Image from 'next/image';

import tuco from '/src/app/assets/tuco.png';
import working from '/src/app/assets/tuco-work.jpeg';
import Servicos from './components/buttons/Servicos';

export default function page() {
  return (
    <div className="questions  w-full bg-gradient-to-b from-[#f85014] to-[#fb923c]">
      <Header />
      <div className="max-w-5xl p-5 flex flex-col gap-5 m-auto">
        {/* title */}
        <section className=" m-auto w-full flex flex-col border-solid border border-zinc-300 rounded-lg p-5 bg-zinc-100 drop-shadow-lg ">
          <div className="flex flex-col gap-5">
            <h2 className="text-center text-3xl md:text-5xl font-bold leading-snug">
              Quer prestar serviços para a ultra.log.br?
            </h2>
            <h1 className="text-center font-light">
              Seja um entregador parceiro e ajude a crescer e melhorar a
              logística mais rápida do norte do Brasil!
            </h1>
          </div>
        </section>
        {/* mid section */}
        <section className="max-w-5xl m-auto w-full flex flex-col gap-5 border-solid border border-zinc-300 rounded-lg p-5 bg-zinc-100 drop-shadow-lg">
          <div className="presentation flex flex-col gap-5  md:flex-row">
            <div className="logo">
              <Image
                src={tuco}
                width={600}
                quality={50}
                alt="Logotipo da Ultralog"
              />
            </div>
            <div className="text w-full">
              <h1 className="text-left text-2xl font-bold mb-2">Seja Ultra!</h1>
              <div className="question text-justify flex flex-col gap-2">
                <p>
                  Junte-se a nós como parceiro ultra.log.br e descubra uma forma
                  dinâmica de ganhar dinheiro, optando por fazer entregas ou
                  realizar serviços de montagem de móveis. Com a ultra.log.br,
                  você tem a liberdade de escolher o caminho que mais se alinha
                  às suas habilidades e preferências. Desfrute de uma rotina de
                  trabalho flexível e acesso aos benefícios do nosso ecossistema
                  ultra.log.br, tudo isso enquanto atende às necessidades dos
                  nossos clientes de forma eficaz e profissional.
                </p>
                <p>
                  Faça seu cadastro inicial em nosso site para que possamos
                  conhecer melhor suas intenções, incluindo a localidade que
                  deseja atender e o tipo de veículo que possui, no caso de
                  escolher as entregas, ou suas experiências anteriores com
                  montagem, se preferir esse serviço.
                </p>
              </div>
            </div>
          </div>
          <div className="text-justify flex flex-col gap-2">
            <p>
              Essas informações nos ajudarão a determinar a melhor forma de
              integrá-lo ao ecossistema UltraLog, adequando-se ao seu perfil e
              preferências.Em seguida, nosso time entrará em contato para
              discutir os próximos passos e assegurar que você esteja preparado
              para começar.
            </p>
            <p>
              Vale destacar que o processo de cadastro inicial não garante a
              alocação imediata de tarefas de entrega ou de montagem de móveis.
              A etapa seguinte envolve o contato de nossa equipe, que fornecerá
              orientações detalhadas sobre como proceder. Solicitamos sua
              paciência durante esse período; nosso objetivo é facilitar esse
              processo e entrar em contato o mais rápido possível.
            </p>
            <p>
              Agradecemos por considerar a parceria com a ultra.log.br! Estamos
              empolgados com a possibilidade de contar com você em nossa equipe,
              oferecendo serviços de qualidade que atendam às expectativas dos
              nossos clientes e reforçando o compromisso com a eficiência e
              excelência característicos da UltraLog.
            </p>
          </div>
          <Servicos />
        </section>
        {/* mid section */}
        <section className="max-w-5xl m-auto w-full flex flex-col gap-2 border-solid border border-zinc-300 rounded-lg p-5 bg-zinc-100 drop-shadow-lg">
          <div className="presentation flex flex-col gap-2  md:flex-row">
            <div className="text w-full">
              <h1 className="text-left text-2xl font-bold mb-5">
                O que é necessário para se tornar um parceiro ultra.log.br?
              </h1>
              <div className="question text-justify flex flex-col gap-2">
                <ul className="text-justify list-disc ml-5">
                  <li>Idade: Você deve ter mais de 18 anos.</li>
                  <li>
                    Tecnologia: Possuir um celular com sistema Android e um
                    plano de dados móveis ativo é essencial para que você possa
                    receber e gerenciar as tarefas através do nosso aplicativo.
                  </li>
                </ul>
              </div>
            </div>
            <div className="logo rounded-lg overflow-hidden">
              <Image
                src={working}
                width={500}
                quality={50}
                alt="Logotipo da Ultralog"
              />
            </div>
          </div>
          <div>
            <ul className="text-justify list-disc ml-5">
              <li>
                Veículo: Para os parceiros interessados em realizar entregas,
                seu veículo pode variar de uma bicicleta até um caminhão. Caso
                opte por utilizar veículos motorizados, é necessário ter uma
                habilitação válida e na categoria adequada para o tipo de
                veículo escolhido. Além disso, a documentação do veículo deve
                estar em dia. No momento do cadastro, é possível selecionar
                apenas 1 veículo. Se você possui mais de um, escolha aquele que
                pretende usar com maior frequência nas entregas.
              </li>
              <li>
                Para montagem de móveis: Se você deseja prestar serviços de
                montagem de móveis, não é necessário possuir um veículo. No
                entanto, é importante ter habilidades comprovadas em montagem de
                móveis e ferramentas adequadas para realizar o serviço com
                qualidade e eficiência.
              </li>
              <li>
                No cadastro é possível selecionar somente 1 veículo, caso possua
                mais de 1, selecione aquele que quer utilizar com maior
                frequência!
              </li>
            </ul>
            <p>
              Independente da opção escolhida, seja para realizar entregas ou
              para prestar serviços de montagem de móveis, estamos em busca de
              parceiros comprometidos e prontos para oferecer um serviço de
              qualidade aos nossos clientes.
            </p>
          </div>
          <Servicos />
        </section>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}
