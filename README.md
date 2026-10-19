# Website Quà Tặng 20/10 Với Phong Thư 3D, Hoa, Ảnh và Video

Một website quà tặng nhân dịp Ngày Phụ nữ Việt Nam 20/10 với phong cách lãng mạn, nhẹ nhàng, tinh tế và tối ưu cho điện thoại di động.

---

## 🌸 Tính Năng Nổi Bật

1. **Màn hình phong thư ban đầu & Nút trêu đùa**:
   - Phong thư hồng pastel 3D với con dấu sáp trái tim trôi bồng bềnh.
   - Nút "Bấm để đọc" chuyển sang "Bạn có chắc muốn đọc không?" rồi "Bạn suy nghĩ kĩ rồi chứ?".
   - Nút "Rồi" tự động né tránh ngẫu nhiên khi chạm/rê chuột.
   - Nút "Chưa" mở ra thông điệp ngọt ngào và bắt đầu mở thư.
2. **Animation mở phong thư 3D**:
   - Nắp thư lật mở lên 3D với chiều sâu chân thực (`rotateX(180deg)`).
   - Tờ giấy bên trong trượt lên và mở rộng thành lá thư hoàn chỉnh.
   - Nhạc nền piano/music box êm dịu bắt đầu phát, có nút bật/tắt ở góc màn hình.
3. **Lá thư viết tay 3 phần độc lập**:
   - Font chữ viết tay Dancing Script hỗ trợ đầy đủ tiếng Việt có dấu.
   - Hiệu ứng hiện chữ tự nhiên từng đoạn.
4. **Hoa rơi, hoa nở & Thư viện ảnh/video 3D**:
   - Cánh hoa đào rơi nhẹ nhàng và các đóa hoa nở ở góc dưới màn hình bằng Canvas 60 FPS.
   - Ảnh và video trôi lơ lửng 3D quanh lá thư như những tấm ảnh polaroid.
   - Chạm vào ảnh/video để phóng to toàn màn hình (hỗ trợ nút X, click ngoài, phím ESC).
5. **Cảnh kết thúc cao trào & Bất ngờ lãng mạn**:
   - Khi bấm đọc xong, nhân vật tùy chỉnh cầm bó hoa và lời chúc bước đi qua màn hình, hoa nở rộ theo bước chân.
   - Nhân vật quay lại thả tim, chạy nhanh về giữa màn hình và bùng sáng lấp lánh.
   - **Ảnh kỷ niệm cuối cùng xuất hiện với hiệu ứng phóng to (zoom to dần lên) từ nhỏ ra to**.
   - **Ngay khi ảnh vừa zoom xong, hiệu ứng dấu môi hôn son đỏ (từ xa bay vút tới và zoom to dần lên) in dính chặt lên màn hình** kèm dòng chữ *"Chụt! 💖"* vô cùng ngọt ngào và đáng yêu!
   - Nền hoa rơi và trái tim tiếp tục bay nhẹ nhàng phía sau bức ảnh.

---

## 🛠️ Hướng Dẫn Tùy Chỉnh Nhanh (Chỉ Cần Sửa 1 File)

Tất cả nội dung đều được gom vào file:  
`src/config/websiteConfig.ts`

### 1. Sửa 3 Phần Lời Chúc Trong Thư
Mở file `src/config/websiteConfig.ts`, tìm mục `letter`:
```typescript
letter: {
  // Phần 1: Lời mở đầu
  greeting: "Gửi đến người anh thương,",

  // Phần 2: Nội dung chính bức thư (thêm/bớt các đoạn tùy ý)
  body: [
    "Hôm nay là một ngày thật đặc biệt...",
    "Cảm ơn em vì đã đến bên anh...",
    "Nhân ngày Phụ nữ Việt Nam 20/10, anh chúc em..."
  ],

  // Phần 3: Chữ ký
  signature: {
    closing: "Thương em,",
    sender: "Người luôn dành cho em những điều dịu dàng nhất."
  }
}
```

## 📁 Cấu Trúc Thư Mục Media Cực Kỳ Đơn Giản & Dễ Thay

Toàn bộ nhạc, ảnh và video đã được gom gọn gàng vào thư mục `public/` với tên gọi siêu ngắn gọn:

```text
📁 public/
├── 📁 audio/
│   └── music.mp3            <- Bài hát nền "Nơi Này Có Anh" (chỉ cần copy đè file mp3 của bạn vào đây)
│
├── 📁 images/
│   ├── avatar.jpg           <- Ảnh người bước đi cầm bó hoa (sau khi bấm đọc xong)
│   ├── final.jpg            <- Bức ảnh kỷ niệm lớn cuối cùng (zoom to + môi hôn dính màn hình)
│   ├── p1.jpg               <- Ảnh kỷ niệm 01
│   ├── p2.jpg               <- Ảnh kỷ niệm 02
│   └── ... đến p21.jpg      <- Ảnh kỷ niệm 21
│
└── 📁 videos/
    ├── v1.mp4               <- Video kỷ niệm 01
    ├── v2.mp4               <- Video kỷ niệm 02
    └── ... đến v9.mp4       <- Video kỷ niệm 09
```

👉 **Cách thay cực nhanh:**  
Bạn chỉ cần mở các thư mục `public/images/`, `public/videos/`, `public/audio/` và copy đè file của bạn vào đúng tên tương ứng là website sẽ tự động cập nhật ngay lập tức mà không cần sửa code!

### 5. Điều Chỉnh Tốc Độ Hoa Rơi
Trong `src/config/websiteConfig.ts`, tìm mục `animation`:
```typescript
animation: {
  petalCount: 22,
  petalSpeed: 0.55, // Giảm số này nếu muốn hoa rơi chậm hơn nữa (ví dụ: 0.4)
}
```

---

## 💻 Hướng Dẫn Cài Đặt & Chạy Local

```bash
# 1. Cài đặt các thư viện cần thiết
npm install

# 2. Chạy môi trường phát triển (Dev Server)
npm run dev

# 3. Mở trình duyệt tại địa chỉ http://localhost:3000
```

---

## 🚀 Hướng Dẫn Build & Đưa Lên Mạng (Vercel / GitHub Pages)

### Cách 1: Triển Khai Lên Vercel (Khuyên Dùng — Miễn Phí & Cực Nhanh)
1. Đẩy code lên kho lưu trữ GitHub của bạn.
2. Truy cập [vercel.com](https://vercel.com) và đăng nhập bằng GitHub.
3. Chọn **Add New Project** -> Chọn kho lưu trữ vừa đẩy.
4. Chọn Framework: **Vite**.
5. Nhấn **Deploy**. Sau 1 phút bạn sẽ nhận được một đường link công khai dạng `https://ten-du-an.vercel.app` để gửi tặng!

### Cách 2: Triển Khai Lên GitHub Pages
1. Trong `vite.config.ts`, thêm `base: './'`.
2. Chạy lệnh:
   ```bash
   npm run build
   ```
3. Thư mục `dist` sẽ được tạo ra, bạn có thể đưa lên nhánh `gh-pages` để chạy trực tiếp.
