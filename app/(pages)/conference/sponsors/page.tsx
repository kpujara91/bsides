import ScholarshipSponsor from "../../(home)/_components/ScholarshipSponsor";
import OurSponsors from "./_components/OurSponsors";
import SponsorsHeroBanner from "./_components/SponsorsHeroBanner";


const Page: React.FC = () => {
    return (
      <>
        <SponsorsHeroBanner />
        <OurSponsors />
        {/* <ScholarshipSponsor newClass="text-center" /> */}
      </>
    );
  }

  export default Page;