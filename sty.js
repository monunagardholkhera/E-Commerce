@import url("");
*{
    font-family: 'poppins',sans-serif;
    margin: 0;
    padding: 0;
    scroll-padding-top: 2rem;
    scroll-behavior: smooth;
    box-sizing: border-box;
    list-style: none;
}
:root{
    --main-color:#fd4646;
    --text-color:#02ac70;
    --big-color:#fff;
    --comtainer-color:#1e1e2a;
}
img{
    width: 100%;
}
body{
    color: var(--big-color);
    background: var(--comtainer-color);
}
section{
    padding: 4rem 0 3rem;
    
}
.container{
    max-width: 1068px;
    margin: auto;
    width: 100%;
}
header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--comtainer-color);
    box-shadow: 0 1px 4px hsla(0,0,98%,0.1);
    z-index: 100;
}
.nav{
    display: flex;
align-items: center;
justify-content: space-between;
padding: 20px 0;
}
.logo{
    font-size: 1.1rem;
    color: var(--big-color);
    font-weight: 600;
}
#cart-icon{
    position: relative;
    font-size: 1.8rem;
    cursor: pointer;
}
#cart-icon[data-quantity="0"]::after{
    contain:attr(data-quantity);
}
#cart-icon[data-quantity]::after{
    contain:attr(data-quantity);
    position: absolute;
    top: 0;
    right: -12px;
    width: 20px;
    height: 20px;
    background: var(--text-color);
    border-radius: 50%;
    color: white;
    font-size: 12px;
    font-size: 12px;
    font-weight: 500;
    display: flex;
    align-items: center;
}
/* Cart */
.cart{
    position: fixed;
    top: 0;
    right: -100%;
    width: 360px;
    min-height: 100vh;
    padding: 20px;
    background: var(--comtainer-color);
    box-shadow: -2px 0 4px hsl(0,4%,15% / 10%);
    transition: 0.3s cubic-bezier(0.075,0.82,.165,1);
}
.cart.active{
    right: 0;
    transition: 0.3s cubic-bezier(0.075,0.82,0.165,1);
}

.cart-title{
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 2rem;
}
.total{
    display: flex;
    justify-content: flex-end;
    margin-top: 1.5rem;
    border-top: 1px solid var(--text-color);
}
.total-title{
    font-size: 1.2rem;
    font-weight: 600;
    margin: 1rem;


}
.total-price{
    font-size: 1.075rem;
    margin: 1rem 0 0 0.7rem;

}
.btn-buy{
    display: flex;
    justify-content: center;
    margin: 1.5rem auto 0 auto;
    padding: 12px 20px;
    width: 50%;
    text-align: center;
    border: none;
    border-radius: 2rem;
    background: var(--text-color);
    color: var(--big-color);
    font-size: 1rem;
    font-style: italic;
    font-weight: 500;
    cursor: pointer;
}
#close-cart{
    position: absolute;
    top: 1rem;
    right: 0.8rem;
    font-size: 2rem;
    color: var(--text-color);
    cursor: pointer;
}
.cart-box{
    display: grid;
    grid-template-columns: 32% 50% 18%;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
}
.cart-img{
    width: 100px;
    height: 100px;
    object-fit: contain;
    object-position: center;
    padding: 10px;
}
.detail-box{
    display: grid;
    row-gap: 0.5rem;
}
.cart-product-title{
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
}
.cart-price{
font-weight: 500;
}
.cart-quantity{
    border: 1px solid var(--text-color);
    outline-color: var(--main-color);
    width: 2.8rem;
    text-align: center;
    font-size: 1rem;
    border-radius: 4px;
}
.cart-remove{
    font-size: 24px;
    color: var(--main-color);
    cursor: pointer;
}

.shop{
    margin-top: 2rem;
}
.shop-content{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(220px,auto));
    gap: 1.5rem;
}
.product-box{
    position: relative;
    background: #2d2e37;
    padding: 10px;
    border-radius: 5px;
    transition: 0.4s cubic-bezier(0.075,0.82,0.165,1);

}
.product-box:hover{
    background: var(--big-color);
    border: 1px solid #f0f0f0;
box-shadow: 0 8px 32px hsla(0.75, 0.82, 0.165, 1);
transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.product-box:hover .product-title,
.product-box:hover .price{
color: #141414;
}
.product-img{
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 0.5rem;

}
.product-title{
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0.8rem;
}
.price{
    font-weight: 500;

}
.add-cart{
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: var(--text-color);
    color: var(--big-color);
    padding: 10px;
    font-size: 1.2rem;
    border-radius: 50%;
    cursor: pointer;
}
.add-cart:hover{
    background: hsl(249, 32%, 17%);
}
.sc-container{
    width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;

align-items: center;
}
.sc-container img{
    width: 200px;
    margin: 2rem 0;
}
.sc-container h1{
    font-size: 2.8rem;
    margin-bottom: 10px;
}
.sc-container p{
    max-width: 600px;
    font-size: 0.970rem;
    text-align: center;
    margin: 0.5rem 0;
}
.sc-btn{
    padding: 12px 20px;
    border-radius: 2rem;
    background: var(--text-color);
    color: var(--big-color);
    font-size: 1rem;
    font-weight: 500;
}
/*Makking Responsive */
@media(max-width:1080){
    .nav{
        padding: 14px 0;
    }
    section{
        padding: 3rem 0 2rem;
    }
    .container{
        margin: 0 auto;
        width: 90%;
    }
    .shop{
        margin-top: 2rem !important; 
    }
    @media(max-width:400px) {
        .nav{
            padding: 12px 0;
        }
    .logo{
font-size: 1rem;
    }
    .cart{
        width: 320px;
    }
    }
    @media(max-width:360px) {
        .shop{
            margin-top: 1rem !important; 
        }
    .cart{
        width: 100%;
    }
    }