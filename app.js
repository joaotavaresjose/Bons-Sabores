function App() {
    try {
        const [cartItems, setCartItems] = React.useState([]);
        const [isCartOpen, setIsCartOpen] = React.useState(false);
        const [currentPage, setCurrentPage] = React.useState('home');
        const [user, setUser] = React.useState(null);

        React.useEffect(() => {
            const unsubscribe = CartStore.subscribe(setCartItems);
            setCartItems(CartStore.getItems());
            
            const savedUser = localStorage.getItem('user');
            if (savedUser) {
                setUser(JSON.parse(savedUser));
            }
            
            return unsubscribe;
        }, []);

        const addToCart = (item) => {
            CartStore.addItem(item);
        };

        const updateQuantity = (id, quantity) => {
            CartStore.updateQuantity(id, quantity);
        };

        const removeFromCart = (id) => {
            CartStore.removeItem(id);
        };

        const toggleCart = () => {
            setIsCartOpen(!isCartOpen);
        };

        React.useEffect(() => {
            const handleScroll = () => {
                const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .slide-in-up, .scale-in, .bounce-in');
                elements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;
                    
                    if (elementTop < window.innerHeight - elementVisible) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0) translateX(0) scale(1)';
                    }
                });
            };

            window.addEventListener('scroll', handleScroll);
            handleScroll();
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        const renderPage = () => {
            switch(currentPage) {
                case 'menu':
                    return <MenuPage addToCart={addToCart} />;
                case 'about':
                    return <AboutPage />;
                case 'contact':
                    return <ContactPage />;
                case 'login':
                    return <LoginPage setCurrentPage={setCurrentPage} setUser={setUser} />;
                case 'register':
                    return <RegisterPage setCurrentPage={setCurrentPage} setUser={setUser} />;
                case 'profile':
                    return <ProfilePage user={user} setUser={setUser} setCurrentPage={setCurrentPage} />;
                default:
                    return (
                        <div>
                            <Hero setCurrentPage={setCurrentPage} />
                            <About />
                            <Menu addToCart={addToCart} setCurrentPage={setCurrentPage} />
                            <Contact />
                        </div>
                    );
            }
        };

        return (
            <div className="min-h-screen">
                <Header 
                    cartItems={cartItems} 
                    toggleCart={toggleCart} 
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    user={user}
                    setUser={setUser}
                />
                <main className="pt-20">
                    {renderPage()}
                </main>
                <Footer />
                <Cart 
                    isOpen={isCartOpen} 
                    toggleCart={toggleCart}
                    cartItems={cartItems}
                    updateQuantity={updateQuantity}
                    removeFromCart={removeFromCart}
                    user={user}
                    setCurrentPage={setCurrentPage}
                />
                {isCartOpen && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={toggleCart}
                    ></div>
                )}
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return <div>Erro na aplicação</div>;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
