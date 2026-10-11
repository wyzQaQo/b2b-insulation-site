import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import CaseStudies from '@/components/home/CaseStudies';
import RoiCalculator from '@/components/home/RoiCalculator';
import Rfq from '@/components/home/Rfq';
import { caseStudies } from '@/data/content';

export const metadata: Metadata = {
  title: 'Case Studies & ROI Calculator — Verified Project Results | ThermaCore',
  description:
    'Four verified case studies with measured U-values, subsidy outcomes and payback periods — plus an interactive energy-savings calculator.',
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        label="Case Studies"
        title={
          <>
            Verified projects.
            <br />
            Measured outcomes.
          </>
        }
        lede="Every figure below comes from a signed-off project file: measured U-values, confirmed subsidy awards and audited energy recovery. Then model your own project with the calculator."
      />

      <CaseStudies items={caseStudies} />

      <RoiCalculator />

      <Rfq />
    </>
  );
}
