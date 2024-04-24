import { Files } from '@phosphor-icons/react/dist/ssr';

import { EmbedPDF } from '@simplepdf/react-embed-pdf';
import SignatureCanvas from 'react-signature-canvas';

export default function Contrato() {
  return (
    <div className="flex flex-col gap-5 border-solid border border-zinc-300 rounded-lg p-5  bg-zinc-100 drop-shadow-lg">
      <h1 className="underline text-center text-2xl font-bold">
        LEIA COM ATENÇÃO NOSSO CONTRATO DE PRESTAÇÃO DE SERVIÇO
      </h1>
      <div className="question">
        <EmbedPDF>
          <a
            // href="https://fad6uwu6.simplepdf.eu/form/44c563317be0fe8745faa2938a91048e1cda43cf27d601f72da5ed0253754e67"
            href="https://fad6uwu6.simplepdf.eu/form/fe13897991832b6baac4d7f918349bba6dd61b17f3ad4bf6aeb7b1e60a49ab41"
            className="mb-4 flex justify-center items-center align-middle border-2 border-solid border-orange-400 rounded-lg bg-orange-300 hover:bg-orange-400 font-bold"
          >
            <Files size={64} weight="light" />
            VISUALIZAR CONTRATO E POLÍTICA DE DADOS
          </a>
        </EmbedPDF>
        <fieldset>
          <div className="flex gap-1">
            <input type="checkbox" id="contrato" name="contrato" required />
            <label htmlFor="contrato">
              Eu li e aceito os termos e condições deste contrato e a política
              de uso de dados segundo a LGPD.
            </label>
          </div>
        </fieldset>
        <div className="question">
          <h2 className="font-bold mt-3">
            Assine digitalmente no quadro abaixo
          </h2>
          <div className="border-2 border-orange-400 rounded-lg  bg-orange-300 flex justify-center items-center">
            <SignatureCanvas
              penColor="black"
              canvasProps={{
                width: 300,
                height: 150,
                className: 'sigCanvas',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
