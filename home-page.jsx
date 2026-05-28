// home-page.jsx — HomePage sections
const { useState } = React;

function HeroSection({ setPage }) {
  return (
    <section style={{
      minHeight:'100vh', display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center',
      position:'relative', padding:'100px clamp(16px,5vw,80px) 80px',
      overflow:'hidden', boxSizing:'border-box', width:'100%',
    }}>
      {/* Video background */}
      <video autoPlay muted loop playsInline style={{
        position:'absolute', inset:0, width:'100%', height:'100%',
        objectFit:'cover', zIndex:0, pointerEvents:'none',
      }}>
        <source src="assets/hero-bg.mp4" type="video/mp4"/>
      </video>
      {/* Dark overlay over video */}
      <div style={{
        position:'absolute', inset:0, zIndex:1, pointerEvents:'none',
        background:'linear-gradient(180deg, rgba(7,13,24,0.72) 0%, rgba(7,13,24,0.55) 50%, rgba(7,13,24,0.88) 100%)',
      }}/>
      {/* Blueprint grid on top of video */}
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none', zIndex:2,
        backgroundImage:`
          linear-gradient(rgba(42,191,191,0.04) 1px,transparent 1px),
          linear-gradient(90deg,rgba(42,191,191,0.04) 1px,transparent 1px)`,
        backgroundSize:'64px 64px',
      }}/>
      {/* Corner accent lines */}
      <div style={{ position:'absolute', top:'100px', left:'clamp(16px,4vw,48px)', pointerEvents:'none', zIndex:3 }}>
        <div style={{ width:'40px', height:'1px', background:'rgba(42,191,191,0.5)' }}/>
        <div style={{ width:'1px', height:'40px', background:'rgba(42,191,191,0.5)', marginTop:'-1px' }}/>
      </div>
      <div style={{ position:'absolute', bottom:'80px', right:'clamp(16px,4vw,48px)', pointerEvents:'none', zIndex:3 }}>
        <div style={{ width:'40px', height:'1px', background:'rgba(42,191,191,0.5)', marginLeft:'auto' }}/>
        <div style={{ width:'1px', height:'40px', background:'rgba(42,191,191,0.5)', marginLeft:'auto' }}/>
      </div>

      <div style={{ position:'relative', zIndex:3, textAlign:'center', maxWidth:'860px', width:'100%', animation:'fadeUp 0.8s ease both' }}>
        {/* Logo */}
        <div style={{ marginBottom:'20px' }}>
          <img src="assets/logo.png" alt="Manifold Abierto" style={{
            width:'clamp(72px,18vw,110px)', height:'clamp(72px,18vw,110px)', objectFit:'cover', borderRadius:'22px',
            boxShadow:'0 0 80px rgba(42,191,191,0.22), 0 0 160px rgba(42,191,191,0.08)',
          }}/>
        </div>

        {/* Status pill */}
        <div style={{
          display:'inline-flex', alignItems:'center', gap:'10px',
          color:'#2ABFBF', fontFamily:"'Space Mono',monospace",
          fontSize:'9px', letterSpacing:'0.12em', textTransform:'uppercase',
          padding:'7px 14px', border:'1px solid rgba(42,191,191,0.22)',
          borderRadius:'20px', marginBottom:'28px',
          background:'rgba(42,191,191,0.04)',
          textAlign:'center', maxWidth:'90vw',
        }}>
          <span style={{
            width:'7px', height:'7px', borderRadius:'50%', background:'#2ABFBF',
            animation:'pulseRing 2.2s ease-in-out infinite', display:'inline-block', flexShrink:0,
          }}/>
          Podcast HVAC · LATAM · Primer Episodio Próximamente
        </div>

        {/* Main title */}
        <h1 style={{
          fontFamily:"'Syne',sans-serif", fontWeight:800,
          fontSize:'clamp(36px,8vw,96px)', color:'#eef5fa',
          lineHeight:0.92, letterSpacing:'-0.03em', margin:'0 0 4px',
          whiteSpace:'nowrap',
        }}>MANIFOLD</h1>
        <h1 style={{
          fontFamily:"'Syne',sans-serif", fontWeight:800,
          fontSize:'clamp(36px,8vw,96px)',
          color:'transparent', WebkitTextStroke:'1.5px #2ABFBF',
          lineHeight:0.92, letterSpacing:'-0.03em', margin:'0 0 36px',
          whiteSpace:'nowrap',
        }}>ABIERTO</h1>

        {/* Waveform */}
        <div style={{ margin:'0 auto 36px', maxWidth:'480px', opacity:0.85 }}>
          <Waveform bars={52} color="#2ABFBF" height={52}/>
        </div>

        {/* Tagline */}
        <p style={{
          color:'#a8c8db', fontSize:'clamp(14px,3.5vw,18px)', lineHeight:1.65,
          maxWidth:'580px', margin:'0 auto 36px', padding:'0 8px',
        }}>
          El podcast de referencia para <strong style={{color:'#eef5fa', fontWeight:600}}>profesionales HVAC</strong> en América Latina. Conversaciones con los referentes del mercado.
        </p>

        {/* CTA row */}
        <div style={{ display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap', marginBottom:'64px' }}>
          <Button variant="orange" size="lg" href="#">Ver en YouTube</Button>
          <Button variant="secondary" size="lg" href="#">Apple Podcasts</Button>
          <Button variant="ghost" size="lg" onClick={()=>setPage('episodes')}>Explorar Episodios</Button>
        </div>

        {/* Stats row */}
        <div style={{
          display:'flex', gap:'clamp(24px,5vw,64px)', justifyContent:'center',
          flexWrap:'wrap', paddingTop:'32px',
          borderTop:'1px solid rgba(42,191,191,0.08)',
        }}>
          {[
            { val:'HVAC', lbl:'Especialización' },
            { val:'LATAM', lbl:'Alcance Regional' },
            { val:'T1', lbl:'Primera Temporada' },
            { val:'2026', lbl:'Año de Lanzamiento' },
          ].map(s=>(
            <div key={s.lbl} style={{ textAlign:'center' }}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(22px,3vw,30px)', color:'#2ABFBF' }}>{s.val}</div>
              <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'9px', color:'#5a8aa8', letterSpacing:'0.12em', textTransform:'uppercase', marginTop:'4px' }}>{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position:'absolute', bottom:'28px', left:'50%', transform:'translateX(-50%)',
        display:'flex', flexDirection:'column', alignItems:'center', gap:'8px',
        color:'rgba(42,191,191,0.5)', fontFamily:"'Space Mono',monospace", fontSize:'9px', letterSpacing:'0.18em',
        zIndex:3,
      }}>
        SCROLL
        <div style={{ width:'1px', height:'36px', background:'linear-gradient(to bottom,rgba(42,191,191,0.4),transparent)' }}/>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section style={{
      padding:'80px clamp(16px,5vw,80px)',
      background:'#0c1624',
      borderTop:'1px solid rgba(42,191,191,0.07)',
      borderBottom:'1px solid rgba(42,191,191,0.07)',
    }}>
      <div style={{ maxWidth:'920px', margin:'0 auto' }}>
        <SectionTitle
          label="Tráiler"
          title="Conocé el Programa"
          subtitle="Una conversación profunda sobre HVAC, tecnología y mercado latinoamericano. El podcast que la industria estaba esperando."
        />
        <div style={{
          position:'relative', paddingBottom:'56.25%',
          borderRadius:'10px', overflow:'hidden',
          border:'1px solid rgba(42,191,191,0.2)',
          boxShadow:'0 0 60px rgba(42,191,191,0.08)',
        }}>
          <video
            controls
            playsInline
            preload="metadata"
            style={{
              position:'absolute', inset:0,
              width:'100%', height:'100%',
              objectFit:'cover',
              background:'#060e1c',
            }}
          >
            <source src="assets/trailer.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    </section>
  );
}

