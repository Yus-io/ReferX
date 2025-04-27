
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-gradient">ReferX</h3>
            <p className="text-gray-600 mb-4">
              The first Web3-powered platform that connects people who need referrals with people ready to get the job done — and get paid.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4 text-gray-800">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/post-job" className="text-gray-600 hover:text-primary">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link to="/earn" className="text-gray-600 hover:text-primary">
                  Start Earning
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-primary">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4 text-gray-800">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4 text-gray-800">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://t.me/referxapp" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-primary"
                >
                  Join Telegram
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hello@referx.app" 
                  className="text-gray-600 hover:text-primary"
                >
                  hello@referx.app
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="text-gray-500 text-sm">
            <p>
              ReferX does not control or verify third-party referral platforms. Ensure you read task terms before accepting any job.
            </p>
            <p className="mt-4">
              &copy; {new Date().getFullYear()} ReferX. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
