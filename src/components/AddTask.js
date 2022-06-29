import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()

        //Validation for text boxes
        if (!text) {
            alert('Not a task')
            return
        }

        onAdd({text, day, reminder})
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input 
                type="text" 
                placeholder="Add Task"
                value={text}
                onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day and time</label>
                <input 
                type="text" 
                placeholder="Add Day and Time"
                value={day}
                onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input 
                type="checkbox"
                onChange={(e) => setReminder(!reminder)} />
            </div>
            <input className="btn btn-block" type="submit" value='Save Task' />
        </form>
    )
}

export default AddTask