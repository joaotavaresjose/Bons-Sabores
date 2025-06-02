function ProfilePage({ user, setUser, setCurrentPage }) {
    try {
        const [isEditing, setIsEditing] = React.useState(false);
        const [formData, setFormData] = React.useState({
            name: user?.name || '',
            email: user?.email || '',
            avatar: user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'
        });

        const handleInputChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        const handleAvatarChange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    setFormData({
                        ...formData,
                        avatar: event.target.result
                    });
                };
                reader.readAsDataURL(file);
            }
        };

        const handleSave = () => {
            const updatedUser = {
                ...user,
                name: formData.name,
                email: formData.email,
                avatar: formData.avatar
            };
            
            setUser(updatedUser);
            localStorage.setItem('user', JSON.stringify(updatedUser));
            setIsEditing(false);
        };

        const handleCancel = () => {
            setFormData({
                name: user?.name || '',
                email: user?.email || '',
                avatar: user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'
            });
            setIsEditing(false);
        };

        if (!user) {
            return (
                <div className="min-h-screen bg-gray-50 flex items-center justify-center fade-in">
                    <div className="text-center scale-in">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Acesso Negado</h2>
                        <p className="text-gray-600 mb-6">Você precisa estar logado para acessar esta página.</p>
                        <button 
                            onClick={() => setCurrentPage('login')}
                            className="btn-primary text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform"
                        >
                            Fazer Login
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div data-name="profile-page" data-file="pages/ProfilePage.js" className="min-h-screen bg-gray-50 py-12 px-4 fade-in">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg p-8 scale-in">
                        <div className="text-center mb-8 fade-in-up">
                            <div className="relative w-20 h-20 mx-auto mb-4">
                                <img 
                                    src={formData.avatar} 
                                    alt="Avatar" 
                                    className="w-20 h-20 rounded-full object-cover border-4 border-orange-100"
                                />
                                {isEditing && (
                                    <div>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleAvatarChange}
                                            className="hidden"
                                            id="avatar-upload"
                                        />
                                        <label
                                            htmlFor="avatar-upload"
                                            className="absolute bottom-0 right-0 bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-orange-600 transition"
                                        >
                                            <i className="fas fa-camera text-xs"></i>
                                        </label>
                                    </div>
                                )}
                            </div>
                            <h1 className="text-3xl font-bold text-gray-800">Meu Perfil</h1>
                        </div>

                        <div className="space-y-6 fade-in-up">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                    />
                                ) : (
                                    <p className="text-lg text-gray-800 bg-gray-50 px-4 py-3 rounded-lg">{user.name}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                {isEditing ? (
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                    />
                                ) : (
                                    <p className="text-lg text-gray-800 bg-gray-50 px-4 py-3 rounded-lg">{user.email}</p>
                                )}
                            </div>

                            <div className="flex space-x-4 pt-6">
                                {isEditing ? (
                                    <div className="flex space-x-4 w-full">
                                        <button
                                            onClick={handleSave}
                                            className="flex-1 btn-primary text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
                                        >
                                            Salvar
                                        </button>
                                        <button
                                            onClick={handleCancel}
                                            className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition hover:scale-105"
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="w-full btn-primary text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
                                    >
                                        <i className="fas fa-edit mr-2"></i>
                                        Editar Perfil
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ProfilePage component error:', error);
        reportError(error);
        return <div>Erro na página de perfil</div>;
    }
}
