let total = 0;
function addTomenu(){
    let foodList = document.querySelector("#foodList");
    let priceList = document.querySelector("#priceList");
    let option =  document.getElementById("menuOption").value;
    let totaldiv = document.getElementById("totalH4");

    // console.log(option)
    let foodLi = document.createElement("li");
    foodLi.innerText = option;

    let priceLi = document.createElement("li");
    priceLi.innerText = "$20";
    foodList.append(foodLi);
    priceList.append(priceLi)
    total += 20
    totaldiv.innerText = "Total: " + (total)

}

function placeOrder(){
    let statusdiv = document.getElementById("status");
    let order = 1
    let stats = "open";
    let time = Math.random()*10*1000;
    console.log(time)
    let myPromise = new Promise(function(resolve, reject){  
        setTimeout(function(){
            if(stats === "open"){
                resolve(order);
            }
            else{
                reject();
            }
        }, 3000);
    });

    myPromise.then(function(res){
        statusdiv.innerHTML = ""
        console.log(`your order ${res} is Ready`)
        let p = document.createElement("p")
        p.innerText = `Your order is ready`
        statusdiv.append(p)
    })
}