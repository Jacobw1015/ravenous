const apiKey = '0L3RWCVGHmZPwKgiHMYi6V7eqKaPj_jZ9wFT0Ig7E-eXb8GD-oE6eYnoOW_uzE6hH4ANAY3tq8aOAyuC2nahkKkNClm_QdmFTcvvQAzwJICnLFDqRHYT6OR-zWJqYHYx';
const yelp ={
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    };
                });
            }
        });
    },
}
export default yelp;