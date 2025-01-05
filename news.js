const social_prop_ads = [`لو دوست علي تتوس وعملت لايك لمل صفحاته هيحطك في سيرفرات مدفوعه`,
    `والله لو عملت لايك وفولو لتتوس وصفحاته هتكسب دنيا و اخره`
,`تعرف ان تتوس عمل الويبسايت دا علشانك؟ يبقي لايك وفولو لصفحاته مش هتضر`
]




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
            { id: 11, thumbnail: 'https://img.freepik.com/premium-vector/botanical-seamless-pattern-floral-background-botanical-background_176161-38.jpg?semt=ais_hybrid', title: 'Item 11', price: 31200, tip: 'This is item 11', emoji: '🌙', type: 'typeB', callback: () => 
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

function openShop() {
    renderShopModal(currentPage);
}

function renderShopModal(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = shopItems.slice(startIndex, endIndex);

    const itemsHtml = itemsToShow.map((item, index) => {
        const globalIndex = startIndex + index;
        const isCached = cachedItems.includes(globalIndex);
        const isExpensive = score < item.price;
        const isAffordable = score >= item.price && !isCached;

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
                <button class="buy-btn" ${isExpensive ? 'disabled' : ''}>
                    ${isCached ? 'رجعه' : 'استخدم'}
                </button>
            </div>
        `;
    }).join('');

    const paginationHtml = `
        <div class="pagination">
            <button onclick="changePage(${page - 1})" ${page === 1 ? 'disabled' : ''}>Previous</button>
            <span>Page ${page} of ${Math.ceil(shopItems.length / itemsPerPage)}</span>
            <button onclick="changePage(${page + 1})" ${endIndex >= shopItems.length ? 'disabled' : ''}>Next</button>
        </div>
    `;

    Swal.fire({
        title: '<div class="magical-title">الكشك السحري</div>',
        html: `<div class="shop-container">${itemsHtml}</div>${paginationHtml}`,
        width: '80%',
        background: '#1e1e1e',
        customClass: {
            popup: 'magical-modal',
            title: 'magical-title'
        },
        didOpen: () => {
            document.querySelectorAll('.buy-btn').forEach((btn, index) => {
                const globalIndex = startIndex + index;
                const item = itemsToShow[index];
                btn.addEventListener('click', () => {
                    if (cachedItems.includes(globalIndex)) {
                        // Deactivate item
                        cachedItems = cachedItems.filter(i => i !== globalIndex);
                        score += item.price; // Refund the price
                    } else {
                        // Check if there's an active item of the same type
                        const activeItemOfSameType = cachedItems.find(i => {
                            const activeItem = shopItems[i];
                            return activeItem && activeItem.type === item.type;
                        });

                        if (activeItemOfSameType) {
                            // Deactivate the older item
                            cachedItems = cachedItems.filter(i => i !== activeItemOfSameType);
                            const olderItem = shopItems[activeItemOfSameType];
                            score += olderItem.price; // Refund the price
                        }

                        // Activate the new item
                        cachedItems.push(globalIndex);
                        score -= item.price; // Deduct the price
                        item.callback();
                    }
                    // Update localStorage
                    localStorage.setItem('cachedItems', JSON.stringify(cachedItems));
                    localStorage.setItem('score', score);
                    // Update the score display
                    scoreDisplay.textContent = score;
                    // Re-render the modal
                    renderShopModal(currentPage);
                });
            });
        }
    });
}

function changePage(newPage) {
    if (newPage < 1 || newPage > Math.ceil(shopItems.length / itemsPerPage)) return;
    currentPage = newPage;
    renderShopModal(currentPage);
}

