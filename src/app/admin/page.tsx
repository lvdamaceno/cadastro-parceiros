import Footer from '../components/sections/Footer';
import Header from '../components/sections/Header';
import Button from './components/Button';
import TableRow from './components/TableRow';

export default function admin() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="container max-w-5xl">
        <div className="options flex justify-between align-bottom p-5 ">
          <div className="buttons flex gap-5">
            <div className="tipo flex gap-5 ">
              <Button title="Montador" />
              <Button title="Entregador" />
            </div>
            <div className="aprovacao flex gap-5 ">
              <Button title="Aprovado" />
              <Button title="Reprovado" />
            </div>
          </div>
          <div className="search">
            <input
              className="border border-solid border-zinc-400 rounded-lg w-64 h-full p-2"
              type="text"
            />
          </div>
        </div>
        <div className="lista-parceiros p-5 flex flex-col items-center">
          <table>
            <thead>
              <tr className="border-b border-solid border-zinc-400">
                <th scope="col">CPF</th>
                <th scope="col">Data Cadastro</th>
                <th scope="col">Nome</th>
                <th scope="col">Tipo</th>
                <th scope="col">Aprovado?</th>
                <th scope="col">Motivo</th>
              </tr>
            </thead>
            <tbody>
              <TableRow
                cpf="333.333.333-33"
                data="15/01/2024"
                nome="Doctor Doom"
                tipo="Entregador"
                aprovado
              />
              <TableRow
                cpf="111.111.111-11"
                data="01/02/2024"
                nome="Hank Pym"
                tipo="Entregador"
                motivo="Faltou documentos"
              />
              <TableRow
                cpf="000.000.000-00"
                data="23/12/2023"
                nome="Reed Richards"
                tipo="Montador"
                aprovado
                motivo=""
              />
              <TableRow
                cpf="000.000.000-00"
                data="11/11/2023"
                nome="Sue Storm"
                tipo="Montador"
                motivo="Invisível"
              />
            </tbody>
          </table>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
