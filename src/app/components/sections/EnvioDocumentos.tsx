import UploadImage from '../inputs/UploadImage';

export default function EnvioDocumentos() {
  return (
    <div className="flex flex-col gap-5 border-solid border border-zinc-300 rounded-lg p-5  bg-zinc-100 drop-shadow-lg">
      {/* Selfie */}
      <h1 className="underline text-center text-2xl font-bold">
        ENVIO DE DOCUMENTOS
      </h1>
      <UploadImage title="Envie uma foto sua atual" id="selfie" required />
      <UploadImage
        title="Envie uma foto segurando o documento (RG/CNH) ao lado do rosto"
        id="selfie-documento"
        required
      />
      <UploadImage
        title="Envie uma foto atual do seu ajudante (opcional)"
        id="selfie-ajudante"
      />
      <UploadImage
        title="Envie uma foto folha da carteira profissional que comprove sua
        profissão"
        id="comprovante-trabalho"
        required
      />
      <UploadImage
        title="Envie uma foto do seu RG com CPF"
        id="foto-rg-cpf"
        required
      />
      <UploadImage
        title="Envie uma foto do seu comprovante de residência"
        id="comprovante-residencia"
        required
      />
      <UploadImage
        title="Certificado MEI (Caso tenha)"
        id="certificado-mei"
        required
      />
    </div>
  );
}
