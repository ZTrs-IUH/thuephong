// --- 1. KHO DỮ LIỆU ICON SVG 2D (Cho các quận) ---
const ICONS = {
    q1: `<svg class="icon-2d" viewBox="0 0 64 64" fill="white"><path d="M32 4L12 24V60H52V24L32 4Z" fill-opacity="0.3"/><path d="M32 2L35 12H29L32 2Z" fill="white"/><rect x="28" y="12" width="8" height="48" fill="white"/></svg>`,
    q3: `<svg class="icon-2d" viewBox="0 0 64 64" fill="white"><circle cx="32" cy="40" r="18" stroke="white" stroke-width="2" fill="none"/><rect x="30" y="10" width="4" height="20" fill="white"/><path d="M25 30H39" stroke="white" stroke-width="2"/></svg>`,
    q10: `<svg class="icon-2d" viewBox="0 0 64 64" fill="white"><ellipse cx="32" cy="32" rx="15" ry="18" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2"/><line x1="32" y1="14" x2="32" y2="50" stroke="white" stroke-width="2"/></svg>`,
    pn: `<svg class="icon-2d" viewBox="0 0 64 64" fill="white"><path d="M20 15V45M15 15V25M25 15V25M45 15C45 35 40 45 40 45V15" stroke="white" stroke-width="3" stroke-linecap="round" fill="none"/></svg>`,
    bt: `<svg class="icon-2d" viewBox="0 0 64 64" fill="white"><rect x="28" y="5" width="8" height="55" fill="white"/><rect x="22" y="30" width="6" height="30" fill="white" fill-opacity="0.5"/><rect x="36" y="30" width="6" height="30" fill="white" fill-opacity="0.5"/></svg>`,
    gv: `<svg class="icon-2d" viewBox="0 0 64 64" fill="white"><rect x="15" y="30" width="34" height="25" stroke="white" stroke-width="2" fill="none"/><path d="M12 30L18 15H46L52 30" stroke="white" stroke-width="2" fill="none"/></svg>`,
    tb: `<svg class="icon-2d" viewBox="0 0 64 64" fill="white"><path d="M10 35L55 15L40 35L55 55L10 35Z" fill="white" fill-opacity="0.5" stroke="white" stroke-width="2"/></svg>`
};

// --- 2. DANH SÁCH ĐẦY ĐỦ CÁC QUẬN ---
const DISTRICTS = [
    { id: 'q1', name: 'Quận 1', desc: 'Trung tâm Sài Gòn', color: 'bg-blue-600', icon: ICONS.q1 },
    { id: 'q3', name: 'Quận 3', desc: 'Hồ Con Rùa & Biệt thự cổ', color: 'bg-emerald-600', icon: ICONS.q3 },
    { id: 'q10', name: 'Quận 10', desc: 'Khu sầm uất bậc nhất', color: 'bg-orange-500', icon: ICONS.q10 },
    { id: 'phu-nhuan', name: 'Phú Nhuận', desc: 'Phan Xích Long & Ăn uống', color: 'bg-lime-600', icon: ICONS.pn },
    { id: 'binh-thanh', name: 'Bình Thạnh', desc: 'Landmark 81 & Vinhomes', color: 'bg-cyan-600', icon: ICONS.bt },
    { id: 'go-vap', name: 'Gò Vấp', desc: 'Trung tâm mua sắm Gò Vấp', color: 'bg-purple-600', icon: ICONS.gv },
    { id: 'tan-binh', name: 'Tân Bình', desc: 'Gần Sân bay Tân Sơn Nhất', color: 'bg-slate-500', icon: ICONS.tb }
];

// --- 3. CÁC HÀM RENDER ---
function initApp() {
    renderHeader();
    renderHome();
}

function renderHeader() {
    // NÍ THAY ĐƯỜNG DẪN ẢNH CỦA NÍ VÀO ĐÂY (VÍ DỤ 'logo.png')
    const userLogoUrl = 'logo.png'; 

    document.getElementById('header-part').innerHTML = `
        <nav class="bg-white shadow-sm sticky top-0 z-50 py-2 px-4 flex justify-between items-center border-b">
            <div onclick="renderHome()" class="flex items-center cursor-pointer">
                <img src="${userLogoUrl}" alt="Cao Thiên Properties Logo" class="logo-img">
                <div class="font-extrabold text-xl text-blue-700 tracking-tighter uppercase italic">Cao Thiên Properties</div>
            </div>
            <a href="tel:0987848390" class="bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-md active:scale-95 transition">
                <i class="fa-solid fa-phone mr-1"></i> Gọi ngay
            </a>
        </nav>`;
}

function renderHome() {
    let html = `
    <section class="max-w-6xl mx-auto px-4 mt-8">
        <h2 class="text-2xl font-bold mb-6 text-slate-800 border-l-4 border-blue-600 pl-4">Khu vực nổi bật</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">`;
    
    DISTRICTS.forEach(d => {
        html += `
            <div onclick="renderListPage('${d.id}', '${d.name}')" class="district-card ${d.color} shadow-lg">
                ${d.icon}
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                    <div>
                        <span class="text-white font-bold text-lg uppercase italic block">${d.name}</span>
                        <span class="text-blue-100 text-[10px]">${d.desc}</span>
                    </div>
                </div>
            </div>`;
    });
    
    html += `</div></section>`;
    document.getElementById('main-content').innerHTML = html;
    window.scrollTo(0,0);
}

function renderListPage(id, name) {
    document.getElementById('main-content').innerHTML = `
        <section class="max-w-6xl mx-auto px-4 mt-6">
            <div class="flex items-center gap-2 mb-6">
                <button onclick="renderHome()" class="bg-blue-50 text-blue-600 font-bold p-3 rounded-2xl active:bg-blue-100">
                    <i class="fa-solid fa-chevron-left mr-2"></i> Trở về
                </button>
                <h2 class="text-xl font-bold text-slate-800 uppercase italic">Khu vực ${name}</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="room-card bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                    <div class="h-48 bg-slate-200 flex items-center justify-center text-slate-400">Chưa có phòng tại ${name}</div>
                    <div class="p-6">
                        <h3 class="font-bold text-lg text-slate-800 italic">Đang cập nhật dữ liệu...</h3>
                    </div>
                </div>
            </div>
        </section>`;
    window.scrollTo(0,0);
}

// Khởi tạo
initApp();