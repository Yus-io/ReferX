
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PostJob = () => {
  const [formData, setFormData] = useState({
    referralLink: '',
    platform: '',
    referralsNeeded: '',
    amountPerReferral: '',
    currency: '',
    instructions: ''
  });

  const [totalBudget, setTotalBudget] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Calculate total budget when referrals or amount changes
    if (name === 'referralsNeeded' || name === 'amountPerReferral') {
      const referrals = name === 'referralsNeeded' ? parseInt(value) || 0 : parseInt(formData.referralsNeeded) || 0;
      const amount = name === 'amountPerReferral' ? parseFloat(value) || 0 : parseFloat(formData.amountPerReferral) || 0;
      setTotalBudget(referrals * amount);
    }
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the data to the backend
    console.log("Form submitted:", formData);
    console.log("Total Budget:", totalBudget);
    alert("Feature coming soon! Your job would be created with a total budget of " + totalBudget);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">Create a New Referral Job</h1>
          
          <div className="max-w-3xl mx-auto">
            <Card className="border-gray-200 shadow-sm">
              <form onSubmit={handleSubmit}>
                <CardContent className="pt-6 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="referralLink">Referral Link</Label>
                    <Input 
                      id="referralLink"
                      name="referralLink"
                      placeholder="https://example.com/ref?id=yourcode"
                      value={formData.referralLink}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="platform">Referral Platform</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange('platform', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select platform" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="binance">Binance</SelectItem>
                        <SelectItem value="chipper">Chipper Cash</SelectItem>
                        <SelectItem value="brave">Brave Browser</SelectItem>
                        <SelectItem value="crypto.com">Crypto.com</SelectItem>
                        <SelectItem value="other">Custom / Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="referralsNeeded">Referrals Needed</Label>
                      <Input 
                        id="referralsNeeded"
                        name="referralsNeeded"
                        type="number"
                        placeholder="e.g., 10"
                        value={formData.referralsNeeded}
                        onChange={handleInputChange}
                        min="1"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="amountPerReferral">Amount per Referral</Label>
                      <Input 
                        id="amountPerReferral"
                        name="amountPerReferral"
                        type="number"
                        placeholder="e.g., 5"
                        value={formData.amountPerReferral}
                        onChange={handleInputChange}
                        min="0.1"
                        step="0.1"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="currency">Currency</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange('currency', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usdt">USDT</SelectItem>
                        <SelectItem value="busd">BUSD</SelectItem>
                        <SelectItem value="matic">MATIC</SelectItem>
                        <SelectItem value="ngn">Naira (NGN)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="instructions">Instructions (Optional)</Label>
                    <textarea 
                      id="instructions"
                      name="instructions"
                      className="w-full min-h-[100px] rounded-md border border-gray-300 p-3"
                      placeholder="Add any specific requirements or steps for completing this referral"
                      value={formData.instructions}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  
                  <div className="bg-secondary p-4 rounded-lg">
                    <div className="flex flex-wrap justify-between items-center">
                      <div>
                        <h3 className="font-medium">Total Budget:</h3>
                        <div className="text-xl font-bold">
                          {formData.currency ? 
                            `${totalBudget.toFixed(2)} ${formData.currency.toUpperCase()}` : 
                            totalBudget.toFixed(2)}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">+ 10% platform fee on completion</p>
                      </div>
                      <div className="text-gray-600 text-sm mt-2 md:mt-0 md:text-right">
                        <p>Platform Fee: 10%</p>
                        <p>Charged only after successful tasks</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-end border-t p-6">
                  <Button type="submit" className="bg-primary text-white hover:bg-primary/90">
                    Submit & Fund Job
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PostJob;
