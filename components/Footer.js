function Footer() {
    try {
        return (
            <footer data-name="footer" data-file="components/Footer.js" className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <i className="fas fa-hamburger text-orange-500 text-2xl"></i>
                                <h3 className="text-2xl font-bold">Bons Sabores</h3>
                            </div>
                            <p className="text-gray-300 mb-4">
                                Os melhores hambúrgueres artesanais de Angola, 
                                feitos com ingredientes frescos e muito carinho.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-300 hover:text-orange-500 transition">
                                    <i className="fab fa-facebook text-xl"></i>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-orange-500 transition">
                                    <i className="fab fa-instagram text-xl"></i>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-orange-500 transition">
                                    <i className="fab fa-whatsapp text-xl"></i>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <i className="fas fa-map-marker-alt text-orange-500"></i>
                                    <span>Rua Kwame Nkrumah, 123 - Luanda, Angola</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <i className="fas fa-phone text-orange-500"></i>
                                    <span>+244 999 999 999</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <i className="fas fa-envelope text-orange-500"></i>
                                    <span>contacto@bonssabores.ao</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold mb-4">Horário de Funcionamento</h4>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Segunda - Quinta:</span>
                                    <span>18h - 23h</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sexta - Sábado:</span>
                                    <span>18h - 00h</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Domingo:</span>
                                    <span>18h - 22h</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                        <p className="text-gray-300">
                            © 2024 Bons Sabores. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return <div>Erro no rodapé</div>;
    }
}
