export interface CronometroProps{
    horas: number
    minutos: number
    segundos: number
    onReset: () => void
    onInit: () => void
    onFinish: () => void
}

export default function Cronometro({horas, minutos, segundos, onReset, onInit, onFinish}:CronometroProps){
    return(
        <div>
            <div>
                {horas}:{minutos}:{segundos}
            </div>

            <button onClick={onInit}>
                Click para iniciar a contagem do cronometro
            </button>

            <button onClick={onReset}>
                Click para reiniciar o cronometro
            </button>

            <button onClick={onFinish}>
                Click para parar o cronometro
            </button>
        </div>
    )
}