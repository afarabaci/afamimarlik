export default function Iletisim() {
  return (
    <section className="page-section contact-page">
      <div className="section-topline">İLETİŞİM</div>
      <h1>İletişim</h1>

      <div className="contact-grid">
        <div className="contact-card">
          <span>Adres</span>
          <p>Çankaya / Ankara</p>
        </div>

        <div className="contact-card">
          <span>E-Posta</span>
          <a href="mailto:info@afamimarlik.com">info@afamimarlik.com</a>
        </div>

        <div className="contact-card">
          <span>Telefon</span>
          <a href="tel:+905065898848">+90 506 589 88 48</a>
        </div>
      </div>

      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps?q=%C3%87ankaya%2C%20Ankara&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="AFA Mimarlık Konum"
        />
      </div>
    </section>
  );
}