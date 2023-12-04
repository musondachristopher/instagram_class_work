import "./Home.css";
import Nav from "./Nav/Nav.js";
import Feed from "./Feed/Feed.js";
 
 
function Home() {
return (
<div className="Home">
    <div className="left_nav_wrapper">
        <Nav/>
    </div>
    <div className="timeline_wrapper">
        <Feed />
    </div>
</div>
);
}
export default Home;