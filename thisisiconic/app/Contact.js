import React from "react";
import styles from "./page.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import {white} from "mui/source/styles/colors";

const Contact = () => {
    return (
        <div>
            <div>
                <span>EST. 2016</span>
                <div>
                    <a href="https://www.facebook.com/thisisiconic" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.instagram.com/thisisiconicofficial/" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon />
                    </a>
                    <a href="https://twitter.com/marmostock" target="_blank" rel="noopener noreferrer">
                        <TwitterIcon />
                    </a>
                    <a href="https://www.instagram.com/xy.diofa" target="_blank" rel="noopener noreferrer">
                        <PinterestIcon />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
