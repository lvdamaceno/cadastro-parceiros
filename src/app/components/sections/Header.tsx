import Image from 'next/image';
import logo from '/src/app/assets/logo-grande-bg.png';

export default function Header() {
  return (
    <div className="header flex flex-col items-center w-full bg-zinc-100 p-5">
      <a href="/">
        <Image src={logo} alt="Logotipo da Ultralog" height={96} />
      </a>
    </div>
  );
}
