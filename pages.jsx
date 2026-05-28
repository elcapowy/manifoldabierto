// pages.jsx — EpisodesPage, GuestsPage, ResourcesPage, SponsorsPage, AboutPage
const { useState } = React;

/* ──────────────────────────────────────────────
   SHARED INNER PAGE WRAPPER
────────────────────────────────────────────── */
function PageHero({ label, title, subtitle }) {
  return (
    <div style={{
      padding:'96px clamp(16px,5vw,80px) 36px',
      background:'linear-gradient(180deg,#0c1624 0%,#070d18 100%)',
      borderBottom:'1px solid rgba(42,191,191,0.08)',
      position:'relative', overflow:'hidden',
    }}>
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        backgroundImage:`linear-gradient(rgba(42,191,191,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(42,191,191,0.02) 1px,transparent 1px)`,
        backgroundSize:'64px 64px',
      }}/>
      <div style={{ maxWidth:'1100px', margin:'0 auto', position:'relative', zIndex:1, animation:'fadeUp 0.5s ease both' }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:'9px', color:'#2ABFBF', fontFamily:"'Space Mono',monospace", fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:'10px' }}>
          <span style={{ display:'block', width:'16px', height:'1px', background:'#2ABFBF', opacity:0.7 }}/>
          {label}
          <span style={{ display:'block', width:'16px', height:'1px', background:'#2ABFBF', opacity:0.7 }}/>
        </div>
        <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(28px,4.5vw,48px)', color:'#eef5fa', lineHeight:1.05, letterSpacing:'-0.01em', margin:'0 0 10px' }}>{title}</h1>
        {subtitle && <p style={{ color:'#a8c8db', fontSize:'15px', lineHeight:1.65, maxWidth:'580px', margin:0 }}>{subtitle}</p>}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   EPISODES PAGE
