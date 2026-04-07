// data.js - Kho dữ liệu phòng của Cao Thiên Properties
const DISTRICTS = [
    { id: 'q1', name: 'Quận 1', color: 'bg-blue-600', icon: '<svg viewBox="0 0 64 64" fill="white"><path d="M32 4L12 24V60H52V24L32 4Z" fill-opacity="0.3"/><rect x="28" y="12" width="8" height="48" fill="white"/></svg>' },
    { id: 'q3', name: 'Quận 3', color: 'bg-emerald-600', icon: '<svg viewBox="0 0 64 64" fill="white"><circle cx="32" cy="40" r="15" stroke="white" stroke-width="2" fill="none"/><rect x="30" y="10" width="4" height="20" fill="white"/></svg>' },
    { id: 'q10', name: 'Quận 10', color: 'bg-orange-500', icon: '<svg viewBox="0 0 64 64" fill="white"><ellipse cx="32" cy="32" rx="15" ry="18" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2"/></svg>' },
    { id: 'phu-nhuan', name: 'Phú Nhuận', color: 'bg-lime-600', icon: '<svg viewBox="0 0 64 64" fill="white"><path d="M20 15V45M15 15V25M25 15V25" stroke="white" stroke-width="3" fill="none"/></svg>' },
    { id: 'binh-thanh', name: 'Bình Thạnh', color: 'bg-cyan-600', icon: '<svg viewBox="0 0 64 64" fill="white"><rect x="28" y="5" width="8" height="55" fill="white"/></svg>' },
    { id: 'go-vap', name: 'Gò Vấp', color: 'bg-purple-600', icon: '<svg viewBox="0 0 64 64" fill="white"><rect x="15" y="30" width="34" height="25" stroke="white" stroke-width="2" fill="none"/></svg>' },
    { id: 'tan-binh', name: 'Tân Bình', color: 'bg-slate-500', icon: '<svg viewBox="0 0 64 64" fill="white"><path d="M10 35L55 15L10 35Z" fill="white" fill-opacity="0.5"/></svg>' }
];

