from pathlib import Path
from html.parser import HTMLParser

root = Path(__file__).parent
html = (root / "index.html").read_text(encoding="utf-8")
resume = (root / "resume" / "resume.html").read_text(encoding="utf-8")


class Parser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.links = []
        self.h1 = 0
        self.semantic_tags = set()

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.add(attrs["id"])
        if tag == "a" and "href" in attrs:
            self.links.append(attrs["href"])
        if tag == "h1":
            self.h1 += 1
        if tag in {"main", "section", "article", "ul", "footer", "header"}:
            self.semantic_tags.add(tag)


portfolio = Parser()
portfolio.feed(html)

required_ids = ["main-content", "work", "skills", "contact", "primary-nav"]
assert all(item in portfolio.ids for item in required_ids), (
    f"Missing IDs: {set(required_ids) - portfolio.ids}"
)
assert portfolio.h1 == 1, f"Expected one portfolio h1, found {portfolio.h1}"

for href in portfolio.links:
    if href.startswith("assets/") or href.startswith("resume"):
        target = root / href
        assert target.exists(), f"Missing local link target: {href}"

resume_parser = Parser()
resume_parser.feed(resume)

assert resume_parser.h1 == 1, "ATS resume must contain exactly one h1"
assert {"main", "header", "section", "article", "ul", "footer"}.issubset(
    resume_parser.semantic_tags
), "ATS resume is missing required semantic elements"

assert "Northstar Commerce" not in resume
assert "Ledger / Insights" not in resume
assert "Available on request" not in resume
assert "averyrowan" not in html.lower()

print("Validation passed: portfolio anchors and ATS resume semantics are present, and placeholder template content is absent.")
