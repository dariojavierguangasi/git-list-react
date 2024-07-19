import styled from 'styled-components'

const ProfileStyled = styled.div`
    grid-area: profile;
    .info {
        color: var(--grey-1);
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-block: 1rem;
        font: var(--body2-semi-bold);
    }
    a:hover{
        text-decoration: underline;
    }

    .avatar{
        border-radius: 50%;
        border: 1px solid var(--grey-1);
        overflow: hidden;
        box-sizing: border-box;
        margin-block-end: 1.5rem;
    }

    .name{ 
        font: var(--headline1);
        color: var(--white);
        margin: 0;
        margin-block-end: 0.5rem;
    }

    .username{
        margin-block-start: 0.5rem;
        margin-block-end: 1.5rem;
        font: var(--headline2-ligth);
    }

    .buttons{
        display: flex;
        gap: .5rem;
        margin-block-end: 1.5rem;
    }
`

function Profile() {
    return (
        <ProfileStyled>
            <img src="" className='avatar' width="278" height="278" alt="" />
            <p className='name'>Dario Guangasi</p>
            <p className='username'>dariojavierguangasi</p>
            <div className='buttons'>
                <button>Follow</button>
                <button>Message</button>
            </div>
            <p className='bio info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec enim nec turpis aliquam fermentum. Sed auctor, justo eget fermentum fringilla, nisl purus ultricies nunc, vel ultricies nunc justo nec nunc.</p>
            <p className='followers info'>
                <span>-</span> 10 <span>followers</span> <span>-</span> 15 <span>following</span>
            </p>
            <p className='starts info'>
                - 81
            </p>
            <p className='location info'>
                <span>📍</span> Ecuador
            </p>
            <a className='info' href='https://leonidasesteban.com' target='_blank' rel='noreferrer'> https://leonidasesteban.com</a>
            <a className='info' href='https://leonidasesteban.com' target='_blank' rel='noreferrer'>@DarioGuangasi</a>
        </ProfileStyled>
    )
}

export default Profile
