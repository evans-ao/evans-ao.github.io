import './BasicLayout.css'; 
import download from '../assets/iconography/download.png';
import evans_pic from '../assets/pictures/evans_pic.jpg';


const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };


export function SiteBar ({barDescription="Description"}) {
    //const navigate = useNavigate(
    return (
        <div className="site-bar">
        
            <span className="site-bar-label">
            {barDescription}
            </span>

            <span className="site-bar-label" style={{marginLeft:'55px'}}>
            News & Current Projects 
            </span>
    
        </div>
    );
}


export function PageMenu () {
    //const navigate = useNavigate(
    return (
        <div className="root">
        </div>
    );
}


export function LargeBanner () {
    return (
        <div className="large-banner">
            <div className="vertical-container paragraph-description" 
                style={{width: '90%', fontSize: '18px', alignItems: 'center'}}>                
                
                <img className ="circle-profile" src={evans_pic} alt="Download"/>

                <h1 style={{fontFamily: 'Courier New, monospace'}}>
                    Evans Owusu (they/them)
                </h1>

                <p style={{fontWeight:'bold'}}>
                    Software Enginnering | UX/User Interface | Game Design & Development | Qulatative Research
                </p>

                <p>
                    Hello, I'm a WPI student, graduating in May 2024 with 
                    a curious mind and that reflects in my main focous,

                    human-centric design! As a result I'm an experienced programmer 
                    and designer in the subjects above!
                </p>
                
                <p style={{fontWeight:'bold', color: '#3c78d8'}}>
                    eaowusu@wpi.edu | Github: evans-ao | LinkedIn: evans-owusu-a
                </p>

            </div>
        </div>
    );
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


export function ResumeBlock () {
    const Skills = ['Agile Scrum', 'UX Design', 'System Design', 'Qualitative Research', 'Human-Centric Design']
    const Languages = ['C/C++', 'C#', 'Java', 'JavaFX', 'JSX/React', 'Python']
    const Tools = ['Figma', 'Adobe Creative Cloud', 'Github', 'Unreal', 'Unity', 'RenPy', 'Dedoose']


    return (
        <div className='resume-display'>

            <div className='horizontal-container' style={{justifyContent: 'center',alignItems: 'center'}}>

                <div className="vertical-container" style={{alignItems: 'center'}}>

                        <img src={download} alt="Download" style={{height:'77px', width:'67px'}}/>
                        <div style={{marginTop:'15px'}}></div>
                        <button className="resume-download-btn" onClick={()=> openInNewTab('https://drive.google.com/file/d/1NMGfOx_oGsjXV3eYGqn3K_HCoODY-lpC/view?usp=drive_link')}> 
                            Download </button>
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


export function  ProjectDisplay() {
    return (
        <div className="project-display">
            <div className = "vertical-container" style={{alignItems: 'center'}}>

                <h3 className='project-title'> Project Title</h3>
                <hr className='project-line-break'/>
                <div className='filler-rectangle' style={{width: '819px', height: '410px'}}></div>

                <p className="paragraph-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Eget nunc lobortis mattis aliquam faucibus purus. 
                    Dolor sit amet consectetur adipiscing elit. Libero volutpat sed cras ornare arcu. Mattis ullamcorper velit sed ullamcorper
                    morbi. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras.
                </p>

                <div className='horizontal-container' style={{width: '70%', justifyContent: 'space-between', alignItems:'center'}}>
                    <button className='project-btn' onClick={console.log("anchorlink")}>
                        Project 1
                    </button>

                    <button className='project-btn' onClick={console.log("anchorlink")}>
                        Project 2
                    </button>

                    <button className='project-btn' onClick={console.log("anchorlink")}>
                        Project 3
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


export function  TarotArtsDisplay() {
    return (
        <div className="project-display">
            <div className = "vertical-container" style={{alignItems: 'center', marginTop:'100px'}}>

                <h3 className='project-title'> Tarot Arts & Game Dev Tools </h3>
                <hr className='project-line-break' style={{color:'red'}}/>

                <p className="paragraph-description" style={{fontSize:'24px',color: '#3c78d8'}}>
                    Unity | C# | Design Patterns | Game Dev | Documentation
                </p>


                <div className='filler-rectangle' style={{width: '819px', height: '410px'}}></div>

                <p className="paragraph-description">
                    I coded the needs of a 2D physics-based platformer using Sonic Sprites. 
                    Not only as a proof of concept for my game idea of Tarot Arts, but to provide
                    useable documentation & APIs.
                </p>
                <p className="paragraph-description" style={{marginTop:'5px'}}>
                    Tarot Arts gameplay loop revoles around collecting Tarot Cards to change the player's attributes. 
                    These changes enable of vaitey of ways to do high-speed platforming
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

                    <button className='project-btn'>
                        Demo TBD
                    </button>
                </div>

            </div>
        </div>
    );
}

export function  LuminousWatersDisplay() {
    return (
        <div className="project-display">
            <div className = "vertical-container" style={{alignItems: 'center', marginTop:'100px'}}>

                <h3 className='project-title'> Luminous Waterways: Unreal 5 Class </h3>
                <hr className='project-line-break' style={{color:'red'}}/>
                <p className="paragraph-description" style={{fontSize:'24px',color: '#3c78d8'}}>
                    Unreal | C/C++ | Blueprints | Design Patterns | Game Design | Team Lead
                </p>

                <div className='filler-rectangle' style={{width: '819px', height: '410px'}}></div>

                <p className="paragraph-description">
                    I led a cross-diciplinary team of 6 on creating a 3D unreal game, 
                    called Luminous Waterways. Whereas the player navigated ancient ruins 
                    to complete puzzles and purifiy the santuary's water. 
                    The biggest mechanic was that rooms can be raranged when the puzzle is complete  
                </p>

                <p className="paragraph-description">
                    I made use of blueprints, unreal c++, and multithreading to simulate 
                    the movement of water across ever-shifting rooms. In addition to charting the
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
            <div className = "vertical-container" style={{alignItems: 'center', marginTop:'100px'}}>

                <h3 className='project-title'> App Design: Giving MOSE A Voice </h3>
                <hr className='project-line-break' style={{color:'red'}}/>
                <p className="paragraph-description" style={{fontSize:'24px',color: '#3c78d8'}}>
                    AdobeXD/Figma | UI/UX | Qulatative Research | Team Lead | Documentation | Design
                </p>

                <div className='filler-rectangle' style={{width: '819px', height: '410px'}}></div>

                <p className="paragraph-description">
                    With rising tides, a sinking city, and extreme weather conditions, Venice is experiencing 
                    more flooding than ever. Luckily, the city now has MOSE. MOSE (Modulo Sperimentale Elettromeccanico, 
                    Experimental Electromechanical Module) is a series of modular gates at the three inlets to the Venetian 
                    lagoon that rise from the seafloor to prevent more water from flowing into the lagoon during high tides. 
                </p>

                <p className="paragraph-description">
                    In this project, I led a cross-diciplinary team of 4 to conduct a series of interviews. 
                    We aim to find what information residents and business owners
                    currently have access to regarding tide data, flooding, MOSE operations, and how the gates may affect flooding
                    in their area. The data we obtained was then used to design a potential MOSE phone app which was then returned
                    to interviewees for further feedback. 
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
            <div className = "vertical-container" style={{alignItems: 'center', marginTop:'100px'}}>

                <h3 className='project-title'> Model Hospital Work Flow App </h3>
                <hr className='project-line-break' style={{color:'red'}}/>
                <p className="paragraph-description" style={{fontSize:'24px',color: '#3c78d8'}}>
                    Agile-Scrum | JavaFX | AdobeXD/Figma | Design Patterns | Followership | Documentation
                </p>
                <div className='filler-rectangle' style={{width: '819px', height: '410px'}}></div>

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
            <div className = "vertical-container" style={{alignItems: 'center', marginTop:'100px'}}>

                <h3 className='project-title'> Developing Novel Sign Language Tech </h3>
                <hr className='project-line-break' style={{color:'red'}}/>
                <p className="paragraph-description" style={{fontSize:'24px',color: '#3c78d8'}}>
                    JSX/React | AdobeXD | Iterative Participatory Design | Qulatative Research | Documentation
                </p>
                <div className='filler-rectangle' style={{width: '819px', height: '410px'}}></div>

                <p className="paragraph-description">
                    This project took a human-centered computing approach to build a foundation that advances
                    understanding of how deaf individuals could work and learn in environments that are designed 
                    with their needs and preferences at the forefront.  
                </p>

                <p className="paragraph-description">
                    The WPI HCI lab, American Sign Language Education Center (AEC), and I collaborated in creating UI and 
                    implementing them in React/JSX. This was done thanks to participatory design, ample research.
                    This took the form of a paid research position and independent study in B term 2021. 
                    My work contibuted to the  AEC's actual surveys and my upperclassman's senior project. 
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