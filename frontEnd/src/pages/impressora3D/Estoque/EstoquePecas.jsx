import React from 'react'
import EngCambio from '../../../assets/impressora3D/images/eng_cambio.png'
import EngRotacaoPente from '../../../assets/impressora3D/images/eng_rotacao_pente.png'
import EngAvancoTecido from '../../../assets/impressora3D/images/eng_avanco_tecido.png'
import EngRetaModulo from '../../../assets/impressora3D/images/eng_reta_modulo.png'
import EngPlanetaria from '../../../assets/impressora3D/images/eng_planetaria.png'
import { handleOnClick } from '../../../functions/HandleOnClick'
import { useNavigate } from 'react-router-dom'

export default function EstoquePecas() {
    const navigate = useNavigate()

  return (
    <div class="corpo">
    <div class="manufatura">
        <h1>Estoque de peças</h1>
    </div>
    <div class="principal-container">
        <div class="card">
            <p>Engrenagem de câmbio</p>
            <img src={EngCambio} alt="Engrenagem de câmbio"/>
            <p>63 peças</p>
        </div>
        <div class="card">
            <p>Engrenagem de rotação do pente</p>
            <img src={EngRotacaoPente} alt="Engrenagem de rotação do pente"/>
            <p>15 peças</p>
        </div>
        <div class="card">
            <p>Engrenagens de avanço de tecido</p>
                <img src={EngAvancoTecido} alt="Engrenagens de avanço de tecido"/>
            <p>44 peças</p>
        </div>
        <div class="card">
            <p>Engrenagem Reta Módulo</p>
            <img src={EngRetaModulo} alt="Engrenagem Reta Módulo"/>
            <p>21 peças</p>
        </div>
        <div class="card">
            <p>Engrenagem planetária</p>
            <img src={EngPlanetaria} alt="Engrenagem planetária"/>
            <p>97 peças</p>
        </div>
    </div>
    <div class="voltar" id="back-button" onClick={(e) => handleOnClick(e, '/impressora-3d/verificar-estoque', navigate)}>
      <p>Voltar</p>
    </div>
</div>
  )
}
