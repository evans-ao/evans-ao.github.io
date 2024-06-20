import './BasicLayout.css'; 
import icons from '../assets/iconography/Icons';
import pics from '../assets/pictures/Pics';
import aesthetics, { asethics } from '../assets/site aesthetics/Aestheic';


const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  
export function SiteBar ({barDescription="Description"}) {
    return (
        <div className="site-bar">
        
            <p className="site-bar-label">
            {barDescription}
            </p>

            <p className="site-bar-label" style={{marginLeft:'55px'}}>
            </p>
        </div>
    );
}


export function IntroBanner () {
    return (
        <div className="intro-banner">
            <div className="vertical-container paragraph-description" 
                style={{width: '90%', fontSize: '18px', alignItems: 'center'}}>                
                
                <div className='horizontal-container' style={{justifyContent: 'space-between',alignItems:'center'}}>

                    <img className ="small-floating-object" src={asethics.rhombus_v1} alt="Download"/>
                    <img className ="small-floating-object" src={asethics.rhombus_v2} alt="Download"/>
                    <img className ="circle-profile" src={pics.evansPic} alt="Download"/>
                    <img className ="small-floating-object" src={asethics.reverse_rhombus_v1} alt="Download"/>
                    <img className ="small-floating-object" src={asethics.reverse_rhombus_v2} alt="Download"/>

                </div>

                <span>
                    <h1 style={{fontFamily: 'Courier New, monospace'}}>
                        Evans Owusu (they/them)
                    </h1>

                    <p style={{fontWeight:'bold'}}>
                        Software Enginnering | UX/User Interface | Game Design & Development | Qulatative Research
                    </p>

                    <p>
                        Hello, I'm a 2024 Worcester Polytechnic Institute Graduate. 
                        I have a curious mind that reflects my main focus, human-centric design! 
                        As a result, I'm an experienced programmer and designer in the subjects above!
                    </p>
                    
                    <p style={{fontWeight:'bold', color: '#3c78d8'}}>
                        eaowusu@wpi.edu | Github: evans-ao | LinkedIn: evans-owusu-a
                    </p>
                </span>

            </div>
        </div>
    );
}


export function ResumeBlock () {
    const Skills = ['Agile Scrum', 'UX Design', 'System Design', 'Qualitative Research', '& Human-Centric Design']
    const Languages = ['C/C++', 'C#', 'HTML', 'CSS','Java', 'JavaFX', 'JSX/React', '& Python']
    const Tools = ['Figma', 'Drupal', 'Adobe Creative Cloud', 'Github', 'Unreal', 'Unity', "Ren'Py", '& Dedoose']


    return (
        <div className='resume-display'>

            <div className='horizontal-container' style={{justifyContent: 'center',alignItems: 'center'}}>
                <div className="vertical-container" style={{alignItems: 'center'}}>

                        <img src={icons.download} alt="Download" style={{height:'77px', width:'67px'}}/>
                        <div style={{marginTop:'15px'}}></div>
                        <button className="resume-download-btn" onClick={()=> openInNewTab('https://drive.google.com/file/d/1ZS59PtA9iiVrS2_Np__jGEk0HEhaASnE/view')}> 
                            Resume </button>
                </div>


                <div className="vertical-container word" style={{marginLeft:'3%', color:'#3c78d8', fontSize: '15px'}}>

                    <span> Skills: </span>

                    <div style={{marginTop:'15px'}}></div>
                    <span> CS Languages: </span>

                    <div style={{marginTop:'15px'}}></div>
                    <span> Tools: </span>

                </div>

                <div className="vertical-container" style={{marginLeft:'1%'}}>
                        <WordList words={Skills} />
                        <div style={{marginTop:'15px'}}></div>
                        <WordList words={Languages} />
                        <div style={{marginTop:'15px'}}></div>
                        <WordList words={Tools} />
                </div>
            </div>

        </div>
    );
}


export function  ProjectDirectory() {
    return (
        <div className="project-directory">

            <h className='project-title' style={{fontSize:'24px'}}> Project Directory</h>

            <hr className='project-line-break' style={{width:'30%'}}/>

            <div className='horizontal-container' style={{display:'flex', justifyContent:'space-between'}}>
                <button className='large-text-btn'onClick={console.log("anchorlink")}>
                    Project 1
                </button>

                <button className='large-text-btn' onClick={console.log("anchorlink")}>
                    Project 2
                </button>

                <button className='large-text-btn' onClick={console.log("anchorlink")}>
                    Project 3
                </button>

                <button className='large-text-btn' onClick={console.log("anchorlink")}>
                    Project 4
                </button>
            </div>

        </div>
    );  
}


