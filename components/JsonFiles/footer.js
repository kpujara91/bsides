import FooterLogo from '../../public/images/footer-logo.svg'
import IconFacebook from '../../public/images/icon-facebook.svg'
import IconInstagram from '../../public/images/icon-instagram.svg'
import IconTwitter from '../../public/images/icon-twitter.svg'
import IconLinkedin from '../../public/images/icon-linkedin.svg'

export const FooterContent = {
    Logo: FooterLogo,
    SocialMediaList:[
        {
            title:'Facebook',
            icon: IconFacebook,
            url:'https://www.facebook.com/bsidesahmedabad/',
        },
        {
            title:'Instagram',
            icon: IconInstagram,
            url:'https://www.instagram.com/bsidesahmedabad/',
        },
        {
            title:'Twitter',
            icon: IconTwitter,
            url:'https://twitter.com/bsidesahmedabad',
        },
        {
            title:'Linkedin',
            icon: IconLinkedin,
            url:'https://www.linkedin.com/company/bsides-ahmedabad/',
        }
    ],
    Email: "info@bsidesahmedabad.in",
    ArchiveList: [
        {
            Data: `ARCHIVE`,
            url: ``,
        },
        {
            Data: `2023`,
            url: `https://2k23.bsidesahmedabad.in/`,
        },
        {
            Data: `2022`,
            url: `https://bsides-2022.netlify.app/`,
        },
        {
            Data: `2021`,
            url: `https://bsides-2021.netlify.app/`,
        },
        {
            Data: `2019`,
            url: `https://bsides-2019.netlify.app/`,
        },
    ]
}