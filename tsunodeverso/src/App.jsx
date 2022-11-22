import { MdEmail } from 'react-icons/md'
import Input from './components/Input'
import GlobalStyle from "./styles/GlobalStyle"

import Dashboard from './pages/Dashboard'
import States from './pages/States'


const App = () => {
  return (
    <div>
      <GlobalStyle />
      {/* <Dashboard /> */}
      <States />
    </div>
  )
}

export default App
