export class Donation {

	constructor(private readonly _amount: number) {
		if (_amount < 0) {
			throw new Error('Invalid donation.')
		}
	}

	public get amount(): number {
		return this._amount
	}
}
