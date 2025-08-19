import { useState } from "react";
 
function Contador() {
  const [contador, setContador] = useState(0);
 
  return (
    <div className="app">
      <p>Valor atual: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
    </div>
  );
}
 
export default Contador;