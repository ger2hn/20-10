/**
 * @file websiteConfig.ts
 * @description File cấu hình trung tâm cho toàn bộ website quà tặng 20/10.
 * Tất cả ảnh, video, nhạc đều được gom vào thư mục /public/ với tên gọi cực ngắn gọn, dễ tìm và dễ thay thế:
 * 
 * 📁 public/audio/
 *    └── music.mp3           <- Nhạc nền (Nơi Này Có Anh)
 * 📁 public/images/
 *    ├── avatar.jpg          <- Ảnh người bước đi cầm bó hoa
 *    ├── final.jpg           <- Bức ảnh kỷ niệm lớn cuối cùng
 *    └── p1.jpg ... p21.jpg  <- 21 ảnh kỷ niệm rơi xen kẽ
 * 📁 public/videos/
 *    └── v1.mp4 ... v9.mp4   <- 9 video kỷ niệm rơi xen kẽ
 */

export interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  caption?: string;
  priority?: number;
}

export interface WebsiteConfig {
  letter: {
    greeting: string;
    body: string[];
    signature: {
      closing: string;
      sender: string;
    };
  };

  // 30 media: 21 ảnh (/images/p1.jpg ... p21.jpg) & 9 video (/videos/v1.mp4 ... v9.mp4)
  mediaItems: MediaItem[];

  audio: {
    songTitle: string;
    musicUrl: string;
    defaultVolume: number;
    loop: boolean;
  };

  finalScene: {
    walkingCharacterImage: string;
    walkingGreetingText: string;
    finalImageUrl: string;
  };

  intro: {
    title: string;
    initialButtonText: string;
    firstConfirmText: string;
    secondConfirmQuestion: string;
    buttonYesText: string;
    buttonNoText: string;
    noTeaseMessage: string;
    readDoneButtonText: string;
  };

  animation: {
    petalCount: number;
    petalSpeed: number;
    bloomingFlowersCount: number;
    maxConcurrentFloatingMedia: number;
    typewriterSpeedMs: number;
  };

  colors: {
    pastelPink: string;
    powderPink: string;
    creamBackground: string;
    ivoryPaper: string;
    deepRoseText: string;
  };
}

