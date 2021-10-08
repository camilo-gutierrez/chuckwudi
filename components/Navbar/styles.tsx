import styled from "styled-components"
export const Header = styled.div`
       display:flex;
       gap: 2rem;
       padding:1.2rem;
       align-items:center;
`

export const Drawer = styled.div.attrs({
    className: 'button-drawer'
})`
display:flex;
gap: 1rem;
padding-left: 1rem;
align-items:center;
.drawer-el{
    width: 18px;
    height: 6px;
    border: 1.5px solid #000;  
    border-left: none;
    border-right: none;
    transition: all .3s ease;
    .line{
        width: 18px;
        height: 6px;
        display:block;
        border: 1.5px solid #000;  
        border-left: none;
        border-right: none;
        border-top:none;
        opacity:0;
        transition: all .5s cubic-bezier(0.83, 0, 0.17, 1);
        &:active{
        transform: rotate(-90deg) translate(-3px,-3px);
        opacity:1;
         }

    }
    &:active{
        transform: rotate(45deg);
        border-top: none;
    }
}
.logo{
    padding-left: 4em;
    font-size: 1000;
    font-weight: bold;
    size: 18;
    font-size: 20px;
    transition: all .5s cubic-bezier(0.83,0,0.17,1);
    margin-left: -3em;
    &:hover{
        transform: scale(1.2);
        
    }
}
`

export const Search = styled.div.attrs({
    className: 'search',
})`
    position:relative;
    img{ 
        width: 1.8rem;
        height: 1rem;
        position: absolute;
        top: 11px;
        left: 49px;
        fill: gray;
        color: gray;
        font-weight: 1000;
    }

    input{ 
        border-radius: 12px;
        padding-left: 29px;
        border: none;
        outline: none;
        background: #f3f1f1;
        width: 38rem;
        height: 2.5rem;
        padding-left: 3em;
        margin-left: 3em;
    }
`

export const GridContainer = styled.div.attrs({
    className:'Container-grid'
})`
    display: grid;
    grid-template-columns: 60rem 1fr;
    grid-gap:15px;
    @media (max-width:1200px){
        grid-template-columns: 1fr;
        grid-template-rows:1fr 1fr;
    }
    .content{
    }
`

export const MainImage = styled.div.attrs({
    className: 'Image-Main'
})`
    position: relative;
    margin: 0 auto;
    margin-top: 25px;
    width: 52em;
    height: 11.5rem;
    background-color: #f8efe1;
    border-radius: 25px;
    margin-bottom: auto; 
    
    img{
        position: absolute;
        width: 13rem;
        height: 13rem;
        top: -5px;
        left: 6px;
        margin-top: -19px;
        margin-left: 32px;
        //padding: 2em;
       // font-weight: 800;
    }

    div{
        position: absolute;
        top: 47px;
        left: 245px;
        h5{
            position: relative;
            padding: 25px;
            width: auto;
            color: black;
            margin-left: 2.2em;
        }
        h2{
            position: relative;
            left: 10;
            width: auto;
            color: orange;
            margin-top: 10px;
            margin-left: 2.2em;
            img{
                width: 2rem;
                height: 2rem;
                top: 17px;
                left: 260px;
                fill: gray;
                color: gray;
                font-weight: 800;
            }
        }
        h3{
            position: relative;
            left: 10;
            width: auto;
            color: orange;
            margin-top: 5em;
            margin-left: 23.2em;
            size: 8;
            img{
                width: 1rem;
                height: 1rem;
                top: 27px;
                left: 79px;
                fill: orange;
                color: orange;
                font-weight: 800;
            }
        }
    }

`
export const HeaderSelect = styled.div.attrs({
    className: 'Select-Header'
})`
    display: flex;
    justify-content:space-between;
    padding: 2em;
    flex-direction: row;
    padding-left: 2em;
    padding-right: 3.2em;
`
export const RestaurantImages = styled.div.attrs({
    className: 'Images-restaurant'
})`
    display: flex;
    gap:1rem;
    flex-direction: row;
    justify-content: space-around;
    box-sizing: border-box;
    margin: 0 auto;
    overflow: hidden;
    width: 90%;
    margin-left: 0px;
    padding-left:2rem;
    position:relative;
    position: relative;
    padding: 1rem 31px;

    @media (max-width: 768px){
        display: grid;
        grid-auto-flow:column;
        width: 50rem;
        margin: 0 auto;
        overflow-x: scroll;
        padding:0 2rem;
    }

    .cate-item{
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);
        width: 4rem;
        height: 115px;
        border-radius: 50px;
        background-color: white;
        padding: 0.5rem;
        img{
            image-resolution: initial;
            text-align: center;
            display:block;
            margin:0 auto;
            border-width: .5px;
            border-style: solid;
            border-color: #362f2fc3;
            background-color: white;
            border-radius: 50px;
            margin: 4px;
            width: 2.4rem;
            height: auto;
            margin: 0 auto;
            display: block;
        }
        p{
            text-align: center;
        }
    }

`

