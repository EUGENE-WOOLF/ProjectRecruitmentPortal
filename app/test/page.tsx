import Sidebar from "@/components/shared/Sidebar/Sidebar";

export const metadata = {
  title: "Sidebar Test",
};

export default function Test() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <main className="col-span-9 p-8">
          <h1 className="text-3xl font-bold mb-4">Sidebar test page</h1>
          <p className="text-white/80">
            This page shows the sidebar component in a simple layout.
          </p>
        </main>
      </div>
    </div>
  );
}
