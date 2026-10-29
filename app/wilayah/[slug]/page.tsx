import Link from "next/link";
import type { CSSProperties } from "react";
import { BogorMap } from "../../components/map-visual";
import { Icon, PageShell } from "../../components/ui";
import { dimensions, indicators } from "../../data";

export default async function RegionPage({ params }: PageProps<"/wilayah/[slug]">) {
  const { slug } = await params;
  const name = slug.split("-").map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" ");
  return <PageShell className="detail-page"><div className="breadcrumb"><Link href="/peta">Peta</Link><Icon name="chevron" size={14}/><span>Bogor Utara</span><Icon name="chevron" size={14}/><b>{name}</b></div><section className="detail-hero"><div><p className="eyebrow">Kelurahan · Bogor Utara</p><h1>{name}</h1><p>Wilayah dengan akses layanan kesehatan yang kuat dan tutupan vegetasi di atas rata-rata kota.</p><div className="detail-actions"><button className="button"><Icon name="compare"/>Bandingkan wilayah</button><button className="quiet-button"><Icon name="download"/>Unduh ringkasan</button></div></div><div className="detail-score"><span>Indeks kelayakhunian</span><strong>0,86</strong><b>Sangat layak huni</b><small>Peringkat #1 dari 68 kelurahan</small></div><div className="detail-map"><BogorMap compact/></div></section>
  <section className="detail-stats"><div><span>Penduduk</span><b>25.460</b><small>jiwa · 2022</small></div><div><span>Luas wilayah</span><b>1,87</b><small>km²</small></div><div><span>Kepadatan</span><b>9.840</b><small>jiwa/km²</small></div><div><span>Kesesuaian ruang</span><b>84,2%</b><small>permukiman sesuai RTRW</small></div></section>
  <section className="detail-section"><div className="section-heading"><p className="eyebrow">Enam dimensi</p><h2>Di mana {name} unggul?</h2></div><div className="dimension-detail-grid">{dimensions.map((d,i)=><article key={d.name}><div className="radial" style={{"--score":`${d.value*360}deg`,"--accent":d.color} as CSSProperties}><span>{String(d.value).replace(".",",")}</span></div><div><h3>{d.name}</h3><p>{d.note}</p><small>{i < 2 ? "Di atas rata-rata kota" : "Setara rata-rata kota"}</small></div></article>)}</div></section>
  <section className="detail-section indicator-section"><div className="section-heading"><p className="eyebrow">Nilai mentah</p><h2>Rincian indikator.</h2></div><div className="data-table"><div className="table-head"><span>Indikator</span><span>Nilai</span><span>Sumber</span><span>Tahun</span></div>{indicators.map(row=><div className="table-row" key={row[0]}>{row.map((cell,i)=><span key={cell} className={i===1?"value-cell":""}>{cell}</span>)}</div>)}</div></section>
  <section className="detail-cta"><div><p className="eyebrow">Buat perbandingan</p><h2>Bagaimana {name} dibanding wilayah lain?</h2></div><Link className="button button-cream" href="/perbandingan">Pilih wilayah pembanding <Icon name="arrow"/></Link></section></PageShell>;
}
