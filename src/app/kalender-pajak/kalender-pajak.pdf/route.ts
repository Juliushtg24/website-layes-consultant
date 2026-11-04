import { kalenderPdf } from "@/lib/kalender";
import { site } from "@/lib/site";
import { today } from "@/lib/today";

export async function GET() {
  const pdf = kalenderPdf(new Date(await today()), { name: site.name, phone: site.phone, email: site.email });
  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="kalender-pajak-layes.pdf"',
    },
  });
}
