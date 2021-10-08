import styled from "styled-components"

export const SidebarWrap = styled.div.attrs({
    className:"sidebar-wrap"
})`
    background:#fdfdfb;
    border-left:1px solid #ececec;
    display:flex;
    align-items: center;
    flex-direction: column;
    padding:1.2rem;
    padding-top: 4rem;
    position: relative;
    .main-title{
        padding-left: 1.8em;
        align-self: flex-start;
        flex-direction: column;
        padding-bottom: 3em;
        padding-top: 3em;
        h2{
            margin-bottom: -25px;
        }
        
    }
    .cart-info{
        position: absolute;
        margin-top: -50px;
        left:0;
        display: flex;
        width: 100%;
        gap: 1rem;
        padding-right:2rem;
        flex-direction: row-reverse;    
        img{ 
            width: 1rem;
            order: 2;
        }
        button{ 
            display: flex;
            align-items: center;
            align-content: center;
            width: 17px;
            height: 24px;
            background-color:#fcd661;
            padding: 1rem;
            border-radius: 13px;
            border: none;
            order:1;
            font-weight: 800;
        }
    }
    .user-info-card{
        background-color:#503e9d;
        color: white;
        padding: 1.2rem;
        margin-top:1rem;
        border-radius: 1rem;
        font-size:1rem;
        margin-bottom:2rem;
        width: 17em;
        height: 7em;
        .info-header{
            margin-bottom: 20px;
            display: flex;
            justify-content:space-between;
            line-height: 2rem;
        }
        .order-img-reloj{
            background-color: #f8e09621;    
            border-radius: 5px;
            width: 20px;
            height: 20px;
            padding: 4px;
            margin-bottom: -5px;
            margin-right: 5px;
        }
    };
    .orders{
        .order-item{
            display: flex;
            padding-left: 25px;
            gap: 1rem;
            margin: 1rem 0;
            img{
                height: 2.8rem;
                border-radius: 13px;
                width: 4rem;
                margin-bottom: 17px;
            }
        }
    }

    .total{
        padding-left: 1.8;
        text-decoration:Capitalize;
        display: flex;
        margin-left: -15px;
        margin-top: -39px;
        justify-content:space-around;
        width:100%;
        align-items:center;
        border-bottom: 1px solid #a7a6a6;
        .total-summary{
            font-weight: 600;
            font-size:1.2rem;
        }
        .total-number{
            font-weight:700;
            font-size:1.4rem;
        }
    }
        
    .checkout{ 
        flex-direction: row;
        align-items: center;
        align-content: center;
       .title-counter{
            margin-top: 2em;
            margin-right: 10em;
        }     
        .checkout-button{
            background-color: #fcd661;
            padding: 1.5rem;
            margin-top: 1rem;
            /* transform: translateX(170px); */
            border-top-left-radius: 1rem;
            border-bottom-left-radius: 1rem;
            font-weight: 600;
            position: absolute;
            right: 0;
        }
    }



`

export const Counter = styled.div.attrs({
  className: 'counter-view'
})`
    display: flex;
    height: 2em;
    margin: 10px;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: row;
    border-radius: .5em;
    width: 4em auto;
    border-width: .5px;
    border-style: solid;
    border-color: #362f2fc3;
    button{
        background-color: white;
        border: none;
        margin: 10px;
        font-size: 35;
        font-weight: bold ;
    }
    p{
        font-size: 25;
        font-weight: 900;
    }
`