function AboutPreviewSection({ setPage }) {
  const features = [
    { icon:'⊙', title:'Referentes del Mercado', desc:'Invitados seleccionados por su trayectoria y expertise en HVAC latinoamericano.' },
    { icon:'◎', title:'Perspectiva LATAM', desc:'Contenido contextualizado para la realidad del mercado en América Latina.' },
    { icon:'◈', title:'Técnico y Accesible', desc:'Profundidad técnica presentada de manera clara y práctica para todos los niveles.' },
  ];
  return (
    <section style={{ padding:'100px clamp(16px,5vw,80px)' }}>
      <div style={{
        maxWidth:'1100px', margin:'0 auto',
        display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'center',
      }} className="about-grid">
        <div>
          <SectionTitle
            label="El Programa"
            title="El conocimiento HVAC al alcance de toda LATAM"
            align="left"
          />
          <p style={{ color:'#a8c8db', fontSize:'16px', lineHeight:1.8, marginBottom:'20px' }}>
            Manifold Abierto nace de la necesidad de conectar a los profesionales del sector HVAC en América Latina. Un espacio para compartir experiencias, conocimientos técnicos y las últimas tendencias del mercado.
          </p>
          <p style={{ color:'#a8c8db', fontSize:'16px', lineHeight:1.8, marginBottom:'36px' }}>
            Cada episodio es una conversación profunda con referentes de la industria: técnicos, ingenieros, fabricantes y especialistas que están transformando el sector.
          </p>
          <Button variant="primary" onClick={()=>setPage('about')}>Conocer más</Button>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:'14px' }}>
          {features.map(f=>(
            <div key={f.title} style={{
              display:'flex', gap:'18px', alignItems:'flex-start',
              padding:'22px 24px', background:'#0c1624',
              border:'1px solid rgba(42,191,191,0.08)',
              borderRadius:'6px', transition:'all 0.22s', cursor:'default',
            }}
            onMouseEnter={e=>{ e.currentTarget.style.borderColor='rgba(42,191,191,0.28)'; e.currentTarget.style.transform='translateX(5px)'; }}
            onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(42,191,191,0.08)'; e.currentTarget.style.transform='translateX(0)'; }}
            >
              <div style={{
                width:'36px', height:'36px', borderRadius:'6px', flexShrink:0,
                background:'rgba(42,191,191,0.08)',
                border:'1px solid rgba(42,191,191,0.15)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontFamily:"'Space Mono',monospace", fontSize:'16px', color:'#2ABFBF',
              }}>{f.icon}</div>
              <div>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'14px', marginBottom:'5px', color:'#eef5fa' }}>{f.title}</div>
                <div style={{ color:'#a8c8db', fontSize:'14px', lineHeight:1.6 }}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:720px){.about-grid{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
    </section>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if(!email || !email.includes('@')){ setErr('Ingresá un email válido'); return; }
    setLoading(true);
    try {
      const res = await fetch('https://formspree.io/f/xgoqdkng', {
        method:'POST',
        headers:{ 'Content-Type':'application/json', 'Accept':'application/json' },
        body: JSON.stringify({ email, tipo:'Newsletter Manifold Abierto', _subject:'Nueva suscripción al newsletter' }),
      });
      if(res.ok){ setDone(true); setErr(''); }
      else { setErr('Error al enviar. Intentá de nuevo.'); }
    } catch(ex) { setErr('Error de conexión. Intentá de nuevo.'); }
    setLoading(false);
  };

  return (
    <section style={{
      padding:'80px clamp(16px,5vw,80px)',
      background:'linear-gradient(135deg,#0c1624 0%,#0a1828 100%)',
      borderTop:'1px solid rgba(42,191,191,0.08)',
      borderBottom:'1px solid rgba(42,191,191,0.08)',
    }}>
      <div style={{ maxWidth:'580px', margin:'0 auto', textAlign:'center' }}>
        <SectionTitle
          label="Newsletter"
          title="Sé el Primero en Enterarte"
          subtitle="Recibí notificaciones de nuevos episodios, recursos técnicos y novedades del sector HVAC en LATAM."
        />
        {!done ? (
          <>
            <form onSubmit={submit} style={{ display:'flex', gap:'8px', flexWrap:'wrap', justifyContent:'center' }}>
              <input
                type="email" placeholder="tu@email.com" value={email}
                onChange={e=>{ setEmail(e.target.value); setErr(''); }}
                style={{
                  flex:'1', minWidth:'220px', padding:'14px 20px',
                  background:'#111e2e',
                  border:`1px solid ${err ? '#F07A2A' : 'rgba(42,191,191,0.2)'}`,
                  borderRadius:'3px', color:'#eef5fa', fontSize:'14px',
                  transition:'border-color 0.2s',
                }}
                onFocus={e=>e.target.style.borderColor='#2ABFBF'}
                onBlur={e=>e.target.style.borderColor=err?'#F07A2A':'rgba(42,191,191,0.2)'}
              />
              <Button variant="orange" size="lg" style={loading?{opacity:0.7}:{}}>{loading ? 'Enviando...' : 'Suscribirme'}</Button>
            </form>
            {err && <div style={{ color:'#F07A2A', fontSize:'12px', marginTop:'8px' }}>{err}</div>}
          </>
        ) : (
          <div style={{
            padding:'24px 32px',
            background:'rgba(42,191,191,0.06)',
            border:'1px solid rgba(42,191,191,0.22)',
            borderRadius:'6px', color:'#2ABFBF',
            fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'15px',
          }}>
            ¡Gracias! Te avisaremos cuando salgamos al aire.
          </div>
        )}
      </div>
    </section>
  );
}

