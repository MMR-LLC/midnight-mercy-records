const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const navigation = document.querySelector("[data-navigation]");
const form = document.querySelector("[data-newsletter-form]");
const success = document.querySelector("[data-success]");

const updateHeader = () => {
  if (header) header.classList.toggle("scrolled", window.scrollY > 24);
};
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    menuButton.classList.toggle("open", !open);
    navigation.classList.toggle("open", !open);
    document.body.classList.toggle("menu-open", !open);
  });

  navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.classList.remove("open");
      navigation.classList.remove("open");
      document.body.classList.remove("menu-open");
    });
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

if (form && success) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    form.hidden = true;
    success.hidden = false;
  });
}

document.querySelectorAll("[data-year]").forEach(element => {
  element.textContent = new Date().getFullYear();
});


const burdenContent = {
  anxiety: {
    eyebrow: "Songs for anxiety",
    title: "Start here tonight.",
    copy: "These songs speak to sleepless nights, racing thoughts, and choosing to trust God while your hands are still shaking.",
    songs: [
      ["INSOMNIAC", "Fear, sleeplessness and God’s presence in the noise."],
      ["Hold Me Now", "A prayer for strength when anxiety takes over."],
      ["Your Light", "Asking God to break through the darkness."]
    ]
  },
  depression: {
    eyebrow: "Songs for depression",
    title: "You are not forgotten.",
    copy: "Songs for the numb, exhausted, and barely holding on—without pretending that faith makes every hard feeling disappear.",
    songs: [
      ["Empty", "Longing for Heaven while walking through emotional emptiness."],
      ["Dust To Grace", "Trusting God to rebuild what feels ruined."],
      ["Unbreaking Me", "Healing slowly when you thought you were beyond repair."]
    ]
  },
  grief: {
    eyebrow: "Songs for grief",
    title: "Carry the memory with hope.",
    copy: "These songs sit honestly with loss, absence, and the questions that remain when someone you love is gone.",
    songs: [
      ["Cracked Voice Prayer", "A prayer offered through grief when words barely come."],
      ["Dust To Grace", "The promise that broken things are not beyond redemption."],
      ["You Are With Me", "Holding onto God’s presence in the valley."]
    ]
  },
  addiction: {
    eyebrow: "Songs for addiction",
    title: "Surrender can begin again.",
    copy: "Songs about bondage, repentance, mercy, and laying down what keeps pulling you away from the life God is calling you toward.",
    songs: [
      ["I Lay It Down", "Releasing the weight you were never meant to carry forever."],
      ["Cry Out", "The moment repentance becomes an honest prayer."],
      ["Dust To Grace", "Grace meeting you in the aftermath."]
    ]
  },
  warfare: {
    eyebrow: "Songs for spiritual warfare",
    title: "Stand when the pressure rises.",
    copy: "Songs about resisting fear, tearing down idols, and choosing truth when darkness tries to claim your attention.",
    songs: [
      ["Hold My Ground", "Choosing faith when your hands are shaking."],
      ["Your Light", "A desperate prayer for darkness to break."],
      ["Will Not Shake", "Standing firm because God remains faithful."]
    ]
  },
  identity: {
    eyebrow: "Songs for identity",
    title: "Remember who names you.",
    copy: "Songs for anyone who feels lost inside expectations, rejection, shame, or the version of themselves they built to survive.",
    songs: [
      ["Where Do I Belong?", "Searching for identity and belonging in God."],
      ["Unbreaking Me", "Meeting the person underneath the survival."],
      ["Dust To Grace", "Your story is not finished in the ruins."]
    ]
  },
  doubt: {
    eyebrow: "Songs for doubt",
    title: "Faith can survive the questions.",
    copy: "These songs make room for silence, unanswered prayer, and fragile belief while still reaching toward Jesus.",
    songs: [
      ["Cry Out", "Calling to God when certainty feels far away."],
      ["Where Do I Belong?", "Searching for God through loneliness and confusion."],
      ["You Are With Me", "Trusting His presence before you feel it."]
    ]
  },
  loneliness: {
    eyebrow: "Songs for loneliness",
    title: "You are seen here.",
    copy: "Songs for empty rooms, isolation, abandonment, and the quiet hope that God has not left—even when people have.",
    songs: [
      ["Empty", "Naming the ache of emotional emptiness."],
      ["Where Do I Belong?", "Searching for a place to belong."],
      ["Hold Me Now", "A prayer for presence when you feel alone."]
    ]
  }
};