────────────────────────────────────────────── */
function EpisodesPage() {
  const [q, setQ] = useState('');
  const teasers = [
    { ep:'EP 01', title:'Formación HVAC en Argentina: 30 años construyendo el oficio', guest:'Guillermo Andrade — IARAA', date:'Temporada 1 · 2026', tag:'Educación', featured:true,
      desc:'El Director del Instituto Argentino de Refrigeración y Aire Acondicionado comparte la historia, metodología y desafíos de formar técnicos desde 1991.',
      img:'assets/guests/guillermo-andrade.png' },
    { ep:'EP 02', title:'Refrigerantes del Futuro: Transición y Desafíos', guest:'Por Confirmar', date:'Próximamente', tag:'Técnico' },
    { ep:'EP 03', title:'Digitalización del Servicio Técnico HVAC', guest:'Por Confirmar', date:'Próximamente', tag:'Tecnología' },
    { ep:'EP 04', title:'VRF y Sistemas Multi-Split: Aplicaciones en LATAM', guest:'Por Confirmar', date:'Próximamente', tag:'Sistemas' },
  ];
  const filtered = teasers.filter(t =>
    !q || t.title.toLowerCase().includes(q.toLowerCase()) || t.tag.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div>
      <PageHero label="Episodios" title="Todos los Episodios" subtitle="Conversaciones con los referentes del mercado HVAC latinoamericano. Primera temporada en camino."/>
      <div style={{ padding:'60px clamp(16px,5vw,80px)', maxWidth:'1100px', margin:'0 auto' }}>
        {/* Search */}
        <div style={{ marginBottom:'48px', display:'flex', gap:'12px', flexWrap:'wrap' }}>
          <input
            value={q} onChange={e=>setQ(e.target.value)}
            placeholder="Buscar episodio por título o tema…"
            style={{
              flex:'1', minWidth:'240px', padding:'13px 20px',
              background:'#0c1624', border:'1px solid rgba(42,191,191,0.18)',
              borderRadius:'3px', color:'#eef5fa', fontSize:'14px', transition:'border-color 0.2s',
            }}
            onFocus={e=>e.target.style.borderColor='#2ABFBF'}
            onBlur={e=>e.target.style.borderColor='rgba(42,191,191,0.18)'}
          />
        </div>

        {/* EP 01 live banner */}
        <div style={{
          padding:'20px 28px', marginBottom:'40px',
          border:'1px solid rgba(42,191,191,0.2)', borderRadius:'6px',
          background:'rgba(42,191,191,0.04)',
          display:'flex', alignItems:'center', gap:'16px', flexWrap:'wrap',
        }}>
          <div style={{ width:'8px', height:'8px', borderRadius:'50%', background:'#2ABFBF', animation:'pulseRing 2s infinite', flexShrink:0 }}/>
          <div style={{ fontSize:'13px', color:'#a8c8db' }}>
            <strong style={{ color:'#eef5fa', fontWeight:600 }}>Primer episodio confirmado</strong> · Guillermo Andrade, Director del IARAA · Temporada 1 · 2026
          </div>
        </div>

        {/* Episodes grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:'20px' }}>
          {filtered.map(ep=>(
            ep.featured ? (
              /* ── Featured EP 01 ── */
              <div key={ep.ep} style={{
                gridColumn:'1 / -1',
                border:'1px solid rgba(240,122,42,0.3)', borderRadius:'10px',
                background:'linear-gradient(135deg,#111e2e 0%,#0c1624 100%)',
                overflow:'hidden', transition:'all 0.22s', cursor:'pointer',
                display:'grid', gridTemplateColumns:'240px 1fr',
              }} className="ep-featured"
              onMouseEnter={e=>{ e.currentTarget.style.borderColor='rgba(240,122,42,0.55)'; e.currentTarget.style.transform='translateY(-3px)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(240,122,42,0.3)'; e.currentTarget.style.transform='translateY(0)'; }}
              >
                {/* Left panel */}
                <div style={{
                  background:'linear-gradient(135deg,#0a1420,#0f1e30)',
                  display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
                  padding:'32px 24px', borderRight:'1px solid rgba(240,122,42,0.12)',
                  position:'relative', gap:'14px',
                }}>
                  <div style={{ position:'absolute', fontFamily:"'Space Mono',monospace", fontSize:'72px', fontWeight:700, color:'rgba(240,122,42,0.07)', letterSpacing:'-0.04em', userSelect:'none' }}>01</div>
                  <div style={{ width:'78px', height:'78px', borderRadius:'50%', border:'2px solid rgba(240,122,42,0.4)', background:'linear-gradient(135deg,rgba(240,122,42,0.15),rgba(42,191,191,0.08))', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'24px', color:'#F07A2A', zIndex:1 }}>GA</div>
                  <div style={{ textAlign:'center', zIndex:1 }}>
                    <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'14px', color:'#eef5fa' }}>Guillermo Andrade</div>
                    <div style={{ fontSize:'12px', color:'#a8c8db', marginTop:'3px' }}>Director · IARAA</div>
                    <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'10px', color:'#5a8aa8', marginTop:'4px', letterSpacing:'0.08em' }}>Buenos Aires, AR</div>
                  </div>
                </div>
                {/* Right content */}
                <div style={{ padding:'32px 36px' }}>
                  <div style={{ display:'flex', gap:'8px', flexWrap:'wrap', marginBottom:'16px' }}>
                    {[['EP 01','rgba(240,122,42,0.12)','rgba(240,122,42,0.3)','#F07A2A'],['EDUCACIÓN','rgba(42,191,191,0.08)','rgba(42,191,191,0.2)','#2ABFBF'],['PRIMER EPISODIO','rgba(42,191,191,0.04)','rgba(42,191,191,0.1)','#5a8aa8']].map(([lbl,bg,border,color])=>(
                      <span key={lbl} style={{ padding:'4px 12px', borderRadius:'20px', background:bg, border:`1px solid ${border}`, fontFamily:"'Space Mono',monospace", fontSize:'9px', color, letterSpacing:'0.12em' }}>{lbl}</span>
                    ))}
                  </div>
                  <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(16px,2vw,22px)', color:'#eef5fa', lineHeight:1.25, marginBottom:'12px' }}>{ep.title}</h3>
                  <p style={{ color:'#a8c8db', fontSize:'14px', lineHeight:1.7, marginBottom:'20px', maxWidth:'520px' }}>{ep.desc}</p>
                  <div style={{ padding:'14px 18px', borderRadius:'6px', background:'rgba(42,191,191,0.04)', border:'1px solid rgba(42,191,191,0.1)', marginBottom:'24px' }}>
                    <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'9px', color:'#2ABFBF', letterSpacing:'0.14em', marginBottom:'6px' }}>INSTITUTO ARGENTINO DE REFRIGERACIÓN Y A/C · DESDE 1991</div>
                    <div style={{ fontSize:'13px', color:'#a8c8db', lineHeight:1.65 }}>Única institución en CABA habilitada para matriculación en instalación de equipos split · Sedes en CABA, Remedios de Escalada, Escobar, San Miguel y Salto · Más de 15 años en el Programa OZONO.</div>
                  </div>
                  <div style={{ display:'flex', alignItems:'center', gap:'16px', flexWrap:'wrap' }}>
                    <Button variant="orange">Ver Episodio</Button>
                    <span style={{ fontFamily:"'Space Mono',monospace", fontSize:'10px', color:'#5a8aa8', letterSpacing:'0.1em' }}>{ep.date}</span>
                  </div>
                </div>
              </div>
            ) : (
              /* ── Regular card ── */
              <div key={ep.ep} style={{
                border:'1px solid rgba(42,191,191,0.08)', borderRadius:'8px',
                background:'#0c1624', overflow:'hidden',
                transition:'all 0.22s', cursor:'pointer',
              }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor='rgba(42,191,191,0.28)'; e.currentTarget.style.transform='translateY(-3px)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(42,191,191,0.08)'; e.currentTarget.style.transform='translateY(0)'; }}
              >
                <div style={{
                  height:'120px', background:'linear-gradient(135deg,#0a1420,#111e2e)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  borderBottom:'1px solid rgba(42,191,191,0.06)', position:'relative',
                }}>
                  <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'36px', fontWeight:700, color:'rgba(42,191,191,0.1)', letterSpacing:'-0.02em' }}>{ep.ep.replace('EP ','')}</div>
                  <div style={{ position:'absolute', top:'12px', right:'12px', padding:'4px 10px', background:'rgba(42,191,191,0.08)', border:'1px solid rgba(42,191,191,0.18)', borderRadius:'20px', fontFamily:"'Space Mono',monospace", fontSize:'9px', color:'#2ABFBF', letterSpacing:'0.1em' }}>{ep.tag}</div>
                </div>
                <div style={{ padding:'20px' }}>
                  <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'10px', color:'#F07A2A', letterSpacing:'0.1em', marginBottom:'8px' }}>{ep.ep}</div>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'14px', color:'#eef5fa', lineHeight:1.4, marginBottom:'14px' }}>{ep.title}</div>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <div style={{ fontSize:'12px', color:'#a8c8db' }}>{ep.guest}</div>
                    <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'10px', color:'#5a8aa8' }}>{ep.date}</div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
        <style>{`@media(max-width:600px){.ep-featured{grid-template-columns:1fr!important}}`}</style>
        {filtered.length === 0 && (
          <div style={{ textAlign:'center', padding:'60px', color:'#5a8aa8', fontFamily:"'Space Mono',monospace", fontSize:'12px', letterSpacing:'0.1em' }}>
            SIN RESULTADOS PARA "{q.toUpperCase()}"
          </div>
        )}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   GUESTS / REFERENTES PAGE
