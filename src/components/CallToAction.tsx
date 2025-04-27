
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started with ReferX?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Join our community and start earning through referrals today
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/post-job">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Post a Referral Job
              </Button>
            </Link>
            <Link to="/earn">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Start Earning Referrals
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