export const websiteConfig: WebsiteConfig = {
  // =========================================================================
  // 1. LÁ THƯ TÌNH CẢM 20/10 (3 PHẦN ĐỘC LẬP)
  // =========================================================================
  letter: {
    greeting: "Gửi đến người anh thương,",
    body: [
      "Hello ngừi đẹp nhó — Hôm nay sẽ là 1 ngày vui của em nên anh muốn gửi tới em đôi lời",
      "Đầu tiên là anh muốn gửi lời xin lỗi siêu siêu chân thành đến em luôn, vì dạo gần đây đã làm em buồn ơi là buồn rất nhiều. Anh xin lỗi em nha, thiệt ra là anh không bao giờ cố ý làm em buồn đâu nhưng mà chắc tại anh bị điên điên khùng khùng đỏ chứ nỏ bao giờ muốn em buồn cạ. Anh đã lỡ làm em buồn rứa rồi nên anh sẽ cố gắng khắc phục, không như thế nữa, anh sẽ đền bù cho em thiệt thiệt nhiều luông để em có thể vui vẻ hạnh phúc bù lại những ngày khót lót huhu i.",
      "Và điều tiếp theo là anh muốn cảm ơn em i, vì anh đã làm như rứa rồi mà em vẫn ở bên tha thứ, iu thưn anh nhiều nhiều i. Cảm thấy may mắn lắm đỏ, tự nhiên có người siêu siêu dễ thương xinh đẹp yêu thương mình mà còn tha thứ cho mình nhiều i rứa, siêu siêu cảm ơn em luông.",
       "Điều cuối cùng là anh sẽ cố gắng để chúng ta sẽ hạnh phúc 10 ngàn năm luông, không cho em buồn nhiều rứa nữa, yêu thương và bù đắp cho em nhiều nhiều luông và hơn hết là sẽ đồng hành cùng hành 10 ngàn năm nữa. Yêu thưn em lắm đỏ."
    ],
    signature: {
      closing: "Thương em,",
      sender: "Sẽ luôn dành cho em những điều dịu dàng nhất."
    }
  },

  // =========================================================================
  // 2. DANH SÁCH 21 ẢNH & 9 VIDEO XEN KẼ NGẪU NHIÊN TRONG THƯ MỤC /public/
  // 👉 Bạn chỉ cần copy đè file ảnh/video của bạn vào thư mục tương ứng:
  //    - Ảnh: public/images/p1.jpg đến p21.jpg
  //    - Video: public/videos/v1.mp4 đến v9.mp4
  // =========================================================================
  mediaItems: [
    { id: 'photo-1', type: 'image', url: '/images/p1.jpg'},
    { id: 'photo-2', type: 'image', url: '/images/p2.jpg'},
    { id: 'video-1', type: 'video', url: '/videos/v1.mp4', thumbnail: '/images/p1.jpg'},

    { id: 'photo-3', type: 'image', url: '/images/p3.jpg'},
    { id: 'photo-4', type: 'image', url: '/images/p4.jpg'},
    { id: 'video-2', type: 'video', url: '/videos/v2.mp4', thumbnail: '/images/p2.jpg'},

    { id: 'photo-5', type: 'image', url: '/images/p5.jpg'},
    { id: 'photo-6', type: 'image', url: '/images/p6.jpg'},
    { id: 'video-3', type: 'video', url: '/videos/v3.mp4', thumbnail: '/images/p3.jpg'},

    { id: 'photo-7', type: 'image', url: '/images/p7.jpg'},
    { id: 'photo-8', type: 'image', url: '/images/p8.jpg'},
    { id: 'video-4', type: 'video', url: '/videos/v4.mp4', thumbnail: '/images/p4.jpg'},

    { id: 'photo-9', type: 'image', url: '/images/p9.jpg'},
    { id: 'photo-10', type: 'image', url: '/images/p10.jpg'},
    { id: 'video-5', type: 'video', url: '/videos/v5.mp4', thumbnail: '/images/p5.jpg'},

    { id: 'photo-11', type: 'image', url: '/images/p11.jpg'},
    { id: 'photo-12', type: 'image', url: '/images/p12.jpg'},
    { id: 'video-6', type: 'video', url: '/videos/v6.mp4', thumbnail: '/images/p6.jpg'},

    { id: 'photo-13', type: 'image', url: '/images/p13.jpg'},
    { id: 'photo-14', type: 'image', url: '/images/p14.jpg'},
    { id: 'video-7', type: 'video', url: '/videos/v7.mp4', thumbnail: '/images/p7.jpg'},

    { id: 'photo-15', type: 'image', url: '/images/p15.jpg'},
    { id: 'photo-16', type: 'image', url: '/images/p16.jpg'},
    { id: 'video-8', type: 'video', url: '/videos/v8.mp4', thumbnail: '/images/p8.jpg'},

    { id: 'photo-17', type: 'image', url: '/images/p17.jpg'},
    { id: 'photo-18', type: 'image', url: '/images/p18.jpg'},
    { id: 'video-9', type: 'video', url: '/videos/v9.mp4', thumbnail: '/images/p9.jpg'},

    { id: 'photo-19', type: 'image', url: '/images/p19.jpg'},
    { id: 'photo-20', type: 'image', url: '/images/p20.jpg'},
    { id: 'photo-21', type: 'image', url: '/images/p21.jpg'}
  ],

  // =========================================================================
  // 3. NHẠC NỀN (NƠI NÀY CÓ ANH): public/audio/music.mp3
  // 👉 Bạn chỉ cần thả file nhạc của bạn vào public/audio/music.mp3
  // =========================================================================
  audio: {
    songTitle: 'Nơi Này Có Anh',
    musicUrl: '/audio/music.mp3',
    defaultVolume: 0.65,
    loop: true
  },

  // =========================================================================
  // 4. ẢNH BƯỚC ĐI & ẢNH CUỐI CÙNG TRONG THƯ MỤC /public/images/
  // 👉 Bạn chỉ cần thay file ảnh của bạn vào:
  //    - Ảnh bước đi: public/images/avatar.jpg
  //    - Ảnh cuối cùng: public/images/final.jpg
  // =========================================================================
  finalScene: {
    // Ảnh người bước đi cầm bó hoa
    walkingCharacterImage: '/images/avatar.jpg',
    walkingGreetingText: 'Chúc em 20/10 thật hạnh phúc! 💐',

    // Ảnh kỷ niệm lớn cuối cùng (zoom to lên + vết hôn môi son đỏ dính màn hình)
    finalImageUrl: '/images/final.jpg'
  },

  // =========================================================================
  // 5. NỘI DUNG MÀN HÌNH MỞ ĐẦU
  // =========================================================================
  intro: {
    title: 'Gửi Em Một Món Quà Nhỏ',
    initialButtonText: 'Bấm để đọc',
    firstConfirmText: 'Bạn có chắc muốn đọc không?',
    secondConfirmQuestion: 'Bạn suy nghĩ kĩ rồi chứ?',
    buttonYesText: 'Rồi',
    buttonNoText: 'Chưa',
    noTeaseMessage: 'Thôi đừng dối lòng, đọc lời yêu thương tôi gửi gắm nhé.',
    readDoneButtonText: 'Em đã đọc xong rồi'
  },

  // =========================================================================
  // 6. THÔNG SỐ HIỆU ỨNG
  // =========================================================================
  animation: {
    petalCount: 22,
    petalSpeed: 0.55,
    bloomingFlowersCount: 6,
    maxConcurrentFloatingMedia: 30,
    typewriterSpeedMs: 35
  },

  colors: {
    pastelPink: '#F8C8DC',
    powderPink: '#F4AFC4',
    creamBackground: '#FFF6F0',
    ivoryPaper: '#FFFCFA',
    deepRoseText: '#704858'
  }
};
