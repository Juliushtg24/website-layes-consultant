"use client";

import { useState } from "react";
import { PinIcon } from "@/components/icons";
import { site } from "@/lib/site";

// Peta Google baru dimuat setelah diklik, supaya tidak ada skrip atau cookie pihak ketiga tanpa tindakan pengunjung.
export function OfficeMap() {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <iframe
        title={`Peta lokasi kantor ${site.name}`}
        src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&z=17&hl=id&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="aspect-[4/3] w-full rounded-panel border-0 bg-surface"
      />
    );
  }

  return (
    <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-4 rounded-panel border border-line bg-card p-6 text-center">
      <span className="grid size-14 place-items-center rounded-full bg-navy text-on-navy [&_svg]:size-6">
        <PinIcon />
      </span>
      <p className="max-w-[36ch] text-sm text-muted">Peta dimuat dari Google Maps setelah Anda menekan tombol di bawah.</p>
      <div className="flex flex-wrap justify-center gap-3">
        <button type="button" onClick={() => setShow(true)} className="btn btn-wa">
          Tampilkan peta
        </button>
        <a href={site.mapsUrl} target="_blank" rel="noopener" className="btn btn-line">
          Buka di Google Maps
        </a>
      </div>
    </div>
  );
}
