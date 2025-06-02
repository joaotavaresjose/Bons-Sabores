function Hero({ setCurrentPage }) {
    try {
        return (
            <section id="home" data-name="hero" data-file="components/Hero.js" className="hero-bg min-h-screen flex items-center justify-center text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="fade-in">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Os Melhores <span className="text-orange-400">Hambúrgueres</span> de Angola
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                            Ingredientes frescos, sabor incomparável e entrega rápida em Luanda. 
                            Experimente nossos hambúrgueres artesanais!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                onClick={() => setCurrentPage('menu')}
                                className="btn-primary text-white px-8 py-4 rounded-full text-lg font-semibold"
                            >
                                Ver Cardápio Completo
                            </button>
                            <a 
                                href="tel:+244951184916" 
                                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-800 transition inline-block"
                            >
                                <i className="fas fa-phone mr-2"></i>
                                Fazer Pedido
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return <div>Erro na seção hero</div>;
    }
}
