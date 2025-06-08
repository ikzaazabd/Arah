class AppBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header>
          <a href="#home" class="logo">
            <img src="/arah-logo.png" alt="Arah Logo">
          </a>

          <button class="hamburger-menu" aria-label="Buka menu navigasi">
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav>
            <a href="#home">Home</a>
            <a href="#form">Test</a>
            <a href="#prediction">Prediksi</a> 
            <a href="#about">Tentang Kami</a>
          </nav>
        </header>
    `;

    // 2. Logika untuk fungsionalitas hamburger menu
    const hamburgerButton = this.querySelector('.hamburger-menu');
    const nav = this.querySelector('nav');

    hamburgerButton.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

    // BONUS: Menutup menu saat link di dalamnya diklik (baik untuk UX)
    nav.addEventListener('click', (event) => {
      // Pastikan yang diklik adalah sebuah link
      if (event.target.tagName === 'A') {
        nav.classList.remove('active');
      }
    });

    // Ini adalah kode Anda yang sudah ada, tidak diubah
    const updateActiveLink = () => {
        const currentHash = window.location.hash || '#home';
        this.querySelectorAll('nav a').forEach(link => {
            if (link.getAttribute('href') === currentHash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };
    window.addEventListener('hashchange', updateActiveLink);
    requestAnimationFrame(updateActiveLink);
  }
}
customElements.define('app-bar', AppBar);