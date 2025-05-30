function RegisterPage({ setCurrentPage, setUser }) {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
        const [isLoading, setIsLoading] = React.useState(false);

        const handleInputChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            
            if (formData.password !== formData.confirmPassword) {
                alert('As senhas não coincidem!');
                return;
            }

            setIsLoading(true);

            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                const user = {
                    id: Date.now(),
                    name: formData.name,
                    email: formData.email
                };

                setUser(user);
                localStorage.setItem('user', JSON.stringify(user));
                setCurrentPage('home');
            } catch (error) {
                alert('Erro ao criar conta. Tente novamente.');
            } finally {
                setIsLoading(false);
            }
        };

        return (
            <div data-name="register-page" data-file="pages/RegisterPage.js" className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 fade-in">
                <div className="max-w-md w-full space-y-8 scale-in">
                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <i className="fas fa-hamburger text-orange-500 text-3xl bounce"></i>
                            <h2 className="text-3xl font-bold text-gray-800">Bons Sabores</h2>
                        </div>
                        <h3 className="text-xl text-gray-600">Crie sua conta</h3>
                    </div>

                    <form className="mt-8 space-y-6 fade-in-up" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                    placeholder="Seu nome completo"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                    placeholder="seu@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                    placeholder="Sua senha"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Confirmar Senha</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                    placeholder="Confirme sua senha"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full btn-primary text-white py-3 rounded-lg font-semibold disabled:opacity-50 hover:scale-105 transition-transform"
                        >
                            {isLoading ? 'Criando conta...' : 'Criar Conta'}
                        </button>

                        <div className="text-center">
                            <p className="text-gray-600">
                                Já tem uma conta?{' '}
                                <button
                                    type="button"
                                    onClick={() => setCurrentPage('login')}
                                    className="text-orange-500 hover:text-orange-600 font-semibold transition hover:scale-105"
                                >
                                    Faça login
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        );
    } catch (error) {
        console.error('RegisterPage component error:', error);
        reportError(error);
        return <div>Erro na página de cadastro</div>;
    }
}