const ROOMS = [
    // --- QUẬN 1 ---
    { id: 101, dist: 'q1', addr: 'Đề Thám, Cô Giang', price: 8500000, img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400', s: {d: '4k', n: '100k', x: 'Free', k: 'DV: 150k'} },
    { id: 102, dist: 'q1', addr: 'Nguyễn Trãi, Bến Thành', price: 12000000, img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400', s: {d: '4k', n: '25k/m3', x: '200k', k: 'QL: 200k'} },
    { id: 103, dist: 'q1', addr: 'Trần Quang Khải, Tân Định', price: 7500000, img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400', s: {d: '3.8k', n: '100k', x: 'Free', k: 'Rác: Free'} },
    { id: 104, dist: 'q1', addr: 'Mạc Đĩnh Chi, Đa Kao', price: 9000000, img: 'https://images.unsplash.com/photo-1560448204-61dc36dc98c8?w=400', s: {d: '4k', n: '120k', x: '150k', k: 'Thẻ từ'} },
    { id: 105, dist: 'q1', addr: 'Calmette, Nguyễn Thái Bình', price: 11000000, img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400', s: {d: '4k', n: 'Free', x: 'Free', k: 'PQL: 300k'} },

    // --- QUẬN 3 ---
    { id: 301, dist: 'q3', addr: 'Võ Văn Tần, P5', price: 6800000, img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400', s: {d: '4k', n: '100k', x: 'Free', k: 'Wifi: 100k'} },
    { id: 302, dist: 'q3', addr: 'Lê Quý Đôn, P6', price: 9500000, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400', s: {d: '3.5k', n: '20k/m3', x: 'Free', k: 'DV: 200k'} },
    { id: 303, dist: 'q3', addr: 'Nguyễn Đình Chiểu, P2', price: 8000000, img: 'https://images.unsplash.com/photo-1536376074432-8d642169fe2a?w=400', s: {d: '4k', n: '100k', x: '100k', k: 'Dọn phòng 2 lần'} },
    { id: 304, dist: 'q3', addr: 'Trần Văn Đang, P11', price: 4500000, img: 'https://images.unsplash.com/photo-1594488636104-39f35edcb5d4?w=400', s: {d: '4k', n: '80k', x: 'Free', k: 'Giờ tự do'} },
    { id: 305, dist: 'q3', addr: 'Nam Kỳ Khởi Nghĩa', price: 13000000, img: 'https://images.unsplash.com/photo-1600585154340-be6199f7a096?w=400', s: {d: '4k', n: 'Free', x: '1 chiếc', k: 'Full dịch vụ'} },

    // --- QUẬN 10 ---
    { id: 1001, dist: 'q10', addr: 'Sư Vạn Hạnh, P12', price: 6000000, img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400', s: {d: '4k', n: '150k', x: 'Free', k: 'Thang máy'} },
    { id: 1002, dist: 'q10', addr: 'Thành Thái, P14', price: 5500000, img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400', s: {d: '3.8k', n: '100k', x: '150k', k: 'Máy giặt chung'} },
    { id: 1003, dist: 'q10', addr: 'Ba Tháng Hai, P11', price: 7200000, img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=400', s: {d: '4k', n: '100k', x: 'Free', k: 'An ninh 24/7'} },
    { id: 1004, dist: 'q10', addr: 'Tô Hiến Thành, P13', price: 4800000, img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400', s: {d: '4k', n: '25k/m3', x: 'Free', k: 'Gác cao'} },
    { id: 1005, dist: 'q10', addr: 'Cách Mạng Tháng 8', price: 6500000, img: 'https://images.unsplash.com/photo-1499916156191-15144a65599f?w=400', s: {d: '4k', n: '100k', x: '1 chiếc', k: 'Giặt sấy Free'} },

    // --- PHÚ NHUẬN ---
    { id: 401, dist: 'phu-nhuan', addr: 'Phan Xích Long', price: 7500000, img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400', s: {d: '4k', n: '100k', x: 'Free', k: 'PQL: 100k'} },
    { id: 402, dist: 'phu-nhuan', addr: 'Thích Quảng Đức', price: 5000000, img: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=400', s: {d: '3.5k', n: '80k', x: 'Free', k: 'Cửa vân tay'} },
    { id: 403, dist: 'phu-nhuan', addr: 'Huỳnh Văn Bánh', price: 6800000, img: 'https://images.unsplash.com/photo-1502672053163-547e172a1d63?w=400', s: {d: '4k', n: '100k', x: '100k', k: 'Ban công'} },
    { id: 404, dist: 'phu-nhuan', addr: 'Phan Đăng Lưu', price: 5500000, img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400', s: {d: '4k', n: '20k/m3', x: 'Free', k: 'Giờ tự do'} },
    { id: 405, dist: 'phu-nhuan', addr: 'Lê Văn Sỹ', price: 8200000, img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400', s: {d: '4k', n: '100k', x: 'Free', k: 'Full nội thất'} },

    // --- BÌNH THẠNH ---
    { id: 501, dist: 'binh-thanh', addr: 'Điện Biên Phủ', price: 5800000, img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400', s: {d: '4k', n: '100k', x: 'Free', k: 'Gần Landmark'} },
    { id: 502, dist: 'binh-thanh', addr: 'Phan Văn Trị', price: 4200000, img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400', s: {d: '3.5k', n: '80k', x: 'Free', k: 'Giá sinh viên'} },
    { id: 503, dist: 'binh-thanh', addr: 'Xô Viết Nghệ Tĩnh', price: 4500000, img: 'https://images.unsplash.com/photo-1536376074432-8d642169fe2a?w=400', s: {d: '4k', n: '20k/m3', x: '1 chiếc', k: 'Gần Hutech'} },
    { id: 504, dist: 'binh-thanh', addr: 'Lê Quang Định', price: 5200000, img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=400', s: {d: '4k', n: '100k', x: 'Free', k: 'Máy lạnh mới'} },
    { id: 505, dist: 'binh-thanh', addr: 'Nguyễn Hữu Cảnh', price: 9000000, img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400', s: {d: '4k', n: 'Free', x: 'Free', k: 'Hồ bơi'} },

    // --- GÒ VẤP ---
    { id: 601, dist: 'go-vap', addr: 'Quang Trung', price: 3800000, img: 'https://images.unsplash.com/photo-1560448204-61dc36dc98c8?w=400', s: {d: '3.5k', n: '100k', x: 'Free', k: 'Gác rộng'} },
    { id: 602, dist: 'go-vap', addr: 'Phan Văn Trị', price: 4500000, img: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=400', s: {d: '3.5k', n: '20k/m3', x: 'Free', k: 'Gần Emart'} },
    { id: 603, dist: 'go-vap', addr: 'Lê Đức Thọ', price: 3200000, img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400', s: {d: '4k', n: '80k', x: 'Free', k: 'Ko chung chủ'} },
    { id: 604, dist: 'go-vap', addr: 'Nguyễn Oanh', price: 4000000, img: 'https://images.unsplash.com/photo-1502672053163-547e172a1d63?w=400', s: {d: '3.5k', n: '100k', x: 'Free', k: 'Wifi: 50k'} },
    { id: 605, dist: 'go-vap', addr: 'Phạm Văn Chiêu', price: 3500000, img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400', s: {d: '3.5k', n: '100k', x: 'Free', k: 'Giặt sấy chung'} },

    // --- TÂN BÌNH ---
    { id: 701, dist: 'tan-binh', addr: 'Cộng Hòa', price: 5500000, img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400', s: {d: '4k', n: '100k', x: 'Free', k: 'Gần Etown'} },
    { id: 702, dist: 'tan-binh', addr: 'Trường Chinh', price: 4800000, img: 'https://images.unsplash.com/photo-1536376074432-8d642169fe2a?w=400', s: {d: '4k', n: '100k', x: 'Free', k: 'An ninh'} },
    { id: 703, dist: 'tan-binh', addr: 'Bạch Đằng', price: 6500000, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400', s: {d: '4k', n: '100k', x: 'Free', k: 'Sân bay'} },
    { id: 704, dist: 'tan-binh', addr: 'Hoàng Văn Thụ', price: 6000000, img: 'https://images.unsplash.com/photo-1560448204-61dc36dc98c8?w=400', s: {d: '4k', n: '25k/m3', x: '100k', k: 'QL: 150k'} },
    { id: 705, dist: 'tan-binh', addr: 'Phổ Quang', price: 7000000, img: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=400', s: {d: '4k', n: 'Free', x: '1 chiếc', k: 'Dịch vụ: 100k'} },
];