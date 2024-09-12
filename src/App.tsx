import { Provider } from 'react-redux'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Container, EstiloGlobal } from './styles'
import store from './store'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

// const rota = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/novo',
//     element: <Cadastro />
//   }
// ])

export function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal>
        <Container>
          <Home />
        </Container>
        <Cadastro />
      </EstiloGlobal>
    </Provider>
  )
}
