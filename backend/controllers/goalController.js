const asyncHnadler = require('express-async-handler')
// @Desc Get goals
// @Route /api/goals
// @Access Private
const getGoals = asyncHnadler(async (req, res) => {
  res.status(200).json({ message: 'Get goals' })
})

// @Desc Set goal
// @Route /api/goals
// @Access Private
const setGoal = asyncHnadler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add some text')
  }
  res.status(200).json({ message: 'Set goal' })
})

// @Desc Update goal
// @Route /api/goals/:id
// @Access Private
const updateGoal = asyncHnadler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` })
})

// @Desc Delete goal
// @Route /api/goals/:id
// @Access Private
const deleteGoal = asyncHnadler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` })
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
