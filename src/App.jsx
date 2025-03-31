import './App.css'
import Header from './components/header';
import ProductCard from './components/ProductCard';
import Aside from './components/aside';
import Footer from './components/footer';

function App() {

  return (
    <>
      <div className="w-full flex justify-between bg-black text-white h-7 px-12">
        <p className="w-[400px] h-5 leading-5 font-normal ml-80 mr-2">
          Sign up and get 20% off to your first order.
          <span className="text-white text-sm underline leading-5 font-medium">
            Sign Up Now
          </span>
        </p>
        <span>&times;</span>
      </div>
      <Header />
      <hr className="w-[90%] mx-auto" />
      <main className="w-96 md:pl-6 md:pr-8 md:flex md:justify-start md:gap-4">
        <Aside />
        <section className="w-96 md:w-[900px]">
          <div className="Casual" id="class">
            <h2>Casual</h2>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-0 md:gap-x-1 md:gap-y-8 justify-evenly">
            <ProductCard
              image="/Images/products/prod1.png"
              title="Gradient Graphic T-shirt"
              rating={3}
              price={145}
            />
            <ProductCard
              image="/Images/products/prod2.png"
              title="Polo with Tipping Details"
              rating={5}
              price={180}
            />
            <ProductCard
              image="/Images/products/prod3.png"
              title="Black Striped T-shirt"
              rating={5}
              price={120}
            />
            <ProductCard
              image="/Images/products/prod4.png"
              title="Skinny Fit Jeans"
              rating={4}
              price={240}
            />
            <ProductCard
              image="/Images/products/prod5.png"
              title="Checkered Shirt"
              rating={5}
              price={180}
            />
            <ProductCard
              image="/Images/products/prod6.png"
              title="Sleeve Striped T-shirt"
              rating={5}
              price={130}
            />
            <ProductCard
              image="/Images/products/prod7.png"
              title="Vertical Striped Shirt"
              rating={4}
              price={212}
            />
            <ProductCard
              image="/Images/products/prod8.png"
              title="Courage Graphic T-shirt"
              rating={5}
              price={145}
            />
            <ProductCard
              image="/Images/products/prod9.png"
              title="Loose Fit Bermuda Shorts"
              rating={5}
              price={80}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App
