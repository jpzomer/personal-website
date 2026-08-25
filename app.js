import { publications, site } from "./site-data.js?v=20260824-02";

const byId = (id) => document.getElementById(id);
const externalAttributes = { target: "_blank", rel: "noreferrer" };
const PUBLICATION_PAGE_SIZE = 8;
let activeTag = "All";
let showAllPublications = false;

function setText(id, value) {
  const el = byId(id);
  if (el) el.textContent = value;
}

function link(label, href, className = "") {
  const anchor = document.createElement("a");
  anchor.textContent = label;
  anchor.href = href;
  anchor.className = className;
  if (/^https?:\/\//.test(href)) Object.assign(anchor, externalAttributes);
  return anchor;
}

function renderProfile() {
  const initials = site.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  document.title = `${site.name} — ${site.role}`;
  setText("name", site.name);
  setText("role", site.role);
  setText("location", site.location);
  setText("bio", site.bio);
  setText("initials", initials || "JP");
  setText("footer-name", site.name);
  setText("research-statement", site.researchStatement);
  setText("year", new Date().getFullYear());

  const profileLinks = byId("profile-links");
  if (profileLinks) {
    site.profiles.forEach((profile) => profileLinks.append(link(`${profile.label} ↗`, profile.url)));
  }

  const scholar = site.profiles.find((profile) => profile.label === "Google Scholar");
  const scholarLink = byId("scholar-link");
  if (scholar && scholarLink) scholarLink.href = scholar.url;

  const cvLink = byId("cv-link");
  if (cvLink) {
    if (site.cvUrl) {
      cvLink.href = site.cvUrl;
    } else {
      cvLink.hidden = true;
    }
  }
}

function createEmptyState(message) {
  const state = document.createElement("p");
  state.className = "empty-state";
  state.textContent = message;
  return state;
}

function createPaperLinks(links) {
  const container = document.createElement("div");
  container.className = "paper-links";
  const labels = { paper: "Paper ↗", doi: "DOI ↗", code: "Code ↗" };

  Object.entries(links ?? {}).forEach(([key, href]) => {
    if (href && labels[key]) container.append(link(labels[key], href));
  });
  return container;
}

function renderSelectedWork() {
  const container = byId("selected-publications");
  if (!container) return;
  const featured = publications.filter((publication) => publication.featured);

  if (!featured.length) {
    container.append(createEmptyState("Add verified featured papers in site-data.js to populate this editorial section."));
    return;
  }

  featured.forEach((publication) => {
    const card = document.createElement("article");
    card.className = "paper-card";

    const content = document.createElement("div");
    const meta = document.createElement("p");
    meta.className = "paper-meta";
    meta.textContent = `${publication.venue} / ${publication.year}`;
    const title = document.createElement("h3");
    title.textContent = publication.title;
    const summary = document.createElement("p");
    summary.className = "paper-summary";
    summary.textContent = publication.summary;
    content.append(meta, title, summary);

    const footer = document.createElement("footer");
    footer.className = "paper-footer";
    publication.tags.forEach((tag) => {
      const tagElement = document.createElement("span");
      tagElement.className = "tag";
      tagElement.textContent = tag;
      footer.append(tagElement);
    });
    footer.append(createPaperLinks(publication.links));
    card.append(content, footer);
    container.append(card);
  });
}

function createPublicationRow(publication) {
  const row = document.createElement("article");
  row.className = "publication-row";

  const year = document.createElement("span");
  year.className = "publication-year";
  year.textContent = publication.year ?? "—";

  const detail = document.createElement("div");
  const title = document.createElement("h3");
  title.className = "publication-title";
  title.textContent = publication.title;
  const authors = document.createElement("p");
  authors.className = "publication-authors";
  authors.textContent = publication.authors;
  detail.append(title, authors);

  const venue = document.createElement("p");
  venue.className = "publication-venue";
  venue.textContent = publication.venue || "Venue not listed";

  row.append(year, detail, venue, createPaperLinks(publication.links));
  return row;
}


function renderPublicationDisclosure(total, rendered) {
  const button = byId("publication-disclosure");
  if (!button) return;
  if (total <= PUBLICATION_PAGE_SIZE) {
    button.hidden = true;
    return;
  }

  button.hidden = false;
  if (showAllPublications) {
    button.textContent = "Show fewer publications";
    return;
  }

  const remaining = total - rendered;
  button.textContent = `Show ${remaining} more publication${remaining === 1 ? "" : "s"}`;
}

function renderPublicationList() {
  const container = byId("publication-list");
  if (!container) return;
  container.replaceChildren();
  const matching = publications
    .filter((publication) => activeTag === "All" || publication.tags.includes(activeTag))
    .sort((left, right) => (right.year ?? -1) - (left.year ?? -1) || left.title.localeCompare(right.title));
  const visible = showAllPublications ? matching : matching.slice(0, PUBLICATION_PAGE_SIZE);

  if (!visible.length) {
    container.append(createEmptyState(
      publications.length
        ? "No publications match this research theme."
        : "The complete publication record will appear here after you add verified metadata in site-data.js.",
    ));
  } else {
    visible.forEach((publication) => container.append(createPublicationRow(publication)));
  }

  renderPublicationDisclosure(matching.length, visible.length);
}

function renderFilters() {
  const tags = ["All", ...new Set(publications.flatMap((publication) => publication.tags))];
  const container = byId("filters");
  if (!container) return;

  tags.forEach((tag) => {
    const button = document.createElement("button");
    button.className = "filter-button";
    button.type = "button";
    button.textContent = tag;
    button.ariaPressed = String(tag === activeTag);
    button.addEventListener("click", () => {
      activeTag = tag;
      [...container.children].forEach((item) => {
        item.ariaPressed = String(item.textContent === activeTag);
      });
      showAllPublications = false;
      renderPublicationList();
    });
    container.append(button);
  });
}

const disclosure = byId("publication-disclosure");
if (disclosure) {
  disclosure.addEventListener("click", () => {
    showAllPublications = !showAllPublications;
    renderPublicationList();
  });
}

renderProfile();
renderSelectedWork();
renderFilters();
renderPublicationList();
