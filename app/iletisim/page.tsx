export default function Iletisim() {
  return (
    <section className="page-section contact-page">
      <h1>İletişim</h1>

      <div className="contact-grid">
        <div className="contact-card">
          <span>Adres</span>
          <p>Kızılırmak, 1443. Cd. No:25, 06530 Çankaya/Ankara</p>
        </div>

        <div className="contact-card">
          <span>E-Posta</span>
          <a href="mailto:ahmetfarukarabaci@gmail.com">ahmetfarukarabaci@gmail.com</a>
        </div>

        <div className="contact-card">
          <span>Telefon</span>
          <a href="tel:+905065898848">+90 506 589 88 48</a>
        </div>
      </div>

      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2164.143895173663!2d32.81053015940396!3d39.906445618466265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f0042ea9cb5%3A0xae2194a4ef383d70!2sKolektif%20House%201071%20Ankara!5e0!3m2!1str!2str!4v1789547885232!5m2!1str!2str"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="AFA Mimarlık Konum"
        />
      </div>
    </section>
  );
}