export const ArrowImages = styled.div.attrs({
    className: 'images-arrow'
})`
    padding-left: 0.7em;
    width: 29px;
    height: 40px;
    border-radius: 13px;
    background-color: #e2e2e2;
    display: flex;
    align-items: center;
    align-content: center;
    position: sticky;
    top:50%;
    right:0;
    transform:translateY(-50%);
    cursor:pointer;
    &:active > img{
        transform:translateX(3px) scale(0.98);
    }
        img{
            width: 20px;
            height: 20px;
            transition: all 0.3s cubic-bezier(0.83, 0, 0.17, 1); 
        }
`
export const ContainerProducts = styled.div.attrs({
    className: 'Products-Container'
})`
    display: grid;
    grid-auto-flow: column;
    gap: 3em;
    margin: 0 auto;
    overflow-x: scroll;
    padding: 0 2rem;
    
    @media (max-width:900px){
        display:grid;
        grid-auto-flow: column;
        width: 75%;
        gap: 3em;
        margin: 0 auto;
        overflow-x: scroll;
        padding: 0 2rem;
        
    }
    //gap: 1em ;
`
export const ProductsImage = styled.div.attrs({
    className: 'Image-Products'
})`
    margin:2rem 0;
    border-radius: 15px;
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction:column;
    position:relative;
    height: auto;
    width: 16rem;
    gap: 5px;
        img{
            height: 60%;
            border-radius: 12px;
            width: 100%;
            object-fit:cover;
        }
    .image-time{
        position:absolute;
        bottom: 84px;
        left: -1px;
        background-color: #e2e2e2;
        padding: .2rem 1.2rem;
        border-bottom-left-radius:12px;
        border-top-right-radius:12px;
        
    }
    .img-desc{
        font-weight: 500;
        font-size: 18px;
        align-self: flex-start;
        line-height:1.8;
        &__footer{
            font-size:.8rem;
            font-weight:500;
        }

    }
    .color-gray{
        color:gray;
    }

`

export const SelectWrapper = styled.div.attrs({
    className:'SelectWrapper'
})`
margin-right: 11px;
background-color: #ff6600;
color: white;
line-height: 1;
height: 1rem;
padding: 1rem;
display: flex;
justify-content: center;
align-content: center;
border-radius: 1rem;
position:relative;
box-shadow:1px .5px 6px #22222253;

label{
    cursor:pointer;
}
input[type="checkbox"]{
    &:checked ~ .select-items{
        opacity:1;    
        visibility:visible;
        transform:translateY(0);
    }
}
.select-items{
    z-index: 100;
    transition:all .3s cubic-bezier(0.83, 0, 0.17, 1);
    transform:translateY(-20px);
    opacity:0;
    visibility:hidden;
    display:none;
    position:absolute;
    right: 0;
    top: 51px;
    width: 100%;
    background: #ff6600;
    box-shadow:1px .5px 6px #22222253;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-content: center;
    height: 8rem;
    flex-direction: column;
    & > div{
        text-align:center;
        font-size:1.2rem;
        line-height:1.4;

    }
}
`    
