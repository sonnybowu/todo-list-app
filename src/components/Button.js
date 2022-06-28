import PropTypes from 'prop-types'

const Button = ({ text, color, onClick }) => {
    return (
        <div>
            <button onClick={onClick} style={{ backgroundColor: color }} 
            className='btn'>{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'green',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
