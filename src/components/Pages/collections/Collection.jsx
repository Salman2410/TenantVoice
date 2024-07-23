import React from "react";
import TabsComponent from "./Tab";
import MyCalendar from "./Calendar";

const Collection = () => {
  return (
    <div>
      <TabsComponent />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">My Calendar</h1>
          </div>
        </header>
        <main className="py-10">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {/* <MyCalendar /> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Collection;
