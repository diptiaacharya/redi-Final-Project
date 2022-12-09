document.querySelectorAll('.add-to-cart').forEach(item=>{
    item.addEventListener('click',addToCart)
})

var index=0;
function addToCart(){
index++;

    document.getElementById('cart-plus').innerText=
    ' ' + index + ' Items';

}

document.getElementById('add-address').addEventListener('click',addAddress);


function addAddress(){
    var address= prompt('Enter your address','');
    if(address){
        document.getElementById('add-address').innerText= ' ' + address;
    }
    else{
        alert("Address not added")
    }
}