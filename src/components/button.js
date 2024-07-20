import styled from 'styled-components'
import { isValidElement } from 'react'

const ButtonStyled = styled.button`
    background: var(--buttonBG);
    color: var(--white);
    border: 1px solid var(--grey);
    border-radius: .5rem;
    padding-block: 0.25rem;
    font: var(--button);
    min-inline-size: 135px;
    gap: 0.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none !important;
    &:hover{
        background: var(--white);
        color: var(--buttonBG);
        text-decoration: none;
    }
`

function Button({ text, link, className, icon }) {

    const component = link ? 'a' : 'button';
    let IconComponente = null;
    if (icon) {
        if (isValidElement(icon)) {
            IconComponente = icon;
        }
    }


    return (
        <ButtonStyled as={component} href={link} className={className}>
            {IconComponente}
            {text}
        </ButtonStyled>
    )
}

export default Button
