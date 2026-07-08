import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate } from 'react-router';
import logo from '@/assets/readylab-logo.jpg';

export default function NavBar() {
    const navigate = useNavigate();
    const navButtonStyle = "text-base";

    const links = [
        { name: "Home", path: "/" },
        { name: "Team", path: "/team" },
        { name: "Publications", path: "/publications" },
        { name: "Resources", path: "/resources" },
        { name: "News", path: "/news" },
        { name: "Join Our Team", path: "/join" }
    ];

    return (
        <div className="flex w-full items-center justify-between py-6 px-16 sticky top-0 bg-white z-50 shadow-md">
            {/* Logo */}
            <div>
                <img src={logo} alt="ReadyLab Logo" className="h-18 w-auto" />
            </div>

            {/* Desktop Navigation Bar */}
            <div className="hidden md:flex justify-end gap-2">
                {links.map((link) => (
                    <Button
                        key={link.path}
                        variant="ghost"
                        className={navButtonStyle}
                        onClick={() => navigate(link.path)}
                    >
                        {link.name}
                    </Button>
                ))}
            </div>

            {/* Mobile Navigation Bar */}
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger render={<Button variant="ghost" className={navButtonStyle}>Menu</Button>} />
                    <SheetContent side="right">
                        <div className="mt-8 flex flex-col gap-4">
                            {links.map((link) => (
                                <Button
                                    key={link.path}
                                    variant="ghost"
                                    className="justify-start text-lg"
                                    onClick={() => navigate(link.path)}
                                >
                                    {link.name}
                                </Button>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}; 