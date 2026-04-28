import { Gavel, Search, Shield, TriangleAlert, Star, Home, List, Bell, User } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, type ReactNode } from 'react';

// --- Shared Components ---

const Badge = ({ children, variant = 'default' }: { children: ReactNode; variant?: 'default' | 'verified' | 'warning' | 'disputable' }) => {
  const styles = {
    default: 'bg-zinc-200 text-zinc-600',
    verified: 'bg-black text-white',
    warning: 'bg-brand-orange text-white',
    disputable: 'bg-zinc-100 text-zinc-500 border border-black/20'
  };
  return (
    <span className={`px-2 py-1 text-[10px] font-headline font-bold uppercase tracking-wider ${styles[variant]}`}>
      {children}
    </span>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 border-b-2 border-black pb-4">
    <h3 className="text-4xl md:text-5xl lg:text-6xl">{title}</h3>
    {subtitle && <p className="mt-2 text-zinc-500 font-medium uppercase text-sm tracking-widest">{subtitle}</p>}
  </div>
);

// --- Page Sections ---

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b-2 border-black bg-white px-6 py-4 flex justify-between items-center">
    <div className="flex items-center gap-2">
      <img src="input_file_0.png" alt="NHR Logo" className="h-10 w-auto" referrerPolicy="no-referrer" />
    </div>
    
    <nav className="hidden md:flex gap-10 items-center font-headline font-bold uppercase tracking-tight">
      <a href="#" className="text-brand-orange">Home</a>
      <a href="#" className="hover:text-brand-orange transition-colors">Reviews</a>
      <a href="#" className="hover:text-brand-orange transition-colors">Alerts</a>
    </nav>

    <div className="flex items-center gap-6">
      <Search className="h-6 w-6 cursor-pointer" />
      <button className="hidden md:block bg-brand-black text-white px-6 py-2 font-headline text-sm uppercase tracking-widest hover:bg-zinc-800">
        Join Network
      </button>
    </div>
  </header>
);

const Hero = () => (
    <section className="py-16 md:py-24 border-b-2 border-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-7xl md:text-8xl lg:text-9xl leading-[0.9] flex flex-col">
            <span>UNFILTERED</span>
            <span className="text-brand-orange">TRUTH</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 max-w-xl font-medium leading-tight">
            The platform that holds hosts accountable. Read real experiences from travelers who encountered the unexpected. No sugar-coating, just data.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-0 pt-4">
            <div className="relative flex-grow">
              <input 
                className="w-full h-16 bg-white border-2 border-black px-6 font-headline text-lg focus:ring-0 focus:border-brand-orange placeholder:text-zinc-400" 
                placeholder="Search Host Name or ID..." 
                type="text" 
              />
              <Search className="absolute right-6 top-5 text-zinc-400" />
            </div>
            <button className="h-16 px-12 bg-brand-orange text-white font-headline text-xl uppercase border-y-2 border-r-2 border-l-2 sm:border-l-0 border-black hover:bg-orange-600">
              Search
            </button>
          </div>
        </div>
        
        <div className="relative aspect-square md:aspect-video lg:aspect-square bg-zinc-200 border-2 border-black overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
            alt="Interior" 
            className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-black/10 mix-blend-multiply" />
          <div className="absolute inset-x-0 bottom-12 flex justify-center">
             <motion.div 
               initial={{ rotate: -3 }}
               whileInView={{ rotate: -2 }}
               className="bg-brand-orange p-6 border-2 border-black shadow-brutalist"
             >
               <span className="text-white font-headline font-black uppercase text-2xl md:text-3xl lg:text-4xl">
                 48,203 REPORTS FILED
               </span>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
);

const StatsGrid = () => (
    <section className="py-20 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="md:col-span-2 bg-white border-2 border-black p-8 flex flex-col justify-between hover:shadow-brutalist transition-all cursor-default">
        <div>
          <Badge>Live Feed</Badge>
          <h2 className="text-3xl mt-6">Latest Host Alerts</h2>
        </div>
        <div className="mt-12 space-y-6">
          <div className="flex items-center gap-4 border-b border-zinc-100 pb-4">
            <TriangleAlert className="text-brand-orange h-6 w-6" />
            <p className="font-headline font-bold uppercase text-lg">Incident #9921: San Francisco, CA</p>
          </div>
          <div className="flex items-center gap-4 border-b border-zinc-100 pb-4">
            <TriangleAlert className="text-brand-orange h-6 w-6" />
            <p className="font-headline font-bold uppercase text-lg">Incident #9918: London, UK</p>
          </div>
        </div>
      </div>
      
      <div className="bg-brand-orange border-2 border-black p-8 flex flex-col items-center justify-center text-center shadow-brutalist transition-transform hover:-translate-y-1">
        <span className="text-7xl font-headline font-black text-white leading-none">98%</span>
        <p className="font-headline font-bold text-white uppercase text-sm mt-4 tracking-tighter">Accuracy Rate on Claims</p>
      </div>
      
      <div className="bg-white border-2 border-black p-8 flex flex-col justify-between hover:shadow-brutalist transition-all">
        <Shield className="text-brand-black h-12 w-12" />
        <p className="font-headline font-black text-brand-black uppercase text-2xl leading-none mt-8">100% Anonymous Reporting</p>
      </div>
    </section>
);

