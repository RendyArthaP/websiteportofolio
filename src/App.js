import imageProfile from './img/profile1.png'
import Circle from './ornaments/Circle';
import Dot from './ornaments/Dot';

function App() {
  return (
    <div className="flex h-screen items-center">      
      <Circle />
      <Dot />
      <div className="flex flex-col items-center text-center w-full lg:flex-row-reverse lg:justify-around lg:px-14">
        <div className="border-profile border-2 rounded-full w-56 h-56">
          <img 
            src={imageProfile} 
            alt="profile1" 
            className="rounded-full self-center -mt-4"
          />
        </div>
        <div className="flex flex-col items-center px-2 md:px-0 lg:items-start">
          <h1 className="font-bold font-poppins text-2xl text-basic my-1 lg:text-4xl">What’s up, everyone?!</h1>
          <h2 className="font-bold font-poppins text-xl text-basic my-1 lg:text-3xl">I hope you guys enjoy my personal page.</h2>
          <h3 className="font-medium font-poppins text-lg text-basic my-1 lg:text-xl">I really appreciate it. Thank you! :D</h3>
          <a href="/" className="bg-button w-28 h-11 text-center rounded py-2 my-1 shadow-2xl">
            <span className="font-poppins text-white text-base">
              Click me!
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
