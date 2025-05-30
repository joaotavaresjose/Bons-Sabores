function LoginPage({ setCurrentPage, setUser }) {
    try {
        const [formData, setFormData] = React.useState({
            email: '',
            password: ''
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
            setIsLoading(true);

            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                const user = {
                    id: 1,
                    name: formData.email.split('@')[0],
                    email: formData.email
                };

                setUser(user);
                localStorage.setItem('user', JSON.stringify(user));
                setCurrentPage('home');
            } catch (error) {
                alert('Erro ao fazer login. Tente novamente.');
            } finally {
                setIsLoading(false);
            }
        };

        return (
            <div data-name="login-page" data-file="pages/LoginPage.js" className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 fade-in">
                <div className="max-w-md w-full space-y-8 scale-in">
                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <i className="fas fa-hamburger text-orange-500 text-3xl bounce"></i>
                            <h2 className="text-3xl font-bold text-gray-800">Bons Sabores</h2>
                        </div>
                        <h3 className="text-xl text-gray-600">Entre na sua conta</h3>
                    </div>

                    <form className="mt-8 space-y-6 fade-in-up" onSubmit={handleSubmit}>
                        <div className="space-y-4">
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
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full btn-primary text-white py-3 rounded-lg font-semibold disabled:opacity-50 hover:scale-105 transition-transform"
                        >
                            {isLoading ? 'Entrando...' : 'Entrar'}
                        </button>

                        <div className="text-center">
                            <p className="text-gray-600">
                                Não tem uma conta?{' '}
                                <button
                                    type="button"
                                    onClick={() => setCurrentPage('register')}
                                    className="text-orange-500 hover:text-orange-600 font-semibold transition hover:scale-105"
                                >
                                    Cadastre-se
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        );
    } catch (error) {
        console.error('LoginPage component error:', error);
        reportError(error);
        return <div>Erro na página de login</div>;
    }
}
