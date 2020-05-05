import Chart from 'chart.js';

/*USER INPUTS*/
const User = {}

//functions inputs
User.objective = sphere
User.numberVars = 4
User.rangeVars = [-20, 20]

//firefly inputs
User.numberPopulation = 20
User.maxIter = 1000

//attraction equation inputs
User.beta0 = 1
User.gamma = 1
User.alpha = 0.2
User.m = 2


/*INITIALIZING THE FIREFLY ALGORITHM*/
const SampleFireFly = () => {
  return {
    position: [],
    cost: []
  }
}

let FireFly = []
let BestFireFly = {}
const NewFireFly = []

generateFireFly()

/*MAIN LOOP OF FIREFLY ALGORITHM*/
let flights = 1
const lineChart = getLineChart()

do {
  bestFireFly = fly()

  lineChart.labels.push(flights)
  lineChart.data.push(bestFireFly)

  flights++
} while (flights <= User.maxIter)

/*********************************/

/*OBJECTIVE*/
function sphere(positions) {
  let sum = 0

  for (const position of positions)
    sum += Math.pow(position, 2)

  return sum
}

/*FIREFLY FUNCTIONS */

function getDistance(positionA, positionB) {
  const A_minus_B = []

  for (let k = 0; k < User.numberVars; k++) {
    A_minus_B.push(positionA[k] - positionB[k])
  }
  return Math.hypot(...A_minus_B)
}

function getBeta(distance) {
  const x = -User.gamma * Math.pow(distance, User.m)

  return User.beta0 * Math.exp(x)
}

function getNewPosition(beta, positionA, positionB) {
  const newPosition = []

  for (let i = 0; i < User.numberVars; i++) {
    const e = -0.5 + Math.random()
    let x = positionA[i] + beta * (positionB[i] - positionA[i]) + User.alpha * e

    if (x > User.rangeVars[1])
      x = User.rangeVars[1]
    else if (x < User.rangeVars[0])
      x = User.rangeVars[0]

    newPosition.push(x)
  }

  return newPosition
}

function generateFireFly() {
  BestFireFly.cost = User.objective([20, 20, 20, 20])

  for (let i = 0; i < User.numberPopulation; i++) {
    FireFly.push(SampleFireFly())
    NewFireFly.push(SampleFireFly())
  }

  for (let i = 0; i < User.numberPopulation; i++) {
    for (let j = 0; j < User.numberVars; j++) {
      const min = Math.ceil(User.rangeVars[0])
      const max = Math.floor(User.rangeVars[1])
      FireFly[i].position[j] = (Math.random() * (max - min + 1) + min)
    }

    FireFly[i].cost = User.objective(FireFly[i].position)

    if (FireFly[i].cost <= BestFireFly.cost)
      BestFireFly = FireFly[i]
  }
}

function fly() {
  for (let i = 0; i < User.numberPopulation; i++) {
    for (let j = 0; j < User.numberPopulation; j++) {
      if (FireFly[j].cost <= FireFly[i].cost) {
        const distance = getDistance(FireFly[j].position, FireFly[i].position)
        const beta = getBeta(distance)
        const position = getNewPosition(beta, FireFly[j].position, FireFly[i].position)

        NewFireFly[i].position = position
        NewFireFly[i].cost = User.objective(FireFly[i].position)

        if (NewFireFly[i].cost <= BestFireFly.cost)
          BestFireFly = NewFireFly[i]
      }
    }
  }

  FireFly = NewFireFly.map((element) => {
    return Object.assign({}, element);
  })

  return BestFireFly.cost
}

/*CHART*/
function getLineChart() {
  const ctx = document.getElementsByClassName('line-chart')

  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        data: [],
        label: 'Best FireFly Cost'
      }]
    }
  })

  return {
    labels: lineChart.data.labels,
    data: lineChart.data.datasets[0].data
  }
}



