import Image from 'next/image';
import logo from '/src/app/assets/logo-nome.png';

export default function Header() {
  return (
    <div className="header flex flex-col h-20 items-center w-full bg-zinc-100">
      <a className="relative -top-10 " href="/">
        <Image src={logo} alt="Logotipo da Ultralog" height={150} />
      </a>
    </div>
  );
}
