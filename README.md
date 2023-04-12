# 寄付金控除
寄付金控除（所得税・住民税の減税額）計算スクリプト

## Usage
```js
const donation = new Donation(10000)
const taxableIncome = new TaxableIncome(5000000)
const calculation = new Calculation(donation, taxableIncome)

console.log('寄付金控除額')
console.group()
console.log(`所得控除: ${calculation.income}`)
console.log(`税額控除: ${calculation.tax}`)
console.log(`札幌市及び道内の一部市町村にお住まいの方: ${calculation.city}`)
console.log(`北海道のその他の地域にお住まいの方: ${calculation.outside}`)
```
