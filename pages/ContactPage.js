function ContactPage() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
        const [isLoading, setIsLoading] = React.useState(false);

        React.useEffect(() => {
            if (window.emailjs) {
                window.emailjs.init('XHpUnYz80FZeg8WuV');
            }
        }, []);

        const handleInputChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            setIsLoading(true);

            try {
                if (!window.emailjs) {
                    throw new Error('EmailJS não carregado');
                }

                const templateParams = {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message,
                    to_name: 'Bons Sabores',
                    reply_to: formData.email
                };

                await window.emailjs.send(
                    'service_1esses4b',
                    'template_ccumkh4',
                    templateParams
                );

                alert('Mensagem enviada com sucesso! Entraremos em contacto em breve.');
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            } catch (error) {
                console.error('Erro ao enviar email:', error);
                alert('Erro ao enviar mensagem. Tente novamente ou entre em contacto pelo telefone.');
            } finally {
                setIsLoading(false);
            }
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
                                        <p className="text-gray-600">+244 999 999 999</p>
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
                                            disabled={isLoading}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
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
                                            disabled={isLoading}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
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
                                            disabled={isLoading}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
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
                                            disabled={isLoading}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
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
                                        disabled={isLoading}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full btn-primary text-white py-4 rounded-lg font-semibold disabled:opacity-50 hover:scale-105 transition-transform"
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center">
                                            <i className="fas fa-spinner fa-spin mr-2"></i>
                                            Enviando...
                                        </div>
                                    ) : (
                                        <div>
                                            <i className="fas fa-paper-plane mr-2"></i>
                                            Enviar Mensagem
                                        </div>
                                    )}
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
