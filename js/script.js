// evet pada saat link di klick
$('.page-scroll').on('click', function(event) {
    
    // ambil isi #
    var tujuan = $(this).attr('href');
    // tangkap element yang bersangkutan
    var elementTujuan = $(tujuan);
    
    $('html, body').animate({
        scrollTop: elementTujuan.offset().top - 50
    }, 1000, 'swing');

    event.preventDefault();

});