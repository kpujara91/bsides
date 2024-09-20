import AwardsBannerBG from '../../public/images/awards-banner.jpeg'
import KamalSharma from '../../public/images/cxo-kamal-sharma.png'
import Ajit from '../../public/images/jury-ajit.png'
import IconLinkedin from '../../public/images/icon-linkedin.svg'
import AbhijethDugginapeddi from '../../public/images/AbhijethDugginapeddi.jpeg'
export const AwardsContent = {
    Banner:{
        Breadcrumb:[
            {
                title: `HOME`,
                url:`/`
            },
            {
                title: `Awards`,
            },
        ],
        banerTitle: "Awards",
        BGImage: AwardsBannerBG,
        btnTitle : `Nominate Now`,
        btnUrl : `https://docs.google.com/forms/d/e/1FAIpQLSe5fFyolarEliWURFrAP0oIM_wJGtBRgSIehIE7PRNELTTOgw/viewform`
    },
    Awards : {
        MainTitle : <>Maestro Awards 2024: <span>Honouring Excellence in Cybersecurity</span></>,
        description1 : <>Welcome to the Maestro Awards 2024, a prestigious event hosted by <b> Security BSides Ahmedabad</b>. This event is dedicated to recognizing and celebrating the outstanding achievements and contributions within the cybersecurity industry. The Maestro Awards are more than just accolades; they represent a commitment to innovation, leadership, and the relentless pursuit of excellence in the ever-evolving landscape of cybersecurity.
        </>,
        description2 : <>Organised by Security BSides Ahmedabad, a renowned conference for cybersecurity professionals, researchers, and enthusiasts, the Maestro Awards aim to shine a spotlight on the individuals, teams, and organisations that have significantly impacted their respective fields. Below is the list of Award categories for the Maestro Awards 2024:
        
        </>,
        awardData:[
           "CISO of the Year",
            "Ethical Hacker of the Year",
           " Rising Star of the Year",
            "Consultant of the Year",
            "Pentest Team of the Year",
            "Red Team of the Year",
           " SOC Team of the Year",
            "Threat Intelligence Team of the Year",
            "Executive of the Year",
            "Thought Leader of the Year",
            "Influencer of the Year",
            "Startup of the Year",
           " Entrepreneur of the Year",
            "Mentor of the Year",
            "Open Source Tool of the Year",
            "Epic Fail of the Year",
            "Best Security Podcast of the Year",
            "Cybersecurity Community Champion",
           " Women in Security Advocate of the Year"
            ],
        AwardsImage: AwardsBannerBG,

    },
    AwardsEntryGuidelines : {
        MainTitle: <>Maestro Awards 2024: <span> Entry Guidelines</span></>,
        description : `Thank you for your interest in participating in the Maestro Awards 2024, hosted by Security BSides Ahmedabad. Please carefully review the following entry guidelines before submitting your nomination.`,
        SubTitle : `Eligibility Criteria:`,
        EligibilityLists : [
            {
                title : `Who Can Enter:`,
                description : [
                    `Individuals, teams, organisations, and startups in the cybersecurity industry are eligible to enter.`,
                    `Self-nominations and third-party nominations are both accepted.`
                ]
            },
            {
                title : `Categories:`,
                description : [
                    `Review the list of award categories and select the one that best fits the achievements of the nominee. A nominee can be submitted for multiple categories if applicable.`
                ]
            },
            {
                title : `Timeframe:`,
                description : [
                    `Nominations should focus on achievements and contributions made during the past years (August 2022 - August 2024).`
                ]
            }
        ],
        SubmissionRequirementsTitle : `Submission Requirements`,
        SubmissionRequirementsLists : [
            {
                title : `Nomination Form:`,
                description : [
                    `Complete the official Maestro Awards 2024 nomination form, providing all requested information. Incomplete submissions may not be considered.`,
                    `Be sure to select the correct award category and provide a thorough and accurate summary of achievements.`
                ]
            },
            {
                title : `Supporting Documentation:`,
                description : [
                    `Include any relevant documents (e.g., CV, project reports, case studies, testimonials, media coverage) that support the nomination. These documents should highlight the nominee’s qualifications, achievements, and impact.`,
                    `All supporting documents should be uploaded in PDF format and should not exceed 10 pages in total.`
                ]
            },
            {
                title : `References:`,
                description : [
                    `Provide contact details for two professional references who can verify the nominee’s contributions and accomplishments. These references may be contacted during the evaluation process.`
                ]
            }
        ],
        AdditionalInformationTitle : `Additional Information`,
        AdditionalInformationLists : [
            {
                title : `Confidentiality:`,
                description : [
                    `All submitted information will be treated with strict confidentiality and used solely for the purpose of evaluating the nomination.`,
                ]
            },
            {
                title : `Publicity:`,
                description : [
                    `By submitting a nomination, you agree that the nominee’s name and achievements may be used in Maestro Awards 2024 promotional materials, including the awards ceremony and press releases.`
                ]
            },
            {
                title : `Contact Information:`,
                description : [
                    `For any questions or further assistance, please contact the Maestro Awards team at [info@bsidesahmedabad.in].`
                ]
            }
        ],
        MeetOurJuryTitle : <> Meet  Our <span>Jury </span></>,
        MeetOurJury : [
            {
                Image: Ajit,
                Name: `Ajit Hatti`,
                Designation: `Founder at PureID `,
                SocialMediaList:[
                    {
                        title:'Linkedin',
                        icon: IconLinkedin,
                        url:'https://www.linkedin.com/in/ajithatti/',
                    }
                ]
            },
            {
                Image: KamalSharma,
                Name: `Kamal Sharma`,
                Designation: ` Founder AuthenticOne and CISO at ASM technology `,
                SocialMediaList:[
                    {
                        title:'Linkedin',
                        icon: IconLinkedin,
                        url:'https://www.linkedin.com/in/kamalsh/',
                    }
                ]
            },
            {
                Image: AbhijethDugginapeddi,
                Name: `Abhijeth Dugginapeddi`,
                Designation: ` Cybersecurity Leader, Advisor and Adjunct Professor `,
                SocialMediaList:[
                    {
                        title:'Linkedin',
                        icon: IconLinkedin,
                        url:'https://www.linkedin.com/in/abhijeth',
                    }
                ]
            }
        ]
    }

}