import EventExhibitors from "./_components/EventExhibitors";
import ExhibitionHeroBanner from "./_components/ExhibitionHeroBanner";

const Page: React.FC = () => {
    return (
      <>
        <ExhibitionHeroBanner />
        <EventExhibitors />
      </>
    );
  }

  export default Page;