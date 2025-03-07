import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials as initialData } from "../data/learningMaterials";

export default function LearningMaterialsComponent() {
  const [sorting, setSorting] = useState(""); // Default sorting state
  const [data, setData] = useState([...initialData]); // Copy original data

  // Sorting logic using useEffect
  useEffect(() => {
    setData((prevData) => {
      let sortedData = [...prevData];

      if (sorting === "A-Z") {
        sortedData.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sorting === "Z-A") {
        sortedData.sort((a, b) => b.title.localeCompare(a.title));
      }

      return sortedData;
    });
  }, [sorting]);

  // Function to toggle the favorite state
  const toggleFavorite = (id) => {
    setData((prevData) =>
      prevData.map((course) =>
        course.id === id ? { ...course, isFavorite: !course.isFavorite } : course
      )
    );
  };

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh]">
      {/* Pass sorting function to child */}
      <FilterComponent propsort={setSorting} />

      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {data.map((course) => (
        <div key={course.id} className="space-y-3">
          <div className="bg-light-gray px-4 py-2 flex gap-5 items-center">
            <img
              src={course.image}
              alt={course.title}
              width={50}
              height={50}
              className="rounded-xl"
            />
            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-base font-medium">{course.title}</p>
                
                {/* Star button to toggle favorite */}
                <button onClick={() => toggleFavorite(course.id)}>
                  <Star
                    size={20}
                    fill={course.isFavorite ? "gold" : "none"}
                    color={course.isFavorite ? "gold" : "gray"}
                  />
                </button>
              </div>
              <p className="text-gray-400 text-sm">Posted at: {course.postedAt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
