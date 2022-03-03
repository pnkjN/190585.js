function totalAmount(amount){
    if(amount<=250000){
        return amount;
    }
    else if(amount<=500000){
        let amount  = amount + ((amount*5)/100);
        return amount;
    }
    else if(amount<=750000){
        amount  = amount + ((amount*10)/100);
        return amount;
    }
    else if(amount<=1000000){
        amount  = amount + ((amount*15)/100);
        return amount;
    }
     else if(amount<=1250000){
        amount  = amount + ((amount*20)/100);
        return amount;
    }
    else if(amount<=1500000){
        amount  = amount + ((amount*25)/100);
        return amount;
    }
    else{
        amount  = amount + ((amount*30)/100);
        return amount;
    }
    }
    let a = 3000000;
    let ans = totalAmount(a);
    console.log("Total Income: " ,ans);
    