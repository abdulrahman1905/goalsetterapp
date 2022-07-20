const asyncHnadler = require('express-async-handler')
const Goal = require('../models/goalModel')

// @Desc Get goals
// @Route /api/goals
// @Access Private
const getGoals = asyncHnadler(async (req, res) => {
  const goals = await Goal.find()
  res.status(200).json(goals)
})

// @Desc Set goal
// @Route /api/goals
// @Access Private
const setGoal = asyncHnadler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add some text')
  }
  const goal = await Goal.create({
    text: req.body.text
  })
  res.status(200).json(goal)
})

// @Desc Update goal
// @Route /api/goals/:id
// @Access Private
const updateGoal = asyncHnadler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if(!goal){
    res.status(400)
    throw new Error('Goal not found')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.status(200).json(updatedGoal)
})

// @Desc Delete goal
// @Route /api/goals/:id
// @Access Private
const deleteGoal = asyncHnadler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if(!goal){
    res.status(400)
    throw new Error('Goal not found')
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
