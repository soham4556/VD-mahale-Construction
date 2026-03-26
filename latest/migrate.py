import os
import shutil

# Migration Map
migration_map = {
    # Common
    'src/components/Navbar.jsx': 'src/components/common/Navbar.jsx',
    'src/components/Footer.jsx': 'src/components/common/Footer.jsx',
    'src/components/Loader.jsx': 'src/components/common/Loader.jsx',
    'src/components/ThemeToggle.jsx': 'src/components/common/ThemeToggle.jsx',
    'src/components/ScrollToTop.jsx': 'src/components/common/ScrollToTop.jsx',
    'src/components/CookieConsent.jsx': 'src/components/common/CookieConsent.jsx',
    'src/components/FloatingActions.jsx': 'src/components/common/FloatingActions.jsx',
    'src/components/MobileBottomNav.jsx': 'src/components/common/MobileBottomNav.jsx',
    'src/components/ScrollProgress.jsx': 'src/components/common/ScrollProgress.jsx',
    
    # Home
    'src/components/Hero.jsx': 'src/components/home/HeroSection.jsx',
    'src/components/Stats.jsx': 'src/components/home/StatsCounter.jsx',
    'src/components/WhyChooseUs.jsx': 'src/components/home/WhyChooseUs.jsx',
    'src/components/Services.jsx': 'src/components/home/ServicesGrid.jsx',
    'src/components/Projects.jsx': 'src/components/home/FeaturedProjects.jsx',
    'src/components/Testimonials.jsx': 'src/components/home/Testimonials.jsx',
    'src/components/About.jsx': 'src/components/home/AboutPreview.jsx',
    
    # Contact
    'src/components/Contact.jsx': 'src/components/contact/ContactForm.jsx',
    
    # Cards (moving from src/components/Cards/...)
    'src/components/Cards/TeamCard.jsx': 'src/components/about/TeamCard.jsx',
    'src/components/Cards/NewsCard.jsx': 'src/components/home/LatestNews.jsx',
    'src/components/Cards/JobCard.jsx': 'src/components/careers/JobCard.jsx',
    'src/components/Cards/PlantCard.jsx': 'src/components/infrastructure/PlantCard.jsx',
    'src/components/Cards/StatCard.jsx': 'src/components/home/StatCard.jsx',
    'src/components/Cards/ServiceCard.jsx': 'src/components/services/ServiceCard.jsx',
    'src/components/Cards/ProjectCard.jsx': 'src/components/projects/ProjectCard.jsx',
    
    # Styles
    'src/styles/design-tokens.css': 'src/styles/variables.css',
    'src/index.css': 'src/styles/global.css',
    'src/styles/premium-polish.css': 'src/styles/animations.css'
}

cwd = os.getcwd()

for src, dst in migration_map.items():
    src_path = os.path.join(cwd, src)
    dst_path = os.path.join(cwd, dst)
    
    if os.path.exists(src_path):
        os.makedirs(os.path.dirname(dst_path), exist_ok=True)
        shutil.move(src_path, dst_path)
        print(f"Moved: {src} -> {dst}")
    else:
        print(f"NOT FOUND: {src}")
