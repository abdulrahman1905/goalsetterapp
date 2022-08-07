const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
const User = require('../models/userModel')

// @Desc Get goals
// @Route /api/goals
// @Access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({user: req.user.id})
  res.status(200).json(goals)
})

// @Desc Set goal
// @Route /api/goals
// @Access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add some text')
  }
  const goal = await Goal.create({
    user: req.user.id,
    text: req.body.text
  })
  res.status(200).json(goal)
})

// @Desc Update goal
// @Route /api/goals/:id
// @Access Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if(!goal){
    res.status(400)
    throw new Error('Goal not found')
  }

  //Check for user
  const user = await User.findById(req.user.id)

  if(!user){
    res.status(401)
    throw new Error('User not found')
  }

  //Make sure logged in user matches goal user
  if(user.id != goal.user.toString()){
    res.status(401)
    throw new Error('User not authorised')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.status(200).json(updatedGoal)
})

// @Desc Delete goal
// @Route /api/goals/:id
// @Access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if(!goal){
    res.status(400)
    throw new Error('Goal not found')
  }

  //Check for user
  const user = await User.findById(req.user.id)

  if(!user){
    res.status(401)
    throw new Error('User not found')
  }

  //Make sure logged in user matches goal user
  if(user.id != goal.user.toString()){
    res.status(401)
    throw new Error('User not authorised')
  }

  await goal.remove()
  res.status(200).json({id: req.params.id})
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
