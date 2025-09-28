import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import DashboardCard from "@/components/DashboardCard";
import EmissionsChart from "@/components/EmissionsChart";
import { fetchCompanies, fetchEmissions } from "@/lib/api";

export default async function Home() {
  const companies = await fetchCompanies();
  const mainCompany = companies[0]; // 첫 번째 회사 기준
  // 2025-09-28 The following code does not need to assign based on exam, so comments it out.
  const emissions = await fetchEmissions(mainCompany.id);

  // 2025-09-28 Below two lines are added to handle monthly index.
  // mainCompany는 Company 타입
  const mainCompanyEmissions = mainCompany.emissions;
  // 가장 최근 달의 인덱스 (배열 마지막)
  const mainMonthIndex = mainCompanyEmissions.length - 1;
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6 space-y-6">
          <h2 className="text-xl font-bold mb-4">{mainCompany.name} Dashboard</h2>

          <div className="grid grid-cols-3 gap-6">
            <DashboardCard
              title="Total Emissions"
              value={`${mainCompany.emissions.reduce((sum, e) => sum + e.emissions, 0).toLocaleString()} tCO₂`}
            />
            <DashboardCard
              title="Monthly Target"
              value={`${mainCompany.emissions[mainMonthIndex]?.emissions.toLocaleString() ?? 0} tCO₂`}
            />
            <DashboardCard
              title="Reduction Achieved"
              value={`-- %`} // 실제 과제 모델에는 없음, 필요하면 계산 로직 추가
            />
          </div>

          <EmissionsChart data={emissions} />
        </main>
      </div>
    </div>
  );
}
