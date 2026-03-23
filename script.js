const products = [
    { id: 1, name: "Mouse Maxprint", price: 10.00, badge: "OFERTA TOP", category: "mouse", stock: true, description: "Mouse Maxprint MO1000 Essential, 3 Botões, 1200DPI, Preto.", images: ["imagem/24301A.jpg", "imagem/014.jpg"] },
    { id: 2, name: "Mouse K-mex Gamer", price: 35.00, badge: "PROMO", category: "mouse", stock: true, description: "LED com mudança automática nas cores: vermelho, verde, azul e roxo.", images: ["imagem/798.webp","imagem/2.webp","imagem/789.webp"] },
    { id: 3, name: "Mouse Sem Fio Targus MTG W839", price: 31.00, badge: "PROMO", category: "mouse", stock: true, description: "Mouse Sem Fio Targus MTG W839, Óptico, 3 Botões, 1000 DPI, USB Wireless, Preto.", images: ["imagem/24005A1.jpg","imagem/24005A.jpg","imagem/rt1.webp"] },
    { id: 4, name: "Mouse C3Tech, USB, 3 Botões", price: 22.00, badge: "", category: "variados", stock: false, description: "Qualidade de som de estúdio para gamers exigentes.", images: ["imagem/19806A.jpg","imagem/19806A1.jpg"] },
    { id: 5, name: "Teclado Bright", price: 26.00, badge: "LANÇAMENTO", category: "teclado", stock: true, description: "Teclado Bright, USB, Padrão ABNT2, Preto.", images: ["imagem/00876A.jpg", "imagem/12352.webp","imagem/12345.webp"] },
    { id: 6, name: "Teclado Gamer C3Tech", price: 50.00, badge: "MAIS VENDIDO", category: "teclado", stock: true, description: "Teclado Gamer C3Tech, Multimídia, USB, Preto e Vermelho - KG-10V2BK.", images: ["imagem/23794A.jpg","imagem/23794A1.jpg","imagem/23794A3.jpg"] },
    { id: 7, name: "Teclado Semi Mecânico Gamer K-Mex", price: 78.99, badge: "OFERTA", category: "teclado", stock: false, description: "Mecânico Gamer K-Mex Fusion Color KM-M712, LED 3 Cores, Preto.", images: ["imagem/23755A.jpg","imagem/23755A1.jpg","imagem/23755A2.jpg"] },
    { id: 8, name: "Kit Teclado e Mouse Gamer C3Tech", price: 75.00, badge: "PROMO", category: "variados", stock: true, description: "Kit Teclado e Mouse Gamer C3Tech, USB ABNT2, 3 Botões, 1200DPI.", images: ["imagem/18660A.jpg","imagem/18660A1.jpg"] },
    { id: 9, name: "Computador Intel Core I3", price: 945.00, badge: "", category: "variados", stock: true, description: "Core I3-2120 3.30GHz, 4GB DDR3, SSD 120Gb, Monitor 15 Led.", images: ["imagem/HOMEPC46A.jpg"] },
    { id: 10, name: "Placa Mãe Get H61", price: 153.00, badge: "PROMO", category: "hardware", stock: true, description: "Placa Mãe Get H61 DDR3 M2, Intel LGA 1155, DDR3, M.2.", images: ["imagem/24088A.jpg","imagem/24088A1.jpg"] },
    { id: 11, name: "Processador Intel", price: 49.00, badge: "", category: "hardware", stock: true, description: "Processador Intel Core i3-2120, LGA 1155, Cache 3MB, 3.30GHz.", images: ["imagem/17659A.jpg"] },
    { id: 12, name: "Memória Kingston", price: 106.00, badge: "OFERTA", category: "variados", stock: true, description: "Memória Kingston, 4GB, 1600MHz, DDR3, CL11.", images: ["imagem/16532A.jpg"] },
    { id: 13, name: "Cooler Para Processador", price: 19.99, badge: "", category: "variados", stock: true, description: "Cooler Para Processador Get, Intel 1150/1151/1155/1156/1700.", images: ["imagem/24428A.jpg"] },
    { id: 14, name: "SSD Redragon Rock", price: 189.00, badge: "LANÇAMENTO", category: "hardware", stock: true, description: "SSD Redragon Rock, 120GB, SATA III, Leitura 520MB/s.", images: ["imagem/24585A1.jpg"] },
    { id: 15, name: "Gabinete C3Tech", price: 143.74, badge: "PROMO", category: "variados", stock: true, description: "Gabinete gamer com lateral transparente e ótimo espaço.", images: ["imagem/23234A.jpg"] },
    { id: 16, name: "Fonte 500W Corsair", price: 222.00, badge: "", category: "hardware", stock: true, description: "Fonte de alimentação confiável 80 Plus White.", images: ["imagem/24285A.jpg"] },
    { id: 17, name: "Cabo de Força", price: 12.00, badge: "OFERTA", category: "hardware", stock: true, description: "Cabo de força padrão brasileiro 3 pinos.", images: ["imagem/02941A.jpg"] }
];

let cart = JSON.parse(localStorage.getItem('techStoreCart')) || [];
let discount = 0;
let currentCategory = 'todos';

function init() {
    renderProducts(products);
    updateCartUI();
}

