// export const carddata = [
//   {
//     name: "Card 1",
//     description: "This is the first card",
//     image: ["/images/0A4A2401.JPG", "/images/0A4A2402.JPG", "/images/0A4A2403.JPG"],
//   },
//   {
//     name: "Card 2",
//     description: "This is the second card",
//     image: ["images/0A4A2417.JPG", "/images/0A4A2418.JPG", "/images/0A4A2420.JPG"],
//   },
//   {
//     name: "Card 3",
//     description: "This is the third card",
//     image: ["images/0A4A2427.JPG", "/images/0A4A2428.JPG", "/images/0A4A2429.JPG"],
//   },
// ]

export interface CollectionType {
  id: number;
  name: string;
  price: number;
  image: string;
  hoverImage: string;
  tag: string;
  desc: string;
}

export const collections = [
  {
    id: 1,
    name: "245018",
    price: 299,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/1%2F0A4A1822-1.jpg?alt=media&token=1ed8617e-845e-4996-8e69-1d18fb3980a8",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/1%2F0A4A1826-1.jpg?alt=media&token=69fcd6fc-ab9b-454f-8930-a4350b87e1d9",
    tag: "scarves",
    desc: "Petrol pure wool scarf featuring a classic check pattern. A timeless blend of warmth and style, crafted for effortless sophistication."
  },
  {
    id: 2,
    name: "245019",
    price: 349,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/2%2F0A4A1849-1.jpg?alt=media&token=f06fa10e-e0db-4e40-a35c-32ddd46fc457",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/2%2F0A4A1860-1.jpg?alt=media&token=34ff01b7-4cc7-4b34-80de-783aa7b622fe",
    tag: "scarves",
    desc: "Deep teal pure wool scarf crafted for effortless warmth and elegance. A timeless accessory that blends softness and sophistication for any occasion."
  },
  {
    id: 3,
    name: "245016",
    price: 599,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/3%2F0A4A1870-1.jpg?alt=media&token=37e1fa7d-97d2-4127-949c-210df2e2c714",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/3%2F0A4A1876-1.jpg?alt=media&token=da1541fe-e1ff-445c-b17c-3ec6ff17a36b",
    tag: "scarves",
    desc: "Navy check scarf crafted from pure wool, offering a timeless blend of warmth and sophistication. A classic accessory with a soft, luxurious feel, perfect for effortless styling"
  },
  {
    id: 4,
    name: "241098",
    price: 799,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/4%2F0A4A1888-1.jpg?alt=media&token=8b92ae7e-e28f-4406-b924-b6fd7549e82d",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/4%2F0A4A1895-1.jpg?alt=media&token=b1fcd307-4ed8-4110-9b4f-c4c7d2c70fb9",
    tag: "scarves",
    desc: "Black and beige habutai silk scarf adorned with an asymmetric print. A lightweight and versatile accessory that effortlessly blends elegance with contemporary charm."
  },
  {
    id: 5,
    name: "236111",
    price: 449,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/5%2F0A4A1898-1.jpg?alt=media&token=8b77f6d5-679c-48b3-8a86-091fc450571b",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/5%2F0A4A1967-1.jpg?alt=media&token=e8962c2e-f102-470e-a79b-1a4d47ee7d05",
    tag: "scarves",
    desc: "Petrol coloured pure wool scarf featuring a detailed white thread weaving pattern. A seamless blend of traditional craftsmanship and modern design, this accessory adds a refined touch to any look."
  },
  {
    id: 6,
    name: "16783",
    price: 899,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/6%2F0A4A1915-1.jpg?alt=media&token=bfca52c9-be9e-4dc5-8a12-e4e8177611cc",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/6%2F0A4A1922-1.jpg?alt=media&token=70cc0d96-72f7-46f4-bbb8-98e1220d7d07",
    tag: "scarves",
    desc: "Black-brown wool-silk blend scarf exuding a classy, sophisticated vibe. A perfect fusion of soft texture and timeless elegance for any occasion."
  },
  {
    id: 7,
    name: "231198",
    price: 399,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/7%2F0A4A1929-1.jpg?alt=media&token=a3fe896a-285d-4135-ab8a-254bb570a717",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/7%2F0A4A1934-1.jpg?alt=media&token=379fc5e0-07a5-4f94-8cf0-76a986f69a52",
    tag: "scarves",
    desc: "Red and black flower print wool scarf in 90x190 cm size. A seamless blend of classic floral design and modern aesthetics, offering both warmth and a distinctive style."
  },
  {
    id: 8,
    name: "235044",
    price: 699,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/8%2F0A4A1939-1.jpg?alt=media&token=30084cf1-ef23-4033-9a11-a97560888fdf",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/8%2F0A4A1947-1.jpg?alt=media&token=df3e5713-0d20-440e-96f2-79a375bea606",
    tag: "scarves",
    desc: "Yellow-green scarf in a harmonious blend of wool, acrylic, and nylon. A seamless fusion of warmth and modern artistry, perfect for adding a refined touch to any ensemble."
  },
  {
    id: 9,
    name: "245015",
    price: 549,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/9%2F0A4A1959-1.jpg?alt=media&token=cd4d6759-b480-4f47-be3c-a8b76db007e6",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/9%2F0A4A1953-1.jpg?alt=media&token=a8c0f6e5-6a7f-467e-8d03-44596335288c",
    tag: "scarves",
    desc: "Dark grey scarf crafted from a soft blend of lambswool, nylon, and cotton. A perfect harmony of warmth and texture, designed for effortless sophistication."
  },
  {
    id: 10,
    name: "246006B",
    price: 799,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/10%2F0A4A1974-1.jpg?alt=media&token=ad4a3edc-1c36-4609-b7ac-1f739875a814",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/10%2F0A4A1979-1.jpg?alt=media&token=cf177e06-0261-4448-a5fc-117731932800",
    tag: "scarves",
    desc: "Fuchsia pink scarf crafted from a cotton and silk blend featuring a beautiful floral embroidery. A harmonious balance of vibrant hue and intricate design, it exude timeless elegance."
  },
  {
    id: 11,
    name: "241127",
    price: 299,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/11%2F0A4A1981-1.jpg?alt=media&token=6bb978bd-8e37-4c83-b578-ff4df6072a89",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/11%2F0A4A1984-3.jpg?alt=media&token=9596e9e0-c191-4e67-a6d8-49ea17ead155",
    tag: "garments",
    desc: "Multicolor modal matty silk poncho with a smooth texture and vibrant drape. A perfect fusion of rich hues and effortless elegance for a distinctive look."
  },
  {
    id: 12,
    name: "241026A",
    price: 349,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/12%2F0A4A2030-1.jpg?alt=media&token=0839e37c-6feb-4738-9a3c-1d633cef4c40",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/12%2F0A4A2034-1.jpg?alt=media&token=acb286cd-ab11-47da-b567-005609b82ca4",
    tag: "scarves",
    desc: "Sky-coloured cotton silk blend scarf featuring an intricate artistic print across its entire surface. A harmonious fusion of luxurious fabric and creative design, this accessory offers a distinctive and versatile accent."
  },
  {
    id: 13,
    name: "253020",
    price: 599,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/13%2F0A4A2044-1.jpg?alt=media&token=7e01ca22-9dfb-4621-96e6-58af29400690",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/13%2F0A4A2048-1.jpg?alt=media&token=95fe3c41-5010-47cf-9855-969fce0c7bd7",
    tag: "scarves",
    desc: "Red pure viscose satin blend scarf featuring an intricate machine embroidery of golden butterfly wings. A seamless blend of traditional craftsmanship and contemporary design, this piece adds a refined accent to any ensemble."
  },
  {
    id: 14,
    name: "233050",
    price: 799,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/14%2F0A4A2050-1.jpg?alt=media&token=6ad24d53-9b95-4614-b273-696d8a3dd342",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/14%2F0A4A2052-1.jpg?alt=media&token=aa637f59-9072-4c7e-b748-d96cefc970be",
    tag: "scarves",
    desc: "Peach scarf in a soft viscose wool blend, adorned with an artistic tie-dye pattern. A perfect balance of warmth and elegance, designed for effortless styling."
  },
  {
    id: 15,
    name: "246065",
    price: 449,

    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/15%2F0A4A2069-1.jpg?alt=media&token=adc90638-1262-4627-abae-ef3b2879a57a",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/15%2F0A4A2067-1.jpg?alt=media&token=f7bda7ea-9ca2-4f15-b841-eb6f3229fe04",
    tag: "scarves",

    desc: "Turquoise pure silk scarf showcasing intricate embroidery. A refined blend of timeless craftsmanship and modern elegance, perfect for complementing any ensemble."
  },
  {
    id: 16,
    name: "11493",
    price: 899,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/16%2F0A4A2086-1.jpg?alt=media&token=372883d7-f2e2-4cfc-8b75-fd247655fd40",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/16%2F0A4A2092-1.jpg?alt=media&token=6886339d-7b2c-4d9c-bfd6-8a41f31ac655",
    tag: "scarves",
    desc: "Mustard cotton scarf featuring a simple yet elegant design. Its understated style effortlessly complements any outfit while adding a warm touch of sophistication."
  },
  {
    id: 17,
    name: "245037",
    price: 399,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/17%2F0A4A2109-1.jpg?alt=media&token=f4805ceb-d1d4-4e4d-ac22-5ef5d450562e",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/17%2F0A4A2114-1.jpg?alt=media&token=6f587e04-f24c-4fb1-86d1-90fd6c0dd6a2",
    tag: "scarves",
    desc: "Beige wool-silk blend scarf featuring a block weaving pattern of white, yellow, and pink. A soft yet structured piece that balances warmth and elegance with effortless charm."
  },
  {
    id: 18,
    name: "6682A",
    price: 699,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/18%2F0A4A2121-1.jpg?alt=media&token=a9763d55-f720-424b-9703-dc28e88347c1",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/18%2F0A4A2123-1.jpg?alt=media&token=70ee3774-daa9-4e7a-8b71-11ca5a7956bf",
    tag: "scarves",
    desc: "Wool knitted scarf in navy, sky, black, and green, crafted for warmth and style. A rich interplay of colors and textures, perfect for effortless layering."
  },
  {
    id: 19,
    name: "221098A",
    price: 549,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/19%2F0A4A2129-1.jpg?alt=media&token=55626889-ab22-4b2e-89ff-3c8cf88dc8c4",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/19%2F0A4A2133-1.jpg?alt=media&token=853b1ebb-f2ff-4b40-821a-1f8887dc75cd",
    tag: "scarves",
    desc: "Grey viscose wool blend scarf adorned with a beautiful asymmetric artistic print. A perfect fusion of warmth and elegance, crafted for effortless sophistication."
  },
  {
    id: 20,
    name: "242056",
    price: 799,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/20%2F0A4A2141-1.jpg?alt=media&token=4e4ddc61-1ee0-4221-b0af-7c252a692087",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/20%2F0A4A2153-1.jpg?alt=media&token=647e9275-3b0d-4a05-b7a5-311f5737b93f",
    tag: "scarves",
    desc: "Multicolor floral print scarf crafted from a soft blend of cotton and modal. A lightweight and breathable accessory, perfect for effortless styling."
  },{
    id: 21,
    name: "1565",
    price: 299,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/21%2F0A4A2158-1.jpg?alt=media&token=1a989386-db99-45a0-9324-b30d5e42b438",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/21%2F0A4A2162-1.jpg?alt=media&token=c251a840-a06c-403f-91d6-50dcac1deee0",
    tag: "scarves",
    desc: "Hand-printed floral scarf crafted in pure silk, exuding elegance and charm. A timeless accessory with a soft, fluid drape, perfect for a sophisticated touch."
  },
  {
    id: 22,
    name: "15066",
    price: 349,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/22%2F0A4A2273-1.jpg?alt=media&token=a53f6ea3-dd8f-47bc-9bee-3134931cc909",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/22%2F0A4A2274-1.jpg?alt=media&token=b9f5d1fa-71ec-4477-b906-1b03d5781b4e",
    tag: "scarves",
    desc: "Pure silk sky-green scarf adorned with an intricate diamond print. A perfect harmony of elegance and softness, designed for a timeless appeal."
  },
  {
    id: 23,
    name: "246064",
    price: 599,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/23%2F0A4A2285-1.jpg?alt=media&token=b2f451e6-f3db-4fe1-b302-a548846f9d28",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/23%2F0A4A2287-1.jpg?alt=media&token=f8e01996-ec6f-4f58-bad8-ba21ce782e13",
    tag: "scarves",
    desc: "Green-black pure silk scarf adorned with an artistic print and intricate white thread work. A refined fusion of luxurious texture and exquisite craftsmanship, designed for a distinctive statement."
  },
  {
    id: 24,
    name: "252003",
    price: 799,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/24%2F0A4A2289-1.jpg?alt=media&token=93d90b61-fca5-4f01-a285-5fc1e7273fd3",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/24%2F0A4A2291-3.jpg?alt=media&token=e1d5d84c-95de-4df3-970d-3e8b453ed3a6",
    tag: "scarves",
    desc: "Pure silk white scarf adorned with a delicate blue flower design. A timeless blend of elegance and softness, perfect for a refined touch."
  },
  {
    id: 25,
    name: "241131",
    price: 449,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/25%2F0A4A2301-1.jpg?alt=media&token=e434662a-ef19-458b-89a3-cefb30ac1d1a",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/25%2F0A4A2306-1.jpg?alt=media&token=b81fb457-dc47-4af2-87d2-84d64ec88af8",
    tag: "scarves",
    desc: "Green-brown pure silk micro scarf adorned with an artistic print. A delicate fusion of elegance and craftsmanship, designed for a refined touch."
  },
  {
    id: 26,
    name: "232021",
    price: 899,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/26%2F0A4A2307-1.jpg?alt=media&token=aa17d775-5044-49c7-bb25-fe01516e8963",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/26%2F0A4A2314-1.jpg?alt=media&token=5cc3b14a-4226-4069-aeb1-619729287159",
    tag: "scarves",
    desc: "Modal silk blend scarf adorned with a beautiful floral pattern. A perfect harmony of softness and elegance, designed to complement any look with effortless grace."
  },
  {
    id: 27,
    name: "10717A",
    price: 399,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/27%2F0A4A2318-1.jpg?alt=media&token=205b4bc2-3d25-4e6e-9387-832b218695c4",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/27%2F0A4A2322-1.jpg?alt=media&token=9ac18b18-b1b1-4d9b-9ef2-a6f2eba617ee",
    tag: "scarves",
    desc: "Blue scarf in pure cotton featuring an elegant embroidery design all over. A harmonious blend of artisanal craftsmanship and timeless style, it offers a refined accent for any outfit."
  },
  {
    id: 28,
    name: "15178",
    price: 699,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/28%2F0A4A2333-1.jpg?alt=media&token=f08c77d0-14c8-4404-8c7a-3cf4693f4c17",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/28%2F0A4A2339-1.jpg?alt=media&token=b3262a01-20cb-4103-9809-4abbb497f088",
    tag: "scarves",
    desc: "White silk tabby scarf adorned with an artistic blue design. A refined fusion of elegance and craftsmanship, perfect for a sophisticated statement."
  },
  {
    id: 29,
    name: "253041",
    price: 549,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/29%2F0A4A2340-1.jpg?alt=media&token=fa8150c6-a16f-4312-9bda-c6df6eec3cb3",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/29%2F0A4A2348-1.jpg?alt=media&token=10993242-d1d6-4dca-8712-cc1f7b6a1174",
    tag: "scarves",
    desc: "Pure wool scarf featuring an elegant tie-dye blend of blue, black, and white hues. Soft, stylish, and effortlessly versatile, crafted for timeless appeal."
  },
  {
    id: 30,
    name: "16677A",
    price: 799,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/30%2F0A4A2353-3.jpg?alt=media&token=a48e6c10-0956-4e84-b1c9-af78071191b1",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/30%2F0A4A2355-1.jpg?alt=media&token=57b0ef59-8efd-420d-a48a-8b4fb680159b",
    tag: "scarves",
    desc: "Silk wool blend brown scarf adorned with a beautiful diamond pattern. A perfect balance of softness and elegance, designed for timeless sophistication."
  },{
    id: 31,
    name: "253004",
    price: 299,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/31%2F0A4A2365-1.jpg?alt=media&token=6b19538b-c7ed-459d-8d1a-4f5559291dfb",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/31%2F0A4A2366-1.jpg?alt=media&token=5f1cccbe-7587-4795-bfa5-513127a4dbca",
    tag: "scarves",
    desc: "Sky cotton-silk blend scarf adorned with intricate green embroidery. A delicate fusion of softness and artistry, perfect for a timeless statement."
  },
  {
    id: 32,
    name: "246097",
    price: 349,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/32%2F0A4A2378-1.jpg?alt=media&token=0ebe70fc-2582-4ec5-9f47-b78db11e7317",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/32%2F0A4A2382-1.jpg?alt=media&token=6e2be01f-137c-4974-99c9-4beaf6a8dd13",
    tag: "scarves",
    desc: "Pure wool twill scarf in light grey, adorned with an intricate green design. A perfect harmony of softness and elegance, crafted for timeless sophistication."
  },
  {
    id: 33,
    name: "253017",
    price: 599,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/33%2F0A4A2389-1.jpg?alt=media&token=39543e92-9d39-4b73-90df-e05e105ae290",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/33%2F0A4A2395-1.jpg?alt=media&token=0780507e-217b-4e0a-a095-fef0114e47bb",
    tag: "scarves",
    desc: "Milky-white scarf crafted from soft viscose georgette, adorned with delicate floral embroidery. A graceful blend of airy elegance and intricate craftsmanship."
  },
  {
    id: 34,
    name: "14059",
    price: 799,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/34%2F0A4A2420-3.jpg?alt=media&token=193bdec9-4b26-47f6-ba67-5d8968482957",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/34%2F0A4A2421-1.jpg?alt=media&token=eec56842-b051-4d6e-a208-7b171f627f69",
    tag: "scarves",
    desc: "White scarf in pure silk adorned with intricate mandala art print in green. A perfect harmony of elegance and artistic expression, crafted for a timeless appeal."
  },
  {
    id: 35,
    name: "24042K",
    price: 449,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/35%2F0A4A2431-1.jpg?alt=media&token=deb7d132-3f6f-4101-8859-032c40e43899",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/35%2F0A4A2439-1.jpg?alt=media&token=b0c62cab-d0e8-4666-9c54-d12c65d1feb7",
    tag: "garments",
    desc: "Cotton summer jacket in a refreshing blend of green and white. Crafted from pure cotton, it offers a perfect balance of breathability and effortless style."
  },
  {
    id: 36,
    name: "1624",
    price: 899,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/36%2F0A4A2458-1.jpg?alt=media&token=ac19094b-c2c0-4ba5-ac51-f181a9d25b3b",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/36%2F0A4A2460-1.jpg?alt=media&token=0d87872c-3753-49e3-983e-1ba5fda1dbca",
    tag: "garments",
    desc: "Mustard cotton poplin top featuring a flower print knitted on one side. A refined blend of classic fabric quality and asymmetric detailing, ideal for those seeking a unique style statement."
  },
  {
    id: 37,
    name: "2044A",
    price: 399,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/37%2F0A4A2556-1.jpg?alt=media&token=f1ae1ebd-52c5-451b-b420-fe837bd82ab2",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/37%2F0A4A2567-1.jpg?alt=media&token=a2ea733f-9b62-42c8-b945-d072f3c66d31",
    tag: "garments",
    desc: "Captivating cotton sinia dress in blue and white tie dye with a pattern that combines bright blue hues with stark white accents. A seamless fusion of comfort and contemporary design, this dress offers a unique twist on casual elegance."
  },
  {
    id: 38,
    name: "253043",
    price: 699,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/38%2F0A4A2218-1.jpg?alt=media&token=3298873e-64e5-40ef-ba7e-9ff2c0bb8b51",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/38%2F0A4A2220-1.jpg?alt=media&token=6d48532c-e864-4c7d-ae82-e5d05e85ae3b",
    tag: "scarves",
    desc: "Orange pure cotton scarf in a vibrant yet classic check pattern. Lightweight, breathable, and perfect for effortless styling."
  },
  {
    id: 39,
    name: "G-25026D",
    price: 549,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/39%2F0A4A2481-1.jpg?alt=media&token=7eca94de-e395-4e81-bb5d-27aad03b1a23",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/39%2F0A4A2499-1.jpg?alt=media&token=97034fb7-f75d-4842-a255-8a09ccb2f048",
    tag: "garments",
    desc: "Pure cotton tie and dye dress showcasing an artistic blend of vibrant hues and distinctive patterns. A seamless fusion of relaxed style and artisanal charm, it offers effortless comfort and eye-catching design."
  },
  {
    id: 40,
    name: "2105",
    price: 799,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/40%2F0A4A2516-1.jpg?alt=media&token=4b77dc36-d694-4c18-b0dd-a6e970e04d62",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/40%2F0A4A2512-1.jpg?alt=media&token=7920a9c1-4c4b-4c37-8a5c-c237045f7bf7",
    tag: "garments",
    desc: "Black cotton dress featuring a marble floral print in yellow and white. A seamless blend of traditional material and modern design that offers an artistic look."
  },{
    id: 41,
    name: "Top-2109 Skirt-4013",
    price: 299,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/41%2F0A4A2521-1.jpg?alt=media&token=42ba05d2-5198-4442-9b2b-29565a0fff78",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/41%2F0A4A2523-1.jpg?alt=media&token=543b8bb4-0fde-45d5-a122-83acc4eea7a5",
    tag: "garments",
    desc: "Top- Blue cotton long-length top adorned with beautiful embroidery on the shoulders. A perfect balance of elegance and craftsmanship, designed for effortless sophistication. Skirt- Blue cotton skirt crafted for effortless style and comfort. A perfect balance of breathable fabric and timeless elegance, designed for versatile wear."
  },
  {
    id: 42,
    name: "4012",
    price: 349,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/42%2F0A4A2570-1.jpg?alt=media&token=407673b7-e1ea-4834-aa49-daf7f5975eb4",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/42%2F0A4A2573-1.jpg?alt=media&token=1058e6cd-19b9-46fc-8810-91e954ca39db",
    tag: "garments",
    desc: "A cotton aura skirt in snowy white with intricate floral embroidery along one side. A seamless blend of natural fabric quality and intricate design ensures understated elegance."
  },
  {
    id: 43,
    name: "24065D",
    price: 599,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/43%2F0A4A2591-1.jpg?alt=media&token=15960778-c4c5-494e-8a13-371c60a7c457",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/43%2F0A4A2592-1.jpg?alt=media&token=db824ba9-1ccd-4bce-9563-e012ac3a9b01",
    tag: "garments",
    desc: "White cotton dress featuring a digital flower print on the front. A seamless blend of natural fabric quality and modern design for making a bold statement."
  },
  {
    id: 44,
    name: "g241185H",
    price: 799,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/44%2F0A4A2442-1.jpg?alt=media&token=1ba726bc-1ef7-431d-ac03-2b9c7b33c0f1",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/44%2F0A4A2450-1.jpg?alt=media&token=5a21636e-9aff-45fb-a14a-7d103bab3a3e",
    tag: "garments",
    desc: "White top featuring a refined knitted design that adds subtle texture to its clean silhouette. A seamless blend of traditional craftsmanship and contemporary style"
  },
  {
    id: 45,
    name: "241143",
    price: 449,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/45%2F0A4A2163-1.jpg?alt=media&token=b8b58faf-4363-4455-b73c-5eb25a51491d",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/45%2F0A4A2169-1.jpg?alt=media&token=cca93c33-64aa-4809-963a-331dcaabface",
    tag: "scarves",
    desc: "Wool silk blend scarf adorned with a beautiful grey and blue tie-dye, evoking the serene movement of ocean waves. A perfect harmony of elegance and fluid design, crafted for effortless sophistication."
  },
  {
    id: 46,
    name: "15265",
    price: 899,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/46%2F0A4A2181-1.jpg?alt=media&token=0ffb7955-045e-4764-89a4-ac56b5593b1e",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/46%2F0A4A2185-1.jpg?alt=media&token=fd9d54bb-afb8-4847-a619-7040ae5350b1",
    tag: "scarves",
    desc: "Bandana crafted from pure habutai silk, adorned with a vibrant digital print. A lightweight and smooth accessory that blends elegance with contemporary charm."
  },
  {
    id: 47,
    name: "241109",
    price: 399,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/47%2F0A4A2189-1.jpg?alt=media&token=9b1a2de3-e3a7-4994-aa31-31248ec85438",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/47%2F0A4A2202-1.jpg?alt=media&token=57a53a00-d7c5-4b7d-bc47-fad0e381798d",
    tag: "scarves",
    desc: "Black Olive wool box weave scarf featuring an intricate weaving pattern that showcases exceptional craftsmanship. A refined fusion of traditional design and contemporary flair, it offers a versatile accessory for any ensemble."
  },
  {
    id: 48,
    name: "245030",
    price: 699,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/48%2F0A4A2248-1.png?alt=media&token=41c9a51b-d409-497d-a9a2-6667f238a0b2",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/48%2F0A4A2252-1.jpg?alt=media&token=bf264570-8019-45a8-a1c7-d426165d3c8b",
    tag: "scarves",
    desc: "Beige wool-silk blend scarf exuding a rustic charm. A perfect harmony of texture and elegance, crafted for effortless sophistication."
  },
  {
    id: 49,
    name: "253044",
    price: 549,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/49%2F0A4A2230-1.jpg?alt=media&token=932cb39a-ec42-4fe9-b07a-53bfe052d605",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/49%2F0A4A2237-3.jpg?alt=media&token=8e602b44-be69-47b7-8f59-c8991b336bc3",
    tag: "scarves",
    desc: "Cotton and linen blend scarf with the classic green and white hues. A timeless accessory that combines breathable comfort with effortless style."
  },
  {
    id: 50,
    name: "232053",
    price: 799,
    image: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/50%2F0A4A2212-1.jpg?alt=media&token=34f5da76-1b6f-457e-ad14-4c1849d8d1dd",
    hoverImage: "https://firebasestorage.googleapis.com/v0/b/silk-route-9f98d.firebasestorage.app/o/50%2F0A4A2214-1.jpg?alt=media&token=85ce45f1-913e-439b-acec-08848b90fd7d",
    tag: "scarves",
    desc: "Modal silk blend scarf adorned with a yellow and blue floral pattern. A perfect balance of softness and vibrant design, crafted for effortless elegance.",
  }
];

