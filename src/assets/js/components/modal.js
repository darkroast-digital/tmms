Vue.component('modal', {
    props: [
        'title',
        'body'
    ],

    template: `
        <section class="modal">
            <div class="modal-content">
                <content></content>
            </div>
        </section>
    `

});