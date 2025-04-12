// import './Home.css'
import Brands from '../components/Brands'
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import NewArrivals from '../components/NewArrivals'
import Payday from '../components/Payday'
import Vouchers from '../components/Vouchers'
import YoungsFavourite from '../components/YoungsFavourite'
import JoinCommunity from '../components/JoinCommunity'
import Footer from '../components/Footer'
function Home() {
    
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <Brands/>
            <NewArrivals/>
            <Payday/>
            <YoungsFavourite/>
            <Vouchers/>
            <JoinCommunity/>
            <Footer/>
    {/* <div class="header">
        <img src="Untitled-design-17.webp" alt="" />
        <h1>WELCOME TO NOVENA UNIVERSITY SHOPPING PAGE</h1>
        <p>Here we connect you with various restaurant in and outside the sch.</p>
    </div>
    <div class="nav">
        <a href="#">Home</a>
        <a href="#">Books</a>
        <a href="#">Orders</a>
        <a href="#">Track Orders</a>
        <a href="#">Contact Us</a>
        <a href="#">About Us</a>
        <button>Login</button>
        <button>Sign Up</button>
    </div>
    <div class="search-container">
        <input type="text" placeholder="What item do you want?" />
        <button>Search</button>
    </div>
    <div><p>
    </p></div>
    <div class="book-list">
        <div class="book-card">STUDENT CAFE
            <img src="rice.jpg" alt="" />
            <p>#500 per portion </p>
            <p> RICE AND STEW </p>
        </div>
        <div class="book-card"> UNIVERSAL
            <img src="rr.jpg" alt="" />
            <p>#700 per portion </p>
            <p>EGUSI SOUP AND FUFU </p>
        </div>
        <div class="book-card">Book 3</div>
        <div class="book-card">Book 4</div>
        </div> */}
        </div>
    )
}

export default Home