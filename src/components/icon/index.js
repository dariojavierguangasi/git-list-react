import Heart from './heart.js'
import ArrowDown from './arrow-down.js' 
import Book from './book.js'
import Branch from './branch.js'
import Cancel from './cancel.js'
import Check from './check.js'
import GitHub from './github.js'
import Home from './home.js'
import Link from './link.js'
import Location from './location.js'
import Search from './search.js'
import Star from './star.js'
import Twitter from './twitter.js'
import User from './user.js'

function Index({ name, ...props}) {

    switch (name) {
        case 'heart':
            return <Heart {...props} />
        case 'arrow-down':
            return <ArrowDown {...props} />
        case 'book':
            return <Book {...props} />
        case 'branch':
            return <Branch {...props} />
        case 'cancel':
            return <Cancel {...props} />
        case 'check':
            return <Check {...props} />
        case 'github':
            return <GitHub {...props} />
        case 'home':
            return <Home {...props} />
        case 'link':
            return <Link {...props} />
        case 'location':
            return <Location {...props} />
        case 'search':
            return <Search {...props} />
        case 'star':
            return <Star {...props} />
        case 'twitter':
            return <Twitter {...props} />
        case 'user':
            return <User {...props} />
        default:
            return null
    }
}

Index.defaultProps = {
    size: 16,
    color: 'white'
}

export default Index
