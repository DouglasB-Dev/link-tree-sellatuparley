import ContactsClient from "@/components/contacts-client";

export function Contacts({ items }) {
  return (
    <section className="mt-10 space-y-4 animate-in slide-in-from-bottom-4 duration-700 [animation-delay:200ms]">
      <div className="mb-4 flex items-center justify-center gap-2">
        <div className="h-px w-10 bg-white/30" />
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
          Taquillas Disponibles
        </h2>
        <div className="h-px w-10 bg-white/30" />
      </div>

      <ContactsClient items={items} />
    </section>
  );
}
