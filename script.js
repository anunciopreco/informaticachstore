const products = [
    { 
        id: 1, 
        name: "Mouse Maxprint", 
        price: 10.00, 
        badge: "OFERTA TOP",
        category: "mouse",
        stock: true,
        description: "Mouse Maxprint MO1000 Essential, 3 Botões, 1200DPI, Preto.",
        images: ["imagem/24301A.jpg", "imagem/014.jpg"] 
    },
    { 
          id: 2, 
        name: "Mouse K-mex Gamer", 
        price: 35.00, 
        badge: "PROMO",
        category: "mouse",
        stock: true,
        description: "LED com mudança automática nas cores: vermelho, verde, azul e roxo .",
        images: ["imagem/798.webp","imagem/2.webp","imagem/789.webp"] 
    },
    { 
         id: 3, 
        name: "Mouse Sem Fio Targus MTG W839", 
        price: 31.00, 
        badge: "PROMO",
        category: "mouse",
        stock: true,
        description: "Mouse Sem Fio Targus MTG W839, Óptico, 3 Botões, 1000 DPI, USB Wireless, Preto .",
        images: ["imagem/24005A1.jpg","imagem/24005A.jpg","imagem/rt1.webp"]  
    },
    { 
         id: 4, 
        name: "Mouse C3Tech, USB, 3 Botões", 
        price: 22.00, 
        badge: "",
        category: "variados",
        stock: false,
        description: "Qualidade de som de estúdio para gamers exigentes.",
        images: ["imagem/19806A.jpg","imagem/19806A1.jpg"] 
    },
 { 
      id: 5, 
        name: "Teclado Bright", 
        price: 26.00, 
        badge: "LANÇAMENTO",
        category: "teclado",
        stock: true,
        description: "Teclado Bright, USB, Padrão ABNT2, Preto.",
        images: ["imagem/00876A.jpg", "imagem/12352.webp","imagem/12345.webp"]
    },

    { 
       
         id: 6, 
        name: "Teclado Gamer C3Tech", 
        price: 50.00, 
        badge: "MAIS VENDIDO",
        category: "Teclado",
        stock: true,
        description: "Teclado Gamer C3Tech, Multimídia, USB, Preto e Vermelho - KG-10V2BK.",
        images:  ["imagem/23794A.jpg","imagem/23794A1.jpg","imagem/23794A3.jpg"]
    },

    { 
    id: 7, 
    name: "Teclado Semi Mecânico Gamer K-Mex", 
    price: 78.99, 
    badge: "OFERTA", 
    category: "teclado",
    stock: 1,
    description: "Mecânico Gamer K-Mex Fusion Color KM-M712, LED 3 Cores, Preto - KMM7128U001CB0X.",
    images: ["IMAGEM/23755A.jpg","imagem/23755A1.jpg","imagem/23755A2.jpg","imagem/23755A3.jpg","imagem/23755A4.jpg"] 
},
{ 
    id: 8, 
    name: "Kit Teclado e Mouse Gamer C3Tech", 
    price: 75.00, 
    badge: "PROMO", 
    category: "variados",
    stock: true,
    description: "Kit Teclado e Mouse Gamer C3Tech, USB ABNT2, 3 Botões, 1200DPI, Preto e Vermelho - GK-20BK.",
    images: ["imagem/18660A.jpg","imagem/18660A1.jpg","imagem/18660A2.jpg","imagem/18660A3.jpg"] 
},
{ 
    id: 9, 
    name: "Computador Intel Core I3", 
    price: 945.00, 
    badge: "", 
    category: "variados",
    stock: true,
    description: "Core I3-2120 3.30GHz, 4GB DDR3, SSD 120Gb, Monitor 15 4 Led, Teclado e Mouse.",
    images: ["imagem/HOMEPC46A.jpg"] 
},
{ 
    id: 10, 
    name: "Placa Mãe Get H61 ", 
    price: 153.00, 
    badge: "PROMO", 
    category: "hardware",
    stock: true,
    description: "Placa Mãe Get H61 DDR3 M2, Intel LGA 1155, DDR3, M.2, USB 2.0, VGA HDMI",
    images: ["imagem/24088A.jpg","imagem/24088A1.jpg","imagem/24088A2.jpg","imagem/24088A3.jpg"] 
},
{ 
    id: 11, 
    name: "Processador Intel", 
    price: 49.00, 
    badge: "", 
    category: "hardware",
    stock: true,
    description: "Processador Intel Core i3-2120, LGA 1155, Cache 3MB, 3.30GHz, OEM",
    images: ["imagem/17659A.jpg"] 
},
{ 
    id: 12, 
    name: "Memória Kingston", 
    price: 106.00, 
    badge: "OFERTA", 
    category: "variados",
    stock: true,
    description: "Memória Kingston, 4GB, 1600MHz, DDR3, CL11 Paralela - KVR16N11/4.",
    images: ["imagem/16532A.jpg"] 
},
{ 
    id: 13, 
    name: "Cooler Para Processador", 
    price: 19.99, 
    badge: "", 
    category: "variados",
    stock: true,
    description: "Cooler Para Processador Get, Intel 1150/1151/1155/1156/1700, Preto - 72331",
    images: ["imagem/24428A.jpg","imagem/24428A1.jpg","imagem/24428A2.jpg"] 
},
{ 
    id: 14, 
    name: "SSD Redragon Rock", 
    price: 189.00, 
    badge: "LANÇAMENTO", 
    category: "hardware",
    stock: true,
    description: "SSD Redragon Rock, 120GB, SATA III, Leitura 520MB/s, Gravação 470MB/s, Preto - GD-310.",
    images: ["imagem/24585A1.jpg","imagem/24585A2.jpg","imagem/24585A3.jpg"] 
},
{ 
    id: 15, 
    name: "Gabinete C3Tech ", 
    price:  143.74, 
    badge: "PROMO", 
    category: "variados",
    stock: true,
    description: "Monitor Hayom 15.4 LED, 5ms, 60Hz, VGA/HDMI, Preto - MO6006.",
    images: ["imagem/23234A.jpg","imagem/23234A1.jpg","imagem/23234A2.jpg"] 
},
{ 
    id: 16, 
    name: "Fonte 500W Corsair", 
    price: 222.00, 
    badge: "", 
    category: "hardware",
    stock: true,
    description: "Fonte confiável com certificação 80 Plus.",
    images: ["imagem/24285A.jpg","imagem/24285A2.jpg","imagem/24285A3.jpg"] 
},
{ 
    id: 17, 
    name: "Cabo de Força", 
    price: 12.00, 
    badge: "OFERTA", 
    category: "hardware",
    stock: true,
    description: "Cabo de Força 1.20 Metro Padrão Novo, Preto.",
    images: ["imagem/02941A.jpg"] 
},
// { 
//     id: 18, 
//     name: "Notebook Dell i5", 
//     price: 3200.00, 
//     badge: "PROMO", 
//     category: "hardware",
//     stock: true,
//     description: "Desempenho ideal para trabalho e estudo.",
//     images: ["imagem/note1.jpg"] 
// },
// { 
//     id: 19, 
//     name: "Pen Drive 64GB", 
//     price: 35.00, 
//     badge: "", 
//     category: "variados",
//     stock: true,
//     description: "Armazenamento portátil rápido.",
//     images: ["imagem/pendrive1.jpg"] 
// },
// { 
//     id: 20, 
//     name: "Switch 8 Portas TP-Link", 
//     price: 140.00, 
//     badge: "", 
//     category: "hardware",
//     stock: true,
//     description: "Expanda sua rede com facilidade.",
//     images: ["imagem/switch1.jpg"] 
// },
// { 
//     id: 21, 
//     name: "Roteador Wi-Fi Dual Band", 
//     price: 220.00, 
//     badge: "PROMO", 
//     category: "hardware",
//     stock: true,
//     description: "Internet rápida e estável.",
//     images: ["imagem/roteador1.jpg"] 
// },
// { 
//     id: 22, 
//     name: "Cooler para Processador", 
//     price: 70.00, 
//     badge: "", 
//     category: "hardware",
//     stock: true,
//     description: "Melhora a refrigeração do PC.",
//     images: ["imagem/cooler1.jpg"] 
// },
// { 
//     id: 23, 
//     name: "Adaptador USB Wi-Fi", 
//     price: 60.00, 
//     badge: "OFERTA", 
//     category: "variados",
//     stock: true,
//     description: "Conecte seu PC à rede sem fio.",
//     images: ["imagem/wifi1.jpg"] 
// },
// { 
//     id: 24, 
//     name: "Hub USB 4 Portas", 
//     price: 40.00, 
//     badge: "", 
//     category: "variados",
//     stock: true,
//     description: "Expanda suas conexões USB.",
//     images: ["imagem/hub1.jpg"] 
// },
// { 
//     id: 25, 
//     name: "Suporte para Notebook", 
//     price: 55.00, 
//     badge: "", 
//     category: "variados",
//     stock: true,
//     description: "Melhora ergonomia e ventilação.",
//     images: ["imagem/suporte1.jpg"] 
// },
// { 
//     id: 26, 
//     name: "Mouse Logitech M170", 
//     price: 65.00, 
//     badge: "OFERTA", 
//     category: "mouse",
//     stock: true,
//     description: "Mouse sem fio confortável e preciso.",
//     images: ["imagem/logitech1.jpg"] 
// }

];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let discount = 0;
let currentCategory = 'todos';

