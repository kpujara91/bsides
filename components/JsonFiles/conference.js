import AnimateCircleImage from '../../public/images/circle-animate.webp'
import ConferenceBannerBG from '../../public/images/conference-banner.webp'
import SponsorControlCase from '../../public/images/sponsor-control-case.jpg'
import SentinelOne from '../../public/images/sentinel-one.png'
import SentinelOneWhite from '../../public/images/sentinel-one-white-bg.png.svg'
import SponsorKyzotrick from '../../public/images/sponsor-kyzotrick.png'
import SponsorMiniOrange from '../../public/images/sponsor-miniorange.png'
import SponsorHackerOne from '../../public/images/sponsor-hackerone.png'
import SponsorSynack from '../../public/images/sponsor-synack.png'
import SponsorProjectDiscovery from '../../public/images/sponsor-project-discovery.png'
import SponsorBugBase from '../../public/images/sponsor-bugbase.svg'
import SponsorCobalt from '../../public/images/sponsor-cobalt.png'


import SalesForce from '../../public/images/sales-force.png'
import RiskProfiler from '../../public/images/RiskProfiler.webp'
import Amynasec from '../../public/images/amynas-logo.png'
import Projectdiscovery from '../../public/images/projectdiscovery.webp'


import SponsorSecasure from '../../public/images/sponsor-secasure.png'
import SponsorRedTeamSummit from '../../public/images/sponsor-red-team-summit.png'
import SponsorTheSecopsGroup from '../../public/images/sponsor-the-secops-group.svg'
import SponsorRiskProfiler from '../../public/images/sponsor-risk-profiler.png'
import SponsorCloudsek from '../../public/images/cloudsek-new-logo.png'
import SponsorPrivacySquare from '../../public/images/sponsor-privacy-square.png'

import cobaltLogo from '../../public/images/sponsorLogo.webp'
import BugcrowdLogo from '../../public/images/BugcrowdLogo.png'
import synackLogo from '../../public/images/synack.svg'
// import immunefi from '../../public/images/immunefi.png'
import immunefi from '../../public/images/immunify.svg'



