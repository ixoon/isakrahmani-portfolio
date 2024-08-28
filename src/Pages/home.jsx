import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './home.module.css';
import MyNavbar from "../Components/home/navbar";
import Hey from "../Components/home/Hey";
import Album from "../Components/home/album";
import Skills from "../Components/home/skills";
import Services from "../Components/home/service";
import MyStory from "../Components/home/mystory";
import Footer from "../Components/home/footer";
import Working from "../Components/home/working";
import Certificates from "../Components/home/certificates";

export default function Home() {
    return(
    <div>
        <MyNavbar />
        <Hey />
        <Album />
        <Skills />
        <Certificates />
        <Services />
        <MyStory />
        <Footer />
        <Working />
    </div>


    );
}