import './App.css'
import { Icon } from "@iconify/react/dist/iconify.js"
import ProductCard from './components/ProductCard';
import Aside from './components/aside';

function App() {

  return (
    <>
      <div className="ad-container">
        <p id='ad'>
          Sign up and get 20% off to your first order. <span>Sign Up Now</span>
        </p>
        <div className="frame">x</div>
      </div>
      <main>
      <header>
        <h1>SHOP.CO</h1>
        <nav>
          <ul>
            <li>Shop<Icon icon="lucide:chevron-down"></Icon></li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
        </nav>
        <div className="search-bar">
          <Icon icon="proicons:search" />
          <input type="text" placeholder="Search for products..." />
        </div>
        <div className='icon'>
          <Icon icon="eva:shopping-cart-outline" width={25} height={25} />
          <Icon icon="pajamas:profile" width={25} height={25} />
        </div>
      </header>
      <hr />
      <Aside />
      <div className='Casual' id='class'>
        <h2>Casual</h2>
      </div>
      <div className="Casual">
        <ProductCard
          image="public/Images/products/prod1.png"
          title="Gradient Graphic T-shirt"
          rating={3}
          price={145}
        />
        <ProductCard
          image="public/Images/products/prod2.png"
          title="Polo with Tipping Details"
          rating={5}
          price={180}
        />
        <ProductCard
          image="public/Images/products/prod3.png"
          title="Black Striped T-shirt"
          rating={5}
          price={120}
        />
      </div>
      <div className="Casual">
        <ProductCard
          image="public/Images/products/prod4.png"
          title="Skinny Fit Jeans"
          rating={4}
          price={240}
        />
        <ProductCard
          image="public/Images/products/prod5.png"
          title="Checkered Shirt"
          rating={5}
          price={180}
        />
        <ProductCard
          image="public/Images/products/prod6.png"
          title="Sleeve Striped T-shirt"
          rating={5}
          price={130}
        />
      </div>
      <div className="Casual">
        <ProductCard
          image="public/Images/products/prod7.png"
          title="Vertical Striped Shirt"
          rating={4}
          price={212}
        />
        <ProductCard
          image="public/Images/products/prod8.png"
          title="Courage Graphic T-shirt"
          rating={5}
          price={145}
        />
        <ProductCard
          image="public/Images/products/prod9.png"
          title="Loose Fit Bermuda Shorts"
          rating={5}
          price={80}
        />
        </div>
        </main>
    </>
  );
}

export default App
