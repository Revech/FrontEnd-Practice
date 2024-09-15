// to.Fixed will convert a number to a string and we will tell us how many decimal we want after the decimal --> we want the price to appear 10.20 not 10.2
export function formatCurrency(priceCents)
{
   return (Math.round(priceCents) / 100).toFixed(2);
}

//export default  formatCurrency
// toFixed() has a problem with rounding  so we used math.round

