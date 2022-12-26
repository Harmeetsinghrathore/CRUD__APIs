exports._throw400 = (response, errorMessage) => {
    return response.status(400).send({detail : errorMessage});
}


exports._throw401 = (response, errorMessage) => {
    return response.status(401).send({detail : errorMessage});
}


exports._throw404 = (response, errorMessage) => {
    return response.status(404).send({detail : errorMessage});
}


exports._throw500 = (response, error) => {

    console.log('---------- INTERNAL SERVER ERROR ------------');
    console.log(error);
    return response.status(500).send({detail : 'Internal server error', error : error});


}