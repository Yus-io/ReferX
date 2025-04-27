
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const connectWallet = () => {
    // In a real implementation, this would connect to MetaMask or other wallets
    console.log('Connecting wallet...');
    setIsConnected(true);
  };

  return (
    <nav className="relative bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-gradient">ReferX</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <Link to="/dashboard" className="text-gray-700 hover:text-primary font-medium">
              Dashboard
            </Link>
            <Link to="/post-job" className="text-gray-700 hover:text-primary font-medium">
              Post a Job
            </Link>
            <Link to="/earn" className="text-gray-700 hover:text-primary font-medium">
              Earn
            </Link>
          </div>

          {isConnected ? (
            <Link to="/dashboard">
              <Button size="sm" variant="outline" className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-white">
                <Wallet size={16} />
                <span>Dashboard</span>
              </Button>
            </Link>
          ) : (
            <Button size="sm" onClick={connectWallet} className="flex items-center gap-2 bg-primary text-white hover:bg-primary/80">
              <Wallet size={16} />
              <span>Connect</span>
            </Button>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t absolute w-full z-50 animate-fade-in">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link to="/dashboard" className="text-gray-700 py-2 px-4 hover:bg-gray-50 rounded-md" onClick={toggleMenu}>
              Dashboard
            </Link>
            <Link to="/post-job" className="text-gray-700 py-2 px-4 hover:bg-gray-50 rounded-md" onClick={toggleMenu}>
              Post a Job
            </Link>
            <Link to="/earn" className="text-gray-700 py-2 px-4 hover:bg-gray-50 rounded-md" onClick={toggleMenu}>
              Earn
            </Link>
            {isConnected ? (
              <Link to="/dashboard" className="py-2" onClick={toggleMenu}>
                <Button size="sm" variant="outline" className="w-full flex items-center justify-center gap-2 border-primary text-primary">
                  <Wallet size={16} />
                  <span>Dashboard</span>
                </Button>
              </Link>
            ) : (
              <Button size="sm" onClick={() => {connectWallet(); toggleMenu();}} className="w-full flex items-center justify-center gap-2 bg-primary text-white">
                <Wallet size={16} />
                <span>Connect</span>
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
