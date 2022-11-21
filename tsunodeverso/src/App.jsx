import { MdEmail } from 'react-icons/md'
import Input from './components/Input'
import GlobalStyle from "./styles/GlobalStyle"


const App = () => {
  return (
    <div>
      <GlobalStyle />

      <Input label='Nome:' id='name' type='text' name='name'>
        teste
      </Input>

      <Input label='Email:' id='email' type='email' name='email'>
        <MdEmail />
      </Input>

      <Input label='Senha:' id='password' type='password' name='password'>
        teste
      </Input>

      <ul>
        {/* card */}
      </ul>
    </div>
  )
}

export default App
