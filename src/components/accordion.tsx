export function Accordion({ items, openFirst = true }: { items: { q: string; a: string }[]; openFirst?: boolean }) {
  return (
    <div>
      {items.map((item, i) => (
        <details key={item.q} open={openFirst && i === 0} className="group border-b border-line first:border-t">
          <summary className="flex cursor-pointer list-none justify-between gap-6 py-[22px] font-bold [&::-webkit-details-marker]:hidden">
            {item.q}
            <span aria-hidden="true" className="text-2xl leading-none text-muted transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="max-w-[62ch] pb-[22px] text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
