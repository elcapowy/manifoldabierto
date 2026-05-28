// components.jsx — shared UI: Header, Footer, Button, SectionTitle, Waveform
const { useState, useEffect } = React;

const TOKENS = {
  bg: '#070d18', s1: '#0c1624', s2: '#111e2e', s3: '#162638',
  teal: '#2ABFBF', orange: '#F07A2A',
  text: '#eef5fa', sub: '#a8c8db', muted: '#5a8aa8',
  border: 'rgba(42,191,191,0.1)', borderHov: 'rgba(42,191,191,0.28)',
};

function Button({ children, variant='primary', onClick, href, size='md', style: xtra }) {
  const base = {
    display:'inline-flex', alignItems:'center', gap:'8px',
    fontFamily:"'DM Sans',sans-serif", fontWeight:600,
    letterSpacing:'0.06em', textTransform:'uppercase',
    fontSize: size==='lg' ? '12px' : '11px',
    padding: size==='lg' ? '14px 30px' : '10px 20px',
    borderRadius:'3px', cursor:'pointer',
    transition:'all 0.2s', textDecoration:'none', border:'none', lineHeight:1,
  };
  const v = {
    primary:   { background:'#2ABFBF', color:'#070d18' },
    secondary: { background:'transparent', color:'#2ABFBF', border:'1px solid #2ABFBF' },
    orange:    { background:'#F07A2A', color:'#fff' },
    ghost:     { background:'transparent', color:'#a8c8db', border:'1px solid rgba(42,191,191,0.18)' },
  };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} target={href?'_blank':undefined} onClick={onClick}
      style={{...base, ...v[variant], ...(xtra||{})}}
      onMouseEnter={e => {
        const s = e.currentTarget.style;
        if(variant==='primary')   s.background='#1fa8a8';
        if(variant==='secondary') { s.background='rgba(42,191,191,0.1)'; }
        if(variant==='orange')    s.background='#d4681c';
        if(variant==='ghost')     { s.background='rgba(42,191,191,0.05)'; s.borderColor='rgba(42,191,191,0.35)'; }
      }}
      onMouseLeave={e => {
        const s = e.currentTarget.style;
        s.background = v[variant].background || 'transparent';
        s.borderColor = '';
      }}
    >{children}</Tag>
  );
}

function SectionTitle({ label, title, subtitle, align='center', accent='#2ABFBF' }) {
  return (
    <div style={{ textAlign:align, marginBottom:'28px' }}>
      {label && (
        <div style={{
          display:'inline-flex', alignItems:'center', gap:'10px',
          color:accent, fontFamily:"'Space Mono',monospace",
          fontSize:'10px', letterSpacing:'0.2em', textTransform:'uppercase',
          marginBottom:'14px',
        }}>
          <span style={{ display:'block', width:'20px', height:'1px', background:accent, opacity:0.7 }} />
          {label}
          <span style={{ display:'block', width:'20px', height:'1px', background:accent, opacity:0.7 }} />
        </div>
      )}
      <h2 style={{
        fontFamily:"'Syne',sans-serif", fontWeight:800,
        fontSize:'clamp(26px,3.5vw,44px)', color:'#eef5fa',
        lineHeight:1.05, letterSpacing:'-0.01em', margin:'0 0 16px',
      }}>{title}</h2>
      {subtitle && (
        <p style={{
          color:'#a8c8db', fontSize:'17px', lineHeight:1.75,
          maxWidth:'540px', margin: align==='center'?'0 auto':'0',
        }}>{subtitle}</p>
      )}
    </div>
  );
}

function Waveform({ bars=40, color='#2ABFBF', height=50, opacity=0.55 }) {
  const hs = Array.from({length:bars},(_,i)=>28+Math.sin(i*0.65+1)*28+Math.sin(i*1.4)*14);
  return (
    <div style={{ display:'flex', alignItems:'center', gap:'3px', height:`${height}px` }}>
      {hs.map((h,i)=>(
        <div key={i} style={{
          width:'3px', borderRadius:'2px', background:color, opacity,
          height:`${h}%`,
          animation:`waveBar ${0.7+(i%6)*0.13}s ease-in-out infinite alternate`,
          animationDelay:`${(i%9)*0.09}s`,
        }}/>
      ))}
    </div>
  );
}

