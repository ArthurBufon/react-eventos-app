import Evento from "@/app/core/Evento";
import { formatDate } from "@/app/utils/converters";
import { useState } from "react";
import Botao from "./botao";
import Input from "./input";

interface FormProps {
  evento: Evento;
  eventoMudou?: (evento: Evento) => void;
  cancelado?: () => void;
}

export default function Form(props: FormProps) {
  const id = props.evento?.id;
  const [nome, setNome] = useState(props.evento?.nome);
  const [data, setData] = useState(props.evento?.data);
  const [descricao, setDescricao] = useState(props.evento?.descricao);
  const [status, setStatus] = useState(props.evento?.status);

  return (
    <div>
      {id ? <Input texto="id" valor={id} somenteLeitura></Input> : false}
      <Input texto="Nome" valor={nome} onChange={setNome}></Input>

      <Input
        texto="Data"
        tipo="date"
        valor={formatDate(data)}
        onChange={setData}
      ></Input>

      <Input
        texto="Descricao"
        valor={descricao}
        onChange={setDescricao}
      ></Input>

      <Input texto="Status" valor={status} onChange={setStatus}></Input>

      <div className="flex justify-end mt-5">
        <Botao
          className="mr-3"
          cor="bg-gradient-to-r from-blue-500 to-blue-700"
          onClick={() =>
            props.eventoMudou?.(new Evento(id, nome, data, descricao, status))
          }
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>

        <Botao
          cor="bg-gradient-to-r from-gray-500 to-gray-700"
          onClick={props.cancelado}
        >
          Cancelar
        </Botao>
      </div>
    </div>
  );
}
