MOUNTAIN BIKE MOROCCO — MTB TOUR LINKS PACKAGE

WHAT THIS PACKAGE DOES
- Adds the fixed-duration MTB tour detail pages as named static routes, e.g.
  /cycling-trips/trip/atlas-singletrack-mountain-bike-tour-6-day
- Connects all 20 duration-based cards using their current title + duration.
- Keeps the existing MTB page markup, sections, CSS class names and button styling when a compatible page exists.
- If the MTB listing file is missing or empty, restores the bundled matching page template.
- Removes the two slogan lines requested earlier.
- Does not create src/app/cycling-trips/mtb/[slug].
- Does not edit globals.css, app/layout.tsx, or the homepage.
- Makes timestamped backups before modifying files.
- Fixes the known Next.js Cache Components build issue from new Date().getFullYear() by replacing only that footer-year expression with 2026, and backs up affected files.

INSTALL
1. Download mountain-bike-morocco-mtb-package.zip to your Mac's Downloads folder.
2. Open Terminal and navigate to the existing project folder:
   cd ~/mountainbike-morocco/mountain-biking-morocco
3. Run these commands:
   unzip -o ~/Downloads/mountain-bike-morocco-mtb-package.zip -d ~/Downloads/mountain-bike-morocco-mtb-package
   bash ~/Downloads/mountain-bike-morocco-mtb-package/install.sh

Or run both commands on one line:
   unzip -o ~/Downloads/mountain-bike-morocco-mtb-package.zip -d ~/Downloads/mountain-bike-morocco-mtb-package && bash ~/Downloads/mountain-bike-morocco-mtb-package/install.sh

IMPORTANT
- Make sure the ZIP actually finished downloading before running the commands.
- Run the installer from the project root (the folder containing package.json and src/app).
- If the installer reports existing tour page files, stop: it intentionally refuses to overwrite them.
- After installation, run npm run build.
- The backup folder is created beside the project directory and printed at the end.
