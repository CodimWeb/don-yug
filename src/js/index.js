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
import datepicker from 'air-datepicker';

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
        dots: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
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
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    swipe: true,
                }
            },
        ]
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
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    $('#date-from').datepicker({
        classes: 'datepicker-booking',
        autoClose: true,
        // inline: true,
    });
    $('#date-to').datepicker({
        classes: 'datepicker-booking',
        position: 'top left',
        autoClose: true,
        // inline: true,
    });
})