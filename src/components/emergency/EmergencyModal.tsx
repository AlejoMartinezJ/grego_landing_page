import { venezuelaEmergency } from '../../content/emergency/venezuela-2026';
import './EmergencyModal.css';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmergencyModal({ isOpen, onClose }: EmergencyModalProps) {
  if (!isOpen) return null;

  const {
    header,
    problem,
    capabilities,
    gaps,
    ctas,
    footer,
  } = venezuelaEmergency;

  return (
    <>
      {/* Overlay */}
      <div
        className="emergency-modal__overlay"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="emergency-modal" role="dialog" aria-modal="true">

        {/* Botón cerrar */}
        <button className="emergency-modal__close" onClick={onClose}>✕</button>

        {/* Scroll container */}
        <div className="emergency-modal__body">

          {/* Header */}
          <div className="emergency-modal__header">
            <span className="emergency-modal__eyebrow">{header.eyebrow}</span>
            <h2 className="emergency-modal__title">{header.title}</h2>
            <span className="emergency-modal__subtitle">{header.subtitle}</span>
          </div>

          {/* El problema */}
          <section className="emergency-modal__section">
            <h3>{problem.title}</h3>
            <p>{problem.text}</p>
          </section>

          {/* Cómo ayuda Grego HOY */}
          <section className="emergency-modal__section">
            <h3>Cómo Grego responde hoy</h3>
            <div className="emergency-modal__cards">
              {capabilities.map((cap) => (
                <div key={cap.title} className="emergency-modal__card">
                  <span className="emergency-modal__card-icon">{cap.icon}</span>
                  <div>
                    <h4>{cap.title}</h4>
                    <p>{cap.text}</p>
                    <span className="emergency-modal__badge emergency-modal__badge--available">
                      Disponible
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Gaps */}
          <section className="emergency-modal__section emergency-modal__section--gaps">
            <h3>{gaps.title}</h3>
            <div className="emergency-modal__cards">
              {gaps.items.map((gap) => (
                <div key={gap.title} className="emergency-modal__card emergency-modal__card--gap">
                  <span className="emergency-modal__card-icon">{gap.icon}</span>
                  <div>
                    <h4>{gap.title}</h4>
                    <p>{gap.text}</p>
                    <span className="emergency-modal__badge emergency-modal__badge--pending">
                      En desarrollo
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="emergency-modal__callout">{gaps.callout}</p>
          </section>

          {/* CTAs */}
          <section className="emergency-modal__ctas">
            {ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                onClick={onClose}
                className={`emergency-modal__cta-btn emergency-modal__cta-btn--${cta.style}`}
              >
                <strong>{cta.label}</strong>
                <span>{cta.text}</span>
              </a>
            ))}
          </section>

          {/* Footer */}
          <div className="emergency-modal__footer">
            <p>{footer.text}</p>
            <p className="emergency-modal__disclaimer">{footer.disclaimer}</p>
          </div>

        </div>
      </div>
    </>
  );
}
