import react from "react";

const Aboutus=()=>{
    return(
        <div>
                <nav>
            <div className="nav-main">
            <div className="img-main">
                <img src="https://truetalent.io/static/media/logo.e8c72fdf.svg" alt="" className="img"/>
            </div>
            <div className="tt-main">
                <a href="" className="tt" id="tt1">Job</a>
                <a href="" className="tt">Gig</a>
            </div>
            <div className="bttn">
                <button className="log" id="log"><a href="/login">Login</a></button>
                <button className="log" id="rg"><a href="/register">Register</a></button>
            </div>
            </div>
        </nav>
        <div className="flex">
            <div className="abt-talent">
                <h3>Your Talent Scout at ZERO Cost</h3>
                <button className="abt-btn">Get started</button>
            </div>
            <div className="abt-img">
                <img src="https://truetalent.io/Assets/images/login_banner.png?1" alt="" className="left" />
            </div>
        </div>
        <div className="abt-boxdiv">
            <div className="abt-div">
                <h4 className="abt-vision">Our vision</h4>
                <img src="https://truetalent.io/Assets/svgs/about_vision.svg" alt=""  className="abt-img1"/>
                <p className="abt-hiring">Making the hiring process efficient, effective,<br /> 
                and economical.</p>
            </div>
            <div>

            </div>
            <div className="abt-div">
                <h4 className="abt-vision">Our Mission
</h4>
                <img src="https://truetalent.io/Assets/svgs/about_mission.svg" alt=""  className="abt-img1"/>
                <p className="abt-hiring">Create a technology platform to make the <br /> hiring process fast, easy, and cost-effective <br /> for all companies and to provide the best <br /> talent-to-employer match.</p>
            </div>
        </div>
        <div className="abt-pic">
            <div className="abt-empty">
            </div>
            <div>
                <h3>What we strive to do:</h3>
               <div className="paragraph">
                <p>Our goal is to alter the landscape of recruiting, for all hiring companies and their hiring teams, by making it the most cost-effective and efficient process possible by making the exceptional talent <br /> accessible on our platform.</p>
                <p>Regardless of whether your recruiting budget is a few million dollars or nothing, you will always be able to find the best candidates you want on our platform and hire them.</p>
                <p>We provide a Zero base plan for bootstrapped startups and small placement agencies to publish their positions on our website and search our database for prospects. You could contact them, <br />interview them, and hire them at No Cost.

</p>
<p>However, if you have a higher budget and want to showcase your brand in order to attract the best talent, we can offer paid solutions, that help you get ahead of the curve and hire faster & better.</p>
<p>Our extensive usage of Artificial Intelligence and Machine Learning helps in searching, identifying and connecting with the best-fit candidates for your job requirements.</p>
<p>In addition to the technology, our core team of experts, who have substantial industry expertise and are engaged in building, developing, and administering the platform, ensure you hire the best <br />talent that matches your requirements.

</p>
</div>
            </div>
        </div>
        </div>
    )
}
export default Aboutus