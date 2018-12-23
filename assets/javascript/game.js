var time = 30;
var ca = 0;
var ia = 0;
var ua = 0;

var to = {
    button: function(){
        $("#button").toggle();
    },
    final: function(){
        $("#final").toggle();
    },
    form: function(){
        $("#form").toggle();
    },
    submit: function(){
        $("#submit").toggle();
    }
}

$(document).ready (function(){
        to.submit();

    
    $("#button").click( function(){
        
        to.form();
        to.button();
        to.submit();
        
        
        setInterval(function(){
            time--;
            $("#time").text(time);
            
            if(time === 0){
                
                endGame();
                to.submit();
                to.final();
            }
        },1000);
        })
        function endGame(){
                            var q1 = $("#form input[name='Q1']:checked").val();
                            var q2 = $("#form input[name='Q2']:checked").val();
                            var q3 = $("#form input[name='Q3']:checked").val();
                            var q4 = $("#form input[name='Q4']:checked").val();
                            var q5 = $("#form input[name='Q5']:checked").val();
                            
                            q = [q1,q2,q3,q4,q5]
                           
                            for (var i = 0; i < q.length; i++){
                                
                                if (q[i] === "y"){
                                    ca++;
                                    $("#ca").text(ca);
                                
                            }else if (q[i] === "n"){
                                ia++;
                                $("#ia").text(ia);
                                
                            }else {
                                ua++;
                                    $("#ua").text(ua);
                                }
                            }
                            
                            to.form();
                            
                        }
                        
        $("#submit").click(function(){

            to.submit();
            to.final();
            endGame();
        });
        
    
})