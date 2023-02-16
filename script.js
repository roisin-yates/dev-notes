let currentDate = new Date()
let reducedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}`

let budget = 6000
let spending = document.getElementsByClassName('spending-amount')

const highlightDate = () => {
  let el = document.getElementById(`${reducedDate}`)
  el.style.border = '#6b9080 2px solid'
}
highlightDate()

// const displayBudget = () => {
//   let el = document.getElementById('budget-amount')
//   el.innerText = `Budget: $${budget}`
// }
// displayBudget()

// const updateBudget = () => {
//   let el = spending
//   console.log(el)
// }
// updateBudget()
