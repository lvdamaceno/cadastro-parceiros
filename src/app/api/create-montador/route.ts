import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
    await sql`CREATE TABLE Montador ( todosDocumentos varchar(255), genero varchar(255), ajudante varchar(255), meiMe varchar(255), primeiroNome varchar(255), ultimoNome varchar(255), cpnj varchar(255), razaoSocial varchar(255), rg varchar(255), dtNasc varchar(255), nomeMae varchar(255), enderecoPrincipal varchar(255), endereçoSecundario varchar(255), cidade varchar(255), estado varchar(255), cep varchar(255), pais varchar(255), email varchar(255), telefonePrincipal varchar(255), telefoneSecundario varchar(255), onibus varchar(255), moto varchar(255), scooter varchar(255), carro varchar(255), bicicleta varchar(255), sobMedida varchar(255), modulares varchar(255), tradicionais varchar(255), estofados varchar(255), chaveiro varchar(255), limpeza varchar(255), reparoEstofado varchar(255), reparoMoveis varchar(255), cidadeAtendimento varchar(255), bairroAtendimento varchar(255), tenhoConta varchar(255), tenhoPix varchar(255), tenhoPixTerceiro varchar(255), aceite varchar(255));`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}