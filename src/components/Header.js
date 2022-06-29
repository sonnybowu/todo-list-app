import PropTypes from 'prop-types'
import Button from './Button.js'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
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