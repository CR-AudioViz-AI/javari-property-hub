// CravProperty.com - The Ultimate Real Estate Ecosystem Hub
// Your Complete Real Estate Technology Suite

import Link from 'next/link'
import { 
  Building2, Home, TrendingUp, Calculator, Search, Users, 
  Shield, Zap, BarChart3, Clock, Globe, Award, CheckCircle2,
  ArrowRight, Star, Sparkles, Lock, Phone, Mail, 
  FileText, Video, Camera, MessageSquare, Bot, Brain,
  Wallet, PiggyBank, Target, Megaphone, CalendarCheck,
  MapPin, Key, Briefcase, HeartHandshake, Rocket
} from 'lucide-react'

// The 4 Core Apps
const ecosystemApps = [
  {
    name: 'CravKey',
    tagline: 'AI-Powered Realtor CRM',
    description: 'The most advanced realtor platform on the market. Manage leads, listings, and close more deals with Javari AI working 24/7 for you.',
    url: 'https://cravkey.com',
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    icon: Key,
    features: [
      'AI Lead Qualification 24/7',
      'Smart CRM with Automation',
      'All 6 Property Types',
      'White-Label Websites',
      'Transaction Management',
      '20 Social Impact Modules'
    ],
    pricing: 'From $99/mo',
    savings: '75% less than BoomTown'
  },
  {
    name: 'Zoyzy',
    tagline: 'The Zillow Killer',
    description: 'Consumer property search that actually works. No 35% referral fees. Your leads stay YOUR leads.',
    url: 'https://zoyzy.com',
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    icon: Search,
    features: [
      'Beautiful Property Search',
      'No Referral Fees Ever',
      'Neighborhood Intelligence',
      'School & Crime Data',
      'Commute Calculator',
      'Save Searches & Alerts'
    ],
    pricing: 'FREE for Consumers',
    savings: 'Zero referral fees'
  },
  {
    name: 'CravManage',
    tagline: 'Property Management Suite',
    description: 'Everything landlords and property managers need. Tenant screening, rent collection, maintenance tracking - all AI-powered.',
    url: 'https://cravmanage.com',
    color: 'from-violet-500 to-violet-600',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/30',
    icon: Building2,
    features: [
      'AI Tenant Screening',
      'Automated Rent Collection',
      'Maintenance Tracking',
      'Owner/Tenant Portals',
      'Lease Management',
      'Financial Reporting'
    ],
    pricing: 'From $49/mo',
    savings: '60% less than AppFolio'
  },
  {
    name: 'RateUnlock',
    tagline: 'Mortgage Rate Intelligence',
    description: 'See what you\'ll REALLY pay. Compare rates, calculate payments, and find the perfect loan - without the sales pressure.',
    url: 'https://rateunlock.com',
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    icon: TrendingUp,
    features: [
      'Real-Time Rate Comparison',
      'True Cost Calculator',
      'Refinance Analysis',
      'Pre-Qualification Tool',
      'Rate Alert Notifications',
      'Lender Reviews'
    ],
    pricing: 'FREE',
    savings: 'No lender bias'
  }
]

// Free Tools That Generate Leads
const freeTools = [
  { name: 'Home Value Estimator', icon: Home, leads: 'High' },
  { name: 'Mortgage Calculator', icon: Calculator, leads: 'High' },
  { name: 'Affordability Calculator', icon: Wallet, leads: 'High' },
  { name: 'Rent vs Buy Analysis', icon: BarChart3, leads: 'Medium' },
  { name: 'Investment Calculator', icon: TrendingUp, leads: 'Medium' },
  { name: 'Neighborhood Report', icon: MapPin, leads: 'High' },
  { name: 'School Ratings Lookup', icon: Award, leads: 'Medium' },
  { name: 'Commute Time Calculator', icon: Clock, leads: 'Medium' },
  { name: 'Moving Cost Estimator', icon: Briefcase, leads: 'High' },
  { name: 'Closing Cost Calculator', icon: FileText, leads: 'High' },
  { name: 'Property Tax Estimator', icon: PiggyBank, leads: 'Medium' },
  { name: 'Cap Rate Calculator', icon: Target, leads: 'Medium' },
]

