"use client";

import { useState, useSyncExternalStore } from "react";
import { bulan, daysBetween, monthStates, nextAnnual, nextMasa, profil, shortDate, type Profil } from "@/lib/deadline";
import { waLink } from "@/lib/site";

// Tanggal dibaca di browser, bukan saat build, supaya hitungan selalu dari hari ini.
const todayKey = () => new Date().toDateString();
const noop = () => () => {};

const monthColor = { past: "bg-[color-mix(in_srgb,var(--navy)_35%,var(--line))]", now: "bg-navy", due: "bg-accent", "": "bg-line" };

export function DeadlineCard() {
  const [k, setK] = useState<Profil>("badan");
  const key = useSyncExternalStore(noop, todayKey, () => null);
  const today = key ? new Date(key) : null;
  const p = profil[k];
  const due = today && nextAnnual(today, p.month, p.day);
  const masa = today && nextMasa(today);

  return (
    <aside
      aria-labelledby="dl-title"
      className="rv rounded-panel bg-card p-[22px] text-ink shadow-[0_24px_60px_rgb(3_15_30/0.35)] [animation-delay:160ms] sm:p-7"
    >
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <h2 id="dl-title" className="text-lg font-extrabold tracking-[-0.01em]">
          Kapan tenggat Anda?
        </h2>
        {today && (
          <span className="text-xs text-muted">
            Hari ini {today.getDate()} {bulan[today.getMonth()]}
          </span>
        )}
      </div>

      <div role="group" aria-label="Jenis wajib pajak" className="mb-[22px] grid grid-cols-3 gap-1 rounded-xl bg-surface p-1">
        {(Object.keys(profil) as Profil[]).map((id) => (
          <button
            key={id}
            type="button"
            aria-pressed={k === id}
            onClick={() => setK(id)}
            className="cursor-pointer rounded-[9px] px-1.5 py-2.5 text-xs leading-tight font-bold text-muted transition-colors aria-pressed:bg-card aria-pressed:text-ink aria-pressed:shadow-[0_1px_3px_rgb(0_0_0/0.12)]"
          >
            {profil[id].tab}
          </button>
        ))}
      </div>

      <div className="mb-1.5 flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
        <p aria-live="polite" className="font-display text-[clamp(3rem,2.2rem+2.6vw,4.25rem)] leading-none font-extrabold tracking-[-0.04em] whitespace-nowrap tabular-nums">
          {today && due ? daysBetween(today, due) : "–"}
          <small className="ml-1.5 font-sans text-base font-semibold tracking-normal text-muted">hari lagi</small>
        </p>
        <p className="text-sm leading-snug font-bold sm:text-right">
          <span className="block text-xs font-medium text-muted">{p.what}</span>
          {due?.toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
        </p>
      </div>

      <div aria-hidden="true" className="mt-[18px] mb-1.5 grid grid-cols-12 gap-[3px]">
        {(today && due ? monthStates(today, due) : bulan.map(() => "" as const)).map((s, i) => (
          <i key={i} className={`h-2 rounded-[3px] ${monthColor[s]}`} title={bulan[i]} />
        ))}
      </div>
      <div aria-hidden="true" className="mb-[18px] flex justify-between text-[0.6875rem] text-muted">
        {["Jan", "Apr", "Jul", "Okt", "Des"].map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>

      <div className="mb-[18px] rounded-field bg-accent-soft px-4 py-3.5 text-sm">
        <p className="mb-1.5 text-xs font-bold text-accent-ink">Mulai siapkan dari sekarang</p>
        <ul>
          {p.docs.map((doc) => (
            <li key={doc} className="flex items-start gap-2.5 py-[3px] leading-snug">
              <span aria-hidden="true" className="mt-[3px] size-4 flex-none rounded border-2 border-accent" />
              {doc}
            </li>
          ))}
        </ul>
      </div>

      <a
        href={waLink(
          `Halo Layes Konsultan, saya (${p.label}) ingin menyiapkan ${p.what}${due ? ` sebelum ${shortDate(due)}` : ""}.`,
        )}
        target="_blank"
        rel="noopener"
        className="btn btn-wa w-full"
      >
        Siapkan SPT saya sekarang
      </a>

      <p className="mt-3.5 flex flex-wrap justify-between gap-3 text-xs text-muted">
        <span>SPT Masa PPN &amp; PPh berikutnya</span>
        {today && masa && (
          <b className="text-ink tabular-nums">
            {shortDate(masa)} · {daysBetween(today, masa)} hari
          </b>
        )}
      </p>
    </aside>
  );
}
