import { FaGlobe, FaShieldAlt, FaChartBar } from 'react-icons/fa';

const Solution = () => {
  return (
    <div className='flex pt-6  pb-4 font-thin'>

      <div className='block '>
        <div className='mb-2'>
          <div>
            <h1 className='text-sm flex items-center'><FaGlobe className='mr-2' /> Cross-border payments</h1>
            <p className='text-xs ml-6'>Reach more markets at <br /> a lower cost</p>
          </div>
        </div>

        <div className='mb-2'>
          <div>
            <h1 className='text-sm flex items-center'><FaShieldAlt className='mr-2' /> Global dollar access</h1>
            <p className='text-xs ml-6'>Provide stable value <br /> where it’s needed <br /> globally</p>
          </div>
        </div>

        <div className='mb-2'>
          <div>
            <h1 className='text-sm flex items-center'><FaChartBar className='mr-2' /> Crypto capital markets</h1>
            <p className='text-xs ml-6'>Reduce risk with <br /> regulation and <br /> transparency</p>
          </div>
        </div>
      </div>

      <div className='ml-4'>
        <h1 className='text-sm'>Case studies</h1>
        <p className='text-xs'>See how businesses use <br /> Circle solutions</p>
      </div>
    </div>
  );
};

export default Solution;
