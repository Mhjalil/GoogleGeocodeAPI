
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

    // Address components
    let addressComponents = response.data.results[0].address_components;
    let addressComponentsOutput = '<ul class="list-group">';
    for (let i = 0; i < addressComponents.length; i++) {
        addressComponentsOutput +=`
        <li class="list-group-item"><strong>${addressComponents[i].types[0]}:</strong>${addressComponents[i].long_name}</li>
        `;
    }
    addressComponentsOutput += '</ul>'
    
    // Output to app
    document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
    document.getElementById('address-components').innerHTML = addressComponentsOutput;
})
.then(function(error) {
    console.log(error);  
});        
} 
