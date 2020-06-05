if (document.readyState =='loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    document.getElementsByClassName('btn-header')[0].addEventListener('click', randomFact)
}

function randomFact() {
    randomOrangeFacts = [
        'Oranges are the largest citrus fruit in the world',
        'Orange juice is the most popular fruit juice in America',
        'There are over 600 varieties of oranges',
        'Florida is the top orange producer in the United States',
        'Spain has over 35 million orange trees',
        'Marmalade is orange jam',
        'Oranges have lots of vitamin C',
        'There are typically ten segments inside an orange'
    ]
    alert('Fact: ' + randomOrangeFacts[Math.floor(Math.random() * randomOrangeFacts.length)])

}