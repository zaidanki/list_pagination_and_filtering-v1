/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/



// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing
const pag = document.querySelector('.page');
const li = document.querySelectorAll('li');
const headt = document.querySelector('h2').parentNode;

const searchDiv = document.createElement('div')
const search = document.createElement('button')
const searchText = document.createElement('input')
search.textContent = 'Search'
searchDiv.className = 'student-search'
headt.appendChild(searchDiv)
searchDiv.appendChild(searchText)
searchDiv.appendChild(search)
let inps = document.getElementsByTagName('input')

for (let i = 0; i < li.length; i++) {
    li[i].style.display = ''
    li[i].id = 'displayed'
}

let idSearch = document.querySelectorAll('#displayed')
console.log(idSearch.length)

function showPage(num) {
    for (let i = 0; i < idSearch.length; i++) {
        li[i].style.display = 'none'
    } //this code is to make sure there is no names displayed
    const pn = parseInt(num) * 10
    const pv = (parseInt(num) - 1) * 10
    for (let i = 0; i < li.length; i++) {
        if (li[i].id == 'displayed') {
            for (let z = pv; z < pn; z++)
                if (z < idSearch.length) {
                    li[z].style.display = ''

                } // this is for when we want to display 10 names or less on page.
        }
    }
};

showPage(1) //running it once for first page as to not have a bland page

function appendPageLinks() { // creating and appending pagnations
    const div = document.createElement('div')
    const pUl = document.createElement('ul')
    div.className = 'pagination'
    pag.appendChild(div)
    div.appendChild(pUl)
    var pn = 1
    for (let i = 0; i < idSearch.length; i += 10) {
        console.log(pn)
        const pLi = document.createElement('li')
        const aref = document.createElement('a')
        aref.textContent = pn
        aref.href = '#'
        pUl.appendChild(pLi)
        pLi.appendChild(aref)
        pn += 1
    }
    const newdiv = document.querySelector('.pagination')
    const ar = newdiv.querySelectorAll('a')
    ar[0].className = 'active' // giving the active to the first pagnation
    newdiv.addEventListener('click', (e) => {
        if (e.target.tagName == 'A') {
            let pn = e.target.textContent
            for (let i = 0; i < ar.length; i++) {
                ar[i].className = '' //removing active classname from all of them
            }
            e.target.className = 'active' // adding active classname to the pressed one
            showPage(parseInt(pn)) //showing page that corresponds witht he number pn(page number)
        }
    })
}
appendPageLinks();
