import Image from 'next/image';
import logo from '/src/app/assets/logo.png';

export default function Header() {
  return (
    <div className="header flex flex-col items-center w-full bg-zinc-100">
      <div>
        <a className="flex items-center" href="/">
          <p className="text-3xl font-semibold">ultra.log.br</p>
          <Image src={logo} alt="Logotipo da Ultralog" height={80} />
        </a>
      </div>
    </div>
  );
}
