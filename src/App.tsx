import { Provider } from 'react-redux'
import Contato from './components/Contatos'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Contato />
    </Provider>
  )
}

export default App