function Header({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const nav = [
    { id:'home', label:'Inicio' },
    { id:'episodes', label:'Episodios' },
    { id:'guests', label:'Referentes' },
    { id:'resources', label:'Recursos' },
    { id:'sponsors', label:'Sponsors' },
    { id:'about', label:'Sobre el Programa' },
  ];

  const go = (id) => { setPage(id); setOpen(false); window.scrollTo({top:0,behavior:'smooth'}); };

  return (
    <>
      <style>{`
        @keyframes waveBar{from{transform:scaleY(0.3)}to{transform:scaleY(1)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
        @keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        @keyframes pulseRing{0%,100%{box-shadow:0 0 0 0 rgba(42,191,191,0.4)}50%{box-shadow:0 0 0 12px rgba(42,191,191,0)}}
        @keyframes glow{0%,100%{opacity:0.5}50%{opacity:1}}
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{background:#070d18;color:#eef5fa;font-size:16px;font-family:'DM Sans',sans-serif;-webkit-font-smoothing:antialiased}
        ::selection{background:rgba(42,191,191,0.22);color:#eef5fa}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-track{background:#070d18}
        ::-webkit-scrollbar-thumb{background:#2ABFBF;border-radius:2px}
        input,textarea,button{font-family:inherit;outline:none}
        a{color:inherit;text-decoration:none}
      `}</style>

      <header style={{
        position:'fixed', top:0, left:0, right:0, zIndex:200, height:'68px',
        padding:'0 clamp(16px,4vw,48px)',
        display:'flex', alignItems:'center', justifyContent:'space-between',
        background: scrolled ? 'rgba(7,13,24,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(42,191,191,0.07)' : 'none',
        transition:'all 0.35s ease',
      }}>
        <button onClick={()=>go('home')} style={{
          background:'none', border:'none', cursor:'pointer',
          display:'flex', alignItems:'center', gap:'12px',
        }}>
          <img src="assets/logo.png" alt="Manifold Abierto" style={{
            width:'38px', height:'38px', objectFit:'cover', borderRadius:'8px',
            boxShadow:'0 0 20px rgba(42,191,191,0.18)',
          }}/>
          <div style={{ textAlign:'left' }}>
            <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'15px', color:'#eef5fa', lineHeight:1.1 }}>MANIFOLD</div>
            <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'8px', color:'#2ABFBF', letterSpacing:'0.22em' }}>ABIERTO</div>
          </div>
        </button>

        <nav style={{ display:'flex', gap:'2px' }} className="mnav-d">
          {nav.map(item=>(
            <button key={item.id} onClick={()=>go(item.id)} style={{
              background:'none', border:'none',
              color: page===item.id ? '#2ABFBF' : '#a8c8db',
              fontFamily:"'DM Sans',sans-serif", fontWeight:500,
              fontSize:'13px', letterSpacing:'0.05em',
cursor:'pointer', padding:'8px 11px', borderRadius:'3px',
              transition:'color 0.2s',
              borderBottom: page===item.id ? '1px solid rgba(42,191,191,0.55)' : '1px solid transparent',
            }}
            onMouseEnter={e=>{ if(page!==item.id) e.currentTarget.style.color='#b0c8df'; }}
            onMouseLeave={e=>{ if(page!==item.id) e.currentTarget.style.color='#a8c8db'; }}
            >{item.label}</button>
          ))}
        </nav>

        <button onClick={()=>setOpen(o=>!o)} className="mnav-m" style={{
          display:'none', background:'none',
          border:'1px solid rgba(42,191,191,0.2)', color:'#eef5fa',
          cursor:'pointer', padding:'7px 14px', borderRadius:'3px', fontSize:'12px',
        }}>{open?'✕':'MENU'}</button>
      </header>

      {open && (
        <div style={{
          position:'fixed', top:'68px', left:0, right:0, zIndex:199,
          background:'rgba(7,13,24,0.97)', backdropFilter:'blur(20px)',
          borderBottom:'1px solid rgba(42,191,191,0.09)',
          padding:'12px clamp(16px,4vw,48px)',
        }}>
          {nav.map(item=>(
            <button key={item.id} onClick={()=>go(item.id)} style={{
              display:'block', width:'100%', background:'none', border:'none',
              textAlign:'left', color: page===item.id?'#2ABFBF':'#a8c8db',
              fontFamily:"'DM Sans',sans-serif", fontWeight:500, fontSize:'14px',
              cursor:'pointer', padding:'13px 0',
              borderBottom:'1px solid rgba(42,191,191,0.06)',
            }}>{item.label}</button>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:820px){.mnav-d{display:none!important}.mnav-m{display:block!important}}
      `}</style>
    </>
  );
}

function Footer({ setPage }) {
  const go = (id) => { setPage(id); window.scrollTo({top:0,behavior:'smooth'}); };
  return (
    <footer style={{
      background:'#060c16', borderTop:'1px solid rgba(42,191,191,0.08)',
      padding:'60px clamp(16px,4vw,48px) 32px',
    }}>
      <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
        <div style={{
          display:'grid', gridTemplateColumns:'2fr 1fr 1fr',
          gap:'48px', marginBottom:'48px',
        }} className="fg">
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'16px' }}>
              <img src="assets/logo.png" alt="logo" style={{ width:'34px', height:'34px', objectFit:'cover', borderRadius:'6px' }}/>
              <div>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'13px' }}>MANIFOLD ABIERTO</div>
                <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'8px', color:'#2ABFBF', letterSpacing:'0.18em' }}>PODCAST HVAC · LATAM</div>
              </div>
            </div>
            <p style={{ color:'#a8c8db', fontSize:'15px', lineHeight:1.7, maxWidth:'280px' }}>
              El podcast de referencia para profesionales del sector HVAC en América Latina. Conducido por <span style={{color:'#a8c8db'}}>Cristian Trotta</span> y producido por <span style={{color:'#a8c8db'}}>MW</span>.
            </p>
          </div>
          <div>
            <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'10px', letterSpacing:'0.12em', color:'#2ABFBF', marginBottom:'16px' }}>PÁGINAS</div>
            {[['episodes','Episodios'],['guests','Referentes'],['resources','Recursos'],['sponsors','Sponsors'],['about','Sobre el Programa']].map(([id,l])=>(
              <button key={id} onClick={()=>go(id)} style={{
                display:'block', background:'none', border:'none',
                color:'#a8c8db', cursor:'pointer', padding:'5px 0',
                fontFamily:"'DM Sans',sans-serif", fontSize:'13px', transition:'color 0.2s', textAlign:'left',
              }}
              onMouseEnter={e=>e.currentTarget.style.color='#2ABFBF'}
              onMouseLeave={e=>e.currentTarget.style.color='#a8c8db'}
              >{l}</button>
            ))}
          </div>
          <div>
            <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'10px', letterSpacing:'0.12em', color:'#2ABFBF', marginBottom:'16px' }}>ESCUCHAR EN</div>
            {[['YouTube','#'],['Apple Podcasts','#']].map(([l,h])=>(
              <a key={l} href={h} style={{ display:'block', color:'#a8c8db', fontSize:'13px', padding:'5px 0', transition:'color 0.2s' }}
                onMouseEnter={e=>e.currentTarget.style.color='#F07A2A'}
                onMouseLeave={e=>e.currentTarget.style.color='#a8c8db'}
              >{l}</a>
            ))}
          </div>
        </div>
        <div style={{ borderTop:'1px solid rgba(42,191,191,0.07)', paddingTop:'24px', display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:'8px' }}>
          <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'10px', color:'#5a8aa8' }}>© 2026 Manifold Abierto — Todos los derechos reservados</div>
          <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'10px', color:'#5a8aa8', display:'flex', gap:'16px', flexWrap:'wrap', alignItems:'center' }}>
            <span>Conducido por <span style={{color:'#a8c8db'}}>Cristian Trotta</span> · Producido por <span style={{color:'#a8c8db'}}>MW</span></span>
            <a href="mailto:manifold.abierto@gmail.com" style={{ color:'#2ABFBF', textDecoration:'none', fontFamily:"'Space Mono',monospace", fontSize:'10px', transition:'opacity 0.2s' }}
              onMouseEnter={e=>e.currentTarget.style.opacity='0.7'}
              onMouseLeave={e=>e.currentTarget.style.opacity='1'}
            >manifold.abierto@gmail.com</a>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:640px){.fg{grid-template-columns:1fr!important}}`}</style>
    </footer>
  );
}

Object.assign(window, { TOKENS, Button, SectionTitle, Waveform, Header, Footer });
