const social_prop_ads = [`لو دوست علي تتوس وعملت لايك لمل صفحاته هيحطك في سيرفرات مدفوعه`,
    `والله لو عملت لايك وفولو لتتوس وصفحاته هتكسب دنيا و اخره`
,`تعرف ان تتوس عمل الويبسايت دا علشانك؟ يبقي لايك وفولو لصفحاته مش هتضر`
]

const tutorial = [
    "لو دوست عليا وعملت فولو فيه فرصه تكسب فلوس تجيب اللي انت عاوزه من الشوب",
    "السبتايتل مش باين؟ دوس علي علامه السي سي اللي تحت الفيلم و دوس علي كلمه ايجيبت هيشتغل معاك",
    "لو بتتفرج علي الفيلم و بطئ حمله من الايكونات اللي فوق وحمل معاه السبتايتل"
    ,"تعرف ان الرسيفر للأفلام...و السماعات للأغاني و البلايستيشن للخدمات؟"
    ,"تعرف انك لو امتحنت علي كلمات الفيلم بتاخد فلوس؟ و الفلوس دي تجيب منها حجات من الكشك؟"
    ,"تعرف ان لو دوست عليا بيجيلك فلوس؟ ولو عملت فولو للسوشيال ميديا بتوعي بيجيلك فلوس اكتر؟"
    ,"تعرف ان انا هنا بجيبلك الافلام الحلوه بس؟ لان فيه حجات ما يعلم بيها الا ربنا"
    , "تعرف ان فيه شات تحت علي الشمال تقدر تكلم فيه الناس اللي بيتفرجو؟ و تكلمني انا كمان هناك"
    , "تعرف انك لو عاوز تشهر فيديو او اغنيه او تعمل اعلان تفدر تدوس علي المساحه الاعلانيه و انا هظبطلك اعلان"
    , "تعرف ان هنا المنصه الوحيده اللي مش بتجيب اعلانات بضان كل كلكايه؟ بس كل هدفنا انك تشهر المنصه"
    , "تعرف انك لو صانع محتوي و عملت اعلان لمنصه فُرجه هنحط قناتك عندنا في المنصه و نعلن لبعضشينا؟"
    , "تعرف ان المنصه دي معموله بالكامل من شخص واحد بس؟ فعاوز ناس تساعد"
    , "تعرف ان لو دوست علي الكتب او الفلوس الواقعين عالارض هتمتحن علي كلمات الفيلم..بس تختار الفيلم الاول"
    , "تعرف ان تقدر تلون اوضتك بنفسك لو دوست علي الكتاب رقم 2"
    , "تعرف انك تقدر تحفظ فلوسك في ملف علي جهازك من زرار (متخليش تعبك يضيع) في حاله كنت هتنزل ويندوز"
    , "تعرف ان فيه زرار عامل شبه طوز الدره دا بيخليك تعمل الفيلم برابط مباشر سريع في حاله كان بطئ علي المنصه...بس ابقي حمل السبتايتل من زرار التحميل لأنها منفصله عن الفيلم"
]


notify({
    name: 'updates',
    title: 'تحديثات',
    emoji: '👉',
    message: `
   🎬 حطينا 4 افلام ولسه فيه كمان يا مان...  
تابع الصفحات بتاعتنا علشان يجيلك الجديد اول باول!  

[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/@tut_os)  [![TikTok](https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white)](https://tiktok.com/@tut.os)  
    `
    ,
    position: 'right',
    y: 200, // 200px from top
    backgroundColor: '#2196F3',
    textColor: '#ffffff',
    notificationCount: 2,
    isCache: false
  });



