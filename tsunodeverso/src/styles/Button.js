import styled, { css } from 'styled-components';

const ButtonStyled = {
    primary: css`
        background-color: var(--color-primary);
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

export const Button = styled.button`
    ${({ variant }) => ButtonStyled[variant]};

    border: none;
    border-radius: 6px;

    min-height: 48px;
    padding: 0 15px;

    font-weight: 500;
`;