function convert(){
    var currency = document.getElementById("currency").value;
    var newCurrency = document.getElementById("newCurrency").value;
    var amount = document.getElementById("amount").value;
    var output = 0;

    if(isNaN(amount)){
        document.getElementById("demo").innerHTML = "Invalid amount entered! Make sure it is a number";
    }
    else{
        if(currency=="dollar" && newCurrency=="naira"){
        output = amount * 365;
        document.getElementById("demo").innerHTML= output;
        }

        else if(currency=="naira" && newCurrency=="dollar"){
            output =  amount / 365;
            document.getElementById("demo").innerHTML= output;
            }
        else if(currency=="dollar" && newCurrency=="euros"){
            output = amount * 0.92577;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="euros" && newCurrency=="dollar"){
            output = amount / 0.92577;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="dollar" && newCurrency=="pounds"){
            output = amount *  0.85770;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="pounds" && newCurrency=="dollar"){
            output = amount / 0.85770;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="dollar" && newCurrency=="yuan"){
            output = amount *  7.1196;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="yuan" && newCurrency=="dollar"){
            output = amount / 7.1196;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="dollar" && newCurrency=="rupees"){
            output = amount *  74.808;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="rupees" && newCurrency=="dollar"){
            output = amount / 74.808;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="dollar" && newCurrency=="bitcoin"){
            output = amount /  5816.52;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="bitcoin" && newCurrency=="dollar"){
            output = amount * 5816.52;
            document.getElementById("demo").innerHTML=output;
        }
        //End of dollars
        else if(currency=="euros" && newCurrency=="naira"){
            output = amount *   393.98;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="naira" && newCurrency=="euros"){
            output = amount /  393.98;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="euros" && newCurrency=="rupees"){
            output = amount *  80.779;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="rupees" && newCurrency=="euros"){
            output = amount /  80.779;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="euros" && newCurrency=="pounds"){
            output = amount *  0.92191;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="pounds" && newCurrency=="euros"){
            output = amount /  0.92191;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="euros" && newCurrency=="yuan"){
            output = amount *  7.6663;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="yuan" && newCurrency=="euros"){
            output = amount /  7.6663;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="euros" && newCurrency=="bitcoin"){
            output = amount /  5317.75;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="bitcoin" && newCurrency=="euros"){
            output = amount *  5317.75;
            document.getElementById("demo").innerHTML=output;
        }
        //end of euros
        else if(currency=="naira" && newCurrency=="pounds"){
            output = amount * 0.00233999;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="pounds" && newCurrency=="naira"){
            output = amount / 0.00233999;
            document.getElementById("demo").innerHTML=output;
        }
       else if(currency=="naira" && newCurrency=="yuan"){
            output = amount * 0.019460;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="yuan" && newCurrency=="naira"){
            output = amount / 0.019460;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="naira" && newCurrency=="rupees"){
            output = amount * 0.20503;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="rupees" && newCurrency=="naira"){
            output = amount / 0.20503;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="naira" && newCurrency=="bitcoin"){
            output = amount / 2110463.57;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="bitcoin" && newCurrency=="naira"){
            output = amount * 2110463.57;
            document.getElementById("demo").innerHTML=output;
        }
        //end of naira
        else if(currency=="pounds" && newCurrency=="bitcoin"){
            output = amount / 4763.84;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="bitcoin" && newCurrency=="pounds"){
            output = amount * 4763.84;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="pounds" && newCurrency=="rupees"){
            output = amount * 87.778;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="rupees" && newCurrency=="pounds"){
            output = amount / 87.778;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="pounds" && newCurrency=="yuan"){
            output = amount * 8.3530;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="yuan" && newCurrency=="pounds"){
            output = amount / 8.3530;
            document.getElementById("demo").innerHTML=output;
        }
        //end of pounds
        else if(currency=="yuan" && newCurrency=="bitcoin"){
            output = amount / 41485.73;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="bitcoin" && newCurrency=="yuan"){
            output = amount * 41485.73;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="yuan" && newCurrency=="rupees"){
            output = amount *  10.526;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="rupees" && newCurrency=="yuan"){
            output = amount /  10.526;
            document.getElementById("demo").innerHTML=output;
        }
        //end of yuan
        else if(currency=="rupees" && newCurrency=="bitcoin"){
            output = amount / 412364.92;
            document.getElementById("demo").innerHTML=output;
        }
        else if(currency=="bitcoin" && newCurrency=="rupees"){
            output = amount * 412364.92;
            document.getElementById("demo").innerHTML=output;
        }
        //end of rupees
        else{}
 }
 } 