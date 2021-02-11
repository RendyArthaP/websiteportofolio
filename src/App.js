import imageProfile from './img/profile1.png'

function App() {
  return (
    <div className="flex flex-col text-center border h-screen items-center justify-center lg:flex-row-reverse lg:justify-around xl:px-10 2xl:px-20">
      <div className="rounded-full w-64 h-64 bg-navbar absolute -top-36 -left-36 overflow-hidden"></div>
      <div className="rounded-full w-32 h-32 bg-navbar absolute overflow-hidden top-28 -left-20"></div>
      <img 
        src={imageProfile} 
        alt="profile1" 
        className="w-56 border-profile border-2 rounded-full lg:w-64 mb-2 lg:mb-0"
      />
      <div className="flex flex-col items-center px-2 md:px-0 lg:items-start">
        <h1 className="font-bold font-poppins text-2xl text-basic my-1 lg:text-4xl">What’s up, everyone?!</h1>
        <h2 className="font-bold font-poppins text-xl text-basic my-1 lg:text-3xl">I hope you guys enjoy my personal page.</h2>
        <h3 className="font-medium font-poppins text-lg text-basic my-1 lg:text-xl">I really appreciate it. Thank you! :D</h3>
        <a href="/" className="bg-button w-28 h-11 rounded py-2 my-1 shadow-2xl">
          <span className="font-poppins text-white text-base">
            Click me!
          </span>
        </a>
      </div>
    </div>
  );
}

export default App;
