"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { USE_CONTACT_FORM, WHATSAPP_URL } from "@/config/contact";

type ContactModalContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const ContactModalContext = createContext<ContactModalContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    if (USE_CONTACT_FORM) {
      setIsOpen(true);
    } else {
      window.open(WHATSAPP_URL, "_blank");
    }
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <ContactModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  return useContext(ContactModalContext);
}
