
import { Card, CardContent } from "@/components/ui/card";

const wallets = [
  {
    name: "MetaMask",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-metamask-2728406-2261817.png",
    type: "Wallet"
  },
  {
    name: "WalletConnect",
    logo: "https://avatars.githubusercontent.com/u/37784886",
    type: "Wallet"
  },
  {
    name: "Polygon",
    logo: "https://cryptologos.cc/logos/polygon-matic-logo.png",
    type: "Network"
  },
  {
    name: "Paystack",
    logo: "https://website-v3-assets.s3.amazonaws.com/assets/img/hero/Paystack-mark-white-twitter.png",
    type: "Payment (NGN)"
  }
];

const Integrations = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Powered By
          </h2>
          <p className="text-gray-600">
            Secure payments and wallet integrations to keep your transactions safe
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
          {wallets.map((wallet) => (
            <Card key={wallet.name} className="bg-white hover:shadow-md transition border border-gray-100">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="h-16 w-16 mb-4 flex items-center justify-center">
                  <img 
                    src={wallet.logo} 
                    alt={wallet.name} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="font-medium text-center">{wallet.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{wallet.type}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
