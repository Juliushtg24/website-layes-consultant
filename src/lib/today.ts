// Tanggal hari ini untuk komponen server. Disimpan di cache supaya halaman tetap statis,
// dan ikut diperbarui saat cache halaman diperbarui.
export async function today() {
  "use cache";
  const d = new Date();
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}
