document.addEventListener("DOMContentLoaded", function () {

    const rubricatorCategories = [
        "саморазвитие",
        "сервисы",
        "юзабилити",
        "системы управления",
        "кейсы",
        "вопрос-ответ",
        "seo-софт"
    ];


    const counts = {};
    rubricatorCategories.forEach(category => {
        counts[category] = 0; 
    });

  
    document.querySelectorAll('.article_tag_text').forEach(tag => {
        const text = tag.textContent.trim().toLowerCase(); 
        if (counts.hasOwnProperty(text)) {
            counts[text]++;
        }
    });

    document.querySelectorAll('.rubricator_list a').forEach(link => {
        const rubricText = link.textContent.split(' (')[0].toLowerCase(); 
        if (counts.hasOwnProperty(rubricText)) {
            link.textContent = `${rubricText.charAt(0).toUpperCase() + rubricText.slice(1)} (${counts[rubricText]})`; 
        }


        link.addEventListener('click', function (event) {
            event.preventDefault(); 

            const selectedCategory = rubricText; 

         
            document.querySelectorAll('.article_block').forEach(article => {
                article.style.display = 'none'; 
            });

            document.querySelectorAll('.article_tag_text').forEach(tag => {
                const tagText = tag.textContent.trim().toLowerCase();
                if (tagText === selectedCategory) {
                    tag.closest('.article_block').style.display = 'block'; 
                }
            });
        });
    });

    const pageNumbers = document.querySelectorAll(".pages_numbers_num");
    document.addEventListener("mouseover", (event) => {
        if (event.target.classList.contains("pages_numbers_num") && !event.target.classList.contains("active")) {
            event.target.classList.toggle("active")
        }
    });
    document.addEventListener("mouseout", (event) => {
        if (event.target.classList.contains("pages_numbers_num") && event.target.classList.contains("active")) {
            event.target.classList.remove("active")
            pageNumbers[0].classList.add("active")
        }
    });

    const dropText = document.querySelectorAll(".header_drop_text");
    const dropMenus = document.querySelectorAll(".drop_menu");

    dropText.forEach((text, index) => {
        text.addEventListener("mouseover", () => {

            if (index < dropText.length - 2) {
                dropMenus[index].style.display = "block";

              
                const rect = text.getBoundingClientRect();

              
                dropMenus[index].style.top = `${rect.bottom + window.scrollY}px`;
                dropMenus[index].style.left = `${rect.left}px`; 
            }
        });

        text.addEventListener("mouseout", () => {
            if (index < dropText.length - 2) {
               
                setTimeout(() => {
                    if (!dropMenus[index].matches(':hover') && !text.matches(':hover')) {
                        dropMenus[index].style.display = "none"; 
                    }
                }, 100); 
            }
        });
    });

    
    dropMenus.forEach((menu, index) => {
        menu.addEventListener("mouseenter", () => {
            menu.style.display = "block"; 
        });

        menu.addEventListener("mouseleave", () => {
            menu.style.display = "none"; 
        });
    });

    const dropBurgerMenu = document.querySelector(".drop_burger_menu")
    const burgerMenu = document.querySelector(".burger_menu_lines")
    burgerMenu.addEventListener("click", () => {
        dropBurgerMenu.classList.toggle("burger_show")
    })

    const rubricatorTitle = document.querySelectorAll(".rubricator_title")
    const plus = document.querySelectorAll(".rub_title_phone")



    rubricatorTitle.forEach((text, index) => {
        text.addEventListener("click", () => {
           
            if (plus[index].textContent.trim() === "+") {
                plus[index].textContent = "-";
            } else {
                plus[index].textContent = "+";
            }
        })
    })

    
    

});

