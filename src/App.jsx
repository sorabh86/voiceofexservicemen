import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import SiteFooter from './components/SiteFooter.jsx';
import SiteHeader from './components/SiteHeader.jsx';
import AboutPage from './pages/AboutPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import DownloadsPage from './pages/DownloadsPage.jsx';
import DonationPage from './pages/DonationPage.jsx';
import HomePage from './pages/HomePage.jsx';
import MembershipPage from './pages/MembershipPage.jsx';
import NewsPage from './pages/NewsPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import PolicyPage from './pages/PolicyPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import TeamPage from './pages/TeamPage.jsx';

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
    document.title = `${title} | Voice of Ex-Servicemen Society`;
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <ScrollToTop />
      <PageTitle />
      <SiteHeader />
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
      <SiteFooter />
    </BrowserRouter>
  );
}
