import bcrypt from 'bcryptjs'
export default {
    users : [
        {
            name : 'Moussa',
            email : 'moussa@kllsdl.fr',
            password : bcrypt.hashSync('1234',8),
            isAdmin : true
        },
        {
            name : 'Moussaaa',
            email : 'moussa@hotmail.fr',
            password : bcrypt.hashSync('1234',8),
            isAdmin : false
        },
    ],
    products : [
        {
           
            name : 'Nike slim Shirt',
            category : 'Shirt',
            image : '/images/product-1.jpg',
            brand : 'Addidas',

            price : 120,
            countInStock : 10,
            raiting : 3.5,
            numReviews : 10,
            description : 'super basket troptrop stylé'
        },
        {
            
            name : 'Nike Air max',
            category : 'Shirt',
            brand : 'Nike',
            image : '/images/product-2.jpg',
            price : 12,
            countInStock : 0,
            raiting : 2.5,
            numReviews : 10,
            description : 'super basket troptrop stylé'
        },
        {
           
            name : 'Asos haut',
            category : 'Shirt',
            brand : 'Asos',
            image : '/images/product-1.jpg',
            price : 15,
            countInStock : 0,
            raiting : 1.5,
            numReviews : 10,
            description : 'super basket troptrop stylé'
        },
        {
           
            name : 'Puma tshirt',
            category : 'Shirt',
            brand : 'Puma',
            image : '/images/product-1.jpg',
            price : 120,
            countInStock : 30,
            raiting : 4.5,
            numReviews : 10,
            description : 'super basket troptrop stylé'
        },
        {
         
            name : ' Shirt Asos',
            category : 'Shirt',
            brand : 'Asos feed',
            image : '/images/product-1.jpg',
            price : 120,
            countInStock : 50,
            raiting : 5,
            numReviews : 10,
            description : 'super basket troptrop stylé'
        },
    ]
}