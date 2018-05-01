
// Call Geocode
geocode();

// Geocode Function
function geocode() {
    var location = '40 Duncan st West End Brisbane QLD';
    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
    params: {
        address: location,
        key: 'AIzaSyA02hYE9vXQeHEZZu7l4dQJzkzxTWfA6zk'
    }
})
.then(function(response) {
    // Log full response
    console.log(response); 
    
    // Formatted Address
    var formattedAddress = response.data.results[0].formatted_address;
    var formattedAddressOutput = `
    <ul class="list-group">
    <li class="list-group-item">${formattedAddress}</li>
    </ul>
    `;
    
    // Output to app
    document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
})
.then(function(error) {
    console.log(error);  
});        
} 