────────────────────────────────────────────── */
function GuestsPage() {
  return (
    <div>
      <PageHero label="Referentes" title="Voces del Sector HVAC" subtitle="Los especialistas que están construyendo el futuro del HVAC en América Latina. Vamos sumando referentes episodio a episodio."/>
      <div style={{ padding:'60px clamp(16px,5vw,80px)', maxWidth:'1100px', margin:'0 auto' }}>

        {/* Guillermo Andrade — EP 01 */}
        <div style={{
          border:'1px solid rgba(240,122,42,0.3)', borderRadius:'10px',
          background:'linear-gradient(135deg,#111e2e 0%,#0c1624 100%)',
          overflow:'hidden', marginBottom:'48px',
          display:'grid', gridTemplateColumns:'260px 1fr',
        }} className="guest-featured">
          {/* Left */}
          <div style={{
            background:'linear-gradient(135deg,#0a1420,#0f1e30)',
            display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
            padding:'44px 24px', borderRight:'1px solid rgba(240,122,42,0.1)',
            position:'relative', gap:'16px',
          }}>
            <div style={{ position:'absolute', fontFamily:"'Space Mono',monospace", fontSize:'80px', fontWeight:700, color:'rgba(240,122,42,0.05)', letterSpacing:'-0.04em', userSelect:'none' }}>EP1</div>
            <div style={{
              width:'96px', height:'96px', borderRadius:'50%', zIndex:1,
              border:'2px solid rgba(240,122,42,0.45)',
              background:'linear-gradient(135deg,rgba(240,122,42,0.18),rgba(42,191,191,0.08))',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'30px', color:'#F07A2A',
            }}>GA</div>
            <div style={{ textAlign:'center', zIndex:1 }}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'17px', color:'#eef5fa' }}>Guillermo Andrade</div>
              <div style={{ fontSize:'13px', color:'#2ABFBF', marginTop:'5px' }}>Director · IARAA</div>
              <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'10px', color:'#5a8aa8', marginTop:'6px', letterSpacing:'0.08em' }}>Buenos Aires · Argentina</div>
            </div>
            <div style={{ zIndex:1, display:'flex', gap:'8px', flexWrap:'wrap', justifyContent:'center' }}>
              {['HVAC','Educación','Refrigeración'].map(tag=>(
                <span key={tag} style={{ padding:'3px 10px', borderRadius:'20px', background:'rgba(42,191,191,0.07)', border:'1px solid rgba(42,191,191,0.15)', fontFamily:"'Space Mono',monospace", fontSize:'9px', color:'#2ABFBF', letterSpacing:'0.08em' }}>{tag}</span>
              ))}
            </div>
          </div>
          {/* Right */}
          <div style={{ padding:'36px 40px' }}>
            <div style={{ display:'flex', gap:'8px', marginBottom:'18px', flexWrap:'wrap' }}>
              <span style={{ padding:'4px 12px', borderRadius:'20px', background:'rgba(240,122,42,0.1)', border:'1px solid rgba(240,122,42,0.28)', fontFamily:"'Space Mono',monospace", fontSize:'9px', color:'#F07A2A', letterSpacing:'0.12em' }}>EP 01</span>
              <span style={{ padding:'4px 12px', borderRadius:'20px', background:'rgba(42,191,191,0.06)', border:'1px solid rgba(42,191,191,0.18)', fontFamily:"'Space Mono',monospace", fontSize:'9px', color:'#2ABFBF', letterSpacing:'0.12em' }}>PRIMER INVITADO</span>
            </div>
            <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(17px,2.2vw,24px)', color:'#eef5fa', lineHeight:1.2, marginBottom:'16px' }}>Instituto Argentino de Refrigeración y Aire Acondicionado</h3>
            <p style={{ color:'#a8c8db', fontSize:'14px', lineHeight:1.75, marginBottom:'16px', maxWidth:'520px' }}>
              Fundado en 1991, el IARAA tiene como misión la capacitación en refrigeración y aire acondicionado, con una metodología propia basada en la práctica en taller. Es la única institución en la Ciudad Autónoma de Buenos Aires habilitada para entregar la matriculación en instalación de equipos split, además de la CACAAV.
            </p>
            <p style={{ color:'#a8c8db', fontSize:'14px', lineHeight:1.75, marginBottom:'24px', maxWidth:'520px' }}>
              Trabaja junto al Ministerio de Ambiente y Desarrollo Sostenible, llevando más de 15 años brindando el curso de Buenas Prácticas en Refrigeración dentro del Programa OZONO.
            </p>
            <div style={{ padding:'14px 18px', borderRadius:'6px', background:'rgba(42,191,191,0.04)', border:'1px solid rgba(42,191,191,0.1)', marginBottom:'28px' }}>
              <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'9px', color:'#2ABFBF', letterSpacing:'0.14em', marginBottom:'6px' }}>SEDES</div>
              <div style={{ fontSize:'13px', color:'#a8c8db' }}>CABA (Av. Directorio 4560) · Remedios de Escalada · Escobar · San Miguel · Salto (Bs. As.)</div>
            </div>
            <Button variant="orange" href="#">Ver Episodio EP 01</Button>
          </div>
        </div>

        {/* Próximos slots */}
        <div style={{ marginBottom:'48px' }}>
          <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'10px', color:'#5a8aa8', letterSpacing:'0.18em', textTransform:'uppercase', marginBottom:'20px' }}>Próximos Referentes</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))', gap:'12px' }}>
            {[2,3,4,5,6,7].map(n=>(
              <div key={n} style={{
                height:'110px', border:'1px dashed rgba(42,191,191,0.1)',
                borderRadius:'8px', background:'rgba(42,191,191,0.015)',
                display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'8px',
              }}>
                <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'13px', color:'rgba(42,191,191,0.2)', letterSpacing:'0.12em' }}>EP {String(n).padStart(2,'0')}</div>
                <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'9px', color:'rgba(42,191,191,0.15)', letterSpacing:'0.15em' }}>POR CONFIRMAR</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ padding:'40px 48px', textAlign:'center', border:'1px solid rgba(240,122,42,0.18)', borderRadius:'8px', background:'rgba(240,122,42,0.03)' }}>
          <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'22px', marginBottom:'10px' }}>¿Sos un referente del sector HVAC?</div>
          <p style={{ color:'#a8c8db', fontSize:'14px', margin:'0 auto 22px', maxWidth:'440px', lineHeight:1.7 }}>Compartí tu experiencia con miles de profesionales de LATAM. Escribinos y sé parte de la próxima temporada.</p>
          <Button variant="orange" href="mailto:manifold.abierto@gmail.com?subject=Quiero%20ser%20invitado%20en%20Manifold%20Abierto&body=Hola%20equipo%20de%20Manifold%20Abierto%2C%0A%0AMe%20gustar%C3%ADa%20postularme%20como%20referente%20del%20sector%20HVAC%20para%20participar%20en%20el%20programa.%0A%0ANombre%3A%20%0AEmpresa%2FOrganizaci%C3%B3n%3A%20%0APa%C3%ADs%3A%20%0AEspecialidad%3A%20%0A%0ASaludos">Quiero ser Invitado</Button>
        </div>
      </div>
      <style>{`@media(max-width:640px){.guest-featured{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}

/* ──────────────────────────────────────────────
   RESOURCES PAGE (Descargas | Glosario | FAQ)
────────────────────────────────────────────── */
function ResourcesPage() {
  const [tab, setTab] = useState('downloads');
  const [openFaq, setOpenFaq] = useState(null);
  const [glossQ, setGlossQ] = useState('');

  const tabs = [{ id:'downloads', label:'Descargas' }, { id:'glossary', label:'Glosario' }, { id:'faq', label:'FAQ Técnico' }];

  const downloads = [
    { title:'Guía de Selección de Refrigerantes LATAM 2026', type:'PDF', size:'2.4 MB', desc:'Tabla comparativa de refrigerantes permitidos y su estado regulatorio en cada país de la región.' },
    { title:'Manual de Cálculo de Carga Térmica', type:'PDF', size:'3.8 MB', desc:'Metodología paso a paso para calcular cargas térmicas en espacios comerciales.' },
    { title:'Diagrama de Ciclos Frigoríficos', type:'PDF', size:'1.1 MB', desc:'Diagramas P-H y T-S para los principales refrigerantes del mercado.' },
    { title:'Checklist de Mantenimiento Preventivo HVAC', type:'PDF', size:'0.9 MB', desc:'Lista de verificación para mantenimiento preventivo de equipos de climatización.' },
    { title:'Marco Normativo HVAC en LATAM', type:'PDF', size:'4.2 MB', desc:'Compilación de normativas y regulaciones vigentes en Argentina, Brasil, Colombia, Chile, México, Perú y Uruguay.' },
    { title:'Introducción a Sistemas VRF', type:'PDF', size:'5.1 MB', desc:'Guía técnica sobre Variable Refrigerant Flow: tipos, aplicaciones y diseño en proyectos LATAM.' },
  ];

  const guestMaterials = [
    { guest:'Guillermo Andrade', org:'IARAA', ep:'EP 01', title:'Presentación IARAA: 30 años formando técnicos HVAC', type:'PDF', desc:'Metodología de enseñanza, sedes y programas de certificación del Instituto Argentino de Refrigeración y A/C.', coming:false },
    { guest:'Por confirmar', org:'EP 02', ep:'EP 02', title:'Material del próximo invitado', type:'PDF', desc:'El invitado del episodio 02 compartirá recursos exclusivos para la audiencia de Manifold Abierto.', coming:true },
    { guest:'Por confirmar', org:'EP 03', ep:'EP 03', title:'Material del próximo invitado', type:'PDF', desc:'Recursos técnicos aportados por el referente del episodio 03.', coming:true },
  ];

  const glossary = [
    { t:'BTU', d:'British Thermal Unit. Unidad de energía equivalente a 1055 joules. Se usa para medir capacidad de equipos de climatización (1 TR = 12.000 BTU/h).' },
    { t:'COP', d:'Coeficiente de Rendimiento (Coefficient of Performance). Relación entre la energía útil producida y la energía eléctrica consumida.' },
    { t:'EER', d:'Energy Efficiency Ratio. Relación entre la capacidad frigorífica (BTU/h) y el consumo eléctrico (W) en condiciones nominales.' },
    { t:'Evaporador', d:'Intercambiador de calor donde el refrigerante absorbe calor del medio a enfriar, pasando de estado líquido a gaseoso.' },
    { t:'Condensador', d:'Intercambiador de calor donde el refrigerante cede calor al medio exterior, pasando de estado gaseoso a líquido.' },
    { t:'Compresor', d:'Componente que aumenta la presión y temperatura del gas refrigerante. Corazón del sistema frigorífico.' },
    { t:'Manifold', d:'Colector de alta y baja presión utilizado para diagnóstico, carga y evacuación de sistemas de refrigeración y aire acondicionado.' },
    { t:'Refrigerante', d:'Fluido de trabajo del ciclo frigorífico. Absorbe y libera calor en los intercambiadores. Ej: R-410A, R-32, R-134a.' },
    { t:'SEER', d:'Seasonal Energy Efficiency Ratio. EER estacional que considera variaciones de temperatura durante toda la temporada de uso.' },
    { t:'Subcooling', d:'Subenfrimiento del líquido refrigerante. Temperatura por debajo de la saturación en la salida del condensador. Indica carga correcta.' },
    { t:'Superheat', d:'Sobrecalentamiento del vapor refrigerante. Temperatura por encima de la saturación en la salida del evaporador.' },
    { t:'TR', d:'Tonelada de Refrigeración. Unidad de capacidad equivalente a 12.000 BTU/h o 3,517 kW.' },
    { t:'VRF', d:'Variable Refrigerant Flow. Sistema de climatización centralizado con compresor de velocidad variable que regula el flujo de refrigerante.' },
    { t:'VRV', d:'Variable Refrigerant Volume. Variante comercial de los sistemas VRF, denominación registrada por Daikin.' },
    { t:'Vacío', d:'Proceso de evacuación del sistema. Se extrae aire y humedad antes de cargar refrigerante. Se mide en micrones.' },
  ].filter(g => !glossQ || g.t.toLowerCase().includes(glossQ.toLowerCase()) || g.d.toLowerCase().includes(glossQ.toLowerCase()));

  const faqs = [
    { q:'¿Qué es un manifold y para qué se usa?', a:'Un manifold (o colector de manómetros) es una herramienta de diagnóstico que permite leer las presiones de alta y baja del sistema, cargar refrigerante, medir superheat/subcooling y evacuar el circuito. Es el instrumento más básico del técnico HVAC.' },
    { q:'¿Cuáles son los refrigerantes más usados en LATAM actualmente?', a:'Los más comunes son R-410A y R-32 en aires acondicionados residenciales y comerciales, R-134a en automotriz, y R-404A/R-507 en refrigeración comercial. La transición hacia refrigerantes de bajo GWP (R-32, HFO) está en curso según el Protocolo de Kigali.' },
    { q:'¿Qué diferencia hay entre EER y SEER?', a:'El EER mide la eficiencia en condiciones nominales específicas (35°C exterior, 27°C interior). El SEER mide la eficiencia durante toda la temporada de uso, considerando distintas condiciones de temperatura. El SEER siempre es más representativo del consumo real.' },
    { q:'¿Cómo se calcula el superheat correcto?', a:'El superheat se mide en la línea de succión, a la salida del evaporador. Temperatura real medida con sonda menos temperatura de saturación según la presión de baja. El valor objetivo depende del sistema, pero típicamente es 8-12°C para expansión termostática.' },
    { q:'¿Cuándo conviene usar un sistema VRF/VRV?', a:'Los sistemas VRF son ideales para edificios de múltiples ambientes que requieren control independiente de temperatura, hoteles, oficinas corporativas y establecimientos comerciales medianos a grandes. Ofrecen alta eficiencia y flexibilidad, pero requieren mayor inversión inicial.' },
    { q:'¿Qué marco normativo regula el sector HVAC en América Latina?', a:'El panorama regulatorio varía por país pero tiene bases comunes. Todos los países de la región adhieren al Protocolo de Montreal y su Enmienda de Kigali, que regula la eliminación de refrigerantes HFC. Argentina tiene normas IRAM y CACAAV; Brasil regula a través de PROCEL y ABNT; Chile con normas SEC y NCh; Colombia con RETIE; México con NOM. La tendencia regional es converger hacia estándares de eficiencia energética y transición a refrigerantes de bajo GWP.' },
    { q:'¿Cómo se mide una carga de refrigerante correctamente?', a:'La forma más precisa es por peso en báscula electrónica, cargando la cantidad exacta indicada en la placa del equipo. También puede verificarse por presiones (relación presión-temperatura del refrigerante) controlando superheat y subcooling simultáneamente.' },
    { q:'¿Qué es el subcooling y qué indica?', a:'El subcooling es la diferencia entre la temperatura de saturación del condensador y la temperatura real del líquido a la salida. Un subcooling de 5-8°C indica carga correcta. Valores bajos pueden indicar falta de gas; valores altos, exceso de refrigerante u obstrucción en el circuito.' },
  ];

  return (
    <div>
      <PageHero label="Recursos" title="Recursos Técnicos" subtitle="Guías, glosario y respuestas a las preguntas más frecuentes del sector HVAC en LATAM."/>

      {/* Tabs */}
      <div style={{ background:'#0c1624', borderBottom:'1px solid rgba(42,191,191,0.08)', padding:'0 clamp(16px,5vw,80px)' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto', display:'flex', gap:'0' }}>
          {tabs.map(t=>(
            <button key={t.id} onClick={()=>setTab(t.id)} style={{
              padding:'16px 24px', background:'none', border:'none',
              color: tab===t.id ? '#2ABFBF' : '#a8c8db',
              fontFamily:"'DM Sans',sans-serif", fontWeight:600,
              fontSize:'13px', letterSpacing:'0.04em', cursor:'pointer',
              borderBottom: tab===t.id ? '2px solid #2ABFBF' : '2px solid transparent',
              transition:'all 0.2s',
            }}>{t.label}</button>
          ))}
        </div>
      </div>

      <div style={{ padding:'60px clamp(16px,5vw,80px)', maxWidth:'1100px', margin:'0 auto' }}>

        {/* DOWNLOADS */}
        {tab === 'downloads' && (
          <div>
            {/* ── Material de invitados ── */}
            <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'10px', color:'#F07A2A', letterSpacing:'0.18em', textTransform:'uppercase', marginBottom:'8px' }}>Material de Invitados</div>
            <p style={{ color:'#a8c8db', fontSize:'13px', marginBottom:'24px', lineHeight:1.6 }}>Recursos exclusivos que cada referente del programa comparte para la comunidad HVAC de LATAM.</p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:'16px' }}>
              {guestMaterials.map((g,i)=>(
                <div key={i} style={{
                  border: g.coming ? '1px dashed rgba(42,191,191,0.12)' : '1px solid rgba(240,122,42,0.25)',
                  borderRadius:'8px', background: g.coming ? 'rgba(42,191,191,0.02)' : 'linear-gradient(135deg,#111e2e,#0c1624)',
                  padding:'22px 24px', display:'flex', flexDirection:'column', gap:'10px',
                  opacity: g.coming ? 0.65 : 1, transition:'all 0.22s',
                }}
                onMouseEnter={e=>{ if(!g.coming){ e.currentTarget.style.borderColor='rgba(240,122,42,0.5)'; }}}
                onMouseLeave={e=>{ if(!g.coming){ e.currentTarget.style.borderColor='rgba(240,122,42,0.25)'; }}}
                >
                  <div style={{ display:'flex', gap:'8px', alignItems:'center', flexWrap:'wrap' }}>
                    <span style={{ padding:'4px 10px', borderRadius:'20px', background:'rgba(240,122,42,0.1)', border:'1px solid rgba(240,122,42,0.25)', fontFamily:"'Space Mono',monospace", fontSize:'9px', color:'#F07A2A', letterSpacing:'0.1em' }}>{g.ep}</span>
                    <span style={{ fontSize:'12px', color:'#a8c8db', fontWeight:500 }}>{g.guest}</span>
                    {g.org && !g.coming && <span style={{ fontSize:'11px', color:'#5a8aa8' }}>· {g.org}</span>}
                  </div>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'13px', color: g.coming ? '#5a8aa8' : '#eef5fa', lineHeight:1.4 }}>{g.title}</div>
                  <div style={{ color:'#a8c8db', fontSize:'12px', lineHeight:1.6, flex:1 }}>{g.desc}</div>
                  {!g.coming
                    ? <Button variant="secondary" href="#">Descargar</Button>
                    : <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'9px', color:'rgba(42,191,191,0.35)', letterSpacing:'0.15em' }}>PRÓXIMAMENTE</div>
                  }
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GLOSSARY */}
        {tab === 'glossary' && (
          <div>
            <div style={{ marginBottom:'32px' }}>
              <input value={glossQ} onChange={e=>setGlossQ(e.target.value)}
                placeholder="Buscar término técnico…"
                style={{
                  width:'100%', maxWidth:'420px', padding:'13px 20px',
                  background:'#0c1624', border:'1px solid rgba(42,191,191,0.18)',
                  borderRadius:'3px', color:'#eef5fa', fontSize:'14px',
                }}
                onFocus={e=>e.target.style.borderColor='#2ABFBF'}
                onBlur={e=>e.target.style.borderColor='rgba(42,191,191,0.18)'}
              />
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:'14px' }}>
              {glossary.map(g=>(
                <div key={g.t} style={{
                  padding:'20px 22px', border:'1px solid rgba(42,191,191,0.08)',
                  borderRadius:'6px', background:'#0c1624', transition:'border-color 0.2s',
                }}
                onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(42,191,191,0.25)'}
                onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(42,191,191,0.08)'}
                >
                  <div style={{ fontFamily:"'Space Mono',monospace", fontWeight:700, fontSize:'13px', color:'#2ABFBF', marginBottom:'8px' }}>{g.t}</div>
                  <div style={{ color:'#a8c8db', fontSize:'14px', lineHeight:1.65 }}>{g.d}</div>
                </div>
              ))}
              {glossary.length===0 && (
                <div style={{ color:'#5a8aa8', fontFamily:"'Space Mono',monospace", fontSize:'11px', padding:'20px 0', letterSpacing:'0.1em' }}>
                  SIN RESULTADOS
                </div>
              )}
            </div>
          </div>
        )}

        {/* FAQ */}
        {tab === 'faq' && (
          <div style={{ maxWidth:'760px' }}>
            {faqs.map((f,i)=>(
              <div key={i} style={{
                borderBottom:'1px solid rgba(42,191,191,0.07)',
                overflow:'hidden',
              }}>
                <button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{
                  width:'100%', background:'none', border:'none',
                  padding:'22px 0', display:'flex', justifyContent:'space-between', alignItems:'flex-start',
                  gap:'20px', cursor:'pointer', textAlign:'left',
                }}>
                  <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'15px', color:'#eef5fa', lineHeight:1.4 }}>{f.q}</span>
                  <span style={{
                    flexShrink:0, width:'22px', height:'22px', borderRadius:'50%',
                    border:'1px solid rgba(42,191,191,0.3)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    color:'#2ABFBF', fontSize:'14px', transition:'transform 0.25s',
                    transform: openFaq===i ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}>+</span>
                </button>
                {openFaq===i && (
                  <div style={{ padding:'0 0 22px', color:'#a8c8db', fontSize:'16px', lineHeight:1.75 }}>{f.a}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   SPONSORS PAGE
────────────────────────────────────────────── */
function SponsorsPage() {
  const [form, setForm] = useState({ nombre:'', empresa:'', email:'', mensaje:'' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const set = (k,v) => setForm(f=>({...f,[k]:v}));

  const enviar = async () => {
    if(!form.email || !form.nombre){ setErr('Completá nombre y email.'); return; }
    setLoading(true);
    try {
      const res = await fetch('https://formspree.io/f/xgoqdkng', {
        method:'POST',
        headers:{ 'Content-Type':'application/json', 'Accept':'application/json' },
        body: JSON.stringify({ ...form, tipo:'Consulta Sponsor Manifold Abierto', _subject:`Consulta Sponsor: ${form.empresa}` }),
      });
      if(res.ok){ setSent(true); setErr(''); }
      else { setErr('Error al enviar. Intentá de nuevo.'); }
    } catch(ex) { setErr('Error de conexión.'); }
    setLoading(false);
  };



  return (
    <div>
      <PageHero label="Sponsors" title="Sponsors y Partners" subtitle="Conectá tu marca con los profesionales HVAC más activos de América Latina."/>
      <div style={{ padding:'60px clamp(16px,5vw,80px)', maxWidth:'1100px', margin:'0 auto' }}>
        {/* Sponsors grid */}
        <div style={{ marginBottom:'64px' }}>
          <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'10px', color:'#2ABFBF', letterSpacing:'0.18em', textTransform:'uppercase', marginBottom:'24px' }}>Nuestros Sponsors &amp; Partners</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))', gap:'14px' }}>
            {[
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
            ].map(sp=>(
              <div key={sp.name} style={{
                height:'90px', borderRadius:'10px',
                display:'flex', alignItems:'center', justifyContent:'center',
                padding:'14px 20px',
                background:'rgba(255,255,255,0.05)',
                border:'1px solid rgba(255,255,255,0.09)',
                transition:'all 0.22s',
              }}
              onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.borderColor='rgba(42,191,191,0.28)'; e.currentTarget.style.background='rgba(42,191,191,0.06)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.09)'; e.currentTarget.style.background='rgba(255,255,255,0.05)'; }}
              >
                {sp.src
                  ? sp.whiteBg
                    ? <div style={{ background:'white', borderRadius:'6px', padding:'6px 12px', display:'flex', alignItems:'center', justifyContent:'center' }}>
                        <img src={sp.src} alt={sp.name} style={{ maxHeight:'38px', maxWidth:'100px', objectFit:'contain', display:'block' }}/>
                      </div>
                    : <img src={sp.src} alt={sp.name} style={{ maxHeight:'48px', maxWidth:'120px', objectFit:'contain', display:'block' }}/>
                  : <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'17px', color:'#a8c8db', letterSpacing:'0.05em' }}>{sp.name}</span>
                }
              </div>
            ))}
          </div>
        </div>

        {/* Value prop */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:'16px', marginBottom:'64px' }}>
          {[
            { val:'LATAM', lbl:'Alcance Regional' },
            { val:'HVAC', lbl:'Audiencia Especializada' },
            { val:'T1', lbl:'Primera Temporada 2026' },
            { val:'Multi', lbl:'Presencia en Plataformas' },
          ].map(s=>(
            <div key={s.lbl} style={{
              padding:'24px', border:'1px solid rgba(42,191,191,0.1)',
              borderRadius:'6px', background:'#0c1624', textAlign:'center',
            }}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'28px', color:'#2ABFBF', marginBottom:'6px' }}>{s.val}</div>
              <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'9px', color:'#5a8aa8', letterSpacing:'0.12em', textTransform:'uppercase' }}>{s.lbl}</div>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div id="contact" style={{
          border:'1px solid rgba(42,191,191,0.12)', borderRadius:'8px',
          background:'#0c1624', padding:'48px',
        }}>
          <SectionTitle label="Contacto" title="¿Querés ser Sponsor?" subtitle="Completá el formulario y te contactamos en 48hs." align="left"/>
          {!sent ? (
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px', maxWidth:'640px' }} className="form-grid">
              {[['nombre','Nombre completo','text'],['empresa','Empresa','text'],['email','Email','email'],].map(([k,ph,type])=>(
                <input key={k} type={type} placeholder={ph} value={form[k]} onChange={e=>set(k,e.target.value)}
                  style={{
                    padding:'13px 18px', background:'#111e2e',
                    border:'1px solid rgba(42,191,191,0.18)', borderRadius:'3px',
                    color:'#eef5fa', fontSize:'14px', transition:'border-color 0.2s',
                  }}
                  onFocus={e=>e.target.style.borderColor='#2ABFBF'}
                  onBlur={e=>e.target.style.borderColor='rgba(42,191,191,0.18)'}
                />
              ))}
              <textarea placeholder="Contanos sobre tu empresa y objetivos…" value={form.mensaje} onChange={e=>set('mensaje',e.target.value)}
                rows={3} style={{
                  gridColumn:'1/-1', padding:'13px 18px', background:'#111e2e',
                  border:'1px solid rgba(42,191,191,0.18)', borderRadius:'3px',
                  color:'#eef5fa', fontSize:'14px', resize:'vertical', transition:'border-color 0.2s',
                }}
                onFocus={e=>e.target.style.borderColor='#2ABFBF'}
                onBlur={e=>e.target.style.borderColor='rgba(42,191,191,0.18)'}
              />
              <div style={{ gridColumn:'1/-1', display:'flex', flexDirection:'column', gap:'8px' }}>
                <Button variant="orange" size="lg" onClick={enviar}>{loading ? 'Enviando...' : 'Enviar Consulta'}</Button>
                {err && <div style={{ color:'#F07A2A', fontSize:'12px', fontFamily:"'Space Mono',monospace" }}>{err}</div>}
              </div>
            </div>
          ) : (
            <div style={{ padding:'24px', background:'rgba(42,191,191,0.06)', border:'1px solid rgba(42,191,191,0.2)', borderRadius:'6px', color:'#2ABFBF', fontFamily:"'Syne',sans-serif", fontWeight:700 }}>
              ¡Gracias! Recibirás respuesta en las próximas 48 horas.
            </div>
          )}
        </div>
      </div>
      <style>{`@media(max-width:520px){.form-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}

/* ──────────────────────────────────────────────
   ABOUT PAGE
────────────────────────────────────────────── */
function AboutPage() {
  const cities = [
    { name:'Buenos Aires', x:152, y:298, active:true, highlight:true },
    { name:'Rosario', x:145, y:285, active:true, highlight:true },
    { name:'Ciudad de México', x:78, y:72, active:true },
    { name:'Bogotá', x:107, y:150, active:true },
    { name:'Caracas', x:148, y:130, active:true },
    { name:'Lima', x:90, y:192, active:true },
    { name:'São Paulo', x:192, y:248, active:true },
    { name:'Santiago', x:112, y:295, active:true },
    { name:'Montevideo', x:164, y:302, active:false },
    { name:'Quito', x:88, y:165, active:false },
    { name:'La Paz', x:125, y:220, active:false },
    { name:'Asunción', x:148, y:263, active:false },
    { name:'Río de Janeiro', x:198, y:255, active:false },
  ];

  return (
    <div>
      <PageHero label="Sobre el Programa" title="Manifold Abierto" subtitle="La historia, la misión y el equipo detrás del podcast de referencia HVAC para América Latina."/>
      <div style={{ padding:'40px clamp(16px,5vw,80px) 60px', maxWidth:'1100px', margin:'0 auto' }}>

        {/* Story */}
        <div style={{
          display:'grid', gridTemplateColumns:'1fr 1fr', gap:'64px',
          alignItems:'center', marginBottom:'60px',
        }} className="about-story">
          <div>
            <SectionTitle label="Nuestra Historia" title="Por qué existe Manifold Abierto" align="left" style={{marginBottom:'20px'}}/>
            <p style={{ color:'#a8c8db', fontSize:'16px', lineHeight:1.8, marginBottom:'20px' }}>
              El sector HVAC en América Latina tiene décadas de historia, miles de profesionales apasionados y una industria en constante transformación. Sin embargo, los espacios de divulgación técnica en español son escasos y dispersos.
            </p>
            <p style={{ color:'#a8c8db', fontSize:'16px', lineHeight:1.8, marginBottom:'20px' }}>
              Manifold Abierto nace para llenar ese vacío: un podcast donde los mejores del sector comparten su conocimiento, experiencia y visión del futuro. Sin filtros. Con el rigor técnico que la industria merece.
            </p>
            <p style={{ color:'#a8c8db', fontSize:'16px', lineHeight:1.8 }}>
              El nombre es un homenaje al manifold, la herramienta icónica de todo técnico frigorista. Un instrumento que conecta, mide y diagnostica. Como este podcast.
            </p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px' }}>
            {[
              { title:'Misión', desc:'Conectar y capacitar a los profesionales HVAC de LATAM a través del conocimiento compartido.' },
              { title:'Visión', desc:'Ser el podcast técnico más escuchado del sector en América Latina para 2027.' },
              { title:'Valores', desc:'Rigor técnico, honestidad profesional, comunidad colaborativa y perspectiva regional.' },
              { title:'Audiencia', desc:'Técnicos, ingenieros, instaladores, fabricantes y distribuidores del sector HVAC.' },
            ].map(v=>(
              <div key={v.title} style={{
                padding:'20px', border:'1px solid rgba(42,191,191,0.08)',
                borderRadius:'6px', background:'#0c1624',
              }}>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'12px', color:'#2ABFBF', letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:'8px' }}>{v.title}</div>
                <div style={{ color:'#a8c8db', fontSize:'14px', lineHeight:1.6 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Host */}
        <div style={{ marginBottom:'80px' }}>
          <SectionTitle label="El Conductor" title="Cristian Trotta"/>
          <div style={{
            display:'flex', gap:'36px', alignItems:'flex-start',
            padding:'36px 40px',
            border:'1px solid rgba(42,191,191,0.12)', borderRadius:'10px',
            background:'#0c1624', flexWrap:'wrap',
          }}>
            <div style={{
              width:'88px', height:'88px', borderRadius:'50%', flexShrink:0,
              background:'linear-gradient(135deg,rgba(42,191,191,0.2),rgba(240,122,42,0.1))',
              border:'2px solid rgba(42,191,191,0.3)',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'28px', color:'#2ABFBF',
            }}>CT</div>
            <div style={{ flex:1, minWidth:'240px' }}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'22px', color:'#eef5fa', marginBottom:'4px' }}>Cristian Trotta</div>
              <div style={{ color:'#2ABFBF', fontSize:'13px', marginBottom:'16px', fontFamily:"'Space Mono',monospace", letterSpacing:'0.08em' }}>CONDUCTOR — MANIFOLD ABIERTO</div>
              <p style={{ color:'#a8c8db', fontSize:'16px', lineHeight:1.75 }}>
                Profesional del sector HVAC con amplia trayectoria en la industria latinoamericana. Apasionado por la divulgación técnica y la formación profesional. A través de Manifold Abierto, Cristian busca crear el espacio de conversación técnica que el sector HVAC de LATAM necesita.
              </p>
            </div>
          </div>
        </div>

        {/* Producer card */}
        <div style={{
          display:'flex', gap:'24px', alignItems:'center',
          padding:'28px 36px', marginBottom:'80px',
          border:'1px solid rgba(42,191,191,0.12)', borderRadius:'10px',
          background:'#0c1624', flexWrap:'wrap',
        }}>
          <div style={{
            width:'64px', height:'64px', borderRadius:'50%', flexShrink:0,
            background:'linear-gradient(135deg,rgba(42,191,191,0.15),rgba(240,122,42,0.08))',
            border:'2px solid rgba(42,191,191,0.25)',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'20px', color:'#2ABFBF',
          }}>MW</div>
          <div>
            <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'18px', color:'#eef5fa', marginBottom:'3px' }}>MW</div>
            <div style={{ color:'#2ABFBF', fontSize:'12px', fontFamily:"'Space Mono',monospace", letterSpacing:'0.1em' }}>PRODUCTOR — MANIFOLD ABIERTO</div>
          </div>
        </div>

        {/* LATAM Map */}
        <div style={{ marginBottom:'60px' }}>
          <SectionTitle label="Comunidad LATAM" title="Nuestra Audiencia en América Latina"/>
          <div style={{
            background:'#0c1624', border:'1px solid rgba(42,191,191,0.1)',
            borderRadius:'10px', padding:'40px',
            display:'grid', gridTemplateColumns:'1fr 1fr', gap:'40px', alignItems:'center',
          }} className="map-grid">
            {/* SVG dot map */}
            <div style={{ display:'flex', justifyContent:'center' }}>
              <svg viewBox="0 0 280 360" style={{ width:'100%', maxWidth:'280px', height:'auto' }}>
                {/* Background */}
                <rect width="280" height="360" fill="transparent"/>
                {/* Dot grid */}
                {Array.from({length:14},(_,r)=>Array.from({length:11},(_,c)=>(
                  <circle key={`${r}-${c}`} cx={c*28+14} cy={r*28+14} r="1.2" fill="rgba(42,191,191,0.07)"/>
                )))}
                {/* Connection lines between active cities */}
                {[[[78,72],[107,150]],[[107,150],[90,192]],[[107,150],[148,130]],[[90,192],[192,248]],[[192,248],[152,298]],[[152,298],[112,295]]].map(([[x1,y1],[x2,y2]],i)=>(
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(42,191,191,0.12)" strokeWidth="1" strokeDasharray="4,4"/>
                ))}
                {/* City dots */}
                {cities.map(c=>(
                  <g key={c.name}>
                    {c.active && <circle cx={c.x} cy={c.y} r={c.highlight?14:10} fill={c.highlight?'rgba(240,122,42,0.1)':'rgba(42,191,191,0.06)'}/>}
                    <circle cx={c.x} cy={c.y} r={c.highlight?5.5:c.active?4:2.5}
                      fill={c.highlight?'#F07A2A':c.active?'#2ABFBF':'rgba(42,191,191,0.3)'}
                      style={c.active?{animation:'glow 2s ease-in-out infinite'}:{}}
                    />
                  </g>
                ))}
              </svg>
            </div>
            {/* City list */}
            <div>
              <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'10px', color:'#2ABFBF', letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:'16px' }}>Ciudades con Mayor Alcance</div>
              <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                {cities.filter(c=>c.active).map(c=>(
                  <div key={c.name} style={{ display:'flex', alignItems:'center', gap:'12px' }}>
                    <div style={{ width:'8px', height:'8px', borderRadius:'50%', background: c.highlight?'#F07A2A':'#2ABFBF', flexShrink:0, animation:'glow 2.5s ease-in-out infinite' }}/>
                    <div style={{ fontSize:'13px', color: c.highlight?'#eef5fa':'#a8c8db', fontWeight: c.highlight?600:400 }}>{c.name}{c.highlight?' ★':''}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop:'24px', fontFamily:"'Space Mono',monospace", fontSize:'10px', color:'#5a8aa8', letterSpacing:'0.1em' }}>
                Y creciendo en toda América Latina
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:720px){
          .about-story{grid-template-columns:1fr!important;gap:40px!important}
          .map-grid{grid-template-columns:1fr!important}
        }
      `}</style>
    </div>
  );
}

Object.assign(window, { EpisodesPage, GuestsPage, ResourcesPage, SponsorsPage, AboutPage });
