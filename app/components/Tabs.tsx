const tabs = [
    { label: "All", count: 4500, active: true },
    { label: "Draft", count: 1203 },
    { label: "Pending", count: 890 },
    { label: "Published", count: 2432 },
    { label: "Archived", count: 320 },
  ];
  
  export default function Tabs() {
    return (
      <div className="flex flex-wrap gap-3 text-sm mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`px-4 py-2 rounded-md border transition-all font-medium cursor-pointer ${
              tab.active
                ? "bg-[#1C1442] text-white border-[#1C1442] hover:bg-[#3f3862]"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>
    );
  }
  