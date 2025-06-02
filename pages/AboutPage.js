function AboutPage() {
    try {
        return (
            <div data-name="about-page" data-file="pages/AboutPage.js" className="py-8 fade-in">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 fade-in-up">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Sobre Nós</h1>
                        <p className="text-xl text-gray-600">Conheça a história da Bons Sabores</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="fade-in-left">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa História</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                A <strong>Bons Sabores</strong> nasceu em 2020 da paixão por criar os melhores 
                                hambúrgueres artesanais de Angola. Começamos como um pequeno negócio familiar 
                                em Luanda com o sonho de oferecer sabores únicos e ingredientes frescos.
                            </p>
                            <p className="text-lg text-gray-600 mb-6">
                                Nossa equipa é formada por chefs experientes que desenvolvem receitas únicas, 
                                combinando técnicas tradicionais com inovação gastronómica. Cada hambúrguer 
                                é preparado com carinho, dedicação e orgulho angolano.
                            </p>
                            <p className="text-lg text-gray-600">
                                Hoje, somos reconhecidos como uma das melhores hamburguerias de Luanda, 
                                sempre mantendo nosso compromisso com a qualidade e satisfação dos clientes.
                            </p>
                        </div>
                        
                        <div className="fade-in-right">
                            <img 
                                src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&w=600&q=80" 
                                alt="Nossa cozinha"
                                className="rounded-2xl shadow-lg w-full hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        <div className="text-center scale-in">
                            <div className="text-4xl font-bold text-orange-500 mb-2">5000+</div>
                            <div className="text-gray-600 font-medium">Clientes Satisfeitos</div>
                        </div>
                        <div className="text-center scale-in">
                            <div className="text-4xl font-bold text-orange-500 mb-2">4.8</div>
                            <div className="text-gray-600 font-medium">Avaliação Média</div>
                        </div>
                        <div className="text-center scale-in">
                            <div className="text-4xl font-bold text-orange-500 mb-2">4</div>
                            <div className="text-gray-600 font-medium">Anos de Experiência</div>
                        </div>
                        <div className="text-center scale-in">
                            <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
                            <div className="text-gray-600 font-medium">Receitas Exclusivas</div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center fade-in-up bg-white p-8 rounded-2xl shadow-lg">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                                <i className="fas fa-leaf text-orange-500 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Ingredientes Frescos</h3>
                            <p className="text-gray-600">Seleccionamos apenas os melhores ingredientes locais angolanos, garantindo frescor e qualidade em cada hambúrguer.</p>
                        </div>
                        
                        <div className="text-center fade-in-up bg-white p-8 rounded-2xl shadow-lg">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                                <i className="fas fa-clock text-orange-500 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Entrega Rápida</h3>
                            <p className="text-gray-600">Garantimos entrega em até 45 minutos em Luanda, mantendo a temperatura e qualidade dos nossos produtos.</p>
                        </div>
                        
                        <div className="text-center fade-in-up bg-white p-8 rounded-2xl shadow-lg">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                                <i className="fas fa-heart text-orange-500 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Feito com Amor</h3>
                            <p className="text-gray-600">Cada hambúrguer é preparado com paixão e dedicação angolana, refletindo nossa cultura e tradição culinária.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('AboutPage component error:', error);
        reportError(error);
        return <div>Erro na página sobre</div>;
    }
}
