import { ContactsPage } from "../../../components/MarketingPages/MarketingPages";
import { brand, SITE_URL } from "../../data/seoCities";

export const metadata = {
  title: `Контакты | ${brand.name}`,
  description:
    "Контакты Типми: телефон, Telegram, WhatsApp, email и форма заявки для девушек, которые хотят начать работу в стриминге.",
  alternates: {
    canonical: `${SITE_URL}/kontakty`,
  },
};

export default function Contacts() {
  return <ContactsPage />;
}
