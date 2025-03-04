import "./App.css";
import SidebarComponent from './components/SidebarComponent';
import LearningMasteriralComponent from './components/LearningMaterialsComponent';
import TopNavbarComponent from './components/TopNavbarComponent';
import DashboardComponent from './components/DashboardComponent';
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import FilterComponent from "./components/FilterComponent";
import CardComponent from "./components/CardComponent";
function App() {
  return (
    <>
      <div class="grid grid-cols-12 w-full">
        <div class="col-span-3 bg-amber-300">
          <SidebarComponent />
        </div>
        <div class="col-span-9 bg-amber-950 w-full p-5">
          <TopNavbarComponent  />

          <div class="grid grid-cols-12 w-full bg-amber-600">
            <div class="col-span-9 bg-blue-500 h-5">
              <DashboardComponent />
              <div class="flex justify-between align-center m-5">
                <div>
                  Assignments
                </div>
                <div>
                  <AddNewProjectComponent />
                </div>
              </div>
              
              <CardComponent />

            </div>
            <div class="col-span-3 bg-amber-200">
              <LearningMasteriralComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
