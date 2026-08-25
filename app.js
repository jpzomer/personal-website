import { publications, site } from "./site-data.js?v=20260824-02";

const byId = (id) => document.getElementById(id);
const externalAttributes = { target: "_blank", rel: "noreferrer" };
const profileIconData = {
  "Google Scholar": {
    fill: "#4285F4",
    viewBox: "0 0 24 24",
    d: "M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0-7-7 7 7 0 0 0 7-7z",
  },
  ORCID: {
    fill: "#A6CE39",
    viewBox: "0 0 24 24",
    d: "M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z",
  },
  LinkedIn: {
    fill: "#0A66C2",
    viewBox: "0 0 256 256",
    d: "M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453",
  },
  GitHub: {
    fill: "#181717",
    viewBox: "0 0 24 24",
    d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
  Lattes: {
    fill: "#41454A",
    viewBox: "0 0 24 24",
    d: "M22.033 21.18L13.77.459H7.869l1.049 2.623L1.836 21.18C1.574 22.098.787 22.23 0 22.361v1.18h6.82v-1.18C4.984 22.23 3.934 21.967 4.721 20c.131-.131.656-1.574 1.311-3.41h8.393l1.18 3.016c.131.525.262.918.262 1.311 0 1.049-.918 1.443-2.623 1.443v1.18H24v-1.18c-.918-.13-1.705-.393-1.967-1.18zM6.82 14.361a363.303 363.303 0 0 0 3.279-8.525l3.41 8.525H6.82z",
  },
};
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

function createProfileIcon(label) {
  const data = profileIconData[label];
  if (!data) return null;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", data.viewBox);
  svg.setAttribute("fill", data.fill);
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-hidden", "true");
  const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
  title.textContent = label === "Lattes" ? "Academia" : label;
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", data.d);
  svg.append(title, path);
  return svg;
}

function createProfileLink(profile) {
  const anchor = link("", profile.url, "profile-link");
  anchor.setAttribute("aria-label", profile.label);
  const icon = createProfileIcon(profile.label);
  if (icon) anchor.append(icon);
  const label = document.createElement("span");
  label.textContent = profile.label;
  const arrow = document.createElement("span");
  arrow.className = "profile-arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  anchor.append(label, arrow);
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
    site.profiles.forEach((profile) => profileLinks.append(createProfileLink(profile)));
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
