function Header({ cartItems, toggleCart, currentPage, setCurrentPage, user, setUser }) {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);
        const [showUserMenu, setShowUserMenu] = React.useState(false);
        const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

        const handleNavClick = (page) => {
            if (currentPage === 'home' && (page === 'about' || page === 'contact')) {
                const element = document.getElementById(page);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                setCurrentPage(page);
            }
            setIsMenuOpen(false);
        };

        const handleLogout = () => {
            setUser(null);
            setShowUserMenu(false);
            localStorage.removeItem('user');
        };

        return (
            <header data-name="header" data-file="components/Header.js" className="bg-white shadow-lg fixed w-full top-0 z-50 slide-down">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavClick('home')}>
                            <img 
                                src="img/logo.jpg" 
                                alt="Bons Sabores Logo" 
                                className="w-10 h-10 rounded-full shadow-md transition-transform hover:scale-110"
                            />
                            <h1 className="text-2xl font-bold text-gray-800">Bons Sabores</h1>
                        </div>

                        <nav className="hidden md:flex space-x-8">
                            <button 
                                onClick={() => handleNavClick('home')}
                                className={`transition hover:scale-105 ${currentPage === 'home' ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500'}`}
                            >
                                Início
                            </button>
                            <button 
                                onClick={() => handleNavClick('menu')}
                                className={`transition hover:scale-105 ${currentPage === 'menu' ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500'}`}
                            >
                                Cardápio
                            </button>
                            <button 
                                onClick={() => handleNavClick('about')}
                                className={`transition hover:scale-105 ${currentPage === 'about' ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500'}`}
                            >
                                Sobre
                            </button>
                            <button 
                                onClick={() => handleNavClick('contact')}
                                className={`transition hover:scale-105 ${currentPage === 'contact' ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500'}`}
                            >
                                Contato
                            </button>
                        </nav>

                        <div className="flex items-center space-x-4">
                            <button 
                                onClick={toggleCart}
                                className="relative bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition hover:scale-110"
                            >
                                <i className="fas fa-shopping-cart"></i>
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs pulse">
                                        {cartCount}
                                    </span>
                                )}
                            </button>

                            {user ? (
                                <div className="relative">
                                    <button 
                                        onClick={() => setShowUserMenu(!showUserMenu)}
                                        className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition hover:scale-105"
                                    >
                                        <i className="fas fa-user text-gray-600"></i>
                                        <span className="hidden md:block text-gray-700">{user.name}</span>
                                    </button>
                                    {showUserMenu && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 fade-in">
                                            <button 
                                                onClick={() => handleNavClick('profile')}
                                                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                                            >
                                                <i className="fas fa-user mr-2"></i>Perfil
                                            </button>
                                            <button 
                                                onClick={handleLogout}
                                                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 transition"
                                            >
                                                <i className="fas fa-sign-out-alt mr-2"></i>Sair
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <button 
                                    onClick={() => handleNavClick('login')}
                                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 transition hover:scale-105"
                                >
                                    <i className="fas fa-sign-in-alt mr-2"></i>
                                    <span className="hidden md:inline">Login</span>
                                </button>
                            )}

                            <button 
                                className="md:hidden text-gray-600 hover:scale-110 transition"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <i className="fas fa-bars text-xl"></i>
                            </button>
                        </div>
                    </div>

                    {isMenuOpen && (
                        <nav className="md:hidden py-4 border-t fade-in">
                            <div className="flex flex-col space-y-4">
                                <button onClick={() => handleNavClick('home')} className="text-left text-gray-600 hover:text-orange-500 transition">Início</button>
                                <button onClick={() => handleNavClick('menu')} className="text-left text-gray-600 hover:text-orange-500 transition">Cardápio</button>
                                <button onClick={() => handleNavClick('about')} className="text-left text-gray-600 hover:text-orange-500 transition">Sobre</button>
                                <button onClick={() => handleNavClick('contact')} className="text-left text-gray-600 hover:text-orange-500 transition">Contato</button>
                                {!user && <button onClick={() => handleNavClick('login')} className="text-left text-gray-600 hover:text-orange-500 transition">Login</button>}
                            </div>
                        </nav>
                    )}
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return <div>Erro no cabeçalho</div>;
    }
}
