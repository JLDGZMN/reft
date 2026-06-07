const products = [
  {
    name: "Aster Carryall",
    category: "travel",
    price: 1290,
    tag: "Best seller",
    policy: "Refund eligible",
    description: "Structured weekender tote with reinforced handles.",
    background: "linear-gradient(135deg, #d9fbe8, #eff6ff)",
    image:
      "https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?cs=srgb&dl=pexels-muffinsaurs-1214212.jpg&fm=jpg",
    alt: "Black tote bag hanging on a wooden rack."
  },
  {
    name: "Mica Throw",
    category: "home",
    price: 449,
    tag: "New",
    policy: "Exchange eligible",
    description: "Soft woven throw in warm neutral tones.",
    background: "linear-gradient(135deg, #fde7df, #fff7ed)",
    image:
      "https://images.pexels.com/photos/30350497/pexels-photo-30350497.jpeg?cs=srgb&dl=pexels-slipcoverkas-30350497.jpg&fm=jpg",
    alt: "Soft beige throw blanket draped across a surface."
  },
  {
    name: "Grove Bottle Set",
    category: "daily",
    price: 799,
    tag: "2-pack",
    policy: "Refund eligible",
    description: "Insulated bottles with spill-lock lids.",
    background: "linear-gradient(135deg, #def7f6, #ecfdf5)",
    image:
      "https://images.pexels.com/photos/11031198/pexels-photo-11031198.png?cs=srgb&dl=pexels-moises-ribeiro-121009898-11031198.jpg&fm=jpg",
    alt: "Black stainless water bottle with a blue lid on a round table."
  },
  {
    name: "Dune Lamp",
    category: "home",
    price: 1999,
    tag: "Limited",
    policy: "Inspection required",
    description: "Ceramic table lamp with linen shade.",
    background: "linear-gradient(135deg, #fff0db, #fef3c7)",
    image:
      "https://images.pexels.com/photos/9088893/pexels-photo-9088893.jpeg?cs=srgb&dl=pexels-rdne-9088893.jpg&fm=jpg",
    alt: "Ceramic table lamp on a styled interior table."
  },
  {
    name: "Oro Pour-Over Kettle",
    category: "daily",
    price: 1549,
    tag: "Popular",
    policy: "Refund eligible",
    description: "Precision spout kettle for daily brewing.",
    background: "linear-gradient(135deg, #fcefd3, #f0fdf4)",
    image:
      "https://images.pexels.com/photos/27902258/pexels-photo-27902258.jpeg?cs=srgb&dl=pexels-interwebly-27902258.jpg&fm=jpg",
    alt: "Minimal pour-over coffee setup with a kettle and brewer on a table."
  },
  {
    name: "Linea Desk Tray",
    category: "daily",
    price: 110,
    tag: "Simple pick",
    policy: "Refund eligible",
    description: "Slim tray for keys, cards, and earbuds.",
    background: "linear-gradient(135deg, #e9eefb, #f9fafb)",
    image:
      "https://images.pexels.com/photos/8251060/pexels-photo-8251060.jpeg?cs=srgb&dl=pexels-pnw-prod-8251060.jpg&fm=jpg",
    alt: "Organized office drawer with stationery and desk essentials."
  },
  {
    name: "Fable Storage Tower",
    category: "home",
    price: 2999,
    tag: "Free ship",
    policy: "Oversize review",
    description: "Modular shelf tower for home storage.",
    background: "linear-gradient(135deg, #e1f4ea, #ecfeff)",
    image:
      "https://images.pexels.com/photos/35309469/pexels-photo-35309469.jpeg?cs=srgb&dl=pexels-vinson-chu-654804167-35309469.jpg&fm=jpg",
    alt: "Organized shelf filled with neatly arranged home objects."
  },
  {
    name: "Atlas Packing Cubes",
    category: "travel",
    price: 590,
    tag: "Travel set",
    policy: "Exchange eligible",
    description: "Compression cubes for organized packing.",
    background: "linear-gradient(135deg, #ecf7ff, #eef2ff)",
    image:
      "https://images.pexels.com/photos/9186174/pexels-photo-9186174.jpeg?cs=srgb&dl=pexels-timur-weber-9186174.jpg&fm=jpg",
    alt: "Packing cubes being filled with folded clothes in a suitcase."
  },
  {
    name: "Noma Vanity Case",
    category: "travel",
    price: 349,
    tag: "Gift pick",
    policy: "Refund eligible",
    description: "Travel organizer with wipe-clean interior.",
    background: "linear-gradient(135deg, #fce7f3, #fff7ed)",
    image:
      "https://images.pexels.com/photos/9185864/pexels-photo-9185864.jpeg?cs=srgb&dl=pexels-timur-weber-9185864.jpg&fm=jpg",
    alt: "Black toiletry bag opened with travel-size bottles and essentials inside."
  },
  {
    name: "Hearth Aroma Diffuser",
    category: "home",
    price: 760,
    tag: "Calm edit",
    policy: "Inspection required",
    description: "Stone-look diffuser with quiet mist.",
    background: "linear-gradient(135deg, #fdf1d8, #f9fafb)",
    image:
      "https://images.pexels.com/photos/11001974/pexels-photo-11001974.jpeg?cs=srgb&dl=pexels-doterra-international-llc-2204678-11001974.jpg&fm=jpg",
    alt: "White aroma diffuser releasing mist beside an essential oil bottle."
  },
  {
    name: "Pebble Lunch Kit",
    category: "daily",
    price: 399,
    tag: "Office ready",
    policy: "Refund eligible",
    description: "Compact lunch kit with cooling insert.",
    background: "linear-gradient(135deg, #dff5e6, #fffbeb)",
    image:
      "https://images.pexels.com/photos/5852273/pexels-photo-5852273.jpeg?cs=srgb&dl=pexels-ai25studioai-5852273.jpg&fm=jpg",
    alt: "Colorful lunch box filled with vegetables, corn, crackers, and egg."
  },
  {
    name: "Sol Passport Wallet",
    category: "travel",
    price: 699,
    tag: "Quick exchange",
    policy: "Exchange eligible",
    description: "Travel wallet with RFID lining.",
    background: "linear-gradient(135deg, #efe6ff, #fff7ed)",
    image:
      "https://images.pexels.com/photos/6444094/pexels-photo-6444094.jpeg?cs=srgb&dl=pexels-moojii-6444094.jpg&fm=jpg",
    alt: "Leather wallets arranged on a clean studio background."
  }
];

