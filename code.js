Telegram.WebApp.ready(() => {
            const initData = Telegram.WebApp.initDataUnsafe;
            if (initData && initData.start_param) {
                const startParam = initData.start_param;
                console.log("Получен параметр:", startParam);
                document.getElementById('param-display').textContent = `Полученный параметр: ${startParam}`;
            } else {
                console.log("Параметр startapp не найден.");
                document.getElementById('param-display').textContent = "Параметр не передан.";
            }
        
	        
	        // Пример массива URL-адресов фотографий (замените на свои)
	        const imageUrls = [
	            "https://static.ticimax.cloud/cdn-cgi/image/width=800,quality=99/7656/uploads/urunresimleri/buyuk/agent-fusya-kroko-cizme-ecenin-butigi-26c8da.jpeg",
	            "https://static.ticimax.cloud/cdn-cgi/image/width=800,quality=99/7656/uploads/urunresimleri/buyuk/agent-fusya-kroko-cizme-ecenin-butigi-0-f761.jpeg",
	            "https://static.ticimax.cloud/cdn-cgi/image/width=800,quality=99/7656/uploads/urunresimleri/buyuk/agent-fusya-kroko-cizme-ecenin-butigi-7516dd.jpeg",
	            "https://static.ticimax.cloud/cdn-cgi/image/width=800,quality=99/7656/uploads/urunresimleri/buyuk/agent-fusya-kroko-cizme-ecenin-butigi-62f-49.jpeg"
	        ];
	
	        const carouselWrapper = document.getElementById('carouselWrapper');
	        const prevBtn = document.getElementById('prevBtn');
	        const nextBtn = document.getElementById('nextBtn');
	        const dotsContainer = document.getElementById('dotsContainer');
	
	        let currentIndex = 0;
	        const itemWidth = 100; // Ширина одного элемента в процентах
	
	        function updateCarousel() {
	            carouselWrapper.style.transform = `translateX(-${currentIndex * itemWidth}%)`;
	            updateDots();
	        }
	
	        function updateDots() {
	            dotsContainer.innerHTML = '';
	            imageUrls.forEach((_, index) => {
	                const dot = document.createElement('div');
	                dot.classList.add('dot');
	                if (index === currentIndex) {
	                    dot.classList.add('active');
	                }
	                dot.addEventListener('click', () => {
	                    currentIndex = index;
	                    updateCarousel();
	                });
	                dotsContainer.appendChild(dot);
	            });
	        }
	
	        function nextSlide() {
	            currentIndex = (currentIndex + 1) % imageUrls.length;
	            updateCarousel();
	        }
	
	        function prevSlide() {
	            currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
	            updateCarousel();
	        }
	
	        // Добавление изображений в карусель
	        imageUrls.forEach(url => {
	            const carouselItem = document.createElement('div');
	            carouselItem.classList.add('carousel-item');
	            const img = document.createElement('img');
	            img.src = url;
	            carouselItem.appendChild(img);
	            carouselWrapper.appendChild(carouselItem);
	        });
	
	        // Обработчики событий для кнопок навигации
	        nextBtn.addEventListener('click', nextSlide);
	        prevBtn.addEventListener('click', prevSlide);
	
	        // Инициализация карусели и индикаторов
	        updateCarousel();
	});
