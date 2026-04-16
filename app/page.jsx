import { Header } from "@/components/header";
import { SocialNetworks } from "@/components/social-networks";
import { Contacts } from "@/components/contacts";
import { Promotions } from "@/components/promotions";
import { Footer } from "@/components/footer";
import { Background } from "@/components/background";
import {
  contactCards,
  mainChannels,
  paymentIcons,
  promotions,
} from "@/lib/data";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <Background />

      <main className="relative mx-auto flex w-full max-w-lg flex-col px-5 py-12">
        <Header />

        <SocialNetworks items={mainChannels} />
        <Contacts items={contactCards} />
        <Promotions items={promotions} />

        <Footer paymentIcons={paymentIcons} />
      </main>
    </div>
  );
}
