import React from "react";
import { usePokemonContext } from "../../contexts/PokemonContext";
import Pagination from "../../models/Pagination";

export default function Index(props: Pagination) {
  const { anterior, proximo } = usePokemonContext();

  const handlePrevious = function () {
    anterior(props.previous);
  };
  const handleNext = function () {
    proximo(props.next);
  };
  return (
    <div className="actions">
      <button
        type="button"
        onClick={() => handlePrevious()}
        disabled={!props.previous}
      >
        Anterior
      </button>
      <button type="button" onClick={() => handleNext()} disabled={!props.next}>
        Próximo
      </button>
    </div>
  );
}
