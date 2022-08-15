import {Routes,Route, Navigate} from "react-router-dom";
import Home from './Home'
import MyNavbar from './MyNavbar'
import Footer from './Footer'
import About from './About'
import Error from './Error'
import Contact from './Contact'
import CourseDetail from './CourseDetail'
import AddCourse from "./AddCourse";
import AllCourses from './AllCourses'
import CoursesApi from './CoursesApi'
import MyCourses from './MyCourses'
import AddCategory from './AddCategory'
import UpdateCourse from "./UpdateCourse";
import DeleteCourse from "./DeleteCourse";
function Main() {
  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/detail/:course_id" element={<CourseDetail />}/>
        <Route path="/addcourse" element={<AddCourse />}/>
        <Route path="/addcategory" element={<AddCategory />}/>
        <Route path="/allcourses" element={<AllCourses />}/>
        <Route path="/courseapi" element={<CoursesApi />}/>
        <Route path="/mycourses" element={<MyCourses />}/>
        <Route path="/delete/:course_id" element={<DeleteCourse />}/>
        <Route path="/update/:course_id" element={<UpdateCourse />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
     
      <Footer/>
    </div>
  );
}

export default Main;
