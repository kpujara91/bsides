import SecurityBsidesAhmedabadBG from '../../public/images/technology-security.webp'
import AnimateCircleImage from '../../public/images/circle-animate.webp'
import TeamBGImage from '../../public/images/team-bg-image.webp'
import IconTwitter from '../../public/images/icon-twitter.svg'
import IconLinkedin from '../../public/images/icon-linkedin.svg'
import JinenImage from '../../public/images/Jinen.png'
import DipenImage from '../../public/images/Dipen.png'
import SaurabhPandeyImage from '../../public/images/saurabh-pandey.jpeg'
import NikhilImage from '../../public/images/Nikhil.png'
import CodeOfConductImage from '../../public/images/codeofconduct.webp'
import VenuePlaceImage from '../../public/images/VenuePlace.webp'
import VenueImage from '../../public/images/venue.webp'
import IconLocation from '../../public/images/icon-location.svg'
import IconEmail from '../../public/images/icon-mail.svg'
import IconCall from '../../public/images/icon-call.svg'
import ContactUsImage from '../../public/images/contactus-banner.webp'

import SentinelOneWhite from '../../public/images/sentinel-one-white-bg.png'

export const OverviewContent = {
    GlobalAnimateCircleImage: AnimateCircleImage,
    SecurityBsidesAhmedabad: {
        Banner:{
            Breadcrumb:[
                {
                    title: `HOME`,
                    url:`/`
                },
                {
                    title: `OVERVIEW`,
                    url:`/overview/security-bsides-ahmedabad/`
                },
                {
                    title: `SECURITY BSIDES AHMEDABAD`,
                },
            ],
            banerTitle: "SECURITY BSIDES",
            banerTitle2: "AHMEDABAD",
            bannerAnimationLoop: [
                `AHMEDABAD`,
                // `AHMEDABAD`,
                // `AHMEDABAD`,
                // `AHMEDABAD`
            ],
            BGImage: SecurityBsidesAhmedabadBG,
            PresentedBy: `Presents`,
            PresentedByImg: SentinelOneWhite,
        },
        AboutBsidesAhmedabad:{
            Caption: `About`,
            Title: <>Bsides <span>Ahmedabad</span></>,
            Desription:<>
            <p>{`Security BSides is a community-led framework for establishing events for and by information security community members. A lot of countries around the globe have these kinds of conferences to present and discuss research on cybersecurity and subjects related to it. We are responsible for organizing an independent BSides approved event for Ahmedabad.`}</p>
            <p>{`Our ultimate goal is to enlarge the spectrum of discussion beyond the confine time and space. The event has demos, discussions, and interactions from the esteemed participants. The event creates opportunities for everyone to participate and present in a confidential environment that encourages collaboration. It is a place where conversation for the future goal is happening.`}</p>
            <p>{`As hackers get smarter, the need to protect the network device and digital assets is even greater. To the entire sphere of the IT world, the word ‘security’ is top of mind. Many organizations and people are very interested in the next new thing in security. We offer conferences and events where these people and organizations come to collaborate, share their opinions, and learn. The event provides a fascinating atmosphere for open conversations and discussions of information technology, privacy, security, critical infosec issues, and technical and cultural implication on society. Also, the event organizes a supreme quality line up of speakers and presenters, exciting workshops and and other security challenges.`}</p>
            </>,
        },
    },
    Team:{
        Banner:{
            Breadcrumb:[
                {
                    title: `HOME`,
                    url:`/`
                },
                {
                    title: `OVERVIEW`,
                    url:`/overview/security-bsides-ahmedabad/`
                },
                {
                    title: `TEAM`,
                },
            ],
            banerTitle: "MEET OUR",
            bannerAnimationLoop: [
                `TEAM`,
                `TEAM`,
                `TEAM`,
                `TEAM`
            ],
            BGImage: TeamBGImage,
        },
        OurTeam: {
            Title: <>Our <span>Team</span></>,
            Description: `Stronger together, our team achieves greatness through collaboration, unity, and unwavering determination.`,
            OurTeamList:[
                {
                    speakerImage: NikhilImage,
                    speakerName: `Nikhil Srivastava`,
                    speakerDesignation: ``,
                    speakerSocialMediaList:[
                        {
                            title:'Linkedin',
                            icon: IconLinkedin,
                            url:'https://www.linkedin.com/in/nikhilksrivastava/',
                        }
                    ]
                },
                {
                    speakerImage: JinenImage,
                    speakerName: `Jinen Patel`,
                    speakerDesignation: ``,
                    speakerSocialMediaList:[
                        {
                            title:'Twitter',
                            icon: IconTwitter,
                            url:'https://x.com/j4jinen',
                        },
                    ]
                },
                {
                    speakerImage: SaurabhPandeyImage,
                    speakerName: `Saurabh Kumar Pandey`,
                    speakerDesignation: ``,
                    speakerSocialMediaList:[
                        {
                            title:'Linkedin',
                            icon: IconLinkedin,
                            url:'https://www.linkedin.com/in/saurabh-kumar-pandey-1303b4126/',
                        },
                    ]
                },
                    // {
                //     speakerImage: DipenImage,
                //     speakerName: `Dipen Wadhwa`,
                //     speakerDesignation: ``,
                //     speakerSocialMediaList:[
                //         {
                //             title:'Twitter',
                //             icon: IconTwitter,
                //             url:'https://twitter.com/dipenwadhwa',
                //         },
                //     ]
                // },
            ],
        }
    },
    CodeOfConduct:{
        Banner:{
            Breadcrumb:[
                {
                    title: `HOME`,
                    url:`/`
                },
                {
                    title: `OVERVIEW`,
                    url:`/overview/security-bsides-ahmedabad/`
                },
                {
                    title: `CODE OF CONDUCT`,
                },
            ],
            banerTitle: "CODE OF CONDUCT",
            // bannerAnimationLoop: [
            //     `TEAM`,
            //     `TEAM`,
            //     `TEAM`,
            //     `TEAM`
            // ],
            BGImage: CodeOfConductImage,
        },
        ConductDetails:{
            Description:
            <>
                <p>{`All attendees, speakers, sponsors and volunteers at our conference are required to agree with the following code of conduct. We expect cooperation from all participants to help ensure a safe environment for everybody.`}</p>
                <p>{`Bsides Ahmedabad is dedicated to providing a harassment-free conference experience for everyone regardless of gender, sexual orientation, disability, physical appearance, body size, race, religion or technology choices. We do not tolerate harassment of conference participants in any form.`}</p>
                <p>{`Examples of harassment include but not limited to offensive comments, verbal threats or demands, sexualized images in public spaces, intimidation, stalking, harassing photography or recording, sustained disruption of sessions or events, and unwelcome physical contact or sexual attention. Conference participants violating these rules may be sanctioned or expelled from the conference without a refund and/or banned from future Bsides Ahmedabad events, at the discretion of the conference organisers. If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately or can drop an email to info@bsidesahmedabad. in We thank our participants for your help in keeping the event welcoming, respectful, and friendly to all.`}</p>
            </>
        }
    },
    Venue:{
        Banner:{
            Breadcrumb:[
                {
                    title: `HOME`,
                    url:`/`
                },
                {
                    title: `OVERVIEW`,
                    url:`/overview/security-bsides-ahmedabad/`
                },
                {
                    title: `VENUE`,
                },
            ],
            banerTitle: "VENUE",
            // bannerAnimationLoop: [
            //     `TEAM`,
            //     `TEAM`,
            //     `TEAM`,
            //     `TEAM`
            // ],
            BGImage: VenueImage,
        },
        VenueDetails:{
            Caption: `Venue Details`,
            Title: <>WHERE TO <span>FIND US</span></>,
            Location: `The Forum - Celebration & Convention, Club O7`,
            VenuePlaceImage: VenuePlaceImage,
            VenuePlacLocation: `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29380.08007362818!2d72.459074!3d23.005039000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9a586cc537d5%3A0xf1472ade5d79c531!2sClub%20O7!5e0!3m2!1sen!2sin!4v1722318140313!5m2!1sen!2sin`,
            MediaTitle: <>Get In <span>Touch</span></>,
            VenuePlacMediaList:[
                {
                    icon: IconLocation,
                    title: `Address`,
                    subtitle: `The Forum - Celebration & Convention, club O7 , Ahmedabad, Gujarat, India`,
                },
                {
                    icon: IconEmail,
                    title: `Email`,
                    subtitle: `info@bsidesahmedabad.in`,
                    url: `mailto:info@bsidesahmedabad.in`
                }
            ]
        }
    },
    contact:{
        Banner:{
            Breadcrumb:[
                {
                    title: `HOME`,
                    url:`/`
                },
                {
                    title: `OVERVIEW`,
                    url:`/overview/security-bsides-ahmedabad/`
                },
                {
                    title: `CONTACT`,
                },
            ],
            banerTitle: "CONTACT",
            // bannerAnimationLoop: [
            //     `TEAM`,
            //     `TEAM`,
            //     `TEAM`,
            //     `TEAM`
            // ],
            BGImage: ContactUsImage,
        },
        GetInTouchDetails:{
            Title: <>Get In <span>Touch</span></>,
            GetInTouchDetailList:[
                {
                    icon: IconEmail,
                    title: `GENERAL ENQUIRIES`,
                    subtitle: `info@bsidesahmedabad.in`,
                    url: `mailto:info@bsidesahmedabad.in`,
                },
                {
                    icon: IconEmail,
                    title: `SPONSORSHIP ENQUIRIES`,
                    subtitle: `sponsor@bsidesahmedabad.in`,
                    url: `mailto:sponsor@bsidesahmedabad.in`
                },
                {
                    icon: IconEmail,
                    title: `CFP ENQUIRIES`,
                    subtitle: `info@bsidesahmedabad.in`,
                    url: `mailto:info@bsidesahmedabad.in`
                },
                {
                    icon: IconCall,
                    title: `PHONE`,
                    subtitle: `+91 9925093995`,
                    url: `tel:+91 9925093995`
                }
            ]
        }
    }
}