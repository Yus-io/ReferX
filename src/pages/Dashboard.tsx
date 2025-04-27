
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Wallet, Briefcase, Clock, User, PlusCircle } from 'lucide-react';

const Dashboard = () => {
  // This would be fetched from the server in a real application
  const [isConnected, setIsConnected] = useState(false);
  
  // If not connected, show a prompt to connect wallet
  if (!isConnected) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center py-16 bg-gray-50">
          <div className="max-w-md w-full mx-auto p-8 bg-white rounded-xl shadow-sm border border-gray-100 animate-scale-in">
            <div className="text-center mb-6">
              <div className="relative mx-auto h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Wallet className="h-6 w-6 text-primary animate-pulse" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full"></span>
              </div>
              <h2 className="text-2xl font-bold mt-4">Connect Your Wallet</h2>
              <p className="text-gray-600 mt-2">
                Please connect your wallet to access your dashboard
              </p>
            </div>
            
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-white group relative overflow-hidden"
              onClick={() => setIsConnected(true)}
            >
              <span className="absolute right-full w-12 h-full bg-white/20 transform skew-x-12 transition-transform duration-700 ease-in-out group-hover:translate-x-[800%]"></span>
              Connect Wallet
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6 animate-fade-in">
            <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-white animate-pulse">
                <User size={20} />
              </div>
              <span className="hidden md:block font-medium">0x71...3a4f</span>
            </div>
          </div>
        
          <Tabs defaultValue="post-job" className="w-full">
            <TabsList className="w-full flex overflow-x-auto mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <TabsTrigger value="post-job" className="flex-1 transition-all duration-300 hover:bg-primary/5">
                <PlusCircle className="mr-2 h-4 w-4" />
                Post a Job
              </TabsTrigger>
              <TabsTrigger value="earn" className="flex-1 transition-all duration-300 hover:bg-primary/5">
                <Briefcase className="mr-2 h-4 w-4" />
                Earn from Referrals
              </TabsTrigger>
              <TabsTrigger value="wallet" className="flex-1 transition-all duration-300 hover:bg-primary/5">
                <Wallet className="mr-2 h-4 w-4" />
                Wallet
              </TabsTrigger>
              <TabsTrigger value="history" className="flex-1 transition-all duration-300 hover:bg-primary/5">
                <Clock className="mr-2 h-4 w-4" />
                History
              </TabsTrigger>
              <TabsTrigger value="profile" className="flex-1 transition-all duration-300 hover:bg-primary/5">
                <User className="mr-2 h-4 w-4" />
                Profile
              </TabsTrigger>
            </TabsList>
            
            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm animate-scale-in" style={{ animationDelay: "200ms" }}>
              <TabsContent value="post-job" className="animate-fade-in">
                <h2 className="text-xl font-bold mb-4">Create a New Referral Job</h2>
                <p className="text-gray-600 mb-4">This feature will be available soon. Click the button below to be redirected to the job creation page.</p>
                <Link to="/post-job">
                  <Button className="bg-primary hover:bg-primary/90 text-white group relative overflow-hidden">
                    <span className="absolute right-full w-12 h-full bg-white/20 transform skew-x-12 transition-transform duration-700 ease-in-out group-hover:translate-x-[800%]"></span>
                    Create a New Job
                  </Button>
                </Link>
              </TabsContent>
              
              <TabsContent value="earn" className="animate-fade-in">
                <h2 className="text-xl font-bold mb-4">Find Referral Jobs</h2>
                <p className="text-gray-600 mb-4">This feature will be available soon. Click the button below to browse available referral jobs.</p>
                <Link to="/earn">
                  <Button className="bg-primary hover:bg-primary/90 text-white group relative overflow-hidden">
                    <span className="absolute right-full w-12 h-full bg-white/20 transform skew-x-12 transition-transform duration-700 ease-in-out group-hover:translate-x-[800%]"></span>
                    Browse Jobs
                  </Button>
                </Link>
              </TabsContent>
              
              <TabsContent value="wallet" className="animate-fade-in">
                <h2 className="text-xl font-bold mb-4">Wallet</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <h3 className="font-medium text-gray-600">Escrow Balance</h3>
                    <p className="text-2xl font-bold mt-1">$0.00</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300" style={{ transitionDelay: "100ms" }}>
                    <h3 className="font-medium text-gray-600">Available Earnings</h3>
                    <p className="text-2xl font-bold mt-1">$0.00</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300" style={{ transitionDelay: "200ms" }}>
                    <h3 className="font-medium text-gray-600">Pending</h3>
                    <p className="text-2xl font-bold mt-1">$0.00</p>
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                  <Button className="bg-primary hover:bg-primary/90 text-white group relative overflow-hidden">
                    <span className="absolute right-full w-12 h-full bg-white/20 transform skew-x-12 transition-transform duration-700 ease-in-out group-hover:translate-x-[800%]"></span>
                    Add Funds
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                    Withdraw
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="history" className="animate-fade-in">
                <h2 className="text-xl font-bold mb-4">Transaction History</h2>
                <div className="text-center py-8 text-gray-500">
                  <Clock className="h-12 w-12 mx-auto text-gray-300 animate-pulse" />
                  <p className="mt-4">No transactions yet</p>
                </div>
              </TabsContent>
              
              <TabsContent value="profile" className="animate-fade-in">
                <h2 className="text-xl font-bold mb-4">Your Profile</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Display Name
                    </label>
                    <input 
                      type="text"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                      placeholder="Enter your display name"
                    />
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <select className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200">
                      <option value="">Select your country</option>
                      <option value="ng">Nigeria</option>
                      <option value="gh">Ghana</option>
                      <option value="ke">Kenya</option>
                      <option value="za">South Africa</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6 animate-fade-in" style={{ animationDelay: "300ms" }}>
                  <Button className="bg-primary hover:bg-primary/90 text-white group relative overflow-hidden">
                    <span className="absolute right-full w-12 h-full bg-white/20 transform skew-x-12 transition-transform duration-700 ease-in-out group-hover:translate-x-[800%]"></span>
                    Save Changes
                  </Button>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
