import PropTypes from 'prop-types'
import Button from './Button.js'

const Header = ({ title }) => {
    const onClick = () => {
        console.log("I'm being clicked!")
    }  
  
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text="Add" onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: "To-do list",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header