(function(){

    const productGroups = document.querySelectorAll('.productGroup')
    const products = document.querySelectorAll('.product')

    productGroups.forEach((productGroup)=> {
        productGroup.addEventListener('click', (e) => {
            e.preventDefault()
            const filter = e.target.dataset.filter
            
            products.forEach((product)=> {
                if (filter === 'all'){
                    product.style.display = 'block'
                } else {
                    if (product.classList.contains(filter)){
                        product.style.display = 'block'
                    } else {
                        product.style.display = 'none'
                    }
                }
            })
        })
    })

})();

//wire up filter search box
(function(){

    const searchBox = document.querySelector('.search-item')
    const products = document.querySelectorAll('.product')

    searchBox.addEventListener('keyup', (e) => {
    
        const searchFilter = e.target.value.toLowerCase().trim()
        //display only items that contain filter input

        products.forEach((item) => {
            if (item.textContent.includes(searchFilter)){
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    })

})();