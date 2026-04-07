// data.js
const ROOM_DATA = [
    {
        id: "p1",
        district: "q1", // Mã quận phải khớp với mã trong DISTRICTS
        address: "123 Cống Quỳnh, Quận 1",
        price: 7500000,
        image: "https://via.placeholder.com/600x400",
        services: {
            dien: "4.000đ/kwh",
            nuoc: "100.000đ/người",
            xe: "Miễn phí",
            khac: "Phí dịch vụ: 150.000đ/phòng"
        }
    },
    {
        id: "p2",
        district: "q1",
        address: "45 Trần Hưng Đạo, Quận 1",
        price: 8000000,
        image: "https://via.placeholder.com/600x400",
        services: {
            dien: "3.500đ/kwh",
            nuoc: "20.000đ/m3",
            xe: "150.000đ/chiếc",
            khac: "Combo rác + wifi: 100k"
        }
    },
    {
        id: "p3",
        district: "binh-thanh",
        address: "Xô Viết Nghệ Tĩnh, Bình Thạnh",
        price: 5500000,
        image: "https://via.placeholder.com/600x400",
        services: {
            dien: "4.000đ/kwh",
            nuoc: "150.000đ/người",
            xe: "Free 1 chiếc",
            khac: "Giặt sấy chung"
        }
    }
];