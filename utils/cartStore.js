const CartStore = {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
    listeners: [],

    addItem(item) {
        const existingItem = this.items.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({ ...item, quantity: 1 });
        }
        this.saveToStorage();
        this.notifyListeners();
    },

    updateQuantity(id, quantity) {
        if (quantity <= 0) {
            this.removeItem(id);
            return;
        }
        const item = this.items.find(i => i.id === id);
        if (item) {
            item.quantity = quantity;
            this.saveToStorage();
            this.notifyListeners();
        }
    },

    removeItem(id) {
        this.items = this.items.filter(i => i.id !== id);
        this.saveToStorage();
        this.notifyListeners();
    },

    getItems() {
        return this.items;
    },

    saveToStorage() {
        localStorage.setItem('cartItems', JSON.stringify(this.items));
    },

    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    },

    notifyListeners() {
        this.listeners.forEach(listener => listener([...this.items]));
    }
};
