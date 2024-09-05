import AnimateCircleImage from '../../public/images/circle-animate.webp'
import ConferenceBannerBG from '../../public/images/scholarshipsimportant.jpg'
import ScholarshipBannerBG from '../../public/images/BountyScholarship.jpg'
import bugCrowdscholarship from '../../public/images/bugCrowdscholarship.jpeg'
import cobaltscholarship from '../../public/images/cobaltscholarship.jpeg'


export const ScholarshipContent = {
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
                    url:`/conference/scholarship`},
                {
                    title: `Scholarship`,
                },
            ],
            banerTitle1: "Scholarship",
            // bannerAnimationLoop: [
            //     `AHMEDABAD`,
            //     `AHMEDABAD`,
            //     `AHMEDABAD`,
            //     `AHMEDABAD`
            // ],
            // banerTitle2: "0X04 SPONSORS & PARTNERS",
            BGImage: ConferenceBannerBG,
            BookNowButtonURL:"https://docs.google.com/forms/d/e/1FAIpQLSetkxVOlQMxmQPQ95E8vtyARFm1XQ_GeQ9-vxD4bqkaktMKlQ/viewform"
        },
        
    },
    Awards : {
        // MainTitle : <>YOUNG HACKERS</>,
        // description1 : <>Welcome to the Maestro Awards 2024, a prestigious event hosted by <b> Security BSides Ahmedabad</b>. This event is dedicated to recognizing and celebrating the outstanding achievements and contributions within the cybersecurity industry. The Maestro Awards are more than just accolades; they represent a commitment to innovation, leadership, and the relentless pursuit of excellence in the ever-evolving landscape of cybersecurity.
        // </>,
        // description2 : <>Organised by Security BSides Ahmedabad, a renowned conference for cybersecurity professionals, researchers, and enthusiasts, the Maestro Awards aim to shine a spotlight on the individuals, teams, and organisations that have significantly impacted their respective fields. Below is the list of Award categories for the Maestro Awards 2024:
        
        // </>
        // ,
        scholarshipslist:[
            {
                imagePath: bugCrowdscholarship,
                BookNowButtonURL: ``
            },
        {
            imagePath:
            ScholarshipBannerBG
            ,
            BookNowButtonURL: `closed`
        },
        {
            imagePath:cobaltscholarship,
            BookNowButtonURL: `https://docs.google.com/forms/d/e/1FAIpQLSfSGkDmsvKFrCFWBPWZhbxTBsYJt2G68blnf7kI9k__8ksiRg/viewform?usp=sharing`
        },
         ],
        ScholarshipImage: ScholarshipBannerBG,

    },

       
    
}