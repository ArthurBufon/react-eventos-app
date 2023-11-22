import Evento from "../core/Evento";
import { IconeEdicao, IconeLixo } from "../icones/tabela";

interface TabelaProps {
  eventos: Evento[],
  eventoSelecionado?: (evento: Evento) => void,
  eventoExcluido?: (evento: Evento) => void
}

export default function Tabela(props: TabelaProps) {
  /**
   * Renderiza linhas do header.
   */
  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-3">ID</th>
        <th className="text-left p-3">NOME</th>
        <th className="text-left p-3">DATA</th>
        <th className="text-left p-3">DESCRIÇÃO</th>
        <th className="text-left p-3">STATUS</th>
        <th className="text-center p-3">AÇÕES</th>
      </tr>
    );
  }

  /**
   * Renderiza linhas do corpo.
   */
  function renderBody() {
    return props.eventos?.map((evento, i) => {
      return (
        <tr key={evento.id} className={i % 2 == 0 ? 'bg-white' : 'bg-gray-100'}>
          <td className="text-left p-3">{evento.id}</td>
          <td className="text-left p-3">{evento.nome}</td>
          <td className="text-left p-3">{evento.data}</td>
          <td className="text-left p-3">{evento.descricao}</td>
          <td className="text-left p-3">{evento.status}</td>
          <td className="text-center p-3">{renderActions(evento)}</td>
        </tr>
      );
    });
  }

  /**
   * Redenriza Ações
   */
  function renderActions(evento: Evento){
    return (
      <td className="flex">
        <button onClick={() => props.eventoSelecionado?.(evento)} className="flex justify-center items-center text-indigo-400 rounded-full p-2 m-1 hover:bg-gray-100">{IconeEdicao}</button>
        <button onClick={() => props.eventoExcluido?.(evento)} className="flex justify-center items-center text-red-500 rounded-full p-2 m-1 hover:bg-gray-100">{IconeLixo}</button>
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className="text-gray-700 bg-gray-300">{renderHeader()}</thead>
      <tbody>{renderBody()}</tbody>
    </table>
  );
}
