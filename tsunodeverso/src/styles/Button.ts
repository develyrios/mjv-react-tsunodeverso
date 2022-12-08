import styled, { css } from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom'

interface IButtonProps {
    variant: 'primary' | 'error' | 'inline'
}

const ButtonStyled = {
    primary: css`
        background-color: var(--color-primary);
        color: #000;
    `,
    error: css`
        background-color: var(--color-error);
    `,
    inline: css`
        background: none;
        color: var(--color-text);
        text-decoration: underline;
    `
}

const ButtonStyledDefault = css`
    border-radius: 6px;
    min-height: 48px;
    font-weight: 500;
    padding: 0 15px;
`

export const Button = styled.button<IButtonProps>`
    ${({ variant }) => ButtonStyled[variant]};
    ${ButtonStyledDefault};

    border: none;
`;

export const Link = styled(LinkRouter)<IButtonProps>`
    text-decoration: none;

    ${({ variant }) => ButtonStyled[variant]};
    ${ButtonStyledDefault};
    
    display: flex;
    justify-content: center;
    align-items: center;
`