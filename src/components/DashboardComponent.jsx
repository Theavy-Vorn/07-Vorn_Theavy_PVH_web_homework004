import React from "react";
import {dashboard} from "../data/dashboard";

export default function DashboardComponent() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>

      {/* display summary on each card */}
      <div className="flex items-center gap-2">
      {dashboard.map((task) => 
        <div className="flex flex-row gap-5">
          <div className="flex bg-white gap-5 py-3.5 px-4 rounded-xl w-auto">
            <div className= {`p-3 rounded-xl ${task.color}`} >
              <img src={task. icon} alt="file icon" />
            </div>
            <div>
              <p className="text-xl font-semibold">{task.totalTasks}</p>
              <p className="text-gray-400">{task.label}</p>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
