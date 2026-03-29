import { useState } from 'react';
import { Menu, X, ArrowRight, Mail, MapPin, BookOpen, Users, Lightbulb, Target, Star } from 'lucide-react';

const NAV_LINKS = ['Home', 'About', 'Studios', 'Knowledge Hub', 'Contact'];

function Navbar({ currentPage, setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-900 text-stone-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => setCurrentPage('Home')} className="text-xl font-bold tracking-widest text-amber-400">
          RANKINE LAB
        </button>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => setCurrentPage(link)}
              className={`text-sm font-medium tracking-wide transition-colors ${currentPage === link ? 'text-amber-400' : 'text-stone-300 hover:text-amber-400'}`}>
              {link.toUpperCase()}
            </button>
          ))}
          <button onClick={() => setCurrentPage('Contact')}
            className="px-4 py-2 bg-amber-600 text-white text-sm font-semibold hover:bg-amber-500 transition-colors">
            Register Interest
          </button>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-stone-300">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-stone-800 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => { setCurrentPage(link); setMenuOpen(false); }}
              className={`text-sm font-medium text-left ${currentPage === link ? 'text-amber-400' : 'text-stone-300'}`}>
              {link.toUpperCase()}
            </button>
          ))}
          <button onClick={() => { setCurrentPage('Contact'); setMenuOpen(false); }}
            className="px-4 py-2 bg-amber-600 text-white text-sm font-semibold w-full">
            Register Interest
          </button>
        </div>
      )}
    </nav>
  );
}

