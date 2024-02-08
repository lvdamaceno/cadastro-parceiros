import { DownloadSimple } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import documento from '/src/app/assets/documento.jpeg';

export default function ImagemDocumento(props: any) {
  return (
    <div className="documentos border border-solid border-zinc-400 rounded-lg overflow-hidden py-2 px-2">
      <div className="image border border-solid cursor-pointer">
        <Image src={documento} alt={props.alt} width={200} height={150} />
      </div>
      <div className="container flex justify-between items-center">
        <p className="text-justify w-56 mt-2">{props.title}</p>
        <div className="download cursor-pointer">
          <DownloadSimple size={24} />
        </div>
      </div>
    </div>
  );
}