//shop

        // Load cached score from localStorage
        let score = parseInt(localStorage.getItem('score')) || 1000; // Default score is 1000
        let currentPage = 1; // Current page for pagination
        const itemsPerPage = 8; // Max items per page

        // Load cached items from localStorage
        let cachedItems = JSON.parse(localStorage.getItem('cachedItems')) || [];

        // Load used promo codes from localStorage
        let usedPromoCodes = JSON.parse(localStorage.getItem('usedPromoCodes')) || [];

        // Update the score display
        const scoreDisplay = document.getElementById('score-value');
        scoreDisplay.textContent = score;

        // Track clicks on the score display
        let clickCount = 0;
        const scoreContainer = document.getElementById('score-display');
        scoreContainer.addEventListener('click', () => {
            clickCount++;
            if (clickCount === 20) {
                const password = prompt("Enter the password:");
                if (password === "ahmed" && !usedPromoCodes.includes("ahmed")) {
                    score += 10000;
                    usedPromoCodes.push("ahmed");
                    alert("You got 10,000 جنيه!");
                } else if (password === "heba" && !usedPromoCodes.includes("heba")) {
                    score += 10000000;
                    usedPromoCodes.push("heba");
                } else if (usedPromoCodes.includes(password)) {
                    alert("This promo code has already been used.");
                } else {
                    alert("Invalid password.");
                }
                // Update localStorage
                localStorage.setItem('score', score);
                localStorage.setItem('usedPromoCodes', JSON.stringify(usedPromoCodes));
                // Update the score display
                scoreDisplay.textContent = score;
                // Reset click count
                clickCount = 0;
            }else{
                openShop()
            }
        });

        // Define shopItems before using it in functions
        const shopItems = [
            {  thumbnail: 'https://i.giphy.com/SaJMubXW9W5tEfmBAP.webp', title: 'سبونج بوب المعرص', price:10000, tip: 'مفيش احلي من سبونج بوب معرص عندك في الاوضه', emoji: '🧽', type: 'شخص',
             callback: () => dyn_ad({
        
    containerSelector: 'body', // Replace with your container selector
    id: 'test_english',
    position: 'fixed',
    borderPosition: 'bottom-left',
    popImages: [["https://i.giphy.com/SaJMubXW9W5tEfmBAP.webp"]], // Replace with your image path
    tooltipTheme: 'bubble',
    tippy_zindex:999,
    tip_direction:`top`,
        tooltipTheme: 'bubble',
        tippy_height:300,
        tippy_max_width:200,
        tippy_max_height:300,
        
    tooltipAutoShow: true,
    typewriterEffect: true,
    typewriterSpeed: 50,

    closeTippyOnClick: false,
    zIndex: 4,
    imageSize:200,
    distance: [[130, -20]],

    scenario: [
    [
    
      {
        delay: 2000,
        tooltipText:[`انا معرص يا سيدي`,`مش بقدر ابطل تعريص`,`انا سبونج بوب`,"احيبلك شاي او قهوه يا سيد الناس؟","مش عارف اقولك ايه بجد..بس انا مشفتش اجمل منك بني ادم","اقسم بالله ما شفت جمال بالشكل دا"]

      },
      {
        delay: 8000,
        tooltipText:[`تعرف انك لو دوست علي صورة تتوس و عملت لايك لكل صفحاته هيجيلك فلوس كتير؟`]
      },
  
  ],
    ],
    }) 
     },

            { id: 2, thumbnail: 'https://t4.ftcdn.net/jpg/05/06/41/89/360_F_506418953_5R5MQsN4UJ4hLgqnKlltS44wbQ33LhIU.jpg', title: 'البرتقالي يوسفي', price: 12000, tip: 'اللوان جامده و ستايل رايق', emoji: '⚡', type: 'اوضه', 
            callback: () =>
                theme({
                    // Felfel Sheta (Chilly Pepper)
                    color1:'#ffcc00',
                    floor1: '#ffcc00',    // Golden Yellow
                    floor2: '#ff6f00',    // Bright Orange
                    desk1: '#f57c00',     // Sunset Orange
                    desk2: '#bf360c',     // Burnt Orange
                    rgb1: '#ff5722',      // Fiery Red
                    rgb2: '#d84315',      // Smoky Red
                    element: '#ff7043',   // Coral
                    cupboard1: '#bf4e30', // Cinnamon Brown
                    cupboard2: '#a24936'  // Rustic Brown
                }, true)
             },
            { id: 3, thumbnail: 'https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3339.jpg?semt=ais_hybrid', title: 'اوضتي الدهبيه', price: 32000, tip: 'شفت اوضتي الدهبيه؟ طب شفتها؟ طب هتشوفها؟', emoji: '🔥', type: 'اوضه', 
             callback: () => 
                theme({
                    // Lemo Ba'as (Sad Lemon)
                    color1:'#ffcc00',
                    floor1: '#ffff00',    // Lemon Yellow
                    floor2: '#fdd835',    // Golden Yellow
                    desk1: '#ffee58',     // Bright Yellow
                    desk2: '#fbc02d',     // Deep Yellow
                    rgb1: '#c6ff00',      // Electric Yellow
                    rgb2: '#aeea00',      // Chartreuse Yellow
                    element: '#fff176',   // Sunflower Yellow
                    cupboard1: '#ffc107', // Mustard Yellow
                    cupboard2: '#f9a825'  // Honey Yellow
                }, true)                
             },
            {  thumbnail: 'https://img.freepik.com/free-vector/brown-blurred-background_1034-248.jpg', title: 'كلنا بنحب القهوه', price: 32200, tip: 'القهوه حلوه و مره بس اعشجها وايد مره', emoji: '☕', type: 'اوضه', 
            callback: () => 
                theme({
                    // Asmar Balady (Authentic Tan)
                    color1:'#795548',
                    floor1: '#795548',    // Cocoa Brown
                    floor2: '#5d4037',    // Rich Mocha
                    desk1: '#6d4c41',     // Earthy Brown
                    desk2: '#4e342e',     // Dark Chocolate
                    rgb1: '#8d6e63',      // Light Chestnut
                    rgb2: '#3e2723',      // Espresso Brown
                    element: '#a1887f',   // Taupe
                    cupboard1: '#bcaaa4', // Latte Beige
                    cupboard2: '#d7ccc8'  // Creamy Beige
                }, true)
             },
            { id: 5, thumbnail: 'https://static.vecteezy.com/system/resources/thumbnails/003/031/750/small_2x/dark-blue-wide-background-with-radial-blurred-gradient-vector.jpg', title: 'زرقان وروقان', price: 41300, tip: 'اللي بيحب الازرقات...ليلتكم زرقه ان شاء الله', emoji: '🍀', type: 'اوضه', callback: () => 
                    theme({
                        // Bahr Shisha (Shisha Ocean)
                        color1: '#00bcd4',    // Turquoise

                        floor1: '#00bcd4',    // Turquoise
                        floor2: '#0097a7',    // Deep Aqua
                        desk1: '#80deea',     // Soft Cyan
                        desk2: '#006064',     // Teal
                        rgb1: '#4dd0e1',      // Sky Blue
                        rgb2: '#26c6da',      // Electric Cyan
                        element: '#b2ebf2',   // Icy Blue
                        cupboard1: '#00acc1', // Ocean Blue
                        cupboard2: '#00838f'  // Midnight Teal
                    }, true)
                
        },
            {  thumbnail: 'https://img.freepik.com/free-photo/blurred-pop-abstract-background-pink_58702-1693.jpg', title: 'النسوان و العيال المتنيه', price: 34000, tip: 'الوردي جميل...للنسوان و العيال الشواذ..لو مش واحده و بتستخدمه تبقي عيل متني', emoji: '🌈', type: 'اوضه', callback: () => 
                theme({
                    // Wi7da Nediya (Soft Feminine)
                    color1:'#ff69b4',
                    floor1: '#ff69b4',    // Hot Pink
                    floor2: '#f50057',    // Deep Magenta
                    desk1: '#ff4081',     // Blush Pink
                    desk2: '#e91e63',     // Bright Pink
                    rgb1: '#ec407a',      // Rose Pink
                    rgb2: '#ad1457',      // Dark Raspberry
                    element: '#f8bbd0',   // Soft Rose
                    cupboard1: '#c2185b', // Crimson Pink
                    cupboard2: '#880e4f'  // Deep Berry
                }, true)
                
        },
            {  thumbnail: 'https://static.vecteezy.com/system/resources/thumbnails/001/986/084/small/light-green-yellow-gradient-blur-backdrop-vector.jpg', title: 'الماتركس', price: 22883, tip: 'اوعا الاخضر هياكل كل حاجه', emoji: '✨', type: 'اوضه', callback: () => 
                theme({
                    color1:'#4caf50',
                    floor1: '#000000',    // Absolute Black
                    floor2: '#1b1b1b',    // Deep Charcoal
                    desk1: '#4caf50',     // Matrix Green
                    desk2: '#81c784',     // Light Green Glow
                    rgb1: '#00ff00',      // Cyber Green
                    rgb2: '#2e7d32',      // Dark Forest Green
                    element: '#76ff03',   // Electric Lime
                    cupboard1: '#388e3c', // Emerald Green
                    cupboard2: '#1b5e20'  // Dark Ivy Green
                }, true)
                

            },
            { id: 8, thumbnail: 'https://img.freepik.com/free-photo/blurred-gradient-abstract-background-with-vivid-primary-colors_58702-1207.jpg', title: 'اللوان و جنان', price: 77823, tip: 'جنان يا صاحبي', emoji: '🎉', type: 'اوضه', callback: () => 
                theme({
                    color1:'#101010',
                    floor1: '#101010',    // Deep Gray
                    floor2: '#2e2e2e',    // Charcoal
                    desk1: '#3d5afe',     // Electric Blue
                    desk2: '#ff1744',     // Cyber Red
                    rgb1: '#76ff03',      // Neon Lime
                    rgb2: '#18ffff',      // Aqua Glow
                    element: '#c51162',   // Hot Pink
                    cupboard1: '#4caf50', // Laser Green
                    cupboard2: '#00bcd4'  // Aqua Blue
                }, true)
                
             },
            { id: 9, thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvZQ78huAZ0qDPhEmUPeeNG4rl1fTN9i4Pg&s', title: 'بلاط فُلح ابن متناكه', price: 2000, tip: 'اهو بلاط علي قد الجيب', emoji: '💎', type: 'بلاط', callback: () => 
                patternize('.floor', {
                    images: [
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvZQ78huAZ0qDPhEmUPeeNG4rl1fTN9i4Pg&s",
                    ],
                    height: '300%',
                    rotation: 0,
                    gapX: 0,
                    gapY: 0,
                    size: { width: 150, height: 150 },
                    animate: false, // Disable animation
                  })
             },
            { id: 10, thumbnail: 'https://img.freepik.com/premium-vector/botanical-seamless-pattern-floral-background-botanical-background_176161-38.jpg?semt=ais_hybrid', title: 'بلاط ورد', price: 23200, tip: 'افرشلك الارض ورد', emoji: '🍄', type: 'بلاط', callback: () => 
                patternize('.floor', {
                    images: [
                      "https://img.freepik.com/premium-vector/botanical-seamless-pattern-floral-background-botanical-background_176161-38.jpg?semt=ais_hybrid",
                    ],
                    height: '300%',
                    rotation: 0,
                    gapX: 0,
                    gapY: 0,
                    size: { width: 150, height: 150 },
                    animate: false, // Disable animation
                  })
             },
            { id: 11, thumbnail: 'https://i.pinimg.com/736x/86/e7/4d/86e74d47d1420e902d7b52f21ff92fc0.jpg', title: 'بلاط الروعه', price: 31200, tip: 'روعه و يليق مع الناس الصلعه', emoji: '🌙', type: 'بلاط', callback: () => 
                patternize('.floor', {
                    images: [
                      "https://i.pinimg.com/736x/86/e7/4d/86e74d47d1420e902d7b52f21ff92fc0.jpg",
                    ],
                    height: '300%',
                    rotation: 0,
                    gapX: 0,
                    gapY: 0,
                    size: { width: 550, height: 550 },
                    animate: false, // Disable animation
                  })
            },
            { id: 12, thumbnail: 'https://via.placeholder.com/80', title: 'بلاط شوارع نضيف', price: 53200, tip: 'عادي يعني اما اسرق بلاط شارع و ابيعهولك صح؟ الحاله كحيانه مع الكل و السوق واقف', emoji: '🌞', type: 'بلاط', callback: () => 
                patternize('.floor', {
                    images: [
                      "https://img.freepik.com/premium-photo/seamless-patterns-repeating-patterns-design-terrazzo-seamless-patterns-tile-art_980716-4992.jpg",
                    ],
                    height: '300%',
                    rotation: 0,
                    gapX: 0,
                    gapY: 0,
                    size: { width:110, height: 146 },
                    animate: false, // Disable animation
                  })
             },
             { id: 13, thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG41uiDSL_5r3djA8g52v4ThaG28bJ0e2UB4l_1KYLd-MYUVVoXlwaF3k&s=10', title: 'سجاد متكلف', price: 32200, tip: 'سجاده تستاهل تعبك بتدفي في الشتا و بتنيكك في الصيف', emoji: '🌞', type: 'بلاط', 
             callback: () => 
                patternize('.floor', {
                    images: [
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG41uiDSL_5r3djA8g52v4ThaG28bJ0e2UB4l_1KYLd-MYUVVoXlwaF3k&s=10",
                    ],
                    height: '300%',
                    rotation: 0,
                    gapX: 0,
                    gapY: 0,
                    size: { width:350, height: 350 },
                    animate: false, // Disable animation
                  })
             },
             { id: 14, thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvmNlaHrOLX9RGsAj2D_-Zi2TqoLIk4Kph8xsSJbGnUgticoJhq3mYdrX&s=10', title: 'سجاد مبقع بس جميل', price: 12200, tip: "بهزر مش مبقع ولا حاجه ويليق مع الاوضه اوي", emoji: '🌞', type: 'بلاط', 
                callback: () => 
                   patternize('.floor', {
                       images: [
                         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvmNlaHrOLX9RGsAj2D_-Zi2TqoLIk4Kph8xsSJbGnUgticoJhq3mYdrX&s=10",
                       ],
                       height: '300%',
                       rotation: 0,
                       gapX: 0,
                       gapY: 0,
                       size: { width:250, height: 250 },
                       animate: false, // Disable animation
                     })
                },
                { id: 15, thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98RGZPikuXzVe3_BhBb4csPd1mG49sFlcsoM2Bwzcqf5sFbUF3PT7GHnr&s=10', title: 'سجاد ستي الله يرحمها', price: 27700, tip: "ستي جابتها ب 500 جنيه ايام الرخص...مش عاوزني ابعهالك غاليه؟ دا ورث يابا", emoji: '🌞', type: 'بلاط', 
                    callback: () => 
                       patternize('.floor', {
                           images: [
                             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98RGZPikuXzVe3_BhBb4csPd1mG49sFlcsoM2Bwzcqf5sFbUF3PT7GHnr&s=10",
                           ],
                           height: '300%',
                           rotation: 0,
                           gapX: 0,
                           gapY: 0,
                           size: { width:450, height: 300 },
                           animate: false, // Disable animation
                         })
                    },
                    { id: 16, thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABf9RIvtuWLPms7SUZCbkCZevDJwmkeF4dTTd5dmQU6wIzeYN9FmIXZbb&s=10', title: "بلاط سكلانس", price: 100200, tip: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABf9RIvtuWLPms7SUZCbkCZevDJwmkeF4dTTd5dmQU6wIzeYN9FmIXZbb&s=10", emoji: '🌞', type: 'بلاط', 
                        callback: () => 
                           patternize('.floor', {
                               images: [
                                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABf9RIvtuWLPms7SUZCbkCZevDJwmkeF4dTTd5dmQU6wIzeYN9FmIXZbb&s=10",
                               ],
                               height: '300%',
                               rotation: 0,
                               gapX: 0,
                               gapY: 0,
                               size: { width:250, height: 250 },
                               animate: false, // Disable animation
                             })
                        },
                        { id: 17, thumbnail: 'https://i.pinimg.com/736x/fa/6c/e9/fa6ce99e50913612733adca2858e2ed4.jpg', title: "ورق حيطه اوفف احح", price: 464200, tip: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABf9RIvtuWLPms7SUZCbkCZevDJwmkeF4dTTd5dmQU6wIzeYN9FmIXZbb&s=10", emoji: '🧱', type: 'ورق حيطه', 
                            callback: () => 
                               patternize('.lighting', {
                                   images: [
                                     "https://i.pinimg.com/736x/fa/6c/e9/fa6ce99e50913612733adca2858e2ed4.jpg",
                                   ],
                                   height: '300%',
                                   rotation: 0,
                                   gapX: 0,
                                   gapY: 0,
                                   size: { width:600, height: 860 },
                                   animate: false, // Disable animation
                                 })
                            },
                            { id: 18, thumbnail: 'https://i.pinimg.com/736x/7a/52/16/7a52164e8e06c99cbca0571d9cffa8eb.jpg', title: "ورق الحيطه الرهيب", price: 33200, tip: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABf9RIvtuWLPms7SUZCbkCZevDJwmkeF4dTTd5dmQU6wIzeYN9FmIXZbb&s=10", emoji: '🧱', type: 'ورق حيطه', 
                                callback: () => 
                                   patternize('.lighting', {
                                       images: [
                                         "https://i.pinimg.com/736x/7a/52/16/7a52164e8e06c99cbca0571d9cffa8eb.jpg",
                                       ],
                                       height: '300%',
                                       rotation: 0,
                                       gapX: 0,
                                       gapY: 0,
                                       size: { width:700, height: 900 },
                                       animate: false, // Disable animation
                                     })
                                },
                                { id: 19, thumbnail: 'https://i.pinimg.com/736x/fd/eb/0d/fdeb0d37b2502b9c2a21365e9d89a9f1.jpg', title: "ورق حيطه مجنوون ", price: 204430, tip: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABf9RIvtuWLPms7SUZCbkCZevDJwmkeF4dTTd5dmQU6wIzeYN9FmIXZbb&s=10", emoji: '🧱', type: 'ورق حيطه', 
                                    callback: () => 
                                       patternize('.lighting', {
                                           images: [
                                             "https://i.pinimg.com/736x/fd/eb/0d/fdeb0d37b2502b9c2a21365e9d89a9f1.jpg",
                                           ],
                                           height: '300%',
                                           rotation: 0,
                                           gapX: 0,
                                           gapY: 0,
                                           size: { width:300, height: 300 },
                                           animate: false, // Disable animation
                                         })
                                    },
                                    {  thumbnail: 'https://i.pinimg.com/736x/b1/c7/47/b1c74720d953dc32fe625f59f2a70112.jpg', title: "ورق حيطه اغلي من حياتك", price: 445200, tip: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABf9RIvtuWLPms7SUZCbkCZevDJwmkeF4dTTd5dmQU6wIzeYN9FmIXZbb&s=10", emoji: '🧱', type: 'ورق حيطه', 
                                        callback: () => 
                                            patternize('.lighting', {
                                                images: [
                                              "https://i.pinimg.com/736x/b1/c7/47/b1c74720d953dc32fe625f59f2a70112.jpg"
                                                ],
                                                height: '105%',
                                                size: { width: 800, height: 450 },
                                                rotation: 0,
                                            
                                                gapX: 0,
                                                gapY: 0,
                                                animate: false, // Disable animation
                                            })
                                        },
                                        {  thumbnail: 'https://media3.giphy.com/media/eLkgYPUo9RA8MbSbMJ/giphy.webp?cid=790b76112q6yq4p5tmqvk5v6kh16ctf5n9zdkdp9xvxw4low&ep=v1_stickers_search&rid=giphy.webp&ct=s', title: 'مراتك الكيرفي اللبوه', price: 444330, tip: 'انطر ابلكاش', emoji: '🧽', type: 'شخص',
                                            callback: () => dyn_ad({
                                       
                                   containerSelector: 'body', // Replace with your container selector
                                   id: 'wife',
                                   position: 'fixed',
                                   borderPosition: 'bottom-left',
                                   popImages: [["https://i.giphy.com/0WF4M4xTOeZdCNEnsw.webp","https://media4.giphy.com/media/Pr7nb7w6q8ECEyKXtm/giphy.webp?cid=ecf05e47wli779phfln4u1y77udowd1tzt9ia5dkbujlpaax&ep=v1_stickers_search&rid=giphy.webp&ct=s"
                                    ,"https://media1.giphy.com/media/gLEjJySHqReGElXOVv/200.webp?cid=790b76112q6yq4p5tmqvk5v6kh16ctf5n9zdkdp9xvxw4low&ep=v1_stickers_search&rid=200.webp&ct=s"
                                    ,"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnE2eXE0cDV0bXF2azV2NmtoMTZjdGY1bjl6ZGtkcDl4dnh3NGxvdyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/92yuR5MqJx7GvYdJek/giphy.webp"
                                    ,"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnE2eXE0cDV0bXF2azV2NmtoMTZjdGY1bjl6ZGtkcDl4dnh3NGxvdyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/zwF2jxnPMY1FWSRuhb/giphy.webp"
                                    , "https://media4.giphy.com/media/kWRmdFoJ3SoHjUkest/giphy.webp?cid=790b76112q6yq4p5tmqvk5v6kh16ctf5n9zdkdp9xvxw4low&ep=v1_stickers_search&rid=giphy.webp&ct=s"
                                    ,"https://media1.giphy.com/media/6h6lEwSNKznWQ3ex7l/giphy.webp?cid=790b76112q6yq4p5tmqvk5v6kh16ctf5n9zdkdp9xvxw4low&ep=v1_stickers_search&rid=giphy.webp&ct=s"
                                    ,"https://media2.giphy.com/media/iaQWVfCGEBrkAQEov0/giphy.webp?cid=790b76112q6yq4p5tmqvk5v6kh16ctf5n9zdkdp9xvxw4low&ep=v1_stickers_search&rid=giphy.webp&ct=s"
                                    ,"https://media3.giphy.com/media/eLkgYPUo9RA8MbSbMJ/giphy.webp?cid=790b76112q6yq4p5tmqvk5v6kh16ctf5n9zdkdp9xvxw4low&ep=v1_stickers_search&rid=giphy.webp&ct=s"
                                   ]], // Replace with your image path
                                   tooltipTheme: 'bubble',
                                   tippy_zindex:999,
                                   tip_direction:`top`,
                                       tooltipTheme: 'bubble',
                                       tippy_height:300,
                                       tippy_max_width:200,
                                       tippy_max_height:300,
                                       
                                   tooltipAutoShow: true,
                                   typewriterEffect: true,
                                   typewriterSpeed: 50,
                               
                                   closeTippyOnClick: false,
                                   zIndex: 4,
                                   imageSize:300,
                                   distance: [[130, 0]],
                               
                                   scenario: [
                                   [
                                   
                                     {
                                       delay: 2000,
                                       tooltipText:[`اوففف...انت دكر اوي`,`يالهوي يالهوي عالمز اللي جيه`,`انا جبتهم من حلاوتك`,"ما تيجي تيجي؟","مش عارف اقولك ايه بجد..بس انا مشفتش اجمل منك بني ادم","اقسم بالله ما شفت جمال بالشكل دا"]
                               
                                     },
                                     {
                                        delay: 3000,
                                        tooltipText:[`انا عاوزه...ابوسك`
                                            ,"هو انت جامد كدا ازاي؟"
                                            ,"مفيش غيرك مز فالدنيا دي"
                                            ,"عاوزه اوريك حاجه عيب"
                                            ,"انت حافظ كلمات كتير كدا ازاي"
                                            , "ما تيجي تبوسني"
                                            ,"بحبك...بحبك...بحبك (بصوت احمد السقا)"
                                            ,"ما تحصلني عالسرير"
                                        ]
                                
                                      },
                                     {
                                       delay: 18000,
                                       tooltipText: social_prop_ads
                                     },
                                 
                                 ],
                                   ],
                                   }) 
                                    },

                                {  thumbnail: 'https://media3.giphy.com/media/nFyixvuEJ4WLAPrC4b/200w.webp?cid=790b76116zs9mpi3wafw2r33byarsikdbmu4bkc6yqv3btb6&ep=v1_stickers_search&rid=200w.webp&ct=s',
                                    title: 'الكلب ابن الكلب', price: 125670, tip: 'هاو هاو! ار يو ', emoji: '🐶', type: 'شخص',
                                       callback: () => dyn_ad({
                                  
                              containerSelector: 'body', // Replace with your container selector
                              id: 'doggie',
                              position: 'fixed',
                              borderPosition: 'bottom-left',
                              popImages: [["https://media3.giphy.com/media/nFyixvuEJ4WLAPrC4b/200w.webp?cid=790b76116zs9mpi3wafw2r33byarsikdbmu4bkc6yqv3btb6&ep=v1_stickers_search&rid=200w.webp&ct=s"
                                ,"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDgwaHF5MjVldzZkeXBiazllYjZvNjQxd200eTM3N2dremMwbXp1dCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/hxcggTNqEeOiZSRiz7/200.webp"
                                ,"https://media2.giphy.com/media/TvLJmJ9h7khdC/200.webp?cid=790b76111tzxk3mier7iar19kidm4exivqs4itu2zve5mzwf&ep=v1_stickers_search&rid=200.webp&ct=s"
                                ,
                              ]], // Replace with your image path
                              tooltipTheme: 'bubble',
                              tippy_zindex:999,
                              tip_direction:`top`,
                                  tippy_height:300,
                                  tippy_max_width:200,
                                  tippy_max_height:300,
                                  
                              tooltipAutoShow: true,
                              typewriterEffect: true,
                              typewriterSpeed: 50,
                          
                              closeTippyOnClick: false,
                              zIndex: 4,
                              imageSize:300,
                              distance: [[130, 0]],
                          
                                       })
                               },

                               {  thumbnail: 'https://media2.giphy.com/media/NsdzTDwJpM7dQNmLjR/giphy.webp?cid=790b7611nsvio8nq5kwj0zowrketen4w1ekmdtg9o6kk2fuz&ep=v1_stickers_search&rid=giphy.webp&ct=s',
                                title: 'بسيط اللي اكل الحشيشة', price: 84320, tip: 'وااااااااااو', emoji: '😖', type: 'شخص',
                                   callback: () => dyn_ad({
                              
                          containerSelector: 'body', // Replace with your container selector
                          id: 'baset',
                          position: 'fixed',
                          borderPosition: 'bottom-left',
                          popImages: [["https://media2.giphy.com/media/NsdzTDwJpM7dQNmLjR/giphy.webp?cid=790b7611nsvio8nq5kwj0zowrketen4w1ekmdtg9o6kk2fuz&ep=v1_stickers_search&rid=giphy.webp&ct=s"
            
                          ]], // Replace with your image path
                          tooltipTheme: 'bubble',
                          tippy_zindex:999,
                          tip_direction:`top`,
                              tippy_height:300,
                              tippy_max_width:200,
                              tippy_max_height:300,
                              
                          tooltipAutoShow: true,
                          typewriterEffect: true,
                          typewriterSpeed: 50,
                      
                          closeTippyOnClick: false,
                          zIndex: 4,
                          imageSize:300,
                          distance: [[130, 0]],
                      
                                   })
                           },

                                    ];
