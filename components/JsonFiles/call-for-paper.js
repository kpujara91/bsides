import { title } from 'process'
import AnimateCircleImage from '../../public/images/circle-animate.webp'
import ConferenceBannerBG from '../../public/images/conference-banner.webp'
export const CallForPappersContent = {
    GlobalAnimateCircleImage: AnimateCircleImage,
        Banner:{
            Breadcrumb:[
                {
                    title: `HOME`,
                    url:`/`
                },
                {
                    title: `Call For Papers`,
                },
            ],
            banerTitle: "Call For Papers",
            BGImage: ConferenceBannerBG,
        },
        CfpContents : {
            MainTitle : <>Call for Papers <span>(CFP)</span></>,
            description : `If you have a cool and interesting workshop with hands-on exercises and mind-blowing technical speech content, this is the opportunity for you to collectively present and get feedback from the community. We are looking for your impressive submission in the following categories below:`,
            TopicsCovered : {
                title : `Topics Covered:`,
                topicLists : [
                    `Technical Talks (45 minutes)`,
                    `Workshops (2 Hours)`
                ]
            },
            TechnicalTalks : {
                title : `Technical Talks`,
                description : `Technical talks is for security researchers interested in sharing their work with other researchers and a high-level audience. We would like to invite everyone with special knowledge in breaking security in whatever area to present their skills, tools or experience.`
            },
            Workshops : {
                title : `Workshops`,
                description : `These are exclusive classes and workshops to give the attendees hands-on training sessions that increase security awareness and provide skills that can be immediately applied after the conference. A typical workshop session is expected to last 2 hours long.`
            },
            TopicOfInterest : {
                title : `Topics of Interest for Bsides Ahmedabad(not limited to)`,
                interestTopicLists : [
                    `Bug Bounty`,
                    `Web Application Hacking`,
                    `Malware Analysis`,
                    `Mobile Application Hacking`,
                    `Red Teaming`,
                    `Cloud Security`,
                    `WLAN and Bluetooth Security`,
                    `New Vulnerabilities and Exploits`,
                    `Reverse Engineering`,
                    `Hardware / IOT / ICS / SCADA Security`,
                    `Firewall Evasion`,
                    `Blockchain vulnerabilities`,
                    `Burp Suite`,
                    `Browser Security`,
                    `Social Engineering`,
                    `Physical security`,
                    `Open Source Tool Release and Demo`,
                ]
            },
            CfpGuidelines: {
                title: 'CFP Guidelines',
                description: [
                    `The speaker and presenters are advised not to submit talks about any companies or products. The event will not be able to accept workshops or speeches that only use commercial products. However, you can utilize free/evaluation version or feature in your workshops and talks.`,
                    `The speaker and presenters must ensure that the workshops and talks are technically sound. The workshops must strongly be preferred to have more hands-on exercises.`,
                    `Only one speaker will be eligible for the following benefits in case there are two or more speakers for a talk.`
                ]
            },
            CfpGoogleForm: {
                formLink: `https://docs.google.com/forms/d/e/1FAIpQLSfHui1DBAXi8vDptLWlwDAe9QbAvpIQpjkrHUWYVybIQsr72g/viewform`
            }
        }

}