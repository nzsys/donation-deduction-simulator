import { Donation } from './Donation'
import { TaxableIncome } from './TaxableIncome'

export class Calculation {
	private readonly TAX_RATE: number = 0.4
	private readonly CITY_RATE: number = 0.1
	private readonly OUTSIDE_RATE: number = 0.02
	private _amount: number = 0

	constructor(
		private readonly _donation: Donation,
		private readonly _taxableIncome: TaxableIncome
	) {
		this._amount = _donation.amount - 2000
	}

	public get income(): number {
		return this._amount * this._taxableIncome.incomeTaxRate
	}

	public get tax(): number {
		return this._amount * this.TAX_RATE
	}

	public get city(): number {
		return this._amount * this.CITY_RATE
	}

	public get outside(): number {
		return this._amount * this.OUTSIDE_RATE
	}
}