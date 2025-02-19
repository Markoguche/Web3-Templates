import { FaArrowRight } from "react-icons/fa"

const Partners = () => {
  return (
    <div className="flex gap-3">
      
      <div>
        <h1 className="text-sm">Alliance Program</h1>
        <p className="text-xs font-thin">A network of <br />companies innovating with USDC</p>
        <FaArrowRight/>
      </div>
      <div>
        <h1 className="text-sm">Member Directory</h1>
        <p className="text-xs font-thin">Connect with companies <br />in the Alliance Program</p>
      </div>
    </div>
  )
}

export default Partners