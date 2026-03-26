import os

dirs = [
    'src/components/common',
    'src/components/home',
    'src/components/about',
    'src/components/services',
    'src/components/projects',
    'src/components/infrastructure',
    'src/components/careers',
    'src/components/contact',
    'src/pages',
    'src/data',
    'src/utils',
    'src/styles/themes',
    'public/images/hero',
    'public/images/about',
    'public/images/services',
    'public/images/projects',
    'public/images/team',
    'public/images/clients',
    'public/images/certifications',
    'public/images/gallery'
]

for d in dirs:
    path = os.path.join(os.getcwd(), d)
    if not os.path.exists(path):
        os.makedirs(path)
        print(f"Created {path}")
    else:
        print(f"Exists {path}")
