import propTypes from 'prop-types'
import Header from './Header'

export default function Page({children, cool}) 
{
    return ( 
    <div>
        <Header>
        <h2>i am the page component</h2>
        {children}
        <h3>{cool}</h3>
        </Header>
    </div>
    )
}

Page.propTypes = {
cool: propTypes.string,
children: PropTypes.any,
}