function Menu({ addToCart, setCurrentPage }) {
    try {
        const [currentSlide, setCurrentSlide] = React.useState(0);
        const [itemsPerSlide, setItemsPerSlide] = React.useState(3);
        const [selectedProduct, setSelectedProduct] = React.useState(null);
        const [touchStart, setTouchStart] = React.useState(null);
        const [touchEnd, setTouchEnd] = React.useState(null);
        
        const burgers = [
          {
            id: 1,
            name: "Classic Burger",
            description:
              "Hambúrguer clássico com carne, queijo, alface, tomate e molho especial",
            price: 2590,
            image: "/img/produtos/Hamburguer-classico.jpeg",
            ingredients: [
              "Pão brioche",
              "Carne 150g",
              "Queijo cheddar",
              "Alface",
              "Tomate",
              "Molho especial",
            ],
            calories: 580,
          },
          {
            id: 2,
            name: "Bacon Supreme",
            description:
              "Hambúrguer com bacon crocante, queijo cheddar e cebola caramelizada",
            price: 3290,
            image: "/img/produtos/Bacon-supreme.jpeg",
            ingredients: [
              "Pão brioche",
              "Carne 150g",
              "Bacon",
              "Queijo cheddar",
              "Cebola caramelizada",
            ],
            calories: 720,
          },
          {
            id: 3,
            name: "Veggie Delight",
            description:
              "Hambúrguer vegetariano com blend de legumes, queijo e molho verde",
            price: 2890,
            image: "/img/produtos/Veggie-delight.png",
            ingredients: [
              "Pão integral",
              "Blend de legumes",
              "Queijo vegano",
              "Rúcula",
              "Molho verde",
            ],
            calories: 420,
          },
          {
            id: 4,
            name: "BBQ Monster",
            description:
              "Hambúrguer duplo com molho barbecue, bacon e onion rings",
            price: 3890,
            image: "/img/produtos/BBQ-monster.jpeg",
            ingredients: [
              "Pão brioche",
              "2x Carne 150g",
              "Bacon",
              "Onion rings",
              "Molho BBQ",
            ],
            calories: 890,
          },
          {
            id: 5,
            name: "Chicken Crispy",
            description:
              "Hambúrguer de frango empanado com maionese temperada e pickle",
            price: 3190,
            image: "/img/produtos/Chicken-crispy.png",
            ingredients: [
              "Pão integral",
              "Peixe grelhado",
              "Molho tártaro",
              "Rúcula",
              "Tomate",
            ],
            calories: 520,
          },
          {
            id: 6,
            name: "Fish Burger",
            description:
              "Hambúrguer de peixe grelhado com molho tártaro e rúcula",
            price: 3190,
            image: "/img/produtos/Fish-burger.jpeg",
            ingredients: [
              "Pão integral",
              "Peixe grelhado",
              "Molho tártaro",
              "Rúcula",
              "Tomate",
            ],
            calories: 520,
          },
        ];

        React.useEffect(() => {
            const updateItemsPerSlide = () => {
                if (window.innerWidth < 768) {
                    setItemsPerSlide(1);
                } else if (window.innerWidth < 1024) {
                    setItemsPerSlide(2);
                } else {
                    setItemsPerSlide(3);
                }
            };

            updateItemsPerSlide();
            window.addEventListener('resize', updateItemsPerSlide);
            return () => window.removeEventListener('resize', updateItemsPerSlide);
        }, []);

        const totalSlides = Math.ceil(burgers.length / itemsPerSlide);
        const minSwipeDistance = 50;

        const nextSlide = () => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        };

        const prevSlide = () => {
            setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
        };

        const onTouchStart = (e) => {
            setTouchEnd(null);
            setTouchStart(e.targetTouches[0].clientX);
        };

        const onTouchMove = (e) => {
            setTouchEnd(e.targetTouches[0].clientX);
        };

        const onTouchEnd = () => {
            if (!touchStart || !touchEnd) return;
            const distance = touchStart - touchEnd;
            const isLeftSwipe = distance > minSwipeDistance;
            const isRightSwipe = distance < -minSwipeDistance;

            if (isLeftSwipe) nextSlide();
            if (isRightSwipe) prevSlide();
        };

        const getCurrentItems = () => {
            const start = currentSlide * itemsPerSlide;
            return burgers.slice(start, start + itemsPerSlide);
        };

        const handleCardClick = (burger, e) => {
            if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
            setSelectedProduct(burger);
        };

        const closeModal = () => {
            setSelectedProduct(null);
        };

        return (
            <section id="menu" data-name="menu" data-file="components/Menu.js" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 fade-in-up">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Nosso Cardápio</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Conheça alguns dos nossos hambúrgueres mais populares
                        </p>
                    </div>

                    <div className="relative">
                        <div 
                            className="overflow-hidden"
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                        >
                            <div className={`grid gap-8 ${itemsPerSlide === 1 ? 'grid-cols-1' : itemsPerSlide === 2 ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                                {getCurrentItems().map((burger, index) => (
                                    <div 
                                        key={burger.id} 
                                        onClick={(e) => handleCardClick(burger, e)}
                                        className={`burger-card bg-white rounded-2xl shadow-lg overflow-hidden slide-in-up cursor-pointer`} 
                                        style={{animationDelay: `${index * 0.2}s`}}
                                    >
                                        <div className="relative overflow-hidden">
                                            <img 
                                                src={burger.image} 
                                                alt={burger.name}
                                                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full font-semibold bounce-in">
                                                Kz {burger.price.toFixed()}
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">{burger.name}</h3>
                                            <p className="text-gray-600 mb-4">{burger.description}</p>
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    addToCart(burger);
                                                }}
                                                className="w-full btn-primary text-white py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                                            >
                                                <i className="fas fa-plus mr-2"></i>
                                                Adicionar ao Carrinho
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {totalSlides > 1 && (
                            <div>
                                <button 
                                    onClick={prevSlide}
                                    className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition hover:scale-110"
                                >
                                    <i className="fas fa-chevron-left text-gray-600"></i>
                                </button>

                                <button 
                                    onClick={nextSlide}
                                    className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition hover:scale-110"
                                >
                                    <i className="fas fa-chevron-right text-gray-600"></i>
                                </button>
                            </div>
                        )}
                    </div>

                    {totalSlides > 1 && (
                        <div className="flex justify-center mt-8 space-x-2">
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition hover:scale-125 ${
                                        currentSlide === index ? 'bg-orange-500' : 'bg-gray-300'
                                    }`}
                                />
                            ))}
                        </div>
                    )}

                    <div className="text-center mt-8 fade-in-up">
                        <button 
                            onClick={() => setCurrentPage('menu')}
                            className="btn-primary text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                        >
                            Ver Cardápio Completo
                        </button>
                    </div>
                </div>

                {selectedProduct && (
                    <ProductModal 
                        product={selectedProduct} 
                        onClose={closeModal} 
                        onAddToCart={addToCart}
                    />
                )}
            </section>
        );
    } catch (error) {
        console.error('Menu component error:', error);
        reportError(error);
        return <div>Erro no cardápio</div>;
    }
}
