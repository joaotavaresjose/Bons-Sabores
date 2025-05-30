function Cart({ isOpen, toggleCart, cartItems, updateQuantity, removeFromCart }) {
    try {
        const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        const handleCheckout = () => {
            if (cartItems.length === 0) {
                alert('Seu carrinho está vazio!');
                return;
            }

            const orderDetails = cartItems.map(item => 
                `${item.quantity}x ${item.name} - Kz ${(item.price * item.quantity).toFixed(2)}`
            ).join('\n');

            const message = `Olá! Gostaria de fazer o seguinte pedido:\n\n${orderDetails}\n\nTotal: Kz ${total.toFixed(2)}`;
            const whatsappUrl = `https://wa.me/951184916 ?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        };

        return (
            <div data-name="cart" data-file="components/Cart.js" className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 cart-slide ${isOpen ? 'open' : ''}`}>
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-6 border-b">
                        <h2 className="text-2xl font-bold text-gray-800">Carrinho</h2>
                        <button onClick={toggleCart} className="text-gray-500 hover:text-gray-700">
                            <i className="fas fa-times text-xl"></i>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6">
                        {cartItems.length === 0 ? (
                            <div className="text-center text-gray-500 mt-10">
                                <i className="fas fa-shopping-cart text-4xl mb-4"></i>
                                <p>Seu carrinho está vazio</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                            <p className="text-orange-500 font-bold">Kz {item.price.toFixed(2)}</p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                                            >
                                                <i className="fas fa-minus text-sm"></i>
                                            </button>
                                            <span className="w-8 text-center font-semibold">{item.quantity}</span>
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                                            >
                                                <i className="fas fa-plus text-sm"></i>
                                            </button>
                                            <button 
                                                onClick={() => removeFromCart(item.id)}
                                                className="w-8 h-8 bg-red-100 text-red-500 rounded-full flex items-center justify-center hover:bg-red-200 ml-2"
                                            >
                                                <i className="fas fa-trash text-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {cartItems.length > 0 && (
                        <div className="border-t p-6">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xl font-bold text-gray-800">Total:</span>
                                <span className="text-2xl font-bold text-orange-500">Kz {total.toFixed(2)}</span>
                            </div>
                            <button 
                                onClick={handleCheckout}
                                className="w-full btn-primary text-white py-4 rounded-full text-lg font-semibold"
                            >
                                <i className="fab fa-whatsapp mr-2"></i>
                                Finalizar Pedido
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    } catch (error) {
        console.error('Cart component error:', error);
        reportError(error);
        return <div>Erro no carrinho</div>;
    }
}
