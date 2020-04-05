export async function getData(filters) {
  try{
    let response = await fetch('./data/data.json');
    let data = await response.json();
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!filters || filters.length === 0) {
          resolve(data); 
        } else {
          let filteredData = [];
          filteredData = data.filter(ad => {
            let features = [ad.role, ad.level, ...(ad.languages || []), ...(ad.tools || [])];
            return filters.some(f => features.indexOf(f) >= 0);
          });
          resolve(filteredData);
        }
      }, 500);
    });
  } catch(err) {
    console.error(err)
  }
}
