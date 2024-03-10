// файл скрипта добавляется прямо в HTML с помощью require_once

let wpshop_event_loaded = false;

window.addEventListener('DOMContentLoaded', (event) => {
    wpshop_event_init();
});

// для загрузки через ajax ставим инициализацию в таймаут
setTimeout(function(){
    wpshop_event_init();
}, 1000);

function wpshop_event_init() {
    // предотвращаем повторную инициализацию
    if ( wpshop_event_loaded ) {
        return;
    }
    wpshop_event_loaded = true;

    setTimeout(function(){
        document.querySelector('.js-wpshop-event').classList.remove('hide');
    }, wpshop_event_timeout);

    document.querySelector('.js-wpshop-event').addEventListener("click", function(e) {

        if ( e.target.classList.contains('wpshop-event__close') ) {
            return;
        }

        let $event = e.currentTarget;
        let url = $event.dataset.u;
        window.open(window.atob( url ), '_blank');
        return false;
    });
}

function wpshop_event_close( event ) {
    let cookie_name = 'wpshop-event-' + event;
    document.cookie = cookie_name + '=close; path=/; max-age=3600;'; // 1 day
    document.querySelector('.js-wpshop-event').style.display = 'none';
}
