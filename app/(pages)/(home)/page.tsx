import EventSponsors from "./_components/EventSponsors";
import HeroBanner from "./_components/HeroBanner";
import SpeakersAttending from "./_components/SpeakersAttending";
import SpeakersBio from "./_components/SpeakersBio";
import WhoWeAre from "./_components/WhoWeAre";

const Page: React.FC = () => {
  return (
    <>
      <HeroBanner />
      <WhoWeAre />
      <SpeakersAttending />
      <SpeakersBio />
      <EventSponsors />
    </>
  );
}

export default Page;