// Automatically use cached items when the site loads
cachedItems.forEach(itemIndex => {
    const item = shopItems[itemIndex];
    if (item) item.callback();
});


// Global variables
let currentView = 'shop'; // Tracks the current view: 'shop' or 'bought'
let boughtItems = JSON.parse(localStorage.getItem('boughtItems')) || []; // Bought items

// Arabic translations for button text
const arabicText = {
    buy: "اشتري",
    equip: "حطه",
    unequip: "شيله",
    shop: "الكشك",
    boughtItems: "شنطتي",
    previous: "اللي فات",
    next: "اللي جي"
};

// Callback function for equip/unequip logic
function handleEquipUnequip(globalIndex) {
    if (cachedItems.includes(globalIndex)) {
        // Unequip item
        cachedItems = cachedItems.filter(i => i !== globalIndex);
    } else {
        // Check if there's an active item of the same type
        const activeItemOfSameType = cachedItems.find(i => {
            const activeItem = shopItems[i];
            return activeItem && activeItem.type === shopItems[globalIndex].type;
        });

        if (activeItemOfSameType) {
            // Deactivate the older item
            cachedItems = cachedItems.filter(i => i !== activeItemOfSameType);
        }

        // Equip the new item
        cachedItems.push(globalIndex);
    }

    // Update localStorage
    localStorage.setItem('cachedItems', JSON.stringify(cachedItems));

    // Re-render the modal based on the current view
    if (currentView === 'shop') {
        renderShopModal(currentPage);
    } else {
        renderBoughtItemsModal();
    }
}