const STORAGE_KEY = "loop-return-requests-v2";
const SELECTED_PRODUCT_KEY = "refturnify-selected-product";
const SELECTED_ORDER_KEY = "refturnify-selected-order";
const THEME_STORAGE_KEY = "refturnify-theme";
const ACCEPTED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);
const MAX_IMAGE_SIZE_BYTES = 2 * 1024 * 1024;
const MAX_IMAGES_PER_ITEM = 3;
const RETURN_REASONS = [
  "Damaged item",
  "Wrong item received",
  "Changed mind",
  "Size or color issue",
  "Missing parts"
];
const ALL_STATUSES = [
  "Pending Review",
  "Seller Approved",
  "Refunded",
  "Rejected"
];
const SELLER_STATUSES = ["Pending Review", "Seller Approved", "Refunded", "Rejected"];

let activeFilter = "all";
let draftItemCount = 0;
let activeDialogResolver = null;
const priceFormatter = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  maximumFractionDigits: 0
});

function uid(prefix) {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}${Date.now().toString(36).slice(-4)}`;
}

function generateOrderNumber() {
  const value = Math.floor(10000 + Math.random() * 90000);
  return `RF-${value}`;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return entities[character] || character;
  });
}

function getProductByName(name) {
  return products.find((product) => product.name === name) || null;
}

function createSeedRequests() {
  return [];
}

function normalizeRequest(request) {
  return {
    id: request.id || uid("RR"),
    source:
      request.source ||
      (String(request.id || "").startsWith("RR-SEED-") ? "demo" : "buyer"),
    orderNumber: request.orderNumber || "",
    email: request.email || "",
    resolution: request.resolution || "Refund",
    details: request.details || "",
    createdAt: request.createdAt || new Date().toISOString(),
    updatedAt: request.updatedAt || request.createdAt || new Date().toISOString(),
    items: Array.isArray(request.items)
      ? request.items.map((item) => {
          const product = getProductByName(item.productName) || {};
          return {
            id: item.id || uid("ITEM"),
            productName: item.productName || "Unknown product",
            productImage: item.productImage || product.image || "",
            productAlt: item.productAlt || product.alt || item.productName || "Returned product",
            quantity: Number(item.quantity) || 1,
            reason: item.reason || "Damaged item",
            status: ALL_STATUSES.includes(item.status) ? item.status : "Pending Review",
            proofImages: Array.isArray(item.proofImages)
              ? item.proofImages.map((image) => ({
                  id: image.id || uid("PROOF"),
                  name: image.name || "proof-image",
                  type: image.type || "image/jpeg",
                  size: Number(image.size) || 0,
                  url: image.url || ""
                }))
              : []
          };
        })
      : []
  };
}

function loadReturnRequests() {
  const rawValue = localStorage.getItem(STORAGE_KEY);
  if (!rawValue) {
    const seedRequests = createSeedRequests();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedRequests));
    return seedRequests;
  }

  try {
    const parsed = JSON.parse(rawValue);
    if (!Array.isArray(parsed)) {
      throw new Error("Invalid return request store.");
    }
    return parsed.map(normalizeRequest);
  } catch (error) {
    const seedRequests = createSeedRequests();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedRequests));
    return seedRequests;
  }
}

function saveReturnRequests(requests) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(requests));
}

function getReturnRequests() {
  return loadReturnRequests().sort(
    (left, right) => new Date(right.updatedAt).getTime() - new Date(left.updatedAt).getTime()
  );
}

function getBuyerRequests() {
  return getReturnRequests().filter((request) => request.source === "buyer");
}

function getLatestReturnItemByProductName(productName) {
  for (const request of getBuyerRequests()) {
    const match = request.items.find((item) => item.productName === productName);
    if (match) {
      return {
        ...match,
        requestId: request.id,
        updatedAt: request.updatedAt
      };
    }
  }
  return null;
}

function selectedProductFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("product") || "";
}

function getPendingSelectedProduct() {
  const fromUrl = selectedProductFromUrl();
  if (fromUrl) {
    return fromUrl;
  }

  return sessionStorage.getItem(SELECTED_PRODUCT_KEY) || "";
}

function clearPendingSelectedProduct() {
  sessionStorage.removeItem(SELECTED_PRODUCT_KEY);
}

function getPendingOrderNumber() {
  return sessionStorage.getItem(SELECTED_ORDER_KEY) || "";
}

function clearPendingOrderNumber() {
  sessionStorage.removeItem(SELECTED_ORDER_KEY);
}

function systemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function resolveInitialTheme() {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return systemPrefersDark() ? "dark" : "light";
}

function applyTheme(theme) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", nextTheme);

  const toggle = document.getElementById("theme-toggle");
  if (toggle instanceof HTMLButtonElement) {
    const isDark = nextTheme === "dark";
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    toggle.title = isDark ? "Switch to light mode" : "Switch to dark mode";
  }
}

function setupTheme() {
  applyTheme(resolveInitialTheme());

  const toggle = document.getElementById("theme-toggle");
  if (toggle instanceof HTMLButtonElement) {
    toggle.addEventListener("click", () => {
      const nextTheme =
        document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      applyTheme(nextTheme);
    });
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const syncToSystemTheme = (event) => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === "light" || storedTheme === "dark") {
      return;
    }

    applyTheme(event.matches ? "dark" : "light");
  };

  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", syncToSystemTheme);
  } else if (typeof mediaQuery.addListener === "function") {
    mediaQuery.addListener(syncToSystemTheme);
  }
}

function productMarkup(product) {
  const latestReturnItem = getLatestReturnItemByProductName(product.name);
  const hasReturn = Boolean(latestReturnItem);
  const returnHref = `returns.html?product=${encodeURIComponent(product.name)}`;
  const returnAction = hasReturn
    ? `<span class="button button-secondary button-disabled" aria-disabled="true">Returned</span>`
    : `
          <a
            class="button button-secondary"
            href="${returnHref}"
            data-product-name="${escapeHtml(product.name)}"
          >Return</a>
        `;

  return `
    <article class="product-card" style="--card-bg:${product.background}">
      <div class="product-visual">
        <span class="product-pill">${product.tag}</span>
        <img class="product-image" src="${product.image}" alt="${product.alt}" loading="lazy" />
      </div>
      <div class="product-body">
        <div class="product-meta">
          <span>${product.category}</span>
          <span>${hasReturn ? "Returned" : product.policy}</span>
        </div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        ${
          hasReturn
            ? `<p class="product-return-note">Return request recorded. Current status: ${escapeHtml(latestReturnItem.status)}.</p>`
            : ""
        }
        <div class="product-footer">
          <strong class="price">${priceFormatter.format(product.price)}</strong>
          ${returnAction}
        </div>
      </div>
    </article>
  `;
}

function getFilteredProducts() {
  return activeFilter === "all"
    ? products
    : products.filter((product) => product.category === activeFilter);
}

function updateResultsCount(count) {
  const element = document.getElementById("results-count");
  if (element) {
    element.textContent = `${count} product${count === 1 ? "" : "s"} available`;
  }
}

function renderProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) {
    return;
  }

  const filtered = getFilteredProducts();
  grid.innerHTML = filtered.map(productMarkup).join("");
  updateResultsCount(filtered.length);
}

function productOptionsMarkup(selectedValue = "") {
  return [
    '<option value="">Choose a product</option>',
    ...products.map((product) => {
      const selected = product.name === selectedValue ? " selected" : "";
      return `<option value="${escapeHtml(product.name)}"${selected}>${escapeHtml(product.name)}</option>`;
    })
  ].join("");
}

function reasonOptionsMarkup(selectedValue = "") {
  return [
    '<option value="">Choose a reason</option>',
    ...RETURN_REASONS.map((reason) => {
      const selected = reason === selectedValue ? " selected" : "";
      return `<option value="${escapeHtml(reason)}"${selected}>${escapeHtml(reason)}</option>`;
    })
  ].join("");
}

function buildReturnItemMarkup(item = {}) {
  const rowId = item.id || `draft-${draftItemCount++}`;
  return `
    <article class="return-item-block" data-draft-item-id="${escapeHtml(rowId)}">
      <div class="return-item-top">
        <p class="eyebrow">Item ${draftItemCount}</p>
        <button class="line-item-remove" type="button" aria-label="Remove returned item">
          Remove
        </button>
      </div>
      <div class="line-item-grid">
        <label>
          Product name
          <select class="line-item-product" required>
            ${productOptionsMarkup(item.productName || "")}
          </select>
        </label>
        <label>
          Quantity
          <input
            class="line-item-quantity"
            type="number"
            min="1"
            max="10"
            step="1"
            value="${escapeHtml(item.quantity || 1)}"
            required
          />
        </label>
      </div>
      <label>
        Reason for return
        <select class="line-item-reason" required>
          ${reasonOptionsMarkup(item.reason || "")}
        </select>
      </label>
      <label>
        Proof images
        <input
          class="line-item-images"
          type="file"
          accept="image/jpeg,image/png,image/webp"
          multiple
          required
        />
      </label>
      <p class="helper-text">Upload 1 to ${MAX_IMAGES_PER_ITEM} JPG, PNG, or WEBP files. Max ${Math.round(MAX_IMAGE_SIZE_BYTES / 1024 / 1024)}MB each.</p>
      <div class="upload-preview" aria-live="polite"></div>
    </article>
  `;
}

function addReturnItemRow(item = {}) {
  const container = document.getElementById("return-items");
  if (!container) {
    return;
  }

  container.insertAdjacentHTML("beforeend", buildReturnItemMarkup(item));
  const row = container.lastElementChild;
  attachReturnItemEvents(row);
  updateRemoveButtons();
}

function updateRemoveButtons() {
  const rows = document.querySelectorAll(".return-item-block");
  rows.forEach((row, index) => {
    const label = row.querySelector(".return-item-top .eyebrow");
    if (label) {
      label.textContent = `Item ${index + 1}`;
    }

    const removeButton = row.querySelector(".line-item-remove");
    if (removeButton) {
      removeButton.hidden = rows.length === 1;
    }
  });
}

function previewSelectedImages(input) {
  const row = input.closest(".return-item-block");
  const preview = row?.querySelector(".upload-preview");
  if (!row || !preview) {
    return;
  }

  const files = Array.from(input.files || []);
  const validationError = validateImageFiles(files);
  if (validationError) {
    input.setCustomValidity(validationError);
    input.reportValidity();
    input.value = "";
    preview.innerHTML = "";
    return;
  }

  input.setCustomValidity("");
  preview.innerHTML = files
    .map((file) => {
      const objectUrl = URL.createObjectURL(file);
      return `
        <figure class="preview-card">
          <img src="${objectUrl}" alt="${escapeHtml(file.name)} preview" />
          <figcaption>${escapeHtml(file.name)}</figcaption>
        </figure>
      `;
    })
    .join("");
}

function attachReturnItemEvents(row) {
  const removeButton = row.querySelector(".line-item-remove");
  const imageInput = row.querySelector(".line-item-images");

  removeButton?.addEventListener("click", () => {
    row.remove();
    updateRemoveButtons();
  });

  imageInput?.addEventListener("change", () => {
    previewSelectedImages(imageInput);
  });
}

function renderInitialReturnItems() {
  const container = document.getElementById("return-items");
  if (!container || container.children.length) {
    return;
  }

  draftItemCount = 0;
  const selectedProduct = getPendingSelectedProduct();
  const matchingProduct = getProductByName(selectedProduct);
  addReturnItemRow(matchingProduct ? { productName: matchingProduct.name } : {});
  if (matchingProduct) {
    clearPendingSelectedProduct();
  }
}

function prefillOrderNumber() {
  const orderInput = document.getElementById("order-number");
  if (!(orderInput instanceof HTMLInputElement) || orderInput.value) {
    return;
  }

  const pendingOrderNumber = getPendingOrderNumber();
  if (!pendingOrderNumber) {
    return;
  }

  orderInput.value = pendingOrderNumber;
  clearPendingOrderNumber();
}

function validateImageFiles(files) {
  if (!files.length) {
    return "Upload at least one proof image for this item.";
  }
  if (files.length > MAX_IMAGES_PER_ITEM) {
    return `Upload up to ${MAX_IMAGES_PER_ITEM} images per returned item.`;
  }

  for (const file of files) {
    if (!ACCEPTED_IMAGE_TYPES.has(file.type)) {
      return "Only JPG, PNG, and WEBP images are allowed.";
    }
    if (file.size > MAX_IMAGE_SIZE_BYTES) {
      return `Each image must be ${Math.round(MAX_IMAGE_SIZE_BYTES / 1024 / 1024)}MB or smaller.`;
    }
  }

  return "";
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(String(reader.result || "")), { once: true });
    reader.addEventListener("error", () => reject(new Error(`Could not read ${file.name}.`)), {
      once: true
    });
    reader.readAsDataURL(file);
  });
}

async function collectReturnItems() {
  const rows = Array.from(document.querySelectorAll(".return-item-block"));
  if (!rows.length) {
    throw new Error("Add at least one returned item.");
  }

  const items = [];
  for (const row of rows) {
    const productSelect = row.querySelector(".line-item-product");
    const quantityInput = row.querySelector(".line-item-quantity");
    const reasonSelect = row.querySelector(".line-item-reason");
    const imageInput = row.querySelector(".line-item-images");

    if (!productSelect || !quantityInput || !reasonSelect || !imageInput) {
      continue;
    }

    if (!productSelect.value || !reasonSelect.value || !imageInput.files?.length) {
      throw new Error("Complete every returned item, including proof images.");
    }

    const product = getProductByName(productSelect.value);
    if (!product) {
      throw new Error("Choose a valid product for each returned item.");
    }

    const files = Array.from(imageInput.files);
    const validationError = validateImageFiles(files);
    if (validationError) {
      throw new Error(validationError);
    }

    const proofImages = await Promise.all(
      files.map(async (file) => ({
        id: uid("PROOF"),
        name: file.name,
        type: file.type,
        size: file.size,
        url: await readFileAsDataUrl(file)
      }))
    );

    items.push({
      id: uid("ITEM"),
      productName: product.name,
      productImage: product.image,
      productAlt: product.alt,
      quantity: Number(quantityInput.value) || 1,
      reason: reasonSelect.value,
      status: "Pending Review",
      proofImages
    });
  }

  return items;
}

function showFormMessage(text, isError = false) {
  const message = document.getElementById("form-message");
  if (!message) {
    return;
  }

  message.hidden = false;
  message.textContent = text;
  message.classList.toggle("is-error", isError);
}

function clearFormMessage() {
  const message = document.getElementById("form-message");
  if (!message) {
    return;
  }

  message.hidden = true;
  message.classList.remove("is-error");
}

function ensureFeedbackUi() {
  if (!document.getElementById("dialog-backdrop")) {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
        <div class="dialog-backdrop" id="dialog-backdrop" hidden>
          <div class="dialog-card" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
            <p class="eyebrow" id="dialog-eyebrow">Confirm action</p>
            <h2 id="dialog-title">Please confirm</h2>
            <p class="dialog-text" id="dialog-text"></p>
            <div class="dialog-actions">
              <button class="button button-secondary" id="dialog-cancel" type="button">Cancel</button>
              <button class="button button-primary" id="dialog-confirm" type="button">Confirm</button>
            </div>
          </div>
        </div>
        <div class="toast-stack" id="toast-stack" aria-live="polite" aria-atomic="true"></div>
      `
    );
  }
}

