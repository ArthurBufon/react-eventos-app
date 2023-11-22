'use client';

import Evento from "@/components/core/Evento";
import Layout from "@/components/eventos/layout";
import Tabela from "@/components/eventos/tabela";

export default function Eventos() {
  const eventos = Evento.geraEventosMock();

  /**
   * Evento Selecionado.
   */
  function eventoSelecionado(evento: Evento){
    console.log('Editar :');
    console.log(evento.nome);
  }

  /**
   * Evento Excluído.
   */
  function eventoExcluido(evento: Evento){
    console.log('Excluído:');
    console.log(evento.nome);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-bl from-indigo-600 via-indigo-300 to-indigo-600 text-white">
      <Layout titulo="Cadastro de eventos">
        <Tabela eventos={eventos} />
      </Layout>
    </div>
  );
}
