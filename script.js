//your code here
let bandNames = ['The Beatles', 'Anarchy in the UK', 'The Rolling Stones', 'Aerosmith', 'The Who'];

// Function to remove articles and sort band names lexicographically
function sortBandNames(bands) {
    return bands
        .map(band => {
            // Remove articles 'a', 'an', 'the' from the start of the band names
            return band.replace(/^(a |an |the )/i, '');
        })
        .sort((a, b) => a.localeCompare(b))
        .map(band => {
            // Restore the articles to the original band names
            const originalBand = bands.find(b => b.toLowerCase().startsWith(band.toLowerCase()));
            return originalBand;
        });
}

const sortedBandNames = sortBandNames(bandNames);

// Create the HTML elements and insert them into the DOM
const ul = document.getElementById('band');
sortedBandNames.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    ul.appendChild(li);
});
