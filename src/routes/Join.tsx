import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Join() {
    return (
        <div>
            <Navbar />
            <div className="relative mb-10">
                <img
                    src={`/website_images/whiteboard.png`}
                    alt="Background"
                    className="w-full h-[250px] object-cover object-[center_40%]"
                />
                <div className="absolute inset-0 bg-[#3B57F3]/30"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-5xl font-bold text-center my-8">JOIN OUR TEAM</div>
                </div>
            </div>

            {/* Section 1: Current opportunities */}
            <div className="flex flex-col justify-center md:px-50 px-10 gap-6">

                {/* Postdoctoral Research Opportunities */}
                <div className="text-2xl font-bold">Postdoctoral Research Opportunities</div>
                    <div className="text-lg">Dr. Olechowski has an ongoing search for exceptional Postdoctoral Fellows (PDF) to contribute to the lab's projects, including a major focus on the research of modern, collaborative computer-aided design (CAD) tools at the intersection of engineering design and human computer interaction.</div>
                
                {/* Graduate Research Opportunities */}
                <div className="text-2xl font-bold">Graduate Research Opportunities</div>
                    <div className="text-lg">In the next application cycle, we will seek students to apply to the UofT Mechanical & Industrial Engineering graduate program to join our lab. We are looking for strong graduate candidates who might have:</div>
                    <ul className="list-disc list-inside px-8 space-y-1">
                        <li>Experience with computer-aided design or model-based systems engineering software</li>
                        <li>Interest in engineering design, human-computer interaction and/or systems engineering</li>
                        <li>Strong background in statistics and data analytics</li>
                        <li>Motivation to improve communication skills</li>
                        <li>Ability to design and run human subject experiments</li>
                    </ul>
                {/* Undergraduate Research Opportunities */}
                <div className="text-2xl font-bold">Undergraduate Research Opportunities</div>
                    <div className="text-lg">READY Lab works with undergraduate students through thesis projects, summer research positions, and other research opportunities. Available projects vary each year and may involve engineering design, CAD, data analysis, human factors, and related areas.</div>

                <div className="text-lg font-bold">Undergraduate Thesis Projects</div>
                    <div className="text-lg">Students should check the official project listings for their program. These pages include current project descriptions, eligibility requirements, timelines, and application instructions.</div>
                  
                <div className="text-lg font-bold">Mechanical and Industrial Engineering students</div>
                    <div className="text-lg">
                        <a
                            href="https://www.mie.utoronto.ca/programs/undergraduate/current-thesis-projects-mie498-hy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            MIE thesis projects
                        </a>
                        {" "}are posted throughout the year. Students should check the page regularly and follow the application instructions.
                    </div>
               
                <div className="text-lg font-bold">Engineering Science students</div>
                    <div className="text-lg">
                        EngSci students are encouraged to begin exploring thesis topics and supervisors during Year 3. More information about the thesis process and available resources can be found on the{" "}
                        <a
                            href="https://engsci.utoronto.ca/program/thesis/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            EngSci website
                        </a>
                        .
                    </div>

                <div className="text-lg font-bold">Summer and Other Research Opportunities</div>
                    <div className="text-lg">
                        Students interested in summer research are encouraged to explore funding programs such as{" "}
                        <a
                            href="https://datasciences.utoronto.ca/suds/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            DSI SUDS
                        </a>
                        ,{" "}
                        <a
                            href="https://undergrad.engineering.utoronto.ca/experiential-learning/research-opportunities/nserc-usra/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            NSERC USRA
                        </a>
                        ,{" "}
                        <a
                            href="https://undergrad.engineering.utoronto.ca/experiential-learning/research-opportunities/utea/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            UTEA
                        </a>
                        , etc. Each program has its own eligibility requirements and deadlines.
                    </div>

                    <div className="border-t border-[#000000] my-4" />

                    {/* How to apply */}
                    <div className="text-2xl font-bold">How to apply</div>
                    <div className="text-lg">Please email Prof. Olechowski with your CV and Transcript, and include the phrase “We The North” in the subject.</div>
            </div>

            {/* Diversity statement */}
            <div className="flex flex-col justify-center md:px-50 px-10 mt-10 mb-20">
                <div className="text-lg font-bold">We believe that a diversity of experience and background in lab is an important source of creativity and quality of work, and so we seek applicants from under-represented groups, including those who identify as women, trans or non-binary, Black, racialized, Indigenous, persons with disabilities, and LGBQ2S+ persons.</div>
            </div>
            <Footer />
        </div>
    );
}; 