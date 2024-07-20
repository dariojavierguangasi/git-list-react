import styled from 'styled-components'
import Icon from './icon'
const FiltersStyled = styled.div`
    grid-area: filters;
    background-color: lightblue;
`

function Filters() {
    return (
        <FiltersStyled>
            <Icon name='cancel' size='24px' color='black' />
            <Icon name='check' size='24px' color='black' />
            <Icon name='arrow-down' size='24px' color='black' />
            <Icon name='search' size='24px' color='black' />
            <Icon name='location' size='24px' color='black' />
            <Icon name='branch' size='24px' color='black' />
            <Icon name='star' size='24px' color='black' />
            <Icon name='heart' size='24px' color='black' />
            <Icon name='book' size='24px' color='black' />
            <Icon name='home' size='24px' color='black' />
            <Icon name='link' size='24px' color='black' />
            <Icon name='github' size='24px' color='black' />
            <Icon name='twitter' size='24px' color='black' />
            <Icon name='user' size='24px' color='black' />
            
        </FiltersStyled>
    )
}

export default Filters
