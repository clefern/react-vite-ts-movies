import { useState, useEffect } from "react";

export function Timer() {
  const [time, setTime] = useState<number>(0); // Tipando como número
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
    
    return () => clearInterval(timer); // Garantindo que a limpeza seja feita corretamente
  }, []); // O hook roda uma vez, assim que o componente é montado

  return (
    <div>
      <p>Tempo: {time}s</p>
    </div>
  );
}