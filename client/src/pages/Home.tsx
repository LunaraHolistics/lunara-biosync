import { useState } from 'react';
import { ChevronDown, Zap, Moon, Heart, Dumbbell, Users, Zap as ZapIcon, TrendingUp, Award } from 'lucide-react';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

/**
 * DESIGN PHILOSOPHY: Futurismo Orgânico
 * - Paleta: Verde-água (#2DD4BF) + Azul-marinho (#0F172A) + Roxo-elétrico (#A855F7)
 * - Efeitos: Glow, gradientes, profundidade, animações fluidas
 * - Tipografia: Poppins (títulos) + Inter (corpo)
 * - Layout: Assimétrico, cards flutuantes, parallax sutil
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState<'individual' | 'business'>('individual');

  const handleWhatsAppClick = () => {
    const message = 'Olá! Gostaria de agendar minha análise com bioressonância BioSync.';
    const whatsappUrl = `https://wa.me/5516997934558?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663309535032/TFgGy5cq4MNYch3LzbTaZo/hero-background-RQRdNEVVwKpLjLLkJbAiDE.webp"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Descubra o que está
                <span className="gradient-text block">travando sua energia</span>
              </h1>

              <p className="text-xl text-[#64748B] leading-relaxed">
                Análise completa com bioressonância magnética quântica + inteligência BioSync + direcionamento terapêutico personalizado
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="btn-primary"
                >
                  Quero fazer minha análise
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="btn-secondary"
                >
                  Falar no WhatsApp
                </button>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-3 pt-8 border-t border-[#E2E8F0]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#2DD4BF] to-[#14B8A6] flex items-center justify-center text-white">
                  <Award size={24} />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A]">Atendimento Profissional</p>
                  <p className="text-sm text-[#64748B]">Celso Luiz - Psicoterapeuta Holístico</p>
                </div>
              </div>
            </div>

            {/* Right - Device Image */}
            <div className="relative hidden md:block">
              <div className="relative z-10">
                <img
                  src="/home/ubuntu/webdev-static-assets/device-bioresonancia.jpg"
                  alt="Aparelho de Bioressonância"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#2DD4BF] to-[#A855F7] rounded-2xl opacity-20 blur-2xl -z-10 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-16 animate-bounce">
            <ChevronDown className="text-[#2DD4BF]" size={32} />
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-20 bg-gradient-to-b from-[#F0FDFA] to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Como Funciona</h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Um processo simples em 3 etapas para transformar sua saúde e bem-estar
            </p>
          </div>

          {/* Process Visualization */}
          <div className="mb-16">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663309535032/TFgGy5cq4MNYch3LzbTaZo/process-illustration-DuKcguH6a3ZyF2hiydR2W2.webp"
              alt="Processo de Bioressonância"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '1',
                title: 'Análise Presencial',
                description: 'Você realiza a análise de bioressonância magnética quântica em nosso consultório em Araraquara. O aparelho captura dados detalhados do seu corpo e energia.',
                icon: Zap,
              },
              {
                number: '2',
                title: 'Processamento BioSync',
                description: 'Os dados são processados pela inteligência BioSync, que identifica desequilíbrios energéticos, emocionais e físicos com precisão.',
                icon: TrendingUp,
              },
              {
                number: '3',
                title: 'Plano Terapêutico',
                description: 'Você recebe um direcionamento personalizado com terapias holísticas específicas para reequilibrar sua energia e saúde.',
                icon: Heart,
              },
            ].map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="card-glow">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#2DD4BF] to-[#14B8A6] flex items-center justify-center text-white mb-4">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-[#64748B] leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Benefícios</h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Transforme sua vida com análise e terapia personalizada
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 justify-center mb-12">
            <button
              onClick={() => setActiveTab('individual')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'individual'
                  ? 'bg-gradient-to-r from-[#2DD4BF] to-[#14B8A6] text-white shadow-lg'
                  : 'bg-[#F0FDFA] text-[#0F172A] hover:bg-[#E0F2FE]'
              }`}
            >
              Para Você
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'business'
                  ? 'bg-gradient-to-r from-[#2DD4BF] to-[#14B8A6] text-white shadow-lg'
                  : 'bg-[#F0FDFA] text-[#0F172A] hover:bg-[#E0F2FE]'
              }`}
            >
              Para Sua Empresa
            </button>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {activeTab === 'individual' ? (
              <>
                {[
                  { icon: Zap, title: 'Mais Energia', description: 'Sinta-se revitalizado e com disposição renovada para o dia a dia' },
                  { icon: Moon, title: 'Melhora do Sono', description: 'Durma melhor e acorde descansado e restaurado' },
                  { icon: Heart, title: 'Equilíbrio Emocional', description: 'Maior estabilidade emocional e bem-estar mental' },
                  { icon: Dumbbell, title: 'Melhor Desempenho', description: 'Aumente seu desempenho físico e mental' },
                ].map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="card-glow">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#A855F7] to-[#EC4899] flex items-center justify-center text-white mb-4">
                        <IconComponent size={28} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-[#64748B]">{benefit.description}</p>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                {[
                  { icon: Users, title: 'Maior Retenção', description: 'Mantenha seus alunos/clientes mais satisfeitos e engajados' },
                  { icon: Award, title: 'Diferencial Competitivo', description: 'Destaque-se no mercado com um serviço inovador e exclusivo' },
                  { icon: TrendingUp, title: 'Resultados Consistentes', description: 'Ofereça resultados mensuráveis e personalizados' },
                  { icon: Zap, title: 'Novo Fluxo de Receita', description: 'Monetize com um serviço de alto valor agregado' },
                ].map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="card-glow">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#2DD4BF] flex items-center justify-center text-white mb-4">
                        <IconComponent size={28} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-[#64748B]">{benefit.description}</p>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Diferencial Section */}
      <section className="py-20 bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Nosso Diferencial</h2>
            <p className="text-xl text-[#CBD5E1] leading-relaxed mb-8">
              Não é apenas uma análise. É um sistema completo de <span className="text-[#2DD4BF] font-semibold">diagnóstico + direcionamento + aplicação terapêutica</span>.
            </p>
            <p className="text-lg text-[#94A3B8]">
              Combinamos tecnologia quântica de ponta com abordagem holística comprovada para transformar sua saúde em tempo real.
            </p>
          </div>
        </div>
      </section>

      {/* Localização Section */}
      <section id="localizacao" className="py-20 bg-white">
        <div className="container">
          <div className="bg-gradient-to-r from-[#F0FDFA] to-[#E0F2FE] rounded-2xl p-12 text-center border-2 border-[#2DD4BF]">
            <h2 className="text-4xl font-bold mb-6 text-[#0F172A]">Localização</h2>
            <div className="space-y-4 mb-8">
              <p className="text-2xl font-semibold text-[#0F172A]">
                📍 Atendimento Presencial em Araraquara - SP
              </p>
              <p className="text-lg text-[#64748B]">
                <strong>Não é online.</strong> Para garantir a qualidade e precisão da análise, o atendimento é exclusivamente presencial.
              </p>
              <p className="text-lg text-[#64748B]">
                Para pessoas de outras cidades da região: necessário agendamento prévio para viabilizar o deslocamento.
              </p>
            </div>
            <Button
              onClick={handleWhatsAppClick}
              className="btn-primary"
            >
              Agendar Análise em Araraquara
            </Button>
          </div>
        </div>
      </section>

      {/* Autoridade Section */}
      <section className="py-20 bg-gradient-to-b from-[#F0FDFA] to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Sobre o Atendimento</h2>
            
            <div className="card-glow">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-[#0F172A]">Celso Luiz</h3>
                  <p className="text-lg font-semibold text-[#2DD4BF] mb-4">Psicoterapeuta Holístico</p>
                  <p className="text-[#64748B] leading-relaxed mb-4">
                    Especializado em terapias holísticas e análise energética, Celso Luiz combina décadas de experiência em bem-estar integral com a tecnologia mais avançada em bioressonância quântica.
                  </p>
                  <p className="text-[#64748B] leading-relaxed">
                    Seu compromisso é oferecer análises precisas e direcionamento terapêutico personalizado para cada cliente, transformando vidas através da compreensão profunda da energia e saúde.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonials Placeholder */}
            <div className="mt-12 text-center">
              <p className="text-[#64748B] italic">
                "Depoimentos de clientes satisfeitos em breve..."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 bg-gradient-to-r from-[#2DD4BF] to-[#14B8A6]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para Transformar Sua Saúde?</h2>
            <p className="text-xl mb-12 text-white/90">
              Preencha o formulário abaixo ou fale conosco no WhatsApp para agendar sua análise com bioressonância BioSync.
            </p>
            
            <ContactForm />

            <div className="mt-12 pt-8 border-t border-white/30">
              <p className="text-white/80 mb-4">Ou conecte-se diretamente:</p>
              <a
                href="https://wa.me/5516997934558"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#2DD4BF] px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all"
              >
                💬 Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/favicon.png" alt="Lunara BioSync" className="w-6 h-6" />
                <span className="font-bold">Lunara BioSync</span>
              </div>
              <p className="text-[#CBD5E1]">Bioressonância magnética quântica + Terapias Holísticas</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-[#CBD5E1]">
                <li><a href="#como-funciona" className="hover:text-[#2DD4BF] transition-colors">Como Funciona</a></li>
                <li><a href="#beneficios" className="hover:text-[#2DD4BF] transition-colors">Benefícios</a></li>
                <li><a href="#localizacao" className="hover:text-[#2DD4BF] transition-colors">Localização</a></li>
                <li><a href="#contato" className="hover:text-[#2DD4BF] transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <p className="text-[#CBD5E1] mb-2">📍 Araraquara - SP</p>
              <a
                href="https://wa.me/5516997934558"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2DD4BF] hover:text-white transition-colors font-semibold"
              >
                💬 +55 16 99793-4558
              </a>
            </div>
          </div>
          <div className="border-t border-[#1E293B] pt-8 text-center text-[#64748B]">
            <p>&copy; 2026 Lunara BioSync. Todos os direitos reservados. | Celso Luiz - Psicoterapeuta Holístico</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
