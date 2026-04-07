// data.js - Kho dữ liệu phòng của Cao Thiên Properties
const ROOM_DATA = [
    // --- QUẬN 1 ---
    {
        id: "q1_01",
        district: "q1",
        address: "Đề Thám, Phường Cô Giang, Quận 1",
        price: 8500000,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500",
        services: { dien: "4.000đ/kwh", nuoc: "100k/người", xe: "Free 1 chiếc", khac: "Dịch vụ: 150k/phòng" }
    },
    {
        id: "q1_02",
        district: "q1",
        address: "Nguyễn Trãi, Quận 1 (Gần Zen Plaza)",
        price: 12000000,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500",
        services: { dien: "4.000đ/kwh", nuoc: "25k/m3", xe: "200k/chiếc", khac: "Free combo rác + wifi" }
    },

    // --- QUẬN 3 ---
    {
        id: "q3_01",
        district: "q3",
        address: "Lê Quý Đôn, Quận 3",
        price: 9000000,
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500",
        services: { dien: "3.800đ/kwh", nuoc: "100k/người", xe: "Free", khac: "Phí quản lý: 100k" }
    },

    // --- QUẬN 10 ---
    {
        id: "q10_01",
        district: "q10",
        address: "Sư Vạn Hạnh, Quận 10",
        price: 6500000,
        image: "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?w=500",
        services: { dien: "4.000đ/kwh", nuoc: "150k/phòng", xe: "Free", khac: "Giặt sấy chung" }
    },

    // --- PHÚ NHUẬN ---
    {
        id: "pn_01",
        district: "phu-nhuan",
        address: "Phan Xích Long, Phú Nhuận",
        price: 7000000,
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500",
        services: { dien: "4.000đ/kwh", nuoc: "100k/người", xe: "150k/chiếc", khac: "Thang máy thẻ từ" }
    },

    // --- BÌNH THẠNH ---
    {
        id: "bt_01",
        district: "binh-thanh",
        address: "Điện Biên Phủ (Gần Landmark 81)",
        price: 5500000,
        image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=500",
        services: { dien: "3.500đ/kwh", nuoc: "20k/m3", xe: "Free", khac: "An ninh 24/7" }
    },

    // --- GÒ VẤP ---
    {
        id: "gv_01",
        district: "go-vap",
        address: "Quang Trung, Gò Vấp",
        price: 4500000,
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500",
        services: { dien: "3.500đ/kwh", nuoc: "100k/người", xe: "Free", khac: "Giờ giấc tự do" }
    },

    // --- TÂN BÌNH ---
    {
        id: "tb_01",
        district: "tan-binh",
        address: "Cộng Hòa, Tân Bình",
        price: 6000000,
        image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500",
        services: { dien: "4.000đ/kwh", nuoc: "100k/người", xe: "Free", khac: "Gần sân bay" }
    }
];