export const ConferenceContent = {
    GlobalAnimateCircleImage: AnimateCircleImage,
    Sponsors : {
        Banner:{
            Breadcrumb:[
                {
                    title: `HOME`,
                    url:`/`
                },
                {
                    title: `Conference`,
                    url:`/conference/sponsors`},
                {
                    title: `Sponsors`,
                },
            ],
            banerTitle1: "BSIDES",
            bannerAnimationLoop: [
                `AHMEDABAD`,
                `AHMEDABAD`,
                `AHMEDABAD`,
                `AHMEDABAD`
            ],
            banerTitle2: "0X05 SPONSORS & PARTNERS",
            BGImage: ConferenceBannerBG,
        },
        SponsorsContent : [
            {
                MainTitle : <>PRESENTING <span>SPONSOR</span></>,
                SponsorsDetails : [
                    {
                        ImagePath : SentinelOneWhite,
                        extraTitle:"",
                        description : [
                            `SentinelOne started with an idea: to protect the things that matter most to our customers by pushing the boundaries of cybersecurity. Over the decades, we’ve hustled and innovated, we’ve grown and transformed, to create the world’s most advanced cybersecurity platform. Valuing trust, accountability, ingenuity, and unstoppable drive above all else, our teams are inspired to challenge the status quo and build lasting partnerships with every customer.`
                        ],
                        url : `https://www.sentinelone.com/`,
                        urlTitle : `Learn more : https://www.sentinelone.com/`
                    },
                    // {
                    //     ImagePath : SponsorKyzotrick,
                    //     extraTitle:"",
                    //     description : [
                    //         `Keyzotrick is a global cyber intelligence and security organization based in Jamshedpur, Jharkhand, with operations in Ahmedabad, Gujarat. We serve the Intelligence Community, Law Enforcement, and Corporations with top-tier excellence, offering expertise in police modernization, fraud investigation, surveillance, and cutting-edge technology solutions. Partnered with major government agencies and private sector organizations, we focus solely on cyber intelligence and investigations, delivering vendor- neutral, high-end security solutions.`,
                    //         `Our advanced data-driven media monitoring services provide important insights to authorities in monitoring, tracking, and analyzing online activity on all levels of the internet, including the CyberHumint, SIGINT, COMMINT, Deep and Dark web, in order to identify new data sources and leads to maximize their investigations. Our value and motive stand true to social-equity, law and order, and national security.`
                    //     ],
                    //     url : `https://www.keyzotrickintelligence.com/`,
                    //     urlTitle : `Learn more : https://www.keyzotrickintelligence.com/`
                    // }
                ],
                show: true
            },
            // {
            //     MainTitle : <>SILVER <span>SPONSOR</span></>,
            //     SponsorsDetails : [
            //         {
            //             ImagePath : SentinelOneWhite,
            //             extraTitle:"",
            //             description : [
            //                 `SentinelOne started with an idea: to protect the things that matter most to our customers by pushing the boundaries of cybersecurity. Over the decades, we’ve hustled and innovated, we’ve grown and transformed, to create the world’s most advanced cybersecurity platform. Valuing trust, accountability, ingenuity, and unstoppable drive above all else, our teams are inspired to challenge the status quo and build lasting partnerships with every customer.`
            //             ],
            //             url : `https://www.sentinelone.com/`,
            //             urlTitle : `Learn more : https://www.sentinelone.com/`
            //         },
            //         // {
            //         //     ImagePath : SponsorKyzotrick,
            //         //     extraTitle:"",
            //         //     description : [
            //         //         `Keyzotrick is a global cyber intelligence and security organization based in Jamshedpur, Jharkhand, with operations in Ahmedabad, Gujarat. We serve the Intelligence Community, Law Enforcement, and Corporations with top-tier excellence, offering expertise in police modernization, fraud investigation, surveillance, and cutting-edge technology solutions. Partnered with major government agencies and private sector organizations, we focus solely on cyber intelligence and investigations, delivering vendor- neutral, high-end security solutions.`,
            //         //         `Our advanced data-driven media monitoring services provide important insights to authorities in monitoring, tracking, and analyzing online activity on all levels of the internet, including the CyberHumint, SIGINT, COMMINT, Deep and Dark web, in order to identify new data sources and leads to maximize their investigations. Our value and motive stand true to social-equity, law and order, and national security.`
            //         //     ],
            //         //     url : `https://www.keyzotrickintelligence.com/`,
            //         //     urlTitle : `Learn more : https://www.keyzotrickintelligence.com/`
            //         // }
            //     ],
            //     show: true
            // },
            {
                MainTitle :  <>LANYARD <span>SPONSOR</span></>,
                SponsorsDetails : [
                    {
                        ImagePath : SalesForce,
                        extraTitle:"",
                        description : [
                            ` Upholding our company's core value, the Salesforce Security team is responsible for securing our customers' data as well as the creation and execution of programs that drive a security culture with Salesforce's customers, partners and employees. We continuously invest in the security of our products and empower our community to do the same.`
                        ],
                        url : `https://www.salesforce.com/`,
                        urlTitle : `Learn more : https://www.salesforce.com/`
                    }
                    
                ],
                show: true
            },
            {
                MainTitle : <>T-SHIRT <span>SPONSOR</span></>,
                SponsorsDetails : [
                    {
                        ImagePath : SalesForce,
                        extraTitle:"",
                        description : [
                            ` Upholding our company's core value, the Salesforce Security team is responsible for securing our customers' data as well as the creation and execution of programs that drive a security culture with Salesforce's customers, partners and employees. We continuously invest in the security of our products and empower our community to do the same.`
                        ],
                        url : `https://www.salesforce.com/`,
                        urlTitle : `Learn more : https://www.salesforce.com/`
                    }
                ],
                show: true
            },
            {
                MainTitle : <>BADGE <span>SPONSOR</span></>,
                SponsorsDetails : [
                    {
                        ImagePath : SalesForce,
                        extraTitle:"",
                        description : [
                            ` Upholding our company's core value, the Salesforce Security team is responsible for securing our customers' data as well as the creation and execution of programs that drive a security culture with Salesforce's customers, partners and employees. We continuously invest in the security of our products and empower our community to do the same.`
                        ],
                        url : `https://www.salesforce.com/`,
                        urlTitle : `Learn more : https://www.salesforce.com/`
                    }
                ],
                show: true
            },


            {
                MainTitle : <>GOODIE BAG <span>SPONSOR</span></>,
                SponsorsDetails : [
                    {
                        ImagePath : SponsorCloudsek,
                        extraTitle:"",
                        description : [
                            `CloudSEK’s central proposition is leverage Artificial Intelligence to build a rapid and reliable detection, analysis, and alert system that offers swift detection across internet sources , precision analysis of threats and prompt resolution with minimal human intervention`
                        ],
                        url : `https://www.cloudsek.com/`,
                        urlTitle : `Learn more : https://www.cloudsek.com/`
                    }
                ],
                show: true
            },
            {
                MainTitle : <>BRONZE <span>SPONSOR</span></>,
                SponsorsDetails : [
                    {
                        ImagePath : BugcrowdLogo,
                        extraTitle:"",
                        description : [
                            ``
                        ],
                        url:`https://www.bugcrowd.com`,
                        urlTitle : `Learn more : https://www.bugcrowd.com`
                    }
                ],
                show: true
            },
            {
                MainTitle :  <>AWARD SHOW <span>SPONSOR</span></>,
                SponsorsDetails : [
                    {
                        ImagePath : RiskProfiler,
                        extraTitle:"",
                        description : [
                            ` Risk Profiler fills the gaps in cyber protection by looking at the shadow risks, their paths and implications back into the customers infrastructure. Through its modern, AI based, approach to giving complete cybersecurity risk analysis, the customer gets an unprecedented understanding of risk and its origin.`
                        ],
                        url : `https://riskprofiler.io/`,
                        urlTitle : `Learn more : https://riskprofiler.io/`
                    }
                    
                ],
                show: true
            },
            {
                MainTitle : <>CROWDSOURCED SECURITY <span> PARTNER</span></>,
                SponsorsDetails : [
                    {
                        ImagePath : immunefi,
                        extraTitle:"Earn the World’s Largest Bounties",
                        description : [
                            `Immunefi is the leading onchain crowdsourced security platform with the world’s largest bounties. We offer legendary response times and top-notch support for our hackers. The assets we protect — blockchains, NFT projects, and smart contracts — are the world’s most valuable assets, and our security researchers earn life-changing sums while boosting onchain security.`
                        ],
                        url : `https://immunefi.com/bug-bounty/?utm_source=Security-BSides&utm_medium=events&utm_campaign=Security-BSides`,
                        urlTitle : `Learn more : https://immunefi.com/bug-bounty/`
                    }
                ],
                show: true
            },
            {
                MainTitle : <>BUG BOUNTY <span>SPONSOR</span></>,
                SponsorsDetails : [
                    {
                        ImagePath : Projectdiscovery  ,
                        extraTitle:"",
                        description : [
                            `At ProjectDiscovery, we are on a mission to bring security to everyone. Our suite of open source tools powers a vibrant community that is among the largest in the infosec community. Our projects have accumulated over 50k stars on Github with monthly active users in the hundreds of thousands and year-over-year growth of over 400%. 8 of our tools recently made the Open Source Security Index, a list of the fastest growing open source security projects on GitHub, which is more than any other startup or corporation. Our tools are trusted by security and engineering teams at top internet companies like HashiCorp, Robinhood, Gitlab, CapitalOne, Fastly, Starbucks and many others.`
                        ],
                        url : `https://projectdiscovery.io/`,
                        urlTitle : `Learn more : https://projectdiscovery.io/`
                    }
                ],
                show: true
            },
            {
                MainTitle : <>AUT0MOTIVE CYBERSECURITY <span>SPONSOR</span></>,
                SponsorsDetails : [
                    {
                        ImagePath : Amynasec  ,
                        extraTitle:"",
                        description : [
                            `Amynasec Research Labs is a prominent provider of automotive cyber security services in India. We provide services such as TARA, penetration testing, cyber security implementation and design for both AUTOSAR and non-AUTOSAR architectures based on J3061, ISO 21434, WP.29, R155, R156.`
                        ],
                        url : `https://amynasec.io/`,
                        urlTitle : `Learn more : https://amynasec.io/`
                    }
                ],
                show: true
            },
            {
                MainTitle : <>Networking Dinner <span>SPONSOR</span></>,
                SponsorsDetails : [
                    {
                        ImagePath : SponsorHackerOne,
                        extraTitle:"",
                        description : [
                            `HackerOne is a vulnerability coordination and bug bounty platform that connects businesses with penetration testers and cybersecurity researchers.`
                        ],
                        url : `https://www.hackerone.com/`,
                        urlTitle : `Learn more : https://www.hackerone.com/`
                    }
                ],
                show: true
            },
          



           
           
           
            {
                MainTitle : <>SCHOLARSHIP <span>SPONSOR</span></>,
                SponsorsDetails : [
                    {
                        ImagePath: synackLogo,
                        extraTitle:"",
                        description : [],
                        url:`https://www.synack.com/red-team/`,
                        urlTitle : `Learn more : https://www.synack.com/red-team/`
                    },
                    {
                        ImagePath: cobaltLogo,
                        extraTitle:"",
                        description : [],
                        url:`https://www.cobalt.io`,
                        urlTitle : `Learn more : https://www.cobalt.io`
                    },
                    {
                        ImagePath: BugcrowdLogo,  
                        extraTitle:"",                  
                        description : [],
                        url:`https://www.bugcrowd.com`,
                        urlTitle : `Learn more : https://www.bugcrowd.com`
                    }
                ],
                show: true
            },
           
            // {
            //     MainTitle : <>CXO TRACK <span> SPONSOR</span></>,
            //     SponsorsDetails : [
            //         {
            //             ImagePath : SponsorMiniOrange,
            //             extraTitle:"",
            //             description : [
            //                 `MiniOrange is an established cybersecurity organization specializing in Identity & Access Management (IAM). With a wealth of technical expertise and unwavering 24x7 customer support, miniOrange is dedicated to delivering innovative and disruptive products within the IAM space such as Single Sign-On, Multi-Factor Authentication, Adaptive Authentication, User Lifecycle Management, Identity Federation, and External Directory support via a centralized identity product. Additionally, miniOrange offers a comprehensive suite of plugins and connectors to ensure the security of all applications (including Atlassian, WordPress, Shopify, Drupal, etc.), technologies, and frameworks. miniOrange also offers products related to Privileged Access Management and CASB, further bolstering cybersecurity efforts.`
            //             ],
            //             url : `https://www.miniorange.com/`,
            //             urlTitle : `Learn more : https://www.miniorange.com/`
            //         }
            //     ]
            // },

           
            // {
            //     MainTitle : <>POWERED <span>BY</span></>,
            //     SponsorsDetails : [
            //         {
            //             ImagePath : SponsorHackerOne,
            //             description : [
            //                 `HackerOne is a vulnerability coordination and bug bounty platform that connects businesses with penetration testers and cybersecurity researchers.`
            //             ],
            //             url : `https://www.hackerone.com/`,
            //             urlTitle : `Learn more : https://www.hackerone.com/`
            //         },
            //         {
            //             ImagePath : SponsorSynack,
            //             description : [
            //                 `Synack is the premier security testing platform harnessing a vetted community of the world’s most talented security researchers to deliver continuous penetration testing and vulnerability management. We help our customers build and augment their security testing capabilities and capacity to deliver transformational results—better than traditional pentesting methods. We are committed to reducing cybersecurity risk for our customers by bridging the cybersecurity talent gap and giving organizations on-demand access to the most trusted network of researchers in a secure way, all on one platform.`
            //             ],
            //             url : `https://www.synack.com/`,
            //             urlTitle : `Learn more : https://www.synack.com/`
            //         },
            //         {
            //             ImagePath : SponsorProjectDiscovery,
            //             description : [
            //                 `At ProjectDiscovery, we are on a mission to bring security to everyone. Our suite of open source tools powers a vibrant community that is among the largest in the infosec community. Our projects have accumulated over 50k stars on Github with monthly active users in the hundreds of thousands and year-over-year growth of over 400%. 8 of our tools recently made the Open Source Security Index, a list of the fastest growing open source security projects on GitHub, which is more than any other startup or corporation. Our tools are trusted by security and engineering teams at top internet companies like HashiCorp, Robinhood, Gitlab, CapitalOne, Fastly, Starbucks and many others.`
            //             ],
            //             url : `https://projectdiscovery.io/`,
            //             urlTitle : `Learn more : https://projectdiscovery.io/`
            //         },
            //         {
            //             ImagePath : SponsorBugBase,
            //             description : [
            //                 `BugBase harnesses India’s largest community of ethical hackers to help keep businesses safe by providing an all-in-one platform for continuous and comprehensive security testing.`,
            //                 `Companies can set up security testing solutions within minutes and start receiving unique, vetted bug reports within hours. We follow strict compliance requirements and provide rapid triage, one-click SDLC integrations, invoicing, and managed payouts to enterprises and startups worldwide.`
            //             ],
            //             url : `https://bugbase.in`,
            //             urlTitle : `Learn more : https://bugbase.in`
            //         }
            //     ]
            // },
            // {
            //     MainTitle : <>SPEAKERS DINNER <span>SPONSOR</span></>,
            //     SponsorsDetails : [
            //         {
            //             ImagePath : SponsorSecasure,
            //             description : [
            //                 `With SECASURE, we aim to achieve a world where the users do not need to worry about their digital privacy and their stored content. We look forward to contributing in shaping a world where a user need not worry about somebody profiling / tracking the behaviour without consent. We envisage the idea of a world where your privacy comes first, with information security and no room for breaches.`
            //             ],
            //             url : `https://secasure.com/`,
            //             urlTitle : `Learn more : https://secasure.com/`
            //         },
            //         {
            //             ImagePath : SponsorRedTeamSummit,
            //             description : [],
            //             url : `https://redteamsummit.org/`,
            //             urlTitle : `Learn more : https://redteamsummit.org/`
            //         }
            //     ]
            // },
            // {
            //     MainTitle : <>CERTIFICATE <span>PARTNER</span></>,
            //     SponsorsDetails : [
            //         {
            //             ImagePath : SponsorTheSecopsGroup,
            //             description : [
            //                 `The SecOps Group is a globally recognized IT security company having extensive and varied experience of providing cyber security consultancy and education services. At The SecOps Group, we believe that security is a continuous process, which has to progress with time and in accordance with the customer needs and constantly evolving threats.`
            //             ],
            //             url : `https://secops.group/`,
            //             urlTitle : `Learn more : https://secops.group/`
            //         }
            //     ]
            // },
            // {
            //     MainTitle : <>PRIVACY <span>PARTNER</span></>,
            //     SponsorsDetails : [
            //         {
            //             ImagePath : SponsorPrivacySquare,
            //             description : [
            //                 `SquareX is an extension built to keep you safe, anonymous and private online.`
            //             ],
            //             url : `https://sqrx.com/`,
            //             urlTitle : `Learn more : https://sqrx.com/`
            //         }
            //     ]
            // }
        ]
    }
}