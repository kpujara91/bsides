// // 'use client'
// // import React from 'react'
// // import { BackgroundGradient } from '../background-gradient/index'
// // import Image from 'next/image'

// // export function BackgroundGradientDemo({ data }: any) {

// //     return (
// //         <div>
// //             {data?.map((dd: any, i: any) => {
// //                 return (
// //                     <BackgroundGradient
// //                         className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
// //                         key={i}
// //                     >
// //                         <Image
// //                             src={dd?.speakerImage}
// //                             alt="jordans"
// //                             height="400"
// //                             width="400"
// //                             className="object-contain"
// //                         />
// //                         <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
// //                             {dd?.speakerName}
// //                         </p>

// //                         <p className="text-sm text-neutral-600 dark:text-neutral-400">
// //                             {dd?.speakerDesignation}
// //                         </p>
// //                     </BackgroundGradient>
// //                 )
// //             })}
// //         </div>
// //     )
// // }


// 'use client'
// import React from 'react'
// import { BackgroundGradient } from '../background-gradient/index'
// import Image from 'next/image'
// // import { LogoFacebook, LogoTwitter, LogoInstagram } from 'react-ionicons'

// export function BackgroundGradientDemo({ data }: any) {
//     console.log(data,"data");
    
//     return (
//         <div>
//             {data?.map((dd: any, i: any) => {
//                 return (
//                     <BackgroundGradient
//                         className="relative rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 group hover:bg-gray-200 dark:hover:bg-zinc-800 transition-all duration-300"
//                         key={i}
//                     >
//                         <div className="relative">
//                             <Image
//                                 src={dd?.speakerImage}
//                                 alt="jordans"
//                                 height="400"
//                                 width="400"
//                                 className="object-contain"
//                             />
//                             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                 <div className="flex space-x-4 text-white">
//                                     {
//                                         dd?.speakerSocialMediaList?.map((c:any,i:any)=>{
//                                             return(
//                                                 <div className='' key={i}>
//                                                     <a href={c?.url} title={c?.title} className={`inline-flex items-center justify-center`} target='_blank'>
//                                                             <Image src={c?.icon} alt={c?.title} width={16} height={16}/>
//                                                             </a>
//                                                 </div>
//                                             )
//                                         })
//                                     }
//                                 </div>
//                             </div>
//                         </div>
//                         <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
//                             {dd?.speakerName}
//                         </p>
//                         <p className="text-sm text-neutral-600 dark:text-neutral-400">
//                             {dd?.speakerDesignation}
//                         </p>
//                     </BackgroundGradient>
//                 )
//             })}
//         </div>
//     )
// }


'use client'
import React from 'react'
import { BackgroundGradient } from '../background-gradient/index'
import Image from 'next/image'

export function BackgroundGradientDemo({ data }: any) {
    return (
        <div>
            {data?.map((dd: any, i: any) => {
                return (
                    <BackgroundGradient
                        className="relative rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 group hover:bg-gray-200 dark:hover:bg-zinc-800 transition-all duration-300"
                        key={i}
                    >
                        <div className="relative">
                            <Image
                                src={dd?.speakerImage}
                                alt="jordans"
                                height="400"
                                width="400"
                                className="object-contain"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="flex space-x-4">
                                    {dd?.speakerSocialMediaList?.map((c: any, i: any) => (
                                        <a
                                            href={c?.url}
                                            title={c?.title}
                                            className="inline-flex items-center justify-center bg-white rounded-full p-2"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            key={i}
                                        >
                                            <Image
                                                src={c?.icon}
                                                alt={c?.title}
                                                width={24}
                                                height={24}
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-base text-center sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            {dd?.speakerName}
                        </p>
                        <p className="text-sm text-center text-neutral-600 dark:text-neutral-400">
                            {dd?.speakerDesignation}
                        </p>
                    </BackgroundGradient>
                )
            })}
        </div>
    )
}
