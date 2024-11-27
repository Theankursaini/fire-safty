import React from "react";
import './App.css';
import VideoGallery from "./Videos";
import Slider from "react-slick";
import Allcorses from "./allCourses";
const Body = () => {
    const courses = [
        {
          id: 1,
          course: "Diploma in Industrial Safety NSQF 4",
          duration: "1 Year",
          certification: "NCVET MEPSC",
        },
        {
          id: 2,
          course: "Diploma in Fire and Safety NSQF 4",
          duration: "1 Year",
          certification: "NCVET MEPSC",
        },
        {
          id: 3,
          course: "Advance Diploma in Industrial Safety NSQF 4",
          duration: "1 Year",
          certification: "NCVET MEPSC",
        },
        {
          id: 4,
          course: "Bsc in Industrial Safety",
          duration: "3 Years",
          certification: "B.Voc CV Raman",
        },
      ];
      const vcourses = [
        {
          id: 1,
          course: "Diploma in Industrial Safety NSQF 4",
          duration: "1 Year",
          certification: "NCVET MEPSC",
        },
        {
          id: 2,
          course: "Diploma in Fire and Safety NSQF 4",
          duration: "1 Year",
          certification: "NCVET MEPSC",
        },
        {
          id: 3,
          course: "Advance Diploma in Industrial Safety NSQF 4",
          duration: "1 Year",
          certification: "NCVET MEPSC",
        },
        {
          id: 4,
          course: "Bsc in Industrial Safety",
          duration: "3 Years",
          certification: "B.Voc CV Raman",
        },
      ];
      const cardData = [
        { id: 1, title: "E Learning", contact: "+91 1234567890" , text: "Online Course & Enquiry",  icon: "/path/to/icon1.png" },
        { id: 2, title: "DGMS First Aid", contact: "+91 1234567890" , text: "Course Enquiry",  icon: "/path/to/icon2.png" },
        { id: 3, title: "First AID", contact: "+91 1234567890" , text: "Course Enquiry",  icon: "/path/to/icon3.png" },
        { id: 4, title: "Admission", contact: "+91 1234567890" , text: "Admission Enquiry",  icon: "/path/to/icon4.png" },
        { id: 5, title: "Franchisee", contact: "+91 1234567890" , text: "Services & Enquiry",  icon: "/path/to/icon5.png" },
        { id: 6, title: "Corporate", contact: "+91 1234567890" , text: "Training & Enquiry",  icon: "/path/to/icon6.png" },
        { id: 7, title: "Admission Residential & Offline", contact: "+91 1234567890" , text: "Courrse at Campus",  icon: "/path/to/icon7.png" },
      ];
      const successData =[
        { id:1, title: "JIFSA BATCHES AND COUNTING" , number: "1.5K+", text: "Successful JIFSA Batches and Counting"},
        { id:2, title: "JIFSA'S Corporate Training provide to" , number: "280+", text: "Companies in India"},
        { id:3, title: "JIFSA Reliably trained" , number: "8250+", text: "Employees of various Company"},
        { id:4, title: "JIFSA'S Training Campus Having Collection of" , number: "3000+", text: "Latest Equipment"},
        { id:5, title: "JIFSA'S touches" , number: "20K+", text: "of Students around the Nation"},
        { id:6, title: "JIFSA- Training Campus for provide training in" , number: "10+", text: "Acres of Land in India"},
        { id:7, title: "JIFSA Provide to" , number: "300+", text: "Hours Practical Training via fire safety equipments"},
        { id:8, title: "Happy Clients" , number: "99%", text: "Client Satisfaction"},
      ];
      const companySliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };

    
    return ( 
        <div className="main-cont">
            <div className="section">
            <div className="imge">
                <img src="/media/image1.jpg" alt="image1"/>
            </div>
            <div className="text" id="text1">
                <h4> ST. JOSEPH'S INTERNATIONAL FIRE AND SAFETY ACADEMY</h4>
                <h2>Welcome to JIFSA Education & Technical Services Private Limited</h2>
                <p>JIFSA provides occupational health and safety training and qualification, industrial safety training, industrial safety course, safety officer courses, Industrial safert courses, fire safety course, safety engineering courses from govt. recognised certification authorities, our syllabuses are match with world's reconised institutions in Occupational health and safety and industrial safety etc.</p>
                <button class="button-57" role="button"><span class="text">Read More</span><span>Click Now</span></button>
                
            </div>
            </div>
        
            <div className="section">
            <div className="text" id="text1">
                <h4>Industry Partner of MEPSC</h4>
                <h2>NCVET Recognised Certification</h2>
                <p>Now JIFSA is an industry partner of MEPSC horizontal Sector Skill Council (SSC) under the tutelage of the Ministry of Skill Development and Entrepreneurship (MSDE). MEPSC is a recognised Awarding Body by the Skills Regulator – National Council for Vocational Education and Training (NCVET) and is supported by National Skill Development Corporation (NSDC).
                Diploma courses with NSQF aligned and NCVET recognised certifications</p>
                <h4>Please call for information and admission <a href="">9407939795</a> / <a href="">7879842744</a></h4>
            </div>
            <div className="imge">
                <img src="/media/image2.jpg" alt="image2"/>

            </div>
            </div>
            {/* 3rd paragraph */}
            
            <div className="section">
                <div className="imge">
                    <img src="/media/image4.jpg" alt="image4"/>
                </div>
                <div className="text" id="text1">
                <h4>Skill Knowledge Provider of Dr. CV Raman University</h4>
                <h2>B.Voc Courses from University</h2>
                    <p> Excellence of 28 years in educational Services.
                    <br />Awarded by Governor of Maharashtra Govt.
                    <br />Times Brand Icon 2021.
                    <br />JIFSA is associated with NSDC, BSS, DISH, DGMS to achive goal of skill India.
                    <br />India’s Leading Fire Safety Academy with Biggest Practical ground spread over 10 acers of land.
                    <br />India’s only academy, having 10 Acres of Practical Setup and over 3000+ tools.
                    <br />Online learning portal and app with quality study content aqup with self made videos, presentation and recotded leactures.
                        </p>
                        <p>Dedicated placement cell working for our student career startup and growth.
                        <br />Star Level Hostel & Mess facilities for 500 Students.
                        <br />Well-equipped training ground with fire tender, ambulance and modern & latest equipment’s.
                        <br />Competent faculties from industry experienced with advance teaching techniques using LCD projector e-learning classes.</p>
                    <h4>Please call for information and admission <a href="">9407939795</a> / <a href="">7879842744</a></h4>
                    <button class="button-57" role="button"><span class="text">know More</span><span>Click Now</span></button>
                    
                </div>
            </div>
            {/* 4th paragraph */}
            {/* <div className="section"> */}
            <div className="section">
            <div className="text">
                
                <h4> Our Strenth and Achievements</h4>
                <p>Now JIFSA is a Skill Knowledge Provider of Dr. C.V. Raman University under B. Voc programe of UGC. JIFSA providing skill knowledge facilities for varius courses to Dr. C. V Raman university C.G. Kota for Fire safety and Industrial Safety courses</p>
                <p>Degree courses with multiple entry exit points</p>
                <h4>Please call for information and admission <a href="">9407939795</a> / <a href="">7879842744</a></h4>
                <button class="button-57" role="button"><span class="text">know More</span><span>Click Now</span></button>
            </div>
            <div className="imge">
                
            </div>

            </div>
            

            {/* 5th paragraph  */}
            
            <div className="section">
            
            <div className="imge">
            
            
                <img src="/media/image3.jpg" alt="image3"/>

            </div>
            {/* </div>
            <div className="section"> */}
            <div className="text">
                
             <h4>First Aid Training Centre</h4>
             <h2>DGMS Approved First Aid</h2>
                <p>Now JIFSA is DGMS approved training centre and its established as per provisions laid down under The Gazette of India Extraordinary, Part II-Section 3-Sub section(i) No. 430 of 4th August 2021, Notification no. G.S.R. 529(E) dated 4th August ,2021 and approved by DGMS vide letter No. DGMS/HO(HQ)/First Aid/04/2021/167 Dhanbad 2nd May, 2022.
                First aid competency certificate authorized by DGMS is compulsory for any employment application posted by Mining enterprises like coal india etc.</p>
                <h4>Please call for information and admission <a href="">9407939795</a> / <a href="">7879842744</a></h4>
                <button class="button-57" role="button"><span class="text">know More</span><span>Click Now</span></button>
            </div>
            </div>
        
            {/* table  */}
            <div className="courses">
                <h4>OUR COURSES AND SERVICES</h4>
                <h2>Classroom Based Courses</h2>

                <table className="courses-table">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Course</th>
                            <th>Duration</th>
                            <th>Certification</th>
                        </tr>
                        </thead>
                        <tbody>
                        {courses.map((course) => (
                            <tr key={course.id}>
                            <td>{course.id}</td>
                            <td>{course.course}</td>
                            <td>{course.duration}</td>
                            <td>{course.certification}</td>
                            </tr>
                        ))}
                        </tbody>
                </table>
                <h4>To know more about courses please visit <a href="">here...</a></h4>
            </div>
            <div className="virtual-course">
                <h2>Online virtual classroom based Courses</h2>
                <table className="courses-table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Course</th>
                                <th>Duration</th>
                                <th>Certification</th>
                            </tr>
                            </thead>
                            <tbody>
                            {courses.map((vcourse) => (
                                <tr key={vcourse.id}>
                                <td>{vcourse.id}</td>
                                <td>{vcourse.course}</td>
                                <td>{vcourse.duration}</td>
                                <td>{vcourse.certification}</td>
                                </tr>
                            ))}
                            </tbody>
                    </table>
                    <h4>To know more about courses please visit <a href="">here...</a></h4>
            </div>

                <h4>Our Experts</h4>
            <div className="cards-top">
                <h2>Connect with Experts</h2>
                <div class="link-btn mb-50"><a href="#" class="theme-btn btn-style-five"><span class="btn-title">All Services</span></a></div>

            </div>
         

           <div className="cards-container">
                    {cardData.map((card) => (
                        <div className="card" key={card.id}>
                        <div className="icon-box">
                            <img src={card.icon} alt={`Icon ${card.id}`} className="icon" />
                        </div>
                        <div className="card-content">
                            <h3>{card.title}</h3>
                            <h4>{card.text}</h4>
                            <h5><a href="">{card.contact}</a></h5>
                        </div>
                        </div>
                    ))}
            </div>

            <div className="line">
                <h2>Career Flowchart</h2>
                <img src="/media/flowchart.jpg" alt="" />
            </div>
            <div className="container2">

                <div className="cards-top2">
                    <h4>Our Success</h4>
                    <h2>Our count of success</h2>
                    </div>
                <div className="success-card-container">
                    
                    {successData.map((d) => (
                        <div className="card2" key={d.id}>
                            <div className="card-content">
                                <h3>{d.title}</h3>
                                <h2>{d.number}</h2>
                                <h3>{d.text}</h3>

                            </div>
                        </div>
                    ))}

                </div>
            </div>

           
        <div className="recruiter">
            <h4>Our Recruiter</h4>
            <div className="recruiter-top">
            <h2>Our Recruiter Companies</h2>
            </div>
            <div className="companies">
                {/* <Slider {...companySliderSettings}> */}
                    <div> <img src="/media/RecruiterCompanies1.jpg" alt="" /></div>
                    <div> <img src="/media/RecruiterCompanies2.jpg" alt="" /></div>
                    <div> <img src="/media/RecruiterCompanies3.jpg" alt="" /></div>
                    <div> <img src="/media/RecruiterCompanies4.jpg" alt="" /></div>
                    <div> <img src="/media/RecruiterCompanies5.jpg" alt="" /></div>
                    <div> <img src="/media/RecruiterCompanies6.jpg" alt="" /></div>
                    <div> <img src="/media/RecruiterCompanies7.jpg" alt="" /></div>
                    <div> <img src="/media/RecruiterCompanies8.jpg" alt="" /></div>
                    <div> <img src="/media/RecruiterCompanies9.jpg" alt="" /></div>
                    <div> <img src="/media/RecruiterCompanies10.jpg" alt="" /></div>

                    <div> <img src="/media/RecruiterCompanies1.jpg" alt="" /></div>
                    <div> <img src="/media/RecruiterCompanies2.jpg" alt="" /></div>
                    <div> <img src="/media/RecruiterCompanies3.jpg" alt="" /></div>
                    <div> <img src="/media/RecruiterCompanies4.jpg" alt="" /></div>
                    <div> <img src="/media/RecruiterCompanies5.jpg" alt="" /></div>
                    <div> <img src="/media/RecruiterCompanies6.jpg" alt="" /></div>
                    <div> <img src="/media/RecruiterCompanies7.jpg" alt="" /></div>
                    <div> <img src="/media/RecruiterCompanies8.jpg" alt="" /></div>
                    <div> <img src="/media/RecruiterCompanies9.jpg" alt="" /></div>
                    <div> <img src="/media/RecruiterCompanies10.jpg" alt="" /></div>
                

            </div>

        </div>
        <div className="video">
               <div className="headingv">
                {/* <h3>Media</h3> */}
                <h2>Video Gallery</h2>
                </div>
                
        </div>
            <VideoGallery />
            <Allcorses/>
            

               {/* <div className="col-lg-3 col-md-4 col-sm-6 col-12 service-block-one bg-success">
                <div className="inner-box">
                    <div className="icon">
                        <div className="icon-inner">

                        </div>
                        <h4>E Learning</h4>
                        <div className="text">Online Course &amp; Enquiry</div>
                        <p><a href="tel:+91-7039089670">+91-7039089670</a> / <a href="tel:+91-7021288226">+91-7021288226</a></p>
                    </div>
                    
                </div>
               </div> */}
               
            
        
        </div>
     );
}
 
export default Body;