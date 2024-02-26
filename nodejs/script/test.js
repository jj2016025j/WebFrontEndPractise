
fetch("https://datacenter.taichung.gov.tw/swagger/OpenData/86dfad5c-540c-4479-bb7d-d7439d34eeb1")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

    })
    .catch(function (error) {
        console.log(error);
    })
