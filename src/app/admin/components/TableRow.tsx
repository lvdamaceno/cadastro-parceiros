export default function TableRow(props: any) {
  const aprovado = props.aprovado;
  if (aprovado) {
    return (
      <>
        <tr className="text-center">
          <td className="px-5 py-3">
            <a href="/ficha">{props.cpf}</a>
          </td>
          <td className="px-5 py-3">{props.data}</td>
          <td className="px-5 py-3">{props.nome}</td>
          <td className="px-5 py-3">{props.tipo}</td>
          <td className="px-5 py-3 text-green-600">Sim</td>
          <td className="px-5 py-3">{props.motivo}</td>
        </tr>
      </>
    );
  } else {
    return (
      <>
        <tr className="text-center">
          <td className="px-5 py-3">
            <a href="/ficha">{props.cpf}</a>
          </td>
          <td className="px-5 py-3">{props.data}</td>
          <td className="px-5 py-3">{props.nome}</td>
          <td className="px-5 py-3">{props.tipo}</td>
          <td className="px-5 py-3 text-red-600">Não</td>
          <td className="px-5 py-3">{props.motivo}</td>
        </tr>
      </>
    );
  }
}
