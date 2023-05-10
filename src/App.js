import Feed from './components/Feed/Feed';
import FilterPanel from './components/FilterPanel/FilterPanel';
import Header from './components/Header/Header';
import './App.css';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { createContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';

export const DataContext = createContext()
function App() {
  const [theme, setTheme] = useState(true)
  const [showPreview, setShowPreview] = useState("none")
  const [itemCount, setItemCount] = useState(0)
  // const [price, setprice] = useState(100)
  const [priceChange, setPriceChange] = useState(100)
  const [productId, setProductId] = useState()
  //Adding product 
  const [addItemBtn, setAddItemBtn] = useState(true)
  //getting product
  const [cartArray, setCartArray] = useState([])
  const [feed, setFeed] = useState([])
  // const [filter, setFilter] = useState(null)
  const [feedProduct, setFeedProduct] = useState(null)
  const [productDetail, setProductDetail] = useState()
  const getApiData = () => {
    axios.get('https://fakestoreapi.com/products').then(json => setFeedProduct(json.data))
  }

  function addProduct(product) {
    setCartArray([...cartArray, product])
    // setAddItemBtn(false)
    setItemCount(itemCount + 1)
  }
  useEffect(() => {
    getApiData()
  }, [])
  function itemAdded() {
    // addProduct()
  }



  //Category Filter


  //CART ITEMS


  console.log(feedProduct)


  function setPrice() {
    feed.forEach(item => {
      let priceFeed = feedProduct.filter(price => price.price < priceChange)
      setFeed(priceFeed)
    })
  }
  //Get Product Detail
  function showDetail(e) {
    feedProduct.forEach(product => {
      if (e === product.id) {
        setProductDetail(product)
      }
    })
  }
  function getProductDetail(e) {
    setShowPreview("block")
    setProductId(e)
    showDetail(e)
  }
  function hideItemPreview() {
    setShowPreview("none")
  }
  //Theme
  function darkTheme() {
    document.documentElement.classList.add('dark')
    setTheme(false)
  }
  function lightTheme() {
    document.documentElement.classList.remove('dark')
    setTheme(true)

  }
  //heart activate 
  const [heartIcon, setHeartIcon] = useState(false)
  const heart = useRef(null)
  function addFavorite() {
    setHeartIcon(true)
    heart.current.classList.toggle('addFavorite')
    console.log('hello')
  }
  const value = { productId, setProductId, showPreview, hideItemPreview, priceChange, setPrice, setPriceChange, setItemCount, itemCount, lightTheme, darkTheme, theme, feedProduct, getProductDetail, productDetail, addProduct, addItemBtn, itemAdded, heart, addFavorite, heartIcon, cartArray }

  return (
    <DataContext.Provider value={value}>
      <div className="App dark:bg-[#080c13] ">
        {/* HEADER */}
        <Header />
        {/* FILTERPANEL */}
        <div className='flex min-h-[92vh]'>
          <FilterPanel />
          {/* FEED */}
          <Feed />
          {/* ITEM DETAIL */}
          <ItemDetail />
        </div>
      </div>
    </DataContext.Provider>
  );
}
export default App;