function init() {
    renderProducts(products);
    updateCartUI();
}

// LÓGICA DE FILTRAGEM (PESQUISA + CATEGORIA)
function filterProducts() {
    const searchTerm = document.getElementById('product-search').value.toLowerCase();
    
    const filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm);
        const matchesCategory = (currentCategory === 'todos') || 
                                (currentCategory === 'promo' && p.badge !== "") ||
                                (p.category === currentCategory);
        return matchesSearch && matchesCategory;
    });

    renderProducts(filtered);
}

function filterCategory(cat) {
    currentCategory = cat;
    
    // Atualiza botões
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.remove('active-cat');
        if(btn.getAttribute('data-category') === cat) btn.classList.add('active-cat');
    });

    // Atualiza título da seção
    const titles = {
        'todos': 'Todos os Produtos',
        'promo': '🔥 Promoções Imperdíveis',
        'mouse': 'Mouses Profissionais',
        'teclado': 'Teclados Mecânicos',
        'hardware': 'Peças e Hardware',
        'variados': 'Produtos Diversos'
    };
    document.getElementById('section-title').innerText = titles[cat] || 'Produtos';

    filterProducts();
}

function renderProducts(data) {
    const grid = document.getElementById('product-grid');
    if(data.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-20 text-gray-400">Nenhum produto encontrado nesta categoria.</div>`;
        return;
    }

    grid.innerHTML = data.map(p => `
        <div class="bg-white group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col relative ${!p.stock ? 'sold-out' : ''}">
            ${p.badge ? `<span class="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded-md z-10 shadow-sm">${p.badge}</span>` : ''}
            
            <div class="relative overflow-hidden cursor-pointer" onclick="openProductModal(${p.id})">
                <img src="${p.images[0]}" class="w-full h-52 object-contain p-4 group-hover:scale-110 transition-transform duration-500">
            </div>
            <div class="p-5 flex-1 flex flex-col">
                <h3 class="font-bold text-gray-800 mb-1 leading-tight">${p.name}</h3>
                <p class="text-gray-400 text-[11px] mb-4 line-clamp-2">${p.description}</p>
                <div class="mt-auto flex items-center justify-between">
                    <span class="text-indigo-600 font-black text-xl">R$ ${p.price.toFixed(2)}</span>
                    <button onclick="addToCart(${p.id})" class="bg-indigo-600 text-white p-3 rounded-xl hover:bg-black transition-all shadow-md">
                        <i class="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ... (Restante das funções: openProductModal, addToCart, updateCartUI, showCheckout permanecem iguais às anteriores)
// Copie as funções do seu script anterior aqui para completar o arquivo:
function openProductModal(id) {
    const p = products.find(x => x.id === id);
    document.getElementById('modal-title').innerText = p.name;
    document.getElementById('modal-price').innerText = `R$ ${p.price.toFixed(2)}`;
    document.getElementById('modal-desc').innerText = p.description;
    document.getElementById('modal-main-img').src = p.images[0];
    const thumbContainer = document.getElementById('modal-thumbnails');
    thumbContainer.innerHTML = p.images.map(img => `<img src="${img}" onclick="document.getElementById('modal-main-img').src='${img}'" class="h-16 w-16 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-indigo-500 bg-white">`).join('');
    document.getElementById('add-to-cart-btn').onclick = () => { addToCart(id); closeProductModal(); };
    document.getElementById('product-modal').classList.remove('hidden-modal');
}
function closeProductModal() { document.getElementById('product-modal').classList.add('hidden-modal'); }
function toggleCart() { document.getElementById('cart-sidebar').classList.toggle('hidden-panel'); }
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    if(document.getElementById('cart-sidebar').classList.contains('hidden-panel')) toggleCart();
}
function updateCartUI() {
    const container = document.getElementById('cart-items');
    container.innerHTML = cart.map((item, index) => `
        <div class="flex gap-4 items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
            <img src="${item.images[0]}" class="w-12 h-12 object-contain bg-white rounded-lg">
            <div class="flex-1 text-xs">
                <p class="font-bold">${item.name}</p>
                <p class="text-indigo-600 font-black">R$ ${item.price.toFixed(2)}</p>
            </div>
            <button onclick="removeItem(${index})" class="text-red-300 hover:text-red-500"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    `).join('');
    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    const shipping = (subtotal > 25 || subtotal === 0) ? 0 : 12.00;
    const total = (subtotal - discount) + shipping;
    document.getElementById('subtotal').innerText = `R$ ${subtotal.toFixed(2)}`;
    document.getElementById('discount-val').innerText = `- R$ ${discount.toFixed(2)}`;
    document.getElementById('shipping-cost').innerText = shipping === 0 && subtotal > 0 ? "GRÁTIS" : `R$ ${shipping.toFixed(2)}`;
    document.getElementById('total-price').innerText = `R$ ${total.toFixed(2)}`;
    document.getElementById('cart-count').innerText = cart.length;
}
function removeItem(index) { cart.splice(index, 1); if(cart.length === 0) discount = 0; localStorage.setItem('cart', JSON.stringify(cart)); updateCartUI(); }
function applyCoupon() {
    const code = document.getElementById('coupon-code').value.toUpperCase();
    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    if(code === "MSTORE10") { discount = subtotal * 0.10; alert("Cupom aplicado!"); }
    else { discount = 0; alert("Cupom inválido."); }
    updateCartUI();
}
function showCheckout() {
    if (cart.length === 0) return alert("Carrinho vazio!");
    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    const shipping = (subtotal > 25) ? 0 : 12.00;
    const total = (subtotal - discount) + shipping;
    let message = `*M STORE - NOVO PEDIDO*\n\n`;
    cart.forEach(item => message += `• ${item.name}\n`);
    message += `\n*TOTAL:* R$ ${total.toFixed(2)}`;
    window.open(`https://wa.me/5581996646300?text=${encodeURIComponent(message)}`, '_blank');
}


init();