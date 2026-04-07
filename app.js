// 1. Dữ liệu SVG (Để hình ảnh không bao giờ lỗi)
const UI_ASSETS = {
    logo: `<svg height="45" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><path d="M100 50 C180 50, 250 120, 250 200 C250 280, 180 350, 100 350 L100 300 C150 300, 200 250, 200 200 C200 150, 150 100, 100 100 Z" fill="#8B5E3C"/><rect x="50" y="50" width="100" height="50" fill="#8B5E3C" rx="10"/><rect x="50" y="50" width="50" height="300" fill="#8B5E3C" rx="10"/><rect x="130" y="165" width="40" height="40" fill="#FBBF24" rx="4"/></svg>`,
    q1: `<svg viewBox="0 0 64 64" fill="white"><path d="M32 4L12 24V60H52V24L32 4Z" fill-opacity="0.3"/><path d="M32 2L35 12H29L32 2Z" fill="white"/><rect x="28" y="12" width="8" height="48" fill="white"/></svg>`,
    q3: `<svg viewBox="0 0 64 64" fill="white"><circle cx="32" cy="40" r="18" stroke="white" stroke-width="2" fill="none"/><rect x="30" y="10" width="4" height="20" fill="white"/></svg>`,
    bt: `<svg viewBox="0 0 64 64" fill="white"><rect x="28" y="5" width="8" height="55" fill="white"/><rect x="22" y="30" width="6" height="30" fill="white" fill-opacity="0.5"/><rect x="36" y="30" width="6" height="30" fill="white" fill-opacity="0.5"/></svg>`
};

// 2. Render Header
function renderHeader() {
    document.getElementById('header-component').innerHTML = `
        <nav class="bg-white shadow-sm sticky top-0 z-50 py-3 px-4 flex justify-between items-center border-b">
            <div onclick="renderHome()" class="flex items-center cursor-pointer">
                ${UI_ASSETS.logo}
                <div class="font-extrabold text-xl text-blue-700 uppercase italic ml-2">Cao Thiên Properties</div>
            </div>
            <a href="tel:0987848390" class="bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm">Gọi ngay</a>
        </nav>`;
}

// 3. Render Trang Chủ (Danh mục quận)
function renderHome() {
    const districts = [
        { id: 'q1', name: 'Quận 1', sub: 'Trung tâm', color: 'bg-blue-600', icon: UI_ASSETS.q1 },
        { id: 'q3', name: 'Quận 3', sub: 'Hồ Con Rùa', color: 'bg-emerald-600', icon: UI_ASSETS.q3 },
        { id: 'binh-thanh', name: 'Bình Thạnh', sub: 'Landmark 81', color: 'bg-cyan-600', icon: UI_ASSETS.bt }
    ];

    let html = `<section class="max-w-6xl mx-auto px-4 mt-8">
        <h2 class="text-2xl font-bold mb-6 border-l-4 border-blue-600 pl-4">Khu vực nổi bật</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">`;
    
    districts.forEach(d => {
        html += `
            <div onclick="renderList('${d.id}', '${d.name}')" class="district-card ${d.color} shadow-lg">
                ${d.icon}
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent flex items-end p-6">
                    <div><span class="text-white font-bold text-lg uppercase block">${d.name}</span><span class="text-white/80 text-[10px]">${d.sub}</span></div>
                </div>
            </div>`;
    });
    
    html += `</div></section>`;
    document.getElementById('app-content').innerHTML = html;
}

// 4. Render Trang Danh Sách (Sau khi chọn quận)
function renderList(id, name) {
    document.getElementById('app-content').innerHTML = `
        <section class="max-w-6xl mx-auto px-4 mt-6">
            <button onclick="renderHome()" class="text-blue-600 font-bold mb-6"><i class="fa-solid fa-arrow-left mr-2"></i> Trở về</button>
            <h2 class="text-xl font-bold text-slate-800 uppercase italic mb-8">Danh sách tại ${name}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white rounded-3xl shadow-sm border overflow-hidden">
                    <img src="https://via.placeholder.com/600x400" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="font-bold text-lg">Căn hộ dịch vụ ${name}</h3>
                        <p class="text-orange-600 font-black text-2xl my-2">8.5 Tr/tháng</p>
                        <button class="w-full bg-slate-100 py-3 rounded-2xl font-bold">Xem chi tiết</button>
                    </div>
                </div>
            </div>
        </section>`;
}

// Khởi chạy ứng dụng
renderHeader();
renderHome();