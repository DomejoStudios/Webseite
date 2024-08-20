export default function Dienstleistungen () {

  return (
    <>
      <section className="dienstleistungen" id="IDDienstleistungen">
        <h2>Dienstleistungen</h2>
        <div className="dienstleistungen-container">
          
          <div className="dienstleistungen-content">
            <table>
              <thead>
                <tr>
                  <th id="fill-field"></th>
                  <th>Grund Paket</th>
                  <th>Starter Paket</th>
                  <th>Business Paket</th>
                  <th>Unternehmens Paket</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Art der Webseite</td>
                  <td>One-Page</td>
                  <td>One-Page</td>
                  <td>Multi-Page</td>
                  <td>Multi-Page</td>
                </tr>
                <tr>
                  <td>Hosting*</td>
                  <td className="included">&#10003;</td>
                  <td className="included">&#10003;</td>
                  <td className="included">&#10003;</td>
                  <td className="included">&#10003;</td>
                </tr>
                <tr>
                  <td>Lifetime Support*</td>
                  <td className="included">&#10003;</td>
                  <td className="included">&#10003;</td>
                  <td className="included">&#10003;</td>
                  <td className="included">&#10003;</td>
                </tr>
                <tr>
                  <td>SEO Optimierung</td>
                  <td>Grundlegend</td>
                  <td>Grundlegend</td>
                  <td>Erweitert</td>
                  <td>Erweitert</td>
                </tr>
                <tr>
                  <td>Dokumentation</td>
                  <td className="included">&#10003;</td>
                  <td className="included">&#10003;</td>
                  <td className="included">&#10003;</td>
                  <td className="included">&#10003;</td>
                </tr>
                <tr>
                  <td>Content Updates</td>
                  <td className="empty-field"></td>
                  <td className="included">&#10003;</td>
                  <td className="included">&#10003;</td>
                  <td className="included">&#10003;</td>
                </tr>
                <tr>
                  <td>Google Analytics</td>
                  <td className="empty-field"></td>
                  <td className="empty-field"></td>
                  <td className="included">&#10003;</td>
                  <td className="included">&#10003;</td>
                </tr>
                <tr>
                  <td>Sicherheits Updates</td>
                  <td className="empty-field"></td>
                  <td className="empty-field"></td>
                  <td className="included">&#10003;</td>
                  <td className="included">&#10003;</td>
                </tr>
                <tr>
                  <td>Reservierservice</td>
                  <td className="empty-field"></td>
                  <td className="empty-field"></td>
                  <td className="empty-field"></td>
                  <td className="included">&#10003;</td>
                </tr>
                <tr>
                  <td>Datenbanken</td>
                  <td className="empty-field"></td>
                  <td className="empty-field"></td>
                  <td className="empty-field"></td>
                  <td className="included">&#10003;</td>
                </tr>
                <tr>
                  <td>Login Service</td>
                  <td className="empty-field"></td>
                  <td className="empty-field"></td>
                  <td className="empty-field"></td>
                  <td className="included">&#10003;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            *Bei jedem service nehmen wir eine Monatliche pauschale von 15€ pro Monat. Diese pauschale beinhaltet das Hosting, sowhl als auch den Lifetime Support
          </p>
        </div>
      </section>
    </>
  );
}