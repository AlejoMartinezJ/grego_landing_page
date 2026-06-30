import { venezuelaEmergency } from '../../content/emergency/venezuela-2026';
import './EmergencyBanner.css';

interface EmergencyBannerProps {
  onOpenModal: () => void;
}

export function EmergencyBanner({ onOpenModal }: EmergencyBannerProps) {
  const { banner } = venezuelaEmergency;

  return (
    <div
      style={{ backgroundColor: banner.color }}
      className="emergency-banner"
    >
      {/* Estructura del banner */}
      <span className="emergency-banner__label">{banner.label}</span>
      <span className="emergency-banner__text">{banner.text}</span>
      <button
        onClick={onOpenModal}
        className="emergency-banner__cta"
      >
        {banner.cta}
      </button>
    </div>
  );
}
