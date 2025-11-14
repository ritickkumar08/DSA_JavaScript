const nums = [7,1,5,3,6,4]
console.log(maxProfit(nums));


function maxProfit(prices) {
    let maxProfit = 0;
    let minPrice = prices[0]

    for(let price of prices){
        if(price < minPrice){
            minPrice = price
        }else if(price - minPrice > maxProfit){
            maxProfit = price - minPrice;
        }
    }
    return maxProfit
};