export function MQPDisplay() {
    return (
        <div className="project-display">
            

            <img className ="floating-object" src={aesthetics.black_arrow_bar} alt="Download"
                style={{left:'-20%', top:'40%'}}/>

            <img className ="floating-object" src={asethics.blue_arrow_bar} alt="Download"
                style={{right:'-20%', top:'15%'}}/>


            <div className = "vertical-container" style={{alignItems:'center'}}>

                <h3 className='project-title'> Failed To Send: An Internet Aesthetic VisualNovel </h3>
                <hr className='project-line-break'/>

                <p className="paragraph-description" style={{fontSize:'24px',color: '#3c78d8'}}>
                    Ren'Py | Python | Innovation | Game Dev | Documentation
                </p>

                <img className ="project-img" src={pics.failedToSend} alt="Download"/>

                <p className="paragraph-description">
                    On a team of two with Carolyn Meyer and advisors Prof Karen Stewart and Prof Gillian Smith. We developed a visual novel with a vast amount of technical
                    exploration in Ren'Py.
                </p>
                <p className="paragraph-description" style={{marginTop:'5px'}}>
                    We repurposed Prof. Stewart's original MQP pitch of an Internet Aesthetic Visual Novel (with her permission). We focused on 
                    the aesthetics of websites rather than the aesthetics popular with internet communities. Failed To Send demonstrates new ways of storytelling that 
                    push Ren'Py to its limits. The code developed in this project paves the way for future representations of the Internet in visual novels.
                </p>


                <div className='horizontal-container' 
                    style={{width: '70%', justifyContent: 'space-between', alignItems:'center', marginTop: '50px'}}>
                    
                    <button className='project-btn' onClick={()=> openInNewTab("https://digital.wpi.edu/concern/student_works/7m01br09c?locale=en")}>
                        Our Research Paper
                    </button>

                    <button className='project-btn' onClick={()=> openInNewTab("https://drive.google.com/file/d/1jPgdwWxCeLKujoM_Qzgj2IAo9VkfPu0V/view")}>
                        Our Project's Poster
                    </button>

                </div>

            </div>
        </div>
    );
}



export function  TarotArtsDisplay() {
    return (
        <div className="project-display">
            

            <img className ="floating-object" src={aesthetics.di_circles} alt="Download"
                style={{left:'-26%', top:'22%'}}/>

            <img className ="floating-object" src={asethics.tri_circles} alt="Download"
                style={{right:'-30%', top:'10%'}}/>


            <div className = "vertical-container" style={{alignItems:'center'}}>

                <h3 className='project-title'> Tarot Arts & Game Dev Tools </h3>
                <hr className='project-line-break'/>

                <p className="paragraph-description" style={{fontSize:'24px',color: '#3c78d8'}}>
                    Unity | C# | Design Patterns | Game Dev | Documentation
                </p>

                <img className ="project-img" src={pics.tarotImage} alt="Download"/>

                <p className="paragraph-description">
                    I coded the needs of a 2D physics-based platformer using Sonic Sprites. 
                    Not only as a proof of concept for my game idea of Tarot Arts but to provide
                    useable documentation & APIs.
                </p>
                <p className="paragraph-description" style={{marginTop:'5px'}}>
                    Tarot Arts' gameplay loop revolves around collecting Tarot Cards to change the player's attributes. 
                    These changes enable of variety of ways to do high-speed platforming
                </p>

                <p className="paragraph-description" style={{marginTop:'5px'}}>
                    I utilized the microservice design pattern to create the following: 
                    custom 2D Pixel Animator, Perfect Flips, Realistic Slope Acceleration, Wall Running, 
                    and more!
                </p>

                <div className='horizontal-container' 
                    style={{width: '70%', justifyContent: 'space-between', alignItems:'center', marginTop: '50px'}}>
                    <button className='project-btn' onClick={()=> openInNewTab("https://drive.google.com/file/d/1Zv8HX157RevLrPqUwq-dQasI9T_XZTQ7/view?usp=sharing")}>
                        Inital API
                    </button>

                    <button className='project-btn' onClick={()=> openInNewTab("https://docs.google.com/document/d/1n9odkvXdn9KzOKYhSPgxGqn9aOBp7N9-/edit?usp=sharing&ouid=106595661763651614649&rtpof=true&sd=true")}>
                        GDD
                    </button>

                </div>

            </div>
        </div>
    );
}


