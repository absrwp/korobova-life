import { PAL_B } from "./lib/palette";
import { useIsMobile } from "./lib/useIsMobile";

import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Topics } from "./components/Topics";
import { Lead } from "./components/Lead";
import { Formats } from "./components/Formats";
import { About } from "./components/About";
import { Steps } from "./components/Steps";
import { Timeline } from "./components/Timeline";
import { Office } from "./components/Office";
import { Faq } from "./components/Faq";
import { Articles } from "./components/Articles";
import { Final } from "./components/Final";
import { Footer } from "./components/Footer";
import { LegalModal } from "./components/LegalModal";
import { StickyMobileBar } from "./components/StickyMobileBar";

declare global {
  interface Window {
    trackGoal?: (name: string) => void;
  }
}

export default function App() {
  const mobile = useIsMobile(760);

  return (
    <div
      id="top"
      style={{
        background: PAL_B.bg,
        color: PAL_B.ink,
        font: `400 16px/1.5 ${PAL_B.sans}`,
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Nav mobile={mobile} />
      <Hero mobile={mobile} />
      <Topics mobile={mobile} />
      <Lead mobile={mobile} />
      <Formats mobile={mobile} />
      <About mobile={mobile} />
      <Steps mobile={mobile} />
      <Timeline mobile={mobile} />
      <Office mobile={mobile} />
      <Faq mobile={mobile} />
      <Articles mobile={mobile} />
      <Final mobile={mobile} />
      <Footer mobile={mobile} />
      {mobile && <StickyMobileBar />}
      <LegalModal />
    </div>
  );
}
