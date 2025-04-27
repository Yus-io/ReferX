
import { CheckCircle } from 'lucide-react';

const features = [
  "Escrow-protected payments",
  "Accepts crypto and Naira (NGN)",
  "10% platform fee only when job is completed",
  "Built for affiliate marketers, crypto projects, and business growth",
  "Mobile-first and Web3-ready"
];

const Features = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Use ReferX?
          </h2>
          
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <CheckCircle className="text-accent mr-3 flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
