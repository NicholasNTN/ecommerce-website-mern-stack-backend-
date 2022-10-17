import bcrypt from 'bcryptjs'

const data = {

    users: [
        {
            name: "Nicholas",
            email: "nhanbiuly@gmail.com",
            password: bcrypt.hashSync('admin'),
            isAdmin: true,
        },
        {
            name: "Lamle",
            email: "lamle@gmail.com",
            password: bcrypt.hashSync('lamle'),
            isAdmin: false,
        },
        {
            name: "Nicho",
            email: "nicho@gmail.com",
            password: bcrypt.hashSync('nicho'),
            isAdmin: false,
        },
    ],

    sliderItems: [
        {
            //_id: 1,
            image: "/images/slider/6.jpg"
        },
        {
            //_id: 2,
            image: "/images/slider/3.jpg"
        },
        {
            //_id: 3,
            image: "/images/slider/4.jpg"
        },
        {
            //_id: 4,
            image: "/images/slider/5.jpg"
        },
        {
            //_id: 5,
            image: "/images/slider/2.jpg"
        },
        {
            //_id: 6,
            image: "/images/slider/7.jpg"
        },
    ],

    category: [
        {
            //_id: 1,
            title: "MAN-Z",
            image: "/images/category/man.jpg"
        },
        {
            //_id: 2,
            title: "WOMAN",
            image: "/images/category/woman.jpg"
        },
        {
            //_id: 3,
            title: "OTHERS",
            image: "/images/category/kids.jpg"
        }
    ],

    products: [
        {
            //_id: 1, default in Db
            title: "Ao thun Cotton",
            slug: 'product1',
            desc: "Description for Product 1",
            category: "MAN-Z",
            image: "/images/products/aothuncotton.jpg",
            image1: "/images/products/aoluaxanhcovit.jpg",
            image2: "/images/products/aothuncotton.jpg",
            image3: "/images/products/aothuncotton.jpg",
            //newProduct: true,
            countInStock: 5,
            price: "80.00",
        },
        {
            //_id: 2,
            title: "Ao lua xanh co vit",
            slug: 'product2',
            desc: "Description for product 2",
            category: "WOMAN",
            image: "/images/products/aoluaxanhcovit.jpg",
            image1: "/images/products/aoluaxanhcovit.jpg",
            image2: "/images/products/aoluaxanhcovit.jpg",
            image3: "/images/products/aoluaxanhcovit.jpg",
            //newProduct: true,
            countInStock: 0,
            price: "60.00"
        },
        {
            //_id: 3,
            title: "Dam lua hoa tiet",
            slug: 'product3',
            desc: "Description for product 3",
            category: "WOMAN",
            image: "/images/products/damluahoatiet.jpg",
            image1: "/images/products/damluahoatiet.jpg",
            image2: "/images/products/damluahoatiet.jpg",
            image3: "/images/products/damluahoatiet.jpg",
            //newProduct: true,
            countInStock: 10,
            price: "45.89"
        },
        {
            //_id: 4,
            title: "Somi LiNen",
            slug: 'product4',
            desc: "Description for product 4",
            category: "MAN-Z",
            image: "/images/products/somilinen.jpg",
            image1: "/images/products/somilinen.jpg",
            image2: "/images/products/somilinen.jpg",
            image3: "/images/products/somilinen.jpg",
            //newProduct: true,
            countInStock: 3,
            price: "45.87"
        },
        {
            //_id: 5,
            title: "Ao lua xanh co vit 2",
            slug: 'product5',
            desc: "Description for product 2",
            category: "MAN-Z",
            image: "/images/products/aoluaxanhcovit.jpg",
            image1: "/images/products/aoluaxanhcovit.jpg",
            image2: "/images/products/aoluaxanhcovit.jpg",
            image3: "/images/products/aoluaxanhcovit.jpg",
            //newProduct: true,
            countInStock: 21,
            price: "60.00"
        },
        {
            //_id: 6,
            title: "Ao thun Cotton 2",
            slug: 'product6',
            desc: "Description for product 1",
            category: "WOMAN",
            image: "/images/products/aothuncotton.jpg",
            image1: "/images/products/aothuncotton.jpg",
            image2: "/images/products/aothuncotton.jpg",
            image3: "/images/products/aothuncotton.jpg",
            //newProduct: true,
            countInStock: 13,
            price: "50.00"
        },
        {
            //_id: 7,
            title: "Somi LiNen 2",
            slug: 'product7',
            desc: "Description for product 4",
            category: "MAN-Z",
            image: "/images/products/somilinen.jpg",
            image1: "/images/products/somilinen.jpg",
            image2: "/images/products/somilinen.jpg",
            image3: "/images/products/somilinen.jpg",
            //newProduct: true,
            countInStock: 5,
            price: "45.87"
        },
        {
            //_id: 8,
            title: "Dam lua hoa tiet 2",
            slug: 'product8',
            desc: "Description for product 3",
            category: "WOMAN",
            image: "/images/products/damluahoatiet.jpg",
            image1: "/images/products/damluahoatiet.jpg",
            image2: "/images/products/damluahoatiet.jpg",
            image3: "/images/products/damluahoatiet.jpg",
            //newProduct: true,
            countInStock: 9,
            price: "45.89"
        },
        {
            //_id: 9,
            title: "Somi LiNen 3",
            slug: 'product9',
            desc: "Description for product 4",
            category: "OTHERS",
            image: "/images/products/somilinen.jpg",
            image1: "/images/products/somilinen.jpg",
            image2: "/images/products/somilinen.jpg",
            image3: "/images/products/somilinen.jpg",
            //newProduct: false,
            countInStock: 20,
            price: "45.87"
        },
        {
            //_id: 10,
            title: "Dam lua hoa tiet 3",
            slug: 'product10',
            desc: "Description for product 3",
            category: "OTHERS",
            image: "/images/products/damluahoatiet.jpg",
            image1: "/images/products/damluahoatiet.jpg",
            image2: "/images/products/damluahoatiet.jpg",
            image3: "/images/products/damluahoatiet.jpg",
            //newProduct: false,
            countInStock: 17,
            price: "45.89"
        }
    ]
}

export default data;