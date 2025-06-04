function Contact() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            message: ''
        });

        const handleInputChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            
            if (!formData.name || !formData.email || !formData.message) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            const message = `*Mensagem de Contacto - Bons Sabores*\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*Assunto:* Contacto Geral\n\n*Mensagem:*\n${formData.message}`;
            
            const whatsappUrl = `https://wa.me/244951184916?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            
            alert('Redirecionando para WhatsApp...');
            setFormData({ name: '', email: '', message: '' });
        };

        return (
            <section id="contact" data-name="contact" data-file="components/Contact.js" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 fade-in-up">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Entre em Contacto</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Tem alguma dúvida ou sugestão? Adoraríamos ouvir você!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="fade-in-left">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Informações de Contacto</h3>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center">
                                        <i className="fas fa-map-marker-alt text-orange-500"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Endereço</h4>
                                        <p className="text-gray-600">Rua Kwame Nkrumah, 123 - Luanda, Angola</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center">
                                        <i className="fas fa-phone text-orange-500"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Telefone</h4>
                                        <p className="text-gray-600">+244 951 184 916</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center">
                                        <i className="fas fa-envelope text-orange-500"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Email</h4>
                                        <p className="text-gray-600">contacto@bonssabores.ao</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="fade-in-right">
                            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Envie uma Mensagem</h3>
                                <div className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Seu nome"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Seu email"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Sua mensagem"
                                            rows="5"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full btn-primary text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
                                    >
                                        <i className="fab fa-whatsapp mr-2"></i>
                                        Enviar via WhatsApp
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
        return <div>Erro na seção de contacto</div>;
    }
}
