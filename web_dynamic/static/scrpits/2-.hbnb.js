$(() => {
    let amenitiesList = {};

    function updateApiStatus() {
        $.get('http://0.0.0.0:5001/api/v1/status/', (data) => {
            if (data.status === 'OK') {
                // Add the class 'available' to the div#api_status
                $('div#api_status').addClass('available');
            } else {
                // Remove the class 'available' from div#api_status
                $('div#api_status').removeClass('available');
            }
        });
    }

    updateApiStatus();
    
    $('input[type="checkbox"]').on('change', function () {
        const amenityId = $(this).data('id');
        const amenityName = $(this).data('name');

        if (this.checked) {
            amenitiesList[amenityId] = amenityName;
        } else {
            delete amenitiesList[amenityId];
        }
        const amenityNames = Object.values(amenitiesList).join(', ');
        $('.amenities h4').text(amenityNames);
    });
});s