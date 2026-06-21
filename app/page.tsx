import Image from 'next/image';
import { Music, Mic2, Settings2, Clock, CheckCircle2, Headphones, Star, Award, ChevronRight, MessageCircle } from 'lucide-react';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';
import { AudioPlayer } from '@/components/audio-player';
import { FAQAccordion } from '@/components/faq-accordion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020A05] text-white w-full overflow-x-hidden selection:bg-[#FF7A00]/30 flex flex-col relative font-sans">
      <FloatingWhatsApp />

      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] pb-16 w-full flex flex-col justify-center">
        {/* Full-width Image Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop" 
            alt="Produtor no estúdio de gravação"
            fill
            className="object-cover object-right"
            priority
            referrerPolicy="no-referrer"
          />
          {/* Gradient Overlay to make left side dark and readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020A05] via-[#020A05]/90 to-transparent z-10"></div>
          {/* Bottom fade to match next section */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020A05] via-transparent to-transparent z-20"></div>
        </div>

        <div className="relative z-30 px-6 lg:px-10 max-w-[1200px] w-full mx-auto flex flex-col items-start pt-24 md:pt-32">
          
          <div className="max-w-2xl text-left">
            <h1 className="font-[family-name:var(--font-space)] text-5xl md:text-6xl lg:text-7xl font-bold uppercase mb-6 tracking-tight text-white leading-[1.05]">
              Sua música <br />
              fora do celular. <br />
              <span className="text-[#FF7A00]">Guia pronta e <br />
              profissional em 48h.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed max-w-xl">
              Você manda um áudio simples; nós entregamos um arranjo de estúdio e nossa voz profissional, pronto para você apresentar aos maiores artistas do mercado.
            </p>
          </div>

          <div className="w-full max-w-[800px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10">
            {/* Card 1: Letra e Melodia */}
            <div className="bg-black/60 backdrop-blur-md border border-[#FF7A00]/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-[0_0_30px_rgba(255,122,0,0.1)]">
              <div className="flex-shrink-0 text-[#FF7A00]">
                <Music className="w-10 h-10" />
              </div>
              <div className="text-center sm:text-left">
                <div className="text-white text-sm font-bold uppercase tracking-widest mb-1">MANTEMOS SUA ESSÊNCIA</div>
                <div className="text-[#FF7A00] text-xl font-black font-[family-name:var(--font-space)] tracking-tight leading-none mb-2">Respeito total à sua letra e melodia.</div>
                <div className="text-white/80 text-xs mt-1">A música fica exatamente do seu jeito, mas com qualidade de estúdio e nossa voz profissional.</div>
              </div>
            </div>

            {/* Card 2: 2 Dias */}
            <div className="bg-black/60 backdrop-blur-md border border-[#FFD700]/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-[0_0_30px_rgba(255,215,0,0.1)]">
              <div className="flex-shrink-0 text-[#FFD700]">
                 <Clock className="w-10 h-10" />
              </div>
              <div className="text-center sm:text-left">
                <div className="text-white text-sm font-bold uppercase tracking-widest mb-1">ENTREGA RÁPIDA</div>
                <div className="text-[#FFD700] text-xl font-black font-[family-name:var(--font-space)] tracking-tight leading-none mb-2">Pronto em apenas 2 dias úteis.</div>
                <div className="text-white/80 text-xs mt-1">Velocidade sem comprometer a qualidade, para você não perder nenhuma oportunidade.</div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[800px] text-center mt-4">
            <p className="text-[#FF7A00] font-bold text-sm md:text-base mb-8 uppercase tracking-widest text-center">
              Mais de 500 gravações <span className="text-white">para compositores de todo o Brasil. Agora é a sua vez.</span>
            </p>

            <div className="flex flex-col items-center gap-3">
              <WhatsAppButton className="w-full sm:w-auto font-black text-lg py-5 px-12 rounded-lg shadow-[0_0_30px_rgba(255,122,0,0.2)]">
                ORÇAR MINHA GUIA (PRAZO EXATO)
              </WhatsAppButton>
              <div className="text-xs text-white/50">
                Sem compromisso. Saiba na hora o prazo e valor exato pro seu projeto.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Faixa Inferior */}
      <div className="h-12 bg-[#FF7A00] flex items-center overflow-hidden border-y border-black relative z-10 w-[105%] -ml-4 -rotate-1 mb-16 shadow-[0_0_20px_rgba(255,122,0,0.1)]">
        <div className="flex animate-marquee-fast whitespace-nowrap text-black font-black uppercase text-sm tracking-tighter">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="px-4">+500 COMPOSITORES JÁ SAÍRAM DO CELULAR •</span>
          ))}
        </div>
      </div>

      {/* 2. Cards de Diferenciais */}
      <section className="px-6 lg:px-10 pb-16 relative">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white/5 border border-white/10 p-5 rounded-xl flex items-center gap-4 backdrop-blur-md hover:bg-white/10 transition-colors">
            <div className="text-[#FF7A00]"><Music className="w-6 h-6" /></div>
            <span className="text-sm font-medium">Arranjo original e profissional</span>
          </div>
          <div className="bg-white/5 border border-white/10 p-5 rounded-xl flex items-center gap-4 backdrop-blur-md hover:bg-white/10 transition-colors">
            <div className="text-[#FF7A00]"><Mic2 className="w-6 h-6" /></div>
            <span className="text-sm font-medium">Interpretação de voz profissional</span>
          </div>
          <div className="bg-white/5 border border-white/10 p-5 rounded-xl flex items-center gap-4 backdrop-blur-md hover:bg-white/10 transition-colors">
            <div className="text-[#FF7A00]"><Settings2 className="w-6 h-6" /></div>
            <span className="text-sm font-medium">Mixagem de alta qualidade pronta</span>
          </div>
          <div className="bg-white/5 border border-white/10 p-5 rounded-xl flex items-center gap-4 backdrop-blur-md hover:bg-white/10 transition-colors">
            <div className="text-[#FF7A00]"><Clock className="w-6 h-6" /></div>
            <span className="text-sm font-medium">Pronto em até 2 dias úteis</span>
          </div>
        </div>
      </section>

      {/* 3. Antes e Depois (Prova de transformação) */}
      <section className="px-6 py-20 relative border-t border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white font-[family-name:var(--font-space)] tracking-tight mb-4">
              Ouça a <span className="text-[#FF7A00]">transformação</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              A mesma letra. A mesma melodia. ZERO alteração na sua ideia. 100% qualidade de estúdio profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Exemplo 1 */}
            <div className="bg-gradient-to-b from-white/[0.05] to-[#FF7A00]/[0.02] border border-white/10 p-8 rounded-[2rem] relative overflow-hidden group hover:border-[#FF7A00]/30 transition-all duration-500">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FF7A00]/10 blur-[80px] rounded-full pointer-events-none transition-all duration-500 group-hover:bg-[#FF7A00]/20"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/50 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-8 shadow-sm">
                  <Music className="w-3 h-3 text-[#FF7A00]" /> Sertanejo
                </div>

                <div className="space-y-6 relative">
                  {/* Vertical Connecting Line */}
                  <div className="absolute left-[39px] top-[60px] bottom-[60px] w-0.5 bg-gradient-to-b from-white/10 via-white/10 to-[#FF7A00]/30 sm:block hidden z-0"></div>

                  {/* Stage 1: Before */}
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                    <div className="w-20 h-20 rounded-full bg-black border border-white/10 flex items-center justify-center shrink-0 shadow-lg relative mx-auto sm:mx-0">
                      <div className="absolute -top-1 -right-1 bg-red-500 text-[10px] font-bold text-white px-2 py-0.5 rounded-full shadow border border-black z-20">1</div>
                      <div className="w-4 h-4 rounded-full bg-red-500/80"></div>
                    </div>
                    <div className="flex flex-col flex-1 w-full text-center sm:text-left">
                      <div className="mb-2">
                        <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest block mb-0.5">Áudio do celular</span>
                        <span className="text-sm font-medium text-white/80">Gravação Simples (Celular)</span>
                      </div>
                      <AudioPlayer src="ANTES_1.mp3" label="Sua ideia no celular" variant="before" />
                    </div>
                  </div>

                  {/* Stage 2: After */}
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-8 sm:mt-4">
                    <div className="w-20 h-20 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,122,0,0.2)] mx-auto sm:mx-0">
                      <div className="absolute -top-1 -right-1 bg-[#FF7A00] text-[10px] font-bold text-black px-2 py-0.5 rounded-full shadow border border-black z-20">2</div>
                      <div className="w-4 h-4 rounded-full bg-[#FF7A00] animate-pulse"></div>
                    </div>
                    <div className="flex flex-col flex-1 w-full text-center sm:text-left">
                      <div className="mb-2">
                        <span className="text-[10px] text-[#FF7A00] font-bold uppercase tracking-widest block mb-0.5">Qualidade Estúdio</span>
                        <span className="text-base font-bold text-white shadow-sm">Guia Profissional Alquimia</span>
                      </div>
                      <AudioPlayer src="DEPOIS_1.mp3" label="Pronta para o artista" variant="after" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplo 2 - Gospel/Louvor */}
            <div className="bg-gradient-to-b from-white/[0.05] to-[#FF7A00]/[0.02] border border-white/10 p-8 rounded-[2rem] relative overflow-hidden group hover:border-[#FF7A00]/30 transition-all duration-500">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FF7A00]/10 blur-[80px] rounded-full pointer-events-none transition-all duration-500 group-hover:bg-[#FF7A00]/20"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/50 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-8 shadow-sm">
                  <Music className="w-3 h-3 text-[#FF7A00]" /> Gospel / Louvor
                </div>

                <div className="space-y-6 relative">
                  {/* Vertical Connecting Line */}
                  <div className="absolute left-[39px] top-[60px] bottom-[60px] w-0.5 bg-gradient-to-b from-white/10 via-white/10 to-[#FF7A00]/30 sm:block hidden z-0"></div>

                  {/* Stage 1: Before */}
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                    <div className="w-20 h-20 rounded-full bg-black border border-white/10 flex items-center justify-center shrink-0 shadow-lg relative mx-auto sm:mx-0">
                      <div className="absolute -top-1 -right-1 bg-red-500 text-[10px] font-bold text-white px-2 py-0.5 rounded-full shadow border border-black z-20">1</div>
                      <div className="w-4 h-4 rounded-full bg-red-500/80"></div>
                    </div>
                    <div className="flex flex-col flex-1 w-full text-center sm:text-left">
                      <div className="mb-2">
                        <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest block mb-0.5">Áudio do celular</span>
                        <span className="text-sm font-medium text-white/80">Gravação Simples (Celular)</span>
                      </div>
                      <AudioPlayer src="ANTES_3.mp3" label="Sua ideia no celular" variant="before" />
                    </div>
                  </div>

                  {/* Stage 2: After */}
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-8 sm:mt-4">
                    <div className="w-20 h-20 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,122,0,0.2)] mx-auto sm:mx-0">
                      <div className="absolute -top-1 -right-1 bg-[#FF7A00] text-[10px] font-bold text-black px-2 py-0.5 rounded-full shadow border border-black z-20">2</div>
                      <div className="w-4 h-4 rounded-full bg-[#FF7A00] animate-pulse"></div>
                    </div>
                    <div className="flex flex-col flex-1 w-full text-center sm:text-left">
                      <div className="mb-2">
                        <span className="text-[10px] text-[#FF7A00] font-bold uppercase tracking-widest block mb-0.5">Qualidade Estúdio</span>
                        <span className="text-base font-bold text-white shadow-sm">Guia Profissional Alquimia</span>
                      </div>
                      <AudioPlayer src="DEPOIS_3.mp3" label="Pronta para o artista" variant="after" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
             <span className="text-sm text-white/40 italic">*Áudios ilustrativos. Adicione seus arquivos substituindo os conectores de áudio no código.</span>
          </div>
        </div>
      </section>

      {/* 4. Como Funciona */}
      <section className="px-6 py-20 relative border-t border-white/5">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF7A00]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white font-[family-name:var(--font-space)] tracking-tight mb-4">
              O Processo em <span className="text-[#FF7A00]">4 Passos Simples</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                step: "01",
                text: "Grave agora mesmo no WhatsApp: basta a sua voz cantando a ideia.",
                icon: Mic2
              },
              {
                step: "02",
                text: "Deciframos o ritmo, o tom e a exata emoção da sua ideia direto pelo WhatsApp.",
                icon: MessageCircle
              },
              {
                step: "03",
                text: "Instrumentos e vozes gravados no estúdio para criar o seu arranjo profissional do zero.",
                icon: Headphones
              },
              {
                step: "04",
                text: "Em até 2 dias úteis, sua guia pronta, mixada e masterizada para impressionar o mercado.",
                icon: CheckCircle2
              }
            ].map((s) => (
              <div key={s.step} className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-6 group hover:border-white/20 transition-colors backdrop-blur-md">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 text-[#FF7A00] font-[family-name:var(--font-space)] text-xl font-bold group-hover:scale-110 group-hover:bg-white/10 transition-all">
                  {s.step}
                </div>
                <div className="flex-1">
                  <p className="text-lg text-white/80 font-medium leading-relaxed">{s.text}</p>
                </div>
                <s.icon className="hidden md:block w-8 h-8 text-white/20 group-hover:text-white/40 transition-colors" />
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <WhatsAppButton variant="outline">Quero Saber Mais</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* 5. Para quem é */}
      <section className="px-6 py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white font-[family-name:var(--font-space)] tracking-tight text-center mb-12">
            Pra quem é a <span className="text-[#FF7A00]">guia musical</span> profissional
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Para você que tem uma ótima música na cabeça, mas nunca conseguiu gravar direito.",
              "Para quem não toca nenhum instrumento, mas precisa de um arranjo e mixagem impecáveis.",
              "Compositores com letras de ouro acumulando poeira no bloco de notas do celular.",
              "Para o compositor que quer provar o real valor da sua obra para grandes artistas."
            ].map((item, i) => (
              <div key={i} className="flex flex-row items-center gap-4 bg-black/40 p-5 rounded-xl border border-white/5">
                <ChevronRight className="flex-shrink-0 w-6 h-6 text-[#FF7A00]" />
                <p className="text-white/80 font-medium text-sm sm:text-base leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Prova Social */}
      <section className="px-6 py-20 relative">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-6xl md:text-[100px] font-black text-[#FF7A00] font-[family-name:var(--font-space)] tracking-tighter mb-4 drop-shadow-[0_0_20px_rgba(255,122,0,0.15)] leading-none">
              + 500
            </h2>
            <p className="text-2xl md:text-3xl text-white/80 font-black uppercase font-[family-name:var(--font-space)] max-w-2xl mx-auto leading-tight tracking-tight">
              Gravações entregues para compositores. <br/>
              <span className="text-white">Agora é a sua vez.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* Testimonial Placeholder 1 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative backdrop-blur-md">
              <Star className="w-8 h-8 text-[#FFD700] mb-6 fill-[#FFD700]" />
              <p className="text-white/80 text-lg leading-relaxed mb-6 font-serif italic">
                &quot;Gravado num celular simples na nossa igreja. Vocês deram vida ao louvor com uma qualidade absurda, de estúdio, sem mudar em nada a nossa essência.&quot;
              </p>
              <div>
                <p className="font-bold text-white font-[family-name:var(--font-space)] uppercase tracking-widest text-sm">Pr. Samuel M.</p>
                <p className="text-xs text-white/40 uppercase mt-1">Belo Horizonte - MG</p>
              </div>
            </div>

            {/* Testimonial Placeholder 2 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative backdrop-blur-md">
              <Star className="w-8 h-8 text-[#FFD700] mb-6 fill-[#FFD700]" />
              <p className="text-white/80 text-lg leading-relaxed mb-6 font-serif italic">
                &quot;De um áudio caseiro e ruim no carro pra uma guia de estúdio perfeita. Apresentei pra um produtor e a qualidade da master me fez fechar negócio na mesma semana!&quot;
              </p>
              <div>
                <p className="font-bold text-white font-[family-name:var(--font-space)] uppercase tracking-widest text-sm">Marcelo C.</p>
                <p className="text-xs text-white/40 uppercase mt-1">São Paulo - SP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="px-6 py-20 bg-black/40 border-t border-white/5 relative z-10">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white font-[family-name:var(--font-space)] tracking-tight mb-4">
              Perguntas <span className="text-[#FF7A00]">Frequentes</span>
            </h2>
          </div>
          
          <FAQAccordion items={[
            {
              question: "Preciso saber tocar algum instrumento ou ler música?",
              answer: "Não. Basta gravar a sua voz no celular e nos mandar no WhatsApp. Nosso time cria todo o arranjo do absoluto zero."
            },
            {
              question: "Minha composição está protegida contra plágio/roubo?",
              answer: "Totalmente segura. O direito autoral é 100% seu e o projeto é confidencial. Somos a sua produtora executiva."
            },
            {
              question: "E se o resultado não ficar como eu queria?",
              answer: "Nós alinhamos referências precisas pelo WhatsApp antes do play. Nosso foco é bater a qualidade que você idealizou."
            },
            {
              question: "Qual o prazo real de entrega da guia?",
              answer: "No máximo 2 dias úteis após o envio da sua ideia. Rapidez agressiva sem perder a excelência profissional."
            },
            {
              question: "Quanto custa e como pago?",
              answer: "Preço único de R$ 97. O acerto e as dúvidas são resolvidos direto no WhatsApp com nosso produtor, transparente e na hora."
            }
          ]} />
        </div>
      </section>

      {/* 8. CTA Final */}
      <section className="px-6 py-28 text-center relative border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF7A00]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-[54px] md:text-7xl font-black text-white font-[family-name:var(--font-space)] uppercase mb-6 leading-[1.1] tracking-tight">
            Sua música não <br />
            <span className="text-[#FF7A00]">merece a gaveta.</span>
          </h2>
          
          <div className="inline-block bg-[#FF7A00]/10 border border-[#FF7A00]/30 text-[#FF7A00] text-2xl md:text-3xl font-black font-[family-name:var(--font-space)] px-8 py-3 rounded-full mb-8 shadow-[0_0_30px_rgba(255,122,0,0.15)] hover:scale-105 transition-transform cursor-default">
             Por apenas R$ 97
          </div>

          <p className="text-xl text-white/70 mb-10 max-w-xl mx-auto">
            A guia profissional que vende a sua ideia. Valor promocional sujeito à lotação semanal da nossa agenda.
          </p>
          <WhatsAppButton className="w-full sm:w-auto font-black text-xl py-5 px-12 shadow-[0_0_30px_rgba(255,122,0,0.3)] hover:scale-105">
            Quero Garantir Minha Guia Hoje
          </WhatsAppButton>
        </div>
      </section>

      {/* 9. Marquee (Faixa Inferior) */}
      <div className="h-12 bg-[#FF7A00] flex items-center overflow-hidden border-y border-black w-[105%] -ml-4 rotate-1 shadow-[0_0_20px_rgba(255,122,0,0.1)] z-10 relative">
        <div className="flex animate-marquee-fast whitespace-nowrap text-black font-black uppercase text-sm tracking-tighter mix-blend-difference">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="px-4">+500 COMPOSITORES JÁ SAÍRAM DO CELULAR •</span>
          ))}
        </div>
      </div>

      {/* 10. Footer */}
      <footer className="bg-black py-16 px-6 text-center border-t border-white/5 relative z-10">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6">
          <div className="font-[family-name:var(--font-space)] text-2xl font-black tracking-tighter uppercase">
            Alquimia <span className="text-[#FF7A00]">Produtora</span>
          </div>
          
          <div className="text-sm text-white/40 max-w-md uppercase tracking-widest font-bold">
            <p className="mb-2">A qualidade de estúdio inegociável que a sua composição sempre mereceu.</p>
          </div>

          <WhatsAppButton variant="ghost" showIcon={false} className="text-xs uppercase tracking-widest font-bold border border-white/10 mt-2 rounded-full py-2 px-6">
            Falar pelo WhatsApp
          </WhatsAppButton>
          
          <div className="w-full h-px bg-white/5 mt-8 mb-4 max-w-sm mx-auto" />
          <p className="text-[10px] text-white/30 uppercase tracking-widest">© {new Date().getFullYear()} Alquimia Produtora. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
