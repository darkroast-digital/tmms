Vue.component('nav', {
    props: [
        'logo'
    ],

    template: `
        <nav class="nav">
            <div class="nav__content">
                <a class="nav__brand" href="/">
              <img src="{{ logo }}" alt="Ramuh" draggable="false"/>
            </a>
            <ul class="nav__navbar">
                <li><a href="/">Home</a></li>
                <li>
                    <a href="/">About</a>
                    <ul class="dropdown">
                        <li><a href="/">Dropdown One</a></li>
                        <li><a href="/">Dropdown Two</a></li>
                        <li><a href="/">Dropdown Three</a></li>
                        <li><a href="/">Dropdown Four</a></li>
                    </ul>
                </li>
                <li><a href="/">Work</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            </div>
        </nav>
    `

});