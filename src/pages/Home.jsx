import Card from '../components/Cards';
import BG from "../assets/Images/background.jpg";
import Dev from "../assets/Images/DeveloperLabel.svg";
import Blockchain from "../assets/Images/blockchain.jpg";
import Bitcoin from "../assets/Images/bitcoin.jpg";
import image1 from "../assets/Images/MoneyGram.svg";
import image2 from "../assets/Images/Visa.svg";
import image3 from "../assets/Images/BlackRock.svg";
import image4 from "../assets/Images/BNY-Mellon.svg";
import image5 from "../assets/Images/Coinbase.svg";
import image6 from "../assets/Images/Grab.svg";
import Purple from "../assets/Images/Purple.jpg";
import Blue from "../assets/Images/Blue.jpg";
import White from "../assets/Images/White.jpg";
import People from "../assets/Images/People.jpg";
import Nurse from "../assets/Images/Nurse.jpg";
import Man from "../assets/Images/Man.jpg";
import Two from "../assets/Images/Logo2.png";
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

const Home = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  const marqueeVariants = {
    animate: {
      x: ['0%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 200, // 1.5x faster
          ease: 'linear',
        },
      },
    },
  };

  return (
    <div>
      {/* First section with both background color and image */}
      <div
        className="container mx-auto border-none w-[2000px] p-28"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay', 
          backgroundColor: '#edf1fc', 
        }}
      >
        <h1 className="text-6xl font-extrabold text-[#363148] mt-12 text-center">
          Money is now open
        </h1>
        <p className="mt-6 text-2xl font-medium text-gray-700 text-center">
          Move money faster and more securely with USDC, the digital <br /> dollar made for businesses and developers around the world.
        </p>
        
        {/* Center the cards */}
        <div className="mt-12 flex justify-center space-x-4">
          <Card
            header="Cross-border payment"
            text="Expand your reach with near instance settlement and lower cost"
            borderColor="bg-gradient-to-tr from-[#9c7eb7] via-[#7857ac] to-[#4934a2]"
          />
          <Card
            header="Global dollar access"
            text="Meet the high demands of the US dollar around the world"
            borderColor="bg-gradient-to-tr from-[#ff9a9e] via-[#fad0c4] to-[#fad0c4]"
          />
          <Card
            header="Crypto capital market"
            text="Reduce risk with responsible managed stablecoins"
            borderColor="bg-gradient-to-tr from-[#43e97b] via-[#38f9d7] to-[#43e97b]"
          />
        </div>
      </div>

      {/* Scrolling brand logos */}
      <div className="overflow-hidden h-24 content-center"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay', 
        backgroundColor: '#edf1fc', 
      }}
      >
        <motion.div
          className="flex space-x-12"
          variants={marqueeVariants}
          animate="animate"
        >
          {images.concat(images).map((img, index) => (
            <img key={index} src={img} alt={`brand-${index}`} className="h-6" />
          ))}
        </motion.div>
      </div>

      {/* Last section with Bitcoin background */}
      <div
        className='text-[#29233b] h-[550px] content-center'
        style={{
          backgroundImage: `url(${Bitcoin})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className='text-5xl font-bold mb-6 mt-8 ml-24'>
          USDC is the stablecoin <br /> powering global business
        </h1>
        <div className='grid grid-cols-2 ml-24'>
          <div >
            <span className='text-xl font-semibold'>
              Stable
            </span>
            <p className='mb-8'>Fully reserved and always redeemable <br /> 1:1 for US dollars</p>
            <span className='text-xl font-semibold mt-6'>
              Widely available
            </span>
            <p>
              Supported on 15+ blockchain networks <br /> and trusted by developers
            </p>
          </div>
          <div className='mt-8'>
            <span className='text-xl font-semibold'>
              Always on
            </span>
            <p className='mb-8'>
              Can settle in seconds worldwide, all <br /> day, every day
            </p>
            <span className='text-xl font-semibold'>
              Transparent
            </span>
            <p>
              Reserve attestations are published <br /> monthly
            </p>
          </div>
        </div>
        <button className='h-10 w-44 rounded-lg text-white font-bold bg-[#29233b] mt-8 ml-24'>
          SEE WHY USDC
        </button>
      </div>
      <div className='h-[550px] content-center'
      style={{
        backgroundImage: `url(${Blockchain})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      >
        <div className='text-white ml-[650px]'>
          <img src={Dev} alt="Developerlabel" className='h-12 mb-6 ' />
          <h1 className='text-5xl font-bold mb-2'>An open platform for <br />programmable money</h1>
          <p className='text-2xl'>
            Circle’s open developer platform makes it faster,
            easier, <br /> and safer to tap into the global reach of the blockchain.
            <br />Start with our suite of smart contracts, APIs,
            and SDKs <br />designed to get you off the ground quickly and securely.
          </p>
          <button className='h-12 w-48 mt-6 bg-[#8656ef] rounded-lg font-semibold'>
              VISIT DEVELOPERS HUB
          </button>
        </div>
      </div>

<div className='h-[1350px]'
  style={{
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay',
    backgroundColor: '#edf1fc',
  }}
>
  <h1 className='text-5xl font-bold ml-24 pt-24 pb-16'>
    Businesses and developers around the <br />world help people use USDC
  </h1>
  
  <div className='mx-24 grid grid-cols-2 gap-4'>
    <div className="relative group">
      <img src={White} alt="white" className='h-[450px] rounded-xl' />
      
      <div className="absolute inset-0 flex flex-col p-6 bg-gradient-to-t from-black/50 rounded-xl text-[#363148]">
        <h1 className="text-2xl font-bold text-purple-950 mb-6">REAP</h1>
        <p className="mt-2 text-2xl font-bold">
          Opening the door <br />to new market <br />segments
        </p>
        <p className='text-xl mb-28'>Reap offers cards using USDC as collateral to serve underserved businesses.</p>
        <div className="flex justify-between items-center mt-4">
          <button className="text-lg font-semibold text-black relative group-hover:text-black">
            Read the case study
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
          <div className="border border-[#363148] p-2 rounded-full">
            <FaArrowRight className="text-[#363148]" />
          </div>
        </div>
      </div>
    </div>

    <div className="relative group">
      <img src={People} alt="people" className='h-[450px] w-full rounded-xl' />
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/50 rounded-xl text-white">
        <h1 className=" text-3xl font-bold">Money is <br />now open</h1>
        <p className="mt-2 text-lg">
          The open internet has changed almost everything in our lives, <br />
          but what is the one thing it has not changed until now? Money.
        </p>
        <div className="flex justify-between items-center mt-4">
          <button className="text-lg font-semibold text-white relative group-hover:text-white">
            Learn more
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
          <div className="border border-gray-300 p-2 rounded-full">
            <FaPlay className="text-white" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className='mx-24 grid grid-cols-3 gap-4 mt-8'>
    <div className='relative group'>
      <img src={Nurse} alt="nurse" className='h-[450px] w-full object-cover rounded-xl' />

      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/50 rounded-xl text-white">
        <p className="text-2xl font-bold mb-10">
          Supporting first <br /> responders in <br /> Venezuela with <br /> Airtm and USDC
        </p>
        <div className="flex justify-between items-center mt-4">
          <button className="text-lg font-semibold text-white relative group-hover:text-white">
            Watch The Video
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
          <div className="border border-white p-2 rounded-full">
            <FaPlay className="text-white" />
          </div>
        </div>
      </div>
    </div>

    <div className='relative group'>
      <img src={White} alt="white" className='h-[450px] w-full object-cover rounded-xl' />

      <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black/50 rounded-xl text-white">
        <img src={Two} alt="logo2" className='h-16 w-28' />
        <h1 className="text-2xl font-bold mb-10">
          Spent zero hours on blockchain development
        </h1>
        <p>Using Programmable Wallets, Grab <br />embedded user-friendly Web3 <br />wallets in their superapp</p>
        <div className="flex justify-between items-center mt-4">
          <button className="text-lg font-semibold text-white relative group-hover:text-white">
            Read the case study
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
          <div className="border border-white p-2 rounded-full">
            <FaArrowRight className="text-white" />
          </div>
        </div>
      </div>
    </div>

    <div className='relative group'>
      <img src={Man} alt="man" className='h-[450px] w-full object-cover rounded-xl' />

      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/50 rounded-xl text-white">
        <p className="text-2xl font-bold mb-10">
          Now is the time to <br />get US stablecoin <br />legislation right
        </p>
        <div className="flex justify-between items-center mt-4">
          <button className="text-lg font-semibold text-white relative group-hover:text-white">
            Watch The Video
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
          <div className="border border-white p-2 rounded-full">
            <FaPlay className="text-white" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    <div className='grid grid-cols-2 h-[350px] '>
      <div className=' content-center text-center'
      style={{
          backgroundImage: `url(${Blue})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
        }}
      >
      <h1 className='text-5xl font-bold text-[#29233b]'>Learn about USDC and <br />where to access it</h1>
      <button className='bg-[#29233b] font-semibold my-6 text-white h-12 w-24 rounded-lg'>GET USDC</button>
      </div>
      <div className=' content-center text-white text-center'
      style={{
          backgroundImage: `url(${Purple})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
        }}
      >
      <h1 className='text-5xl font-bold'>Explore resources to <br />start building with USDC</h1>
      <button className='bg-[#8656ef] font-semibold my-6 text-white h-12 w-48 rounded-lg'>VISIT DEVELOPERS HUB</button>
      </div>
    </div>

    <div className="bg-[#363148] py-12 ">
  <div className="grid grid-cols-5 gap-4 text-white text-sm mx-24">
    <div className="space-y-4">
      <h2 className="text-lg font-bold">USDC</h2>
      <ul className=" pl-4 space-y-2">
        <li>About USDC</li>
        <li>Transparency</li>
        <li>Supported blockchains</li>
        <li>Bridged USDC Standard</li>
        <li>USDC.com</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h2 className="text-lg font-bold">SOLUTIONS</h2>
      <ul className=" pl-4 space-y-2">
        <li>Cross-border payments</li>
        <li>Global dollar access</li>
        <li>Crypto capital markets</li>
        <li>Case studies</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h2 className="text-lg font-bold">DEVELOPER</h2>
      <ul className=" pl-4 space-y-2">
        <li>Developer Hub</li>
        <li>Documentation</li>
        <li>Interactive quickstarts</li>
        <li>Web3 Services account signup</li>
        <li>Developer blog</li>
        <li>Circle Research</li>
        <li>Testnet Faucet</li>
        <li>Test with sample app</li>
        <li>Uptime status</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h2 className="text-lg font-bold">RESOURCES</h2>
      <ul className=" pl-4 space-y-2">
        <li>Case studies</li>
        <li>Blog</li>
        <li>State of the USDC Economy</li>
        <li>Executive Insights</li>
        <li>The Money Movement</li>
        <li>Policy Hub</li>
        <li>Glossary</li>
        <li>Brand kit</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h2 className="text-lg font-bold">SUBSCRIBE TO THE CIRCLE NEWSLETTER</h2>
      <div className="flex flex-col space-y-4">
        <input 
          type="email" 
          placeholder="Enter your email address" 
          className="p-2 border border-gray-300 rounded-md" 
        />
        <button 
          className="bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700"
        >
          Subscribe
        </button>
        <p className="text-xs text-gray-300">
          By submitting this form, you agree to receive marketing and other communications from Circle about the Circle Products and other company updates. You can unsubscribe from these communications at any time. For more information on our privacy practices, please review our Privacy Policy.
        </p>
      </div>
    </div>
  </div>

  <div className="grid grid-cols-3 gap-4 text-white text-sm mt-12 mx-24">
    <div className="space-y-4">
      <h2 className="text-lg font-bold">PRODUCTS</h2>
      <ul className="pl-4 space-y-2">
        <li>USDC</li>
        <li>EURC</li>
        <li>Circle Mint</li>
        <li>Cross-Chain Transfer Protocol (CCTP)</li>
        <li>Programmable Wallets</li>
        <li>Smart Contract Platform</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h2 className="text-lg font-bold">SUPPORT</h2>
      <ul className=" pl-4 space-y-2">
        <li>Circle Help</li>
        <li>Contact us</li>
        <li>Legal & privacy</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h2 className="text-lg font-bold">COMPANY</h2>
      <ul className=" pl-4 space-y-2">
        <li>About us</li>
        <li>Careers We’re Hiring</li>
        <li>Pressroom</li>
        <li>Alliance Program</li>
        <li>Circle Impact</li>
        <li>Circle Ventures</li>
        <li>Investor Relations</li>
      </ul>
    </div>
  </div>
</div>

    </div>

  );
};

export default Home;
