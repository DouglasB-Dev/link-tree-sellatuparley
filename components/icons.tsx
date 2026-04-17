import {
  faCcMastercard,
  faCcVisa,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuildingColumns,
  faBullhorn,
  faChevronRight,
  faFire,
  faHeadset,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChannelsIcon } from "@/components/ui/ChannelsIcon";
import { TelegramIcon } from "@/components/ui/TelegramIcon";

type IconName =
  | "channels"
  | "instagram"
  | "telegram"
  | "bullhorn"
  | "whatsapp"
  | "headset"
  | "external-link"
  | "star"
  | "chevron-right"
  | "fire"
  | "visa"
  | "mastercard"
  | "bank";

interface IconProps {
  className?: string;
  name: IconName;
}

const iconMap = {
  instagram: faInstagram,
  bullhorn: faBullhorn,
  whatsapp: faWhatsapp,
  headset: faHeadset,
  "external-link": faArrowUpRightFromSquare,
  star: faStar,
  "chevron-right": faChevronRight,
  fire: faFire,
  visa: faCcVisa,
  mastercard: faCcMastercard,
  bank: faBuildingColumns,
} as const;

export function Icons({ className, name }: IconProps) {
  if (name === "channels") {
    return <ChannelsIcon className={className} />;
  }

  if (name === "telegram") {
    return <TelegramIcon className={className} />;
  }

  return <FontAwesomeIcon icon={iconMap[name]} className={className} />;
}
