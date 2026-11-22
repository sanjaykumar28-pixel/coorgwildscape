import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../views/layouts/MainLayout';
import { HomePage } from '../views/pages/HomePage';
import { PlacesPage } from '../views/pages/PlacesPage';
import { PlaceDetailsPage } from '../views/pages/PlaceDetailsPage';
import { ResortsPage } from '../views/pages/ResortsPage';
import { ResortDetailsPage } from '../views/pages/ResortDetailsPage';
import { JeepSafariPage } from '../views/pages/JeepSafariPage';
import { SafariDetailsPage } from '../views/pages/SafariDetailsPage';
import { HiddenPlacesPage } from '../views/pages/HiddenPlacesPage';
import { ExperiencesPage } from '../views/pages/ExperiencesPage';
import { AboutPage } from '../views/pages/AboutPage';
import { ContactPage } from '../views/pages/ContactPage';
import { PromoReelPage } from '../views/pages/PromoReelPage';
import { NotFoundPage } from '../views/pages/NotFoundPage';

export function AppRouter() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/places" element={<PlacesPage />} />
        <Route path="/places/:slug" element={<PlaceDetailsPage />} />
        <Route path="/resorts" element={<ResortsPage />} />
        <Route path="/resorts/:slug" element={<ResortDetailsPage />} />
        <Route path="/jeep-safari" element={<JeepSafariPage />} />
        <Route path="/jeep-safari/:slug" element={<SafariDetailsPage />} />
        <Route path="/hidden-places" element={<HiddenPlacesPage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/promo-reel" element={<PromoReelPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
}
