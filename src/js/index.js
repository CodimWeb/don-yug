'use strict'

// import $ from 'jquery';
import JQuery from 'jquery';
window.$ = window.JQuery = JQuery;

import Util from 'bootstrap/js/dist/util.js'
import Modal from 'bootstrap/js/dist/modal'
import Collapse from 'bootstrap/js/dist/collapse'
import Tab from 'bootstrap/js/dist/tab'
// import 'slick-carousel';
import slick from 'slick-carousel';

import '../scss/style.scss';

$(document).ready(function(){
    
    $('.direction-slider .slider').slick({
        speed: 500,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 4,
        pauseOnFocus: false,
        pauseOnHover: false,
        arrows: true,
        prevArrow: $('.direction-slider-prev'),
        nextArrow: $('.direction-slider-next'),
        dots: false
    });

    $('.offer-slider .slider').slick({
        speed: 500,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 3,
        pauseOnFocus: false,
        pauseOnHover: false,
        arrows: false,
        dots: false,
        swipe: false,
        variableWidth: true,
    });

    $('.review-slider .slider').slick({
        speed: 500,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 3,
        pauseOnFocus: false,
        pauseOnHover: false,
        arrows: true,
        prevArrow: $('.review-slider-prev'),
        nextArrow: $('.review-slider-next'),
        dots: false
    });
})