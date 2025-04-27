import { useUser, SignOutButton } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Activity,
  TrendingUp,
  Users,
  ShieldAlert,
  ChartLine,
  ChartBar,
  ChartPie,
  Ban,
  Eye,
  Bell,
  Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const AdminDashboard = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  // Check if user is an admin (you'll set this up in Clerk dashboard)
  useEffect(() => {
    if (!user || !user.publicMetadata?.admin) {
      navigate("/");
    }
  }, [user, navigate]);

  // Sample data for charts
  const lineChartData = [
    { name: "Apr 01", jobs: 4 },
    { name: "Apr 05", jobs: 7 },
    { name: "Apr 10", jobs: 5 },
    { name: "Apr 15", jobs: 9 },
    { name: "Apr 20", jobs: 11 },
    { name: "Apr 25", jobs: 8 },
    { name: "Apr 30", jobs: 14 },
  ];

  const barChartData = [
    { name: "Chisom J.", tasks: 23 },
    { name: "Oluwafemi", tasks: 21 },
    { name: "Sarah K.", tasks: 19 },
    { name: "Kwame T.", tasks: 17 },
    { name: "Adeola M.", tasks: 15 },
  ];

  const pieChartData = [
    { name: "Crypto (USDT/MATIC)", value: 65 },
    { name: "Naira (NGN)", value: 35 },
  ];

  const monthlyEarningsData = [
    { name: "Jan", amount: 150 },
    { name: "Feb", amount: 320 },
    { name: "Mar", amount: 280 },
    { name: "Apr", amount: 430 },
  ];

  const COLORS = ["#1E90FF", "#20C997", "#FC8181", "#9F7AEA"];

  // Sample user data for tables
  const users = [
    {
      username: "chisom_j",
      wallet: "0x71...3a4f",
      tasksCompleted: 23,
      status: "Active",
    },
    {
      username: "oluwafemi92",
      wallet: "0x82...5b3e",
      tasksCompleted: 21,
      status: "Active",
    },
    {
      username: "sarahk",
      wallet: "0x93...8c4d",
      tasksCompleted: 19,
      status: "Active",
    },
    {
      username: "kwame_t",
      wallet: "0xa4...7f2c",
      tasksCompleted: 17,
      status: "Banned",
    },
    {
      username: "adeola_m",
      wallet: "0xb5...1e9b",
      tasksCompleted: 15,
      status: "Active",
    },
  ];

  const jobs = [
    {
      title: "Binance Referrals",
      owner: "crypto_master",
      rewardPerRef: "$5 USDT",
      status: "Active",
    },
    {
      title: "Chipper Sign-ups",
      owner: "fintech_pro",
      rewardPerRef: "₦2,500",
      status: "Completed",
    },
    {
      title: "Brave Browser Install",
      owner: "web3_advocate",
      rewardPerRef: "$3 USDT",
      status: "Active",
    },
    {
      title: "Metamask Onboarding",
      owner: "defi_guru",
      rewardPerRef: "$4 USDT",
      status: "Pending Approval",
    },
    {
      title: "PiggyVest Referrals",
      owner: "savings_expert",
      rewardPerRef: "₦1,800",
      status: "Active",
    },
  ];

  const alerts = [
    { message: "User kwame_t flagged for fake referrals", priority: "high" },
    {
      message: "Platform escrow balance running low (< $500)",
      priority: "medium",
    },
    {
      message: "Spike in dispute requests for Brave Browser Install job",
      priority: "high",
    },
    {
      message: "12 new users registered in the past 24 hours",
      priority: "low",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F7FAFC] text-gray-800">
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gradient">ReferX</span>
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
              Admin
            </span>
          </div>
          <SignOutButton />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 animate-fade-in">
          Admin Dashboard
        </h1>

        {/* Dashboard Overview Section */}
        <section className="mb-8 animate-fade-in">
          <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 hover:translate-y-[-2px]">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Total Referral Jobs
                </CardTitle>
                <Activity className="h-5 w-5 text-[#1E90FF]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">247</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">↑ 12%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 hover:translate-y-[-2px]">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Platform Earnings
                </CardTitle>
                <TrendingUp className="h-5 w-5 text-[#20C997]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,286</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">↑ 23%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 hover:translate-y-[-2px]">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Registered Users
                </CardTitle>
                <Users className="h-5 w-5 text-[#1E90FF]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,024</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">↑ 8%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 hover:translate-y-[-2px]">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Pending Disputes
                </CardTitle>
                <ShieldAlert className="h-5 w-5 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-500">↑ 2</span> from last week
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Charts & Analytics Section */}
        <section
          className="mb-8 animate-fade-in"
          style={{ animationDelay: "100ms" }}
        >
          <h2 className="text-xl font-semibold mb-4">Charts & Analytics</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Referral Job Activity Chart */}
            <Card className="border border-gray-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base font-medium flex items-center">
                  <ChartLine className="h-4 w-4 mr-2 text-[#1E90FF]" />
                  Referral Job Activity (Last 30 Days)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={lineChartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" stroke="#888" fontSize={12} />
                      <YAxis stroke="#888" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          background: "white",
                          border: "1px solid #f0f0f0",
                          borderRadius: "8px",
                          fontSize: "12px",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="jobs"
                        stroke="#1E90FF"
                        strokeWidth={2}
                        dot={{ fill: "#1E90FF" }}
                        activeDot={{ r: 6, fill: "#1E90FF" }}
                        name="Jobs"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Top Referrers Chart */}
            <Card className="border border-gray-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base font-medium flex items-center">
                  <ChartBar className="h-4 w-4 mr-2 text-[#20C997]" />
                  Top 5 Referrers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barChartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" stroke="#888" fontSize={12} />
                      <YAxis stroke="#888" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          background: "white",
                          border: "1px solid #f0f0f0",
                          borderRadius: "8px",
                          fontSize: "12px",
                        }}
                      />
                      <Bar
                        dataKey="tasks"
                        fill="#20C997"
                        radius={[4, 4, 0, 0]}
                        name="Completed Tasks"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Currency Split Chart */}
            <Card className="border border-gray-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base font-medium flex items-center">
                  <ChartPie className="h-4 w-4 mr-2 text-purple-500" />
                  Currency Split
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) =>
                          `${name}: ${(percent * 100).toFixed(0)}%`
                        }
                        labelLine={false}
                      >
                        {pieChartData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          background: "white",
                          border: "1px solid #f0f0f0",
                          borderRadius: "8px",
                          fontSize: "12px",
                        }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Monthly Earnings Chart */}
            <Card className="border border-gray-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base font-medium flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2 text-[#1E90FF]" />
                  Monthly Earnings from Fees
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyEarningsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" stroke="#888" fontSize={12} />
                      <YAxis stroke="#888" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          background: "white",
                          border: "1px solid #f0f0f0",
                          borderRadius: "8px",
                          fontSize: "12px",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="amount"
                        stroke="#20C997"
                        strokeWidth={2}
                        dot={{ fill: "#20C997" }}
                        activeDot={{ r: 6, fill: "#20C997" }}
                        name="Amount ($)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* User Management Table */}
        <section
          className="mb-8 animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          <h2 className="text-xl font-semibold mb-4">User Management</h2>
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Username</TableHead>
                    <TableHead>Wallet Address</TableHead>
                    <TableHead>Tasks Completed</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.username} className="hover:bg-gray-50">
                      <TableCell className="font-medium">
                        {user.username}
                      </TableCell>
                      <TableCell className="font-mono text-sm">
                        {user.wallet}
                      </TableCell>
                      <TableCell>{user.tasksCompleted}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            user.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {user.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant={
                              user.status === "Active"
                                ? "destructive"
                                : "outline"
                            }
                            className="h-8 text-xs"
                          >
                            {user.status === "Active" ? (
                              <>
                                <Ban className="h-3.5 w-3.5 mr-1" /> Ban
                              </>
                            ) : (
                              "Unban"
                            )}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 text-xs"
                          >
                            <Eye className="h-3.5 w-3.5 mr-1" /> View
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between border-t px-6 py-3">
              <div className="text-sm text-muted-foreground">
                Showing <strong>5</strong> of <strong>1,024</strong> users
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </section>

        {/* Referral Job Management */}
        <section
          className="mb-8 animate-fade-in"
          style={{ animationDelay: "300ms" }}
        >
          <h2 className="text-xl font-semibold mb-4">
            Referral Job Management
          </h2>
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Job Title</TableHead>
                    <TableHead>Owner</TableHead>
                    <TableHead>Reward per Referral</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {jobs.map((job) => (
                    <TableRow key={job.title} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{job.title}</TableCell>
                      <TableCell>{job.owner}</TableCell>
                      <TableCell>{job.rewardPerRef}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            job.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : job.status === "Completed"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {job.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 text-xs"
                          >
                            <Eye className="h-3.5 w-3.5 mr-1" /> View
                          </Button>
                          {job.status !== "Completed" && (
                            <Button
                              size="sm"
                              variant="destructive"
                              className="h-8 text-xs"
                            >
                              Force Close
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between border-t px-6 py-3">
              <div className="text-sm text-muted-foreground">
                Showing <strong>5</strong> of <strong>247</strong> jobs
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </section>

        {/* Wallet & Payment Section */}
        <section
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Wallet & Payments</h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-base font-medium flex items-center">
                  <Wallet className="h-4 w-4 mr-2 text-[#1E90FF]" /> Platform
                  Wallet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-sm text-blue-600 font-medium">
                      Crypto Balance
                    </div>
                    <div className="text-2xl font-bold mt-1">
                      $8,750.25 USDT
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      + 328.5 MATIC
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="text-sm text-green-600 font-medium">
                      NGN Balance
                    </div>
                    <div className="text-2xl font-bold mt-1">₦1,250,430</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      ≈ $785.23 USD
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="font-medium mb-2">Recent Transactions</div>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    <div className="text-sm p-2 border-b border-gray-100 flex justify-between">
                      <span>Payout to user_323</span>
                      <span className="text-red-500">-$45.00</span>
                    </div>
                    <div className="text-sm p-2 border-b border-gray-100 flex justify-between">
                      <span>Platform fee from job #1082</span>
                      <span className="text-green-500">+$12.50</span>
                    </div>
                    <div className="text-sm p-2 border-b border-gray-100 flex justify-between">
                      <span>Escrow deposit from defi_guru</span>
                      <span className="text-green-500">+$200.00</span>
                    </div>
                    <div className="text-sm p-2 border-b border-gray-100 flex justify-between">
                      <span>Payout to oluwafemi92</span>
                      <span className="text-red-500">-₦15,000</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button size="sm" variant="default">
                    Approve Payouts
                  </Button>
                  <Button size="sm" variant="outline">
                    View All Transactions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alerts Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Alerts</h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-base font-medium flex items-center">
                  <Bell className="h-4 w-4 mr-2 text-orange-500" /> System
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {alerts.map((alert, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-md text-sm ${
                      alert.priority === "high"
                        ? "bg-red-50 text-red-700 border-l-4 border-red-500"
                        : alert.priority === "medium"
                        ? "bg-yellow-50 text-yellow-700 border-l-4 border-yellow-500"
                        : "bg-blue-50 text-blue-700 border-l-4 border-blue-500"
                    } animate-fade-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {alert.message}
                  </div>
                ))}
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button variant="ghost" size="sm" className="text-xs">
                  Mark All as Read
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>

      {/* Admin Footer */}
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-gray-500">
            ReferX Admin Dashboard v1.0.2 • &copy; 2025 ReferX
          </div>
          <div className="text-xs text-gray-500 mt-2 md:mt-0">
            Admin Support:{" "}
            <a href="mailto:admin@referx.app" className="text-[#1E90FF]">
              admin@referx.app
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// const AdminDashboard = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const root = window.document.documentElement;
//     if (isDarkMode) {
//       root.classList.add("dark");
//     } else {
//       root.classList.remove("dark");
//     }
//   }, [isDarkMode]);

export default AdminDashboard;
