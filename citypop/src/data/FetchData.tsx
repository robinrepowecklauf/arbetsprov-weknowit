const username: string = 'username=weknowit&';
const path: string = 'http://api.geonames.org/searchJSON?' + username;

export const getCityPopulation = (city: string) => {

    const api: string = path + 'featureCode=PPLA&featureCode=PPLS&featureCode=PPLC&maxRows=1&name_equals=' + city;

    fetch(api).then(
        (res) => res.json().then(
            (result) => {
                if (result.totalResultsCount === 1)
                    return result.geonames[0].population;
                else
                    return null;
            },
            (err) => {
                console.error(err);
                return null;
            }
        )
    );
}