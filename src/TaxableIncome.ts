export class TaxableIncome {

	constructor(private readonly _amount: number) {
		if (_amount < 0) {
			throw new Error('Invalid income.')
		}
	}

	public get amount(): number {
		return this._amount
	}

	public get incomeTaxRate(): number {
		if (this._amount < 4000000) {
			return 0.1
		}
		if (this._amount < 7000000) {
			return 0.2
		}
		if (this._amount < 10000000) {
			return 0.23
		}
		if (this._amount < 20000000) {
			return 0.33
		}
		if (this._amount < 45000000) {
			return 0.4
		}
		return 0.45
	}
}
