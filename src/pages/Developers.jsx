

const Developers = () => {
  return (
    <div className="flex gap-3">

      <div >
        <h1 className="text-sm font-normal">Developer Hub</h1>
        <p className="text-xs font-thin">Explore products, learn <br />from the community, <br />and access resources</p>
      </div>

      <div>
        <h1 className="uppercase font-bold text-xs mb-2 ">Start Building</h1>
        <p className="text-sm font-thin">Documentation</p>
        <span className="text-xs font-thin">Integrate USDC, protocols, <br />and products</span>
        <p className="text-sm font-thin mt-2">Sign up</p>
        <span className="text-xs font-thin">Get started with a Web3 <br />Services account</span>
      </div>


      <div >
        <h1 className="uppercase font-bold text-xs ">Resources</h1>
        <p className="text-sm font-thin mb-2">Developer blog</p>
        <p className="text-sm font-thin mb-2">Testnet Faucet</p>
        <p className="text-sm font-thin">Circle Research</p>
      </div>
    </div>
  )
}

export default Developers