function openConfirmDialog({
  eyebrow = "Confirm action",
  title = "Please confirm",
  message = "Continue with this action?",
  confirmLabel = "Confirm"
}) {
  ensureFeedbackUi();

  const backdrop = document.getElementById("dialog-backdrop");
  const titleElement = document.getElementById("dialog-title");
  const eyebrowElement = document.getElementById("dialog-eyebrow");
  const textElement = document.getElementById("dialog-text");
  const cancelButton = document.getElementById("dialog-cancel");
  const confirmButton = document.getElementById("dialog-confirm");

  if (!backdrop || !titleElement || !eyebrowElement || !textElement || !cancelButton || !confirmButton) {
    return Promise.resolve(false);
  }

  eyebrowElement.textContent = eyebrow;
  titleElement.textContent = title;
  textElement.textContent = message;
  confirmButton.textContent = confirmLabel;
  backdrop.hidden = false;
  requestAnimationFrame(() => backdrop.classList.add("is-visible"));

  return new Promise((resolve) => {
    activeDialogResolver = resolve;

    const close = (result) => {
      backdrop.classList.remove("is-visible");
      backdrop.setAttribute("aria-hidden", "true");
      window.setTimeout(() => {
        backdrop.hidden = true;
      }, 180);

      cancelButton.removeEventListener("click", onCancel);
      confirmButton.removeEventListener("click", onConfirm);
      activeDialogResolver = null;
      resolve(result);
    };

    const onCancel = () => close(false);
    const onConfirm = () => close(true);

    cancelButton.addEventListener("click", onCancel, { once: true });
    confirmButton.addEventListener("click", onConfirm, { once: true });
    confirmButton.focus();
  });
}

