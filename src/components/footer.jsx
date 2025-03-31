export default function Footer() {
  return (
    <footer className="w-full h-[589px]">
      <section className="w-11/12 h-48 translate-y-1/2 px-12 py-8 bg-black text-white rounded-3xl flex justify-between flex-wrap">
        <h3 className="w-72 h-28 md:w-[551px] md:h-24 text-4xl leading-10 px-8 font-bold text-left">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h3>
        <div className="w-80 h-28 flex flex-col gap-4">
          <div className="w-80 h-12 bg-white rounded-full py-3 px-4">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email address"
              className="w-3/4 h-8 "
            />
          </div>
          <input
                      type="submit"
                      name="submit"
                      value='Subscribe to Newsletter'
            className="w-80 h-12 text-black bg-white rounded-full"
          />
        </div>
          </section>
          <section className="w-full h-[499px] bg-[rgb(240,240,240)]">
              <section className="w-11/12 h-44 flex justify-between">
                  
              </section>
              
          </section>
    </footer>
  );
}
