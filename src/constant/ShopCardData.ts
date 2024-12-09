export type ShopCardDataType = {
    imageURl: string,
    name: string,
    price: string,
    delPrice?: string,
    topImage: boolean
    topSellImage: boolean
}

const ShopCardData: ShopCardDataType[] = [
    {
        imageURl: "/1.png",
        name: "Fresh Lime",
        price: "$38.00",
        delPrice: "$45.00",
        topImage: true,
        topSellImage: false
    },
    {
        imageURl: "/2.png",
        name: "Chocolate Muffin",
        price: "$28.00",
        delPrice: "",
        topImage: false,
        topSellImage: true
    },
    {
        imageURl: "/3.png",
        name: "Burger",
        price: "$21.00",
        delPrice: "$45.00",
        topImage: false,
        topSellImage: false
    },
    {
        imageURl: "/4.png",
        name: "Country Burger",
        price: "$45.00",
        delPrice: "",
        topImage: false,
        topSellImage: false
    },
    {
        imageURl: "/5.png",
        name: "Drink",
        price: "$23.00",
        delPrice: "$45.00",
        topImage: false,
        topSellImage: false
    },
    {
        imageURl: "/6.png",
        name: "Pizza",
        price: "$23.00",
        delPrice: "",
        topImage: false,
        topSellImage: false
    },
    {
        imageURl: "/7.png",
        name: "Cheese Butter",
        price: "$23.00",
        delPrice: "",
        topImage: false,
        topSellImage: false
    },
    {
        imageURl: "/8.png",
        name: "Sandwiches",
        price: "$23.00",
        delPrice: "",
        topImage: false,
        topSellImage: false
    },
    {
        imageURl: "/9.png",
        name: "Chicken Chup",
        price: "$23.00",
        delPrice: "",
        topImage: false,
        topSellImage: false
    },
    {
        imageURl: "/10.png",
        name: "Country Burger",
        price: "$23.00",
        delPrice: "",
        topImage: false,
        topSellImage: false
    },
    {
        imageURl: "/11.png",
        name: "Drink",
        price: "$23.00",
        delPrice: "",
        topImage: false,
        topSellImage: false
    },
    {
        imageURl: "/12.png",
        name: "Pizza",
        price: "$23.00",
        delPrice: "",
        topImage: false,
        topSellImage: false
    },
    {
        imageURl: "/13.png",
        name: "Sandwiches",
        price: "$23.00",
        delPrice: "",
        topImage: false,
        topSellImage: false
    },
    {
        imageURl: "/14.png",
        name: "Chicken Chup",
        price: "$23.00",
        delPrice: "",
        topImage: false,
        topSellImage: false
    },
    {
        imageURl: "/15.png",
        name: "Chicken Chup",
        price: "$23.00",
        delPrice: "",
        topImage: false,
        topSellImage: false
    }
]

export { ShopCardData }