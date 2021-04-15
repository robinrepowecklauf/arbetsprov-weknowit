const username: string = 'username=weknowit&';
const path: string = 'http://api.geonames.org/searchJSON?' + username;

/**
 * 
 * @param num The number to format 
 * @returns A formatted string divided into thousands and millions
 */
const formatNumber = (num: number) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
}

/**
 * 
 * @param city The city to find a populated in
 * @returns The city's population
 */

export const getCityPopulation = (city: string) => {

    const api: string = path + 'featureCode=PPLA&featureCode=PPLS&featureCode=PPLC&maxRows=1&name_equals=' + city;

    return fetch(api).then(
        (res) => res.json().then(
            (result) => {

                if (result.totalResultsCount === 1) {
                    let population = formatNumber(result.geonames[0].population);
                    return population;
                }
                else {
                    return "City does not exist";
                }
            },
            (err) => {
                return err;
            }
        )
    );
}

/**
 * 
 * @param country The country to find three most populated cities in  
 * @returns Three most populated cities for a given country
 */

export const getMostPopulatedCities = async (country: string) => {

    return getCountryCode(country).then(
        async (res) => {
            return getCities(res);
        }, (err) => {
            return err;
        }
    )
}

/**
 * 
 * @param country The country to find its CountryCode
 * @returns The CountryCode for a given country
 */

const getCountryCode = async (country: string) => {

    const api: string = path + 'featureClass=A&featureCode=PCLI&maxRows=1&name=' + country;

    return fetch(api).then(
        (res) => res.json().then(
            (result) => {
                if (result.totalResultsCount > 0)
                    return result.geonames[0].countryCode;
                else
                    return "Country does not exist";
            },
            (err) => {
                return err;
            }
        )
    );
}

/**
 * 
 * @param country CountryCode for a country
 * @returns Three most populated cities for a country
 */

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
                    return "Country does not exist";
                }
            },
            (err) => {
                return err;
            }
        )
    );
}



