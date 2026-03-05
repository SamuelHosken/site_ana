"use client";

import { useContactModal } from "@/contexts/ContactModalContext";

export default function ContactModalTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { open } = useContactModal();

  return (
    <button onClick={open} className={className}>
      {children}
    </button>
  );
}
