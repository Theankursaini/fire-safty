import React from "react";
const Allcorses = () => {
    const tableData = [
        {
          category: "Facilities",
          details: [
            "Practical Attachment",
            "Industrial Visit",
            "Ground for Playing / Drill",
            "Infrastructure",
            "Government Recognized",
            "International Level Faculty",
            "Independent Practical Yard",
            "Fire & Safety Books Library",
            "Study Industrial Safety",
            "Industrial Visit",
            "Fire Laboratory",
            "Live Demon of Fire and Safety",
            "Fire Drill for Student",
          ],
        },
        {
          category: "Learn Topics",
          details: [
            "Fire Alarm Systems",
            "Fire Extinguishers Training",
            "Fire Awerness Training",
            "Fire Safety Training",
            "Emergency Lighting",
            "Fire Doors",
            "Fire PAT Testing",
            "Fire Risk Assessment",
            "Fire Safety Signage",
            "Mechanical Sprinkler Systems",
            "RedCARE Monitoring",
            "Wet / Dry Riser Systems",
          ],
        },
        {
            category: "Regular Courses",
            details: [
              "Diploma In Fire Service Engineering (MSBTE)",
              "Advance Diploma In Fire Safety & Industrial Environmental Engineering (MSBTE)",
              "Advance Diploma In Industrial Safety (MSBTE)",
              "Advance Diploma In Industrial Safety & Security Management (MSBTE)",
              "Diploma In Fire & Safety Engineering (University)",
              "Diploma In Industrial Safety (University)",
              "B. Sc In Fire & Safety (University)",
              "Advance Diploma In Industrial Safety (University)",
              "Certificate In Fire & Safety Engineering (Autonomous)",
              "Diploma In Fire & Safety Engineering (Autonomous)",
              "Diploma In Industrial Safety (Autonomous)",
              "Diploma In Sub Fire Officer (Autonomous)",
            ],
          },
          {
            category: "Distance Courses",
            details: [
              "Diploma in Fire and Safety Management",
              "Diploma in Health, Safety and Environment",
              "Diploma in Industrial Safety Management",
              "Diploma in Fire and Industrial Safety Engineering",
              "Advance Diploma in Fire and Industrial Safety Engineering",
              "Advance Diploma in Industrial Safety Engineering",
              "Advance Diploma in Occupational Health Safety & Environment",
              "PG Diploma in Fire and Safety Management",
              "PG Diploma in Health, Safety and Environment",
              "PG Diploma in Industrial Safety Management",
            ],
          }
        // Add more categories...
      ];

      const maxRows = Math.max(...tableData.map((item) => item.details.length));
    return ( 
        <div className="corses">
        <table
      style={{
        borderCollapse: "collapse",
        width: "100%",
        // border: "1px solid black",
      }}
    >
      <thead>
        <tr>
          {tableData.map((item, index) => (
            <th
              key={index}
              style={{
                // border: "1px solid black",
                padding: "8px",
                // backgroundColor: "#f0f0f0",
                textAlign: "left",
                color: "white",
                backgroundColor: "#4981bd",
                width: "100vw",
                borderBottom: "2px solid yellow",

              }}
            >
              {item.category}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Render rows */}
        {[...Array(maxRows)].map((_, rowIndex) => (
          <tr key={rowIndex}>
            {tableData.map((item, colIndex) => (
              <td
                key={colIndex}
                style={{
                //   border: "1px solid black",
                  padding: "8px",
                  textAlign: "left",
                  color: "wheat",
                  backgroundColor: "#0760be",
                
                }}
              >
                {item.details[rowIndex] || ""} {/* Render detail or empty */}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <div className="footerBottom">
    <div class="copyright-text">©
         <span> 2024 </span>,
          ALL RIGHTS RESERVED, DESIGNED BY ANKUR SAINI          </div>
    </div>
  </div>

     );
}
 
export default Allcorses;

// background: "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898";
//  background-blend-mode: multiply,multiply;