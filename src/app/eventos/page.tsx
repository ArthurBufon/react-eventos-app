'use client';

import Layout from "@/components/eventos/layout";
import Evento from "@/components/core/Evento";
import Tabela from "@/components/eventos/tabela";
import Botao from "@/components/eventos/botao";

export default function Eventos() {
  const eventos = Evento.geraEventosMock();

  /**
   * Evento Selecionado.
   */
  function eventoSelecionado(evento: Evento) {
    console.log('Editar :' + evento.nome);
  }

  /**
   * Evento Excluído.
   */
  function eventoExcluido(evento: Evento) {
    console.log('Excluir :' + evento.nome);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-bl from-indigo-600 via-indigo-300 to-indigo-600 text-white">
      <Layout titulo="Cadastro de eventos">

        {/* Criar novo evento. */}
        <div className="flex justify-end">
          <Botao className="mb-4" cor="bg-gradient-to-r from-indigo-600 to-indigo-400">
            Novo evento
          </Botao>
        </div>

        {/* Tabela de eventos. */}
        <Tabela
          eventos={eventos}
          eventoSelecionado={eventoSelecionado}
          eventoExcluido={eventoExcluido} />
      </Layout>
    </div>
  );
}
