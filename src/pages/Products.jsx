
const Products = () => {
  return (
    <div className="flex  font-thin w-full pl-48 pb-8  ">
      {/* Stablecoins Section */}
      <div className="block pt-8 pr-[750px] pl--[750px]">
        <p className="font-bold uppercase text-xs">Stablecoins</p>
        <div className="mb-2">
          <h1 className="text-sm">USDC</h1>
          <p className="text-xs">Access the US dollar stablecoin</p>
        </div>
        <div className="mb-2">
          <h1 className="text-sm">EURC</h1>
          <p className="text-xs">Access the euro stablecoin</p>
        </div>
        <div className="mb-2">
          <h1 className="text-sm">Mint</h1>
          <p className="text-xs">Convert local currency to USDC and EURC</p>
        </div>
        <div>
          <h1 className="text-sm">Cross-Chain Transfer Protocol (CCTP)</h1>
          <p className="text-xs">Move USDC between blockchains</p>
        </div>
      </div>

      {/* Web3 Services Section */}
      <div className="flex pt-8">
        <p className="font-bold uppercase text-xs">Web3 Services</p>
        <div className="mb-2">
          <h1 className="text-sm">Programmable Wallets</h1>
          <p className="text-xs">Embed secure wallets in your app</p>
        </div>
        <div>
          <h1 className="text-sm">Smart Contract Platform</h1>
          <p className="text-xs">Build, deploy, and manage smart contracts</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
