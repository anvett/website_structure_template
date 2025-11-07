"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactHeroCard = ({
  title = "Molino de Café Cabañas Lodge",
  subtitle = "Vive experiencias únicas entre naturaleza y café",
  phone = "+593999999999",
  email = "reservas@molinoyraices.com",
  whatsapp = "+593999999999",
  address = "Alangasí, Ecuador",
  googleMapsUrl = "https://goo.gl/maps/xxxxxxxx",
  cardBg = "bg-light/90 backdrop-blur-md",
  cardText = "text-dark",
  iconColor = "text-secondary",
  accentColor = "text-primary",
  buttonStyle = "bg-secondary hover:bg-highlight text-dark px-6 py-3 rounded-custom-20 font-semibold shadow-md hover:shadow-lg transition duration-300",
}) => {
  return (
    <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
  viewport={{ once: true }}
  className={`w-full max-w-[30rem] min-h-[32rem] p-10 rounded-custom-20 shadow-lg flex flex-col justify-between ${cardBg}`}
>

      <h2 className={`text-size-5 md:text-size-7 font-primary font-bold mb-2 ${accentColor}`}>
        {title}
      </h2>
      <p className={`mb-6 text-size-3 md:text-size-4 font-secondary ${cardText}`}>{subtitle}</p>

      <ul className="space-y-4 text-size-3">
        {/* 📞 Teléfono */}
        <li className="flex items-center gap-4">
          <Phone className={`w-5 h-5 ${iconColor}`} />
          <Link href={`tel:${phone}`} className="hover:underline text-primary font-primary text-size-2 sm:text-size-3 ">
            {phone}
          </Link>
        </li>

        {/* ✉️ Email */}
        <li className="flex items-center gap-4">
          <Mail className={`w-5 h-5 ${iconColor}`} />
          <Link href={`mailto:${email}`} className="hover:underline text-primary font-primary text-size-2 sm:text-size-3 ">
            {email}
          </Link>
        </li>

        {/* 💬 WhatsApp */}
        <li className="flex items-center gap-4">
          <MessageCircle className={`w-6 h-6 font-bold ${iconColor}`} />
          <Link
            href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            className="hover:underline text-primary font-primary text-size-2 sm:text-size-3 "
          >
            Chat en WhatsApp
          </Link>
        </li>

        {/* 📍 Dirección */}
        <li className="flex items-start gap-3">
          <MapPin className={`font-bold w-10 h-15 mt-1 ${iconColor}`} />
          <div>
            <p className="font-primary text-left text-primary   text-size-2 sm:text-size-3">{address}</p>
            <Link
              href={googleMapsUrl}
              target="_blank"
              className={`${buttonStyle} inline-flex items-center  gap-2 mt-3 text-size-1`}
            >
              <MapPin className="w-6 h-6" /> Google Maps
            </Link>
          </div>
        </li>
      </ul>
    </motion.div>
  );
};

export default ContactHeroCard;
