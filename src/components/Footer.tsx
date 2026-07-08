import lab_logo from '@/assets/logos/readylab-logo-footer.png';
import uoft_logo from '@/assets/logos/UofT_logo-white.png';


export default function Footer() {
    return (
        <footer className="bg-[#3B57F3] mt-16">
            <div className="mx-auto grid max-w-7xl gap-8 px-8 py-12 md:grid-cols-2">

                {/* Lab information */}
                <div className="flex items-center md:items-start gap-20">
                    <img 
                        src={uoft_logo}
                        alt="University of Toronto logo"
                        className="h-30 w-auto mb-4"
                    />
                    <img
                        src={lab_logo}
                        alt="READY Lab logo"
                        className="h-20 w-auto mb-4"
                    />
                </div>

                {/* Contact */}
                <div className="flex gap-8 md:items-start">
                    <div>
                        <h3 className="mb-4 text-white font-semibold">
                            Contact
                        </h3>
                        <p className="text-sm text-white">
                            Email: a.olechowski[at]utoronto.ca
                        </p>
                    </div>
                    
                    {/* Location */}
                    <div>
                        <h3 className="mb-4 text-white font-semibold">
                            Office Location
                        </h3>
                        <p className="text-sm text-white">
                            MY764 (Myhal Centre for Engineering Innovation and Entrepreneurship)
                            <br /><br />
                            5 King's College Road, Toronto, Ontario
                            <br />
                            M5S 3G8
                        </p>
                    </div>
                </div>
            </div>


            {/* Bottom bar */}
            <div className="border-t px-8 py-4 text-center text-sm text-white">
                © {new Date().getFullYear()} Ready Lab - Prof. Olechowski.
            </div>
        </footer>
    )
}