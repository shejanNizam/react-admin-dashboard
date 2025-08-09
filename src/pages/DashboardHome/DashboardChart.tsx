import type { RadioChangeEvent } from "antd";
import { DatePicker, Radio } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import LoaderWraperComp from "../../components/LoaderWraperComp";

type TimeRange = "daily" | "monthly";
type ChartType = "line" | "bar";

const DashboardChart = () => {
  const [year, setYear] = useState(dayjs().year());
  const [timeRange, setTimeRange] = useState<TimeRange>("monthly");
  const [chartType, setChartType] = useState<ChartType>("bar");

  // Mock data - replace with your actual data fetching logic
  const monthlyData = [
    { month: "Jan", views: 12400 },
    { month: "Feb", views: 13600 },
    { month: "Mar", views: 14950 },
    { month: "Apr", views: 13300 },
    { month: "May", views: 16750 },
    { month: "June", views: 19100 },
    { month: "July", views: 21340 },
    { month: "Aug", views: 19880 },
    { month: "Sep", views: 17750 },
    { month: "October", views: 16670 },
    { month: "Nov", views: 14180 },
    { month: "Dec", views: 12800 },
  ];

  // Mock daily data for the current month
  const dailyData = Array.from({ length: 30 }, (_, i) => ({
    day: `${i + 1}`,
    views: Math.floor(Math.random() * 1000) + 500,
  }));

  const handleYearChange = (date: dayjs.Dayjs | null) => {
    if (date) {
      setYear(date.year());
      // Here you would typically refetch data based on the new year
    }
  };

  const handleTimeRangeChange = (e: RadioChangeEvent) => {
    setTimeRange(e.target.value);
    // Here you would typically refetch data based on the new time range
  };

  const handleChartTypeChange = (e: RadioChangeEvent) => {
    setChartType(e.target.value);
  };

  const currentData = timeRange === "monthly" ? monthlyData : dailyData;
  const xAxisKey = timeRange === "monthly" ? "month" : "day";
  const xAxisLabel = timeRange === "monthly" ? "Month" : "Day";

  return (
    <div className="bg-white rounded-lg px-[24px] py-[15px] drop-shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-[20px] text-primary font-medium">Earnings Chart</h4>
        <div className="flex gap-4">
          <DatePicker
            picker="year"
            value={dayjs().year(year)}
            onChange={handleYearChange}
          />
          <Radio.Group
            value={timeRange}
            onChange={handleTimeRangeChange}
            optionType="button"
            buttonStyle="solid"
          >
            <Radio.Button value="monthly">Monthly</Radio.Button>
            <Radio.Button value="daily">Daily</Radio.Button>
          </Radio.Group>
          <Radio.Group
            value={chartType}
            onChange={handleChartTypeChange}
            optionType="button"
            buttonStyle="solid"
          >
            <Radio.Button value="bar">Bar</Radio.Button>
            <Radio.Button value="line">Line</Radio.Button>
          </Radio.Group>
        </div>
      </div>

      <LoaderWraperComp isLoading={false} isError={false} dataEmpty={false}>
        <ResponsiveContainer width="100%" height={550}>
          {chartType === "bar" ? (
            <BarChart
              data={currentData}
              margin={{
                top: 20,
                left: -10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                tick={{ stroke: "#004686", strokeWidth: 0.5, fill: "#004686" }}
                dataKey={xAxisKey}
                label={{
                  value: xAxisLabel,
                  position: "insideBottomRight",
                  offset: -5,
                }}
              />
              <YAxis
                label={{ value: "Views", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderColor: "#ccc",
                  color: "#000",
                }}
                formatter={(value) => [`${value} views`, "Views"]}
              />
              <Legend />
              <Bar
                dataKey="views"
                name="Article Views"
                fill="#004686"
                barSize={timeRange === "monthly" ? 30 : 20}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          ) : (
            <LineChart
              data={currentData}
              margin={{
                top: 20,
                left: -10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                tick={{ stroke: "#004686", strokeWidth: 0.5, fill: "#004686" }}
                dataKey={xAxisKey}
                label={{
                  value: xAxisLabel,
                  position: "insideBottomRight",
                  offset: -5,
                }}
              />
              <YAxis
                label={{ value: "Views", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderColor: "#ccc",
                  color: "#000",
                }}
                formatter={(value) => [`${value} views`, "Views"]}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="views"
                name="Article Views"
                stroke="#004686"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </LoaderWraperComp>
    </div>
  );
};

export default DashboardChart;
