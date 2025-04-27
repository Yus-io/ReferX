
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Sample referral job data
const jobsData = [
  {
    id: 1,
    title: 'Binance Signup Referrals',
    platform: 'Binance',
    reward: 5.00,
    currency: 'USDT',
    referralsNeeded: 50,
    referralsCompleted: 12,
    description: 'Sign up for Binance using our referral link and complete KYC verification.'
  },
  {
    id: 2,
    title: 'Chipper Cash App Download',
    platform: 'Chipper Cash',
    reward: 2.50,
    currency: 'USDT',
    referralsNeeded: 100,
    referralsCompleted: 43,
    description: 'Download the Chipper Cash app, create an account, and make your first transaction.'
  },
  {
    id: 3,
    title: 'Paystack Integration Testing',
    platform: 'Paystack',
    reward: 1000,
    currency: 'NGN',
    referralsNeeded: 20,
    referralsCompleted: 5,
    description: 'Sign up for Paystack, integrate the test API, and make a sample transaction.'
  },
  {
    id: 4,
    title: 'Brave Browser Installation',
    platform: 'Brave',
    reward: 1.00,
    currency: 'MATIC',
    referralsNeeded: 200,
    referralsCompleted: 89,
    description: 'Install Brave browser and use it for at least 3 days. Must be a new user.'
  }
];

const Earn = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const [filters, setFilters] = useState({
    paymentType: '',
    platform: '',
    rewardRange: [0, 10]
  });
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterChange = (filterName: string, value: any) => {
    const newFilters = { ...filters, [filterName]: value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (!query) {
      applyFilters(filters);
    } else {
      const filtered = jobsData.filter(job => 
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.platform.toLowerCase().includes(query.toLowerCase()) ||
        job.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredJobs(filtered);
    }
  };

  const applyFilters = (currentFilters: any) => {
    let result = [...jobsData];
    
    if (currentFilters.paymentType) {
      if (currentFilters.paymentType === 'crypto') {
        result = result.filter(job => 
          job.currency === 'USDT' || job.currency === 'BUSD' || job.currency === 'MATIC'
        );
      } else if (currentFilters.paymentType === 'fiat') {
        result = result.filter(job => job.currency === 'NGN');
      }
    }
    
    if (currentFilters.platform) {
      result = result.filter(job => 
        job.platform.toLowerCase() === currentFilters.platform.toLowerCase()
      );
    }
    
    if (searchQuery) {
      result = result.filter(job => 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.platform.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (currentFilters.rewardRange && currentFilters.rewardRange.length === 2) {
      result = result.filter(job => 
        job.reward >= currentFilters.rewardRange[0] && job.reward <= currentFilters.rewardRange[1]
      );
    }
    
    setFilteredJobs(result);
  };

  const acceptJob = (jobId: number) => {
    // In a real implementation, this would call an API to accept the job
    console.log(`Accepted job with ID: ${jobId}`);
    alert(`You have accepted the job. This feature will be available soon!`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">Find Referral Jobs & Get Paid</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4 border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Filters</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Search
                      </label>
                      <Input 
                        placeholder="Search jobs..." 
                        value={searchQuery}
                        onChange={handleSearch}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Payment Type
                      </label>
                      <Select
                        onValueChange={(value) => handleFilterChange('paymentType', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="crypto">Crypto</SelectItem>
                          <SelectItem value="fiat">NGN (Naira)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Platform
                      </label>
                      <Select
                        onValueChange={(value) => handleFilterChange('platform', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="binance">Binance</SelectItem>
                          <SelectItem value="chipper cash">Chipper Cash</SelectItem>
                          <SelectItem value="brave">Brave</SelectItem>
                          <SelectItem value="paystack">Paystack</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Reward Range (USDT)
                      </label>
                      <Slider
                        defaultValue={[0, 10]}
                        max={10}
                        step={0.5}
                        onValueChange={(value) => handleFilterChange('rewardRange', value)}
                      />
                      <div className="flex justify-between mt-2 text-sm text-gray-500">
                        <span>${filters.rewardRange[0]}</span>
                        <span>${filters.rewardRange[1]}+</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Jobs List */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map(job => (
                    <Card key={job.id} className="border-gray-200 shadow-sm hover:shadow-md transition">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-lg">{job.title}</h3>
                            <p className="text-gray-500 text-sm">{job.platform}</p>
                          </div>
                          <div className="bg-primary text-white text-sm px-3 py-1 rounded-full">
                            {job.reward} {job.currency}
                          </div>
                        </div>
                        
                        <p className="my-4 text-gray-700 text-sm">
                          {job.description}
                        </p>
                        
                        <div className="mt-4">
                          <div className="text-sm text-gray-500 flex justify-between mb-1">
                            <span>Progress</span>
                            <span>{job.referralsCompleted}/{job.referralsNeeded} referrals</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full" 
                              style={{ width: `${(job.referralsCompleted / job.referralsNeeded) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </CardContent>
                      
                      <CardFooter className="px-6 py-4 border-t border-gray-100">
                        <Button 
                          className="w-full bg-primary hover:bg-primary/90 text-white"
                          onClick={() => acceptJob(job.id)}
                        >
                          Accept Job
                        </Button>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className="lg:col-span-2 flex items-center justify-center h-48 bg-white rounded-lg border border-gray-200 p-6">
                    <p className="text-gray-500">No jobs found matching your criteria</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Earn;
