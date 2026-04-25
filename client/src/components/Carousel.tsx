import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel() {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    // Simula carregamento de imagens da pasta carousel
    // Em produção, você adiciona imagens em: client/public/assets/carousel/
    // Exemplos: imagem1.jpg, imagem2.jpg, imagem3.jpg, etc.
    setImages([
      '/assets/carousel/imagem1.jpg',
      '/assets/carousel/imagem2.jpg',
      '/assets/carousel/imagem3.jpg',
      '/assets/carousel/imagem4.jpg',
      '/assets/carousel/imagem5.jpg',
    ]);
  }, []);

  useEffect(() => {
    if (!isAutoPlay || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Muda a cada 5 segundos automaticamente

    return () => clearInterval(interval);
  }, [isAutoPlay, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  if (images.length === 0) {
    return (
      <div className="w-full bg-gradient-to-r from-[#F0FDFA] to-[#E0F2FE] rounded-2xl p-8 md:p-12 text-center border-2 border-[#2DD4BF]">
        <p className="text-[#64748B] italic text-sm md:text-base">
          📸 Carrossel vazio. Adicione imagens em <code className="bg-white px-2 py-1 rounded text-xs md:text-sm">client/public/assets/carousel/</code>
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-2xl shadow-lg group">
      {/* Container de imagens em retrato */}
      <div className="relative w-full aspect-[3/4] md:aspect-[9/16] bg-black">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback se a imagem não carregar
                (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 400%22%3E%3Crect fill=%22%23e5e7eb%22 width=%22300%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23999%22 font-size=%2216%22%3EImagem não encontrada%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>
        ))}

        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      </div>

      {/* Botões de navegação - aparecem ao passar mouse */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#0F172A] p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#0F172A] p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>
        </>
      )}

      {/* Indicadores de slide - pontos na parte inferior */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all ${
                index === currentIndex
                  ? 'bg-white w-6 md:w-8 h-2 md:h-2.5'
                  : 'bg-white/50 hover:bg-white/75 w-2 md:w-2.5 h-2 md:h-2.5'
              }`}
              style={{ borderRadius: '999px' }}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Contador de slides */}
      {images.length > 1 && (
        <div className="absolute top-3 md:top-4 right-3 md:right-4 z-10 bg-black/60 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Botão play/pause - controla autoplay */}
      {images.length > 1 && (
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="absolute top-3 md:top-4 left-3 md:left-4 z-10 bg-black/60 hover:bg-black/80 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold transition-all"
          title={isAutoPlay ? 'Pausar autoplay' : 'Retomar autoplay'}
        >
          {isAutoPlay ? '⏸' : '▶'}
        </button>
      )}
    </div>
  );
}
