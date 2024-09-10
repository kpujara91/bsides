import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (<>
  
    <div
     className="grid-wrapper"
    >
      {children}
    </div>

  </>
  );
};

// export const BentoGridItem = ({
//   className,
//   title,
//   description,
//   header,
//   icon,
//   btntext,
//   btnurl,
//   imgPath
// }: {
//   className?: string;
//   title?: string | React.ReactNode;
//   description?: string | React.ReactNode;
//   header?: React.ReactNode;
//   icon?: React.ReactNode;
//   btntext?:React.ReactNode;
//   btnurl?:React.ReactNode;
//   imgPath?: string | StaticImageData;
// }) => {
//   return (
//     <>
//     {/* <div
//       className={cn(
//         "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
//         className
//       )}
//     >

//       <Image src={imgPath} alt="" height={540} width={540} />
//       <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 global-btn">
//            {
//             btnurl ==""  ? 
//             (
//             <span className={` comonBtn`}> Comming Soon </span>
//             )
//             :
            
//           <a className={` comonBtn`} href={btnurl} target="_blank"> {btnurl =="" ? "Comming Soon" : "Submit Your Nomination"} </a>
            
//            }
       
//         </div>
//       <div className="group-hover/bento:translate-x-2 transition duration-200">
    
//         <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
        
//         </div>
       
//       </div>
//     </div> */}
    


   
//     <div className="cardbox">
//       <div className="image-box">
//          <Image src={imgPath} alt="dfdsf" height={540} width={540}  />
//       </div>
//       {
//         btnurl =="" ?
//         (
//           <div className="content global-btn">
//           <span className="comonBtn">Comming Soon</span>
//         </div>
//         )

//         :
//         btnurl=="closed" ? 
//         (
//           <div className="content global-btn">
//           <span className="redBtn">Closed</span>
//         </div>
//         )
//         :
//         (
//           <div className="content global-btn">
//           <a href={btnurl} className="comonBtn" target="_blank">Submit Your Nomination</a>
//         </div>
//         )
//       }
     
//     </div>
 




//     </>
//   );
// };



export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  btntext,
  btnurl,
  imgPath,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  btntext?: React.ReactNode;
  btnurl?: string | undefined; // Ensure btnurl is a string or undefined
  imgPath?: string | StaticImageData;
}) => {
  return (
    <>
      <div className="cardbox">
        <div className="image-box">
          {imgPath ? (
            <Image src={imgPath} alt="Image" height={540} width={540} />
          ) : (
            <div>No Image Available</div> // Fallback content when imgPath is undefined
          )}
        </div>
        {btnurl === "https://docs.google.com/forms/d/e/1FAIpQLSe2W1BK74tkljI71xVZ2DPp5CCezjzuzVctVVufUMVefUOAeA/viewform?usp=sf_link" ? (
          <div className="content global-btn">
            <a href={btnurl} className="comonBtn" target="_blank" rel="noopener noreferrer">
              Submit Your Nomination
            </a>
          </div>
        ) : btnurl === "closed" ? (
          <div className="content global-btn">
            <span className="redBtn">Closed</span>
          </div>
        ) : typeof btnurl === "string" ? ( // Check if btnurl is a string
          <div className="content global-btn">
        
         <span className="redBtn">Closed</span>

          </div>
        ) : (
          <div>No valid URL provided</div> // Handle non-string btnurl case
        )}
      </div>
    </>
  );
};
