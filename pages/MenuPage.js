function MenuPage({ addToCart }) {
    try {
        const [activeCategory, setActiveCategory] = React.useState('burgers');
        const [searchTerm, setSearchTerm] = React.useState('');
        const [currentPage, setCurrentPage] = React.useState(1);
        const itemsPerPage = 8;

        const categories = [
            { id: 'burgers', name: 'Hambúrgueres', icon: 'fas fa-hamburger' },
            { id: 'sides', name: 'Acompanhamentos', icon: 'fas fa-utensils' },
            { id: 'drinks', name: 'Bebidas', icon: 'fas fa-glass-cheers' },
            { id: 'desserts', name: 'Sobremesas', icon: 'fas fa-ice-cream' }
        ];

        const menuItems = {
            burgers: [
                { id: 1, name: "Classic Burger", description: "Hambúrguer clássico com carne, queijo, alface, tomate e molho especial", price: 2590, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&w=400&q=80" },
                { id: 2, name: "Bacon Supreme", description: "Hambúrguer com bacon crocante, queijo cheddar e cebola caramelizada", price: 3290, image: "/img/produtos/BBQ-monster.jpeg" },
                { id: 3, name: "Veggie Delight", description: "Hambúrguer vegetariano com blend de legumes, queijo e molho verde", price: 2890, image: "/img/produtos/BBQ-monster.jpeg" },
                { id: 4, name: "BBQ Monster", description: "Hambúrguer duplo com molho barbecue, bacon e onion rings", price: 3890, image: "/img/produtos/BBQ-monster.jpeg" },
                { id: 5, name: "Chicken Crispy", description: "Hambúrguer de frango empanado com maionese temperada e pickle", price: 2990, image: "/img/produtos/BBQ-monster.jpeg" },
                { id: 6, name: "Fish Burger", description: "Hambúrguer de peixe grelhado com molho tártaro e rúcula", price: 3190, image: "/img/produtos/Fish-burger.jpeg" },
                { id: 16, name: "Double Cheese", description: "Hambúrguer duplo com queijo derretido", price: 3590, image: "/img/produtos/BBQ-monster.jpeg" },
                { id: 17, name: "Spicy Jalapeño", description: "Hambúrguer com jalapeños e molho picante", price: 3090, image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&w=400&q=80" },
                { id: 18, name: "Mushroom Swiss", description: "Hambúrguer com cogumelos e queijo suíço", price: 3390, image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-4.0.3&w=400&q=80" }
            ],
            sides: [
                { id: 7, name: "Batata Frita", description: "Batatas fritas douradas e crocantes", price: 1290, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&w=400&q=80" },
                { id: 8, name: "Onion Rings", description: "Anéis de cebola empanados e fritos", price: 1490, image: "https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-4.0.3&w=400&q=80" },
                { id: 9, name: "Nuggets", description: "10 nuggets de frango crocantes", price: 1890, image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&w=400&q=80" }
            ],
            drinks: [
                { id: 10, name: "Coca-Cola", description: "Refrigerante gelado 350ml", price: 690, image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?ixlib=rb-4.0.3&w=400&q=80" },
                { id: 11, name: "Suco Natural", description: "Suco de laranja natural 300ml", price: 890, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&w=400&q=80" },
                { id: 12, name: "Milkshake", description: "Milkshake cremoso de baunilha", price: 1590, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&w=400&q=80" }
            ],
            desserts: [
                { id: 13, name: "Brownie", description: "Brownie de chocolate com sorvete", price: 1290, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&w=400&q=80" },
                { id: 14, name: "Sorvete", description: "2 bolas de sorvete sabores variados", price: 990, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&w=400&q=80" }
            ]
        };

        const filteredItems = menuItems[activeCategory].filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

        const handleCategoryChange = (category) => {
            setActiveCategory(category);
            setCurrentPage(1);
        };

        return (
            <div data-name="menu-page" data-file="pages/MenuPage.js" className="py-8 fade-in">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8 fade-in-up">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Cardápio Completo</h1>
                        <p className="text-xl text-gray-600">Explore todas as nossas deliciosas opções</p>
                    </div>

                    <div className="mb-8 fade-in-up">
                        <div className="relative max-w-md mx-auto">
                            <input
                                type="text"
                                placeholder="Buscar no cardápio..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                            />
                            <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mb-8 fade-in-up">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => handleCategoryChange(category.id)}
                                className={`px-6 py-3 rounded-full font-semibold transition hover:scale-105 ${
                                    activeCategory === category.id
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                <i className={`${category.icon} mr-2`}></i>
                                {category.name}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {currentItems.map((item, index) => (
                            <div key={item.id} className={`burger-card bg-white rounded-2xl shadow-lg overflow-hidden slide-in-up`} style={{animationDelay: `${index * 0.1}s`}}>
                                <div className="relative">
                                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full font-semibold bounce-in">
                                        {item.price} Kz
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{item.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                                    <button 
                                        onClick={() => addToCart(item)}
                                        className="w-full btn-primary text-white py-2 rounded-full font-semibold text-sm hover:scale-105 transition-transform"
                                    >
                                        <i className="fas fa-plus mr-2"></i>
                                        Adicionar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex justify-center mt-8 space-x-2 fade-in-up">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentPage(index + 1)}
                                    className={`px-4 py-2 rounded-lg font-semibold transition hover:scale-105 ${
                                        currentPage === index + 1
                                            ? 'bg-orange-500 text-white'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    )}

                    {currentItems.length === 0 && (
                        <div className="text-center py-12 fade-in">
                            <i className="fas fa-search text-4xl text-gray-400 mb-4"></i>
                            <p className="text-gray-500 text-xl">Nenhum item encontrado</p>
                        </div>
                    )}
                </div>
            </div>
        );
    } catch (error) {
        console.error('MenuPage component error:', error);
        reportError(error);
        return <div>Erro na página do cardápio</div>;
    }
}
