import { Donation } from '../src/Donation'
import { TaxableIncome } from '../src/TaxableIncome'
import { Calculation } from '../src/Calculation'

test('donation', () => {
	let amount = 1
	const donation = new Donation(amount)
	expect(donation.amount).toBe(amount)
})

test('incomeTax', () => {
	let amount = 3000000
	let taxableIncome = new TaxableIncome(amount)
	expect(taxableIncome.incomeTaxRate).toBe(0.1)

	amount = 4000000
	taxableIncome = new TaxableIncome(amount)
	expect(taxableIncome.incomeTaxRate).toBe(0.2)

	amount = 7000000
	taxableIncome = new TaxableIncome(amount)
	expect(taxableIncome.incomeTaxRate).toBe(0.23)

	amount = 15000000
	taxableIncome = new TaxableIncome(amount)
	expect(taxableIncome.incomeTaxRate).toBe(0.33)

	amount = 35000000
	taxableIncome = new TaxableIncome(amount)
	expect(taxableIncome.incomeTaxRate).toBe(0.4)

	amount = 45000000
	taxableIncome = new TaxableIncome(amount)
	expect(taxableIncome.incomeTaxRate).toBe(0.45)
})

test('calculation', () => {
	let donationAmount = 10000
	let taxableIncomeAmount = 5000000
	const donation = new Donation(donationAmount)
	const taxableIncome = new TaxableIncome(taxableIncomeAmount)
	const calculation = new Calculation(donation, taxableIncome)
	expect(calculation.income).toBe(1600)
	expect(calculation.tax).toBe(3200)
	expect(calculation.city).toBe(800)
	expect(calculation.outside).toBe(160)
})