function showToast(message, tone = "success") {
  ensureFeedbackUi();
  const stack = document.getElementById("toast-stack");
  if (!stack) {
    return;
  }

  const toast = document.createElement("div");
  toast.className = `toast-message toast-${tone}`;
  toast.textContent = message;
  stack.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add("is-visible"));

  window.setTimeout(() => {
    toast.classList.remove("is-visible");
    window.setTimeout(() => toast.remove(), 220);
  }, 2600);
}

function wait(milliseconds) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, milliseconds);
  });
}

function setButtonBusy(button, isBusy, busyLabel = "Processing...") {
  if (!(button instanceof HTMLButtonElement)) {
    return;
  }

  if (isBusy) {
    button.dataset.originalLabel = button.textContent || "";
    button.disabled = true;
    button.classList.add("is-loading");
    button.textContent = busyLabel;
    return;
  }

  button.disabled = false;
  button.classList.remove("is-loading");
  button.textContent = button.dataset.originalLabel || button.textContent || "";
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date(value));
}

function requestSummaryStatus(request) {
  const statuses = request.items.map((item) => item.status);
  if (!statuses.length || statuses.some((status) => status === "Pending Review")) {
    return "Pending Review";
  }
  if (statuses.every((status) => status === "Seller Approved")) {
    return "Seller Approved";
  }
  if (statuses.every((status) => status === "Refunded")) {
    return "Refunded";
  }
  if (statuses.every((status) => status === "Rejected")) {
    return "Rejected";
  }
  return "Mixed";
}

