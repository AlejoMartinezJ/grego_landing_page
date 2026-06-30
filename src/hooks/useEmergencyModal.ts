import { useState, useEffect } from 'react';

const STORAGE_KEY_PREFIX = 'grego_emergency_seen_';

export function useEmergencyModal(eventId: string) {
  const storageKey = `${STORAGE_KEY_PREFIX}${eventId}`;

  // Auto-abrir solo la primera vez que el usuario visita
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenSeen, setHasBeenSeen] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(storageKey);
    if (!seen) {
      // Pequeño delay para que la landing cargue primero
      const timer = setTimeout(() => setIsOpen(true), 1200);
      return () => clearTimeout(timer);
    } else {
      setHasBeenSeen(true);
    }
  }, [storageKey]);

  const openModal = () => setIsOpen(true);

  const closeModal = () => {
    setIsOpen(false);
    setHasBeenSeen(true);
    localStorage.setItem(storageKey, 'true');
  };

  return { isOpen, hasBeenSeen, openModal, closeModal };
}
