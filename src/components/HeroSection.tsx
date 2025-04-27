
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-[#f8f9ff] py-16 md:py-24">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-3xl"></div>
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight">
              Get Paid to Refer. <span className="text-gradient">Simple, Secure, and Decentralized.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-10">
              ReferX is the first Web3-powered platform that connects people who need referrals with people ready to get the job done — and get paid.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/post-job">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Post a Referral Job
                </Button>
              </Link>
              <Link to="/earn">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Start Earning Referrals
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div className="relative max-w-sm md:max-w-md animate-scale-in">
              <div className="rounded-lg bg-white p-4 shadow-xl border border-gray-100">
                <div className="rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold text-gray-800">Referral Link</h3>
                      <p className="text-sm text-gray-500">Crypto Exchange</p>
                    </div>
                    <div className="ml-auto">
                      <span className="bg-accent text-white text-xs px-2 py-1 rounded">$5.00</span>
                    </div>
                  </div>
                  
                  <div className="h-2 bg-gray-200 rounded mb-4 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-600 rounded animate-flow-right" style={{width: '65%'}}></div>
                  </div>
                  
                  <div className="text-sm text-gray-500 flex justify-between">
                    <span>65% complete</span>
                    <span>32/50 referrals</span>
                  </div>
                  
                  <button className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition">
                    Accept Job
                  </button>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-accent/20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-purple-500/20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
