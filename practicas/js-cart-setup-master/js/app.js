window.onload = function() {
    const clearBtn = document.getElementById("clear-cart");

    //Eliminar todo

    clearBtn.addEventListener("click", () => {

        let removeBtn = document.querySelectorAll(".cart-item-remove");

        removeBtn.forEach(function(btn) {
            btn.parentElement.remove();
        });

    showTotals();

    });

    //borrar item del carro
    const removeBtn = document.querySelectorAll(".cart-item-remove");
    removeBtn.forEach(function(btn) {
        btn.addEventListener("click", function() {
            btn.parentElement.remove();
            showTotals();
        });
    });



//show cart

(function(){

    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click',function(){
        cart.classList.toggle('show-cart');
    })

})();

//añadir items al carro

(function(){

    //añadir items al carro
    const cartBtn = document.querySelectorAll('.store-item-icon');
    cartBtn.forEach(function(btn){
        btn.addEventListener('click',function(event){
            //console.log(event.target);

            if(event.target.parentElement.classList.contains('store-item-icon')){

                //direccion
                let fullPath = event.target.parentElement.previousElementSibling.src;
                let pos = fullPath.indexOf('img')+3;
                let partPath = fullPath.slice(pos);
                //imagenes
                const item = {}; //objeto literal
                item.img = `img-cart${partPath}`;
                //nombre
                let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                item.name = name;
                //precio
                let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
                let finalPrice = price.slice(1).trim();
                item.price = finalPrice;
               // console.log(item);

                const cartItem = document.createElement('div');

                cartItem.classList.add(
                    'cart-item',
                    'd-flex',
                    'justify-content-between',
                    'text-capitalize',
                    'my-3'
                );
            
                cartItem.innerHTML = `
                
                
                 <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
                 <div class="item-text">
     
                   <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                   <span>$</span>
                   <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                 </div>
                 <a href="#" id='cart-item-remove' class="cart-item-remove">
                   <i class="fas fa-trash"></i>
                 </a>`
               ;
                
               const cart= document.getElementById('cart');
               const total = document.querySelector('.cart-total-container');

                cartItem.children[2].addEventListener("click", function(e) {
                e.target.parentElement.parentElement.remove();
                showTotals();
            });

               cart.insertBefore(cartItem,total);
               alert('Elemento añadido al carro.');
               showTotals();
            }
        });
    });
})();
    //show totals

    function showTotals(){
        const total = [];
        const items = document.querySelectorAll('.cart-item-price');

        items.forEach(function(item){

            total.push(parseFloat(item.textContent));

        });

        //console.log(total);

        const totalMoney = total.reduce(function(total,item){
            total += item;
            return total;
        },0);

        const finalMoney = totalMoney.toFixed(2);
        
        document.getElementById('cart-total').textContent = finalMoney;
        document.querySelector('.item-total').textContent = finalMoney;
        document.getElementById('item-count').textContent = total.length;

    }



};