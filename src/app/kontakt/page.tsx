export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <div className="mb-5 border-b border-gray-200 pb-5">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          Kontakt
        </h1>
      </div>
      <div className="flex-1">
        <p className="mt-4">
          Dein Feedback und deine Fragen sind uns sehr wichtig. Solltest du
          Anregungen zur Verbesserung unserer Webseite haben, mehr Informationen
          wünschen oder Fragen zu den hier dargestellten Daten haben, zögere
          bitte nicht, uns zu kontaktieren.
        </p>
        <p className="mt-4">
          Bitte beachte, dass wir aufgrund der Menge an Anfragen, die wir
          erhalten, etwas Zeit benötigen könnten, um auf deine Nachricht zu
          antworten. Wir bemühen uns jedoch, alle Anfragen so schnell wie
          möglich zu beantworten.
        </p>
        <p className="mt-4">
          Du kannst uns über die folgende E-Mail-Adresse erreichen:
        </p>
        <a
          href="mailto:info@mountainbikezug.ch"
          className="mt-4 text-blue-500 underline"
        >
          info@mountainbikezug.ch
        </a>
        <p className="mt-4">
          Wir freuen uns darauf, von dir zu hören und sind stets bemüht, diese
          Plattform so informativ und benutzerfreundlich wie möglich zu
          gestalten. Vielen Dank für dein Verständnis und dein Interesse an
          unserem Projekt!
        </p>
        <div className="mt-4">
          <p>Folge uns auf unseren Social Media Kanälen:</p>
          <a
            href="https://www.instagram.com/your_instagram_handle"
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-blue-500 underline"
          >
            Instagram
          </a>
          <br />
          <a
            href="https://www.facebook.com/your_facebook_page"
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-blue-500 underline"
          >
            Facebook
          </a>
        </div>
      </div>
    </>
  );
}
