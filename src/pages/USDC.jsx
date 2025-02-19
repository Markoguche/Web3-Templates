import { FaDollarSign, FaArrowRight } from 'react-icons/fa';

const Usdc = () => {
  return (
    <div className="container p-4 w-full">
      <div className=" p-4">
        <div className="flex ml-16 font-thin text-xs">
            
          <div className="flex items-center space-x-2 mb-4">
                <div className='block'>
                  <h2 className=" flex items-center"><FaDollarSign className='mr-2'/> About USDC</h2>
                  <p className="mb-4 ml-6">The regulated and fully
                    <br />reserved US dollar
                    <br />stablecoin
                  </p>
                  <FaArrowRight className='ml-6' />
                </div>
              
          </div>
          <div className='ml-3 '>
              <div className='mb-2'>
                <h1 className='text-sm'>Transparency</h1>
                <p>USDC reserve management</p>
              </div>

          <div className='mb-2'>
            <h1 className='text-sm'>Supported blockchains</h1>
            <p>Multi-chain USDC</p>
          </div>

          <div className='mb-2'>
            <h1 className='text-sm'>Get USDC</h1>
            <p>Learn more about worldwide providers</p>
          </div>
        </div>
          
        </div>

         
      </div>
    </div>
  );
};

export default Usdc;
