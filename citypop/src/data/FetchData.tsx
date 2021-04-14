const username: string = 'username=weknowit&';
const path: string = 'http://api.geonames.org/searchJSON?' + username;

const formatNumber = (num: number) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
}

export const getCityPopulation = (city: string) => {

    const api: string = path + 'featureCode=PPLA&featureCode=PPLS&featureCode=PPLC&maxRows=1&name_equals=' + city;

    return fetch(api).then(
        (res) => res.json().then(
            (result) => {
                console.log("result is: ", result);
                console.log("City population ", result.geonames[0].population);

                if (result.totalResultsCount === 1) {
                    let population = formatNumber(result.geonames[0].population);
                    return population;
                }
                else {
                    return console.error("City not found");
                }
            },
            (err) => {
                return console.error(err);
            }
        )
    );
}

export const getMostPopulatedCities = async (country: string) => {

    return getCountryCode(country).then(
        async (res) => {
            return getCities(res)
        }, (err) => {
            return console.error(err)
        }
    )
}

const getCountryCode = async (country: string) => {

    const api: string = path + 'featureClass=A&featureCode=PCLI&maxRows=1&name=' + country;

    return fetch(api).then(
        (res) => res.json().then(
            (result) => {
                if (result.totalResultsCount > 0)
                    return result.geonames[0].countryCode;
                else
                    return console.error("Country not found");
            },
            (err) => {
                return console.error(err);
            }
        )
    );
}

const getCities = async (country: string) => {

    const api: string = path + 'featureCode=PPLA&featureCode=PPLS&featureCode=PPLC&maxRows=3&orderby=population&country=' + country;

    return fetch(api).then(
        (res) => res.json().then(
            (result) => {

                if (result.geonames.length > 0) {
                    let cities: string[] = [];

                    result.geonames.forEach((entry: any) => {
                        cities.push(entry.name)
                    });

                    return cities;
                } else {
                    return console.error("Could not find country")
                }
            },
            (err) => {
                return console.error(err);
            }
        )
    );
}



