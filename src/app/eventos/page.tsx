"use client";

import Layout from "@/components/eventos/layout";
import Tabela from "@/components/eventos/tabela";
import Botao from "@/components/eventos/botao";
import Evento from "../core/Evento";
import Form from "@/components/eventos/form";
import { useState } from "react";

export default function Eventos() {
  const eventos = Evento.geraEventosMock();
  const [evento, setEvento] = useState<Evento>(Evento.vazio());
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");

  /**
   * Novo Evento
   */
  function novoEvento() {
    setEvento(Evento.vazio());
    setVisivel("form");
  }

  /**
   * Salvar evento
   */
  function salvarEvento(evento: Evento) {
    console.log(evento);
    setVisivel("tabela");
  }

  /**
   * Evento Selecionado.
   */
  function eventoSelecionado(evento: Evento) {
    setEvento(evento);
    setVisivel("form");
  }

  /**
   * Evento Excluído.
   */
  function eventoExcluido(evento: Evento) {
    console.log("Excluir :" + evento.nome);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <Layout titulo="Cadastro de eventos">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Botao
                className="mb-4"
                cor="bg-gradient-to-r from-indigo-500 to-indigo-700"
                onClick={() => novoEvento()}
              >
                Novo evento
              </Botao>
            </div>

            <Tabela
              eventos={eventos}
              eventoSelecionado={eventoSelecionado}
              eventoExcluido={eventoExcluido}
            />
          </>
        ) : (
          <Form
            evento={evento}
            eventoMudou={salvarEvento}
            cancelado={() => setVisivel("tabela")}
          />
        )}
      </Layout>
    </div>
  );
}