// Render the navigation bar
function renderNavigationBar() {
    return `
        <div class="navigation-bar">
            <button class="nav-button neo-brutalism" onclick="openShop()">
                🛒 ${arabicText.shop}
            </button>
            <button class="nav-button neo-brutalism bought-items-btn" onclick="openBoughtItems()">
                🎒 ${arabicText.boughtItems}
            </button>
        </div>
    `;
}

// Open the shop modal
function openShop() {
    currentView = 'shop';
    renderShopModal(currentPage);
}

// Open the bought items modal
function openBoughtItems() {
    currentView = 'bought';
    renderBoughtItemsModal();
}

// Render the shop modal
function renderShopModal(page) {
    const sortedShopItems = shopItems.slice().sort((a, b) => a.type.localeCompare(b.type));
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = sortedShopItems.slice(startIndex, endIndex);

    const itemsHtml = itemsToShow.map((item, index) => {
        const globalIndex = shopItems.indexOf(item);
        const isBought = boughtItems.includes(globalIndex);
        const isCached = cachedItems.includes(globalIndex);
        const isExpensive = score < item.price;
        const isAffordable = score >= item.price && !isBought;

        let itemClass = '';
        if (isCached) {
            itemClass = 'purchased';
        } else if (isExpensive) {
            itemClass = 'expensive';
        } else if (isAffordable) {
            itemClass = 'affordable';
        }

        return `
            <div class="shop-item ${itemClass}" tip="${item.tip}" emoji="${item.emoji}">
                <div class="title">${item.title}</div>
                <div class="type">${item.type}</div>
                <img src="${item.thumbnail}" alt="${item.title}">
                <div class="price ${isExpensive ? 'cannot-afford' : ''}">💲${item.price}</div>
                <button class="buy-btn neo-brutalism" ${isExpensive ? 'disabled' : ''} onclick="handleBuyOrEquip(${globalIndex})">
                    ${isBought ? (isCached ? arabicText.unequip : arabicText.equip) : arabicText.buy}
                </button>
            </div>
        `;
    }).join('');

    const paginationHtml = `
        <div class="pagination">
            <button class="neo-brutalism" onclick="changePage(${page - 1})" ${page === 1 ? 'disabled' : ''}>${arabicText.previous}</button>
            <span>Page ${page} of ${Math.ceil(sortedShopItems.length / itemsPerPage)}</span>
            <button class="neo-brutalism" onclick="changePage(${page + 1})" ${endIndex >= sortedShopItems.length ? 'disabled' : ''}>${arabicText.next}</button>
        </div>
    `;

    Swal.fire({
        title: '<div class="magical-title">الكشك السحري</div>',
        html: `
            ${renderNavigationBar()}
            <div class="shop-container">${itemsHtml}</div>
            ${paginationHtml}
        `,
        width: '80%',
        background: '#1e1e1e',
        customClass: {
            popup: 'magical-modal',
            title: 'magical-title'
        },
        didOpen: () => {
            // Style the "Bought Items" button
            const boughtItemsBtn = document.querySelector('.bought-items-btn');
            if (boughtItemsBtn) {
                boughtItemsBtn.style.padding = '5px 10px';
                boughtItemsBtn.style.marginLeft = 'auto';
                boughtItemsBtn.style.color = 'black';
            }
        }
    });
}

