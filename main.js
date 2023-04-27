$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })
    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })
    $('form').on('submit', function(e){
        console.log('submit');
        e.preventDefault();
        const enderecoImgNova = $("#endereco-img-nova").val();
        console.log(enderecoImgNova);
        const novoItem = $('<li style = "display:none"></li>');
        $(`<img src="${enderecoImgNova}"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-img-link">
                <a href="${enderecoImgNova}" target="_blank" title="ver imagem em tamanho real">
                    Ver imagem em tamanho real.
                    </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('endereco-img-nova').val('');
    })
})