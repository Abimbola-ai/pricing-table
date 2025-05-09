'use strict'

class pricingDetails {
  constructor(title, cost, shortDescription, longDescription, buttonText) {
    this.title = title
    this.cost = cost
    this.shortDescription = shortDescription
    this.longDescription = longDescription
    this.buttonText = buttonText
  }
}

let firstDetail = new pricingDetails(
  'Free',
  '$0',
  'Free for your whole team',
  'For individuals or teams looking to organize anything.',
  'Get started'
)

let secondDetail = new pricingDetails(
  'Standard',
  '$6',
  'Per use per month',
  'For teams that need to manage their work.',
  'Upgrade now'
)

let thirdDetail = new pricingDetails(
  'Premium',
  '$12',
  'Per use per month',
  'Best for teams that need to track multiple projects.',
  'Try for free'
)

document.getElementById('title1').innerHTML = firstDetail.title
document.getElementById('cost1').innerHTML = firstDetail.cost
document.getElementById('short-description1').innerHTML =
  firstDetail.shortDescription
document.getElementById('long-description1').innerHTML =
  firstDetail.longDescription
document.getElementById('button-val1').innerHTML = firstDetail.buttonText

document.getElementById('title2').innerHTML = secondDetail.title
document.getElementById('cost2').innerHTML = secondDetail.cost
document.getElementById('short-description2').innerHTML =
  secondDetail.shortDescription
document.getElementById('long-description2').innerHTML =
  secondDetail.longDescription
document.getElementById('button-val2').innerHTML = secondDetail.buttonText

document.getElementById('title3').innerHTML = thirdDetail.title
document.getElementById('cost3').innerHTML = thirdDetail.cost
document.getElementById('short-description3').innerHTML =
  thirdDetail.shortDescription
document.getElementById('long-description3').innerHTML =
  thirdDetail.longDescription
document.getElementById('button-val3').innerHTML = thirdDetail.buttonText
