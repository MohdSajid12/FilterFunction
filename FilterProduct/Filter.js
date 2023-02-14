

        const listitem = document.querySelectorAll('ul li')
        const images = document.querySelectorAll('.images img')

        listitem.forEach(li =>{
            li.onclick = function(){

                const value =  li.textContent;
                console.log(value)
                images.forEach(img =>{
                    img.style.display = 'none';
                    if(img.getAttribute('data-filter')==value.toLowerCase() || value == 'All Menu'){
                        img.style.display = 'block';
                    }
                })
            }
        })
        