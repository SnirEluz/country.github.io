$.get("https://restcountries.com/v3.1/all", data => {
    console.log(data[0].flag)
    // -------AllCountries001--------//
    for (let i = 0; i < data.length; i++) {
        createAllDiv(data, data[i].name.common, data[i].population, data[i].flag)
    }
    // -------AllCountries002--------//
    $(".btnAll").click(function () {
        $(".citizensCountriesDiv").remove()
        $(".inpSearch").val("")
        for (let i = 0; i < data.length; i++) {
            createAllDiv(data, data[i].name.common, data[i].population, data[i].flag)
        }
    })
    // -------SpecificsCountries--------//
    $(".btnSearch").click(function () {
        $(".citizensCountriesDiv").remove()
        $.get(`https://restcountries.com/v3.1/name/${$(".inpSearch").val()}`, secondData => {
            for (let i = 0; i < secondData.length; i++) {
                createAllDivForSearch(secondData, secondData[i].name.common, secondData[i].population)
            }
        });
    })
});
function createAllDiv(data, name, population, flag) {
    $(".totalCountries").text(`Total Countries: ${data.length}`)
    // -------Reduce--------//
    let reducePopulation = data.reduce(function (sum, value) { return sum + value.population; }, 0)
    let average = data.reduce(function (sum, value) { return sum + value.population; }, 0) / data.length;
    $(".totalCountriesPopulation").text(`Total Countries Population: ${(reducePopulation).toLocaleString("en-GB")}`)
    $(".averagePopulation").text(`Average Population: ${(average).toLocaleString("en-GB", { maximumFractionDigits: 0 })}`)
    // -------All--------//
    $(".mainCountriesDiv").html($(".mainCountriesDiv").html() + `
         <div class="citizensCountriesDiv">
            <div class="citizensCountriesDivLeft">
                <h1 class="citizensCountriesDivLeftName">${name + flag}</h1>
            </div>
            <div class="citizensCountriesDivRight">
                <h1 class="citizensCountriesDivLeftName">${population.toLocaleString("en-GB", { maximumFractionDigits: 0 })}</h1>
            </div>
        </div>
    `)
    // -------numberOfCountries--------//
    let africa = data.filter(x => x.region == 'Africa').length;
    let americas = data.filter(x => x.region == 'Americas').length;
    let asia = data.filter(x => x.region == 'Asia').length;
    let europe = data.filter(x => x.region == 'Europe').length;
    let oceania = data.filter(x => x.region == 'Oceania').length;
    $(".numbersCountriesDivLeftNumberAfrica").text(africa)
    $(".numbersCountriesDivLeftNumberAmericas").text(americas)
    $(".numbersCountriesDivLeftNumberAsia").text(asia)
    $(".numbersCountriesDivLeftNumberEurope").text(europe)
    $(".numbersCountriesDivLeftNumberOceania").text(oceania)
}
function createAllDivForSearch(secondData, name, population, flag) {
    $(".totalCountries").text(`Total Countries: ${secondData.length}`)
    // -------Reduce--------//
    let reducePopulation = secondData.reduce(function (sum, value) { return sum + value.population; }, 0)
    let average = secondData.reduce(function (sum, value) { return sum + value.population; }, 0) / secondData.length;
    $(".totalCountriesPopulation").text(`Total Countries Population: ${(reducePopulation).toLocaleString("en-GB")}`)
    $(".averagePopulation").text(`Average Population: ${(average).toLocaleString("en-GB", { maximumFractionDigits: 0 })}`)
    // -------All--------//
    $(".mainCountriesDiv").html($(".mainCountriesDiv").html() + `
         <div class="citizensCountriesDiv">
            <div class="citizensCountriesDivLeft">
                <h1 class="citizensCountriesDivLeftName">${name}</h1>
            </div>
            <div class="citizensCountriesDivRight">
                <h1 class="citizensCountriesDivLeftName">${population.toLocaleString("en-GB", { maximumFractionDigits: 0 })}</h1>
            </div>
        </div>
    `)
    // -------numberOfCountries--------//
    let africa = secondData.filter(x => x.region == 'Africa').length;
    let americas = secondData.filter(x => x.region == 'Americas').length;
    let asia = secondData.filter(x => x.region == 'Asia').length;
    let europe = secondData.filter(x => x.region == 'Europe').length;
    let oceania = secondData.filter(x => x.region == 'Oceania').length;
    $(".numbersCountriesDivLeftNumberAfrica").text(africa)
    $(".numbersCountriesDivLeftNumberAmericas").text(americas)
    $(".numbersCountriesDivLeftNumberAsia").text(asia)
    $(".numbersCountriesDivLeftNumberEurope").text(europe)
    $(".numbersCountriesDivLeftNumberOceania").text(oceania)
}