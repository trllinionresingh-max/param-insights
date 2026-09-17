import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  BarChart3,
  Binary,
  Bot,
  BrainCircuit,
  Braces,
  Check,
  ChevronRight,
  CircleGauge,
  Database,
  GitBranch,
  Layers3,
  LineChart as LineChartIcon,
  Menu,
  Microscope,
  Network,
  Radar,
  Scale,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Param Trading Hub | Quantitative Research" },
      { name: "description", content: "Quantitative research, intelligent systems and disciplined risk frameworks for systematic trading." },
      { property: "og:title", content: "Param Trading Hub | Quantitative Research" },
      { property: "og:description", content: "Research, AI and systematic trading tools built around data and disciplined risk." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const nav = ["Research", "Strategies", "Technology", "Risk", "Trading Lab", "Insights", "About"];

const equityData = [
  { m: "Jan", equity: 100, drawdown: 0 }, { m: "Feb", equity: 103, drawdown: -1.2 },
  { m: "Mar", equity: 101.5, drawdown: -2.8 }, { m: "Apr", equity: 106, drawdown: -0.5 },
  { m: "May", equity: 109, drawdown: -1.1 }, { m: "Jun", equity: 107, drawdown: -3.4 },
  { m: "Jul", equity: 112, drawdown: -0.8 }, { m: "Aug", equity: 116, drawdown: -0.3 },
  { m: "Sep", equity: 114, drawdown: -2.1 }, { m: "Oct", equity: 119, drawdown: -0.5 },
  { m: "Nov", equity: 121, drawdown: -1.4 }, { m: "Dec", equity: 125, drawdown: -0.2 },
];

const researchCards = [
  [LineChartIcon, "Market Research", "Analyze price, volume and market structure."],
  [Activity, "Signal Engineering", "Research systematic market signals."],
  [BrainCircuit, "Machine Learning", "Explore classification, regression and clustering."],
  [GitBranch, "Strategy Engineering", "Convert research ideas into systematic rules."],
  [BarChart3, "Backtesting", "Evaluate strategies using historical simulation."],
  [SlidersHorizontal, "Optimization", "Study robustness and parameter sensitivity."],
] as const;

const introductionCards: ReadonlyArray<readonly [LucideIcon, string, string]> = [
  [Microscope, "Quantitative Research", "Data-driven research and systematic strategy development."],
  [BrainCircuit, "Intelligent Systems", "AI, machine learning and computational tools for market research."],
  [ShieldCheck, "Risk Engineering", "Position sizing, exposure analysis, drawdown monitoring and disciplined system design."],
];

const aiMethods: ReadonlyArray<readonly [LucideIcon, string]> = [
  [BrainCircuit, "Machine Learning"], [Braces, "Feature Engineering"], [Binary, "Classification"],
  [TrendingUp, "Regression"], [Network, "Clustering"], [Target, "Pattern Research"],
];

const strategies = [
  ["Trend Following", "Directional", "H4 / Daily", "Volatility scaled", "Research"],
  ["Breakout", "Momentum", "H1 / H4", "ATR stop", "Simulation"],
  ["Moving Average", "Trend", "H4 / Daily", "Fixed fractional", "Research"],
  ["Mean Reversion", "Counter-trend", "M30 / H1", "Z-score limits", "Simulation"],
  ["RSI", "Oscillator", "H1 / H4", "Defined stop", "Research"],
  ["Statistical Strategies", "Relative value", "Daily", "Portfolio limits", "Research"],
];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [strategy, setStrategy] = useState(0);
  const [market, setMarket] = useState("XAUUSD");
  const [timeframe, setTimeframe] = useState("H1");
  const [botStrategy, setBotStrategy] = useState("Trend");
  const [riskMode, setRiskMode] = useState("Moderate");
  const [simulation, setSimulation] = useState("Ready for configuration");
  const [balance, setBalance] = useState(10000);
  const [riskPercent, setRiskPercent] = useState(1);
  const [entry, setEntry] = useState(2000);
  const [stop, setStop] = useState(1980);
  const selectedStrategy = strategies[strategy] ?? ["Trend Following", "Directional", "H4 / Daily", "Volatility scaled", "Research"];

  const risk = useMemo(() => {
    const amount = Math.max(0, balance * (riskPercent / 100));
    const distance = Math.abs(entry - stop);
    const size = distance > 0 ? amount / distance : 0;
    return { amount, size, reward: distance > 0 ? 2 : 0 };
  }, [balance, riskPercent, entry, stop]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 lg:px-10">
          <a href="#top" className="font-display text-sm font-semibold tracking-[0.12em] lg:text-base">PARAM <span className="text-primary">TRADING HUB</span></a>
          <nav className="hidden items-center gap-6 xl:flex" aria-label="Main navigation">
            {nav.map((item) => <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground">{item}</a>)}
          </nav>
          <Button asChild size="sm" className="hidden md:inline-flex"><a href="#trading-lab">Open research lab <ArrowRight className="size-3.5" /></a></Button>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-5 md:hidden">{nav.map((item) => <a onClick={() => setMenuOpen(false)} key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="block border-b border-border py-3 text-sm text-muted-foreground">{item}</a>)}</nav>}
      </header>

      <main id="top">
        <section className="section-grid relative flex min-h-[92vh] items-center overflow-hidden border-b border-border pt-16">
          <div className="mx-auto grid w-full max-w-[1440px] items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-24">
            <div className="relative z-10 max-w-3xl">
              <Eyebrow>Quantitative Research <i /> AI <i /> Systematic Trading</Eyebrow>
              <h1 className="mt-7 max-w-4xl font-display text-[clamp(2.8rem,6vw,6.6rem)] font-medium leading-[.96] text-balance">Engineering Intelligence <span className="text-primary">for the Markets.</span></h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground lg:text-lg">Quantitative research, intelligent systems and disciplined risk frameworks for the next generation of systematic trading.</p>
              <div className="mt-9 flex flex-wrap gap-3"><Button asChild><a href="#research">Explore research <ArrowDown className="size-4" /></a></Button><Button asChild variant="outline"><a href="#trading-lab">Enter trading lab</a></Button></div>
              <div className="mt-14 flex items-center gap-8 border-t border-border pt-5 font-mono text-[10px] uppercase text-muted-foreground"><span>Research environment</span><span className="flex items-center gap-2 text-primary"><span className="size-1.5 rounded-full bg-primary" /> Systems online</span></div>
            </div>
            <MarketVisual />
          </div>
        </section>

        <div className="border-b border-border bg-surface">
          <div className="mx-auto flex max-w-[1440px] flex-wrap justify-center divide-x divide-border px-5 lg:px-10">
            {["Quant research", "Systematic strategies", "AI & machine learning", "Risk engineering", "Backtesting"].map((x) => <span key={x} className="px-5 py-4 font-mono text-[9px] uppercase text-muted-foreground lg:px-10">{x}</span>)}
          </div>
        </div>

        <section id="research" className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10 lg:py-36">
          <SectionHeading index="01" eyebrow="Research mandate" title="Built Around Research. Driven by Data." copy="Modern markets generate enormous amounts of information. Param Trading Hub explores quantitative methods, computational systems and artificial intelligence to turn complex market information into structured research." />
          <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
            {introductionCards.map(([Icon, title, copy]) => <article key={title} className="group bg-background p-8 transition-colors hover:bg-surface-raised lg:p-10"><Icon className="size-6 text-primary" strokeWidth={1.4} /><h3 className="mt-14 font-display text-xl">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{copy}</p><div className="mt-8 h-px w-8 bg-gold transition-all group-hover:w-16" /></article>)}
          </div>
        </section>

        <section id="technology" className="border-y border-border bg-surface">
          <div className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10 lg:py-32">
            <SectionHeading index="02" eyebrow="Research infrastructure" title="Quant Research Lab" copy="A modular environment for turning market observations into testable, measurable systems." />
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {researchCards.map(([Icon, title, copy], i) => <article key={title} className="glass-panel group rounded-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 lg:p-8"><div className="flex items-start justify-between"><span className="grid size-10 place-items-center rounded-sm border border-border bg-background"><Icon className="size-5 text-primary" strokeWidth={1.4} /></span><span className="font-mono text-[9px] text-muted-foreground">0{i + 1}</span></div><h3 className="mt-8 font-display text-lg">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p></article>)}
            </div>
          </div>
        </section>

        <Architecture />

        <section id="strategies" className="border-y border-border bg-surface py-24 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <SectionHeading index="04" eyebrow="Systematic methodologies" title="Strategy Research" copy="Compare research frameworks by their signal structure, intended horizon and risk methodology." />
            <div className="mt-14 grid gap-6 lg:grid-cols-[.78fr_1.22fr]">
              <div className="space-y-2">{strategies.map((s, i) => <button key={s[0]} onClick={() => setStrategy(i)} className={cn("flex w-full items-center justify-between rounded-sm border px-5 py-4 text-left transition-colors", i === strategy ? "border-primary/50 bg-primary/10 text-foreground" : "border-border bg-background text-muted-foreground hover:bg-accent")}><span className="text-sm font-medium">{s[0]}</span><ChevronRight className="size-4" /></button>)}</div>
              <article className="glass-panel rounded-sm p-6 lg:p-10">
                <div className="flex items-center justify-between"><div><span className="font-mono text-[10px] uppercase text-primary">Selected research model</span><h3 className="mt-3 font-display text-3xl">{selectedStrategy[0]}</h3></div><Radar className="size-10 text-primary" strokeWidth={1} /></div>
                <div className="my-10 grid grid-cols-2 gap-px bg-border sm:grid-cols-4">{["Strategy Type", "Timeframe", "Risk Model", "Research Status"].map((label, i) => <div key={label} className="bg-background p-4"><span className="font-mono text-[9px] uppercase text-muted-foreground">{label}</span><p className="mt-2 text-xs text-foreground">{selectedStrategy[i + 1]}</p></div>)}</div>
                <p className="max-w-xl text-sm leading-7 text-muted-foreground">A configurable research specification for hypothesis testing, robustness analysis and historical simulation. No live performance is represented.</p>
                <Button className="mt-8" onClick={() => document.querySelector("#trading-lab")?.scrollIntoView()}>Analyze strategy <ArrowRight className="size-4" /></Button>
              </article>
            </div>
          </div>
        </section>

        <section id="trading-lab" className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10 lg:py-36">
          <SectionHeading index="05" eyebrow="Simulation environment" title="Backtesting Terminal" copy="A transparent demonstration of how systematic research can be inspected across return and drawdown dimensions." />
          <div className="mt-14 overflow-hidden rounded-sm border border-border bg-card">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4"><span className="font-mono text-xs uppercase">PTH / Research Terminal</span><Badge>Demo / illustrative data</Badge></div>
            <div className="grid lg:grid-cols-[240px_1fr]">
              <div className="grid grid-cols-2 border-b border-border lg:grid-cols-1 lg:border-b-0 lg:border-r">
                {["Starting Capital|$100,000", "Total Trades|184", "Win Rate|54.3%", "Profit Factor|1.42", "Maximum Drawdown|-7.8%", "Risk / Reward|1 : 2"].map((x) => { const [a,b] = x.split("|"); return <div key={a} className="border-b border-border p-4"><span className="font-mono text-[9px] uppercase text-muted-foreground">{a}</span><p className="mt-1 font-mono text-base">{b}</p></div>; })}
              </div>
              <div className="min-h-[420px] p-4 lg:p-8">
                <div className="mb-5 flex items-center justify-between"><span className="font-mono text-[10px] uppercase text-muted-foreground">Illustrative equity index</span><span className="font-mono text-[10px] text-primary">100 → 125</span></div>
                <div className="h-[260px]"><ResponsiveContainer width="100%" height="100%"><AreaChart data={equityData}><defs><linearGradient id="equity" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--primary)" stopOpacity={0.3}/><stop offset="100%" stopColor="var(--primary)" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="var(--border)" vertical={false}/><XAxis dataKey="m" stroke="var(--muted-foreground)" tickLine={false} axisLine={false} fontSize={10}/><YAxis stroke="var(--muted-foreground)" tickLine={false} axisLine={false} fontSize={10} domain={[95, 130]}/><Tooltip contentStyle={{background:"var(--popover)", border:"1px solid var(--border)", fontSize:11}}/><Area type="monotone" dataKey="equity" stroke="var(--primary)" fill="url(#equity)" strokeWidth={2}/></AreaChart></ResponsiveContainer></div>
                <div className="mt-4 h-[80px]"><ResponsiveContainer width="100%" height="100%"><AreaChart data={equityData}><Area type="monotone" dataKey="drawdown" stroke="var(--gold)" fill="var(--gold)" fillOpacity={0.12}/><YAxis hide domain={[-5,0]}/></AreaChart></ResponsiveContainer></div>
              </div>
            </div>
            <p className="border-t border-border px-5 py-4 text-[11px] leading-5 text-muted-foreground">Past performance and simulated results do not guarantee future performance. All values displayed above are demo / illustrative data.</p>
          </div>
        </section>

        <BotLab market={market} setMarket={setMarket} timeframe={timeframe} setTimeframe={setTimeframe} strategy={botStrategy} setStrategy={setBotStrategy} risk={riskMode} setRisk={setRiskMode} simulation={simulation} run={() => { setSimulation("Running illustrative market simulation…"); window.setTimeout(() => setSimulation("Simulation complete — 2 signal windows identified"), 900); }} />

        <section id="risk" className="section-grid mx-auto max-w-[1440px] px-5 py-24 lg:px-10 lg:py-36">
          <SectionHeading index="07" eyebrow="Capital protection" title="Risk Is a System." copy="Risk is treated as an engineered constraint—defined before a position, monitored throughout, and measured across the portfolio." />
          <div className="mt-12 flex flex-wrap gap-2">{["Position Sizing", "Exposure Limits", "Stop Loss", "Drawdown Monitoring", "Risk / Reward", "Correlation", "Portfolio Risk"].map(x => <span key={x} className="rounded-sm border border-border bg-card px-4 py-3 font-mono text-[10px] uppercase text-muted-foreground">{x}</span>)}</div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-sm border border-border bg-card p-6 lg:p-8"><div className="mb-7 flex items-center gap-3"><CircleGauge className="text-primary"/><h3 className="font-display text-xl">Position risk calculator</h3></div><div className="grid gap-5 sm:grid-cols-2"><NumberInput label="Account balance" value={balance} onChange={setBalance}/><NumberInput label="Risk %" value={riskPercent} onChange={setRiskPercent} step="0.1"/><NumberInput label="Entry price" value={entry} onChange={setEntry}/><NumberInput label="Stop loss" value={stop} onChange={setStop}/></div></div>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">{[["Risk Amount", `$${risk.amount.toLocaleString(undefined,{maximumFractionDigits:2})}`],["Position Size", risk.size.toLocaleString(undefined,{maximumFractionDigits:3})],["Risk / Reward", `1 : ${risk.reward}`]].map(([a,b])=><div key={a} className="bg-surface p-6 sm:last:col-span-1"><span className="font-mono text-[9px] uppercase text-muted-foreground">{a}</span><p className="mt-4 font-mono text-xl text-primary">{b}</p></div>)}</div>
          </div>
        </section>

        <section className="border-y border-border bg-surface py-24 lg:py-36">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 lg:grid-cols-[1fr_1fr] lg:px-10">
            <div><Eyebrow>AI + Quantitative Methods</Eyebrow><h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight lg:text-6xl">Artificial Intelligence Meets Quantitative Research</h2><p className="mt-8 max-w-lg text-lg text-muted-foreground">AI methods can organize information, identify relationships and support research—without implying certainty about future markets.</p><p className="mt-12 font-mono text-sm uppercase text-primary">Research. Test. Validate. Iterate.</p></div>
            <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3">{aiMethods.map(([Icon,x])=><div key={x} className="bg-background p-5 lg:p-7"><Icon className="size-5 text-gold" strokeWidth={1.3}/><p className="mt-10 text-xs">{x}</p></div>)}</div>
          </div>
        </section>

        <Insights />

        <section id="about" className="border-t border-border bg-surface">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-36">
            <div><Eyebrow>Institutional mindset</Eyebrow><h2 className="mt-6 font-display text-4xl leading-tight lg:text-6xl">Technology.<br/>Research.<br/><span className="text-primary">Discipline.</span></h2></div>
            <div><p className="max-w-2xl text-xl leading-9 text-muted-foreground">Param Trading Hub is a research-focused environment exploring the intersection of quantitative methods, intelligent systems and disciplined trading-system design.</p><div className="mt-10 grid gap-px bg-border sm:grid-cols-2">{["Quantitative research","AI and machine learning","Trading-system development","Data analysis","Backtesting","Risk management","Systematic thinking"].map((x,i)=><div key={x} className="flex items-center gap-3 bg-surface py-4 text-sm"><span className="font-mono text-[9px] text-primary">0{i+1}</span>{x}</div>)}</div></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Eyebrow({children}:{children:React.ReactNode}) { return <div className="flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-primary">{children}</div>; }

function SectionHeading({index,eyebrow,title,copy}:{index:string;eyebrow:string;title:string;copy:string}) { return <div className="grid gap-7 lg:grid-cols-[120px_1fr_1fr]"><span className="font-mono text-[10px] text-gold">/{index}</span><div><Eyebrow>{eyebrow}</Eyebrow><h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight text-balance lg:text-5xl">{title}</h2></div><p className="max-w-xl self-end text-sm leading-7 text-muted-foreground lg:text-base">{copy}</p></div>; }

function Badge({children}:{children:React.ReactNode}) { return <span className="rounded-sm border border-primary/30 bg-primary/10 px-3 py-1.5 font-mono text-[9px] uppercase text-primary">{children}</span>; }

function MarketVisual() {
  return <div className="relative mx-auto aspect-[5/6] w-full max-w-[580px] overflow-hidden rounded-sm border border-border bg-card p-4 shadow-institutional lg:p-6"><div className="absolute inset-0 section-grid opacity-70"/><div className="relative flex items-center justify-between font-mono text-[9px] uppercase text-muted-foreground"><span>Global signal map</span><span className="text-primary">● Live model view</span></div><svg viewBox="0 0 520 610" className="relative mt-5 h-[calc(100%-2rem)] w-full" aria-label="Abstract quantitative market network"><g stroke="var(--border)" strokeWidth="1"><path d="M20 100H500M20 200H500M20 300H500M20 400H500M20 500H500"/><path d="M100 20V580M200 20V580M300 20V580M400 20V580"/></g><path d="M15 475 C75 450 92 485 140 425 S230 370 275 395 S350 315 405 335 S460 230 510 205" fill="none" stroke="var(--primary)" strokeWidth="2"/><path d="M15 485 C75 455 112 500 165 445 S255 420 300 380 S385 395 430 300 S475 285 510 255" fill="none" stroke="var(--gold)" strokeOpacity=".55"/><g stroke="var(--primary)" strokeOpacity=".5" strokeDasharray="6 6" style={{animation:"signal-flow 2s linear infinite"}}><path d="M92 190L200 265L320 145L445 245"/><path d="M68 390L180 315L295 455L420 370"/></g>{[[92,190],[200,265],[320,145],[445,245],[68,390],[180,315],[295,455],[420,370]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="10" fill="var(--background)" stroke="var(--primary)"/><circle cx={x} cy={y} r="3" fill="var(--primary)" style={{transformOrigin:`${x}px ${y}px`,animation:`pulse-node ${1.6+i*.12}s ease-in-out infinite`}}/></g>)}<text x="26" y="50" fill="var(--muted-foreground)" fontSize="10">MULTI-FACTOR SIGNAL SPACE</text><text x="375" y="565" fill="var(--muted-foreground)" fontSize="9">PTH / Q-01</text></svg><div className="absolute bottom-8 left-8 rounded-sm border border-border bg-background/80 p-3 backdrop-blur"><span className="font-mono text-[8px] uppercase text-muted-foreground">Signal confidence</span><div className="mt-2 flex gap-1">{[1,2,3,4,5,6].map(i=><span key={i} className={cn("h-1 w-6",i<5?"bg-primary":"bg-muted")}/>)}</div></div></div>;
}

function Architecture() {
  const nodes = [[Database,"Market Data"],[Layers3,"Data Processing"],[Braces,"Feature Engineering"],[BrainCircuit,"Quant Model"],[Zap,"Signal Engine"],[ShieldCheck,"Risk Engine"],[Scale,"Portfolio Engine"],[Activity,"Simulation / Execution"]] as const;
  return <section className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10 lg:py-36"><SectionHeading index="03" eyebrow="System architecture" title="From Raw Data to Structured Decisions." copy="A research pipeline designed to separate data handling, model logic, signal construction and risk controls."/><div className="relative mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{nodes.map(([Icon,title],i)=><div key={title} className="relative flex min-h-32 items-end rounded-sm border border-border bg-card p-5"><span className="absolute right-4 top-4 font-mono text-[9px] text-muted-foreground">0{i+1}</span><Icon className="absolute left-5 top-5 size-5 text-primary" strokeWidth={1.3}/><span className="font-mono text-[10px] uppercase">{title}</span>{i<nodes.length-1&&<span className="absolute -bottom-3 left-1/2 z-10 grid size-6 -translate-x-1/2 place-items-center rounded-full border border-border bg-background text-primary lg:-right-3 lg:bottom-auto lg:left-auto lg:top-1/2 lg:translate-x-0 lg:-translate-y-1/2"><ArrowRight className="hidden size-3 lg:block"/><ArrowDown className="size-3 lg:hidden"/></span>}</div>)}</div></section>;
}

type BotLabProps={market:string;setMarket:(x:string)=>void;timeframe:string;setTimeframe:(x:string)=>void;strategy:string;setStrategy:(x:string)=>void;risk:string;setRisk:(x:string)=>void;simulation:string;run:()=>void};
function BotLab(p:BotLabProps) {
  return <section className="border-y border-border bg-surface"><div className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10 lg:py-32"><SectionHeading index="06" eyebrow="Frontend demonstration" title="Systematic Bot Lab" copy="Configure an illustrative rule set and generate a transparent research summary. No broker connection. No trade execution."/><div className="mt-14 grid overflow-hidden rounded-sm border border-border bg-background lg:grid-cols-[.9fr_1.1fr]"><div className="border-b border-border p-6 lg:border-b-0 lg:border-r lg:p-8"><div className="mb-7 flex items-center justify-between"><span className="font-mono text-xs uppercase">Configuration</span><Badge>Simulation mode</Badge></div><Control label="Market" value={p.market} options={["XAUUSD","BTCUSD","EURUSD"]} set={p.setMarket}/><Control label="Timeframe" value={p.timeframe} options={["M15","M30","H1","H4"]} set={p.setTimeframe}/><Control label="Strategy" value={p.strategy} options={["Trend","Breakout","Moving Average","RSI"]} set={p.setStrategy}/><Control label="Risk" value={p.risk} options={["Conservative","Moderate","Aggressive"]} set={p.setRisk}/><Button onClick={p.run} className="mt-4 w-full">Run simulation <Activity className="size-4"/></Button></div><div className="section-grid p-6 lg:p-10"><Bot className="size-8 text-primary" strokeWidth={1.2}/><h3 className="mt-8 font-display text-2xl">Generated strategy summary</h3><p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">A <strong className="font-medium text-foreground">{p.risk.toLowerCase()}</strong> {p.strategy.toLowerCase()} research model on <strong className="font-medium text-foreground">{p.market}</strong>, evaluated on {p.timeframe} intervals. Signals are filtered through defined exposure and stop-loss constraints before simulated execution.</p><div className="mt-10 border-t border-border pt-5"><span className="font-mono text-[9px] uppercase text-muted-foreground">System response</span><p className="mt-2 font-mono text-xs text-primary">{p.simulation}</p></div><div className="mt-8 flex items-start gap-3 rounded-sm border border-gold/20 bg-gold/5 p-4"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-gold"/><p className="text-[11px] leading-5 text-muted-foreground">Research interface only. This demonstration does not connect to a broker or execute real trades.</p></div></div></div></div></section>;
}

function Control({label,value,options,set}:{label:string;value:string;options:string[];set:(x:string)=>void}) { return <div className="mb-6"><span className="mb-2 block font-mono text-[9px] uppercase text-muted-foreground">{label}</span><div className="flex flex-wrap gap-2">{options.map(x=><button key={x} onClick={()=>set(x)} className={cn("rounded-sm border px-3 py-2 font-mono text-[10px] transition-colors",x===value?"border-primary bg-primary/10 text-primary":"border-border text-muted-foreground hover:bg-accent")}>{x}</button>)}</div></div>; }

function NumberInput({label,value,onChange,step="1"}:{label:string;value:number;onChange:(n:number)=>void;step?:string}) { return <label><span className="mb-2 block font-mono text-[9px] uppercase text-muted-foreground">{label}</span><input type="number" step={step} value={value} onChange={e=>onChange(Number(e.target.value))} className="h-11 w-full rounded-sm border border-input bg-background px-3 font-mono text-sm outline-none transition-colors focus:border-primary"/></label>; }

function Insights() {
  const items=[["01","Building Robust Trading Systems","Systems Engineering"],["02","Backtesting Without Overfitting","Research Methods"],["03","Understanding Market Regimes","Market Structure"],["04","Risk Management Frameworks","Risk Engineering"],["05","Machine Learning for Trading Research","Artificial Intelligence"],["06","Systematic Strategy Development","Quantitative Methods"]];
  return <section id="insights" className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10 lg:py-36"><SectionHeading index="08" eyebrow="Research library" title="Research & Insights" copy="Editorial perspectives on robust system construction, empirical testing and the role of computational methods in market research."/><div className="mt-14 grid gap-px overflow-hidden border-y border-border bg-border md:grid-cols-2 lg:grid-cols-3">{items.map(([n,t,c],i)=><article key={t} className={cn("group bg-background p-6 transition-colors hover:bg-surface-raised lg:p-8",i===0&&"md:col-span-2 lg:col-span-1")}><div className="flex justify-between font-mono text-[9px] uppercase text-muted-foreground"><span>{c}</span><span>{n}</span></div><div className="mt-20 flex items-end justify-between gap-4"><h3 className="max-w-[260px] font-display text-xl leading-snug">{t}</h3><ArrowRight className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1"/></div></article>)}</div></section>;
}

function Footer() { return <footer className="border-t border-border bg-background"><div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24"><div className="grid gap-12 border-b border-border pb-14 lg:grid-cols-[1.3fr_1fr]"><div><p className="font-display text-2xl tracking-[.08em]">PARAM <span className="text-primary">TRADING HUB</span></p><p className="mt-4 font-mono text-[9px] uppercase text-muted-foreground">Quantitative Research <span className="text-gold">•</span> AI <span className="text-gold">•</span> Systematic Trading</p></div><div className="grid grid-cols-2 gap-4 sm:grid-cols-3">{["Research","Strategies","Trading Lab","Risk","Insights","About","Contact"].map(x=><a key={x} href={x==="Contact"?"mailto:research@paramtradinghub.com":`#${x.toLowerCase().replace(" ","-")}`} className="text-xs text-muted-foreground transition-colors hover:text-primary">{x}</a>)}</div></div><div className="grid gap-8 pt-8 lg:grid-cols-[1fr_2fr]"><div className="flex gap-5 text-[10px] text-muted-foreground"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Risk Disclosure</a></div><p className="max-w-3xl text-[10px] leading-5 text-muted-foreground">Param Trading Hub provides educational, research and simulated trading tools. Nothing on this website constitutes financial or investment advice. Trading involves substantial risk. Simulated or historical results do not guarantee future performance.</p></div><div className="mt-10 flex flex-wrap justify-between gap-3 font-mono text-[8px] uppercase text-muted-foreground"><span>© 2026 Param Trading Hub</span><span>Research • Technology • Discipline • Scale</span></div></div></footer>; }