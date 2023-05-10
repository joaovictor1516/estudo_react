"use client"

import {useEffect, useState} from "react";
import Contador from "@/app/components/Contador";
import Reseter from "@/app/components/Reseter";
import Cronometro from "@/app/components/Cronometro";
import {clearInterval} from "timers";

export default function Home() {
    const [contador, setContador] = useState(0);
    const [segundos, setCronometro] = useState(0);
    const [minutos] = useState(0);
    const [horas] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () => setContador((atual) => atual+1),
            1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

        useEffect(() => { 
            const intervalo = setInterval(
            () => setCronometro((atual) => atual+1), 1000)
            return () => {
                clearInterval(intervalo)
            }
        })

    return (
      <main className="flex min-h-screen flex-col items-center p-24">
          <Contador
              contador={contador}
              onIncrement={() => setContador(contador+1)}
          />
          <Reseter onReset={() => setContador(0)} />

          <Cronometro horas={horas} minutos={minutos} segundos={segundos} 
          
            onReset={() => setCronometro(0)} 
            
            onInit={() => setCronometro( segundos +1)} 
            
            onFinish={() => setCronometro(segundos)}/>
      </main>
    )
}
