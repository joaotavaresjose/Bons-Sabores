function About() {
    try {
        return (
            <section id="about" data-name="about" data-file="components/About.js" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="fade-in-left">
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">Quem Somos</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                A <strong>Bons Sabores</strong> nasceu da paixão por criar os melhores hambúrgueres 
                                artesanais de Angola. Desde 2020, temos o compromisso de oferecer ingredientes 
                                frescos e de qualidade superior em Luanda.
                            </p>
                            <p className="text-lg text-gray-600 mb-6">
                                Nossa equipa é formada por chefs experientes que desenvolvem receitas únicas, 
                                combinando técnicas tradicionais com inovação gastronómica. Cada hambúrguer 
                                é preparado com carinho e dedicação.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center scale-in">
                                    <div className="text-3xl font-bold text-orange-500 mb-2 counter">5000+</div>
                                    <div className="text-gray-600">Clientes Satisfeitos</div>
                                </div>
                                <div className="text-center scale-in">
                                    <div className="text-3xl font-bold text-orange-500 mb-2 counter">4.8</div>
                                    <div className="text-gray-600">Avaliação Média</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="fade-in-right">
                            <img 
                                src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&w=600&q=80" 
                                alt="Nossa cozinha"
                                className="rounded-2xl shadow-lg w-full hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="text-center fade-in-up">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                                <i className="fas fa-leaf text-orange-500 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ingredientes Frescos</h3>
                            <p className="text-gray-600">Seleccionamos apenas os melhores ingredientes locais angolanos</p>
                        </div>
                        
                        <div className="text-center fade-in-up">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                                <i className="fas fa-clock text-orange-500 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Entrega Rápida</h3>
                            <p className="text-gray-600">Garantimos entrega em até 45 minutos em Luanda</p>
                        </div>
                        
                        <div className="text-center fade-in-up">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                                <i className="fas fa-heart text-orange-500 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Feito com Amor</h3>
                            <p className="text-gray-600">Cada hambúrguer é preparado com paixão e dedicação angolana</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        reportError(error);
        return <div>Erro na seção sobre</div>;
    }
}
