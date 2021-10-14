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
import data from './data.js';
import '../scss/style.scss';

$(document).ready(function(){
    
    $('body').removeClass('transition-off');
    
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
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
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
                    dots: true,
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
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                }
            },
        ]
    });

    $('.form-booking__quantity__plus').on('click', function(){
        var cnt = parseInt($('.form-booking__quantity__input').val());
        cnt++
        $('.form-booking__quantity__input').val(cnt) 
    })

    $('.form-booking__quantity__minus').on('click', function(){
        var cnt = parseInt($('.form-booking__quantity__input').val());
        if(cnt > 1) {
            cnt--;
            $('.form-booking__quantity__input').val(cnt)
        }
    })

    $('#date-from').datepicker({
        classes: 'datepicker-booking',
        autoClose: true,
        minDate: new Date(),
        todayButton: new Date()
        // inline: true,
    });
    $('#date-to').datepicker({
        classes: 'datepicker-booking',
        position: 'top left',
        autoClose: true,
        minDate: new Date(),
        todayButton: new Date()
        // inline: true,
    });

    $('.reservation__link, .slick-item img').on('click', function(e){
        e.preventDefault();
        var id = $(this).closest('.slick-item').attr('data-id');
        var item = data.find(item => item.id == id );
        $('.modal-direction-img').attr('src', item.img);
        $('.modal-direction__title').html(item.city);
        $('.modal-direction__info').html(item.info);
        $('#btn-booking').attr('data-id', item.id);
        $('#modal-direction').modal('show');
        
    })

    $('#btn-booking').on('click', function(){
        var id = $(this).attr('data-id');
        setBooking(id)
        $('#modal-direction').modal('hide');
        setTimeout(function(){
            $('#modal-booking').modal('show');
        }, 500)
    })

    $('.slick-item .btn-reservation').on('click', function(){
        var id = $(this).closest('.slick-item').attr('data-id');
        setBooking(id);
        $('#modal-booking').modal('show');
    })

    function setBooking(id) {
        var item = data.find(item => item.id == id );
        $('.form-booking__quantity__input').val('1');
        $('.form-booking__input-direction').val(item.city);
    }

    $('#send-booking').on('click', function(e){
        e.preventDefault();
        if($('.form-booking__input-name').val() == '') {
            $('.form-booking__input-name').addClass('has-error')
            return
        }

        if($('.form-booking__input-phone').val() == '') {
            $('.form-booking__input-phone').addClass('has-error')
            return
        }

        if($('#date-from').val() == '') {
            $('#date-from').addClass('has-error')
            return
        }
        $.ajax({
            type: "POST",
            async: false,
            url: "booking.php",
            data: $('.form-booking').serialize(),
            dataType: "html",
            success: function(data) {
            
            }
        });
        $('#modal-booking').modal('hide');
        setTimeout(function(){
            $('.form-booking').trigger('reset');
        }, 1000)
        $('.form-booking__quantity__input').val('1');
    })

    $('.form-booking__input-name').on('input', function(){
        $(this).removeClass('has-error')
    })

    $('.form-booking__input-phone').on('input', function(){
        $(this).removeClass('has-error')
    })

    $('#send-call').on('click', function(e){
        e.preventDefault();
        if($('.form-call__input-name').val() == '') {
            $('.form-call__input-name').addClass('has-error')
            return
        }

        if($('.form-call__input-name').val() == '') {
            $('.form-call__input-name').addClass('has-error')
            return
        }
        $.ajax({
            type: "POST",
            async: false,
            url: "call.php",
            data: $('.form-call').serialize(),
            dataType: "html",
            success: function(data) {
            
            }
        });
        $('#modal-call').modal('hide');
        setTimeout(function(){
            $('.form-call').trigger('reset');
        }, 1000)
        
    })

    $('.form-call__input-name').on('input', function(){
        $(this).removeClass('has-error')
    })

    $('.form-call__input-name').on('input', function(){
        $(this).removeClass('has-error')
    })

    $('.smooth').on('click', function(e){
        e.preventDefault()
        let target = $(this).attr('href');
        $('body,html').animate({
            scrollTop: ($(target).offset().top)
        }, 1000);
    })
})
