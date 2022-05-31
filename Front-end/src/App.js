import './App.css';
import 'antd/dist/antd.css';
import Home from "./webPages/Home";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import JobInfo from "./webPages/JobInfo";
import AppliedJobs from "./webPages/AppliedJobs";
import PostJobs from "./webPages/PostJobs";
import Profile from "./webPages/Profile";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/appliedJobs'} element={<AppliedJobs/>}/>
        <Route path={'/PostJobs'} element={<PostJobs/>}/>

        <Route path={'/Profile'}element={<Profile/>}/>
        <Route path={'/JobInfo'} element={<JobInfo/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}
export default App;