function Footer({ setCurrentPage }) {
  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <p className="text-2xl font-bold text-amber-400 mb-4 tracking-widest">RANKINE LAB</p>
            <p className="text-sm leading-relaxed mb-6">A responsible AI innovation lab grounded in local realities, built for human-centred futures.</p>
            <p className="text-xs text-stone-500">© 2026 Rankine Lab. All rights reserved.</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-stone-200 mb-4 uppercase tracking-wider">Navigate</p>
            {NAV_LINKS.map(link => (
              <button key={link} onClick={() => setCurrentPage(link)}
                className="block text-sm text-stone-400 hover:text-amber-400 mb-2 transition-colors text-left">{link}</button>
            ))}
          </div>
          <div>
            <p className="text-sm font-semibold text-stone-200 mb-4 uppercase tracking-wider">Contact</p>
            <p className="text-sm mb-2">hello@rankinelab.com</p>
            <p className="text-sm mb-4">[City, Country]</p>
            <button onClick={() => setCurrentPage('Contact')}
              className="px-4 py-2 border border-amber-600 text-amber-400 text-sm hover:bg-amber-600 hover:text-white transition-colors">
              Register Interest
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HomePage({ setCurrentPage }) {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen bg-stone-900 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-amber-600 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-amber-900 blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 relative z-10">
          <div className="max-w-3xl">
            <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-6">
              Responsible AI · Human-Centred · Locally Grounded
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-stone-50 leading-tight mb-8">
              AI that works<br />
              <span className="text-amber-400">for people,</span><br />
              not just systems.
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed mb-10 max-w-2xl">
              Rankine Lab is an independent AI research and innovation lab developing responsible, locally-grounded AI solutions — built at the intersection of technology, society, and place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => setCurrentPage('About')}
                className="px-8 py-4 bg-amber-600 text-white font-semibold hover:bg-amber-500 transition-colors flex items-center gap-2 justify-center">
                Discover the Lab <ArrowRight size={18} />
              </button>
              <button onClick={() => setCurrentPage('Contact')}
                className="px-8 py-4 border border-stone-500 text-stone-300 font-semibold hover:border-amber-400 hover:text-amber-400 transition-colors">
                Register Interest
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-amber-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-amber-700 text-xs font-bold tracking-widest uppercase mb-4">Who We Are</p>
              <h2 className="text-4xl font-bold text-stone-900 mb-6 leading-tight">
                An AI lab rooted in purpose, not performance.
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                Rankine Lab was founded by two pioneers who believe the most consequential AI work happens not in Silicon Valley, but in the places AI has yet to serve well. We combine rigorous research with practical innovation to develop tools, methods, and programmes that are genuinely useful — and genuinely responsible.
              </p>
              <p className="text-stone-600 leading-relaxed mb-8">
                Our work spans three studios — research, applied innovation, and learning — forming an integrated ecosystem designed to advance AI that is equitable, contextual, and accountable.
              </p>
              <button onClick={() => setCurrentPage('About')}
                className="text-amber-700 font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                Meet the Founders <ArrowRight size={16} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Target size={26} />, label: 'Mission-Driven', desc: 'Every project anchored in real-world impact' },
                { icon: <Users size={26} />, label: 'Human-Centred', desc: 'People and communities at the core of our method' },
                { icon: <Lightbulb size={26} />, label: 'Locally Grounded', desc: 'Context-aware solutions, not copy-paste models' },
                { icon: <BookOpen size={26} />, label: 'Open Knowledge', desc: 'Building shared capacity across sectors' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 border-l-4 border-amber-600 shadow-sm">
                  <div className="text-amber-700 mb-3">{item.icon}</div>
                  <p className="font-bold text-stone-900 mb-1 text-sm">{item.label}</p>
                  <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rankine Method */}
      <section className="py-24 bg-stone-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">Our Approach</p>
            <h2 className="text-4xl font-bold text-stone-50 mb-6">The Rankine Method</h2>
            <p className="text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
              A proprietary framework for responsible AI development that centres local knowledge, community accountability, and long-term systemic thinking.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Root', desc: 'We begin with deep context analysis — understanding the ecosystem, actors, and lived realities before any solution is proposed.' },
              { step: '02', title: 'Build', desc: 'Co-designed with communities and stakeholders, solutions are developed iteratively with accountability built into every layer.' },
              { step: '03', title: 'Sustain', desc: 'Every project is designed for local ownership and long-term sustainability — capability transfer, not dependency.' },
            ].map((item, i) => (
              <div key={i} className="border border-stone-700 p-8 hover:border-amber-600 transition-colors group">
                <p className="text-amber-400 text-5xl font-bold mb-4 opacity-40 group-hover:opacity-80 transition-opacity">{item.step}</p>
                <h3 className="text-xl font-bold text-stone-50 mb-3">{item.title}</h3>
                <p className="text-stone-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => setCurrentPage('About')}
              className="px-8 py-4 border border-amber-500 text-amber-400 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-colors font-semibold">
              Learn More About Our Method
            </button>
          </div>
        </div>
      </section>

      {/* Three Studios */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-700 text-xs font-bold tracking-widest uppercase mb-4">What We Do</p>
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Three Studios. One Mission.</h2>
            <p className="text-lg text-stone-500 max-w-xl mx-auto">
              Each studio advances a different dimension of responsible AI — and together they form a living ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Research Studio', tag: 'Inquiry', desc: 'Original research on AI ethics, policy, and local adaptation. We produce papers, frameworks, and evidence-based insights that inform practice across sectors.' },
              { name: 'Innovation Studio', tag: 'Application', desc: 'Applied AI projects and partnerships with organisations ready to build responsibly. From pilots to deployment, we co-create solutions grounded in the Rankine Method.' },
              { name: 'Learning Studio', tag: 'Capacity', desc: 'Programmes, workshops, and immersive learning experiences for individuals and organisations building AI literacy and responsible practice.' },
            ].map((studio, i) => (
              <div key={i} className="bg-white border border-stone-200 p-8 group hover:border-amber-400 transition-colors">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full uppercase tracking-wider">{studio.tag}</span>
                <h3 className="text-xl font-bold text-stone-900 mt-5 mb-3">{studio.name}</h3>
                <p className="text-stone-500 leading-relaxed mb-6 text-sm">{studio.desc}</p>
                <button onClick={() => setCurrentPage('Studios')}
                  className="text-amber-700 text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Strip */}
      <section className="py-20 bg-amber-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <p className="text-amber-200 text-xs font-bold tracking-widest uppercase mb-3">The Pioneers</p>
              <h2 className="text-3xl font-bold text-white mb-4">Built by two practitioners who've been in the field.</h2>
              <p className="text-amber-100 leading-relaxed text-sm">
                Rankine Lab was co-founded by [Founder 1] and [Founder 2], both with deep backgrounds spanning AI research, community development, and responsible technology. Their combined experience across [sectors and regions] informs every piece of work the lab produces.
              </p>
              <button onClick={() => setCurrentPage('About')}
                className="mt-6 px-6 py-3 bg-white text-amber-800 font-semibold hover:bg-amber-50 transition-colors text-sm">
                Meet the Founders
              </button>
            </div>
            <div className="flex gap-4">
              {['[Founder 1]', '[Founder 2]'].map((name, i) => (
                <div key={i} className="bg-amber-700 p-6 text-center w-36">
                  <div className="w-14 h-14 bg-amber-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Users size={22} className="text-amber-100" />
                  </div>
                  <p className="text-white font-semibold text-xs">{name}</p>
                  <p className="text-amber-200 text-xs mt-1">Co-Founder</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Hub Teaser */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-amber-700 text-xs font-bold tracking-widest uppercase mb-3">Knowledge Hub</p>
              <h2 className="text-4xl font-bold text-stone-900">Thinking out loud.</h2>
            </div>
            <button onClick={() => setCurrentPage('Knowledge Hub')}
              className="text-amber-700 font-semibold flex items-center gap-2 hover:gap-3 transition-all shrink-0 text-sm">
              View All <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { tag: 'Essay', title: 'Why Local Context Is Non-Negotiable in AI Deployment', date: 'March 2026' },
              { tag: 'Research Note', title: 'The Ethics of AI in Under-Resourced Healthcare Settings', date: 'February 2026' },
              { tag: 'Perspective', title: 'Rethinking Ownership: Who Benefits When AI Arrives?', date: 'January 2026' },
            ].map((post, i) => (
              <div key={i} className="bg-white border border-stone-200 p-6 hover:border-amber-400 transition-colors cursor-pointer group">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">{post.tag}</span>
                <h3 className="text-stone-900 font-bold mt-3 mb-4 leading-snug group-hover:text-amber-700 transition-colors">{post.title}</h3>
                <p className="text-stone-400 text-xs">{post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-stone-50 mb-6">Ready to build responsibly?</h2>
          <p className="text-stone-400 text-lg mb-10">
            Whether you're a researcher, an organisation, or an individual learner — there's a place for you in the Rankine Lab ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setCurrentPage('Contact')}
              className="px-8 py-4 bg-amber-600 text-white font-semibold hover:bg-amber-500 transition-colors">
              Register Your Interest
            </button>
            <button onClick={() => setCurrentPage('Studios')}
              className="px-8 py-4 border border-stone-600 text-stone-300 font-semibold hover:border-amber-500 hover:text-amber-400 transition-colors">
              Explore the Studios
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutPage({ setCurrentPage }) {
  return (
    <div>
      <section className="pt-32 pb-20 bg-stone-900">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">About the Lab</p>
          <h1 className="text-5xl font-bold text-stone-50 mb-6 max-w-2xl leading-tight">A lab built on conviction, not convention.</h1>
          <p className="text-xl text-stone-300 max-w-2xl leading-relaxed">Rankine Lab exists because responsible AI development demands more than good intentions — it demands rigour, accountability, and deep respect for context.</p>
        </div>
      </section>

      <section className="py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-amber-700 text-xs font-bold tracking-widest uppercase mb-4">Mission</p>
              <h2 className="text-3xl font-bold text-stone-900 mb-4">Why we exist</h2>
              <p className="text-stone-600 leading-relaxed mb-4">To develop and deploy AI systems that are responsible, inclusive, and genuinely useful to the communities they serve — particularly those historically excluded from the benefits of emerging technology.</p>
              <p className="text-stone-600 leading-relaxed">We believe AI can be a profound force for equity, but only when developed with the same rigour and accountability we would demand of any other powerful system.</p>
            </div>
            <div>
              <p className="text-amber-700 text-xs font-bold tracking-widest uppercase mb-4">Vision</p>
              <h2 className="text-3xl font-bold text-stone-900 mb-4">Where we're headed</h2>
              <p className="text-stone-600 leading-relaxed mb-4">A world where AI advances are shared equitably — where the people most affected by AI systems are the same people who shape, govern, and benefit from them.</p>
              <p className="text-stone-600 leading-relaxed">Rankine Lab is building an ecosystem of research, practice, and learning that makes responsible AI the default, not the exception.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rankine Method */}
      <section className="py-20 bg-stone-800">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">Our Framework</p>
          <h2 className="text-4xl font-bold text-stone-50 mb-4">The Rankine Method</h2>
          <p className="text-stone-300 text-lg max-w-2xl mb-12 leading-relaxed">The Rankine Method is the intellectual core of the lab — a proprietary and evolving framework guiding how we approach AI research, development, and deployment.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Contextual Grounding', desc: 'Before any technical solution, we conduct a thorough analysis of the environment — social, political, economic, and historical. No context-free interventions.' },
              { title: 'Participatory Design', desc: 'Communities and end-users are active partners in design, not passive recipients. Co-creation is non-negotiable at every stage.' },
              { title: 'Iterative Accountability', desc: 'Responsibility is built into each development cycle, not appended at the end. We fail early, learn continuously, and document honestly.' },
              { title: 'Capability Transfer', desc: 'Every engagement is designed to build local capacity and ownership. We exit projects as partners who leave capacity behind, not dependencies.' },
            ].map((item, i) => (
              <div key={i} className="bg-stone-700 p-8 border-l-4 border-amber-500">
                <h3 className="text-stone-50 font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-stone-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-amber-700 text-xs font-bold tracking-widest uppercase mb-4">The Pioneers</p>
          <h2 className="text-4xl font-bold text-stone-900 mb-12">Meet the co-founders.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                name: '[Founder Name 1]', role: 'Co-Founder & [Title]',
                bio1: '[Founder 1] brings over [X] years of experience in [field/sector]. Before founding Rankine Lab, they led [notable project or organisation], where they [key achievement]. Their work has shaped [impact area] across [regions or sectors].',
                bio2: 'Their research interests include [topic 1], [topic 2], and the intersection of AI governance and [relevant field]. They hold [qualifications] from [institutions].',
                tags: ['AI Ethics', 'Policy', '[Expertise]'],
              },
              {
                name: '[Founder Name 2]', role: 'Co-Founder & [Title]',
                bio1: '[Founder 2] is a practitioner with a background spanning [field 1] and [field 2]. Prior to Rankine Lab, they built and led [project or initiative], achieving [outcome] across [context].',
                bio2: 'They are recognised for their work in [area] and have contributed to [publication, organisation, or policy process]. Their academic background includes [qualifications] from [institutions].',
                tags: ['Innovation', 'Research', '[Expertise]'],
              },
            ].map((founder, i) => (
              <div key={i} className="bg-white border border-stone-200 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                    <Users size={28} className="text-amber-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">{founder.name}</h3>
                    <p className="text-amber-700 text-sm font-medium">{founder.role}</p>
                  </div>
                </div>
                <p className="text-stone-600 leading-relaxed mb-3 text-sm">{founder.bio1}</p>
                <p className="text-stone-600 leading-relaxed mb-6 text-sm">{founder.bio2}</p>
                <div className="flex flex-wrap gap-2">
                  {founder.tags.map((tag, j) => (
                    <span key={j} className="text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-amber-800">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-amber-200 text-xs font-bold tracking-widest uppercase mb-4">What We Stand For</p>
          <h2 className="text-4xl font-bold text-white mb-12">Our values.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { value: 'Responsibility', desc: 'We own the consequences of the work we produce.' },
              { value: 'Rigour', desc: 'We hold ourselves to the highest standards of intellectual honesty.' },
              { value: 'Rootedness', desc: 'We build for and with the places we work in.' },
              { value: 'Openness', desc: 'We share knowledge and learn in public.' },
              { value: 'Equity', desc: 'The distribution of AI benefits matters as much as the technology itself.' },
              { value: 'Courage', desc: 'We name difficult truths, especially when it is uncomfortable.' },
            ].map((item, i) => (
              <div key={i} className="border border-amber-700 p-6 hover:bg-amber-700 transition-colors">
                <h3 className="text-white font-bold text-lg mb-2">{item.value}</h3>
                <p className="text-amber-200 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-stone-50 mb-4">Want to work with us?</h2>
          <p className="text-stone-400 mb-8">We're open to research collaborations, partnerships, and conversations with people who share our values.</p>
          <button onClick={() => setCurrentPage('Contact')}
            className="px-8 py-4 bg-amber-600 text-white font-semibold hover:bg-amber-500 transition-colors">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}

function StudiosPage({ setCurrentPage }) {
  const [activeStudio, setActiveStudio] = useState(0);
  const studios = [
    {
      name: 'Research Studio', tag: 'Inquiry & Evidence',
      desc: 'The Research Studio produces original, rigorous, and publicly accessible research on AI development, ethics, governance, and local adaptation. We ask the questions that are not yet being asked.',
      work: [
        { title: '[Research Project Title]', status: 'Ongoing', type: 'Research Paper' },
        { title: '[Working Paper Title]', status: 'Published', type: 'Working Paper' },
        { title: '[Policy Brief Title]', status: 'Forthcoming', type: 'Policy Brief' },
      ],
      focus: ['AI Ethics & Governance', 'Local AI Adaptation', 'Participatory Research Methods', 'AI Policy Frameworks'],
    },
    {
      name: 'Innovation Studio', tag: 'Application & Build',
      desc: 'The Innovation Studio is our applied arm — where the Rankine Method meets real-world challenges. We partner with organisations, governments, and communities to design, pilot, and scale AI-powered solutions responsibly.',
      work: [
        { title: '[Pilot Project Name]', status: 'Active', type: 'Pilot' },
        { title: '[Partnership Project Name]', status: 'In Development', type: 'Partnership' },
        { title: '[Innovation Project Name]', status: 'Completed', type: 'Case Study' },
      ],
      focus: ['Responsible AI Deployment', 'Community Co-Design', 'Technology Governance', 'Impact Assessment'],
    },
    {
      name: 'Learning Studio', tag: 'Capacity & Growth',
      desc: 'The Learning Studio builds AI literacy and responsible practice capacity for individuals, teams, and organisations. Our programmes range from short immersive workshops to longer practitioner journeys.',
      work: [
        { title: '[Programme Name]', status: 'Enrolling', type: 'Certificate Programme' },
        { title: '[Workshop Series Name]', status: 'Upcoming', type: 'Workshop Series' },
        { title: '[Community Learning]', status: 'Open', type: 'Learning Community' },
      ],
      focus: ['AI Literacy', 'Responsible Practice', 'Leadership Development', 'Organisational Learning'],
    },
  ];

  return (
    <div>
      <section className="pt-32 pb-20 bg-stone-900">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">Our Work</p>
          <h1 className="text-5xl font-bold text-stone-50 mb-6 max-w-2xl leading-tight">Three Studios.<br />One integrated mission.</h1>
          <p className="text-xl text-stone-300 max-w-2xl leading-relaxed">Research informs innovation. Innovation shapes learning. Learning feeds back into research. The three studios are designed to work as a living ecosystem.</p>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row gap-0 mb-12 border-b border-stone-200">
            {studios.map((studio, i) => (
              <button key={i} onClick={() => setActiveStudio(i)}
                className={`px-6 py-4 text-sm font-semibold text-left transition-colors border-b-2 ${activeStudio === i ? 'border-amber-600 text-amber-700 bg-amber-50' : 'border-transparent text-stone-500 hover:text-stone-800'}`}>
                {studio.name}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full uppercase tracking-wider">{studios[activeStudio].tag}</span>
              <h2 className="text-3xl font-bold text-stone-900 mt-5 mb-4">{studios[activeStudio].name}</h2>
              <p className="text-stone-600 leading-relaxed mb-8">{studios[activeStudio].desc}</p>
              <h3 className="font-bold text-stone-900 mb-4 text-sm uppercase tracking-wider">Current Work</h3>
              <div className="space-y-3">
                {studios[activeStudio].work.map((w, i) => (
                  <div key={i} className="flex items-center justify-between bg-white border border-stone-200 p-4 hover:border-amber-400 transition-colors">
                    <div>
                      <p className="font-semibold text-stone-900 text-sm">{w.title}</p>
                      <p className="text-xs text-stone-400 mt-1">{w.type}</p>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${w.status === 'Published' || w.status === 'Completed' || w.status === 'Open' ? 'bg-green-50 text-green-700' : w.status === 'Ongoing' || w.status === 'Active' || w.status === 'Enrolling' ? 'bg-amber-50 text-amber-700' : 'bg-stone-100 text-stone-500'}`}>
                      {w.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-amber-50 p-6 border-l-4 border-amber-600">
                <h3 className="font-bold text-stone-900 mb-4 text-sm uppercase tracking-wider">Focus Areas</h3>
                <div className="space-y-3">
                  {studios[activeStudio].focus.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-600 rounded-full shrink-0"></div>
                      <p className="text-stone-700 text-sm">{f}</p>
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={() => setCurrentPage('Contact')}
                className="w-full py-3 bg-amber-600 text-white font-semibold hover:bg-amber-500 transition-colors text-sm mt-4">
                Partner with this Studio
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-stone-50 mb-4">Interested in a collaboration?</h2>
          <p className="text-stone-400 mb-8">All three studios are open to partnerships, commissions, and research collaborations.</p>
          <button onClick={() => setCurrentPage('Contact')}
            className="px-8 py-4 bg-amber-600 text-white font-semibold hover:bg-amber-500 transition-colors">
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
}

function KnowledgeHubPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Essay', 'Research Note', 'Perspective', 'Policy Brief'];
  const articles = [
    { tag: 'Essay', title: 'Why Local Context Is Non-Negotiable in AI Deployment', date: 'March 2026', author: '[Author Name]', excerpt: 'Exploring why AI systems built without deep contextual grounding consistently underperform — and in the worst cases, cause harm.' },
    { tag: 'Research Note', title: 'The Ethics of AI in Under-Resourced Healthcare Settings', date: 'February 2026', author: '[Author Name]', excerpt: 'A preliminary research note on the ethical complexities that arise when deploying AI diagnostic tools in resource-constrained health systems.' },
    { tag: 'Perspective', title: 'Rethinking Ownership: Who Benefits When AI Arrives?', date: 'January 2026', author: '[Author Name]', excerpt: 'The distribution of AI benefits is not inevitable — it is a choice. This piece argues for a more explicit conversation about ownership and access.' },
    { tag: 'Policy Brief', title: 'Towards a Responsible AI Governance Framework for [Region]', date: 'January 2026', author: '[Author Name]', excerpt: 'A policy-oriented brief outlining the key governance mechanisms that should accompany AI deployment at scale in [context].' },
    { tag: 'Essay', title: 'The Human in Human-Centred AI: A Critical Examination', date: 'December 2025', author: '[Author Name]', excerpt: 'What does "human-centred" actually mean in practice, and is the term being used to obscure more than it reveals?' },
    { tag: 'Research Note', title: 'Participatory Methods in AI Research: A Review', date: 'November 2025', author: '[Author Name]', excerpt: 'A review of emerging participatory research methods being applied to AI development, with reflections on limitations and potential.' },
  ];
  const filtered = activeFilter === 'All' ? articles : articles.filter(a => a.tag === activeFilter);

  return (
    <div>
      <section className="pt-32 pb-20 bg-stone-900">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">Knowledge Hub</p>
          <h1 className="text-5xl font-bold text-stone-50 mb-6 max-w-2xl leading-tight">Ideas, evidence, and honest thinking.</h1>
          <p className="text-xl text-stone-300 max-w-2xl leading-relaxed">The Knowledge Hub is where Rankine Lab shares research, reflections, and perspectives on responsible AI — openly and without jargon.</p>
        </div>
      </section>
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 text-sm font-semibold transition-colors rounded-full ${activeFilter === f ? 'bg-amber-600 text-white' : 'bg-white border border-stone-200 text-stone-600 hover:border-amber-400'}`}>
                {f}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <div key={i} className="bg-white border border-stone-200 p-6 hover:border-amber-400 transition-colors cursor-pointer group">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">{article.tag}</span>
                <h3 className="text-stone-900 font-bold mt-3 mb-3 leading-snug group-hover:text-amber-700 transition-colors">{article.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <p className="text-stone-400 text-xs">{article.author} · {article.date}</p>
                  <ArrowRight size={14} className="text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', org: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div>
      <section className="pt-32 pb-20 bg-stone-900">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">Get in Touch</p>
          <h1 className="text-5xl font-bold text-stone-50 mb-6 max-w-2xl leading-tight">Let's start a conversation.</h1>
          <p className="text-xl text-stone-300 max-w-xl leading-relaxed">Whether you're interested in research collaboration, a programme, or simply following our work — we'd love to hear from you.</p>
        </div>
      </section>
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-6">Contact Information</h2>
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-amber-600 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-stone-800 text-sm">Email</p>
                    <p className="text-stone-500 text-sm">hello@rankinelab.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-amber-600 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-stone-800 text-sm">Location</p>
                    <p className="text-stone-500 text-sm">[City, Country]</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-amber-50 border-l-4 border-amber-600">
                <p className="font-bold text-stone-900 mb-3 text-sm">Ways to engage</p>
                {['Research collaboration', 'Innovation partnership', 'Learning programmes', 'Speaking & events', 'Media & press'].map((item, i) => (
                  <p key={i} className="text-sm text-stone-600 mb-1">→ {item}</p>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              {submitted ? (
                <div className="bg-white border border-stone-200 p-16 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star size={28} className="text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">Thank you.</h3>
                  <p className="text-stone-500">We've received your message and will be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-stone-200 p-8">
                  <h2 className="text-2xl font-bold text-stone-900 mb-6">Register Your Interest</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-2 uppercase tracking-wider">Full Name *</label>
                      <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-stone-300 px-4 py-3 text-stone-900 text-sm focus:outline-none focus:border-amber-500"
                        placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-2 uppercase tracking-wider">Email Address *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-stone-300 px-4 py-3 text-stone-900 text-sm focus:outline-none focus:border-amber-500"
                        placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-xs font-bold text-stone-700 mb-2 uppercase tracking-wider">Organisation</label>
                    <input type="text" value={form.org} onChange={e => setForm({ ...form, org: e.target.value })}
                      className="w-full border border-stone-300 px-4 py-3 text-stone-900 text-sm focus:outline-none focus:border-amber-500"
                      placeholder="Where do you work or study?" />
                  </div>
                  <div className="mb-6">
                    <label className="block text-xs font-bold text-stone-700 mb-2 uppercase tracking-wider">Area of Interest *</label>
                    <select required value={form.interest} onChange={e => setForm({ ...form, interest: e.target.value })}
                      className="w-full border border-stone-300 px-4 py-3 text-stone-900 text-sm focus:outline-none focus:border-amber-500 bg-white">
                      <option value="">Select an area</option>
                      <option>Research Collaboration</option>
                      <option>Innovation Partnership</option>
                      <option>Learning Programmes</option>
                      <option>Speaking & Events</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div className="mb-8">
                    <label className="block text-xs font-bold text-stone-700 mb-2 uppercase tracking-wider">Your Message</label>
                    <textarea rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-stone-300 px-4 py-3 text-stone-900 text-sm focus:outline-none focus:border-amber-500 resize-none"
                      placeholder="Tell us what you're working on or how you'd like to connect..." />
                  </div>
                  <button type="submit"
                    className="w-full py-4 bg-amber-600 text-white font-semibold hover:bg-amber-500 transition-colors">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function RankineLab() {
  const [currentPage, setCurrentPage] = useState('Home');
  const navigate = (page) => { setCurrentPage(page); window.scrollTo && window.scrollTo(0, 0); };
  const renderPage = () => {
    switch (currentPage) {
      case 'Home': return <HomePage setCurrentPage={navigate} />;
      case 'About': return <AboutPage setCurrentPage={navigate} />;
      case 'Studios': return <StudiosPage setCurrentPage={navigate} />;
      case 'Knowledge Hub': return <KnowledgeHubPage />;
      case 'Contact': return <ContactPage />;
      default: return <HomePage setCurrentPage={navigate} />;
    }
  };
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar currentPage={currentPage} setCurrentPage={navigate} />
      <main>{renderPage()}</main>
      <Footer setCurrentPage={navigate} />
    </div>
  );
}
