function renderListPage(districtId, districtName) {
    // Lọc ra các phòng thuộc quận đã chọn
    const filteredRooms = ROOM_DATA.filter(room => room.district === districtId);

    let roomHtml = '';
    if (filteredRooms.length === 0) {
        roomHtml = `<div class="col-span-full text-center py-10 text-slate-400 italic">Hiện chưa có phòng tại khu vực này.</div>`;
    } else {
        filteredRooms.forEach(room => {
            roomHtml += `
                <div class="room-card bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                    <img src="${room.image}" class="w-full h-56 object-cover">
                    <div class="p-6">
                        <span class="text-[10px] font-bold bg-blue-50 text-blue-600 px-3 py-1 rounded-full uppercase">${districtName}</span>
                        <h3 class="font-bold text-lg mt-3 text-slate-800 italic">${room.address}</h3>
                        <p class="text-orange-600 font-black text-2xl my-2">${(room.price / 1000000).toFixed(1)} Tr</p>
                        <button onclick="openServiceModal('${room.id}')" class="w-full bg-slate-50 text-slate-700 py-3 rounded-2xl font-bold mt-2 border border-slate-100">Chi tiết dịch vụ</button>
                    </div>
                </div>`;
        });
    }

    document.getElementById('main-content').innerHTML = `
        <section class="max-w-6xl mx-auto px-4 mt-6">
            <div class="flex items-center gap-2 mb-6">
                <button onclick="renderHome()" class="bg-blue-50 text-blue-600 font-bold p-3 rounded-2xl active:bg-blue-100">
                    <i class="fa-solid fa-chevron-left mr-2"></i> Trở về
                </button>
                <h2 class="text-xl font-bold text-slate-800 uppercase italic">Khu vực ${districtName}</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${roomHtml}
            </div>
        </section>`;
    window.scrollTo(0,0);
}

// Hàm mở Modal xem phí dịch vụ
function openServiceModal(roomId) {
    const room = ROOM_DATA.find(r => r.id === roomId);
    if(room) {
        // Gọi hàm hiển thị Modal (ní có thể dùng lại hàm openModal cũ hoặc tạo mới tùy ý)
        alert(`Phí dịch vụ tại ${room.address}:\n- Điện: ${room.services.dien}\n- Nước: ${room.services.nuoc}\n- Xe: ${room.services.xe}\n- Khác: ${room.services.khac}`);
    }
}