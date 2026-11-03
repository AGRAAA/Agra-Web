export default function GayanaraSQLProject() {
  return (
    <main className="min-h-screen bg-[#171A20] text-[#F4F5F7]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <p className="text-xs uppercase tracking-[0.2em] text-[#C7F36B]">
          SQL DATA ANALYSIS / PORTFOLIO CASE STUDY
        </p>

        <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
          Gayanara SQL Data Analysis
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#A7ADB8]">
          Exploring product performance, brand revenue, and inventory risks
          through SQL Server queries.
        </p>
              <section id="overview" className="mt-20 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C7F36B]">
            PROJECT OVERVIEW
          </p>

          <h2 className="mt-5 text-2xl font-semibold md:text-3xl">
            Understanding Product Performance and Inventory
          </h2>

          <p className="mt-6 leading-relaxed text-[#A7ADB8]">
            This project explores Gayanara's retail dataset using SQL Server
            to examine product demand, brand revenue, and inventory conditions.
            The analysis focuses on extracting business insights through SQL
            queries and identifying products that may require further inventory
            review.
          </p>

          <p className="mt-4 leading-relaxed text-[#A7ADB8]">
            The work covers sales aggregation, product ranking, brand
            contribution, stockout screening, and inventory risk analysis.
          </p>
                </section>

        <section className="mt-20 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C7F36B]">
            TOOLS & TECHNIQUES
          </p>

          <h2 className="mt-5 text-2xl font-semibold md:text-3xl">
            SQL Server for Business Analysis
          </h2>

          <p className="mt-6 leading-relaxed text-[#A7ADB8]">
            The analysis was conducted using SQL Server, with queries designed
            to aggregate sales data, evaluate product performance, and examine
            inventory conditions.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "SQL Server",
              "INNER JOIN & LEFT JOIN",
              "GROUP BY & HAVING",
              "Common Table Expressions (CTE)",
              "Aggregate Functions",
              "Window Functions",
              "NULLIF & COALESCE",
              "CAST & Data Type Conversion",
            ].map((technique) => (
              <div
                key={technique}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-[#A7ADB8]"
              >
                {technique}
              </div>
            ))}
          </div>
                </section>

        <section id="product-analysis" className="mt-20 max-w-4xl scroll-mt-24">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C7F36B]">
            SQL ANALYSIS 01
          </p>

          <h2 className="mt-5 text-2xl font-semibold md:text-3xl">
            Top 10 Best-Selling Products
          </h2>

          <p className="mt-5 leading-relaxed text-[#A7ADB8]">
            This query identifies the ten products with the highest total
            quantity sold by joining order items, products, and orders.
            Cancelled and returned orders are excluded from the analysis.
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-white/10 bg-[#101319] p-5">
            <pre className="text-sm leading-relaxed text-[#C7F36B]">
              <code>{`SELECT TOP 10
    pr.product_id,
    pr.name,
    SUM(oi.quantity) AS total_unit_terjual
FROM order_items oi
JOIN products pr
    ON pr.product_id = oi.product_id
JOIN orders od
    ON od.order_id = oi.order_id
WHERE od.order_status NOT IN ('cancelled', 'returned')
GROUP BY
    pr.product_id,
    pr.name
ORDER BY total_unit_terjual DESC;`}</code>
            </pre>
          </div>

          <div className="mt-8 rounded-xl border border-white/10 p-6">
            <p className="text-xs uppercase tracking-[0.15em] text-[#A7ADB8]">
              KEY FINDING
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              T-Shirt Graphic BajuKita
            </h3>
            <p className="mt-2 text-3xl font-semibold text-[#C7F36B]">
              33 units sold
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#A7ADB8]">
              The product ranked first in the best-selling product analysis,
              based on the supplied SQL result.
            </p>
          </div>
                </section>

        <section id="brand-analysis" className="mt-20 max-w-4xl scroll-mt-24">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C7F36B]">
            SQL ANALYSIS 02
          </p>

          <h2 className="mt-5 text-2xl font-semibold md:text-3xl">
            Brand Revenue Analysis
          </h2>

          <p className="mt-5 leading-relaxed text-[#A7ADB8]">
            This query calculates total product revenue for each brand by
            multiplying item quantity by unit price. Cancelled and returned
            orders are excluded.
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-white/10 bg-[#101319] p-5">
            <pre className="text-sm leading-relaxed text-[#C7F36B]">
              <code>{`SELECT
    pr.brand,
    SUM(oi.quantity * oi.unit_price) AS total_revenue
FROM order_items oi
JOIN products pr
    ON pr.product_id = oi.product_id
JOIN orders od
    ON od.order_id = oi.order_id
WHERE od.order_status NOT IN ('cancelled', 'returned')
GROUP BY pr.brand
ORDER BY total_revenue DESC;`}</code>
            </pre>
          </div>

          <div className="mt-8 rounded-xl border border-white/10 p-6">
            <p className="text-xs uppercase tracking-[0.15em] text-[#A7ADB8]">
              KEY FINDING
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              Riang Apparel
            </h3>
            <p className="mt-2 text-3xl font-semibold text-[#C7F36B]">
              Rp160,435,000
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#A7ADB8]">
              Riang Apparel ranked first in total revenue among the brands
              in the supplied SQL result.
            </p>
          </div>
                </section>

        <section id="inventory-analysis" className="mt-20 max-w-4xl scroll-mt-24">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C7F36B]">
            SQL ANALYSIS 03
          </p>

          <h2 className="mt-5 text-2xl font-semibold md:text-3xl">
            Dead Stock Analysis
          </h2>

          <p className="mt-5 leading-relaxed text-[#A7ADB8]">
            This analysis explores products that have positive current stock
            but no recorded valid sales. Four query approaches were tested
            using JOINs, aggregation, HAVING, COALESCE, and a Common Table
            Expression (CTE).
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-white/10 bg-[#101319] p-5">
            <p className="mb-4 text-xs uppercase tracking-[0.15em] text-[#A7ADB8]">
              Fourth Query Attempt · CTE Approach
            </p>
            <pre className="text-sm leading-relaxed text-[#C7F36B]">
              <code>{`WITH valid_sales AS (
    SELECT
        oi.product_id,
        SUM(oi.quantity) AS total_sold
    FROM order_items oi
    JOIN orders od
        ON od.order_id = oi.order_id
    WHERE od.order_status NOT IN ('cancelled', 'returned')
    GROUP BY oi.product_id
)
SELECT
    pr.product_id,
    pr.name,
    pr.brand,
    pr.stock,
    COALESCE(vs.total_sold, 0) AS total_sold
FROM products pr
LEFT JOIN valid_sales vs
    ON vs.product_id = pr.product_id
WHERE
    COALESCE(vs.total_sold, 0) = 0
    AND pr.stock > 0
ORDER BY pr.stock DESC;`}</code>
            </pre>
          </div>

          <div className="mt-8 rounded-xl border border-white/10 p-6">
            <p className="text-xs uppercase tracking-[0.15em] text-[#A7ADB8]">
              QUERY RESULT
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              No result to display
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#A7ADB8]">
              The fourth query returned no rows matching the defined
              conditions. This result is documented as an outcome of the
              query, rather than evidence that the dataset contains no
              inventory risk.
            </p>
          </div>
                </section>

        
        <section className="mt-20 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C7F36B]">
            SQL ANALYSIS 04
          </p>

          <h2 className="mt-5 text-2xl font-semibold md:text-3xl">
            Stockout Analysis
          </h2>

          <p className="mt-5 leading-relaxed text-[#A7ADB8]">
            This query identifies products with zero current stock that
            have recorded valid sales. These products may require further
            investigation to understand potential stock availability risks.
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-white/10 bg-[#101319] p-5">
            <pre className="text-sm leading-relaxed text-[#C7F36B]">
              <code>{`SELECT
    pr.product_id,
    pr.name,
    pr.brand,
    pr.stock,
    SUM(oi.quantity) AS total_sold
FROM products pr
JOIN order_items oi
    ON pr.product_id = oi.product_id
JOIN orders od
    ON od.order_id = oi.order_id
WHERE od.order_status NOT IN ('cancelled', 'returned')
GROUP BY
    pr.product_id,
    pr.name,
    pr.brand,
    pr.stock
HAVING pr.stock = 0
ORDER BY total_sold DESC;`}</code>
            </pre>
          </div>

          <div className="mt-8 rounded-xl border border-white/10 p-6">
            <p className="text-xs uppercase tracking-[0.15em] text-[#A7ADB8]">
              ANALYSIS PURPOSE
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              Products with Zero Current Stock
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#A7ADB8]">
              Products with zero current stock and recorded valid sales
              are identified as stockout candidates. Historical sales
              indicate demand, but do not establish whether the products
              are currently experiencing unmet demand.
            </p>
          </div>
        </section>

        <section className="mt-20 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C7F36B]">
            SQL ANALYSIS 05
          </p>

          <h2 className="mt-5 text-2xl font-semibold md:text-3xl">
            Slow-Moving Inventory
          </h2>

          <p className="mt-5 leading-relaxed text-[#A7ADB8]">
            This query examines products with positive current stock and
            sorts them by the highest stock quantity and lowest recorded
            sales. The result provides an initial screening view of
            inventory that may require further review.
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-white/10 bg-[#101319] p-5">
            <pre className="text-sm leading-relaxed text-[#C7F36B]">
              <code>{`SELECT
    pr.product_id,
    pr.name,
    pr.brand,
    pr.stock,
    COALESCE(SUM(oi.quantity), 0) AS total_sold
FROM products pr
LEFT JOIN order_items oi
    ON pr.product_id = oi.product_id
LEFT JOIN orders od
    ON od.order_id = oi.order_id
WHERE
    od.order_status NOT IN ('cancelled', 'returned')
    OR od.order_id IS NULL
GROUP BY
    pr.product_id,
    pr.name,
    pr.brand,
    pr.stock
HAVING pr.stock > 0
ORDER BY
    pr.stock DESC,
    total_sold ASC;`}</code>
            </pre>
          </div>

          <div className="mt-8 rounded-xl border border-white/10 p-6">
            <p className="text-xs uppercase tracking-[0.15em] text-[#A7ADB8]">
              ANALYSIS PURPOSE
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              Inventory Review Candidates
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#A7ADB8]">
              Products with relatively high stock and low recorded sales
              can be prioritized for further investigation. This query is
              an exploratory screening, not a definitive dead-stock
              classification.
            </p>
          </div>
                </section>

        <section className="mt-20 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C7F36B]">
            SQL ANALYSIS 06
          </p>

          <h2 className="mt-5 text-2xl font-semibold md:text-3xl">
            Ranking Inventory Risk
          </h2>

          <p className="mt-5 leading-relaxed text-[#A7ADB8]">
            This query ranks products with positive stock based on the ratio
            between current stock and total valid units sold. A higher ratio
            can indicate a product that deserves further inventory review.
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-white/10 bg-[#101319] p-5">
            <pre className="text-sm leading-relaxed text-[#C7F36B]">
              <code>{`WITH valid_sales AS (
    SELECT
        oi.product_id,
        SUM(oi.quantity) AS total_sold
    FROM order_items oi
    JOIN orders od
        ON od.order_id = oi.order_id
    WHERE od.order_status NOT IN ('cancelled', 'returned')
    GROUP BY oi.product_id
)
SELECT TOP 10
    pr.product_id,
    pr.name,
    pr.brand,
    pr.stock,
    vs.total_sold,
    CAST(
        1.0 * pr.stock / NULLIF(vs.total_sold, 0)
        AS DECIMAL(10, 2)
    ) AS stock_to_sales_ratio
FROM products pr
JOIN valid_sales vs
    ON pr.product_id = vs.product_id
WHERE pr.stock > 0
ORDER BY stock_to_sales_ratio DESC;`}</code>
            </pre>
          </div>

          <div className="mt-8 rounded-xl border border-white/10 p-6">
            <p className="text-xs uppercase tracking-[0.15em] text-[#A7ADB8]">
              ANALYSIS METRIC
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              Stock-to-Sales Ratio
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#A7ADB8]">
              The ratio compares current stock quantity with cumulative
              valid sales quantity. It is used as a relative screening
              metric, not as a forecast of inventory coverage or days
              remaining in stock.
            </p>
          </div>
                </section>

        <section className="mt-20 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C7F36B]">
            SQL ANALYSIS 07
          </p>

          <h2 className="mt-5 text-2xl font-semibold md:text-3xl">
            Sales Contribution by Brand
          </h2>

          <p className="mt-5 leading-relaxed text-[#A7ADB8]">
            This query calculates each brand's revenue contribution as a
            percentage of total revenue. A Common Table Expression (CTE)
            is combined with a window function to calculate the overall
            revenue denominator.
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-white/10 bg-[#101319] p-5">
            <pre className="text-sm leading-relaxed text-[#C7F36B]">
              <code>{`WITH brand_revenue AS (
    SELECT
        pr.brand,
        SUM(oi.quantity * oi.unit_price) AS total_revenue
    FROM order_items oi
    JOIN products pr
        ON pr.product_id = oi.product_id
    JOIN orders od
        ON od.order_id = oi.order_id
    WHERE od.order_status NOT IN ('cancelled', 'returned')
    GROUP BY pr.brand
)
SELECT
    brand,
    total_revenue,
    CAST(
        total_revenue * 100.0 /
        SUM(total_revenue) OVER ()
        AS DECIMAL(5, 2)
    ) AS revenue_percentage
FROM brand_revenue
ORDER BY total_revenue DESC;`}</code>
            </pre>
          </div>

          <div className="mt-8 rounded-xl border border-white/10 p-6">
            <p className="text-xs uppercase tracking-[0.15em] text-[#A7ADB8]">
              ANALYSIS PURPOSE
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              Brand Revenue Contribution
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#A7ADB8]">
              The percentage indicates how much each brand contributes
              to the total revenue recorded in the query result. It helps
              compare brand revenue concentration across the dataset.
            </p>
          </div>
                </section>

        <section className="mt-20 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C7F36B]">
            SQL ANALYSIS 08
          </p>

          <h2 className="mt-5 text-2xl font-semibold md:text-3xl">
            Units Sold per Brand
          </h2>

          <p className="mt-5 leading-relaxed text-[#A7ADB8]">
            This query aggregates the total quantity of products sold by
            each brand. The results provide another perspective on brand
            performance based on sales volume rather than revenue.
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-white/10 bg-[#101319] p-5">
            <pre className="text-sm leading-relaxed text-[#C7F36B]">
              <code>{`SELECT
    pr.brand,
    SUM(oi.quantity) AS total_units_sold
FROM order_items oi
JOIN products pr
    ON pr.product_id = oi.product_id
JOIN orders od
    ON od.order_id = oi.order_id
WHERE od.order_status NOT IN ('cancelled', 'returned')
GROUP BY pr.brand
ORDER BY total_units_sold DESC;`}</code>
            </pre>
          </div>

          <div className="mt-8 rounded-xl border border-white/10 p-6">
            <p className="text-xs uppercase tracking-[0.15em] text-[#A7ADB8]">
              ANALYSIS PURPOSE
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              Brand Sales Volume
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#A7ADB8]">
              Comparing units sold by brand helps distinguish sales
              volume performance from revenue performance. A brand with
              higher unit sales does not necessarily generate the highest
              revenue.
            </p>
          </div>
                </section>

        <section id="methodology" className="mt-20 max-w-4xl scroll-mt-24">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C7F36B]">
            METHODOLOGY
          </p>

          <h2 className="mt-5 text-2xl font-semibold md:text-3xl">
            Data Processing & Analysis Approach
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">1. Data Integration</h3>
              <p className="mt-2 leading-relaxed text-[#A7ADB8]">
                Order items were joined with product and order tables to
                connect product attributes, quantities, unit prices, and
                order statuses.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">2. Sales Filtering</h3>
              <p className="mt-2 leading-relaxed text-[#A7ADB8]">
                Queries generally excluded orders with cancelled and returned
                statuses. Other order statuses remained included in the
                calculations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">3. Business Metrics</h3>
              <p className="mt-2 leading-relaxed text-[#A7ADB8]">
                Product demand was evaluated using total units sold. Brand
                performance was examined through revenue, revenue contribution,
                and sales volume. Inventory screening used current stock and
                recorded sales quantities.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">4. Query Experimentation</h3>
              <p className="mt-2 leading-relaxed text-[#A7ADB8]">
                Multiple approaches were tested for dead-stock analysis,
                including LEFT JOIN, HAVING, COALESCE, and CTE-based queries.
                The final documented attempt returned no matching rows.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-xl border border-white/10 p-6">
            <p className="text-xs uppercase tracking-[0.15em] text-[#C7F36B]">
              ANALYSIS LIMITATIONS
            </p>

            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[#A7ADB8]">
              <li>
                • The analysis uses the current stock values available in
                the products table.
              </li>
              <li>
                • The queries do not establish a specific sales observation
                period.
              </li>
              <li>
                • Stock-to-sales ratio is a screening metric, not a demand
                forecast or inventory-days calculation.
              </li>
              <li>
                • The dead-stock query returned no matching records; this
                does not prove that inventory risk is absent.
              </li>
              <li>
                • Revenue is calculated from quantity multiplied by unit
                price and does not represent profit.
              </li>
              <li>
                • The analysis does not include supplier lead times,
                product margins, or historical stock movements.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
