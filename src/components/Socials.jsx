import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import X from "../assets/x.svg";
import Gmail from "../assets/email.svg";
import YouTube from "../assets/youTube.svg";
import LinkedIn from "../assets/linkedIn.svg";

function Socials() {
    // Social media links and icons
    const socialLinks = [
        { id: 1, name: "Instagram", icon: Instagram, url: "https://www.instagram.com", uid: "alexadev.org" },
        { id: 2, name: "Facebook", icon: Facebook, url: "https://www.facebook.com", uid: "alexadev.org" },
        { id: 3, name: "X", icon: X, url: "https://twitter.com", uid: "alexadev.org" },
        { id: 4, name: "Gmail", icon: Gmail, url: "mailto:example@gmail.com", uid: "alexaorg@gmail.com" },
        { id: 5, name: "YouTube", icon: YouTube, url: "https://www.youtube.com", uid: "alexadev.org" },
        { id: 6, name: "LinkedIn", icon: LinkedIn, url: "https://www.linkedin.com", uid: "alexadev.org" },
    ];

    return (
        <div className="bg-background pt-[90px] pb-12">
            {/* Section Title */}
            <div className="flex justify-center mb-10">
                <span className="text-accent1 text-center text-3xl font-medium border-b-2 border-accent1 pb-2">
                    Contact Us
                </span>
            </div>

            {/* Social Media Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 px-5 sm:px-8">
                {socialLinks.map(social => (
                    <div key={social.id} className="flex flex-col items-center relative">
                        <a 
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex flex-col items-center group"
                        >
                            {/* Social Media Icon */}
                            <img 
                                src={social.icon} 
                                alt={social.name} 
                                className="w-12 h-12 sm:w-16 sm:h-16 mb-2 transition-transform transform hover:scale-110" 
                            />
                            <span className="text-text font-text text-sm sm:text-base">{social.name}</span>
                            {/* UID Tooltip */}
                            <div className="absolute bottom-full mb-2 hidden group-hover:block bg-slate-600 text-accent1 text-sm sm:text-lg rounded-md p-2">
                                {social.uid}
                            </div>
                        </a>
                    </div>
                ))}
            </div>

            {/* Footer Text */}
            <div className="text-center text-xl text-text py-10">
                Designed and Developed by 
                <span className="text-accent1"> Alexa Developers </span>SRM.
            </div>
        </div>
    );
}

export default Socials;
