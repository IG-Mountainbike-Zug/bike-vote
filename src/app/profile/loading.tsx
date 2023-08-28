export default function Page() {
  return (
    <>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Kandidat*innen
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Hier findest du die vollständige Liste aller Kandidat*innen aus dem
            Kanton Zug, die an unserer Umfrage zum Thema Mountainbike
            teilgenommen haben. Du kannst durch die Liste stöbern, nach
            bestimmten Namen suchen und die Antworten jeder einzelnen Person auf
            die gestellten Fragen einsehen. So erhältst du einen direkten
            Einblick, wie sich jede einzelne Politiker*in zu den Themen rund um
            das Mountainbiken positioniert. Finde heraus, wer deine Interessen
            am besten vertritt und mache dir ein eigenes Bild!
          </p>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="sticky top-16 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="sticky top-16 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="sticky top-16 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="sticky top-16 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                  >
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="animate-pulse divide-y divide-gray-200 bg-white">
                {Array.from({ length: 15 }, (_, k) => (
                  <tr key={k}>
                    <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6 lg:pl-8">
                      <div className="h-4 w-2/5 rounded bg-gray-400"></div>
                      <dl className="font-normal lg:hidden">
                        <dd className="mt-1 truncate text-gray-700">
                          <div className="h-4 w-4/5 rounded bg-gray-400"></div>
                        </dd>
                        <dd className="mt-1 truncate text-gray-500 sm:hidden">
                          <div className="h-4 w-3/5 rounded bg-gray-400"></div>
                        </dd>
                      </dl>
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                      <div className="h-4 w-3/5 rounded bg-gray-400"></div>
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                      <div className="h-4 w-4/5 rounded bg-gray-400"></div>
                    </td>
                    <td className="hidden py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-8 lg:table-cell lg:pr-8">
                      <div className="h-4 w-4/5 rounded bg-gray-400"></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
