$(document).ready(function () {
    var botonsig = document.getElementById("siguiente");
    $(".border-primary.card").click(function () {
        var idCandidato = $(this).attr("id");
        let aver = document.getElementById("selecciona").innerHTML = idCandidato;
    });
    $(botonsig).click(function () {
        let aver = document.getElementById("selecciona").textContent;
        $($.ajax({
            type: "POST",
            url: "datosVotos.php",
            data: {
                "idCandidato": aver
            },
            success: function (response) {
                console.log(response);
                if (response == 11) {
                window.location.assign("votar2.php");

                }
            }
        }));
        return false;
    });
});