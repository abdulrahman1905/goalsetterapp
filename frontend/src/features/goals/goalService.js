import axios from 'axios'

const API_URL = '/api/goals/'

//Get all goals
const getGoals = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)

    // if(response.data){
    //     localStorage.setItem('goals', JSON.stringify(response.data))
    // }

    return response.data
}

//Create a goal
const createGoal = async (goal, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, goal, config)

    return response.data
}

//Delete a goal
const deleteGoal = async (goalId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + goalId, config)

    return response.data
}

const goalService = {
    getGoals,
    createGoal,
    deleteGoal
}

export default goalService