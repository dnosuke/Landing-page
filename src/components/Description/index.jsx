import React from "react";
import acua from "../../assets/img/acua.jpg"
import * as C from "./styles"
import osmose from "../../assets/img/osmose.png"

export const Description = () => {

    return (
        <C.Container>
            <div class="card">
                <div class="card-image">
                        <img src={osmose} alt="Placeholder image" />
                </div>
                
                <div class="card-content">
                    <div class="content">
                        <h2>Por que contratar a acua limpa?</h2>
                        <p>-Economia: Diminuição na conta de água de até 50%</p>
                        <p>-Análise em tempo real por QR code (+ de 300 parâmetros da água);</p>
                        <p>-Monitoramento Remoto 24h;</p>
                        <p>-Instalação sem custo e manutenção inclusa;</p>
                        <p>-Operação simples e segura;</p>
                        <p>-Mobilidade da máquina (Facilidade de locomoção);</p>
                        <p>-Água totalmente adaptável para o cliente;</p>
                    </div>
                </div>
            </div>
        </C.Container>
    )
}