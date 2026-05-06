// pegando valores dos itens
let totalItems = document.querySelector('.total-items')
let totalUnits = document.querySelector('.total-units')
let purchasedItems = document.querySelector('.purchased-items')
let pendingItems = document.querySelector('.pending-items')

// pegando inputs
const inputItemsName = document.querySelector('.input-items-name')
const inputAmount = document.querySelector('.input-amount')
const selectCategory = document.querySelector('#select')

// botão de adicionar item
const buttonAddNewItem = document.querySelector('.button-add-items')

// pegando filtros (da esquerda) da categoria de alimentos
const filterAllItems = document.querySelector('.all-purchases')
const filterItemsFoods = document.querySelector('.foods')
const filterItemsCleaning = document.querySelector('.cleaning')
const filterItemsHygiene = document.querySelector('.hygiene')
let categoryActive = 'Todas'

// pegando filtros (da direita) de status dos items
const filterAllFilterItems = document.querySelector('.all-filter-button')
const filterAllPendingItems = document.querySelector('.all-pending-button')
let filterItemsActive = 'Todos'

// mostrar os cards
let showCards = document.querySelector('.items')

// array dos produtos
let products = []

//salvando
const dataRestore = localStorage.getItem('products')
const showDataRestore = JSON.parse(dataRestore)
if (showDataRestore !== null) {
    products = showDataRestore
}

renderCard()

filterAllItems.addEventListener('click', () => {
    categoryActive = 'Todas'
    filterItemsFoods.classList.remove('active')
    filterItemsCleaning.classList.remove('active')
    filterItemsHygiene.classList.remove('active')
    filterAllItems.classList.add('active')
    renderCard()
})


filterItemsFoods.addEventListener('click', () => {
    categoryActive = 'Alimentos'
    filterAllItems.classList.remove('active')
    filterItemsCleaning.classList.remove('active')
    filterItemsHygiene.classList.remove('active')
    filterItemsFoods.classList.add('active')
    renderCard()
})

filterItemsCleaning.addEventListener('click', () => {
    categoryActive = 'Limpeza'
    filterAllItems.classList.remove('active')
    filterItemsFoods.classList.remove('active')
    filterItemsHygiene.classList.remove('active')
    filterItemsCleaning.classList.add('active')
    renderCard()
})

filterItemsHygiene.addEventListener('click', () => {
    categoryActive = 'Higiene'
    filterAllItems.classList.remove('active')
    filterItemsFoods.classList.remove('active')
    filterItemsCleaning.classList.remove('active')
    filterItemsHygiene.classList.add('active')
    renderCard()
})

filterAllFilterItems.addEventListener('click', () => {
    filterItemsActive = 'Todos'
    filterAllFilterItems.classList.add('active-button-filter-right')
    filterAllPendingItems.classList.remove('active-button-filter-right')
    renderCard()
})

filterAllPendingItems.addEventListener('click', () => {
    filterItemsActive = 'Pendentes'
    filterAllFilterItems.classList.remove('active-button-filter-right')
    filterAllPendingItems.classList.add('active-button-filter-right')
    renderCard()
})




// função add item
buttonAddNewItem.addEventListener('click', () => {
    const valueInputName = inputItemsName.value.trim()
    const rawValueInputAmount = inputAmount.value.trim()
    const valueInputAmount = Number(rawValueInputAmount)
    const valueSelect = selectCategory.value
    let idProduct = Math.random()

    if (valueInputName === '' || valueInputName.length < 2) {
        alert('Nome é obrigatório e deve ter pelo menos 2 caracteres')
        return
    }

    if (rawValueInputAmount === '' || Number.isNaN(valueInputAmount) || valueInputAmount <= 0) {
        alert('Coloque um valor válido maior do que 0')
        return
    }

    let newProject = {
        id: idProduct,
        name: valueInputName,
        amount: valueInputAmount,
        category: valueSelect,
        purchased: false
    }

    products.push(newProject)

    saveProducts()
    renderCard()

    inputItemsName.value = ''
    inputAmount.value = ''
    selectCategory.selectedIndex = 0

})




