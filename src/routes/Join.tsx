import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Join() {
    return (
        <div>
            <Navbar />
            <div className="relative mb-10">
                <img
                    src={`src/assets/website_images/whiteboard.png`}
                    alt="Background"
                    className="w-full h-[250px] object-cover object-[center_40%]"
                />
                <div className="absolute inset-0 bg-[#3B57F3]/30"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-5xl font-bold text-center my-8">OPEN RESEARCH OPPORTUNITIES</div>
                </div>
            </div>

            {/* Section 1: Current opportunities */}
            <div className="flex flex-col justify-center px-50 gap-6">
                <div className="text-2xl font-bold">Postdoctoral</div>
                    <div className="text-lg">Dr. Olechowski has an ongoing search for exceptional Postdoctoral Fellows (PDF) to contribute to the lab's projects, including a major focus on the research of modern, collaborative computer-aided design (CAD) tools at the intersection of engineering design and human computer interaction.</div>
                <div className="text-2xl font-bold">Graduate</div>
                    <div className="text-lg">In the next application cycle, we will seek students to apply to the UofT Mechanical & Industrial Engineering graduate program to join our lab. We are looking for strong graduate candidates who might have:</div>
                    <ul className="list-disc list-inside px-8 space-y-1">
                        <li>Experience with computer-aided design or model-based systems engineering software</li>
                        <li>Strong background in statistics and data analytics</li>
                        <li>Motivation to improve communication skills</li>
                        <li>Ability to design and run human subject experiments</li>
                    </ul>
                <div className="text-2xl font-bold">Undergraduate</div>
                    <div className="text-lg">Undergraduate thesis students, current MEng students, and undergraduate students looking for summer research are invited to apply to the lab.</div>

                    {/* How to apply */}
                    <div className="text-2xl font-bold">How to apply</div>
                    <div className="text-lg">Please email Prof. Olechowski with your CV and Transcript, and include the phrase “We The North” in the subject.</div>
            </div>

            {/* Diversity statement */}
            <div className="flex flex-col justify-center px-50 mt-10 mb-20">
                <div className="text-lg font-bold">We believe that a diversity of experience and background in lab is an important source of creativity and quality of work, and so we seek applicants from under-represented groups, including those who identify as women, trans or non-binary, Black, racialized, Indigenous, persons with disabilities, and LGBQ2S+ persons.</div>
            </div>
            <Footer />
        </div>
    );
}; 