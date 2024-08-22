import OurSponsors from "../conference/sponsors/_components/OurSponsors";
import CommunityPartners from "./_components/CommunityPartners";
import EventSponsors from "./_components/EventSponsors";
import HeroBanner from "./_components/HeroBanner";
import NetworkingDinnerSponsor from "./_components/NetworkingDinnerSponsor";
import SpeakersAttending from "./_components/SpeakersAttending";
import SpeakersBio from "./_components/SpeakersBio";
import Sponsors from "./_components/Sponsors";
import WhoWeAre from "./_components/WhoWeAre";

const Page: React.FC = () => {
  return (
    <>
      <HeroBanner />
      <WhoWeAre />
      <SpeakersAttending />
      <SpeakersBio />
      <EventSponsors />
      <Sponsors />
      <CommunityPartners />
      {/* <NetworkingDinnerSponsor /> */}
    </>
  );
}

export default Page;