import { calculateTrendPercentage, cn } from "~/lib/utils";
function StatsCard({ headerTitle, total, currentMonth, lastMonth }: StatsCard) {
  const { trend, percentage } = calculateTrendPercentage(
    currentMonth,
    lastMonth
  );
  const isDecrement = trend === "decrement";
  return (
    <article className="stats-card">
      <h3 className="text-base font-medium">{headerTitle}</h3>
      <div className="content">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl">{total}</h2>
          <div className="flex items-center gap-3">
            <figure className="flex items-center gap-1">
              <img
                src={`/assets/icons/${isDecrement ? "arrow-down-red.svg" : "arrow-up-green.svg"}`}
                className="size-5"
                alt="arrow"
              />
              <fieldset
                className={cn(
                  "text-sm font-medium",
                  isDecrement ? "text-red-500" : "text-sucess-700"
                )}
              >
                {Math.round(percentage)}%
              </fieldset>
            </figure>
            <p className="text-sm font-medium text-gray-100 truncate">
              vs last month
            </p>
          </div>
        </div>
        <img
          src={`/assets/icons/${isDecrement ? "decrement.svg" : "increment.svg"}`}
          alt="trend graph"
          className="xl:w-32 w-full h-full md:h-32 xl:h-full"
        />
      </div>
    </article>
  );
}

export default StatsCard;
