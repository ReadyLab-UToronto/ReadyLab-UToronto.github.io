import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

const researchOutputs = [
    {
        image: 'resource1_onshape.png',
        alt: 'Onshape Research Guide',
        href: 'https://github.com/ReadyLab-UToronto/Onshape-Research-Guide/',
        linkText: 'The Onshape Research Guide',
        description: 'is a collaboration between Ready Lab and PTC Education which presents the ways in which the Onshape CAD platform can be leveraged for research.',
    },
    {
        image: 'resource2_github.png',
        alt: 'Ready Lab Github repository',
        href: 'https://github.com/ReadyLab-UToronto',
        linkText: 'The Ready Lab Github repository',
        description: 'hosts the most up-to-date code for our open-source research projects.',
    },
    {
        image: 'resource3_dataverse.png',
        alt: 'Ready Lab Dataverse',
        href: 'https://borealisdata.ca/dataverse/readylab',
        linkText: 'The Ready Lab Dataverse',
        description: 'hosts supplementary material for research projects.',
    },
    {
        image: 'resource4_hacked.png',
        alt: 'HACKED Hackathon 1 Transcript Sample',
        href: 'https://doi.org/10.5683/SP3/7CCTYU',
        linkText: 'The Hackathon Archive of Collaboration Knowledge and Engineering Design (HACKED): Hackathon 1 Transcript Sample',
        description: 'is an open-source dataset of transcript data from a hackathon event.',
    },
    // To add more resources here, use THIS template:
    // Images are located in the /src/assets/resources folder.
    
    // {
    //     image: 'resource5_example.png',
    //     alt: 'Example resource',
    //     href: 'https://example.com',
    //     linkText: 'Text to be hyperlinked',
    //     description: 'Text to go after the hyperlink',
    // },
];

export default function Resources() {
    return (
        <div>
            <Navbar />

            <div className="text-4xl font-bold text-center my-20">RESOURCES</div>
            <div className="border-t border-[#000000] mx-auto max-w-5xl my-8" />

            <div className="flex flex-col justify-center px-50 gap-10">
                <div className="text-2xl font-bold">Research Outputs</div>
                <div className="text-lg">
                    Artifacts and resources produced from Ready Lab beyond our research publications:
                </div>

                {researchOutputs.map((resource) => (
                    <div
                        key={resource.href}
                        className="flex flex-col md:flex-row items-start gap-6"
                    >
                        <a
                            href={resource.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="md:w-1/4 shrink-0"
                        >
                            <img
                                src={`src/assets/resources/${resource.image}`}
                                alt={resource.alt}
                                className="w-full h-auto"
                            />
                        </a>
                        <div className="text-lg md:w-3/4">
                            <a
                                href={resource.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                {resource.linkText}
                            </a>
                            {" "}{resource.description}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col justify-center px-50 gap-6 mt-10 mb-20">
                <div className="text-2xl font-bold">Presentation Recordings</div>
                <div className="text-lg">
                    Watch our research presentations on{" "}
                    <a
                        href="https://www.youtube.com/channel/UCvz2dMoaUfy_DMCgZ5TdJ_w/featured"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        YouTube
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
}