const recommendation = document.querySelector("[data-recommendation]");
document.querySelectorAll("[data-burden]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-burden]").forEach(item => item.classList.remove("is-active"));
    button.classList.add("is-active");
    const item = burdenContent[button.dataset.burden];
    recommendation.innerHTML = `
      <p class="eyebrow">${item.eyebrow}</p>
      <h3>${item.title}</h3>
      <p class="recommendation-copy">${item.copy}</p>
      <div class="recommended-songs">
        ${item.songs.map((song, index) => `
          <a href="#music"><span>0${index + 1}</span><div><strong>${song[0]}</strong><small>${song[1]}</small></div></a>
        `).join("")}
      </div>
      <a class="text-link" href="#music">Explore the album <span>→</span></a>
    `;
  });
});

document.querySelectorAll("[data-product]").forEach(product => {
  const mainImage = product.querySelector("[data-product-main]");
  const thumbnails = product.querySelectorAll("[data-image]");
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", () => {
      thumbnails.forEach(item => item.classList.remove("is-active"));
      thumbnail.classList.add("is-active");
      mainImage.src = thumbnail.dataset.image;
      mainImage.alt = thumbnail.dataset.alt;
    });
  });
});

const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
document.querySelectorAll("[data-zoom]").forEach(button => {
  button.addEventListener("click", () => {
    const image = button.closest("[data-product]").querySelector("[data-product-main]");
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.showModal();
  });
});
document.querySelector("[data-lightbox-close]").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) lightbox.close();
});


document.querySelectorAll("[data-catalog-image]").forEach(button => {
  button.addEventListener("click", () => {
    const gallery = button.closest(".catalog-gallery");
    const main = gallery.querySelector("[data-catalog-main]");
    gallery.querySelectorAll("[data-catalog-image]").forEach(item => item.classList.remove("is-active"));
    button.classList.add("is-active");
    main.src = button.dataset.catalogImage;
  });
});


// v1.0.5 — Mobile menu accessibility and Kit form branding.
if (menuButton && navigation) {
  document.addEventListener("keydown", event => {
    if (event.key !== "Escape" || !navigation.classList.contains("open")) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.classList.remove("open");
    navigation.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuButton.focus();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980 && navigation.classList.contains("open")) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.classList.remove("open");
      navigation.classList.remove("open");
      document.body.classList.remove("menu-open");
    }
  });
}

const brandKitForm = root => {
  const scope = root && root.querySelectorAll ? root : document;
  scope.querySelectorAll(".kit-form-wrap input[type='email']").forEach(input => {
    input.placeholder = "Enter your email address";
    input.setAttribute("aria-label", "Email address");
  });

  scope.querySelectorAll(".kit-form-wrap button[type='submit'], .kit-form-wrap .formkit-submit").forEach(button => {
    const label = button.querySelector("span") || button;
    if (label.textContent.trim() !== "❤️ Join the Community") {
      label.textContent = "❤️ Join the Community";
    }
    button.setAttribute("aria-label", "Join the Midnight Mercy Community");
  });
};

brandKitForm(document);
const kitObserver = new MutationObserver(mutations => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (node.nodeType === Node.ELEMENT_NODE) brandKitForm(node);
    }
  }
});
kitObserver.observe(document.documentElement, { childList: true, subtree: true });
