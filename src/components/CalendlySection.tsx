export default function CalendlySection() {
  return (
    <section className="py-16 bg-[#191919]">
      <div className="calendly-inline-widget" style={{ height: "1000px", borderRadius: "8px", width: "100%" }}>
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          title="Calendly Scheduling Page"
          src="https://calendly.com/inceptivesdigital-info/30min?background_color=191919&primary_color=blue&text_color=ffffff&embed_type=Inline&embed_domain=1"
        />
      </div>
    </section>
  )
}
