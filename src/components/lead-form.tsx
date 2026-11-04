"use client";

import { useState, type FormEvent } from "react";
import { layanan } from "@/lib/layanan";
import { site, waLink } from "@/lib/site";

const jenis = ["Perusahaan", "Pribadi", "Keduanya"];
const pilihanLayanan = [...layanan.map((l) => l.title), "Belum tahu, ingin konsultasi"];

const field =
  "w-full rounded-field border-[1.5px] border-line bg-bg px-3.5 py-3 text-base text-ink focus:border-focus focus:outline-none";

// shortcut: hanya menyusun pesan WhatsApp, belum terkirim ke email. Fase 6 menambah server action.
export function LeadForm({ defaultLayanan, defaultJenis = "Perusahaan" }: { defaultLayanan?: string; defaultJenis?: string }) {
  const [msg, setMsg] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setMsg(
      `Halo Layes Konsultan, saya ${String(f.get("nama")).trim()} dari ${f.get("kota")}. ` +
        `Saya mengurus pajak ${String(f.get("jenis")).toLowerCase()} dan butuh layanan: ${f.get("layanan")}. Mohon penawarannya.`,
    );
  }

  return (
    <form onSubmit={onSubmit} aria-labelledby="form-h" className="grid gap-4 rounded-panel bg-card px-5 py-6 text-ink sm:p-8">
      <h3 id="form-h" className="text-lg font-extrabold">
        Minta penawaran
      </h3>
      <p className="-mt-2 text-sm text-muted">Tiga pertanyaan singkat. Jangan masukkan NPWP atau NIK di sini.</p>

      <fieldset className="grid gap-1.5">
        <legend className="mb-1.5 text-sm font-bold">Anda mengurus pajak untuk</legend>
        <div className="flex flex-wrap gap-2">
          {jenis.map((j) => (
            <label key={j} className="relative flex">
              <input type="radio" name="jenis" value={j} defaultChecked={j === defaultJenis} className="peer absolute inset-0 size-full opacity-0" />
              <span className="cursor-pointer rounded-full border-[1.5px] border-line px-4 py-2.5 text-sm font-semibold peer-checked:border-navy peer-checked:bg-navy peer-checked:text-on-navy peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-focus">
                {j}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-1.5">
        <label htmlFor="layanan-pilih" className="text-sm font-bold">
          Layanan yang dibutuhkan
        </label>
        <select id="layanan-pilih" name="layanan" defaultValue={defaultLayanan} className={field}>
          {pilihanLayanan.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor="nama" className="text-sm font-bold">
            Nama
          </label>
          <input id="nama" name="nama" autoComplete="name" required maxLength={80} className={field} />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="kota" className="text-sm font-bold">
            Kota
          </label>
          <select id="kota" name="kota" className={field}>
            {site.areas.map((k) => (
              <option key={k}>{k}</option>
            ))}
          </select>
        </div>
      </div>

      <button type="submit" className="btn btn-wa">
        Kirim lewat WhatsApp
      </button>

      {msg && (
        <div role="status" className="rounded-field bg-surface p-4 text-sm">
          <b className="mb-1.5 block">Pesan Anda siap dikirim</b>
          <p className="mb-3 whitespace-pre-wrap text-muted">{msg}</p>
          <a href={waLink(msg)} target="_blank" rel="noopener" className="btn btn-wa">
            Buka WhatsApp
          </a>
        </div>
      )}
    </form>
  );
}
