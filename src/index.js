import './style.css';
import BannerImage from './images/banner-img.svg';
import Commercial from './images/commercial.png';
import Loan from './images/loan.png';
import Personal from './images/personal.png';
import CreditCard from './images/credit-card.png';
import ListDisc from './images/list-disc.png';
import phone from './images/phone.png';
import location from './images/location.png';
import email from './images/email.png';

// inserting images
document.querySelector('#banner-img').src = BannerImage;;
document.querySelector('#commercial').src = Commercial;
document.querySelector('#personal').src = Personal;
document.querySelector('#loan').src = Loan;
document.querySelector('#credit-card').src = CreditCard;
document.querySelector('#email-icon').src = email;
document.querySelector('#address-icon').src = location;
document.querySelector('#phone-icon').src = phone;

let listNodeList = document.querySelectorAll('#list-img');
for (let nodeListItem of listNodeList) {
    nodeListItem.src = ListDisc;
}

// hamburger trigger
const hamburgerButton = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('body');

let isMenuOpened = false;

hamburgerButton.addEventListener('click', (e) => {
    console.log(isMenuOpened)
    if (isMenuOpened) {
        // closing
        body.style.overflowY = "auto";
        mobileMenu.classList.add('hidden');
        isMenuOpened = false;
    } else {
        // opening
        body.style.overflowY = "hidden";
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('open');
        isMenuOpened = true;
    }
})