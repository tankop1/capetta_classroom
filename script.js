// ---------- LOADING ANIMATION ----------

setTimeout(() => {
    $(document).ready(() => {
        $('#loading-screen div').css({'transform': 'rotate(-20deg) scale(35)'});

        setTimeout(() => {
            $('#loading-screen').css({'display': 'none'});
        }, 500);
    });
}, 2000);