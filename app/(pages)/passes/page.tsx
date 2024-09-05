import GroupDiscounts from './_components/GroupDiscounts';
import PassesBanner from './_components/PassesBanner'
import PricingTable from './_components/PricingTable';
import TermsAndConditions from './_components/TermsAndConditions';

const Page: React.FC = () => {
  return (
    <>
      <PassesBanner />
      <GroupDiscounts />
      <PricingTable />
      <TermsAndConditions />
    </>
  );
}

export default Page;