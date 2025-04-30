const books = [
  {
    name: "Kürelerin Müziği",
    author: "Kubilay Aktaş",
    price: 420,
    stock: 10,
    category: "astroloji",
    description: "Yıldızlara yapılan bir seyir.",
    image: "https://img.kitapyurdu.com/v1/getImage/fn:1014311/wh:true/wi:800"
  },
  {
    name: "Cesur Yeni Dünya",
    author: "Aldous Huxley",
    price: 210,
    stock: 7,
    category: "bilim",
    description: "Cesur insanlar, distopik bir gelecek.",
    image: "https://img.kitapyurdu.com/v1/getImage/fn:11643404/wh:true/wi:800"
  },
  {
    name: "Çalıkuşu",
    author: "Reşat Nuri Güntekin",
    price: 324,
    stock: 12,
    category: "roman",
    description: "Feride'nin hüzünlü ve güçlü hikayesi.",
    image: "https://img.kitapyurdu.com/v1/getImage/fn:12015321/wh:true/wi:800"
  },
   {
    name: "Incognito Beynin Gizli Hayatı",
    author: "David Eagleman",
    price: 320,
    stock: 16,
    category: "bilim",
    description: "'Kendimizle aramızdaki fark, bir başkasıyla aramızdaki fark kadar büyüktür.'Montaigne",
    image: "https://img.kitapyurdu.com/v1/getImage/fn:8742215/wh:true/wi:800"
  },
   {
    name: "Dolunayın Özgür Kadınları",
    author: "Dr. Ayşe Duman",
    price: 170,
    stock: 8,
    category: "bilim",
    description: "Zihin-beden, insan-doğa ayrışmalarının olmadığı kültürlerde, özünün bilincindeki kadınlara göre ay hali kutlanmaya değer bir doğuş, bir yenilenmeydi.",
    image: "https://img.kitapyurdu.com/v1/getImage/fn:11517311/wh:true/wi:800"
  },
   {
    name: "Beyin Sizsiniz 4.0 – Kuantik Çağ",
    author: "Prof. Dr. İsmail Hakkı Aydın ",
    price: 370,
    stock: 9,
    category: "bilim",
    description: "Canavarlaşmış küresel elit sistem; her şeyi takip için nakit parayı ortadan kaldırıp, sanal hayatta puanlanabilir ve kredilendirilebilir sanal para ve beyni arayüz olarak kullanabilecek",
    image: "https://img.kitapyurdu.com/v1/getImage/fn:11432866/wh:true/wi:800"
  },
   {
    name: "Tıbbi Astroloji",
    author: "Emine Gücek ",
    price: 320,
    stock: 19,
    category: "astroloji",
    description: "Bu kitap yaşam yolculuğumuzda önümüze çıkan dikenli çalıları şifaya döndürme kılavuzu.",
    image: "https://img.kitapyurdu.com/v1/getImage/fn:11870357/wh:true/wi:800"
  },
   {
    name: "Niyet Şifası",
    author: "Funda Uçuk Er",
    price: 230,
    stock: 23,
    category: "roman",
    description: "Niyet etmenin, niyetini yüksek sesle söylemenin şifalı olduğuna inanıyorum,” dedi",
    image: "https://img.kitapyurdu.com/v1/getImage/fn:11960518/wh:true/wi:800"
  },
   {
    name: "Tılsımlı Cevaplar",
    author: "Sezen Tatlı ",
    price: 185,
    stock: 12,
    category: "astroloji",
    description: "Gelecekteki hayatımdan spoiler görüp ona göre karar versem ne güzel olurdu beee” diyenler toplanın!  Bunalmışlık, daralmışlık, iç sıkıntısı ve sinir hali yaratan soruların varsa aradığın cevap bu kitapta. ",
    image: "https://img.kitapyurdu.com/v1/getImage/fn:11896991/wh:true/wi:800"
  },
   {
    name: "Kaplanın Sırtında",
    author: "Zülfü Livaneli ",
    price: 420,
    stock: 10,
    category: "roman",
    description: "Yıldızlara yapılan bir seyir.",
    image: "https://img.kitapyurdu.com/v1/getImage/fn:11655631/wh:true/wi:800"
  },
   {
    name: "Eylül",
    author: "Mehmed Rauf ",
    price: 30,
    stock: 9,
    category: "roman",
    description: "Her şey çürüyor, her şey... İnsanlar çürümeyecekler mi? Eylülde, sanki bahara hasret çeken hüzünlü bir tazelik, sanki üzerine çöken kışın kendisini yok etmek isteyen sonbahara rağmen devam etmek, yine bahar olmak mücadelesi vardır; fakat bunun için muhtaç olduğu şeylerden mahrumdur ve kendisinde de dayanma gücü kalmamıştır.",
    image: "https://img.kitapyurdu.com/v1/getImage/fn:11345505/wh:true/wi:800"
  },
   {
    name: "Derviş Kelamı",
    author: "Funda Uçuk Er",
    price: 275,
    stock: 10,
    category: "roman",
    description: "Aynı damdan düşenler anlayabiliyordu işte birbirlerini,ancak aynı yerden vurulanlar biliyordu karşısındakinin kurşun yerini.",
    image: "https://img.kitapyurdu.com/v1/getImage/fn:11551957/wh:true/wi:800"
  },
   {
    name: "Aşk Tarotu",
    author: "Corrine Kenner  ",
    price: 650,
    stock: 54,
    category: "astroloji",
    description: "Yüzyıllar boyunca âşıklar, kara sevdalılar, terk edilenler ve karşılıksız aşkın acısını çekenler romantizm ile ilgili konularda Tarot kartlarına danıştılar. ",
    image: "https://img.kitapyurdu.com/v1/getImage/fn:11462858/wh:true/wi:800"
  },
   {
    name: "Numeroloji",
    author: "Mark Johnson",
    price: 140,
    stock: 17,
    category: "Astroloji",
    description: "Her bir harfin bir sayının titreşime denk geldiğini bilseydiniz, numerolojiye yine batıl inanç gözüyle bakar mıydınız?",
    image: "https://img.kitapyurdu.com/v1/getImage/fn:11909910/wh:true/wi:800"
  },
     {
    name: "Kadim",
    author: "Hayriye Taş ",
    price: 133,
    stock: 32,
    category: "Astroloji",
    description: "Kadim uygarlıklar, doğanın enerjisini yönlendirmek ve hayatlarını bereket, aşk ve korunma enerjisiyle güçlendirmek için ritüeller uygulamışlardır",
    image: "https://img.kitapyurdu.com/v1/getImage/fn:12022466/wh:true/wi:800"
  },
];

function displayBooks(category = 'Tümü') {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';

  books.forEach(book => {
    if (category === 'Tümü' || book.category === category) {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book-card');
      bookDiv.innerHTML = `
        <img src="${book.image}" alt="${book.name}" />
        <h2>${book.name}</h2>
        <p><strong>Yazar:</strong> ${book.author}</p>
        <p><strong>Fiyat:</strong> ₺${book.price}</p>
        <p><strong>Stok:</strong> ${book.stock} adet</p>
        <p><strong>Kategori:</strong> ${book.category}</p>
        <p>${book.description}</p>
        <div class="actions">
          <button class="buy">Detaylar</button>
          <button class="buy">Sepete Ekle</button>
        </div>
      `;
      bookList.appendChild(bookDiv);
    }
  });
}

const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    displayBooks(category);
  });
});

displayBooks();