const ReviewsFeed = () => {
  const [filter, setFilter] = useState('all');
  
  const reviews = [
    {
      id: 1,
      title: '"The Basement Trap"',
      host: 'Michael S. • New York, NY',
      content: 'Listing showed a bright studio. Actual unit was a converted boiler room with no windows and the smell of raw sewage. Host refused refund and became verbally aggressive when confronted.',
      rating: 1,
      time: '2h ago',
      verified: true
    },
    {
      id: 2,
      title: 'Hidden Surveillance',
      host: 'Luxury Rentals LLC • Miami, FL',
      content: 'Found a camera hidden inside a digital clock in the bedroom. Evidence submitted to local police. Host claims it was for "security" but failed to disclose in listing or welcome packet.',
      rating: 2,
      time: '5h ago',
      verified: false,
      disputable: true
    },
    {
      id: 3,
      title: 'The Bait and Switch King',
      host: 'James T. • Los Angeles, CA',
      content: 'Host cancelled our booking 10 minutes before arrival, then sent a private link asking for double the price "due to technical errors." We found 5 other people who had the exact same experience with him this month. Total scam operation.',
      rating: 1,
      time: '1d ago',
      verified: true,
      critical: true
    }
  ];

  return (
    <section className="py-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <SectionHeading title="Recent Reviews" />
        <div className="flex gap-8 mb-6 pb-4">
          <button 
            onClick={() => setFilter('all')}
            className={`font-headline uppercase text-sm font-black transition-all ${filter === 'all' ? 'text-brand-orange border-b-4 border-brand-orange pb-1' : 'text-zinc-400 border-b-4 border-transparent pb-1 border-none'}`}
          >
            All
          </button>
          <button 
             onClick={() => setFilter('verified')}
             className={`font-headline uppercase text-sm font-black transition-all ${filter === 'verified' ? 'text-brand-orange border-b-4 border-brand-orange pb-1' : 'text-zinc-400 border-b-4 border-transparent pb-1 border-none'}`}
          >
            Verified Only
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review, idx) => (
          <motion.div 
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`bg-white border-2 border-black p-8 space-y-6 flex flex-col hover:shadow-brutalist transition-all ${review.critical ? 'md:col-span-2' : ''}`}
          >
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-1">
                <h4 className="text-3xl leading-none">{review.title}</h4>
                <p className="text-zinc-500 font-headline font-bold text-xs uppercase tracking-wider">{review.host}</p>
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0">
                {review.verified && <Badge variant="verified">Verified</Badge>}
                {review.disputable && <Badge variant="disputable">Disputable</Badge>}
                {review.critical && <Badge variant="warning">Critical Warning</Badge>}
              </div>
            </div>
            <p className="text-lg text-zinc-700 leading-tight grow">{review.content}</p>
            <div className="flex justify-between items-center pt-6 border-t-2 border-black/5">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < review.rating ? 'fill-brand-orange text-brand-orange' : 'text-zinc-200'}`} />
                ))}
              </div>
              <span className="text-xs font-headline font-black text-zinc-400 uppercase tracking-widest">Reported {review.time}</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 flex justify-center">
        <button className="px-16 py-5 font-headline font-black uppercase text-lg bg-white border-2 border-black shadow-brutalist hover:bg-black hover:text-white transition-all">
          Load More Reports
        </button>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="py-20 mb-12">
    <div className="bg-brand-black text-white p-12 md:p-20 flex flex-col lg:flex-row justify-between items-center gap-12 border-2 border-black">
      <div className="space-y-6 text-center lg:text-left">
        <h2 className="text-5xl md:text-7xl lg:text-8xl leading-none">
          EXPOSURE IS THE<br />
          <span className="text-brand-orange">ONLY CURE.</span>
        </h2>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-xl font-medium">
          Contribute to the transparency. File your anonymous report now to protect the community.
        </p>
      </div>
      <button className="bg-brand-orange text-white px-12 py-8 font-headline font-black text-3xl uppercase border-2 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:bg-white hover:text-brand-orange transition-all shrink-0">
        Submit Report
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t-2 border-black bg-white pt-16 pb-32 md:pb-16 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <img src="input_file_0.png" alt="NHR Logo" className="h-10 w-auto" referrerPolicy="no-referrer" />
      <div className="flex flex-wrap justify-center gap-10 font-headline font-bold text-xs uppercase tracking-widest text-brand-black">
        <a href="#" className="hover:text-brand-orange">Transparency Report</a>
        <a href="#" className="hover:text-brand-orange">Legal Information</a>
        <a href="#" className="hover:text-brand-orange">Terms</a>
        <a href="#" className="hover:text-brand-orange">Privacy</a>
      </div>
      <div className="text-[10px] font-headline font-bold uppercase text-zinc-400 tracking-[0.2em] text-center">
        © 2024 NEGATIVE HOST REVIEWS. TRANSPARENCY FIRST.
      </div>
    </div>
  </footer>
);

const MobileNav = () => (
  <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-stretch h-20 bg-white border-t-2 border-black z-50">
    <a href="#" className="flex flex-col items-center justify-center bg-brand-orange text-white p-2 border-r-2 border-black flex-1">
      <Home className="h-6 w-6" />
      <span className="font-headline text-[10px] font-black uppercase mt-1">Home</span>
    </a>
    <a href="#" className="flex flex-col items-center justify-center text-brand-black p-2 flex-1 border-r-2 border-black">
      <List className="h-6 w-6" />
      <span className="font-headline text-[10px] font-black uppercase mt-1">Reviews</span>
    </a>
    <a href="#" className="flex flex-col items-center justify-center text-brand-black p-2 flex-1 border-r-2 border-black">
      <Bell className="h-6 w-6" />
      <span className="font-headline text-[10px] font-black uppercase mt-1">Alerts</span>
    </a>
    <a href="#" className="flex flex-col items-center justify-center text-brand-black p-2 flex-1">
      <User className="h-6 w-6" />
      <span className="font-headline text-[10px] font-black uppercase mt-1">Account</span>
    </a>
  </nav>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-6">
        <Hero />
        <StatsGrid />
        <ReviewsFeed />
        <CTASection />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
