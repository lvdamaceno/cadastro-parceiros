'use client';
import React from 'react';

import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import Titulo from '../components/sections/Titulo';
import DadosIniciais from '../components/sections/DadosIniciais';
import EnvioDocumentos from '../components/sections/EnvioDocumentos';
import Identificacao from '../components/sections/Identificacao';
import DadosContatos from '../components/sections/DadosContatos';
import DadosBancarios from '../components/sections/DadosBancarios';
import Contrato from '../components/sections/Contrato';
import FinalizarCadastro from '../components/buttons/FinalizarCadastro';
import Experiencia from '../components/sections/Experiencia';

export default function montador() {
  return (
    <div className="questions w-full bg-gradient-to-b from-[#f85014] to-[#fb923c]">
      <Header />
      <div className="max-w-5xl p-5 flex flex-col gap-5 m-auto">
        <Titulo title="ULTRALOG - CADASTRO P/ PARCEIROS DE ENTREGA" />
        <form action="" className="flex flex-col gap-5 ">
          <DadosIniciais />
          <EnvioDocumentos />
          <Identificacao />
          <DadosContatos />
          <Experiencia />
          <DadosBancarios />
          <Contrato />
          <FinalizarCadastro />
        </form>
      </div>
      <Footer />
    </div>
  );
}
