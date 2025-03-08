import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

export default _ =>
    <div id="app">
        <h1>Fundamentos React blabnlab</h1>
        <Aleatorio first={1} second={60} />
        <Fragmento />
        <ComParametro titulo="Segundo Componente" subtitulo="Parametrizado" />
        <Primeiro />
    </div>