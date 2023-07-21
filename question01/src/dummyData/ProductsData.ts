

export type Product = {
  id: number;
  title: String;
  infor: string;
  price: number;
  images: string[];
};

export const products: Product[] = [
  {
    id: 1,
    title: "Colgate",
    infor: "Stronger 12-hour bacterial defence Reduces bacteria on teeth, tongue, cheeks and gums",
    price: 7.99,
    images: [
      "https://www.bigpharmacy.com.my/scripts/timthumb.php?src=https://www.bigpharmacy.com.my//site_media/img/1QdU4DkK1604563095_20210628145714.jpg&w=500&zc=1",
      "https://cdn5.hermo.my/product_images/malls/55050_twin-pack-colgate-maximum-cavity-protection-fresh-cool-mint-toothpaste-valuepack-225g_440_280_1655997870.png",
      "https://www.bigpharmacy.com.my/site_media/img/170583-colgate-total-charcoal-deep-clean-toothpaste-150g-1-800Wx800H_20210628162342.jpg",
    ],
  },
  {
    id: 2,
    title: "T-Shirt",
    infor: "❤️❤️Welcome to our store!❤️❤️Our shop has been focusing on fashion clothes for three years: mainly dealing with T-shirts ~ shorts ~ jeans series If you have any questions, please feel free to contact us. This way we can serve you better.",
    price: 8.9,
    images: [
      "https://static.thcdn.com/productimg/1600/1600/12302898-1064807812204693.jpg",
      "https://nb.scene7.com/is/image/NB/ut21503vda_nb_55_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=1600&hei=1600",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6229464f-85d6-483d-809c-d039ee331598/nocta-souvenir-cactus-t-shirt-Kzmmtr.png",
    ],
  },
  {
    id: 3,
    title: "Lifebuoy Soap",
    infor: "Lifebuoy Soap give you an enjoyable bathing experience for the entire Family. With its special ingredient Active natural shield it protects from 10 infections causing germs.",
    price: 3.2,
    images: [
      "https://api.watsons.com.my/medias/prd-side-65745.jpg?context=bWFzdGVyfGltYWdlc3wxNDA0MjF8aW1hZ2UvanBlZ3xhREJpTDJnM09TOHhNRFE0TURjNU16TXlNVFV3TWk5WFZFTk5XUzAyTlRjME5TMXphV1JsTG1wd1p3fGEyOGI0N2ZmNmEwYzk0MzNhYjJhMmFlNDY5Zjc1NTY0M2U4MjFlZTQzMDNkOWU4YjU1MzM3OTE2MWMxMWMyNDc",
      "https://m.media-amazon.com/images/I/61Jp8smmZeL.jpg",
      "https://11minimarket.com/wp-content/uploads/2021/08/Lifebuoy-Soap-Cool-Fresh-80Gmx3S.jpg",
    ],
  },
  {
    id: 4,
    title: "Highlighter",
    infor: "👍Morandi Style Soft Tip Smooth Highlighter / Journal Pen Set ⭐Material : Plastic, Fiber ⭐Pen Tip : Two Head, Oblique & Round Tip ⭐Color : Light Salt / Light Sweet ⭐Line Width: 1mm - 4mm ⭐Size: 15.5cm x 11.6cm x1cm ⭐Weight : 45g/box Package Included:✏️ 6 Colors/box",
    price: 2.3,
    images: [
      "https://100comments.com/wp-content/uploads/2017/01/Stabilo-Boss-Highlight-Pen-3-colors-in-1-set-fluorescent.jpg",
      "https://sta-live-cdn.b-cdn.net/media/27/a2/81/1646827162/St_161051_7015-01-5_Set_cs.jpg",
      "https://www.orient-treasure.com/wp-content/uploads/2020/04/sb.jpg",
    ],
  },

  {
    id: 5,
    title: "Calculator",
    infor: "📚 Welcome to Yilan Stationery 📚 🚙 Ship From China.➤ 100% Ready stock. COD is ok. 👌🚚💨 Ship out within 1 business days. Arrive in about 4-9 business days.👨 If You Have Any Questions, You Can Contact Customer Service To Deal With❥Please give me a five-star praise with pictures, We wish you progress in your studies",
    price: 8.9,
    images: [
      "https://www.studentcalculators.co.uk/acatalog/83CW%203%20colour%20400.jpg",
      "https://cdn.shopify.com/s/files/1/0036/4806/1509/products/4828cde0cedb7342c2fe6f2fbf10f5d4f7675ce5_square862871_1_1000x.jpg?v=1683781147",
      "https://www.bigw.com.au/medias/sys_master/images/images/h51/hcd/32407969333278.jpg",
    ],
  },
  {
    id: 6,
    title: "Notebook",
    infor: "NOTED - PROJECT LIFE THEMED CARDS 30PK Pack of 30 Themed cards22 pieces 3x4 journal cards, 4 pieces 4x6 Journal cards and 4 pieces 4x6 Title CardsGreat for pocket scrapbooks, journals, cardmakingImported",
    price: 15.5,
    images: [
      "https://www.leuchtturm1917.com/media/productdetail/700x700/801313/notebook-write-dont-talk_1.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2020/11/WZ/DH/OY/118732217/new-product-500x500.jpeg",
      "https://bazarr24.com/wp-content/uploads/2020/07/fb70c97a-pocket-size-notebook-spiral-11-x-7-cm-a7-pack-of-5.jpg",
    ],
  },
];
