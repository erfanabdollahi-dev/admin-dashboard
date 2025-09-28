import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Example data
const data = [
    { name: "Jan", value: 40 },
    { name: "Feb", value: 55 },
    { name: "Mar", value: 30 },
    { name: "Apr", value: 70 },
    { name: "May", value: 60 },
    { name: "Jun", value: 90 },
];

export default function DashboardLineChart() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Monthly Sales</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid
                                strokeDasharray="3 3"
                                className="stroke-muted"
                            />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="hsl(var(--primary))" // uses shadcn theme color
                                strokeWidth={2}
                                dot={{ r: 4 }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