function statusClass(status) {
  if (status === "Seller Approved") {
    return "status-approved";
  }
  if (status === "Refunded") {
    return "status-refunded";
  }
  if (status === "Rejected") {
    return "status-rejected";
  }
  if (status === "Mixed") {
    return "status-mixed";
  }
  return "status-pending";
}

function itemStatusControl(requestId, item, role) {
  const availableStatuses = Array.from(new Set([item.status, ...SELLER_STATUSES]));

  const options = availableStatuses
    .map((status) => {
      const selected = item.status === status ? " selected" : "";
      return `<option value="${escapeHtml(status)}"${selected}>${escapeHtml(status)}</option>`;
    })
    .join("");

  return `
    <label class="status-control">
      Seller status
      <select
        class="status-select"
        data-request-id="${escapeHtml(requestId)}"
        data-item-id="${escapeHtml(item.id)}"
      >
        ${options}
      </select>
    </label>
  `;
}

function proofGalleryMarkup(item) {
  if (!item.proofImages.length) {
    return `<p class="helper-text">No proof images uploaded.</p>`;
  }

  return `
    <div class="proof-gallery">
      ${item.proofImages
        .map(
          (image) => `
            <figure class="proof-card">
              <img src="${image.url}" alt="${escapeHtml(item.productName)} proof image" loading="lazy" />
              <figcaption>${escapeHtml(image.name)}</figcaption>
            </figure>
          `
        )
        .join("")}
    </div>
  `;
}

