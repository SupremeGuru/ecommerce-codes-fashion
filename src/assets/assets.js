import logo from './logo.svg'
import incendiary_girl from './eco-fur-girl-img.png'
import brands from './Brands.png'
import pay_day_girl from './pay_day_girl.png'


import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'
import app_form from './app_form.png'
import google_play from './google_play.png'
import i_app_store from './i_app_store.png'
import instagram_logo from './instagram_logo.png'
import linkedin_logo from './linkedin_logo.png'
import twitter_logo from './twitter_logo.png'
import facebook_logo from './facebook_logo.png'


import p_img1 from './hoody_girl.png'
import p_img2 from './coat_girl.png'
import p_img3 from './t_shirt_girl.png'
import p_img4 from './young_girl1.png'
import p_img5 from './young_girl2.png'

export const assets = {
    logo,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon,
    incendiary_girl,
    brands,
    pay_day_girl,
    app_form,
    google_play,
    i_app_store,
    instagram_logo,
    linkedin_logo,
    twitter_logo,
    facebook_logo
}

export const products = [
    {
        _id: "aaaaa",
        name: "Hoodies & Sweetshirt",
        description: "Hoodies & Sweetshirt",
        price: 100,
        image: [p_img1],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true,
        trending: false
    },
    {
        _id: "aaaab",
        name: "Coats & Parkas",
        description: "Coats & Parkas",
        price: 200,
        image: [p_img2],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        trending: false
    },
    // {
    //     _id: "aaaab",
    //     name: "",
    //     description: "",
    //     price: 200,
    //     image: [p_img2_1,p_img2_2,p_img2_3,p_img2_4],
    //     category: "Women",
    //     subCategory: "Topwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716621345448,
    //     bestseller: true
    // },
    {
        _id: "aaaac",
        name: "Tees & T-Shirt",
        description: "Tees & T-Shirt",
        price: 220,
        image: [p_img3],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "L", "XL"],
        date: 1716234545448,
        bestseller: true,
        trending: false
    },
    {
        _id: "aaaad",
        name: "Trending on instagram",
        description: "A girl with a t-shirt",
        price: 220,
        image: [p_img4],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "L", "M", "XL"],
        date: 1716234545448,
        bestseller: true,
        trending: true,
    },
    {
        _id: "aaaae",
        name: "All under $40",
        description: "A girl with a t-shirt",
        price: 220,
        image: [p_img5],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["L", "M", "XL"],
        date: 1716234545448,
        bestseller: true,
        trending:true
    }
]