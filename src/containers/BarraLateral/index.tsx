import FiltroCtn from '../../components/FiltroCtn'
import * as S from './styles'
const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar contato" />
      <S.Filtros>
        <FiltroCtn legenda="familia" contador={6} />
        <FiltroCtn legenda="trabalho" contador={4} />
        <FiltroCtn legenda="futebol" contador={3} />
        <FiltroCtn legenda="outros" contador={3} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
