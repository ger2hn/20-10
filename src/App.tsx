/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Envelope3D } from './components/Envelope/Envelope3D';
import { HandwrittenLetter } from './components/Letter/HandwrittenLetter';
import { FlowerPetalsCanvas } from './components/Flowers/FlowerPetalsCanvas';
import { FloatingMediaGallery } from './components/MediaGallery/FloatingMediaGallery';
import { MediaViewerModal } from './components/MediaViewer/MediaViewerModal';
import { EndingVortexScene } from './components/EndingScene/EndingVortexScene';
import { AudioToggle } from './components/AudioControl/AudioToggle';
import { MediaItem } from './config/websiteConfig';

type AppFlowState = 'envelope' | 'reading' | 'ending_vortex';

export default function App() {
  const [flowState, setFlowState] = useState<AppFlowState>('envelope');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  // Khi phong thư mở nắp và hoa nở hoàn tất -> chuyển sang đọc thư & ngắm ảnh rơi
  const handleEnvelopeOpenComplete = () => {
    setFlowState('reading');
  };

  // Khi người dùng cuộn hết thư và nhấn "Em đã đọc xong rồi":
  // Các hiệu ứng trước đó biến mất ngay, màn hình chuyển sang trắng và kích hoạt hoạt hình cô gái bước đi
  const handleReadDone = () => {
    setFlowState('ending_vortex');
  };

  // Khởi động lại từ đầu nếu người xem muốn trải nghiệm lại
  const handleRestart = () => {
    setFlowState('envelope');
    setSelectedMedia(null);
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#FFF6F0] text-[#704858] font-sans">
      {/* Nút bật/tắt nhạc nền luôn sẵn sàng ở góc trên */}
      <AudioToggle />

      {/* Hiệu ứng cánh hoa, hướng dương, hoa hồng, cẩm tú cầu và trái tim rơi */}
      {flowState !== 'ending_vortex' && <FlowerPetalsCanvas />}

      {/* GIAI ĐOẠN 1 & 2: MÀN HÌNH PHONG THƯ 3D, HOA NỞ RỘ VÀ BƯỚC XÁC NHẬN */}
      {flowState === 'envelope' && (
        <main className="relative z-20 flex min-h-screen flex-col items-center justify-center">
          <Envelope3D onOpenComplete={handleEnvelopeOpenComplete} />
        </main>
      )}

      {/* GIAI ĐOẠN 3, 4, 5, 6: LÁ THƯ VIẾT TAY & ẢNH/VIDEO RƠI 3D CHẬM RÃI */}
      {flowState === 'reading' && (
        <main className="relative z-20 min-h-screen w-full animate-fade-in">
          {/* Ảnh và video kỷ niệm rơi từ trên xuống đáy màn hình với hiệu ứng 3D */}
          <FloatingMediaGallery
            onSelectItem={(item) => setSelectedMedia(item)}
          />

          {/* Lá thư tay viết riêng cho ngày 20/10, người nhận thoải mái lướt đọc */}
          <div className="pt-8 sm:pt-12">
            <HandwrittenLetter
              onReadDone={handleReadDone}
              isEndingInProgress={false}
            />
          </div>
        </main>
      )}

      {/* GIAI ĐOẠN 7 & 8: MÀN HÌNH TRẮNG, CÔ GÁI ĐI QUA HOA NỞ THEO CHÂN, CHẠY VỀ TÂM VÀ HIỆN ẢNH */}
      {flowState === 'ending_vortex' && (
        <EndingVortexScene onRestart={handleRestart} />
      )}

      {/* MODAL PHÓNG TO ẢNH HOẶC VIDEO KHI CHẠM VÀO */}
      <MediaViewerModal
        item={selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />
    </div>
  );
}
