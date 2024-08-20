if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(error => {
        console.log('Service Worker registration failed:', error);
    });
}

document.getElementById('calculate-btn').addEventListener('click', function() {
    const diameter = document.getElementById('diameter').value;
    const calcType = document.getElementById('calc-type').value;
    const weight = document.getElementById('weight').value;

    let lengthInMeters, lengthInFeet;

    if (calcType === 'weight') {
        switch (diameter) {
            case '14x14':
                lengthInMeters = weight * 10.7526;
                break;
            case '13x13':
                lengthInMeters = weight * 9.17431;
                break;
            case '12x12':
                lengthInMeters = weight * 6.09756;
                break;
            case '13x14':
                lengthInMeters = weight * 9.5;
                break;
        }
    }

    lengthInFeet = lengthInMeters * 3.28084;

    document.getElementById('length-meters').innerText = `Length: ${lengthInMeters.toFixed(2)} meters`;
    document.getElementById('length-feet').innerText = `Length: ${lengthInFeet.toFixed(2)} feet`;
});