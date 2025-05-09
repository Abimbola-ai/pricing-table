'use strict'

class pricingDetails {
  constructor(title, cost, shortDescription, longDescription, buttonText) {
    this.title = title
    this.cost = cost
    this.shortDescription = shortDescription
    this.longDescription = longDescription
    this.buttonText = buttonText
  }

  render() {
    return `
      <div class="bg-indigo-200 border-2 border-double">
        <p class="text-xl my-2">${this.title}</p>
        <p class="text-5xl my-2">${this.cost}</p>
        <p class="text-sm my-2">${this.shortDescription}</p>
        <p class="text-l my-2">${this.longDescription}</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded my-2">
          ${this.buttonText}
        </button>
      </div>
    `
  }
}

const pricingPlans = [
  new pricingDetails(
    'Free',
    '$0',
    'Free for your whole team',
    'For individuals or teams looking to organize anything.',
    'Get started'
  ),
  new pricingDetails(
    'Standard',
    '$6',
    'Per use per month',
    'For teams that need to manage their work.',
    'Upgrade now'
  ),
  new pricingDetails(
    'Premium',
    '$12',
    'Per use per month',
    'Best for teams that need to track multiple projects.',
    'Try for free'
  ),
]

const container = document.getElementById('pricing-container')
pricingPlans.forEach((plan) => {
  container.innerHTML += plan.render()
})
