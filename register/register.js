let participants = 1

const participantSection = document.querySelector(".participant1")

const addParticipantButton = document.querySelector("#add")
addParticipantButton.addEventListener("click", addParticipant)

function participantTemplate(count) {
  return participantSection.outerHTML.replaceAll("1", count)
}

function addParticipant() {
  participants++
  const newParticipantHTML = participantTemplate(participants)
  addParticipantButton.insertAdjacentHTML("beforebegin", newParticipantHTML)
}

function successTemplate(info) {
  const { adultName, participants, feeTotal } = info
  return `
    Thank you ${adultName} for registering. You have registered ${participants} participants and owe $${feeTotal} in Fees.
  `
}

function submitForm(event) {
  event.preventDefault()
  // do the rest of the stuff
  const feeTotal = totalFees()
  const adultName = document.querySelector("#adult_name").value
  event.target.classList.add('hide')
  const summary = document.querySelector("#summary")
  summary.innerHTML = successTemplate({ adultName, participants, feeTotal })
}

function totalFees() {
  // the selector below lets us grab any element that has an id that begins with "fee"
  let feeElements = document.querySelectorAll("[id^=fee]")
  console.log(feeElements)
  // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
  // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
  // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
  feeElements = [...feeElements]
  // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
  // Remember that the text that was entered into the input element will be found in the .value of the element.
  const total = feeElements.reduce((sum, item) => {
    const fee = parseFloat(item.value)
    return sum + fee
  }, 0)
  // once you have your total make sure to return it!
  return total
}
const form = document.querySelector("#registrationForm")
form.addEventListener("submit", submitForm)
