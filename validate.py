from pathlib import Path
from html.parser import HTMLParser

root = Path(__file__).parent
html = (root / 'index.html').read_text(encoding='utf-8')

class Parser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.links = []
        self.h1 = 0
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.add(attrs['id'])
        if tag == 'a' and 'href' in attrs:
            self.links.append(attrs['href'])
        if tag == 'h1':
            self.h1 += 1

p = Parser()
p.feed(html)
required = ['main-content', 'work', 'skills', 'contact', 'primary-nav']
assert all(item in p.ids for item in required), f'Missing IDs: {set(required) - p.ids}'
assert p.h1 == 1, f'Expected one h1, found {p.h1}'
assert html.count('Live demo') == 3
assert html.count('GitHub repo') == 3
assert 'data-copy-email' in html and 'mobile-contact' in html
for href in p.links:
    if href.startswith('assets/'):
        assert (root / href).exists(), f'Missing local link target: {href}'
print('Portfolio validation passed: semantic anchors, single h1, case study fields, and local targets are present.')
