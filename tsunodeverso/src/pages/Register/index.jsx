import tsunodeverso from '../../assets/tsunodeverso.svg';

import { Main } from '../../styles/main';
import { useState } from 'react';
import { Steps } from './styles';
import { Input } from '../../components/Input';
import { Form } from '../../styles/Form';


export const Register = () => {
    const [step, setStep] = useState(1);

    return (
        <Main>
            <img src={tsunodeverso} alt='Logo Tsunodeverso' />

            <Form>
                <fieldset>
                    <legend>Faça seu cadastro:</legend>

                    <Steps step={step}>
                        <div></div>
                        <div></div>
                    </Steps>

                    {
                        step === 1 ?
                            <div>
                                <Input 
                                    id='name' 
                                    name='name' 
                                    label='Nome:' 
                                    type='text' 
                                />
                                <Input 
                                    id='email' 
                                    name='email' 
                                    label='Email:' 
                                    type='email' 
                                />

                                <button type='button' onClick={() => setStep(2)}>Próximo</button>
                            </div>

                            :

                            <div>
                                <Input 
                                    id='password' 
                                    name='password' 
                                    label='Senha:' 
                                    type='password' 
                                />
                                <Input 
                                    id='confirm-password' 
                                    name='confirm-password' 
                                    label='Confirmar senha:' 
                                    type='password' 
                                />

                                <button type='button' onClick={() => setStep(1)}>Voltar</button>
                            </div>
                    }
                </fieldset>
            </Form>
        </Main>
    )
}