
const getProducts = async () => {
    const response = await fetch('js/products.json') 
    const data = await response.json()
    return data
}


const numberFormat = new Intl.NumberFormat ("pt-BR", {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,

})

const generateCards = async () => {

    const products = await getProducts()

    products.map(product => {
        let card = document.createElement('div')
        card.classList.add('card-produto')

        card.innerHTML = `
        <figure>
            <img src="./images/${product.image}" alt="${product.product_name}">
        </figure>

        <div class="legenda">
            <h4>${product.product_name}</h4>
            <h5>${product.product_model}</h5>
        </div>   

        <h6>${numberFormat.format(product.price)}</h6>
        `

        const listaProdutos = document.querySelector('.lista-produtos')
        listaProdutos.appendChild(card)
    })
}

