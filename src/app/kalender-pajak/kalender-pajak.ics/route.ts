import { icsFile } from "@/lib/kalender";
import { today } from "@/lib/today";

export async function GET() {
  return new Response(icsFile(new Date(await today())), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="kalender-pajak-layes.ics"',
    },
  });
}
