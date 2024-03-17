const marquee = [
  {
    slogan: 'Capture the Journey, Freeze the Beauty',
    icons: [
      '/marquee/smile.svg',
      '/marquee/local_camera.svg',
      '/marquee/landscape.svg',
    ],
  },
  {
    slogan: 'Every Fleeting Moment on Your Journey',
    icons: ['/marquee/add_camera.svg', '/marquee/global.svg'],
  },
  {
    slogan: 'Travel, Beauty, Photography',
    icons: ['/marquee/plane.svg', '/marquee/camera.svg', '/marquee/photo.svg'],
  },
  {
    slogan: 'Capture in a Blink, Cherish for a Lifetime',
    icons: ['/marquee/watch.svg', '/marquee/book.svg'],
  },
  {
    slogan: 'Photography, Travel, Endless Possibilities',
    icons: ['/marquee/bag.svg', '/marquee/add_camera.svg'],
  },
  {
    slogan: 'Beauty, Frame by Frame',
    icons: ['/marquee/frame.svg'],
  },
];

// 後續會改以 API 取資料
const photographers = [
  {
    name: '葉葉',
    location: '台北',
    rate: 5.0,
    catagories: ['商業攝影', '旅遊拍攝', '風格街拍'],
    price: 1500,
    img_url: '/photographers/photographer-card-1.webp',
    id: 1,
  },
  {
    name: '大雄',
    location: '台南',
    rate: 4.5,
    catagories: ['人像攝影', '旅遊拍攝', '風格街拍', '活動紀錄'],
    price: 1200,
    img_url: '/photographers/photographer-card-2.webp',
    id: 2,
  },
  {
    name: '周周',
    location: '台中',
    rate: 5.0,
    catagories: ['旅遊拍攝', '人像攝影', '風格街拍'],
    price: 2000,
    img_url: '/photographers/photographer-card-3.webp',
    id: 3,
  },
  {
    name: 'Angus',
    location: '屏東',
    rate: 4.7,
    catagories: ['風格街拍', '旅遊拍攝', '商業攝影'],
    price: 1500,
    img_url: '/photographers/photographer-card-4.webp',
    id: 4,
  },
  {
    name: '葉葉',
    location: '台北',
    rate: 5.0,
    catagories: ['商業攝影', '旅遊拍攝', '風格街拍'],
    price: 1500,
    img_url: '/photographers/photographer-card-1.webp',
    id: 5,
  },
  {
    name: '大雄',
    location: '台南',
    rate: 4.5,
    catagories: ['人像攝影', '旅遊拍攝', '風格街拍', '活動紀錄'],
    price: 1200,
    img_url: '/photographers/photographer-card-2.webp',
    id: 6,
  },
  {
    name: '周周',
    location: '台中',
    rate: 5.0,
    catagories: ['旅遊拍攝', '人像攝影', '風格街拍'],
    price: 2000,
    img_url: '/photographers/photographer-card-3.webp',
    id: 7,
  },
  {
    name: 'Angus',
    location: '屏東',
    rate: 4.7,
    catagories: ['風格街拍', '旅遊拍攝', '商業攝影'],
    price: 1500,
    img_url: '/photographers/photographer-card-4.webp',
    id: 8,
  },
];

const faq = [
  {
    question: '什麼是隨行攝影預約服務？',
    answer:
      '隨行攝影預約服務讓您能夠預約專業攝影師，在您的旅遊、活動或其他特殊場合中進行拍照。',
    id: 0,
  },
  {
    question: '如何預約攝影師？',
    answer:
      '您可以參考首頁的預約流程，在我們的網站上瀏覽攝影師作品集，選擇您喜歡的攝影師後，直接進行線上預約。',
    id: 1,
  },
  {
    question: '費用如何計算？',
    answer:
      '費用由攝影師根據自身經驗、拍攝時數和是否跨縣市地區進行設定時薪及交通費。詳細的價格可以在每位攝影師的介紹頁面上找到。',
    id: 2,
  },
  {
    question: '有哪些支付方式？',
    answer: '目前提供信用卡、現金轉帳等方式。',
    id: 3,
  },
  {
    question: '預約後如何聯絡攝影師？',
    answer:
      '預約確認後，攝影師接收到訂單後會主動聯繫您，我們也會在訂單提供攝影師的聯絡資料，您可以與他 / 她協商拍攝的具體細節。',
    id: 4,
  },
  {
    question: '我可以要求攝影師拍攝特定的風格或場景嗎？',
    answer:
      '當然可以！在預約時，您可以選擇想要的拍攝類型，和攝影師聯繫時提供您的具體需求或希望，攝影師會根據您的要求進行拍攝。',
    id: 5,
  },
  {
    question: '如何取消或更改預約？',
    answer:
      '請在預約的 24 小時之前通知我們進行取消或更改，具體的取消和更改政策可以在我們的條款和條件中查看。',
    id: 6,
  },
  {
    question: '照片如何交付？',
    answer:
      '拍攝結束後，攝影師會在約定的時間內進行照片後期處理，並透過雲端或其他方式提供給您。',
    id: 7,
  },
  {
    question: '我可以要求原始檔案嗎？',
    answer: '這取決於攝影師的政策，具體細節請在預約前與攝影師確認。',
    id: 8,
  },
  {
    question: '我們的隱私會受到保護嗎？',
    answer:
      '絕對的。我們高度重視客戶的隱私，未經您的同意，我們不會公開或分享您的照片。',
    id: 9,
  },
  {
    question: '如果遇到不滿意的情況怎麼辦？',
    answer:
      '如果您對拍攝結果不滿意，請與我們的客服團隊聯絡，我們會盡力協助您解決問題。',
    id: 10,
  },
];

const uniqueLocations = new Set(photographers.map((p) => p.location));

const locations = Array.from(uniqueLocations).map((location) => ({
  label: location,
  href: `#${location}`,
}));

module.exports = {
  photographers,
  locations,
  marquee,
  faq,
};
