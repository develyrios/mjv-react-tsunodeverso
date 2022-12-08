import { InputHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

interface IInputProps 
extends Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
    label: string;
    children?:  ReactNode;
}


export const Input = ({ alt, id, label, children, ...rest }: IInputProps) => {
    return(
        <Container>
            <input alt={alt} id={id} placeholder=' ' {...rest} />
            <label htmlFor={id}>{label}</label>
            {children}
        </Container>
    )
}