import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'
import { toast } from 'react-toastify'

function GoalForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      toast.error('Please enter a goal')
    } else {
      dispatch(createGoal({ text }))

      setText('')
    }
  }

  const handleInputChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="text">Goal</label>
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Type your goal here"
              value={text}
              onChange={handleInputChange}
            />
            <div className="form-group">
              <button className="btn btn-block" type="submit">
                Add Goal
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}

export default GoalForm