function requestCardMarkup(request, role = "buyer") {
  const summaryStatus = requestSummaryStatus(request);
  const showSellerControl = role !== "buyer";
  const showSummaryStatus = role !== "buyer";

  return `
    <article class="request-card">
      <div class="request-card-header">
        <div>
          <p class="eyebrow">Request ${escapeHtml(request.id)}</p>
          <h3>Order ${escapeHtml(request.orderNumber)}</h3>
        </div>
        ${
          showSummaryStatus
            ? `<span class="status-pill ${statusClass(summaryStatus)}">${escapeHtml(summaryStatus)}</span>`
            : ""
        }
      </div>
      <div class="request-card-meta">
        <span>${escapeHtml(request.email)}</span>
        <span>${escapeHtml(request.resolution)}</span>
        <span>Updated ${escapeHtml(formatDate(request.updatedAt))}</span>
      </div>
      <div class="request-item-list">
        ${request.items
          .map(
            (item) => `
              <article class="request-item-card">
                <div class="request-item-main">
                  <img
                    class="request-item-image"
                    src="${item.productImage}"
                    alt="${escapeHtml(item.productAlt)}"
                    loading="lazy"
                  />
                  <div class="request-item-copy">
                    <h4>${escapeHtml(item.productName)}</h4>
                    <p>Quantity: ${escapeHtml(item.quantity)}</p>
                    <p>Reason: ${escapeHtml(item.reason)}</p>
                    ${
                      showSellerControl
                        ? ""
                        : `
                    <p>
                      Status:
                      <span class="status-pill ${statusClass(item.status)}">${escapeHtml(item.status)}</span>
                    </p>`
                    }
                  </div>
                </div>
                ${proofGalleryMarkup(item)}
                ${showSellerControl ? itemStatusControl(request.id, item, role) : ""}
              </article>
            `
          )
          .join("")}
      </div>
    </article>
  `;
}

