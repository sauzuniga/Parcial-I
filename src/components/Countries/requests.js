const BASE_URL = "https://restcountries.com/";
const createUrl = (path) => new URL(path, BASE_URL);

const getAllCountries = createUrl("/v3.1/capital");
const getbyRegion = (regionName) => createUrl(`/v3.1/region/${capitalName}`)


export default {
    BASE_URL,
    getAllCountries,
    getbyRegion
};