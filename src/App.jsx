import "./App.css";
import SidebarComponent from './components/SidebarComponent';
import LearningMasteriralComponent from './components/LearningMaterialsComponent';
import TopNavbarComponent from './components/TopNavbarComponent';
import DashboardComponent from './components/DashboardComponent';
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import FilterComponent from "./components/FilterComponent";
import CardComponent from "./components/CardComponent";
import AssignmentsComponent from './components/AssignmentsComponent';
function App() {
  return (
    <>
      <div class="grid grid-cols-12 w-full">
        <div class="col-span-2 bg-amber-300">
          <SidebarComponent />
        </div>
        
        <div class="col-span-10 w-full p-5 bg-[#f0f1f4]">
          <TopNavbarComponent  />
          <div class="grid grid-cols-8 w-full mt-[30px] ">
            <div class="col-span-6 h-5">
              <DashboardComponent />
              <div class="flex justify-between align-center m-5">
                <div>
                <AssignmentsComponent/>
                </div>
                <div>
                  <AddNewProjectComponent />
                </div>
              </div>
              <CardComponent />
            </div>
            <div class="col-span-2">
              <LearningMasteriralComponent />
            </div>
            
          </div>
          {/* <CardComponent /> */}
        </div>
      </div>
    </>
  );
}

export default App;
