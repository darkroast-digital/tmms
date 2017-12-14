Vue.component('nav', {
    props: [
        'title',
        'body'
    ],

    template: `
        <article class="message">
            <div class="message-header">
                {{ title }}
            </div>

            <div class="message-body">
                {{ body }}
                <content>sdfarefgder</content>
            </div>
        </article>
    `

});