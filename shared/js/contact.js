$(function(){
    //バリデーション お問合せ
    $('#last_name').on('blur',function(){
        var error;
        let value = $(this).val();
        var error_message = document.getElementById('text_name');
        if(value == ""){
            error = true;
        }
        if(error){
            error_message.innerHTML = '入力必須項目です';
        } else {
            error_message.innerHTML = '';
        }

    });
    $('#first_name').on('blur',function(){
        var error;
        let value = $(this).val();
        var error_message = document.getElementById('text_name');
        if(value == ""){
            error = true;
        }
        if(error){
            error_message.innerHTML = '入力必須項目です';
        } else {
            error_message.innerHTML = '';
        }

    });

    $('#last_kana').on('blur',function(){
        let error;
        let value = $(this).val();
        var error_message = document.getElementById('text_kana');
        if(value == ""){
            error = true;
        }

        if(error){
            error_message.innerHTML = '入力必須項目です';
        } else {
            error_message.innerHTML = '';
            let error02;
            if(!$(this).val().match(/^[ァ-ロワヲンー 　\r\n\t]*$/)){ 
                error02 = true;
            } 
            if(error02){
                error_message.innerHTML = 'フリガナで入力してください';
            } else {
                error_message.innerHTML = '';
            }
        }
    });

    $('#first_kana').on('blur',function(){
        let error;
        let value = $(this).val();
        var error_message = document.getElementById('text_kana');
        if(value == ""){
            error = true;
        }

        if(error){
            error_message.innerHTML = '入力必須項目です';
        } else {
            error_message.innerHTML = '';
            let error02;
            if(!$(this).val().match(/^[ァ-ロワヲンー 　\r\n\t]*$/)){ 
                error02 = true;
            } 
            if(error02){
                error_message.innerHTML = 'フリガナで入力してください';
            } else {
                error_message.innerHTML = '';
            }
        }
    });

    $('#email').on('blur',function(){
        let error;
        let value = $(this).val();
        var error_message = document.getElementById('text_email');
        if(value == ""){
            error = true;
        }

        if(error){
            error_message.innerHTML = '入力必須項目です';
        } else {
            error_message.innerHTML = '';
            let error02;
            if(!$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){ 
                error02 = true;
            } 
            if(error02){
                error_message.innerHTML = 'メールアドレスの形式で入力してください';
            } else {
                error_message.innerHTML = '';
            }
        }
    });

    $('#tel').on('blur',function(){
        let error;
        let value = $(this).val();
        var error_message = document.getElementById('text_tel');
        if(value == ""){
            error = true;
        }

        if(error){
            error_message.innerHTML = '入力必須項目です';
        } else {
            error_message.innerHTML = '';
            let error02;
            let tel = value.replace(/[━.*‐.*―.*－.*\-.*ー.*\-]/gi,'');
            if(!tel.match(/^[0-9]{10,11}$/)){ 
                error02 = true;
            } 
            if(error02){
                error_message.innerHTML = '数字を入力してください';
            } else {
                error_message.innerHTML = '';
            }
        }
    });

    $('#comments').on('blur',function(){
        var error;
        let value = $(this).val();
        var error_message = document.getElementById('text_comments');
        if(value == ""){
            error = true;
        }
        if(error){
            error_message.innerHTML = '入力必須項目です';
        } else {
            error_message.innerHTML = '';
        }

    });
 
    $("#confirmBtn").click(function () {
        var error;

        // 氏名
        let value_last_name = $("#last_name").val();
        var name = document.getElementById('text_name');
        if(value_last_name == ""){
            error = true;
        }
        if(error){
            name.innerHTML = '入力必須項目です';
            return;
        }

        let value_first_name = $("#first_name").val();
        if(value_first_name == ""){
            error = true;
        }
        if(error){
            name.innerHTML = '入力必須項目です';
            return;
        }

        // フリガナ
        let value_last_kana = $("#last_kana").val();
        var kana = document.getElementById('text_kana');
        if(value_last_kana == ""){
            error = true;
        }
        if(error){
            kana.innerHTML = '入力必須項目です';
            return;
        } else {
            kana.innerHTML = '';
            let error02;
            if(!value_last_kana.match(/^[ァ-ロワヲンー 　\r\n\t]*$/)){ 
                error02 = true;
            } 
            if(error02){
                kana.innerHTML = 'フリガナで入力してください';
                return;
            } 
        }

        let value_first_kana = $("#first_kana").val();
        var kana = document.getElementById('text_kana');
        if(value_first_kana == ""){
            error = true;
        }
        if(error){
            kana.innerHTML = '入力必須項目です';
            return;
        } else {
            kana.innerHTML = '';
            let error02;
            if(!value_first_kana.match(/^[ァ-ロワヲンー 　\r\n\t]*$/)){ 
                error02 = true;
            } 
            if(error02){
                kana.innerHTML = 'フリガナで入力してください';
                return;
            } 
        }

        // メールアドレス
        let value_email = $("#email").val();
        var email = document.getElementById('text_email');
        if(value_email == ""){
            error = true;
        } 
        if(error){
            email.innerHTML = '入力必須項目です';
            return;
        } else {
            email.innerHTML = '';
            let error02;
            if(!value_email.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){ 
                error02 = true;
            } 
            if(error02){
                email.innerHTML = 'メールアドレスの形式で入力してください';
                return;
            } 
        }

        // 電話番号
        let value_tel = $("#tel").val();
        var tel = document.getElementById('text_tel');
        if(value_tel == ""){
            error = true;
        }

        if(error){
            tel.innerHTML = '入力必須項目です';
        } else {
            tel.innerHTML = '';
            let error02;
            let tel_value = value_tel.replace(/[━.*‐.*―.*－.*\-.*ー.*\-]/gi,'');
            if(!tel_value.match(/^[0-9]{10,11}$/)){ 
                error02 = true;
            } 
            if(error02){
                tel.innerHTML = '数字を入力してください';
            } else {
                tel.innerHTML = '';
            }
        }

        // お問合せ内容
        let value_comments = $("#comments").val();
        var comments = document.getElementById('text_comments');
        if(value_comments == ""){
            error = true;
        }
        if(error){
            comments.innerHTML = '入力必須項目です';
            return;
        }
        value_comments_txt = value_comments.replace( /\r?\n/g, '<br />' );

        let value_company_name = $("#company_name").val();

        let confirm_company_name = document.getElementById('confirm_company_name');
        let confirm_name = document.getElementById('confirm_name');
        let confirm_kana = document.getElementById('confirm_kana');
        let confirm_email = document.getElementById('confirm_email');
        let confirm_tel = document.getElementById('confirm_tel');
        let confirm_comments = document.getElementById('confirm_comments');

        confirm_company_name.classList.add("confirm");
        confirm_name.classList.add("confirm");
        confirm_kana.classList.add("confirm");
        confirm_email.classList.add("confirm");
        confirm_tel.classList.add("confirm");
        confirm_comments.classList.add("confirm");

        let vale_name = value_last_name + ' ' + value_first_name;
        let vale_kana = value_last_kana + ' ' + value_first_kana;

        confirm_company_name.innerHTML = value_company_name;
        confirm_name.innerHTML = vale_name;
        confirm_kana.innerHTML = vale_kana;
        confirm_email.innerHTML = value_email;
        confirm_tel.innerHTML = value_tel;
        confirm_comments.innerHTML = value_comments_txt;

        // typeを変更
        $('#company_name').attr({
            type: 'hidden',
        });
        $('#last_name').attr({
            type: 'hidden',
        });
        $('#first_name').attr({
            type: 'hidden',
        });
        $('#last_kana').attr({
            type: 'hidden',
        });
        $('#first_kana').attr({
            type: 'hidden',
        });
        $('#email').attr({
            type: 'hidden',
        });
        $('#tel').attr({
            type: 'hidden',
        });
        $("#comments").css('display', 'none');
        $('#agreement').attr({
            type: 'hidden',
        });
        $("#contact_agreement1").css('display', 'none');
        $("#contact_agreement2").css('display', 'none');        
        
        $('#confirmBtn').attr({
            type: 'hidden',
        });
        $('#backBtn').attr({
            type: 'button',
        });
        $('#submitBtn').attr({
            type: 'submit',
        });
    });

    $("#backBtn").click(function () {
        var confirm_company_name = document.getElementById('confirm_company_name');
        var confirm_name = document.getElementById('confirm_name');
        var confirm_kana = document.getElementById('confirm_kana');
        var confirm_email = document.getElementById('confirm_email');
        var confirm_tel = document.getElementById('confirm_tel');
        var confirm_comments = document.getElementById('confirm_comments');

        confirm_company_name.classList.remove("confirm");
        confirm_name.classList.remove("confirm");
        confirm_kana.classList.remove("confirm");
        confirm_email.classList.remove("confirm");
        confirm_tel.classList.remove("confirm");
        confirm_comments.classList.remove("confirm");

        confirm_company_name.innerHTML = '';
        confirm_name.innerHTML = '';
        confirm_kana.innerHTML = '';
        confirm_email.innerHTML = '';
        confirm_tel.innerHTML = '';
        confirm_comments.innerHTML = '';

        // typeを変更
        $('#company_name').attr({
            type: 'text',
        });
        $('#last_name').attr({
            type: 'text',
        });
        $('#first_name').attr({
            type: 'text',
        });
        $('#last_kana').attr({
            type: 'text',
        });
        $('#first_kana').attr({
            type: 'text',
        });
        $('#email').attr({
            type: 'email',
        });
        $('#tel').attr({
            type: 'tel',
        });
        $("#comments").css('display', 'inline-block');
        $('#agreement').attr({
            type: 'checkbox',
        });
        $("#contact_agreement1").css('display', 'block');
        $("#contact_agreement2").css('display', 'inline-block');        
        
        $('#confirmBtn').attr({
            type: 'button',
        });
        $('#backBtn').attr({
            type: 'hidden',
        });
        $('#submitBtn').attr({
            type: 'hidden',
        });
    });

    $("#agreement").click(function () {
        var btnAgree = document.getElementById( "agreement" );
        var btnAgreeCK = $(btnAgree).prop('checked');
        if(btnAgreeCK){
            $('#confirmBtn').attr({
                disabled: false,
            });
        } else {
            $('#confirmBtn').attr({
                disabled: true,
            });
        }
    });

    $("#check").click(function () {
        if ($("#check").prop("checked") == true) {            
            $("#const_zip02").prop("required", true);
            $("#const_addr01").prop("required", true);
            $("#const_addr02").prop("required", true);

            var element1 = document.getElementById( "const_zip02" );
            var element2 = document.getElementById( "const_addr01" );
            var element3 = document.getElementById( "const_addr02" );
            var check1 = $(element1).prop('required');
            var check2 = $(element2).prop('required');
            var check3 = $(element3).prop('required');
        } else {
            $("#const_zip02").prop("required", false);
            $("#const_addr01").prop("required", false);
            $("#const_addr02").prop("required", false);
            
            
            var element1 = document.getElementById( "const_zip02" );
            var element2 = document.getElementById( "const_addr01" );
            var element3 = document.getElementById( "const_addr02" );
            var check1 = $(element1).prop('required');
            var check2 = $(element2).prop('required');
            var check3 = $(element3).prop('required');
        }
    });

    $("#submitBtn").click(function ()  {
        var company_name = $("[name=\"entry.2031051849\"]").val();
        var email = $("[name=\"entry.1197767915\"]").val();
        var tel = $("[name=\"entry.1197767915\"]").val();
        var comments = $("[name=\"entry.103441055\"]").val();

        let last_name = $("#last_name").val();
        let first_name = $("#first_name").val();
        var name = last_name + " " + first_name;

        let last_kana = $("#last_kana").val();
        let first_kana = $("#first_kana").val();
        var kana = last_kana + " " + first_kana;
 
        $.ajax({
            url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScW8f30h0-bVjTuNHIJkdg5k3ICeXaFiZXWAI4gY28xcYfIMg/formResponse",
            data: {
                "entry.2031051849": company_name,
                "entry.1767441942": name,
                "entry.2141201490": kana,
                "entry.1197767915": email,
                "entry.529912731": tel,
                "entry.103441055": comments
            },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    //送信に成功したときの処理
                    $("#form").slideUp();
                    $('#success').slideDown();
                },
                200: function () {
                    //送信に失敗したときの処理
                    $("#form").slideUp();
                    $('#error').slideDown();
                }
            }
        });
        event.preventDefault();  
    });


    /*

    $("#submitBtn").click(function ()  {
        var company_name = $("[name=\"entry.2031051849\"]").val();
        var email = $("[name=\"entry.1197767915\"]").val();
        var comments = $("[name=\"entry.103441055\"]").val();

        var last_name = $("[name=\"entry.1767441942\"]").val();
        var first_name = $("[name=first_name]").val();
        var name_full = last_name + first_name;

        var last_kana = $("[name=\"entry.2141201490\"]").val();
        var first_kana = $("[name=first_kana]").val();
        var kana_full = last_kana + first_kana;
 
        $.ajax({
            url: "https://docs.google.com/forms/u/4/d/e/1FAIpQLSfzDDH8AgOlya48l8gtTmQdDW70HqFFcRLhJvz5eGWtAln1zg/formResponse",
            data: {
                "entry.2031051849": company_name,
                "entry.1767441942": name_full,
                "entry.2141201490": kana_full,
                "entry.222705481": email,
                "entry.103441055": comments
            },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    //送信に成功したときの処理
                    $("#form").slideUp();
                    $('#success').slideDown();
                },
                200: function () {
                    //送信に失敗したときの処理
                    $("#form").slideUp();
                    $('#error').slideDown();
                }
            }
        });
        event.preventDefault();  
    });

    */
});