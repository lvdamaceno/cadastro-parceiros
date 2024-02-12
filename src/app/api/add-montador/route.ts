import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  // const petName = searchParams.get('petName');
  // const ownerName = searchParams.get('ownerName');
  const todosDocumentos = searchParams.get('todosDocumentos');
  const genero = searchParams.get('genero');
  const ajudante = searchParams.get('ajudante');
  const meiMe = searchParams.get('meiMe');
  const primeiroNome = searchParams.get('primeiroNome');
  const ultimoNome = searchParams.get('ultimoNome');
  const cpnj = searchParams.get('cnpj');
  const razaoSocial = searchParams.get('razaoSocial');
  const rg = searchParams.get('rg');
  const dtNasc = searchParams.get('dtNasc');
  const nomeMae = searchParams.get('nomeMae');
  const enderecoPrincipal = searchParams.get('enderecoPrincipal');
  const endereçoSecundario = searchParams.get('endereçoSecundario');
  const cidade = searchParams.get('cidade');
  const estado = searchParams.get('estado');
  const cep = searchParams.get('cep');
  const pais = searchParams.get('pais');
  const email = searchParams.get('email');
  const telefonePrincipal = searchParams.get('telefonePrincipal');
  const telefoneSecundario = searchParams.get('telefoneSecundario');
  const onibus = searchParams.get('onibus');
  const moto = searchParams.get('moto');
  const scooter = searchParams.get('scooter');
  const carro = searchParams.get('carro');
  const bicicleta = searchParams.get('bicicleta');
  const sobMedida = searchParams.get('sobMedida');
  const modulares = searchParams.get('modulares');
  const tradicionais = searchParams.get('tradicionais');
  const estofados = searchParams.get('estofados');
  const chaveiro = searchParams.get('chaveiro');
  const limpeza = searchParams.get('limpeza');
  const reparoEstofado = searchParams.get('reparoEstofado');
  const reparoMoveis = searchParams.get('reparoMoveis');
  const cidadeAtendimento = searchParams.get('cidadeAtendimento');
  const bairroAtendimento = searchParams.get('bairroAtendimento');
  const tenhoConta = searchParams.get('tenhoConta');
  const tenhoPix = searchParams.get('tenhoPix');
  const tenhoPixTerceiro = searchParams.get('tenhoPixTerceiro');
  const aceite = searchParams.get('aceite');
 
  try {
    // if (!petName || !ownerName) throw new Error('Pet and owner names required');
  await sql`INSERT INTO Montador (todosDocumentos, genero, ajudante, meiMe, primeiroNome, ultimoNome, cpnj, razaoSocial, rg, dtNasc, nomeMae, enderecoPrincipal, endereçoSecundario, cidade, estado, cep, pais, email, telefonePrincipal, telefoneSecundario, onibus, moto, scooter, carro, bicicleta, sobMedida, modulares, tradicionais, estofados, chaveiro, limpeza, reparoEstofado, reparoMoveis, cidadeAtendimento, bairroAtendimento, tenhoConta, tenhoPix, tenhoPixTerceiro, aceite) VALUES (${todosDocumentos}, ${genero}, ${ajudante}, ${meiMe}, ${primeiroNome}, ${ultimoNome}, ${cpnj}, ${razaoSocial}, ${rg}, ${dtNasc}, ${nomeMae}, ${enderecoPrincipal}, ${endereçoSecundario}, ${cidade}, ${estado}, ${cep}, ${pais}, ${email}, ${telefonePrincipal}, ${telefoneSecundario}, ${onibus}, ${moto}, ${scooter}, ${carro}, ${bicicleta}, ${sobMedida}, ${modulares}, ${tradicionais}, ${estofados}, ${chaveiro}, ${limpeza}, ${reparoEstofado}, ${reparoMoveis}, ${cidadeAtendimento}, ${bairroAtendimento}, ${tenhoConta}, ${tenhoPix}, ${tenhoPixTerceiro}, ${aceite});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const pets = await sql`SELECT * FROM Montador;`;
  return NextResponse.json({ pets }, { status: 200 });
}

// http://localhost:3000/api/add-montador?todosDocumentos=S&genero=M&ajudante=N&meiMe=Mei&primeiroNome=Charles&ultimoNome=Xavier&cpnj=12345678000123&razaoSocial=Mutantes&rg=1234567890&dtNasc=01/04/1957&nomeMae=Sharon&enderecoPrincipal=Endereço&endereçoSecundario=Endereço&cidade=Westchester&estado=York&cep=1234567&pais=US&email=charlesxavier@xmen.com&telefonePrincipal=5591999999999&telefoneSecundario=5599199999999&onibus=N&moto=N&scooter=S&carro=S&bicicleta=N&sobMedida=S&modulares=S&tradicionais=S&estofados=N&chaveiro=S&limpeza=S&reparoEstofado=S&reparoMoveis=N&cidadeAtendimento=Westchester&bairroAtendimento=Centro&tenhoConta=S&tenhoPix=S&tenhoPixTerceiro=N&aceite=13/02/2024