export function  LuminousWatersDisplay() {
    return (
        <div className="project-display">

            <img className ="floating-object" src={aesthetics.black_slants} alt="Download"
                style={{left:'-26%', top:'10%'}}/>

            <img className ="floating-object" src={asethics.blue_slants} alt="Download"
                style={{right:'-30%', top:'30%'}}/>

            <div className = "vertical-container" style={{alignItems: 'center'}}>

                <h3 className='project-title'> Luminous Waterways: Unreal 5 Class </h3>
                <hr className='project-line-break' style={{color:'red'}}/>
                <p className="paragraph-description" style={{fontSize:'24px',color: '#3c78d8'}}>
                    Unreal | C/C++ | Blueprints | Design Patterns | Game Design | Team Lead
                </p>

                <img className ="project-img" src={pics.luminousImage} alt="Download"/>

                <p className="paragraph-description">
                    I led a cross-disciplinary team of 6 in creating a 3D unreal game, 
                    called Luminous Waterways. Whereas the player navigated ancient ruins 
                    to complete puzzles and purify the sanctuary's water. 
                    The biggest mechanic was that rooms could be rearranged when the puzzle was complete.  
                </p>

                <p className="paragraph-description">
                    I used blueprints, unreal C++, and multithreading to simulate 
                    changing water levels across ever-shifting rooms. In addition to charting the
                    course of our project
                </p>

                <div className='horizontal-container' style={{width: '70%', justifyContent: 'space-between', alignItems:'center'}}>
                    <button className='project-btn' onClick={()=>openInNewTab("https://docs.google.com/presentation/d/1AiFolSPzyadtnnuhAR_8_8rdebZFCtolRabBKyIQa-g/edit?usp=sharing")}>
                        Beta-Presentation
                    </button>

                    <button className='project-btn' onClick={()=>openInNewTab("https://www.wpi.edu/academics/calendar-courses/course-descriptions/3861/interactive-media-game-development#IMGD-4000")}>
                        Class Desciption
                    </button>
                </div>

            </div>
        </div>
    );
}


export function  IQPDisplay() {
    return (
        <div className="project-display">

            <img className ="floating-object" src={aesthetics.blue_arrows} alt="Download"
                style={{left:'-40%', top:'10%'}}/>

            <img className ="floating-object" src={asethics.black_arrows} alt="Download"
                style={{right:'-40%', top:'20%'}}/>


            <div className = "vertical-container" style={{alignItems: 'center'}}>

                <h3 className='project-title'> App Design: Giving MOSE A Voice </h3>
                <hr className='project-line-break' style={{color:'red'}}/>
                <p className="paragraph-description" style={{fontSize:'24px',color: '#3c78d8'}}>
                    AdobeXD/Figma | UI/UX | Qulatative Research | Team Lead | Documentation | Design
                </p>

                <img className ="project-img" src={pics.moseImage} alt="Download"/>

                <p className="paragraph-description">
                    With rising tides, a sinking city, and extreme weather conditions, Venice is experiencing 
                    more flooding than ever. Luckily, the city now has MOSE. MOSE (Modulo Sperimentale Elettromeccanico, 
                    Experimental Electromechanical Module) is a series of modular gates at the three inlets to the Venetian 
                    lagoon that rise from the seafloor to prevent more water from flowing into the lagoon during high tides. 
                </p>

                <p className="paragraph-description">
                    In this project, I led a cross-disciplinary team of 4 to make a phone app mockup. The mockup would describe 
                    the operations of the MOSE gates. We aim to find what residents and business owners knew regarding tides, flooding, 
                    MOSE operations, and how the gates may affect flooding in their area. The data we obtained helped us design a phone app.
                </p>

                <div className='horizontal-container' style={{width: '70%', justifyContent: 'space-between', alignItems:'center'}}>
                <button className='project-btn' onClick={()=>openInNewTab("https://docs.google.com/presentation/d/1rsDQm_Ctf0AaGvszJxp2hQHOk9YEGQ2W/edit?usp=sharing&ouid=106595661763651614649&rtpof=true&sd=true")}>
                        App-UI-Booklet
                    </button>

                    <button className='project-btn' onClick={()=>openInNewTab("https://www.wpi.edu/project-based-learning/project-based-education/interactive-qualifying-project")}>
                        About IQPS
                    </button>

                    <button className='project-btn' onClick={()=>openInNewTab("https://digital.wpi.edu/concern/student_works/8g84mq70r?locale=en")}>
                        Project Report
                    </button>
                </div>

            </div>
        </div>
    );
}


