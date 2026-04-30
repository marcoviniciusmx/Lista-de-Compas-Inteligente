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

// pegando filtros (da direita) de status dos items
const filterAllPurchasedItems = document.querySelector('.all-filter-button')
const filterAllPendingItems = document.querySelector('.all-pending-button')
