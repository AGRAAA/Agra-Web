
const metrics = [
  { value: "5,442", label: "Order-demand units" },
  { value: "3,783", label: "Delivered units" },
  { value: "10", label: "Stockout candidates" },
  { value: "47", label: "No-sales products" },
];

const findings = [
  {
    number: "01",
    title: "Product demand",
    description:
      "T-Shirt Graphic BajuKita (PRD299) recorded the highest demand, with 33 units across eligible orders.",
  },
  {
    number: "02",
    title: "Brand performance",
    description:
      "Riang Apparel led delivered gross product revenue with Rp118,443,000, representing approximately 13.2% of the total.",
  },
  {
    number: "03",
    title: "Inventory review",
    description:
      "10 products had zero current stock despite recent demand. Another 47 products had positive stock but no recorded demand in the latest 90-day period.",
  },
];

const recommendations = [
  "Review stockout candidates and validate whether replenishment is necessary.",
  "Compare brand revenue with product margins and return rates before allocating restock budgets.",
  "Investigate products with no recent sales, including listing status, seasonality, and data accuracy.",
  "Review high stock exposure against stock age and expected demand.",
];

export default function GayanaraProject() {
  return (
    <main className="min-h-screen bg-[#171A20] text-[#F4F5F7]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <a
          href="/"
          className="text-sm text-[#A7ADB8] transition hover:text-[#C7F36B]"
        >
          ← Back to AGRA
        </a>

        <header className="mt-16 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C7F36B]">
            Portfolio Case Study · Data Analysis
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Gayanara Product & Inventory Analysis
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-[#A7ADB8]">
            Turning product, order, and inventory data into practical buying
            signals to support smarter restock decisions.
          </p>

          <p className="mt-5 text-sm text-[#A7ADB8]">
            Spreadsheet Analysis · Product Performance · Inventory Review
          </p>
        </header>

        <section className="mt-20">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C7F36B]">
              Project overview
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              The business challenge
            </h2>
          </div>

          <p className="max-w-3xl leading-8 text-[#A7ADB8]">
            The buying team faces a limited restock budget. This analysis
            examines order-item, order-status, product, and inventory data to
            identify high-demand products, leading brands, and inventory that
            may require replenishment or further review.
          </p>
        </section>

        <section className="mt-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C7F36B]">
            Analysis snapshot
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <article
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-[#232731] p-6"
              >
                <p className="text-3xl font-semibold tracking-tight md:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-3 text-sm text-[#A7ADB8]">
                  {metric.label}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-4 text-xs leading-6 text-[#A7ADB8]">
            Dataset period: January 2022 – February 2025. Recent inventory
            screening period: December 1, 2024 – February 28, 2025.
          </p>
        </section>

        <section className="mt-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C7F36B]">
            Key findings
          </p>
          <h2 className="mt-3 text-2xl font-semibold">
            What the data revealed
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {findings.map((finding) => (
              <article
                key={finding.number}
                className="rounded-2xl border border-white/10 bg-[#232731] p-6"
              >
                <p className="text-sm text-[#C7F36B]">{finding.number}</p>
                <h3 className="mt-6 text-xl font-semibold">
                  {finding.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#A7ADB8]">
                  {finding.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C7F36B]">
            Business recommendations
          </p>
          <h2 className="mt-3 text-2xl font-semibold">
            From analysis to action
          </h2>

          <div className="mt-8 space-y-4">
            {recommendations.map((recommendation, index) => (
              <div
                key={recommendation}
                className="flex gap-4 border-b border-white/10 pb-4"
              >
                <span className="text-sm text-[#C7F36B]">
                  0{index + 1}
                </span>
                <p className="text-sm leading-7 text-[#A7ADB8]">
                  {recommendation}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C7F36B]">
            Methodology
          </p>
          <h2 className="mt-3 text-2xl font-semibold">
            How the analysis was conducted
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-medium">Data preparation</h3>
              <p className="mt-3 text-sm leading-7 text-[#A7ADB8]">
                Order items were joined with order status, order dates, and
                product attributes. Cancelled and returned orders were
                excluded from demand and realized-sales metrics.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Demand and revenue</h3>
              <p className="mt-3 text-sm leading-7 text-[#A7ADB8]">
                Demand includes processing, shipped, and delivered orders.
                Realized sales and brand revenue use delivered orders only.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Inventory screening</h3>
              <p className="mt-3 text-sm leading-7 text-[#A7ADB8]">
                Inventory was screened using current stock and sales activity
                during the latest 90-day dataset period.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Tools</h3>
              <p className="mt-3 text-sm leading-7 text-[#A7ADB8]">
                Google Sheets / Excel-compatible workbook, data joins,
                filtering, aggregation, and ranking.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20 rounded-2xl border border-white/10 bg-[#232731] p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C7F36B]">
            Project deliverable
          </p>
          <h2 className="mt-3 text-2xl font-semibold">
            Explore the analysis workbook
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#A7ADB8]">
            The workbook includes the dashboard, product performance,
            brand performance, inventory analysis, methodology, and data
            quality review.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/documents/Gayanara_Product_Inventory_Analysis_Portfolio.xlsx"
              className="inline-flex rounded-full bg-[#C7F36B] px-6 py-3 text-sm font-semibold text-[#171A20] transition hover:opacity-90"
              download
            >
              Download Excel Workbook ↗
            </a>

            <a
              href="/documents/Gayanara_Product_Inventory_Analysis_Portfolio.xlsx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm text-[#F4F5F7] transition hover:border-[#C7F36B]"
            >
              Open Workbook ↗
            </a>
          </div>
        </section>

        <section className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs leading-6 text-[#A7ADB8]">
            This case study is based on the supplied dataset and is intended
            for analytical demonstration. Inventory flags are screening
            indicators, not definitive reorder decisions. Revenue figures
            represent gross product revenue, not profit or net revenue.
          </p>
        </section>

        <footer className="mt-20 border-t border-white/10 pt-8 text-sm text-[#A7ADB8]">
          AGRA. Built to evolve.
        </footer>
      </div>
    </main>
  );
}
