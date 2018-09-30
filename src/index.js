// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    return checkCurrency(currency);

    function checkCurrency(currency){
        switch(true){
            case currency > 10000:
                return {error:("You are rich, my friend! We don't have so much coins for exchange")};
            
            case currency == 0:
                return {};

            default:
                return changeCount(currency);
        }
    }

    function changeCount (currency){
        let input = currency;
        let change = {};
        if(input >= 50){
            change.H = Math.floor(input / 50);
            input -= change.H * 50;
        }
        if(input >= 25){
            change.Q = Math.floor(input / 25);
            input -= change.Q * 25;
        }
        if(input >= 10){
            change.D = Math.floor(input / 10);
            input -= change.D * 10;
        }
        if(input >= 5){
            change.N = Math.floor(input / 5);
            input -= change.N * 5;
        }
        if(input >= 1){
            change.P = input;
        }
        return change;
    }
}