// Massive Competitor Comparison
const competitorComparison = [
  { 
    feature: 'AI Assistant (24/7 Lead Qualification)', 
    us: true, 
    boomtown: false, 
    kvcore: false, 
    zillow: false,
    followup: false,
    realgeeks: false
  },
  { 
    feature: 'All 6 Property Types', 
    us: true, 
    boomtown: false, 
    kvcore: false, 
    zillow: false,
    followup: false,
    realgeeks: false
  },
  { 
    feature: '100% Data Ownership', 
    us: true, 
    boomtown: false, 
    kvcore: false, 
    zillow: false,
    followup: false,
    realgeeks: false
  },
  { 
    feature: 'No Referral Fees', 
    us: true, 
    boomtown: true, 
    kvcore: true, 
    zillow: false,
    followup: true,
    realgeeks: true
  },
  { 
    feature: 'Month-to-Month (No Contract)', 
    us: true, 
    boomtown: false, 
    kvcore: false, 
    zillow: false,
    followup: true,
    realgeeks: false
  },
  { 
    feature: 'White-Label Websites', 
    us: true, 
    boomtown: true, 
    kvcore: true, 
    zillow: false,
    followup: false,
    realgeeks: true
  },
  { 
    feature: 'Property Management Integration', 
    us: true, 
    boomtown: false, 
    kvcore: false, 
    zillow: false,
    followup: false,
    realgeeks: false
  },
  { 
    feature: 'Mortgage Rate Tools', 
    us: true, 
    boomtown: false, 
    kvcore: false, 
    zillow: true,
    followup: false,
    realgeeks: false
  },
  { 
    feature: 'Consumer Search Platform', 
    us: true, 
    boomtown: false, 
    kvcore: false, 
    zillow: true,
    followup: false,
    realgeeks: false
  },
  { 
    feature: 'Social Impact Modules', 
    us: true, 
    boomtown: false, 
    kvcore: false, 
    zillow: false,
    followup: false,
    realgeeks: false
  },
  { 
    feature: 'Free Lead Gen Tools', 
    us: true, 
    boomtown: false, 
    kvcore: false, 
    zillow: false,
    followup: false,
    realgeeks: false
  },
  { 
    feature: 'Credits Across Ecosystem', 
    us: true, 
    boomtown: false, 
    kvcore: false, 
    zillow: false,
    followup: false,
    realgeeks: false
  },
]

// Pricing comparison
const pricingComparison = [
  { name: 'CravKey', price: '$99-449', setup: 'FREE', contract: 'Month-to-month' },
  { name: 'BoomTown', price: '$1,000+', setup: '$750-1,700', contract: '12 months' },
  { name: 'kvCORE', price: '$499-749', setup: 'Included', contract: '12 months' },
  { name: 'Zillow', price: '$300-1,000', setup: 'N/A', contract: '35-40% referral' },
  { name: 'Follow Up Boss', price: '$69+/user', setup: 'Included', contract: 'Month-to-month' },
  { name: 'Real Geeks', price: '$299+', setup: 'Varies', contract: '12 months' },
]

