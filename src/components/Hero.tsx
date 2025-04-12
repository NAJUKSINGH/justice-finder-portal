
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-law-navy text-white py-16 md:py-24">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find the Right Lawyer for Your Legal Needs
            </h1>
            <p className="text-lg mb-6 text-gray-200">
              Connect with experienced attorneys who have proven track records of success.
              Get personalized legal consultation and representation for your specific case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/appointment" className="btn-secondary">
                Book a Consultation
              </Link>
              <Link to="/case-studies" className="bg-transparent border border-white text-white hover:bg-white/10 font-semibold py-2 px-4 rounded transition-all text-center">
                View Case Studies
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-law-gold/20 rounded-full filter blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=2070&auto=format&fit=crop" 
                alt="Legal Consultation" 
                className="rounded-lg shadow-xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