function renderProducts(data) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = data.map(p => `
        <div class="bg-white group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col relative">
            ${p.badge ? `<span class="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded-md z-10 shadow-sm">${p.badge}</span>` : ''}
            
            <div class="relative overflow-hidden cursor-pointer ${!p.stock ? 'sold-out' : ''}" onclick="${p.stock ? `openProductModal(${p.id})` : ''}">
                <img src="${p.images[0]}" class="w-full h-52 object-contain p-4 group-hover:scale-110 transition-transform duration-500">
                ${!p.stock ? `<div class="sold-out-badge">ESGOTADO</div>` : ''}
            </div>

            <div class="p-5 flex-1 flex flex-col">
                <h3 class="font-bold text-gray-800 mb-1 leading-tight text-sm">${p.name}</h3>
                <p class="text-gray-400 text-[11px] mb-4 line-clamp-2">${p.description}</p>
                <div class="mt-auto flex items-center justify-between">
                    <span class="text-indigo-600 font-black text-lg">R$ ${p.price.toFixed(2)}</span>
                    <button onclick="addToCart(${p.id})" ${!p.stock ? 'disabled' : ''} 
                        class="${p.stock ? 'bg-indigo-600 hover:bg-black' : 'bg-gray-300 cursor-not-allowed'} text-white p-3 rounded-xl transition-all shadow-md">
                        <i class="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterProducts() {
    const term = document.getElementById('product-search').value.toLowerCase();
    const filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(term);
        const matchesCat = currentCategory === 'todos' || 
                           (currentCategory === 'promo' && p.badge !== "") ||
                           p.category === currentCategory;
        return matchesSearch && matchesCat;
    });
    renderProducts(filtered);
}

function filterCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.toggle('active-cat', btn.getAttribute('data-category') === cat);
    });
    const titles = { 'todos': 'Todos os Produtos', 'promo': '🔥 Promoções', 'mouse': 'Mouses', 'teclado': 'Teclados', 'hardware': 'Hardware', 'variados': 'Diversos' };
    document.getElementById('section-title').innerText = titles[cat] || 'Produtos';
    filterProducts();
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product || !product.stock) return;
    
    cart.push({ ...product, cartId: Date.now() });
    updateCartUI();
    localStorage.setItem('techStoreCart', JSON.stringify(cart));
    
    if (document.getElementById('cart-sidebar').classList.contains('translate-x-full')) toggleCart();
}

function updateCartUI() {
    const container = document.getElementById('cart-items');
    container.innerHTML = cart.map((item, index) => `
        <div class="flex gap-4 items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
            <img src="${item.images[0]}" class="w-12 h-12 object-contain bg-white rounded-lg">
            <div class="flex-1 text-[11px]">
                <p class="font-bold">${item.name}</p>
                <p class="text-indigo-600 font-black">R$ ${item.price.toFixed(2)}</p>
            </div>
            <button onclick="removeItem(${index})" class="text-red-300 hover:text-red-500"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    `).join('');

    const subtotal = cart.reduce((acc, i) => acc + i.price, 0);
    const shipping = (subtotal > 25 || subtotal === 0) ? 0 : 12.00;
    const total = (subtotal - discount) + shipping;

    document.getElementById('subtotal').innerText = `R$ ${subtotal.toFixed(2)}`;
    document.getElementById('discount-val').innerText = `- R$ ${discount.toFixed(2)}`;
    document.getElementById('shipping-cost').innerText = shipping === 0 && subtotal > 0 ? "GRÁTIS" : `R$ ${shipping.toFixed(2)}`;
    document.getElementById('total-price').innerText = `R$ ${total.toFixed(2)}`;
    document.getElementById('cart-count').innerText = cart.length;
}

function removeItem(index) {
    cart.splice(index, 1);
    if(cart.length === 0) discount = 0;
    localStorage.setItem('techStoreCart', JSON.stringify(cart));
    updateCartUI();
}

function applyCoupon() {
    const code = document.getElementById('coupon-code').value.toUpperCase();
    const subtotal = cart.reduce((acc, i) => acc + i.price, 0);
    if(code === "MSTORE10" && subtotal > 0) {
        discount = subtotal * 0.10;
        alert("Cupom de 10% aplicado!");
    } else {
        discount = 0;
        alert("Cupom inválido ou carrinho vazio.");
    }
    updateCartUI();
}

function openProductModal(id) {
    const p = products.find(x => x.id === id);
    document.getElementById('modal-title').innerText = p.name;
    document.getElementById('modal-price').innerText = `R$ ${p.price.toFixed(2)}`;
    document.getElementById('modal-desc').innerText = p.description;
    document.getElementById('modal-main-img').src = p.images[0];
    
    const thumbs = document.getElementById('modal-thumbnails');
    thumbs.innerHTML = p.images.map(img => `
        <img src="${img}" onclick="document.getElementById('modal-main-img').src='${img}'" 
        class="h-14 w-14 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-indigo-500 bg-white">
    `).join('');

    document.getElementById('add-to-cart-btn').onclick = () => { addToCart(id); closeProductModal(); };
    document.getElementById('product-modal').classList.remove('hidden');
}

function closeProductModal() { document.getElementById('product-modal').classList.add('hidden'); }

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('translate-x-full');
}

function showCheckout() {
    if (cart.length === 0) return alert("Carrinho vazio!");
    const subtotal = cart.reduce((acc, i) => acc + i.price, 0);
    const total = (subtotal - discount) + (subtotal > 25 ? 0 : 12);
    
    let msg = `*M STORE - NOVO PEDIDO*\n\n`;
    cart.forEach(i => msg += `• ${i.name} (R$ ${i.price.toFixed(2)})\n`);
    msg += `\n*TOTAL:* R$ ${total.toFixed(2)}`;
    window.open(`https://wa.me/5581996646300?text=${encodeURIComponent(msg)}`, '_blank');
}

// Iniciar
window.onload = init;
