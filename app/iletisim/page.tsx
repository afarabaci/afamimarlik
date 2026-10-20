export default function Iletisim(){
  return(
    <section className="page-section contact-page">
      <div className="page-heading">
        <h1>İletişim</h1>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <span>Adres</span>
          <p>Mustafa Kemal Mah. Dumlupınar Blv. No: 274/2 Mahall Ankara C2 Blok No: 47 Çankaya/Ankara</p>
        </div>

        <div className="contact-card">
          <span>E-Posta</span>
          <a href="mailto:ahmetfarukarabaci@gmail.com">
            ahmetfarukarabaci@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <span>Telefon</span>
          <a href="tel:+905065898848">+90 506 589 88 48</a>
        </div>
      </div>

      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1843.0615491779567!2d32.752193120855615!3d39.90830856755117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3386762728621%3A0x88fbbb6e491e6502!2sMahall%20Ankara!5e1!3m2!1str!2str!4v1792516979714!5m2!1str!2str"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Afa Mimarlık Konum"
        />
      </div>
    </section>
  );
}