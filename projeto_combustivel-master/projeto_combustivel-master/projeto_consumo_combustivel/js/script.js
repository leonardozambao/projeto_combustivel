function scrollTo(e){$('html, body').animate({scrollTop:$(e).offset().top},2000);return false;}
$(document).ready(function(){$('.participe a').click(function(){var target=$(this).attr('href');scrollTo(target);return false;});$('.item a').click(function(){var target=$(this).attr('href');scrollTo(target);return false;});});$(document).ready(function(){$('.phone_with_ddd').mask('(00) 00000-0000');$('.cpf').mask('000.000.000-00');});