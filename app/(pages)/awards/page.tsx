import Awards from "./_components/Awards";
import AwardsHeroBanner from "./_components/AwardsHeroBanner";
import OurTeam from "./_components/OurTeam";


const Page: React.FC = () => {
    return (
      <>
      <AwardsHeroBanner />
      <Awards />
      <OurTeam />
      </>
    );
  }

  export default Page;