// Handle buy or equip logic
function handleBuyOrEquip(globalIndex) {
    const item = shopItems[globalIndex];
    if (boughtItems.includes(globalIndex)) {
        // Equip/Unequip logic
        handleEquipUnequip(globalIndex);
    } else {
        // Buy logic
        if (score >= item.price) {
            boughtItems.push(globalIndex);
            score -= item.price;

            // Automatically equip the item after purchase
            handleEquipUnequip(globalIndex);

            // Update localStorage
            localStorage.setItem('boughtItems', JSON.stringify(boughtItems));
            localStorage.setItem('score', score);

            // Update the score display
            scoreDisplay.textContent = score;
        }
    }
}

// Render the bought items modal
function renderBoughtItemsModal() {
    const boughtItemsToShow = boughtItems.map(index => shopItems[index]);

    const itemsHtml = boughtItemsToShow.map((item, index) => {
        const globalIndex = shopItems.indexOf(item);
        const isCached = cachedItems.includes(globalIndex);

        return `
            <div class="shop-item ${isCached ? 'purchased' : ''}" tip="${item.tip}" emoji="${item.emoji}">
                <div class="title">${item.title}</div>
                <div class="type">${item.type}</div>
                <img src="${item.thumbnail}" alt="${item.title}">
                <div class="price">💲${item.price}</div>
                <button class="buy-btn neo-brutalism" onclick="handleEquipUnequip(${globalIndex})">
                    ${isCached ? arabicText.unequip : arabicText.equip}
                </button>
            </div>
        `;
    }).join('');

    Swal.fire({
        title: '<div class="magical-title">شنطتي</div>',
        html: `
            ${renderNavigationBar()}
            <div class="shop-container">${itemsHtml}</div>
        `,
        width: '80%',
        background: '#1e1e1e',
        customClass: {
            popup: 'magical-modal',
            title: 'magical-title'
        }
    });
}

