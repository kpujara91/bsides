import { title } from 'process'
import AnimateCircleImage from '../../public/images/circle-animate.webp'
import ConferenceBannerBG from '../../public/images/conference-banner.webp'
import ManishGupta from '../../public/images/ManishGupta.jpg'
import YashBharadwaj from '../../public/images/YashBharadwaj.jpg'
import IconTwitter from '../../public/images/icon-twitter.svg'
import IconLinkedin from '../../public/images/icon-linkedin.svg'



export const trainings = {
    GlobalAnimateCircleImage: AnimateCircleImage,
    Banner: {
        Breadcrumb: [
            {
                title: `HOME`,
                url: `/`
            },
            {
                title: `Call For Papers`,
            },
        ],
        banerTitle: "Call For Papers",
        BGImage: ConferenceBannerBG,
    },
    CfpContents: {
        MainTitle: <>Advanced Threat Emulation & Detection <span>(1 day)</span></>,
        description: ``,
        TopicsCovered: {
            title: `Abstract :`,
            // topicLists : [
            //     `Technical Talks (45 minutes)`,
            //     `Workshops (2 Hours)`
            // ]
            description: ` As adversarial attacks against enterprises continue to rise, the need for effective detection and
 investigation strategies has become critical for organizations. This training program is designed
 to equip participants with in-depth knowledge and practical experience, enabling them to
 effectively understand and counter various attack vectors that target clouds and hosts.
 Additionally, the program covers sophisticated evasion techniques employed by Advanced
 Persistent Threat (APT) groups, which are often the most challenging to detect.
 By the end of the training, attendees will have developed a robust set of skills that allow for
 proactive threat identification, thereby strengthening their organization's overall security posture.`
        },
        TechnicalTalks: {
            title: `Red Team Highlights`,
            // description: `Technical talks is for security researchers interested in sharing their work with other researchers and a high-level audience. We would like to invite everyone with special knowledge in breaking security in whatever area to present their skills, tools or experience.`
            RedTeamHighlights: [
                `Simulate Attacks Across Various Environments:`,
            ],
            RedTeamHighlightsInner: [
                'On-Premises & Cloud'
            ]
        },
        Workshops: {
            title: `Blue Team Highlights`,
            // description: `These are exclusive classes and workshops to give the attendees hands-on training sessions that increase security awareness and provide skills that can be immediately applied after the conference. A typical workshop session is expected to last 2 hours long.`
            BlueTeamHighlights: [
                'Hands-onInvestigations',
                'Understand Offensive Operations',
                'EnhanceReal-Time Investigation Skills'
            ]
        },
        Format: {
            title: `Format : `,
            description: 'On-Site'
        },
        Trainers: {
            title: `Trainers : `,
            description: 'Manish Gupta & Yash Bharadwaj'
        },
        TableOfContent: {
            title: 'Table of Content'
        },
        TableOfContent: {
            title: 'Table of Content',
            sections: [
                {
                    number: '1',
                    title: 'Introduction to Enterprise Cyber Defense',
                    subsections: [
                        {
                            letter: 'a',
                            title: 'Architectural Overview of Enterprise Cyber Defense'
                        },
                        {
                            letter: 'b',
                            title: 'Joint Offensive & Defensive Operations over Cloud/On-Premises'
                        }
                    ]
                },
                {
                    number: '2',
                    title: 'Offense and Defense in AWS',
                    subsections: [
                        {
                            letter: 'a',
                            title: 'Reconnaissance and Enumeration:',
                            subsubsections: [
                                {
                                    roman: 'i',
                                    title: 'Enumerating AWS Resources: Public, Cross-Account, and Internal'
                                }
                            ]
                        },
                        {
                            letter: 'b',
                            title: 'Initial Access Techniques:',
                            subsubsections: [
                                {
                                    roman: 'i',
                                    title: 'Cross-Account Role Assumption'
                                },
                                {
                                    roman: 'ii',
                                    title: 'Leveraging SSRF to Access the Metadata Service'
                                }
                            ]
                        },
                        {
                            letter: 'c',
                            title: 'Privilege Escalation and Persistence',
                            subsubsections: [
                                {
                                    roman: 'i',
                                    title: 'Exploiting Overly Permissive IAM Policies for Privilege Escalation'
                                },
                                {
                                    roman: 'ii',
                                    title: 'Establishing Persistence via Backdoors'
                                }
                            ]
                        },
                        {
                            letter: 'd',
                            title: 'Data Exfiltration',
                            subsubsections: [
                                {
                                    roman: 'i',
                                    title: 'Data Exfiltration Through Replication Activity'
                                }
                            ]
                        }
                    ]
                },
                {
                    number: '3',
                    title: 'Offense and Defense in Azure',
                    subsections: [
                        {
                            letter: 'a',
                            title: 'Reconnaissance and Enumeration:',
                            subsubsections: [
                                {
                                    roman: 'i',
                                    title: 'Enumerating Entra ID & Azure ARM Resources & Permissions'
                                }
                            ]
                        },
                        {
                            letter: 'b',
                            title: 'Initial Access Techniques:',
                            subsubsections: [
                                {
                                    roman: 'i',
                                    title: 'Phishing- MITM | Device Code'
                                },
                                {
                                    roman: 'ii',
                                    title: 'Leveraging SSRF to Access the Metadata Service'
                                }
                            ]
                        },
                        {
                            letter: 'c',
                            title: 'Privilege Escalation and Persistence',
                            subsubsections: [
                                {
                                    roman: 'i',
                                    title: 'Exploiting Excessive Entra ID/ARM Permissions for Privilege Escalation'
                                }
                            ]
                        },
                        {
                            letter: 'd',
                            title: 'Data Exfiltration',
                            subsubsections: [
                                {
                                    roman: 'i',
                                    title: 'Extracting secret information from keyvault'
                                }
                            ]
                        }
                    ]
                },
                {
                    number: '4',
                    title: 'Deceptive Defense Mechanisms for Cloud threat detection [AWS/Azure]'
                },
                {
                    number: '5',
                    title: 'Offense and Defense in On-Premise Environment',
                    subsections: [
                        {
                            letter: 'a',
                            title: 'Fileless malware',
                            subsubsections: [
                                {
                                    roman: 'i',
                                    title: 'Registry resident malware'
                                },
                                {
                                    roman: 'ii',
                                    title: 'Living-off-the-land attacks'
                                },
                                {
                                    roman: 'iii',
                                    title: 'In-Memory only malware'
                                }
                            ]
                        },
                        {
                            letter: 'b',
                            title: 'Basic process injection techniques',
                            subsubsections: [
                                {
                                    roman: 'i',
                                    title: 'Process hollowing'
                                },
                                {
                                    roman: 'ii',
                                    title: 'Process doppleganging'
                                }
                            ]
                        },
                        {
                            letter: 'c',
                            title: 'Host evasion',
                            subsubsections: [
                                {
                                    roman: 'i',
                                    title: 'AMSI'
                                },
                                {
                                    roman: 'ii',
                                    title: 'Constrained language mode'
                                },
                                {
                                    roman: 'iii',
                                    title: 'Applocker Bypass'
                                }
                            ]
                        },
                        {
                            letter: 'd',
                            title: 'Implant disguise tips',
                            subsubsections: [
                                {
                                    roman: 'i',
                                    title: 'RTLO technique'
                                },
                                {
                                    roman: 'ii',
                                    title: 'Extension / Extension spoofing'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        PreRequisites: {
            title: 'Pre-Requisites :',
            PreRequisitesHighlights: [
                'Kali / Parrot VM in VMWare workstation Pro / VirtualBox (NAT mode) internet access',
                'An OpenMind :)',
            ]
        },
        NOTE: {
            title: `NOTE : `,
            description: 'Teamwill share specific setup requirements 10 days before the training'
        },
        Deliverable: {
            title: 'Deliverable :',
            PreRequisitesHighlights: [
                'Comprehensive 150+ Page PDF',
                '7 Days of Lab Access',
                'Lab command reference',
                'Cloud / On-Premise investigation & detection rules',
            ]
        },
        AttendeesTakeaway: {
            title: 'Attendees Takeaway :',
            PreRequisitesHighlights: [
                'Premium training materials + lab access (during training)',
                'Direct technical support over discord channel',
                'Investigative Mind Maps',
                'Detective mindset to tackle complex on-premise attacks',
            ]
        },

        TrainerInfraRequirements: {
            title: 'Trainer Infra Requirements :',
            PreRequisitesHighlights: [
                '2 Big Screens with projector',
                'Standard Table with 2 chairs',
                'Power Extension',
                'Whiteboard & Marker',
                'Separate Trainer Wi-Fi & 2 Mic',
            ]
        },

        BIO: [
            {
                title: 'Manish Gupta',
                ImagePath: ManishGupta,
                description: [
                    `Manish Gupta is Director of CyberWarFare Labs having 8.5+ years of expertise in offensive
                    Information Security. His Research interest includes Real World Cyber Attack Simulation and
                    Advanced persistent Threat (APT). Previously he has delivered hands-on red / blue / purple team
                    training / talks / workshops at Blackhat USA, DEFCON, Nullcon, BSIDES Chapters, X33fcon,
                    NorthSec & other corporate training etc. You can reach out to him on Twitter @cyberwarfarelab`
                ],
                speakerSocialMediaList:[
                    {
                        title:'Linkedin',
                        icon: IconLinkedin,
                        url:'https://www.linkedin.com/in/0hack/',
                    }
                ]
            },
            {
                title: 'Yash Bharadwaj',
                ImagePath: YashBharadwaj,
                description: [
                    `Yash Bharadwaj, Technical director at CyberWarFare Labs, With a sharp focus on building and
                        optimizing Red and Blue team infrastructures, evading advanced security controls, and exploiting
                        complex systems. His expertise extends to conducting and delivering hands-on Red, Blue, and
                        Purple team trainings, talks, workshops, and research presentations at some of the most
                        prestigious conferences in the industry, including Black Hat (Asia, USA), Nullcon, X33fCon,
                        NorthSec, BSIDES chapters, OWASP, CISO Platform, YASCON, and more. You can reach out to
                        him on Twitter @flopyash`
                ],
                speakerSocialMediaList:[
                    {
                        title:'X',
                        icon: IconTwitter,
                        url:'https://twitter.com/flopyash',
                    },
                    {
                        title:'Linkedin',
                        icon: IconLinkedin,
                        url:'https://www.linkedin.com/in/bharadwaj-yash',
                    }
                ]
            }
        ],

        TopicOfInterest: {
            title: `Topics of Interest for Bsides Ahmedabad(not limited to)`,
            interestTopicLists: [
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