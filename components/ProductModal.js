function ProductModal({ product, onClose, onAddToCart }) {
    try {
        React.useEffect(() => {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'unset';
            };
        }, []);

        const handleBackdropClick = (e) => {
            if (e.target === e.currentTarget) {
                onClose();
            }
        };

        const handleAddToCart = () => {
            onAddToCart(product);
            onClose();
        };

        return (
            <div 
                data-name="product-modal" 
                data-file="components/ProductModal.js"
                className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 fade-in"
                onClick={handleBackdropClick}
            >
                <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto scale-in">
                    <div className="relative">
                        <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-64 object-cover"
                        />
                        <button 
                            onClick={onClose}
                            className="absolute top-4 right-4 bg-white bg-opacity-80 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-100 transition"
                        >
                            <i className="fas fa-times text-gray-600"></i>
                        </button>
                        <div className="absolute bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-lg">
                            Kz {product.price.toFixed(2)}
                        </div>
                    </div>
                    
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">{product.name}</h2>
                        <p className="text-gray-600 mb-6">{product.description}</p>
                        
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Ingredientes:</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.ingredients.map((ingredient, index) => (
                                    <span 
                                        key={index}
                                        className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm"
                                    >
                                        {ingredient}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="mb-6 flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                            <span className="text-gray-700 font-medium">Calorias:</span>
                            <span className="text-orange-500 font-bold">{product.calories} kcal</span>
                        </div>
                        
                        <button 
                            onClick={handleAddToCart}
                            className="w-full btn-primary text-white py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
                        >
                            <i className="fas fa-plus mr-2"></i>
                            Adicionar ao Carrinho
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ProductModal component error:', error);
        reportError(error);
        return <div>Erro no modal do produto</div>;
    }
}
