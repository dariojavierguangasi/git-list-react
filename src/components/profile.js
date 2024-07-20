import styled from 'styled-components'
import props from './profile-data.js'
import Button from './button.js'
import Icon from './icon'

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
    const { name, login, avatar_url, bio, followers, following, location, blog, twitter_username } = props;
    return (
        <ProfileStyled>
            <img src={avatar_url} className='avatar' width="278" height="278" alt="" />
            <p className='name'>{name}</p>
            <p className='username'>{login}</p>
            <div className='buttons'>
                <Button
                    text='Follow'
                    link='#'
                ></Button>
                <Button
                    text='Sponsor'
                    icon={<Icon
                        name="heart"
                        size="24"
                        color="var(--pink)" />}
                ></Button>
            </div>
            <p className='bio info'>
                {bio}
            </p>
            <p className='followers info'>
                <span>-</span>{followers}<span>followers</span> <span>-</span>{following}<span>following</span>
            </p>
            {/*<p className='starts info'>
                - 81
            </p>*/}
            <p className='location info'>
                <span>
                    <Icon
                    name='location'
                    size="24"
                    color='var(--grey)'
                    />
                </span> 
                {location}
            </p>
            <a className='info' href={blog} target='_blank' rel='noreferrer'>
                <span>
                    <Icon
                    name='link'
                    size="24"
                    color='var(--grey)'
                    />    
                </span>
                {blog}
            </a>
            <a className='info' href={`https://twitter.com/${twitter_username}`} target='_blank' rel='noreferrer'>
                <span>
                    <Icon
                    name='twitter'
                    size="24"
                    color='var(--grey)'
                    />    
                </span>
                @{twitter_username}
            </a>
        </ProfileStyled>
    )
}

export default Profile
