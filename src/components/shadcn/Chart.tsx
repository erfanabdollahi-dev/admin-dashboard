"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A simple area chart";

const chartData = [
    { month: "فروردین", desktop: 186 },
    { month: "اردیبهشت", desktop: 305 },
    { month: "خرداد", desktop: 237 },
    { month: "تیر", desktop: 73 },
    { month: "مرداد", desktop: 209 },
    { month: "شهریور", desktop: 214 },
    { month: "فروردین", desktop: 186 },
    { month: "اردیبهشت", desktop: 305 },
    { month: "خرداد", desktop: 237 },
    { month: "تیر", desktop: 73 },
    { month: "مرداد", desktop: 209 },
    { month: "شهریور", desktop: 214 },
];

const chartConfig = {
    desktop: {
        label: "تومان",
        color: "var(--color-ok-color)",
    },
} satisfies ChartConfig;

export default function ChartAreaDefault() {
    return (
        <Card className="chart h-full w-full font-ShabnamFD bg-[var(--box-color)] rounded-lg border-[1px] border-line-color">
            <CardHeader>
                <CardTitle>فروش</CardTitle>
                <CardDescription>نمودار فروش یکسال گذشته</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Area
                            dataKey="desktop"
                            type="natural"
                            fill="var(--color-desktop)"
                            fillOpacity={0.4}
                            stroke="var(--color-desktop)"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            {/* <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 leading-none font-medium">
                            Trending up by 5.2% this month{" "}
                            <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground flex items-center gap-2 leading-none">
                            January - June 2024
                        </div>
                    </div>
                </div>
            </CardFooter> */}
        </Card>
    );
}
