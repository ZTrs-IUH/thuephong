// app.js - Xử lý logic hiển thị
let currentDistId = '';

function init() {
    const grid = document.getElementById('districtGrid');
    grid.innerHTML = DISTRICTS.map(d => `
        <div onclick="showList('${d.id}', '${d.name}')" class="district-card ${d.color} shadow-lg">
            ${d.icon}
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent flex items-end p-6">
                <span class="text-white font-bold text-lg uppercase italic">${d.name}</span>
            </div>
        </div>
    `).join('');
}

function showHome() {
    document.getElementById('homePage').classList.remove('hidden');
    document.getElementById('listPage').classList.add('hidden');
    document.getElementById('filterBtn').classList.add('hidden');
    window.scrollTo(0,0);
}

function showList(id, name) {
    currentDistId = id;
    document.getElementById('homePage').classList.add('hidden');
    document.getElementById('listPage').classList.remove('hidden');
    document.getElementById('filterBtn').classList.remove('hidden');
    document.getElementById('listTitle').innerText = 'Khu vực ' + name;
    renderRooms();
}

function renderRooms() {
    const max = document.getElementById('priceSlider').value;
    const container = document.getElementById('roomContainer');
    const filtered = ROOMS.filter(r => r.dist === currentDistId && r.price <= max);
    
    if(filtered.length === 0) {
        container.innerHTML = `<p class="col-span-full text-center text-slate-400 py-10 italic">Chưa có phòng phù hợp ở đây...</p>`;
    } else {
        container.innerHTML = filtered.map(r => `
            <div class="bg-white rounded-2xl shadow-sm border overflow-hidden">
                <img src="${r.img}" class="w-full h-44 object-cover">
                <div class="p-4">
                    <h3 class="font-bold text-slate-800 italic">${r.addr}</h3>
                    <p class="text-orange-600 font-black text-xl my-2">${(r.price/1000000).toFixed(1)} Triệu</p>
                    <button onclick="openModal(${r.id})" class="w-full bg-slate-50 py-2 rounded-xl text-sm font-bold border border-slate-100">Xem Dịch Vụ</button>
                </div>
            </div>
        `).join('');
    }
}

function toggleDrawer() {
    document.getElementById('filterDrawer').classList.toggle('open');
    document.getElementById('drawerOverlay').classList.toggle('hidden');
    renderRooms();
}

function updatePriceLabel(val) {
    document.getElementById('priceLabel').innerText = parseInt(val).toLocaleString('vi-VN') + 'đ';
}

function openModal(id) {
    const r = ROOMS.find(item => item.id === id);
    document.getElementById('mAddress').innerText = r.addr;
    document.getElementById('mServices').innerHTML = `
        <div class="flex justify-between text-sm p-3 bg-slate-50 rounded-lg"><span>Điện:</span><span class="font-bold text-yellow-600">${r.s.d}</span></div>
        <div class="flex justify-between text-sm p-3 bg-slate-50 rounded-lg"><span>Nước:</span><span class="font-bold text-blue-600">${r.s.n}</span></div>
        <div class="flex justify-between text-sm p-3 bg-slate-50 rounded-lg"><span>Xe:</span><span class="font-bold text-red-600">${r.s.x}</span></div>
        <div class="flex justify-between text-sm p-3 bg-slate-50 rounded-lg"><span>Phí khác:</span><span class="font-bold text-green-700">${r.s.k}</span></div>
    `;
    document.getElementById('infoModal').style.display = "block";
}

function closeModal() { document.getElementById('infoModal').style.display = "none"; }
window.onclick = e => { if(e.target == document.getElementById('infoModal')) closeModal(); }

init();