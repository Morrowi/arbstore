$('.clickCopy').click( function () {
    let copyText = $(this).parent().children()[0];
    copyText.select();
    document.execCommand("copy");
});
let docWidth = $(window).width() + 17;
if(docWidth > 991){
    $('.scrollText').each(function () {
        console.log('qwe');
        let text = $(this)[0].offsetTop;
        let textH = $(this)[0].clientHeight - 370;
        let block = $(this);
        $(document).scroll(function () {
            if($('.scrollBlock')[0].offsetTop >= text - textH +200 && $('.scrollBlock')[0].offsetTop <=  text + textH){
                $(block).addClass('active');
            }else {
                $(block).removeClass('active')
            }
        });
    });
}
let inputs = document.querySelectorAll('.input__file');
Array.prototype.forEach.call(inputs, function (input) {
    let label = input.nextElementSibling,
        labelVal = label.querySelector('.input__file-button-text').innerText;

    input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
            countFiles = this.files.length;

        if (countFiles)
            label.querySelector('.input__file-button-text').innerText = 'Uploaded: ' + countFiles;
        else
            label.querySelector('.input__file-button-text').innerText = labelVal;
    });
});
$('[data-target]').click(function () {
    if($(this)[0].dataset.target){
        $('#'+$(this)[0].dataset.target).fadeIn();
    }
    $('body').css({
        overflowY: 'hidden',
        paddingRight: '15px'
    })
});
$('[data-id]').click(function () {
   $('#'+$(this)[0].dataset.id).toggleClass('active');
});
$('.closePopupButton').click(function () {
    if($(this)[0].dataset.target){
        $('#'+$(this)[0].dataset.target).fadeOut();
    }
    $('body').css({
        overflowY: 'auto',
        paddingRight: '0'
    })
});
$('.mobBottomMenu').click(function () {
    $('header').toggleClass('active');
});