function renderBuyerRequests() {
  const target = document.getElementById("buyer-requests");
  if (!target) {
    return;
  }

  const requests = getBuyerRequests();
  if (!requests.length) {
    target.innerHTML = `<p class="empty-state">No return requests yet. Submit a return request to see it here.</p>`;
    return;
  }

  target.innerHTML = requests.map((request) => requestCardMarkup(request, "buyer")).join("");
}

function renderStats() {
  const requests = getBuyerRequests();
  const items = requests.flatMap((request) => request.items);
  const openCount = items.filter((item) =>
    ["Pending Review", "Seller Approved"].includes(item.status)
  ).length;
  const approvedCount = items.filter((item) => item.status === "Seller Approved").length;
  const refundedCount = items.filter((item) => item.status === "Refunded").length;

  const openElement = document.getElementById("open-returns-count");
  const approvedElement = document.getElementById("approved-count");
  const refundedElement = document.getElementById("refunded-count");

  if (openElement) {
    openElement.textContent = String(openCount).padStart(2, "0");
  }
  if (approvedElement) {
    approvedElement.textContent = String(approvedCount).padStart(2, "0");
  }
  if (refundedElement) {
    refundedElement.textContent = String(refundedCount).padStart(2, "0");
  }
}

function renderOpsRequests(targetId, role) {
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  const requests = getBuyerRequests();
  if (!requests.length) {
    target.innerHTML = `<p class="empty-state">No return requests yet. Buyer submissions will appear here.</p>`;
    return;
  }

  target.innerHTML = requests.map((request) => requestCardMarkup(request, role)).join("");
}

function renderDashboards() {
  renderStats();
  renderOpsRequests("seller-requests", "seller");
}

function rerenderWorkflow() {
  renderBuyerRequests();
  renderDashboards();
}

function setupFilters() {
  const chips = document.querySelectorAll(".chip");
  if (!chips.length) {
    return;
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((item) => item.classList.remove("is-active"));
      chip.classList.add("is-active");
      activeFilter = chip.dataset.filter || "all";
      renderProducts();
    });
  });
}

function setupProductLinks() {
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const link = target.closest("a[data-product-name]");
    if (!(link instanceof HTMLAnchorElement)) {
      return;
    }

    sessionStorage.setItem(SELECTED_PRODUCT_KEY, link.dataset.productName || "");
    sessionStorage.setItem(SELECTED_ORDER_KEY, generateOrderNumber());
  });
}

function setupForm() {
  const form = document.getElementById("return-request-form");
  const addButton = document.getElementById("add-return-item");
  if (!form) {
    return;
  }

  renderInitialReturnItems();
  prefillOrderNumber();

  addButton?.addEventListener("click", () => {
    addReturnItemRow();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    clearFormMessage();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const confirmed = await openConfirmDialog({
      eyebrow: "Submit request",
      title: "Submit return request?",
      message: "Are you sure you want to submit this return request?",
      confirmLabel: "Yes, Submit"
    });

    if (!confirmed) {
      return;
    }

    if (submitButton instanceof HTMLButtonElement) {
      setButtonBusy(submitButton, true, "Submitting return request...");
    }

    try {
      showFormMessage("Submitting return request...");
      await wait(900);
      const items = await collectReturnItems();
      const requests = getReturnRequests();
      const nextRequest = normalizeRequest({
        id: uid("RR"),
        source: "buyer",
        orderNumber: form.orderNumber.value.trim(),
        email: form.email.value.trim(),
        resolution: form.resolution.value,
        details: "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        items
      });

      requests.unshift(nextRequest);
      saveReturnRequests(requests);

      showFormMessage("Return request submitted successfully.");
      showToast("Return request submitted successfully.");
      form.reset();
      const container = document.getElementById("return-items");
      if (container) {
        container.innerHTML = "";
      }
      draftItemCount = 0;
      renderInitialReturnItems();
      rerenderWorkflow();
    } catch (error) {
      const message =
        error instanceof DOMException && error.name === "QuotaExceededError"
          ? "The uploaded images are too large for this demo store. Try smaller files."
          : error instanceof Error
            ? error.message
            : "Could not save the return request.";
      showFormMessage(message, true);
      showToast(message, "error");
    } finally {
      if (submitButton instanceof HTMLButtonElement) {
        setButtonBusy(submitButton, false);
      }
    }
  });
}