// Social Impact Modules
const socialImpactModules = [
  'Veterans', 'First Responders', 'Teachers', 'Healthcare Workers',
  'Seniors', 'First-Time Buyers', 'Single Parents', 'Refugees',
  'LGBTQ+', 'Disabilities', 'Low-Income', 'Foster Families',
  'Military Families', 'Faith-Based', 'Remote Workers', 'Survivors',
  'Eco-Living', 'Tiny Homes', 'Co-Living', 'Artists'
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
        
        <nav className="relative z-10 max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">CravProperty</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#apps" className="text-slate-300 hover:text-white transition">Apps</a>
            <a href="#tools" className="text-slate-300 hover:text-white transition">Free Tools</a>
            <a href="#compare" className="text-slate-300 hover:text-white transition">Compare</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
          </div>
          <Link 
            href="https://cravkey.com/signup"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            Get Started Free
          </Link>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-16 pb-24 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">The Complete Real Estate Ecosystem</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            One Platform.<br />
            <span className="gradient-text">Infinite Possibilities.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
            Stop paying $1,000+/month for fragmented tools. Get AI-powered everything - 
            CRM, property search, management, and mortgage tools - all working together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="https://cravkey.com/signup"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-xl text-lg transition"
            >
              Start 14-Day Free Trial <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="#apps"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl text-lg transition"
            >
              Explore the Ecosystem
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> No Credit Card Required
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 14-Day Free Trial
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Cancel Anytime
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Data Ownership
            </span>
          </div>
        </div>
      </header>

      {/* The 4 Core Apps */}
      <section id="apps" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              4 Powerful Apps. 1 Ecosystem.
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Everything connects. Your credits work everywhere. Your data flows seamlessly. 
              Your clients get a unified experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ecosystemApps.map((app) => {
              const Icon = app.icon
              return (
                <div 
                  key={app.name}
                  className={`relative rounded-2xl p-8 ${app.bgColor} ${app.borderColor} border overflow-hidden group hover:scale-[1.02] transition-all duration-300`}
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/5 to-transparent rounded-full -translate-y-32 translate-x-32" />
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${app.color}`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{app.name}</h3>
                          <p className="text-slate-400">{app.tagline}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-white">{app.pricing}</p>
                        <p className="text-sm text-emerald-400">{app.savings}</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-6">{app.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {app.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      href={app.url}
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${app.color} text-white font-semibold py-3 px-6 rounded-lg transition hover:opacity-90`}
                    >
                      Explore {app.name} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Free Lead Generation Tools */}
      <section id="tools" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">Lead Generation Machines</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              12 Free Tools That Generate Leads
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Embed these on your website. Every calculation = a captured lead. 
              Visitors become prospects automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {freeTools.map((tool) => {
              const Icon = tool.icon
              return (
                <div 
                  key={tool.name}
                  className="glass rounded-xl p-6 hover:bg-white/10 transition cursor-pointer group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-emerald-500/20 group-hover:bg-emerald-500/30 transition">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                      tool.leads === 'High' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-500/20 text-slate-400'
                    }`}>
                      {tool.leads} Lead Gen
                    </span>
                  </div>
                  <h3 className="text-white font-semibold">{tool.name}</h3>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="https://cravkey.com/tools"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-xl transition"
            >
              Get All Free Tools <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-slate-400 text-sm mt-3">
              Embed on your site in minutes. No coding required.
            </p>
          </div>
        </div>
      </section>

      {/* Massive Competitor Comparison */}
      <section id="compare" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              See How We Dominate
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Feature-by-feature, we beat every competitor. And we cost 75% less.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="px-4 py-4 text-left text-slate-400 font-medium">Feature</th>
                  <th className="px-4 py-4 text-center">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-bold">
                      CravProperty
                    </div>
                  </th>
                  <th className="px-4 py-4 text-center text-slate-400 font-medium text-sm">BoomTown</th>
                  <th className="px-4 py-4 text-center text-slate-400 font-medium text-sm">kvCORE</th>
                  <th className="px-4 py-4 text-center text-slate-400 font-medium text-sm">Zillow</th>
                  <th className="px-4 py-4 text-center text-slate-400 font-medium text-sm">Follow Up Boss</th>
                  <th className="px-4 py-4 text-center text-slate-400 font-medium text-sm">Real Geeks</th>
                </tr>
              </thead>
              <tbody>
                {competitorComparison.map((row, i) => (
                  <tr key={i} className="border-b border-slate-700/50 hover:bg-white/5">
                    <td className="px-4 py-4 text-slate-300">{row.feature}</td>
                    <td className="px-4 py-4 text-center">
                      {row.us ? (
                        <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto" />
                      ) : (
                        <span className="text-slate-600">—</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {row.boomtown ? (
                        <CheckCircle2 className="w-5 h-5 text-slate-400 mx-auto" />
                      ) : (
                        <span className="text-red-400">✗</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {row.kvcore ? (
                        <CheckCircle2 className="w-5 h-5 text-slate-400 mx-auto" />
                      ) : (
                        <span className="text-red-400">✗</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {row.zillow ? (
                        <CheckCircle2 className="w-5 h-5 text-slate-400 mx-auto" />
                      ) : (
                        <span className="text-red-400">✗</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {row.followup ? (
                        <CheckCircle2 className="w-5 h-5 text-slate-400 mx-auto" />
                      ) : (
                        <span className="text-red-400">✗</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {row.realgeeks ? (
                        <CheckCircle2 className="w-5 h-5 text-slate-400 mx-auto" />
                      ) : (
                        <span className="text-red-400">✗</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section id="pricing" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Save 75% or More
            </h2>
            <p className="text-xl text-slate-400">
              Same features. Better AI. Fraction of the price.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="px-6 py-4 text-left text-slate-400">Platform</th>
                  <th className="px-6 py-4 text-center text-slate-400">Monthly Price</th>
                  <th className="px-6 py-4 text-center text-slate-400">Setup Fee</th>
                  <th className="px-6 py-4 text-center text-slate-400">Contract</th>
                </tr>
              </thead>
              <tbody>
                {pricingComparison.map((comp, i) => (
                  <tr 
                    key={i} 
                    className={`border-b border-slate-700/50 ${
                      comp.name === 'CravKey' ? 'bg-emerald-500/10' : ''
                    }`}
                  >
                    <td className={`px-6 py-4 font-semibold ${
                      comp.name === 'CravKey' ? 'text-emerald-400' : 'text-white'
                    }`}>
                      {comp.name}
                      {comp.name === 'CravKey' && (
                        <span className="ml-2 text-xs bg-emerald-500 text-white px-2 py-0.5 rounded">BEST VALUE</span>
                      )}
                    </td>
                    <td className={`px-6 py-4 text-center ${
                      comp.name === 'CravKey' ? 'text-emerald-400 font-bold' : 'text-slate-300'
                    }`}>
                      {comp.price}
                    </td>
                    <td className={`px-6 py-4 text-center ${
                      comp.setup === 'FREE' ? 'text-emerald-400' : 'text-slate-300'
                    }`}>
                      {comp.setup}
                    </td>
                    <td className={`px-6 py-4 text-center ${
                      comp.contract === 'Month-to-month' ? 'text-emerald-400' : 
                      comp.contract.includes('referral') ? 'text-red-400' : 'text-slate-300'
                    }`}>
                      {comp.contract}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="https://cravkey.com/pricing"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-xl transition"
            >
              See Full Pricing Details <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-2 mb-6">
              <HeartHandshake className="w-4 h-4 text-violet-400" />
              <span className="text-violet-400 text-sm font-medium">Serve Your Community</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              20 Social Impact Modules
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Specialized tools for serving underserved communities. Each module includes 
              custom workflows, resources, and AI training.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {socialImpactModules.map((module) => (
              <span 
                key={module}
                className="px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-300 text-sm"
              >
                {module}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of real estate professionals who switched and never looked back. 
            Start your 14-day free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://cravkey.com/signup"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-slate-100 transition"
            >
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="https://cravkey.com/demo"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold py-4 px-8 rounded-xl text-lg hover:bg-white/20 transition border border-white/20"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">CravProperty</span>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                The complete real estate technology suite. AI-powered tools for 
                realtors, property managers, and home buyers.
              </p>
              <p className="text-slate-500 text-xs">
                Powered by{' '}
                <a href="https://craudiovizai.com" className="text-emerald-400 hover:text-emerald-300">
                  CR AudioViz AI
                </a>
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Apps</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://cravkey.com" className="text-slate-400 hover:text-white">CravKey</a></li>
                <li><a href="https://zoyzy.com" className="text-slate-400 hover:text-white">Zoyzy</a></li>
                <li><a href="https://cravmanage.com" className="text-slate-400 hover:text-white">CravManage</a></li>
                <li><a href="https://rateunlock.com" className="text-slate-400 hover:text-white">RateUnlock</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://cravkey.com/pricing" className="text-slate-400 hover:text-white">Pricing</a></li>
                <li><a href="https://cravkey.com/tools" className="text-slate-400 hover:text-white">Free Tools</a></li>
                <li><a href="https://cravkey.com/help" className="text-slate-400 hover:text-white">Help Center</a></li>
                <li><a href="https://cravkey.com/demo" className="text-slate-400 hover:text-white">Schedule Demo</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://craudiovizai.com/about" className="text-slate-400 hover:text-white">About</a></li>
                <li><a href="https://craudiovizai.com/contact" className="text-slate-400 hover:text-white">Contact</a></li>
                <li><a href="https://craudiovizai.com/privacy" className="text-slate-400 hover:text-white">Privacy</a></li>
                <li><a href="https://craudiovizai.com/terms" className="text-slate-400 hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            © 2025 CR AudioViz AI, LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
