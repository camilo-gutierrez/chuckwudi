import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar/Navbar'
import { GridContainer, Header, MainImage, HeaderSelect, RestaurantImages, ArrowImages, ProductsImage, ContainerProducts, SelectWrapper } from '../components/Navbar/styles'
import Sidebar from '../components/Sidebar/Sidebar'
import { useAppSelector } from '../store/hooks/hooks'
import { fetchAllCategories } from '../store/slices/categories' 
import { fetchAllProducts } from '../store/slices/products'

// jsx  = javascript xml
// tsx
const Main = () => {

   
    const categoriesList = useAppSelector((state) => state.categories.list)
   
    const productsList = useAppSelector((state) => state.products.list)

  /*   const treeProducts = productsList?.slice(productsList.length - 5)

    console.log(treeProducts); */
    
    
    //console.log('Products list',ProductsList);
    
    
    const dispatch = useDispatch();
    
    //console.log('LIST REDUX TOOLKIT', list); 
    
    useEffect(() => {
        dispatch(fetchAllCategories())
        dispatch(fetchAllProducts())
    }, [dispatch])

    return (
      <>
        <GridContainer>
          <div className="content">
            <Navbar />
            <MainImage>
              <img src="/images/headerimage.png" alt="" className="img" />
              <div>
                <h2>
                  $0 delivery for 30 days!
                  <img src="/images/d.png" alt="" className="img" />
                </h2>
              </div>
              <div>
                <h5>$0 delivery fee orders over$10 for 30 days</h5>
              </div>
              <div>
                <h3>
                  Learn more
                  <img src="/icons/flecha.svg" alt="" className="img" />
                </h3>
              </div>
            </MainImage>
            <div className="banner"></div>
            <HeaderSelect>
              <h2>
                Restaurants
                <img
                  src="/icons/hamburguesa.svg"
                  alt=""
                  className="img"
                  width={45}
                  height={22.5}
                />
              </h2>
              <SelectWrapper defaultValue="1">
                <input
                  type="checkbox"
                  id="toggle-menu"
                  style={{ display: "none" }}
                />
                <label htmlFor="toggle-menu">🕒 Delivery Now 🔽</label>
                <div className="select-items">
                  <div className="item">item-1</div>
                  <div className="item">item-2</div>
                  <div className="item">item-3</div>
                  <div className="item">item-4</div>
                </div>
              </SelectWrapper>
            </HeaderSelect>

            <RestaurantImages>
              {categoriesList &&
                categoriesList.map((item) => {
                  return (
                    <div className="cate-item" key={item.id}>
                      <img src={item.icon} alt="" className="img" />
                      <p>{item.name}</p>
                    </div>
                  );
                })}
              <ArrowImages>
                <img src="/icons/mid-flecha.svg" alt="" className="img" />
              </ArrowImages>
            </RestaurantImages>
            <ContainerProducts>
                {productsList && 
                productsList.map((product)=> {
                    return (
                      <ProductsImage>
                        <img
                          src={product.image}
                          alt=""
                          className="img"
                        />
                        <p className="image-time">
                          <b> {product.time} </b>
                        </p>
                        <div className="img-desc">
                          {product.name}
                          <div className="img-desc__footer">
                            <b> {product.qualification} </b>{" "}
                            <span className="color-gray">
                              {" "}
                              {product.price}
                            </span>
                          </div>
                        </div>
                      </ProductsImage>
                    );
                })}
              </ContainerProducts>
              {/* <ProductsImage>
                <img src="/images/langostaImage.jpeg" alt="" className="img" />
                <p className="image-time">
                  <b>20-30</b> min
                </p>
                <div className="img-desc">
                  Bagel Story
                  <div className="img-desc__footer">
                    <b>4.7</b>{" "}
                    <span className="color-gray"> Deli - Bagels - $$</span>
                  </div>
                </div>
              </ProductsImage>
              <ProductsImage>
                <img src="/images/resImages.jpeg" alt="" className="img" />
                <p className="image-time">
                  <b>20-30</b> min
                </p>
                <div className="img-desc">
                  Bagel Story
                  <div className="img-desc__footer">
                    <b>4.7</b>{" "}
                    <span className="color-gray"> Deli - Bagels - $$</span>
                  </div>
                </div>
              </ProductsImage> */}
          </div>
          <Sidebar />
        </GridContainer>
      </>
    );
}

export default Main