async function updateItemStatus(requestId, itemId, nextStatus, control) {
  if (!ALL_STATUSES.includes(nextStatus)) {
    return;
  }

  const currentRequests = getReturnRequests();
  const request = currentRequests.find((entry) => entry.id === requestId);
  const item = request?.items.find((entry) => entry.id === itemId);
  if (!request || !item) {
    showToast("Could not find the return item to update.", "error");
    return;
  }

  if (item.status === nextStatus) {
    return;
  }

  const actionLabel =
    nextStatus === "Seller Approved"
      ? "approve this return request"
      : nextStatus === "Refunded"
        ? "mark this return item as refunded"
        : `change this return item to ${nextStatus.toLowerCase()}`;

  const confirmed = await openConfirmDialog({
    eyebrow: "Approve return",
    title: "Confirm status change",
    message: `Are you sure you want to ${actionLabel}?`,
    confirmLabel: nextStatus === "Seller Approved" ? "Yes, Approve" : "Confirm"
  });

  if (!confirmed) {
    if (control instanceof HTMLSelectElement) {
      control.value = item.status;
    }
    return;
  }

  if (control instanceof HTMLSelectElement) {
    control.disabled = true;
    control.classList.add("is-loading");
  }

  const requestCard = control?.closest(".request-card");
  requestCard?.classList.add("is-processing");

  const requests = getReturnRequests();
  const updated = requests.map((request) => {
    if (request.id !== requestId) {
      return request;
    }

    return {
      ...request,
      updatedAt: new Date().toISOString(),
      items: request.items.map((item) =>
        item.id === itemId
          ? {
              ...item,
              status: nextStatus
            }
          : item
      )
    };
  });

  try {
      showToast(nextStatus === "Seller Approved" ? "Approving return request..." : "Processing status update...", "info");
      await wait(900);
      saveReturnRequests(updated);
      rerenderWorkflow();
    showToast(
      nextStatus === "Seller Approved"
        ? "Return request approved successfully."
        : "Return item updated successfully."
    );
  } catch (error) {
    if (control instanceof HTMLSelectElement) {
      control.value = item.status;
    }
    showToast("Something went wrong while updating the return item.", "error");
  } finally {
    if (control instanceof HTMLSelectElement) {
      control.disabled = false;
      control.classList.remove("is-loading");
    }
    requestCard?.classList.remove("is-processing");
  }
}

function setupStatusControls() {
  document.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLSelectElement) || !target.classList.contains("status-select")) {
      return;
    }

    updateItemStatus(target.dataset.requestId || "", target.dataset.itemId || "", target.value, target);
  });
}

function setupStorageSync() {
  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEY) {
      rerenderWorkflow();
    }
  });
}

function setupResetDemo() {
  const resetButton = document.getElementById("reset-demo");
  if (!(resetButton instanceof HTMLButtonElement)) {
    return;
  }

  resetButton.addEventListener("click", async () => {
    const confirmed = await openConfirmDialog({
      eyebrow: "Reset demo",
      title: "Reset demo data?",
      message: "Are you sure you want to reset the website demo? All submitted return requests will be cleared.",
      confirmLabel: "Yes, Reset"
    });

    if (!confirmed) {
      return;
    }

    setButtonBusy(resetButton, true, "Resetting demo...");

    try {
      showToast("Resetting demo data...", "info");
      await wait(700);
      localStorage.removeItem(STORAGE_KEY);
      getReturnRequests();
      rerenderWorkflow();
      showToast("Demo reset successfully. The workflow is back to an empty state.");
    } catch (error) {
      showToast("Could not reset the demo data.", "error");
    } finally {
      setButtonBusy(resetButton, false);
    }
  });
}

function setupNavState() {
  const page = document.body.dataset.page;
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";
    const isCurrent =
      (page === "home" && href === "index.html") ||
      (page === "returns" && href === "returns.html") ||
      (page === "account" && href === "account.html");
    if (isCurrent) {
      link.setAttribute("aria-current", "page");
    }
  });
}

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const topbar = document.querySelector(".topbar");
  if (!toggle || !topbar) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = topbar.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  const navLinks = topbar.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      topbar.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) {
    return;
  }

  const updateStickyState = () => {
    header.classList.toggle("is-stuck", window.scrollY > 8);
  };

  updateStickyState();
  window.addEventListener("scroll", updateStickyState, { passive: true });
}

setupTheme();
renderProducts();
renderBuyerRequests();
renderDashboards();
setupFilters();
setupProductLinks();
setupForm();
setupStatusControls();
setupStorageSync();
setupResetDemo();
setupNavState();
setupMenu();
setupStickyHeader();
