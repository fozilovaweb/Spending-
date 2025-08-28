import React from "react";
const chartData = [
  {
    id: 1,
    weekDays: "monday",
    value: 42,
  },
  {
    id: 2,
    weekDays: "tuesday",
    value: 34,
  },
  {
    id: 3,
    weekDays: "wednesday",
    value: 41,
  },
  {
    id: 4,
    weekDays: "thursday",
    value: 30,
  },
  {
    id: 5,
    weekDays: "friday",
    value: 76,
  },
  {
    id: 6,
    weekDays: "saturday",
    value: 60,
  },
  {
    id: 7,
    weekDays: "sunday",
    value: 24,
  },
];

function CardBottom() {
  const [maxChart] = [...chartData].sort((a, b) => {
    return b.value - a.value;
  });

  function chartHeight(h) {
    let { value } = maxChart;

    return `${((h * 100) / value).toFixed(1)}%`;
  }

  return (
    <div className="bg-light  p-10 rounded-[20px]">
      <h1 className="text-dark-brown font-bold text-[2rem] mb-[60px] max-[550px]:text-xl">
        Spending - Last 7 days
      </h1>

      <ul className="w-full flex justify-between gap-2 border-b-2 border-cream pb-8 mb-8">
        {chartData.map((ch) => {
          return (
            <li
              className="w-[50px] flex flex-col gap-2 text-center"
              key={ch.id}
            >
              <div className="flex items-end  h-[150px] relative">
                <div
                  style={{ height: chartHeight(ch.value) }}
                  className={` chart-item rounded-[5px] w-full ${
                    ch.value == maxChart.value
                      ? "bg-cyan hover:bg-hovercyan"
                      : "bg-red hover:bg-hovered"
                  } relative`}
                >
                  <span className="absolute -top-2  left-[50%] -translate-x-[50%] -translate-y-[100%]">
                    ${ch.value}
                  </span>
                </div>
              </div>
              <span className="w-full">{ch.weekDays.slice(0, 3)}</span>
            </li>
          );
        })}
      </ul>

      <div className="w-full max-w-[460px] flex items-center justify-between max-[550px]:gap-5">
        <div className="flex flex-col gap-4">
          <span className="text-medium-brown max-[550px]:text-md">
            Total this month
          </span>
          <span className="font-bold  text-dark-brown text-[3rem] max-[550px]:text-[2rem]">
            $478.33
          </span>
        </div>
        <div className="flex flex-col gap-[15px] mt-[31px] shrink-0">
          <span>+2.4% </span>
          <span>from last month</span>
        </div>
      </div>
    </div>
  );
}

export default CardBottom;
