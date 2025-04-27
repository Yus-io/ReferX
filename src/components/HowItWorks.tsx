
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: "Post your referral link and fund your job",
    description: "Want signups or traffic? Just paste your referral link, choose how many referrals you want, and set the reward.",
    icon: "📝"
  },
  {
    number: 2,
    title: "Let the community get to work",
    description: "Freelancers see your task, complete the referral, and submit proof of work.",
    icon: "👥"
  },
  {
    number: 3,
    title: "You approve, they get paid",
    description: "Once you're satisfied, funds are released to the referrer via smart contract. Simple and secure.",
    icon: "💰"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How ReferX Works
          </h2>
          <p className="text-gray-600">
            Get started in minutes with our simple, secure process for referral marketing
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition p-6 relative"
            >
              <div className="flex items-center justify-center h-16 w-16 bg-secondary rounded-full mb-6 text-3xl">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <span className="flex items-center justify-center h-7 w-7 bg-primary text-white rounded-full text-sm mr-2">
                  {step.number}
                </span>
                {step.title}
              </h3>
              
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