function SponsorsStripSection({ setPage }) {
  const SPONSORS = [
    { name:'Freshen',  src:'assets/sponsors/freshen.png' },
    { name:'COEL',     src:'assets/sponsors/coel.jpg' },
    { name:'SANHUA',   src:null },
    { name:'K11',      src:'assets/sponsors/k11.jpg' },
    { name:'Ventech',  src:'assets/sponsors/ventech.webp' },
    { name:'Cooltech', src:'assets/sponsors/cooltech.jpg' },
    { name:'testo',    src:'assets/sponsors/testo.jpg', whiteBg:true },
    { name:'Value',    src:'assets/sponsors/value.png', whiteBg:true },
    { name:'Embraco',  src:'assets/sponsors/embraco.svg' },
    { name:'VHM',      src:'assets/sponsors/vhm.png', whiteBg:true },
  ];
  const items = [...SPONSORS, ...SPONSORS];

  const pill = {
    display:'flex', alignItems:'center', justifyContent:'center',
    padding:'10px 20px', flexShrink:0, height:'60px', minWidth:'130px',
    borderRadius:'8px',
    background:'rgba(255,255,255,0.05)',
    border:'1px solid rgba(255,255,255,0.09)',
  };

  return (
    <section style={{ padding:'60px clamp(16px,5vw,80px)', borderTop:'1px solid rgba(42,191,191,0.06)' }}>
      <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:'32px' }}>
          <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'9px', color:'#5a8aa8', letterSpacing:'0.22em', textTransform:'uppercase' }}>Sponsors &amp; Partners — 2026</div>
        </div>
        <div style={{ overflow:'hidden', maskImage:'linear-gradient(to right,transparent,black 10%,black 90%,transparent)', WebkitMaskImage:'linear-gradient(to right,transparent,black 10%,black 90%,transparent)' }}>
          <div style={{ display:'flex', gap:'16px', alignItems:'center', animation:'ticker 32s linear infinite', width:'max-content' }}>
            {items.map((s,i)=>(
              <div key={i} style={pill}>
                {s.src
                  ? s.whiteBg
                    ? <div style={{ background:'white', borderRadius:'5px', padding:'5px 10px', display:'flex', alignItems:'center', justifyContent:'center' }}>
                        <img src={s.src} alt={s.name} style={{ height:'28px', maxWidth:'90px', objectFit:'contain', display:'block' }}/>
                      </div>
                    : <img src={s.src} alt={s.name} style={{ height:'32px', maxWidth:'110px', objectFit:'contain', display:'block' }}/>
                  : <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'15px', color:'#a8c8db', letterSpacing:'0.05em' }}>{s.name}</span>
                }
              </div>
            ))}
          </div>
        </div>
        <div style={{ textAlign:'center', marginTop:'32px' }}>
          <Button variant="ghost" onClick={()=>setPage('sponsors')}>Convertite en Sponsor</Button>
        </div>
      </div>
    </section>
  );
}

function HomePage({ setPage }) {
  return (
    <div>
      <HeroSection setPage={setPage}/>
      <VideoSection/>
      <AboutPreviewSection setPage={setPage}/>
      <NewsletterSection/>
      <SponsorsStripSection setPage={setPage}/>
    </div>
  );
}

Object.assign(window, { HomePage });
