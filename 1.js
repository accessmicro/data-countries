console.log(screen.innerHeight, screen.innerWidth)
document.querySelector('#reset').addEventListener('click', e => {
    location.href = "index.html"

})
let countriesAPI = 'https://restcountries.com/v2/all'

let dataPromise = new Promise((resolve, reject) => {
    let data = fetch(countriesAPI)
        .then(result => result.json())
    resolve(data)
})
dataPromise
    .then(countries => {
        document.querySelector('.header__sumCountries').textContent = `Currently, we have ${countries.length} countries`
        let eleNameCou = document.querySelector('#nameCou')
        let eleCapitalCou = document.querySelector('#capitalCou')
        let elePopulationCou = document.querySelector('#populationCou')
        let eleSearch = document.querySelector('.search__input')

        function funcInnerInfor(arr) {
            let eleContent = document.querySelector('.content')

            for (let a of arr) {
                let eleWrapper = document.createElement('div')
                let eleContent__infor = document.createElement('ul')
                let ele1 = document.createElement('li')
                let ele2 = document.createElement('li')
                let ele3 = document.createElement('li')
                let ele4 = document.createElement('li')
                let ele5 = document.createElement('li')
                let eleImg = document.createElement('img')

                eleWrapper.className = 'wrapper'
                eleWrapper.setAttribute('data-aos', 'zoom-in')
                eleContent__infor.className = 'content__infor'
                ele1.className = 'content__flag'
                ele2.className = 'content__name'
                ele3.className = 'content__capital'
                ele4.className = 'content__language'
                ele5.className = 'content__population'

                eleImg.setAttribute('src', `${a.flag}`)
                ele2.textContent = `${a.name.toUpperCase()}`
                ele3.textContent = `Capital: ${a.capital}.`
                ele4.textContent = `Languages: ${funcArrLan(a.languages)}.`
                ele5.textContent = `Population: ${formatNumber(a.population)}.`

                eleContent.appendChild(eleWrapper)
                eleWrapper.appendChild(eleContent__infor)
                eleContent__infor.appendChild(ele1)
                eleContent__infor.appendChild(ele2)
                eleContent__infor.appendChild(ele3)
                eleContent__infor.appendChild(ele4)
                eleContent__infor.appendChild(ele5)
                ele1.appendChild(eleImg)

            }

        }

        funcInnerInfor(countries)
        ////////////////////////////////////////////

        let isBtn1 = false
        let isBtn2 = false
        let isBtn3 = false
        let b2tBtn1 = false
        let b2tBtn2 = false
        let b2tBtn3 = false
        ///////////////////////////////////////////
        elePopulationCou.addEventListener('click', e => {

            ////////////////////////////////////////////////
            let RemoveEle = (ele) => {
                while (ele.firstChild) {
                    ele.removeChild(ele.firstChild)
                }
                return ele.parentElement
            }
            let funcRemoveElePromise = new Promise((resolve, reject) => {
                let ele1 = document.querySelector('.content__flag')
                resolve(ele1)

            })
            ////////////////////////////////////////////////
            let eleNameCou = document.querySelector('#nameCou')
            let eleCapitalCou = document.querySelector('#capitalCou')
            let elePopulationCou = document.querySelector('#populationCou')

            if (isBtn3 == false) {
                elePopulationCou.innerHTML = 'Population <i class="fas fa-long-arrow-alt-up"></i>'
                eleNameCou.innerHTML = 'Name'
                eleCapitalCou.innerHTML = 'Capital'
                b2tBtn3 = true
                isBtn3 = true
                isBtn1 = false
                isBtn2 = false
                console.log(isBtn3, b2tBtn3)
            }
            else if (isBtn3 == true && b2tBtn3 == true) {
                elePopulationCou.innerHTML = 'Population <i class="fas fa-long-arrow-alt-down"></i>'
                b2tBtn3 = false
                console.log(isBtn3, b2tBtn3)
            }
            else if (isBtn3 == true && b2tBtn3 == false) {
                elePopulationCou.innerHTML = 'Population <i class="fas fa-long-arrow-alt-up"></i>'
                b2tBtn3 = true
                console.log(isBtn3, b2tBtn3)
            }


            ////////////////////////////////////////////////

            funcRemoveElePromise
                .then(ele => RemoveEle(ele))
                .then(ele => RemoveEle(ele))
                .then(ele => RemoveEle(ele))
                .then(ele => RemoveEle(ele))
            ////////////////////////////////////////////////
            let eleText = document.querySelector('.search__input').value
            let arr = funcArrText(eleText)
            let couPopulation
            b2tBtn3 ? couPopulation = arr.sort((a, b) => a.population - b.population)
                : couPopulation = arr.sort((a, b) => b.population - a.population)
            document.querySelector('.header__sumStat').textContent = funcReturnNumStat(couPopulation)
            setTimeout(() => {
                funcInnerInfor(couPopulation)
            }, 1)

        })
        ///////////////////////////////////////////
        eleCapitalCou.addEventListener('click', e => {

            ////////////////////////////////////////////////
            let RemoveEle = (ele) => {
                while (ele.firstChild) {
                    ele.removeChild(ele.firstChild)
                }
                return ele.parentElement
            }
            let funcRemoveElePromise = new Promise((resolve, reject) => {
                let ele1 = document.querySelector('.content__flag')
                resolve(ele1)

            })
            ////////////////////////////////////////////////
            let eleCapitalCou = document.querySelector('#capitalCou')
            let eleNameCou = document.querySelector('#nameCou')
            let elePopulationCou = document.querySelector('#populationCou')

            if (isBtn2 == false) {
                eleCapitalCou.innerHTML = 'Capital <i class="fas fa-long-arrow-alt-up"></i>'
                eleNameCou.innerHTML = 'Name'
                elePopulationCou.innerHTML = 'Population'
                b2tBtn2 = true
                isBtn1 = false
                isBtn2 = true
                isBtn3 = false
            }
            else if (isBtn2 == true && b2tBtn2 == true) {
                eleCapitalCou.innerHTML = 'Capital <i class="fas fa-long-arrow-alt-down"></i>'
                b2tBtn2 = false
            }
            else if (isBtn2 == true && b2tBtn2 == false) {
                eleCapitalCou.innerHTML = 'Capital <i class="fas fa-long-arrow-alt-up"></i>'
                b2tBtn2 = true
            }


            ////////////////////////////////////////////////

            funcRemoveElePromise
                .then(ele => RemoveEle(ele))
                .then(ele => RemoveEle(ele))
                .then(ele => RemoveEle(ele))
                .then(ele => RemoveEle(ele))
            ////////////////////////////////////////////////
            let eleText = document.querySelector('.search__input').value
            let arr = funcArrText(eleText)
            let couPopulation = arr.sort((a, b) => {
                var x = a.capital.toLowerCase();
                var y = b.capital.toLowerCase();
                if (x < y) { return -1; }
                if (x > y) { return 1; }
            })
            b2tBtn2 ? couPopulation
                : couPopulation = couPopulation.reverse()
            document.querySelector('.header__sumStat').textContent = funcReturnNumStat(couPopulation)
            setTimeout(() => {
                funcInnerInfor(couPopulation)
            }, 1)

        })
        ////////////////////////////////////////////////
        eleNameCou.addEventListener('click', e => {
            ////////////////////////////////////////////////
            let RemoveEle = (ele) => {
                while (ele.firstChild) {
                    ele.removeChild(ele.firstChild)
                }
                return ele.parentElement
            }
            let funcRemoveElePromise = new Promise((resolve, reject) => {
                let ele1 = document.querySelector('.content__flag')
                resolve(ele1)

            })
            ////////////////////////////////////////////////
            let eleNameCou = document.querySelector('#nameCou')
            let eleCapitalCou = document.querySelector('#capitalCou')
            let elePopulationCou = document.querySelector('#populationCou')

            if (isBtn1 == false) {
                eleNameCou.innerHTML = 'Name <i class="fas fa-long-arrow-alt-up"></i>'
                eleCapitalCou.innerHTML = 'Capital'
                elePopulationCou.innerHTML = 'Population'
                b2tBtn1 = true
                isBtn1 = true
                isBtn2 = false
                isBtn3 = false
            }
            else if (isBtn1 == true && b2tBtn1 == true) {
                eleNameCou.innerHTML = 'Name <i class="fas fa-long-arrow-alt-down"></i>'
                b2tBtn1 = false
            }
            else if (isBtn1 == true && b2tBtn1 == false) {
                eleNameCou.innerHTML = 'Name <i class="fas fa-long-arrow-alt-up"></i>'
                b2tBtn1 = true
            }


            ////////////////////////////////////////////////

            funcRemoveElePromise
                .then(ele => RemoveEle(ele))
                .then(ele => RemoveEle(ele))
                .then(ele => RemoveEle(ele))
                .then(ele => RemoveEle(ele))
            ////////////////////////////////////////////////
            let eleText = document.querySelector('.search__input').value
            let arr = funcArrText(eleText)
            let couPopulation = arr.sort((a, b) => {
                var x = a.name.toLowerCase();
                var y = b.name.toLowerCase();
                if (x < y) { return -1; }
                if (x > y) { return 1; }
            })
            document.querySelector('.header__sumStat').textContent = funcReturnNumStat(couPopulation)
            b2tBtn1 ? couPopulation
                : couPopulation = couPopulation.reverse()
            setTimeout(() => {
                funcInnerInfor(couPopulation)
            }, 1)
        })

        ///////////////////////////////////////////
        eleSearch.addEventListener('input', e => {
            ////////////////////////////////////////////////
            let RemoveEle = (ele) => {
                while (ele.firstChild) {
                    ele.removeChild(ele.firstChild)
                }
                return ele.parentElement
            }
            let funcRemoveElePromise = new Promise((resolve, reject) => {
                let ele1 = document.querySelector('.content__flag')
                resolve(ele1)

            })
            funcRemoveElePromise
                .then(ele => RemoveEle(ele))
                .then(ele => RemoveEle(ele))
                .then(ele => RemoveEle(ele))
                .then(ele => RemoveEle(ele))
            ////////////////////////////////////////////////

            setTimeout(() => {
                let text = e.target.value
                let arr = funcArrText(text)

                document.querySelector('.header__sumStat').textContent = funcReturnNumStat(arr)
                if (isBtn1 && b2tBtn1) {
                    arr = arr.sort((a, b) => {
                        var nameA = a.name.toLowerCase()
                        var nameB = b.name.toLowerCase()
                        if (nameA < nameB)
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0
                    })
                }
                else if (isBtn1 && b2tBtn1 == false) {
                    arr = arr.sort((a, b) => {
                        var nameA = a.name.toLowerCase()
                        var nameB = b.name.toLowerCase()
                        if (nameA < nameB)
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0
                    }).reverse()
                }
                else if (isBtn2 && b2tBtn2) {
                    arr = arr.sort((a, b) => {
                        var nameA = a.capital.toLowerCase()
                        var nameB = b.capital.toLowerCase()
                        if (nameA < nameB)
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0
                    })
                }
                else if (isBtn2 && !b2tBtn2) {
                    arr = arr.sort((a, b) => {
                        var nameA = a.capital.toLowerCase()
                        var nameB = b.capital.toLowerCase()
                        if (nameA < nameB)
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0
                    }).reverse()
                }
                else if (isBtn3 && b2tBtn3) {
                    arr = arr.sort((a, b) => a.population - b.population)
                }
                else if (isBtn3 && !b2tBtn3) {
                    arr = arr.sort((a, b) => b.population - a.population)
                }
                funcInnerInfor(arr)
            }, 0.1);


        })
        ///////////////////////////////////////////
        function funcArrText(text) {
            let reg = new RegExp(text, 'gi')
            let arr = countries.filter(a => {
                if (reg.test(a.capital) || reg.test(a.name) || reg.test(a.languages.join(', '))) {
                    return a
                }
            })

            return arr
        }

        function formatNumber(num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
        }
        let funcReturnNumStat = (arr) => {
            return `${arr.length} countries satisfied the search criteria`
        }
        function funcArrLan(arr) {
            let str = arr.map(a => {
                return a.name
            }
            ).join(', ')
            return str
        }
        //         languages: Array(3)
        // 0: {iso639_1: "ps", iso639_2: "pus", name: "Pashto", nativeName: "پښتو"}
        // 1: {iso639_1: "uz", iso639_2: "uzb", name: "Uzbek", nativeName: "Oʻzbek"}
        // 2: {iso639_1: "tk", iso639_2: "tuk", name: "Turkmen", nativeName: "Türkmen"}
    })