// Change page for pagination
function changePage(newPage) {
    if (newPage < 1 || newPage > Math.ceil(shopItems.length / itemsPerPage)) return;
    currentPage = newPage;
    renderShopModal(currentPage);
}


dyn_ad({
    containerSelector: 'body', // Replace with your container selector
    id: 'tutos',
    position: 'fixed',
    borderPosition: 'bottom',
    popImages: [["https://i.ibb.co/JkjSyC1/tutico.png"
    ]], // Replace with your image path
    tooltipTheme: 'bubble',
    shuffleText: true, // Array of texts to shuffle
    shuffleTextTime: 3, // Interval in seconds

    tippy_zindex:999,
    zIndex: 4,
    imageSize:100,
    emoji: '💰',
    tip:`دوس عليا و اعمل فولو لكل الصفحات...هيتفتحلك حجات جديده و هظبطك...من غير ما تدفع جنيه`,
    distance: [[-280, -230]],
tooltipAutoShow: true,
    typewriterEffect: true,
    typewriterSpeed: 50,
    tippy_height:300,
    tippy_max_width:150,
    tippy_max_height:300,
    scenario: [
    [
    {
        delay:1000,
         tooltipText:tutorial
    },


      {
        delay: 2000,
          event: (element) => {
      
  
// Default social media items
const socialItems = [
    {
      color: '#ff0000',
      gradientColor: '#c4302b',
      size: 90,
      icon: '<svg viewBox="0 0 24 24"><path d="M12 19c-2.3 0-6.4-.2-8.1-.6-.7-.2-1.2-.7-1.4-1.4-.3-1.1-.5-3.4-.5-5s.2-3.9.5-5c.2-.7.7-1.2 1.4-1.4C5.6 5.2 9.7 5 12 5s6.4.2 8.1.6c.7.2 1.2.7 1.4 1.4.3 1.1.5 3.4.5 5s-.2 3.9-.5 5c-.2.7-.7 1.2-1.4 1.4-1.7.4-5.8.6-8.1.6 0 0 0 0 0 0z"/><path d="M9.75 15.25v-6.5L15.25 12l-5.5 3.25z"/></svg>',
      title: 'الصفحه الرسميه',
      callback: () => window.open('https://youtube.com/@tut_os', '_blank')
    },
    {
      color: '#ff3897',
      gradientColor: '#833ab4',
      size: 70,
      icon: '<svg viewBox="0 0 24 24"><path d="M16.5 7.5h.01M12 7.5c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zM12 1.5h-3.75c-3.75 0-5.25 1.5-5.25 5.25v10.5c0 3.75 1.5 5.25 5.25 5.25h7.5c3.75 0 5.25-1.5 5.25-5.25v-10.5c0-3.75-1.5-5.25-5.25-5.25H12z"/></svg>',
      title: 'لو عملت فولو الافلام بتبقي اسرع',
      callback: () => window.open('https://instagram.com/tutos.official', '_blank')
    },
    {
      color: '#ff0050',
      gradientColor: '#00f2ea',
      size: 60,
      icon: '<svg viewBox="0 0 24 24"><path d="M21 7.5v9c0 3-1.5 4.5-4.5 4.5h-9c-3 0-4.5-1.5-4.5-4.5v-9c0-3 1.5-4.5 4.5-4.5h9c3 0 4.5 1.5 4.5 4.5z"/><path d="M9.72 15.88v-7.5c0-.62.68-1 1.23-.69l6.76 3.75c.54.3.54 1.08 0 1.38l-6.76 3.75c-.55.31-1.23-.07-1.23-.69z"/></svg>',
      title: 'لو عملت فولو يجيلك افلام اكتر',
      callback: () => window.open('https://tiktok.com/@tut.os', '_blank')
    },
    
    {
      color: '#ff0050',
      gradientColor: '#00f2ea',
      size: 70,
      icon: '<svg viewBox="0 0 24 24"><path d="M21 7.5v9c0 3-1.5 4.5-4.5 4.5h-9c-3 0-4.5-1.5-4.5-4.5v-9c0-3 1.5-4.5 4.5-4.5h9c3 0 4.5 1.5 4.5 4.5z"/><path d="M9.72 15.88v-7.5c0-.62.68-1 1.23-.69l6.76 3.75c.54.3.54 1.08 0 1.38l-6.76 3.75c-.55.31-1.23-.07-1.23-.69z"/></svg>',
      title: 'هيجيلك اخر تحديثات لو عملت فولو',
      callback: () => window.open('https://tiktok.com/@araglish', '_blank')
      
    },
    
  ];
  
  // Usage: Just create a new instance to spawn the menu
  new RadialMenu(socialItems);
      score += 10
      document.querySelector(`#score-value`).innerHTML =  score
      },
          event_type: 'click'
        },

  
  ],
    ],

  });


  //notifications

  function notify(options) {
    const {
      name,
      title,
      emoji,
      message = 'No message provided.',
      position = 'right', // 'left' or 'right'
      y = 20, // pixels from top
      backgroundColor = '#ffcc00',
      textColor = '#000000',
      notificationCount = 0,
      isCache = true
    } = options;

    // Check cache only if isCache is true
    const storageKey = `notification_${name}_${title}`;
    if (isCache && localStorage.getItem(storageKey)) {
      return;
    }

    const style = document.createElement('style');
    style.textContent = `
      .notification-button {
        position: fixed;
        min-width: 120px;
        padding: 12px 24px;
        background-color: ${backgroundColor};
        color: ${textColor};
        border: 3px solid #000000;
        border-radius: 8px;
        font-family: system-ui, -apple-system, sans-serif;
        font-weight: bold;
        font-size: 14px;
        box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.8);
        cursor: pointer;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 999999;
        display: flex;
        align-items: center;
        gap: 10px;
        transform: scale(0);
        opacity: 0;
        pointer-events: none;
        top: ${y}px;
      }

      .notification-button.visible {
        transform: scale(1) translate(0, 0) !important;
        opacity: 1;
        pointer-events: auto;
      }

      .notification-button:hover {
        transform: translate(-2px, -2px) scale(1.02) !important;
        box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.8);
      }

      .notification-emoji {
        font-size: 20px;
      }

      .notification-badge {
        background-color: #ff4444;
        color: white;
        border-radius: 50%;
        min-width: 20px;
        height: 20px;
        padding: 0 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        border: 2px solid #000000;
        position: absolute;
        top: -8px;
        right: -8px;
      }


    `;
    document.head.appendChild(style);

    const button = document.createElement('div');
    button.className = 'notification-button';
    
    // Content wrapper
    const content = document.createElement('div');
    content.style.display = 'flex';
    content.style.alignItems = 'center';
    content.style.gap = '10px';

    if (emoji) {
      const emojiSpan = document.createElement('span');
      emojiSpan.className = 'notification-emoji';
      emojiSpan.textContent = emoji;
      content.appendChild(emojiSpan);
    }

    const titleSpan = document.createElement('span');
    titleSpan.textContent = title;
    content.appendChild(titleSpan);

    button.appendChild(content);

    if (notificationCount > 0) {
      const badge = document.createElement('div');
      badge.className = 'notification-badge';
      badge.textContent = notificationCount > 99 ? '99+' : notificationCount;
      button.appendChild(badge);
    }

    // Position setup
    const offset = 20;
    if (position === 'left') {
      button.style.left = `-200px`; // Start off-screen left
    } else {
      button.style.right = `-200px`; // Start off-screen right
    }

    button.addEventListener('click', async () => {
      await Swal.fire({
        title,
        html: marked.parse(message),
        background: backgroundColor,
        confirmButtonColor: backgroundColor,
        backdrop:false,
      });
      
      if (isCache) {
        localStorage.setItem(storageKey, 'shown');
      }
      
      button.style.transform = 'scale(0)';
      button.style.opacity = '0';
      setTimeout(() => button.remove(), 500);
    });

    document.body.appendChild(button);

    // Animate in based on position
    requestAnimationFrame(() => {
      if (position === 'left') {
        button.style.left = `${offset}px`;
      } else {
        button.style.right = `${offset}px`;
      }
      button.classList.add('visible');
      setTimeout(() => button.classList.add('shake'), 500);
    });
  }

  function showLeftNotification() {
    notify({
      name: 'demo-left',
      title: 'Left Notification',
      emoji: '👈',
      message: 'This notification appears on the **left** side!',
      position: 'left',
      y: 100, // 100px from top
      backgroundColor: '#4CAF50',
      textColor: '#ffffff',
      notificationCount: 1,
      isCache: false
    });
  }