// função para gerar card
function renderCard() {
    showCards.innerHTML = ''
    let totalUnitsCount = 0
    let purchasedItemsCount = 0
    let pendingItemsCount = 0

    let productsToShow = products

    if (categoryActive !== 'Todas') {
        productsToShow = productsToShow.filter((product) => product.category === categoryActive)
    }

    if (filterItemsActive === 'Pendentes') {
        productsToShow = productsToShow.filter((product) => product.purchased === false)
    }

    productsToShow.forEach((product, index) => {

        if (product.amount) {
            totalUnitsCount += product.amount
        }

        if (product.purchased === true) {
            purchasedItemsCount++
        } else {
            pendingItemsCount++
        }

        if (product.purchased === false) {
            // criação do card que o item não foi comprado
            const cardItems = document.createElement('div')
            cardItems.classList.add('card-items')

            const cardItemsLeft = document.createElement('div')
            cardItemsLeft.classList.add('card-items-left')

            const imgCardLeft = document.createElement('div')
            imgCardLeft.classList.add('img-card-left')
            const cutleryImg = document.createElement('img')
            cutleryImg.src = './assets/talheres.png'

            const contentItems = document.createElement('div')
            contentItems.classList.add('content-items')

            const titleItems = document.createElement('h3')
            titleItems.classList.add('title-items')
            titleItems.textContent = product.name

            const amountItem = document.createElement('p')
            const itemCount = document.createElement('span')
            const littleBallCards = document.createElement('span')
            const categoryColor = document.createElement('span')
            // adicionando as classes dentro
            categoryColor.classList.add('category-color')
            littleBallCards.classList.add('lttle-ball-card')
            littleBallCards.innerHTML = '• '
            categoryColor.textContent = product.category

            itemCount.classList.add('item-count')
            itemCount.textContent = `${product.amount} unidade(s) `
            amountItem.classList.add('amount-item')
            // colocando dentro do p
            amountItem.append(itemCount, littleBallCards, categoryColor)

            // ajeitando tudo dentro do card items left
            contentItems.append(titleItems, amountItem)

            imgCardLeft.append(cutleryImg)

            cardItemsLeft.append(imgCardLeft, contentItems)



            // card items right
            const cardItemsRight = document.createElement('div')
            cardItemsRight.classList.add('card-items-right')

            const divImgCorrectIcon = document.createElement('div')
            divImgCorrectIcon.classList.add('img-correct-icon')
            const imgCorrect = document.createElement('img')
            imgCorrect.classList.add('img-correct')
            imgCorrect.src = './assets/check-mark.png'
            divImgCorrectIcon.append(imgCorrect)

            const divImgBinIcon = document.createElement('div')
            divImgBinIcon.classList.add('img-bin-icon')
            const imgBin = document.createElement('img')
            imgBin.classList.add('img-bin')
            imgBin.src = './assets/excluir (1).png'
            divImgBinIcon.append(imgBin)

            // ajeitando tudo dentro do card items right
            cardItemsRight.append(divImgCorrectIcon, divImgBinIcon)

            // ajeitando tudo dentro do card items =
            cardItems.append(cardItemsLeft, cardItemsRight)
            showCards.append(cardItems)

            // botão para colocar o item como comprado
            imgCorrect.addEventListener('click', () => {
                product.purchased = true
                saveProducts()
                renderCard()
            })

            // botão para deletar o item
            imgBin.addEventListener('click', (index) => {
                products = products.filter((item) => item.id !== product.id)
                saveProducts()
                renderCard()
            })

            return
        }

        if (product.purchased === true) {

            // criando cards dos comprados
            const cardItemsPurchased = document.createElement('div')
            cardItemsPurchased.classList.add('card-items-purchased')

            const cardItemsLeftPurchased = document.createElement('div')
            cardItemsLeftPurchased.classList.add('card-items-left-purchased')

            const divImgCardItemsLeftPurchased = document.createElement('div')
            divImgCardItemsLeftPurchased.classList.add('img-card-items-left-purchased')
            const imgCardLeftPurchased = document.createElement('img')
            imgCardLeftPurchased.src = './assets/desentupidor.png'
            divImgCardItemsLeftPurchased.append(imgCardLeftPurchased)

            const contentItemsPurchased = document.createElement('div')
            contentItemsPurchased.classList.add('content-items-purchased')

            const titleItemsPurchased = document.createElement('h3')
            titleItemsPurchased.classList.add('title-items-purchased')
            titleItemsPurchased.textContent = product.name

            const amountItemPurchased = document.createElement('p')
            amountItemPurchased.classList.add('amount-item-purchased')
            const itemCountPurchased = document.createElement('span')
            itemCountPurchased.textContent = `${product.amount} unidades(s) `
            itemCountPurchased.classList.add('item-count-purchased')
            const littleBallCardsPurchased = document.createElement('span')
            littleBallCardsPurchased.classList.add('lttle-ball-card')
            littleBallCardsPurchased.innerHTML = '• '
            const categoryColorPurchased = document.createElement('span')
            categoryColorPurchased.textContent = product.category
            categoryColorPurchased.classList.add('category-color')

            amountItemPurchased.append(itemCountPurchased, littleBallCardsPurchased, categoryColorPurchased)
            contentItemsPurchased.append(titleItemsPurchased, amountItemPurchased)

            const cardItemsRightPurchased = document.createElement('div')
            cardItemsRightPurchased.classList.add('card-items-right-purchased')

            const statusItemPurchased = document.createElement('p')
            statusItemPurchased.classList.add('status-item-purchased')
            statusItemPurchased.innerHTML = 'Comprado'

            const divImgBinPurchased = document.createElement('div')
            divImgBinPurchased.classList.add('img-bin-purchased')
            const imgBinPurchased = document.createElement('img')
            imgBinPurchased.src = './assets/excluir (1).png'
            divImgBinPurchased.append(imgBinPurchased)


            cardItemsRightPurchased.append(statusItemPurchased, divImgBinPurchased)

            cardItemsLeftPurchased.append(divImgCardItemsLeftPurchased, contentItemsPurchased)

            cardItemsPurchased.append(cardItemsLeftPurchased, cardItemsRightPurchased)

            showCards.append(cardItemsPurchased)

            // botão para apagar o produto comprado
            imgBinPurchased.addEventListener('click', () => {
                products = products.filter((item) => item.id !== product.id)
                saveProducts()
                renderCard()
            })


            return

        }
    })

    totalItems.textContent = products.length
    totalUnits.textContent = totalUnitsCount
    purchasedItems.textContent = purchasedItemsCount
    pendingItems.textContent = pendingItemsCount
}

function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products))
}