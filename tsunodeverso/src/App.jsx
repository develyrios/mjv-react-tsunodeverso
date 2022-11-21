import Input from "./components/input"
import List from "./components/List"


const App = () => {
  return (
    <div>
      <List />
      
      <h1>BEV VERSO</h1>

      <Input label='Nome:' id='name' type='text' name='name'>
        Teste de children
      </Input>

      <Input label='E-mail:' id='email' type='email' name='email' />
      <Input label='Senha:' id='password' type='password' name='password' />
    </div>
  )
}

export default App
