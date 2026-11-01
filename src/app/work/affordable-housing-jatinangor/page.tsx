
export default function AffordableHousingProject() {
  return (
    <main className="min-h-screen bg-[#171A20] text-[#F4F5F7]">
      <div className="mx-auto max-w-5xl px-6 py-16 md:px-10">

        <a
          href="/"
          className="text-sm text-[#A7ADB8] hover:text-[#C7F36B]"
        >
          ← Back to AGRA
        </a>

        <header className="mb-16 mt-16">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#C7F36B]">
            Research / Market Analysis / Budget Optimization
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Affordable Housing Research:
            <span className="text-[#C7F36B]"> Jatinangor</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#A7ADB8]">
            An exploration of ultra-budget accommodation options,
            market feasibility, and negotiation strategies for
            students in Jatinangor.
          </p>

          <p className="mt-4 text-sm text-[#A7ADB8]">
            Riset Akomodasi Mahasiswa · Jatinangor, Indonesia
          </p>
        </header>

        <section className="mb-16 border-t border-white/10 pt-10">
          <h2 className="mb-5 text-2xl font-semibold">
            01. Project Overview
          </h2>

          <p className="leading-relaxed text-[#A7ADB8]">
            This research investigates the feasibility of finding
            student accommodation in Jatinangor with an extremely
            limited budget of IDR 5 million.
          </p>

          <p className="mt-4 leading-relaxed text-[#A7ADB8]">
            Penelitian ini mengevaluasi pilihan kost, struktur biaya,
            keterjangkauan harga, serta peluang negosiasi untuk
            mahasiswa dengan anggaran terbatas.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 p-5">
              <p className="text-sm text-[#A7ADB8]">Research Location</p>
              <p className="mt-2 text-xl font-semibold">Jatinangor</p>
            </div>

            <div className="rounded-xl border border-white/10 p-5">
              <p className="text-sm text-[#A7ADB8]">Target Budget</p>
              <p className="mt-2 text-xl font-semibold">IDR 5 Million</p>
            </div>

            <div className="rounded-xl border border-white/10 p-5">
              <p className="text-sm text-[#A7ADB8]">Research Focus</p>
              <p className="mt-2 text-xl font-semibold">Affordability</p>
            </div>
          </div>
        </section>

        <section className="mb-16 border-t border-white/10 pt-10">
          <h2 className="mb-5 text-2xl font-semibold">
            02. Market Findings
          </h2>

          <p className="mb-6 leading-relaxed text-[#A7ADB8]">
            Berdasarkan laporan, beberapa pilihan kost memiliki
            harga terendah sekitar IDR 850,000–900,000 per bulan.
            These figures reflect the report's research snapshot,
            not verified current listings.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-[#C7F36B]">
                  <th className="py-4 pr-4">Property</th>
                  <th className="py-4 pr-4">Area</th>
                  <th className="py-4">Monthly Rate</th>
                </tr>
              </thead>
              <tbody className="text-[#A7ADB8]">
                <tr className="border-b border-white/10">
                  <td className="py-4 pr-4">Kost Pondok Putri Monica</td>
                  <td className="py-4 pr-4">Cikeruh</td>
                  <td className="py-4">IDR 850,000</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 pr-4">Hauraakosan</td>
                  <td className="py-4 pr-4">Cileles</td>
                  <td className="py-4">IDR 900,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16 border-t border-white/10 pt-10">
          <h2 className="mb-5 text-2xl font-semibold">
            03. Budget Feasibility
          </h2>

          <p className="leading-relaxed text-[#A7ADB8]">
            At IDR 850,000 per month, the estimated accommodation
            cost reaches IDR 5.1 million for six months and
            IDR 10.2 million for twelve months.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-[#232731] p-6">
              <p className="text-sm text-[#A7ADB8]">
                Estimated 6-month cost
              </p>
              <p className="mt-2 text-3xl font-semibold">
                IDR 5.1M
              </p>
            </div>

            <div className="rounded-xl bg-[#232731] p-6">
              <p className="text-sm text-[#A7ADB8]">
                Estimated 12-month cost
              </p>
              <p className="mt-2 text-3xl font-semibold">
                IDR 10.2M
              </p>
            </div>
          </div>

          <p className="mt-6 leading-relaxed text-[#A7ADB8]">
            Kesimpulan laporan: anggaran IDR 5 juta belum mencukupi
            untuk biaya kost selama 12 bulan. Untuk periode enam
            bulan, diperlukan negosiasi sekitar IDR 100,000 atau
            bentuk konsesi biaya lainnya.
          </p>
        </section>

        <section className="mb-16 border-t border-white/10 pt-10">
          <h2 className="mb-5 text-2xl font-semibold">
            04. Risks & Considerations
          </h2>

          <ul className="space-y-4 text-[#A7ADB8]">
            <li>
              <strong className="text-[#F4F5F7]">
                Utility costs —
              </strong>{" "}
              Periksa biaya listrik, air, dan token secara terpisah.
            </li>
            <li>
              <strong className="text-[#F4F5F7]">
                Internet quality —
              </strong>{" "}
              Pastikan kualitas dan pembagian akses WiFi.
            </li>
            <li>
              <strong className="text-[#F4F5F7]">
                Bathroom facilities —
              </strong>{" "}
              Periksa rasio kamar mandi bersama terhadap penghuni.
            </li>
            <li>
              <strong className="text-[#F4F5F7]">
                Security —
              </strong>{" "}
              Evaluasi kunci, gerbang, penerangan, dan lingkungan.
            </li>
            <li>
              <strong className="text-[#F4F5F7]">
                Transportation —
              </strong>{" "}
              Pertimbangkan biaya dan waktu perjalanan ke kampus.
            </li>
          </ul>
        </section>

        <section className="mb-16 border-t border-white/10 pt-10">
          <h2 className="mb-5 text-2xl font-semibold">
            05. Negotiation Strategy
          </h2>

          <ol className="list-inside list-decimal space-y-4 leading-relaxed text-[#A7ADB8]">
            <li>
              Negotiate a six-month semester accommodation package.
            </li>
            <li>
              Explore direct surveys for unlisted traditional
              boarding houses.
            </li>
            <li>
              Use upfront payment as a potential negotiation lever.
            </li>
            <li>
              Compare secondary-market listings and local communities.
            </li>
            <li>
              Audit all additional costs before making a decision.
            </li>
          </ol>

          <p className="mt-6 leading-relaxed text-[#A7ADB8]">
            Strategi utama bukan hanya mencari harga sewa terendah,
            tetapi mengoptimalkan total biaya tempat tinggal.
          </p>
        </section>

        <section className="border-t border-white/10 pt-10">
          <h2 className="mb-5 text-2xl font-semibold">
            06. Original Research Report
          </h2>

          <p className="mb-6 leading-relaxed text-[#A7ADB8]">
            Read the original research document below.
            Dokumen ini memuat analisis dan temuan riset secara lengkap.
          </p>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#232731]">
            <iframe
              src="/documents/jatinangor-affordable-housing-research.pdf"
              title="Jatinangor Affordable Housing Research Report"
              className="h-[650px] w-full"
            />
          </div>

          <a
            href="/documents/jatinangor-affordable-housing-research.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full border border-[#C7F36B] px-6 py-3 text-sm font-medium text-[#C7F36B] transition hover:bg-[#C7F36B] hover:text-[#171A20]"
          >
            Open / Download Full Report ↗
          </a>
        </section>

        <footer className="mt-20 border-t border-white/10 pt-8 text-sm text-[#A7ADB8]">
          <p>AGRA — Research & Data Analysis</p>
          <p className="mt-2">Built to evolve.</p>
        </footer>

      </div>
    </main>
  );
}
