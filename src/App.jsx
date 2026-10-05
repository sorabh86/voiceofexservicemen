import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import SiteFooter from './components/SiteFooter.jsx';
import SiteHeader from './components/SiteHeader.jsx';
import { siteInfo } from './data/siteInfo.js';
import assetUrl from './utils/assetUrl.js';

const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const BlogPage = lazy(() => import('./pages/BlogPage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const DownloadsPage = lazy(() => import('./pages/DownloadsPage.jsx'));
const DonationPage = lazy(() => import('./pages/DonationPage.jsx'));
const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const MembershipPage = lazy(() => import('./pages/MembershipPage.jsx'));
const NewsPage = lazy(() => import('./pages/NewsPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));
const PolicyPage = lazy(() => import('./pages/PolicyPage.jsx'));
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'));
const TeamPage = lazy(() => import('./pages/TeamPage.jsx'));

function PageLoadingScreen() {
  return (
    <div className="page-loading-overlay" role="status" aria-live="polite" aria-busy="true">
      <div className="modal-backdrop fade show page-loading-backdrop" aria-hidden="true"></div>
      <div className="modal fade show d-block page-loading-modal" role="dialog" aria-modal="true" aria-label="Loading page">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content page-loading-content">
            <img className="page-loading-logo" src={assetUrl('assets/logo.png')} alt={siteInfo.name} />
            <span className="page-loading-spinner" aria-hidden="true"></span>
            <span className="page-loading-label">Loading page…</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, search]);

  return null;
}

function PageTitle() {
  const { pathname } = useLocation();
  const pageTitles = {
    '/': 'Home',
    '/index.html': 'Home',
    '/about': 'About Us',
    '/about.html': 'About Us',
    '/team': 'Our Team',
    '/team.html': 'Our Team',
    '/news': 'News & Events',
    '/news.html': 'News & Events',
    '/services': 'Services',
    '/services.html': 'Services',
    '/policy': 'Policies & Documents',
    '/policy.html': 'Policies & Documents',
    '/policy-1.html': 'Donation Policy',
    '/blog': 'Blog & Legal HelpLine',
    '/blog.html': 'Blog & Legal HelpLine',
    '/contact': 'Contact Us',
    '/contact.html': 'Contact Us',
    '/downloads': 'Downloads & Resources',
    '/donate': 'Donate',
    '/donation': 'Donate',
    '/membership': 'Membership'
  };

  useEffect(() => {
    const title = pageTitles[pathname] || (pathname.startsWith('/news/') ? 'News & Events' : 'Page Not Found');
    document.title = `${title} | ${siteInfo.name}`;
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <ScrollToTop />
      <PageTitle />
      <SiteHeader />
      <Suspense fallback={<PageLoadingScreen />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/index.html" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about.html" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team.html" element={<TeamPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:pageNumber" element={<NewsPage />} />
          <Route path="/news.html" element={<NewsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services.html" element={<ServicesPage />} />
          <Route path="/policy" element={<PolicyPage />} />
          <Route path="/policy.html" element={<PolicyPage />} />
          <Route path="/policy-1.html" element={<PolicyPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog.html" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact.html" element={<ContactPage />} />
          <Route path="/downloads" element={<DownloadsPage />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/donation" element={<DonationPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <SiteFooter />
    </BrowserRouter>
  );
}
