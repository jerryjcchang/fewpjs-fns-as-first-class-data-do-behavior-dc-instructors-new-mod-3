/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

const form = document.getElementById('')

function greet(timeString){
  debugger
  const splitTime = timeString.split(":")
  let hour = parseInt(splitTime[0])

  if(hour < 12){
    return "Good Morning"
  } else if(hour >= 12 && hour < 17){
    return "Good Afternoon"
  } else if(hour >= 17){
    return "Good Evening"
  }
}

function displayMessage(message){
  document.getElementById('greeting').textContent = message
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
