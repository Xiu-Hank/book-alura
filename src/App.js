import Header from './componentes/Header'
import Pesquisa from './componentes/Pesquisa';
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002f52 35%,#326589);
  li {
    list-style: none;
  }
`

function App() {
  return (
    <div className='App'>
      <AppContainer>
      <Header/>
      <Pesquisa/>
      </AppContainer>
    </div>
  );
}

export default App;
