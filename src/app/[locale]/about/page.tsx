import Image from 'next/image';
import { Link } from '@/localization/navigation';
import { alternatesForPath } from '@/seo/localized-urls';
import { getAboutContent } from '@/site-data/site-content';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const aboutContent = getAboutContent(locale);
  return {
    title: aboutContent.metadata.title,
    description: aboutContent.metadata.description,
    alternates: alternatesForPath(locale, '/about'),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const aboutContent = getAboutContent(locale);
  const socialContent = locale === 'zh'
    ? {
        title: '社媒入口',
        subtitle: '也可以通过社交平台了解我们的日常更新、产品展示和短视频内容。',
        cta: '前往查看',
        items: [
          { name: 'TikTok', note: '查看短视频', href: 'https://www.tiktok.com/@weiweizipper', style: 'border-black bg-[radial-gradient(circle_at_top_left,_rgba(37,244,238,0.28),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(254,44,85,0.24),_transparent_35%),linear-gradient(135deg,#111111_0%,#050505_100%)] text-white', chipStyle: 'bg-white/10 text-white/80 border-white/10', image: '/social/tiktok.png?v=20260309b', imagePosition: 'right bottom' },
          { name: 'YouTube', note: '观看视频', href: 'https://www.youtube.com/@weiweizipper', style: 'border-[#FF0033] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.26),_transparent_32%),linear-gradient(135deg,#991b1b_0%,#dc2626_42%,#ff0033_100%)] text-white', chipStyle: 'bg-white/12 text-white/85 border-white/10', image: '/social/youtube.png?v=20260309b', imagePosition: 'right bottom' },
          { name: 'Instagram', note: '浏览内容', href: 'https://www.instagram.com/weiweizipper', style: 'border-transparent bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.28),_transparent_30%),linear-gradient(135deg,#4f46e5_0%,#8b5cf6_20%,#ec4899_55%,#f97316_100%)] text-white', chipStyle: 'bg-white/12 text-white/85 border-white/10', image: '/social/ins.png?v=20260309b', imagePosition: 'right bottom' },
          { name: 'Facebook', note: '关注动态', href: 'https://www.facebook.com/weiweizipper', style: 'border-[#1877F2] bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.25),_transparent_30%),linear-gradient(135deg,#1d4ed8_0%,#1877F2_45%,#0f3fae_100%)] text-white', chipStyle: 'bg-white/12 text-white/85 border-white/10', image: '/social/facebook.png?v=20260309b', imagePosition: 'right bottom' },
        ],
      }
    : locale === 'ru'
      ? {
          title: 'Социальные сети',
          subtitle: 'Вы также можете перейти в наши соцсети, чтобы посмотреть короткие видео, обновления и материалы по продукции.',
          cta: 'Перейти',
          items: [
            { name: 'TikTok', note: 'Короткие видео', href: 'https://www.tiktok.com/@weiweizipper', style: 'border-black bg-[radial-gradient(circle_at_top_left,_rgba(37,244,238,0.28),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(254,44,85,0.24),_transparent_35%),linear-gradient(135deg,#111111_0%,#050505_100%)] text-white', chipStyle: 'bg-white/10 text-white/80 border-white/10', image: '/social/tiktok.png?v=20260309b', imagePosition: 'right bottom' },
            { name: 'YouTube', note: 'Видео', href: 'https://www.youtube.com/@weiweizipper', style: 'border-[#FF0033] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.26),_transparent_32%),linear-gradient(135deg,#991b1b_0%,#dc2626_42%,#ff0033_100%)] text-white', chipStyle: 'bg-white/12 text-white/85 border-white/10', image: '/social/youtube.png?v=20260309b', imagePosition: 'right bottom' },
            { name: 'Instagram', note: 'Контент', href: 'https://www.instagram.com/weiweizipper', style: 'border-transparent bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.28),_transparent_30%),linear-gradient(135deg,#4f46e5_0%,#8b5cf6_20%,#ec4899_55%,#f97316_100%)] text-white', chipStyle: 'bg-white/12 text-white/85 border-white/10', image: '/social/ins.png?v=20260309b', imagePosition: 'right bottom' },
            { name: 'Facebook', note: 'Обновления', href: 'https://www.facebook.com/weiweizipper', style: 'border-[#1877F2] bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.25),_transparent_30%),linear-gradient(135deg,#1d4ed8_0%,#1877F2_45%,#0f3fae_100%)] text-white', chipStyle: 'bg-white/12 text-white/85 border-white/10', image: '/social/facebook.png?v=20260309b', imagePosition: 'right bottom' },
          ],
        }
      : locale === 'ar'
        ? {
            title: 'منصات التواصل',
            subtitle: 'يمكنك ايضا زيارة حساباتنا الاجتماعية لمشاهدة الفيديوهات القصيرة وتحديثات المنتجات والمحتوى اليومي.',
            cta: 'عرض الحساب',
            items: [
              { name: 'TikTok', note: 'فيديوهات قصيرة', href: 'https://www.tiktok.com/@weiweizipper', style: 'border-black bg-[radial-gradient(circle_at_top_left,_rgba(37,244,238,0.28),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(254,44,85,0.24),_transparent_35%),linear-gradient(135deg,#111111_0%,#050505_100%)] text-white', chipStyle: 'bg-white/10 text-white/80 border-white/10', image: '/social/tiktok.png?v=20260309b', imagePosition: 'right bottom' },
              { name: 'YouTube', note: 'فيديوهات', href: 'https://www.youtube.com/@weiweizipper', style: 'border-[#FF0033] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.26),_transparent_32%),linear-gradient(135deg,#991b1b_0%,#dc2626_42%,#ff0033_100%)] text-white', chipStyle: 'bg-white/12 text-white/85 border-white/10', image: '/social/youtube.png?v=20260309b', imagePosition: 'right bottom' },
              { name: 'Instagram', note: 'محتوى مرئي', href: 'https://www.instagram.com/weiweizipper', style: 'border-transparent bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.28),_transparent_30%),linear-gradient(135deg,#4f46e5_0%,#8b5cf6_20%,#ec4899_55%,#f97316_100%)] text-white', chipStyle: 'bg-white/12 text-white/85 border-white/10', image: '/social/ins.png?v=20260309b', imagePosition: 'right bottom' },
              { name: 'Facebook', note: 'تحديثات', href: 'https://www.facebook.com/weiweizipper', style: 'border-[#1877F2] bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.25),_transparent_30%),linear-gradient(135deg,#1d4ed8_0%,#1877F2_45%,#0f3fae_100%)] text-white', chipStyle: 'bg-white/12 text-white/85 border-white/10', image: '/social/facebook.png?v=20260309b', imagePosition: 'right bottom' },
            ],
          }
        : locale === 'es'
          ? {
              title: 'Redes sociales',
              subtitle: 'Tambien puede visitar nuestras redes para ver videos cortos, actualizaciones y contenido de productos.',
              cta: 'Ver cuenta',
              items: [
                { name: 'TikTok', note: 'Videos cortos', href: 'https://www.tiktok.com/@weiweizipper', style: 'border-black bg-[radial-gradient(circle_at_top_left,_rgba(37,244,238,0.28),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(254,44,85,0.24),_transparent_35%),linear-gradient(135deg,#111111_0%,#050505_100%)] text-white', chipStyle: 'bg-white/10 text-white/80 border-white/10', image: '/social/tiktok.png?v=20260309b', imagePosition: 'right bottom' },
                { name: 'YouTube', note: 'Videos', href: 'https://www.youtube.com/@weiweizipper', style: 'border-[#FF0033] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.26),_transparent_32%),linear-gradient(135deg,#991b1b_0%,#dc2626_42%,#ff0033_100%)] text-white', chipStyle: 'bg-white/12 text-white/85 border-white/10', image: '/social/youtube.png?v=20260309b', imagePosition: 'right bottom' },
                { name: 'Instagram', note: 'Contenido', href: 'https://www.instagram.com/weiweizipper', style: 'border-transparent bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.28),_transparent_30%),linear-gradient(135deg,#4f46e5_0%,#8b5cf6_20%,#ec4899_55%,#f97316_100%)] text-white', chipStyle: 'bg-white/12 text-white/85 border-white/10', image: '/social/ins.png?v=20260309b', imagePosition: 'right bottom' },
                { name: 'Facebook', note: 'Actualizaciones', href: 'https://www.facebook.com/weiweizipper', style: 'border-[#1877F2] bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.25),_transparent_30%),linear-gradient(135deg,#1d4ed8_0%,#1877F2_45%,#0f3fae_100%)] text-white', chipStyle: 'bg-white/12 text-white/85 border-white/10', image: '/social/facebook.png?v=20260309b', imagePosition: 'right bottom' },
              ],
            }
          : {
              title: 'Social Channels',
              subtitle: 'You can also visit our social channels to watch short videos, product updates, and day-to-day content.',
              cta: 'Visit channel',
              items: [
                { name: 'TikTok', note: 'Short videos', href: 'https://www.tiktok.com/@weiweizipper', style: 'border-black bg-[radial-gradient(circle_at_top_left,_rgba(37,244,238,0.28),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(254,44,85,0.24),_transparent_35%),linear-gradient(135deg,#111111_0%,#050505_100%)] text-white', chipStyle: 'bg-white/10 text-white/80 border-white/10', image: '/social/tiktok.png?v=20260309b', imagePosition: 'right bottom' },
                { name: 'YouTube', note: 'Videos', href: 'https://www.youtube.com/@weiweizipper', style: 'border-[#FF0033] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.26),_transparent_32%),linear-gradient(135deg,#991b1b_0%,#dc2626_42%,#ff0033_100%)] text-white', chipStyle: 'bg-white/12 text-white/85 border-white/10', image: '/social/youtube.png?v=20260309b', imagePosition: 'right bottom' },
                { name: 'Instagram', note: 'Visual content', href: 'https://www.instagram.com/weiweizipper', style: 'border-transparent bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.28),_transparent_30%),linear-gradient(135deg,#4f46e5_0%,#8b5cf6_20%,#ec4899_55%,#f97316_100%)] text-white', chipStyle: 'bg-white/12 text-white/85 border-white/10', image: '/social/ins.png?v=20260309b', imagePosition: 'right bottom' },
                { name: 'Facebook', note: 'Updates', href: 'https://www.facebook.com/weiweizipper', style: 'border-[#1877F2] bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.25),_transparent_30%),linear-gradient(135deg,#1d4ed8_0%,#1877F2_45%,#0f3fae_100%)] text-white', chipStyle: 'bg-white/12 text-white/85 border-white/10', image: '/social/facebook.png?v=20260309b', imagePosition: 'right bottom' },
              ],
            };
  const imageAlt = locale === 'zh'
    ? '伟伟拉链义乌国际商贸城摊位实拍'
    : locale === 'ru'
      ? 'Фотография стенда Weiwei Zipper в Yiwu International Trade City'
    : locale === 'ar'
      ? 'صورة جناح Weiwei Zipper في مدينة ييوو التجارية الدولية'
    : locale === 'es'
      ? 'Puesto de Weiwei Zipper en Yiwu International Trade City'
      : 'Weiwei Zipper booth at Yiwu International Trade City';
  const yiwuLanding = locale === 'zh'
    ? {
        title: '了解义乌拉链厂家与批发配套',
        description: '如果你想进一步了解义乌国际商贸城的拉链采购、批发配套和常见确认重点，可以查看这张专门页面。',
        button: '查看义乌拉链配套页',
      }
    : locale === 'ru'
      ? {
          title: 'Подробнее о поставщике молний в Иу',
          description: 'Если вам нужна отдельная страница о закупке, оптовой поставке и типовых моментах согласования в Иу, перейдите по ссылке ниже.',
          button: 'Открыть страницу по Иу',
        }
      : locale === 'ar'
        ? {
            title: 'تعرف أكثر على مورد السحابات في ييوو',
            description: 'إذا كنت تريد صفحة مخصصة حول شراء السحابات بالجملة في ييوو والنقاط الشائعة قبل الطلب، يمكنك الاطلاع عليها هنا.',
            button: 'عرض صفحة ييوو',
          }
        : locale === 'es'
          ? {
              title: 'Conozca mejor nuestra coordinacion en Yiwu',
              description: 'Si quiere una pagina dedicada a compra mayorista, coordinacion y puntos clave de confirmacion en Yiwu, puede verla aqui.',
              button: 'Ver pagina de Yiwu',
            }
          : {
              title: 'See our Yiwu zipper supplier page',
              description: 'If you want a dedicated page focused on zipper sourcing, wholesale coordination, and common confirmation points in Yiwu, you can view it here.',
              button: 'View Yiwu supplier page',
            };

  return (
    <div className="container mx-auto px-4 py-10 sm:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{aboutContent.title}</h1>
        <p className="text-base sm:text-lg text-gray-600 mb-10 sm:mb-12">{aboutContent.subtitle}</p>

        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{aboutContent.story.title}</h2>
          <div className="prose prose-gray max-w-none space-y-4">
            {aboutContent.story.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-gray-700 leading-relaxed">{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/hero/tanwei.png"
              alt={imageAlt}
              width={3024}
              height={1614}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-5 shadow-sm">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{socialContent.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{socialContent.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socialContent.items.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group relative overflow-hidden rounded-3xl border p-4 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${item.style}`}
                >
                  <div className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
                  <div className="pointer-events-none absolute -bottom-8 -left-6 h-28 w-28 rounded-full bg-black/10 blur-2xl" />
                  <div
                    className="pointer-events-none absolute -bottom-3 -right-3 h-full w-28 opacity-45 mix-blend-screen bg-contain bg-no-repeat sm:-bottom-4 sm:-right-4 sm:w-32"
                    style={{ backgroundImage: `url(${item.image})`, backgroundPosition: item.imagePosition }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/45 via-black/16 to-black/0" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${item.chipStyle}`}>{item.name}</span>
                      <div className="mt-3 text-lg font-semibold leading-snug">{item.note}</div>
                      <div className="mt-6 text-[11px] uppercase tracking-[0.26em] opacity-30">{item.name}</div>
                    </div>
                    <span className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm backdrop-blur ${item.chipStyle}`}>
                      {socialContent.cta}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-950">{yiwuLanding.title}</h3>
            <p className="mt-2 text-sm leading-6 text-blue-900/75">{yiwuLanding.description}</p>
            <Link
              href="/yiwu-zipper-supplier"
              className="mt-4 inline-flex items-center rounded-lg border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-800 transition hover:border-blue-300 hover:bg-blue-100/60"
            >
              {yiwuLanding.button}
            </Link>
          </div>
        </section>

        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{aboutContent.capabilities.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {aboutContent.capabilities.items.map((item) => (
              <div key={`${item.value}-${item.label}`} className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-900 mb-1">{item.value}</div>
                <div className="text-sm text-blue-700/70">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{aboutContent.mission.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutContent.mission.items.map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
