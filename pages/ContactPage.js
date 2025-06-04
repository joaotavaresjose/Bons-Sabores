function ContactPage() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            phone: '',
            subject: '',
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
            
            if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            const message = `*Mensagem de Contacto - Bons Sabores*\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}${formData.phone ? `\n*Telefone:* ${formData.phone}` : ''}\n*Assunto:* ${formData.subject}\n\n*Mensagem:*\n${formData.message}`;
            
            const whatsappUrl = `https://wa.me/244951184916?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            
            alert('Redirecionando para WhatsApp...');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        };

        return (
            <div data-name="contact-page" data-file="pages/ContactPage.js" className="py-8 fade-in">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 fade-in-up">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Entre em Contacto</h1>
                        <p className="text-xl text-gray-600">Estamos aqui para ajudá-lo. Fale connosco!</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <div className="fade-in-left">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">Informações de Contacto</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg">
                                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-map-marker-alt text-orange-500"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-2">Endereço</h4>
                                        <p className="text-gray-600">Rua Kwame Nkrumah, 123<br/>Luanda, Angola</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg">
                                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-phone text-orange-500"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-2">Telefone</h4>
                                        <p className="text-gray-600">+244 951 184 916</p>
                                        <p className="text-sm text-gray-500">Disponível 24/7 para pedidos</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg">
                                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-envelope text-orange-500"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                                        <p className="text-gray-600">contacto@bonssabores.ao</p>
                                        <p className="text-sm text-gray-500">Resposta em até 2 horas</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Horário de Funcionamento</h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-gray-600">Segunda - Quinta:</span>
                                        <span className="font-semibold text-gray-800">18h - 23h</span>
                                    </div>
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-gray-600">Sexta - Sábado:</span>
                                        <span className="font-semibold text-gray-800">18h - 00h</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Domingo:</span>
                                        <span className="font-semibold text-gray-800">18h - 22h</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="fade-in-right">
                            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Envie uma Mensagem</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Seu nome *"
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
                                            placeholder="Seu email *"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Telefone"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            placeholder="Assunto *"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Sua mensagem *"
                                        rows="6"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full btn-primary text-white py-4 rounded-lg font-semibold hover:scale-105 transition-transform"
                                >
                                    <i className="fab fa-whatsapp mr-2"></i>
                                    Enviar via WhatsApp
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ContactPage component error:', error);
        reportError(error);
        return <div>Erro na página de contacto</div>;
    }
}