export function  SoftEngDisplay() {
    return (
        <div className="project-display">


            <img className ="floating-object" src={aesthetics.di_black_squares} alt="Download"
                style={{left:'-40%', top:'50%'}}/>

            <img className ="floating-object" src={asethics.di_blue_squares} alt="Download"
                style={{right:'-40%', top:'0%'}}/>

            <div className = "vertical-container" style={{alignItems: 'center'}}>

                <h3 className='project-title'> Model Hospital Work Flow App </h3>
                <hr className='project-line-break' style={{color:'red'}}/>
                <p className="paragraph-description" style={{fontSize:'24px',color: '#3c78d8'}}>
                    Agile-Scrum | JavaFX | AdobeXD/Figma | Design Patterns | Followership | Documentation
                </p>

                <img className ="project-img" src={pics.softEngImage} alt="Download"/>

                <p className="paragraph-description">
                    On an 11 person team in my class, we apply Agile development 
                    methodologies and software design patterns in Java to create a medical equipment 
                    tracking and workflow application that included a hospital dashboard, floor map editor, 
                    and multiple integrated service request modules for Brigham & Women's Hospital.
                </p>


                <p className="paragraph-description">
                    I implemented several major design patterns into the above features :
                    observable, singleton, filter, and façade. Alongside provide UI assitance. 
                    I also aided to our system design and other parts of our UI.
                </p>

                <div className='horizontal-container' style={{width: '70%', justifyContent: 'space-between', alignItems:'center'}}>

                    <button className='project-btn' onClick={()=>openInNewTab("https://drive.google.com/file/d/1NqoPHK2lVWMDh-cpTjmmCzVdaAiGRWsO/view?usp=sharing")}>
                        User-Manual
                    </button>

                    <button className='project-btn' onClick={()=>openInNewTab("https://www.wpi.edu/academics/calendar-courses/course-descriptions/3776/computer-science#CS-3733")}>
                        Class Desciption
                    </button>
                </div>

            </div>
        </div>
    );
}


export function  ASLTechDisplay() {
    return (
        <div className="project-display">



            <img className ="floating-object" src={asethics.di_slants} alt="Download"
                style={{left:'-15%', top:'25%'}}/>


            <div className = "vertical-container" style={{alignItems: 'center'}}>

                <h3 className='project-title'> Developing Novel Sign Language Tech </h3>
                <hr className='project-line-break' style={{color:'red'}}/>
                <p className="paragraph-description" style={{fontSize:'24px',color: '#3c78d8'}}>
                    JSX/React | AdobeXD | Iterative Participatory Design | Qulatative Research | Documentation
                </p>

                <img className ="project-img" src={pics.hciImage} alt="Download"/>

                <p className="paragraph-description">
                    This project took a human-centered computing approach to build a foundation that advances
                    understanding of how deaf individuals could work and learn in environments that are designed 
                    with their needs and preferences at the forefront.  
                </p>

                <p className="paragraph-description">
                    The WPI HCI lab, American Sign Language Education Center (AEC), and I collaborated in creating accessible 
                    web UI in React/JSX. We accomplished this through cycles of participatory and iterative design. This was 
                    in the form of a paid research position and independent study in B term 2021. My work contributed to the 
                    AEC's surveys and my upperclassman's senior project. 
                </p>

                <div className='horizontal-container' style={{width: '70%', justifyContent: 'space-between', alignItems:'center'}}>
                    <button className='project-btn' onClick={()=>openInNewTab("https://wp.wpi.edu/hcilab/")}>
                        HCI Lab
                    </button>

                    <button className='project-btn' onClick={()=>openInNewTab("https://docs.google.com/document/d/1nGcNpEWj5x1VBsya3doYzxYNBRkyTLH-/edit?usp=sharing&ouid=106595661763651614649&rtpof=true&sd=true")}>
                        Project Report
                    </button>
                </div>

            </div>
        </div>
    );
}


export function Footer(){
    return(
        <div className="footer" style={{marginTop: '100px'}}>
            
            <div className="vertical-container paragraph-description" 
                style={{width: '90%', fontSize: '18px', alignItems: 'center', marginTop:'10px'}}>                
                
                <h1 style={{fontFamily: 'Courier New, monospace', fontSize:'25px', margin: '0%'}}>
                    Made by: Evans Owusu
                </h1>

                <p style={{fontWeight:'bold'}}>
                    Using React JSX and Hosted by Github Pages
                </p>
                
                <p style={{fontWeight:'bold', color: '#3c78d8'}}>
                    eaowusu@wpi.edu | Github: evans-ao | LinkedIn: evans-owusu-a
                </p>
            </div>
        </div>
    )
}


export function WordList({ words }){
    return (
      
        <div className="words-list">
          {words.map((word, index) => (
            <li key={index} className="word">
              {word}
            </li>
          ))}
        </div>
    );
};

export function PageMenu () {
    //const navigate = useNavigate(
    return (
        <div className="root">
        </div>
    );
}