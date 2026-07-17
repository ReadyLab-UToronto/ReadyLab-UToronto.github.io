import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function News() {
    return (
        <div>
            <Navbar />
            <div className="relative mb-10">
                <img 
                    src={`src/assets/website_images/whiteboard.png`} 
                    alt="Background"
                    className="w-full h-[250px] object-cover object-[center_50%]"
                />
                <div className="absolute inset-0 bg-[#3B57F3]/30"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-5xl font-bold text-center my-8">NEWS</div>
                </div>
            </div>

            <div>This is the news page</div>

            <Footer />
        </div>
    )
}; 