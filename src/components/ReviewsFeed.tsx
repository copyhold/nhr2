import { useState } from 'react';
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ReviewBadge } from './ReviewBadge';

export default function ReviewsFeed() {
  const [filter, setFilter] = useState('all');
  
  const allReviews = [
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

  const filteredReviews = filter === 'verified' 
    ? allReviews.filter(r => r.verified) 
    : allReviews;

  return (
    <section className="py-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="mb-12 border-b-2 border-black pb-4 flex-grow">
          <h3 className="text-4xl md:text-5xl lg:text-6xl uppercase font-headline">Recent Reviews</h3>
        </div>
        <div className="flex gap-8 mb-6 pb-4">
          <button 
            onClick={() => setFilter('all')}
            className={`font-headline uppercase text-sm font-black transition-all ${filter === 'all' ? 'text-brand-orange border-b-4 border-brand-orange pb-1' : 'text-zinc-400 border-none pb-1'}`}
          >
            All
          </button>
          <button 
             onClick={() => setFilter('verified')}
             className={`font-headline uppercase text-sm font-black transition-all ${filter === 'verified' ? 'text-brand-orange border-b-4 border-brand-orange pb-1' : 'text-zinc-400 border-none pb-1'}`}
          >
            Verified Only
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredReviews.map((review, idx) => (
            <motion.div 
              key={review.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`bg-white border-2 border-black p-8 space-y-6 flex flex-col hover:shadow-brutalist transition-all ${review.critical ? 'md:col-span-2' : ''}`}
            >
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <h4 className="text-3xl leading-none font-headline font-bold uppercase">{review.title}</h4>
                  <p className="text-zinc-500 font-headline font-bold text-xs uppercase tracking-wider">{review.host}</p>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  {review.verified && <ReviewBadge variant="verified">Verified</ReviewBadge>}
                  {review.disputable && <ReviewBadge variant="disputable">Disputable</ReviewBadge>}
                  {review.critical && <ReviewBadge variant="warning">Critical Warning</ReviewBadge>}
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
        </AnimatePresence>
      </div>
      
      <div className="mt-16 flex justify-center">
        <button className="px-16 py-5 font-headline font-black uppercase text-lg bg-white border-2 border-black shadow-brutalist hover:bg-black hover:text-white transition-all">
          Load More Reports
        </button>
      </div>
    </section>
  );
}
