  const state = {
    settings: {
      cafeName: 'Sip Awhile Cafe',
      address: '123 Main St, City',
      phone: '(555) 123-4567',
      receiptQrImage: '',
    },
    categories: [
      { id: idGen(), name: 'Coffee', sizes: ['Small', 'Medium', 'Large'], isDrink: true },
      { id: idGen(), name: 'Tea', sizes: ['Small', 'Medium', 'Large'], isDrink: true },
      { id: idGen(), name: 'Food', sizes: [], isDrink: false },
    ],
    products: [],
    customers: [
      { id: idGen(), name: 'Walk-in Customer', phone: '-', email: '', createdAt: nowStamp() },
    ],
    cart: new Map(),
    orders: [],
    transactions: [],
    expenses: [],
    shiftLogs: [],
    shift: {
      isOpen: false,
      openingAmount: 0,
      drawerAmount: 0,
      changeReturned: 0,
    },
    activeSection: 'dashboard',
    auth: {
      isLoggedIn: false,
      user: null,
    },
  };

  state.products = [
    makeProduct('Americano', 3.0, 'Coffee', 30, 'Small'),
    makeProduct('Americano', 3.5, 'Coffee', 28, 'Medium'),
    makeProduct('Americano', 4.0, 'Coffee', 24, 'Large'),
    makeProduct('Cappuccino', 3.75, 'Coffee', 20, 'Small'),
    makeProduct('Cappuccino', 4.25, 'Coffee', 18, 'Medium'),
    makeProduct('Cappuccino', 4.75, 'Coffee', 16, 'Large'),
    makeProduct('Iced Tea', 2.5, 'Tea', 24, 'Small'),
    makeProduct('Iced Tea', 2.95, 'Tea', 22, 'Medium'),
    makeProduct('Iced Tea', 3.4, 'Tea', 18, 'Large'),
    makeProduct('Chicken Panini', 7.5, 'Food', 12),
  ];

  const el = {
    menuItems: document.querySelectorAll('.menu-item'),
    sectionTitle: document.getElementById('sectionTitle'),
    panels: {
      dashboard: document.getElementById('dashboard-panel'),
      checkout: document.getElementById('checkout-panel'),
      orders: document.getElementById('orders-panel'),
      customers: document.getElementById('customers-panel'),
      products: document.getElementById('products-panel'),
      transactions: document.getElementById('transactions-panel'),
      finance: document.getElementById('finance-panel'),
      settings: document.getElementById('settings-panel'),
    },
    menuToggle: document.getElementById('menuToggle'),
    overlay: document.getElementById('overlay'),
    liveTime: document.getElementById('live-time'),
    currentUser: document.getElementById('currentUser'),
    logoutBtn: document.getElementById('logoutBtn'),

    checkoutCategory: document.getElementById('checkoutCategory'),
    checkoutProducts: document.getElementById('checkoutProducts'),
    checkoutCustomerName: document.getElementById('checkoutCustomerName'),
    customerNameSuggestions: document.getElementById('customerNameSuggestions'),
    checkoutOrderType: document.getElementById('checkoutOrderType'),
    cartList: document.getElementById('cartList'),
    cartCount: document.getElementById('cartCount'),
    total: document.getElementById('total'),
    completeSaleBtn: document.getElementById('completeSaleBtn'),

    ordersTable: document.getElementById('ordersTable'),
    ordersPagination: document.getElementById('ordersPagination'),
    ordersFromDate: document.getElementById('ordersFromDate'),
    ordersToDate: document.getElementById('ordersToDate'),
    ordersFilterBtn: document.getElementById('ordersFilterBtn'),
    ordersClearBtn: document.getElementById('ordersClearBtn'),
    customerForm: document.getElementById('customerForm'),
    customerList: document.getElementById('customerList'),
    customersFromDate: document.getElementById('customersFromDate'),
    customersToDate: document.getElementById('customersToDate'),
    customersFilterBtn: document.getElementById('customersFilterBtn'),
    customersClearBtn: document.getElementById('customersClearBtn'),
    customersPagination: document.getElementById('customersPagination'),

    categoryForm: document.getElementById('categoryForm'),
    productForm: document.getElementById('productForm'),
    productCategory: document.getElementById('productCategory'),
    productBasePrice: document.getElementById('productBasePrice'),
    productIsDrink: document.getElementById('productIsDrink'),
    productSizeGroup: document.getElementById('productSizeGroup'),
    sizePriceFields: document.getElementById('sizePriceFields'),
    inventorySearch: document.getElementById('inventorySearch'),
    inventoryList: document.getElementById('inventoryList'),
    inventoryPagination: document.getElementById('inventoryPagination'),
    lowStockCount: document.getElementById('lowStockCount'),
    productEditDialog: document.getElementById('productEditDialog'),
    closeProductEdit: document.getElementById('closeProductEdit'),
    productEditForm: document.getElementById('productEditForm'),
    editProductId: document.getElementById('editProductId'),
    editProductName: document.getElementById('editProductName'),
    editProductSize: document.getElementById('editProductSize'),
    editProductPrice: document.getElementById('editProductPrice'),
    editProductStock: document.getElementById('editProductStock'),
    editProductCategory: document.getElementById('editProductCategory'),
    editProductImage: document.getElementById('editProductImage'),
    deleteProductBtn: document.getElementById('deleteProductBtn'),

    transactionsTable: document.getElementById('transactionsTable'),
    transactionsPagination: document.getElementById('transactionsPagination'),
    transactionsFromDate: document.getElementById('transactionsFromDate'),
    transactionsToDate: document.getElementById('transactionsToDate'),
    transactionsFilterBtn: document.getElementById('transactionsFilterBtn'),
    transactionsClearBtn: document.getElementById('transactionsClearBtn'),

    revenueValue: document.getElementById('revenueValue'),
    ordersValue: document.getElementById('ordersValue'),
    avgValue: document.getElementById('avgValue'),
    inventoryValue: document.getElementById('inventoryValue'),
    financeDrawerValue: document.getElementById('financeDrawerValue'),
    financeExpenseValue: document.getElementById('financeExpenseValue'),
    dashTodayRevenue: document.getElementById('dashTodayRevenue'),
    dashTodayOrders: document.getElementById('dashTodayOrders'),
    dashPendingOrders: document.getElementById('dashPendingOrders'),
    dashLowStock: document.getElementById('dashLowStock'),
    dashCategorySales: document.getElementById('dashCategorySales'),
    dashBestSellers: document.getElementById('dashBestSellers'),
    dashTopProducts: document.getElementById('dashTopProducts'),
    dashRecentOrders: document.getElementById('dashRecentOrders'),
    shiftForm: document.getElementById('shiftForm'),
    shiftOpenAmount: document.getElementById('shiftOpenAmount'),
    openShiftBtn: document.getElementById('openShiftBtn'),
    closeShiftBtn: document.getElementById('closeShiftBtn'),
    shiftStatus: document.getElementById('shiftStatus'),
    shiftOpeningAmount: document.getElementById('shiftOpeningAmount'),
    shiftDrawerAmount: document.getElementById('shiftDrawerAmount'),
    shiftLogList: document.getElementById('shiftLogList'),
    shiftLogsFromDate: document.getElementById('shiftLogsFromDate'),
    shiftLogsToDate: document.getElementById('shiftLogsToDate'),
    shiftLogsFilterBtn: document.getElementById('shiftLogsFilterBtn'),
    shiftLogsClearBtn: document.getElementById('shiftLogsClearBtn'),
    shiftLogsPagination: document.getElementById('shiftLogsPagination'),
    expenseForm: document.getElementById('expenseForm'),
    expenseNote: document.getElementById('expenseNote'),
    expenseAmount: document.getElementById('expenseAmount'),
    expenseList: document.getElementById('expenseList'),
    expensesFromDate: document.getElementById('expensesFromDate'),
    expensesToDate: document.getElementById('expensesToDate'),
    expensesFilterBtn: document.getElementById('expensesFilterBtn'),
    expensesClearBtn: document.getElementById('expensesClearBtn'),
    expensesPagination: document.getElementById('expensesPagination'),

    settingsForm: document.getElementById('settingsForm'),
    receiptQrImageInput: document.getElementById('receiptQrImageInput'),

    receiptDialog: document.getElementById('receiptDialog'),
    receiptText: document.getElementById('receiptText'),
    closeReceipt: document.getElementById('closeReceipt'),
    printReceipt: document.getElementById('printReceipt'),
    downloadReceipt: document.getElementById('downloadReceipt'),
    paymentDialog: document.getElementById('paymentDialog'),
    closePayment: document.getElementById('closePayment'),
    paymentForm: document.getElementById('paymentForm'),
    paymentOrderId: document.getElementById('paymentOrderId'),
    paymentOrderTotal: document.getElementById('paymentOrderTotal'),
    paymentMethodInput: document.getElementById('paymentMethodInput'),
    paymentReceivedInput: document.getElementById('paymentReceivedInput'),
    paymentChangeDisplay: document.getElementById('paymentChangeDisplay'),
    confirmPaidBtn: document.getElementById('confirmPaidBtn'),
    orderViewDialog: document.getElementById('orderViewDialog'),
    closeOrderView: document.getElementById('closeOrderView'),
    orderViewContent: document.getElementById('orderViewContent'),
    editOrderDialog: document.getElementById('editOrderDialog'),
    closeEditOrder: document.getElementById('closeEditOrder'),
    editOrderForm: document.getElementById('editOrderForm'),
    editOrderId: document.getElementById('editOrderId'),
    editOrderCustomerName: document.getElementById('editOrderCustomerName'),
    editOrderType: document.getElementById('editOrderType'),
    editOrderProductSelect: document.getElementById('editOrderProductSelect'),
    editOrderAddItemBtn: document.getElementById('editOrderAddItemBtn'),
    editOrderItems: document.getElementById('editOrderItems'),
    editOrderTotal: document.getElementById('editOrderTotal'),
    customerViewDialog: document.getElementById('customerViewDialog'),
    closeCustomerView: document.getElementById('closeCustomerView'),
    customerViewContent: document.getElementById('customerViewContent'),
    customerFromDate: document.getElementById('customerFromDate'),
    customerToDate: document.getElementById('customerToDate'),
    customerFilterBtn: document.getElementById('customerFilterBtn'),
    loginDialog: document.getElementById('loginDialog'),
    loginForm: document.getElementById('loginForm'),
    loginPasscode: document.getElementById('loginPasscode'),
    loginError: document.getElementById('loginError'),
  };

  let lastReceipt = '';
  let lastReceiptMeta = {
    orderId: null,
    paymentStatus: 'Unpaid',
  };
  let lastReceiptOrder = null;
  let activePaymentOrderId = null;
  let activeEditOrderId = null;
  let activeEditDraft = [];
  let activeEditProductId = null;
  let activeCustomerViewName = null;
  const PDF_FONT_URL = 'https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/notosans/NotoSans-Regular.ttf';
  const RECEIPT_FB_LINK = 'https://www.facebook.com/sipawhilecafe';
  let pdfFontBase64 = '';
  let pdfFontLoadAttempted = false;
  const pager = {
    ordersPage: 1,
    customersPage: 1,
    transactionsPage: 1,
    shiftLogsPage: 1,
    expensesPage: 1,
    inventoryPage: 1,
    pageSize: 8,
  };
  const dateFilters = {
    orders: { from: '', to: '' },
    customers: { from: '', to: '' },
    transactions: { from: '', to: '' },
    shiftLogs: { from: '', to: '' },
    expenses: { from: '', to: '' },
  };
  let apiEnabled = false;
  const ADMIN_PASSCODE = 'admin123';

  function idGen() {
    return Math.random().toString(36).slice(2, 10);
  }

  function makeProduct(name, price, categoryName, stock, size = '') {
    const category = state.categories.find((c) => c.name === categoryName) || state.categories[0];
    return { id: idGen(), name, size, price, categoryId: category.id, stock, image: '' };
  }

  function money(v) {
    return `₱${v.toFixed(2)}`;
  }

  function formatChange(change) {
    if (change >= 0) return money(change);
    return `Due ${money(Math.abs(change))}`;
  }

  function nowStamp() {
    const d = new Date();
    return d.toLocaleString();
  }

  function saveAuthSession(user) {
    localStorage.setItem('pos_auth', JSON.stringify(user));
  }

  function loadAuthSession() {
    try {
      const raw = localStorage.getItem('pos_auth');
      if (!raw) return null;
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  function clearAuthSession() {
    localStorage.removeItem('pos_auth');
  }

  function setAuthUser(user) {
    state.auth.isLoggedIn = Boolean(user);
    state.auth.user = user || null;
    el.currentUser.textContent = user ? `${user.username} (${user.role})` : 'Not signed in';
  }

  function addShiftLog(action, details) {
    state.shiftLogs.unshift({
      id: idGen(),
      action,
      details,
      time: nowStamp(),
    });
    state.shiftLogs = state.shiftLogs.slice(0, 30);
  }

  function requireLogin() {
    if (state.auth.isLoggedIn) {
      if (el.loginDialog.open) el.loginDialog.close();
      return;
    }
    if (!el.loginDialog.open) {
      el.loginDialog.showModal();
    }
  }

  function normalizeCategorySizes(raw) {
    return String(raw || '')
      .split(',')
      .map((size) => size.trim())
      .filter(Boolean);
  }

  function isDrinkCategoryName(name) {
    const value = String(name || '').toLowerCase();
    const drinkHints = ['drink', 'coffee', 'tea', 'juice', 'smoothie', 'frappe', 'beverage', 'milk'];
    return drinkHints.some((hint) => value.includes(hint));
  }

  function productDisplayName(product) {
    return product.size ? `${product.name} (${product.size})` : product.name;
  }

  function getProductFormSizes() {
    if (!el.productIsDrink.checked) return [];
    const selectedCategory = state.categories.find((c) => c.id === el.productCategory.value);
    const categorySizes = selectedCategory?.sizes || [];
    return categorySizes.length ? categorySizes : ['Small', 'Medium', 'Large'];
  }

  function updateProductSizeOptions() {
    const sizes = getProductFormSizes();

    if (!sizes.length) {
      el.productSizeGroup.style.display = 'none';
      el.sizePriceFields.innerHTML = '';
      el.productBasePrice.disabled = false;
      el.productBasePrice.required = true;
      return;
    }

    el.productSizeGroup.style.display = 'block';
    el.productBasePrice.disabled = true;
    el.productBasePrice.required = false;
    el.productBasePrice.value = '';
    el.sizePriceFields.innerHTML = sizes
      .map(
        (size, idx) =>
          `<input required type="number" min="0" step="0.01" data-size="${escapeHtml(size)}" name="sizePrice_${idx}" placeholder="${escapeHtml(size)} price" />`
      )
      .join('');
  }

  function totalPages(totalItems, pageSize) {
    return Math.max(1, Math.ceil(totalItems / pageSize));
  }

  function clampPage(page, maxPages) {
    return Math.min(Math.max(page, 1), maxPages);
  }

  function renderPagination(node, currentPage, totalPageCount, target) {
    if (!node) return;
    if (totalPageCount <= 1) {
      node.innerHTML = '';
      return;
    }

    const pageButtons = Array.from({ length: totalPageCount }, (_, idx) => {
      const page = idx + 1;
      const active = page === currentPage ? 'is-active' : '';
      return `<button type="button" class="${active}" data-page-target="${target}" data-page="${page}">${page}</button>`;
    }).join('');

    node.innerHTML = `
      <button type="button" data-page-target="${target}" data-page="${currentPage - 1}" ${currentPage <= 1 ? 'disabled' : ''}>Prev</button>
      ${pageButtons}
      <button type="button" data-page-target="${target}" data-page="${currentPage + 1}" ${currentPage >= totalPageCount ? 'disabled' : ''}>Next</button>
    `;
  }

  function arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    const chunk = 0x8000;
    let binary = '';
    for (let i = 0; i < bytes.length; i += chunk) {
      const slice = bytes.subarray(i, i + chunk);
      binary += String.fromCharCode.apply(null, slice);
    }
    return btoa(binary);
  }

  async function ensurePdfFontLoaded() {
    if (pdfFontBase64 || pdfFontLoadAttempted) return;
    pdfFontLoadAttempted = true;
    try {
      const response = await fetch(PDF_FONT_URL);
      if (!response.ok) return;
      const buffer = await response.arrayBuffer();
      pdfFontBase64 = arrayBufferToBase64(buffer);
    } catch {
      pdfFontBase64 = '';
    }
  }

  function setPdfFont(doc, size) {
    if (pdfFontBase64) {
      doc.addFileToVFS('NotoSans-Regular.ttf', pdfFontBase64);
      doc.addFont('NotoSans-Regular.ttf', 'NotoSans', 'normal');
      doc.setFont('NotoSans', 'normal');
    } else {
      doc.setFont('helvetica', 'normal');
    }
    doc.setFontSize(size);
  }

  async function buildQrDataUrl(value) {
    if (!window.QRCode || typeof window.QRCode.toDataURL !== 'function') return '';
    try {
      return await window.QRCode.toDataURL(value, {
        width: 220,
        margin: 1,
        color: {
          dark: '#111111',
          light: '#ffffff',
        },
      });
    } catch {
      return '';
    }
  }

  async function apiRequest(path, method = 'GET', body) {
    try {
      const response = await fetch(path, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : undefined,
      });
      if (!response.ok) return null;
      return await response.json();
    } catch {
      return null;
    }
  }

  function applyServerData(data) {
    if (!data) return;
    if (data.settings) {
      state.settings = {
        ...state.settings,
        ...data.settings,
      };
    }
    if (Array.isArray(data.categories)) state.categories = data.categories;
    if (Array.isArray(data.products)) state.products = data.products;
    if (Array.isArray(data.customers)) state.customers = data.customers;
    if (Array.isArray(data.orders)) state.orders = data.orders;
    if (Array.isArray(data.transactions)) state.transactions = data.transactions;
    if (Array.isArray(data.expenses)) state.expenses = data.expenses;
    if (data.shift) state.shift = data.shift;
  }

  function rerenderAll() {
    populateCategorySelectors();
    populateCustomers();
    setSettingsForm();
    renderCheckoutProducts();
    renderCart();
    renderOrders();
    renderInventory();
    renderTransactions();
    renderFinance();
    renderDashboard();
  }

  async function reloadFromApi() {
    const data = await apiRequest('/api/bootstrap', 'GET');
    if (!data) return false;
    apiEnabled = true;
    applyServerData(data);
    rerenderAll();
    return true;
  }

  function setSection(section) {
    state.activeSection = section;
    el.menuItems.forEach((btn) => btn.classList.toggle('is-active', btn.dataset.section === section));
    Object.entries(el.panels).forEach(([key, panel]) => {
      panel.classList.toggle('is-visible', key === section);
    });
    el.sectionTitle.textContent = section.charAt(0).toUpperCase() + section.slice(1);
    document.body.classList.remove('sidebar-open');
  }

  function populateCategorySelectors() {
    const options = [`<option value="all">All Categories</option>`]
      .concat(state.categories.map((c) => `<option value="${c.id}">${escapeHtml(c.name)}</option>`))
      .join('');
    el.checkoutCategory.innerHTML = options;

    el.productCategory.innerHTML = state.categories
      .map((c) => `<option value="${c.id}">${escapeHtml(c.name)}</option>`)
      .join('');
    updateProductSizeOptions();
  }

  function populateCustomers() {
    const uniqueNames = Array.from(
      new Set(
        state.customers
          .map((customer) => String(customer.name || '').trim())
          .filter(Boolean)
      )
    );
    el.customerNameSuggestions.innerHTML = uniqueNames
      .map((name) => `<option value="${escapeHtml(name)}"></option>`)
      .join('');
    renderCustomersList();
  }

  function renderCustomersList() {
    const fromDate = dateFilters.customers.from;
    const toDate = dateFilters.customers.to;
    const filteredCustomers = state.customers.filter((customer) => {
      if (!fromDate && !toDate) return true;
      const latestActivity = getCustomerLatestActivityDate(customer.name);
      if (!latestActivity) return false;
      return inDateRange(latestActivity, fromDate, toDate);
    });

    if (!filteredCustomers.length) {
      el.customerList.innerHTML = '<li><small>No customers found.</small></li>';
      renderPagination(el.customersPagination, 1, 1, 'customers');
      return;
    }

    const totalPageCount = totalPages(filteredCustomers.length, pager.pageSize);
    pager.customersPage = clampPage(pager.customersPage, totalPageCount);
    const start = (pager.customersPage - 1) * pager.pageSize;
    const end = start + pager.pageSize;
    const visibleCustomers = filteredCustomers.slice(start, end);

    el.customerList.innerHTML = visibleCustomers
      .map((c) => {
        const orders = state.orders.filter((o) => o.customerName.trim().toLowerCase() === c.name.trim().toLowerCase());
        const orderCodes = new Set(orders.map((o) => o.id));
        const transactions = state.transactions.filter((t) => orderCodes.has(t.orderId));
        return `
          <li data-customer-name="${escapeHtml(c.name)}">
            <div>
              <strong>${escapeHtml(c.name)}</strong>
              <small>${escapeHtml(c.phone)}</small>
              <small>Orders: ${orders.length} | Transactions: ${transactions.length}</small>
            </div>
            <div class="row-actions">
              <small>${escapeHtml(c.email || '-')}</small>
              <button type="button" class="secondary mini" data-view-customer="${escapeHtml(c.name)}">View</button>
            </div>
          </li>
        `;
      })
      .join('');

    renderPagination(el.customersPagination, pager.customersPage, totalPageCount, 'customers');
  }

  function inDateRange(value, fromDate, toDate) {
    const dt = new Date(value);
    if (Number.isNaN(dt.getTime())) return false;
    if (fromDate) {
      const from = new Date(fromDate);
      from.setHours(0, 0, 0, 0);
      if (dt < from) return false;
    }
    if (toDate) {
      const to = new Date(toDate);
      to.setHours(23, 59, 59, 999);
      if (dt > to) return false;
    }
    return true;
  }

  function getCustomerLatestActivityDate(customerName) {
    const normalized = String(customerName || '').trim().toLowerCase();
    if (!normalized) return '';
    const customer = state.customers.find((c) => String(c.name || '').trim().toLowerCase() === normalized);

    const latestOrder = state.orders
      .filter((o) => String(o.customerName || '').trim().toLowerCase() === normalized)
      .sort((a, b) => new Date(b.time) - new Date(a.time))[0];

    if (!latestOrder) return customer?.createdAt || '';

    const relatedTransactions = state.transactions
      .filter((t) => t.orderId === latestOrder.id)
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    return relatedTransactions[0]?.date || latestOrder.time || customer?.createdAt || '';
  }

  function renderCustomerView() {
    const normalized = String(activeCustomerViewName || '').trim().toLowerCase();
    if (!normalized) return;
    const fromDate = el.customerFromDate.value;
    const toDate = el.customerToDate.value;
    const customerOrders = state.orders.filter(
      (o) => o.customerName.trim().toLowerCase() === normalized && inDateRange(o.time, fromDate, toDate)
    );
    const orderIds = new Set(customerOrders.map((o) => o.id));
    const customerTransactions = state.transactions.filter((t) => orderIds.has(t.orderId) && inDateRange(t.date, fromDate, toDate));

    const orderRows = customerOrders
      .slice(0, 8)
      .map((o) => `<li><span>${escapeHtml(o.id)} • ${escapeHtml(o.paymentStatus)} • ${escapeHtml(o.fulfillmentStatus)}</span><strong>${money(o.total)}</strong></li>`)
      .join('');
    const transactionRows = customerTransactions
      .slice(0, 8)
      .map((t) => `<li><span>${escapeHtml(t.id)} • ${escapeHtml(t.method)}</span><strong>${money(t.amount)}</strong></li>`)
      .join('');

    el.customerViewContent.innerHTML = `
      <div class="ov-row"><small>Customer</small><strong>${escapeHtml(activeCustomerViewName)}</strong></div>
      <div class="ov-row"><small>Total Orders</small><strong>${customerOrders.length}</strong></div>
      <div class="ov-row"><small>Total Transactions</small><strong>${customerTransactions.length}</strong></div>
      <h4>Orders</h4>
      <ul class="ov-items">${orderRows || '<li><span>No orders yet.</span><strong>-</strong></li>'}</ul>
      <h4>Transactions</h4>
      <ul class="ov-items">${transactionRows || '<li><span>No transactions yet.</span><strong>-</strong></li>'}</ul>
    `;
  }

  function openCustomerView(customerName) {
    activeCustomerViewName = customerName;
    el.customerFromDate.value = '';
    el.customerToDate.value = '';
    renderCustomerView();
    el.customerViewDialog.showModal();
  }

  function renderCheckoutProducts() {
    const filter = el.checkoutCategory.value || 'all';
    const filtered = state.products.filter((p) => filter === 'all' || p.categoryId === filter);

    if (!filtered.length) {
      el.checkoutProducts.innerHTML = '<p>No products in this category.</p>';
      return;
    }

    const groups = new Map();
    filtered.forEach((product) => {
      const key = `${product.categoryId}::${product.name}`;
      if (!groups.has(key)) {
        groups.set(key, []);
      }
      groups.get(key).push(product);
    });

    const groupCards = Array.from(groups.values()).map((group) => {
      const base = group[0];
      const img = base.image ? `<img src="${base.image}" alt="${escapeHtml(base.name)}" />` : '';
      const sizeRows = group
        .map((product) => {
          const inCart = state.cart.get(product.id)?.qty || 0;
          const available = product.stock - inCart;
          const disabled = available <= 0 ? 'disabled' : '';
          const sizeLabel = product.size || 'Regular';
          return `
            <button class="size-option-btn" data-product-id="${product.id}" ${disabled}>
              <span>${escapeHtml(sizeLabel)}</span>
              <span>${money(product.price)}</span>
            </button>
          `;
        })
        .join('');

      const totalStock = group.reduce((sum, product) => sum + product.stock, 0);
      const stockClass = totalStock <= 5 ? 'stock low' : 'stock';
      return `
        <article class="product-card">
          ${img}
          <strong>${escapeHtml(base.name)}</strong>
          <div class="size-options">${sizeRows}</div>
          <p class="${stockClass}">Stock: ${totalStock}</p>
        </article>
      `;
    });

    el.checkoutProducts.innerHTML = groupCards.join('');
  }

  function renderCart() {
    const items = Array.from(state.cart.values());
    if (!items.length) {
      el.cartList.innerHTML = '<li><small>No items yet. Tap a product.</small></li>';
      el.cartCount.textContent = '0 items';
      el.total.textContent = '₱0.00';
      return;
    }

    let subtotal = 0;
    let qty = 0;
    el.cartList.innerHTML = items
      .map((item) => {
        subtotal += item.qty * item.price;
        qty += item.qty;
        return `
          <li class="cart-item" data-product-id="${item.id}">
            <div><strong>${escapeHtml(item.name)}</strong><small>${money(item.price)} each</small></div>
            <div class="qty">
              <button data-action="minus" type="button">-</button>
              <span>${item.qty}</span>
              <button data-action="plus" type="button">+</button>
            </div>
            <strong>${money(item.qty * item.price)}</strong>
          </li>
        `;
      })
      .join('');

    const total = subtotal;

    el.cartCount.textContent = `${qty} item${qty === 1 ? '' : 's'}`;
    el.total.textContent = money(total);
  }

  function buildReceiptText(orderLike) {
    const lines = [];
    lines.push(state.settings.cafeName);
    lines.push(state.settings.address);
    lines.push(state.settings.phone);
    lines.push('--------------------------------');
    lines.push(`Date: ${orderLike.time}`);
    lines.push(`Order: ${orderLike.id}`);
    lines.push(`Customer: ${orderLike.customerName}`);
    lines.push('--------------------------------');
    orderLike.items.forEach((item) => {
      lines.push(`${item.qty} x ${item.name} @ ${money(item.price)} = ${money(item.qty * item.price)}`);
    });
    lines.push('--------------------------------');
    lines.push(`TOTAL: ${money(orderLike.total)}`);
    if (orderLike.paymentStatus === 'Paid') {
      lines.push(`Received: ${money(orderLike.received || orderLike.total)}`);
      lines.push(`Change: ${money(orderLike.change || 0)}`);
    }
    lines.push('Thank you for visiting Sip Awhile Cafe');
    return lines.join('\n');
  }

  function getCartOrderLike() {
    const items = Array.from(state.cart.values());
    let subtotal = 0;
    items.forEach((i) => (subtotal += i.qty * i.price));
    const total = subtotal;

    const customName = String(el.checkoutCustomerName.value || '').trim();
    const customerName = customName || 'Walk-in Customer';
    return {
      id: `TMP-${Date.now().toString().slice(-6)}`,
      time: nowStamp(),
      customerName,
      items,
      subtotal,
      total,
      paymentMethod: 'Pending',
      paymentStatus: 'Unpaid',
      fulfillmentStatus: 'Preparing',
      orderType: el.checkoutOrderType.value || 'Dine In',
    };
  }

  function completeSale() {
    if (!state.cart.size) return;

    const orderLike = getCartOrderLike();
    const order = {
      id: `ORD-${Date.now().toString().slice(-6)}`,
      time: orderLike.time,
      customerName: orderLike.customerName,
      items: orderLike.items,
      total: orderLike.total,
      paymentMethod: orderLike.paymentMethod,
      paymentStatus: 'Unpaid',
      fulfillmentStatus: 'Preparing',
      orderType: orderLike.orderType,
      subtotal: orderLike.subtotal,
      received: 0,
      change: 0,
    };

    order.items.forEach((item) => {
      const p = state.products.find((product) => product.id === item.id);
      if (p) p.stock = Math.max(0, p.stock - item.qty);
    });

    state.orders.unshift(order);
    pager.ordersPage = 1;

    lastReceipt = buildReceiptText({ ...order, customerName: order.customerName });
    lastReceiptOrder = { ...order };
    lastReceiptMeta = {
      orderId: order.id,
      paymentStatus: order.paymentStatus,
    };
    state.cart.clear();

    renderCheckoutProducts();
    renderCart();
    renderOrders();
    renderTransactions();
    renderCustomersList();
    renderFinance();
    renderInventory();
    renderDashboard();
    setSection('orders');
  }

  function renderOrders() {
    const filteredOrders = state.orders.filter((order) =>
      inDateRange(order.time, dateFilters.orders.from, dateFilters.orders.to)
    );

    if (!filteredOrders.length) {
      el.ordersTable.innerHTML = '<tr><td colspan="10">No orders found.</td></tr>';
      renderPagination(el.ordersPagination, 1, 1, 'orders');
      return;
    }

    const totalPageCount = totalPages(filteredOrders.length, pager.pageSize);
    pager.ordersPage = clampPage(pager.ordersPage, totalPageCount);
    const start = (pager.ordersPage - 1) * pager.pageSize;
    const end = start + pager.pageSize;
    const visibleOrders = filteredOrders.slice(start, end);

    el.ordersTable.innerHTML = visibleOrders
      .map(
        (o) => `<tr data-order-id="${o.id}">
          <td>${o.id}</td>
          <td>${o.time}</td>
          <td>${escapeHtml(o.customerName)}</td>
          <td>${escapeHtml(o.orderType || 'Dine In')}</td>
          <td>${o.items.length}</td>
          <td>${money(o.total)}</td>
          <td><span class="status ${o.paymentStatus === 'Paid' ? 'ok' : 'warn'}">${o.paymentStatus}</span></td>
          <td><span class="status ${o.fulfillmentStatus === 'Completed' ? 'ok' : 'muted'}">${o.fulfillmentStatus}</span></td>
          <td>${o.paymentMethod}</td>
          <td class="table-actions">
            <button type="button" class="secondary mini" data-order-action="receipt" data-order-id="${o.id}">Receipt</button>
            <button type="button" class="secondary mini" data-order-action="edit" data-order-id="${o.id}" ${o.paymentStatus === 'Paid' ? 'disabled' : ''}>Edit</button>
            <button type="button" class="secondary mini" data-order-action="pay" data-order-id="${o.id}" ${o.paymentStatus === 'Paid' ? 'disabled' : ''}>Mark Paid</button>
            <button type="button" class="primary mini" data-order-action="complete" data-order-id="${o.id}" ${(o.fulfillmentStatus === 'Completed' || o.paymentStatus !== 'Paid') ? 'disabled' : ''}>Mark Complete</button>
          </td>
        </tr>`
      )
      .join('');
    renderPagination(el.ordersPagination, pager.ordersPage, totalPageCount, 'orders');
  }

  function openOrderView(orderId) {
    const order = state.orders.find((o) => o.id === orderId);
    if (!order) return;

    const itemsHtml = order.items
      .map((item) => `<li><span>${item.qty}x ${escapeHtml(item.name)}</span><strong>${money(item.qty * item.price)}</strong></li>`)
      .join('');

    el.orderViewContent.innerHTML = `
      <div class="ov-row"><small>Order ID</small><strong>${order.id}</strong></div>
      <div class="ov-row"><small>Time</small><strong>${escapeHtml(order.time)}</strong></div>
      <div class="ov-row"><small>Customer</small><strong>${escapeHtml(order.customerName)}</strong></div>
      <div class="ov-row"><small>Type</small><strong>${escapeHtml(order.orderType || 'Dine In')}</strong></div>
      <div class="ov-row"><small>Payment</small><strong>${escapeHtml(order.paymentStatus)}</strong></div>
      <div class="ov-row"><small>Order</small><strong>${escapeHtml(order.fulfillmentStatus)}</strong></div>
      <div class="ov-row"><small>Method</small><strong>${escapeHtml(order.paymentMethod)}</strong></div>
      <ul class="ov-items">${itemsHtml}</ul>
      <div class="ov-row"><small>Total</small><strong>${money(order.total)}</strong></div>
    `;
    el.orderViewDialog.showModal();
  }

  function renderEditOrderDraft() {
    const order = state.orders.find((o) => o.id === activeEditOrderId);
    if (!order) return;

    const originalQtyMap = new Map(order.items.map((item) => [item.id, item.qty]));
    const addableProducts = state.products.filter((product) => {
      const oldQty = originalQtyMap.get(product.id) || 0;
      return product.stock + oldQty > 0;
    });
    el.editOrderProductSelect.innerHTML = addableProducts
      .map((product) => `<option value="${product.id}">${escapeHtml(productDisplayName(product))} (${money(product.price)})</option>`)
      .join('');

    let total = 0;
    el.editOrderItems.innerHTML = activeEditDraft
      .map((item) => {
        const originalQty = originalQtyMap.get(item.id) || 0;
        const product = state.products.find((p) => p.id === item.id);
        const maxQty = originalQty + (product?.stock || 0);
        total += item.qty * item.price;
        return `
          <li class="cart-item" data-edit-item-id="${item.id}">
            <div><strong>${escapeHtml(item.name)}</strong><small>${money(item.price)} each</small></div>
            <div class="qty">
              <button data-edit-action="minus" type="button">-</button>
              <span>${item.qty}</span>
              <button data-edit-action="plus" type="button" ${item.qty >= maxQty ? 'disabled' : ''}>+</button>
            </div>
            <div style="display:grid;justify-items:end;gap:6px;">
              <strong>${money(item.qty * item.price)}</strong>
              <button class="secondary mini" data-edit-action="remove" type="button">Remove</button>
            </div>
          </li>
        `;
      })
      .join('');
    if (!activeEditDraft.length) {
      el.editOrderItems.innerHTML = '<li><small>No items. Add an item before saving.</small></li>';
    }
    el.editOrderTotal.textContent = money(total);
  }

  function openEditOrder(orderId) {
    const order = state.orders.find((o) => o.id === orderId);
    if (!order || order.paymentStatus === 'Paid') return;
    activeEditOrderId = orderId;
    activeEditDraft = order.items.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      qty: item.qty,
    }));
    el.editOrderId.value = `Order: ${order.id}`;
    el.editOrderCustomerName.value = order.customerName || '';
    el.editOrderType.value = order.orderType || 'Dine In';
    renderEditOrderDraft();
    el.editOrderDialog.showModal();
  }

  function updateEditDraftQty(itemId, mode) {
    const order = state.orders.find((o) => o.id === activeEditOrderId);
    if (!order) return;
    const draftItem = activeEditDraft.find((item) => item.id === itemId);
    if (!draftItem) return;

    const originalQty = order.items.find((item) => item.id === itemId)?.qty || 0;
    const product = state.products.find((p) => p.id === itemId);
    const maxQty = originalQty + (product?.stock || 0);

    if (mode === 'plus' && draftItem.qty < maxQty) draftItem.qty += 1;
    if (mode === 'minus' && draftItem.qty > 1) draftItem.qty -= 1;
    if (mode === 'remove') {
      activeEditDraft = activeEditDraft.filter((item) => item.id !== itemId);
    }
    renderEditOrderDraft();
  }

  function addEditOrderItem(productId) {
    const order = state.orders.find((o) => o.id === activeEditOrderId);
    const product = state.products.find((p) => p.id === productId);
    if (!order || !product) return;

    const originalQty = order.items.find((item) => item.id === product.id)?.qty || 0;
    const draftItem = activeEditDraft.find((item) => item.id === product.id);
    const currentQty = draftItem?.qty || 0;
    const maxQty = originalQty + product.stock;
    if (currentQty >= maxQty) {
      window.alert('No more stock available for this item.');
      return;
    }

    if (draftItem) {
      draftItem.qty += 1;
    } else {
      activeEditDraft.push({
        id: product.id,
        name: productDisplayName(product),
        price: product.price,
        qty: 1,
      });
    }
    renderEditOrderDraft();
  }

  function saveEditedOrder() {
    const order = state.orders.find((o) => o.id === activeEditOrderId);
    if (!order || order.paymentStatus === 'Paid') return;
    if (!activeEditDraft.length) {
      window.alert('Order must have at least one item.');
      return;
    }

    const originalQtyMap = new Map(order.items.map((item) => [item.id, item.qty]));
    const draftQtyMap = new Map(activeEditDraft.map((item) => [item.id, item.qty]));
    const allIds = new Set([...originalQtyMap.keys(), ...draftQtyMap.keys()]);
    for (const productId of allIds) {
      const oldQty = originalQtyMap.get(productId) || 0;
      const newQty = draftQtyMap.get(productId) || 0;
      const product = state.products.find((p) => p.id === productId);
      if (!product) continue;
      const delta = newQty - oldQty;
      if (delta > product.stock) {
        const display = activeEditDraft.find((item) => item.id === productId)?.name || productDisplayName(product);
        window.alert(`Not enough stock for ${display}.`);
        return;
      }
    }

    for (const productId of allIds) {
      const oldQty = originalQtyMap.get(productId) || 0;
      const newQty = draftQtyMap.get(productId) || 0;
      const product = state.products.find((p) => p.id === productId);
      if (!product) continue;
      const delta = newQty - oldQty;
      product.stock -= delta;
    }

    order.customerName = String(el.editOrderCustomerName.value || '').trim() || 'Walk-in Customer';
    order.orderType = el.editOrderType.value || 'Dine In';
    order.items = activeEditDraft.map((item) => ({ ...item }));
    order.total = order.items.reduce((sum, item) => sum + item.qty * item.price, 0);

    if (lastReceiptMeta.orderId === order.id) {
      lastReceipt = buildReceiptText(order);
      lastReceiptOrder = { ...order };
      lastReceiptMeta.paymentStatus = order.paymentStatus;
    }

    activeEditOrderId = null;
    activeEditDraft = [];
    el.editOrderDialog.close();
    renderOrders();
    renderTransactions();
    renderCustomersList();
    renderFinance();
    renderInventory();
    renderDashboard();
  }

  function canCompleteOrder(order) {
    return order.paymentStatus === 'Paid' && order.fulfillmentStatus !== 'Completed';
  }

  function markOrderPaid(orderId) {
    const order = state.orders.find((o) => o.id === orderId);
    if (!order || order.paymentStatus === 'Paid') return;
    activePaymentOrderId = orderId;
    el.paymentOrderId.value = `Order: ${order.id}`;
    el.paymentOrderTotal.value = `Total: ${money(order.total)}`;
    el.paymentMethodInput.value = order.paymentMethod !== 'Pending' ? order.paymentMethod : 'Cash';
    el.paymentReceivedInput.value = order.total.toFixed(2);
    el.paymentChangeDisplay.textContent = '₱0.00';
    el.confirmPaidBtn.disabled = false;
    el.paymentDialog.showModal();
  }

  function updatePaymentChangePreview() {
    if (!activePaymentOrderId) return;
    const order = state.orders.find((o) => o.id === activePaymentOrderId);
    if (!order) return;

    const received = Number(el.paymentReceivedInput.value || 0);
    const change = received - order.total;
    el.paymentChangeDisplay.textContent = formatChange(change);
    el.confirmPaidBtn.disabled = Number.isNaN(received) || received < order.total;
  }

  function submitMarkPaid() {
    if (!activePaymentOrderId) return;
    const order = state.orders.find((o) => o.id === activePaymentOrderId);
    if (!order || order.paymentStatus === 'Paid') return;

    const received = Number(el.paymentReceivedInput.value || 0);
    if (Number.isNaN(received) || received < order.total) {
      window.alert('Payment received must be equal to or greater than total.');
      return;
    }

    const selectedMethod = el.paymentMethodInput.value || 'Cash';
    if (selectedMethod === 'Cash' && !state.shift.isOpen) {
      window.alert('Open shift first before accepting cash payments.');
      return;
    }

    order.paymentStatus = 'Paid';
    order.paymentMethod = selectedMethod;
    order.received = received;
    order.change = received - order.total;
    if (order.paymentMethod === 'Cash') {
      state.shift.drawerAmount += order.total;
      state.shift.changeReturned += order.change;
      addShiftLog('Cash In', `${order.id}: +${money(order.total)} (change ${money(order.change)})`);
    }

    if (lastReceiptMeta.orderId === order.id) {
      lastReceipt = buildReceiptText(order);
      lastReceiptOrder = { ...order };
      lastReceiptMeta.paymentStatus = 'Paid';
    }

    state.transactions.unshift({
      id: `TXN-${Date.now().toString().slice(-6)}`,
      orderId: order.id,
      date: nowStamp(),
      method: order.paymentMethod,
      amount: order.total,
    });

    activePaymentOrderId = null;
    el.paymentDialog.close();

    renderOrders();
    renderTransactions();
    renderCustomersList();
    renderFinance();
    renderDashboard();
  }

  function markOrderComplete(orderId) {
    const order = state.orders.find((o) => o.id === orderId);
    if (!order || order.fulfillmentStatus === 'Completed') return;

    if (!canCompleteOrder(order)) {
      window.alert('This order is still unpaid. Please Mark Paid first.');
      return;
    }

    order.fulfillmentStatus = 'Completed';
    renderOrders();
    renderDashboard();
  }

  function openOrderReceipt(orderId) {
    const order = state.orders.find((o) => o.id === orderId);
    if (!order) return;
    openReceipt(buildReceiptText(order), {
      orderId: order.id,
      paymentStatus: order.paymentStatus,
      orderData: { ...order },
    });
  }

  function renderTransactions() {
    const filteredTransactions = state.transactions.filter((tx) =>
      inDateRange(tx.date, dateFilters.transactions.from, dateFilters.transactions.to)
    );

    if (!filteredTransactions.length) {
      el.transactionsTable.innerHTML = '<tr><td colspan="5">No transactions found.</td></tr>';
      renderPagination(el.transactionsPagination, 1, 1, 'transactions');
      return;
    }

    const totalPageCount = totalPages(filteredTransactions.length, pager.pageSize);
    pager.transactionsPage = clampPage(pager.transactionsPage, totalPageCount);
    const start = (pager.transactionsPage - 1) * pager.pageSize;
    const end = start + pager.pageSize;
    const visibleTransactions = filteredTransactions.slice(start, end);

    el.transactionsTable.innerHTML = visibleTransactions
      .map((t) => `<tr><td>${t.id}</td><td>${t.orderId}</td><td>${t.date}</td><td>${t.method}</td><td>${money(t.amount)}</td></tr>`)
      .join('');
    renderPagination(el.transactionsPagination, pager.transactionsPage, totalPageCount, 'transactions');
  }

  function renderFinance() {
    const revenue = state.transactions.reduce((sum, t) => sum + t.amount, 0);
    const orderCount = state.orders.length;
    const avg = orderCount ? revenue / orderCount : 0;
    const inventoryUnits = state.products.reduce((sum, p) => sum + p.stock, 0);
    const totalExpenses = state.expenses.reduce((sum, item) => sum + item.amount, 0);

    el.revenueValue.textContent = money(revenue);
    el.ordersValue.textContent = String(orderCount);
    el.avgValue.textContent = money(avg);
    el.inventoryValue.textContent = String(inventoryUnits);
    el.financeDrawerValue.textContent = money(state.shift.drawerAmount);
    el.financeExpenseValue.textContent = money(totalExpenses);
    renderShiftLogs();
    renderExpenses();
  }

  function renderShiftLogs() {
    const filteredLogs = state.shiftLogs.filter((log) =>
      inDateRange(log.time, dateFilters.shiftLogs.from, dateFilters.shiftLogs.to)
    );
    if (!filteredLogs.length) {
      el.shiftLogList.innerHTML = '<li><small>No shift logs yet.</small></li>';
      renderPagination(el.shiftLogsPagination, 1, 1, 'shiftLogs');
      return;
    }

    const totalPageCount = totalPages(filteredLogs.length, pager.pageSize);
    pager.shiftLogsPage = clampPage(pager.shiftLogsPage, totalPageCount);
    const start = (pager.shiftLogsPage - 1) * pager.pageSize;
    const end = start + pager.pageSize;
    const visibleLogs = filteredLogs.slice(start, end);

    const shiftLogRows = visibleLogs
      .map(
        (log) =>
          `<li><div><strong>${escapeHtml(log.action)}</strong><small>${escapeHtml(log.time)}</small></div><small>${escapeHtml(log.details)}</small></li>`
      )
      .join('');
    el.shiftLogList.innerHTML = shiftLogRows;
    renderPagination(el.shiftLogsPagination, pager.shiftLogsPage, totalPageCount, 'shiftLogs');
  }

  function renderExpenses() {
    const filteredExpenses = state.expenses.filter((item) =>
      inDateRange(item.time, dateFilters.expenses.from, dateFilters.expenses.to)
    );
    if (!filteredExpenses.length) {
      el.expenseList.innerHTML = '<li><small>No expenses yet.</small></li>';
      renderPagination(el.expensesPagination, 1, 1, 'expenses');
      return;
    }

    const totalPageCount = totalPages(filteredExpenses.length, pager.pageSize);
    pager.expensesPage = clampPage(pager.expensesPage, totalPageCount);
    const start = (pager.expensesPage - 1) * pager.pageSize;
    const end = start + pager.pageSize;
    const visibleExpenses = filteredExpenses.slice(start, end);

    const expenseRows = visibleExpenses
      .map((item) => `<li><span>${escapeHtml(item.note)}</span><strong>${money(item.amount)}</strong></li>`)
      .join('');
    el.expenseList.innerHTML = expenseRows;
    renderPagination(el.expensesPagination, pager.expensesPage, totalPageCount, 'expenses');
  }

  function renderDashboard() {
    const now = new Date();
    const isSameDay = (value) => {
      const dt = new Date(value);
      if (Number.isNaN(dt.getTime())) return false;
      return (
        dt.getFullYear() === now.getFullYear() &&
        dt.getMonth() === now.getMonth() &&
        dt.getDate() === now.getDate()
      );
    };

    const todayPaidOrders = state.orders.filter((o) => isSameDay(o.time) && o.paymentStatus === 'Paid');
    const todayRevenue = todayPaidOrders.reduce((sum, order) => sum + order.total, 0);
    const pendingOrders = state.orders.filter((o) => o.fulfillmentStatus !== 'Completed').length;
    const lowStockItems = state.products.filter((p) => p.stock <= 5).length;

    el.dashTodayRevenue.textContent = money(todayRevenue);
    el.dashTodayOrders.textContent = String(todayPaidOrders.length);
    el.dashPendingOrders.textContent = String(pendingOrders);
    el.dashLowStock.textContent = String(lowStockItems);
    el.shiftStatus.textContent = state.shift.isOpen ? 'Open' : 'Closed';
    el.shiftOpeningAmount.textContent = money(state.shift.openingAmount);
    el.shiftDrawerAmount.textContent = money(state.shift.drawerAmount);

    const productById = new Map(state.products.map((p) => [p.id, p]));
    const categoryRevenue = new Map();
    const soldByCategory = new Map();
    const soldByProduct = new Map();

    state.orders
      .filter((o) => o.paymentStatus === 'Paid')
      .forEach((order) => {
        order.items.forEach((item) => {
          const product = productById.get(item.id);
          const categoryId = product?.categoryId || 'uncategorized';
          const categoryName = state.categories.find((c) => c.id === categoryId)?.name || 'Uncategorized';
          const itemRevenue = item.qty * item.price;

          categoryRevenue.set(categoryName, (categoryRevenue.get(categoryName) || 0) + itemRevenue);

          const byCat = soldByCategory.get(categoryName) || new Map();
          byCat.set(item.name, (byCat.get(item.name) || 0) + item.qty);
          soldByCategory.set(categoryName, byCat);

          soldByProduct.set(item.name, (soldByProduct.get(item.name) || 0) + item.qty);
        });
      });

    const categoryRows = Array.from(categoryRevenue.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([name, amount]) => `<li><span>${escapeHtml(name)}</span><strong>${money(amount)}</strong></li>`)
      .join('');
    el.dashCategorySales.innerHTML = categoryRows || '<li><small>No sales yet.</small></li>';

    const bestSellerRows = state.categories
      .map((category) => {
        const byProduct = soldByCategory.get(category.name);
        if (!byProduct || !byProduct.size) {
          return `<li><span>${escapeHtml(category.name)}</span><strong>No sales yet</strong></li>`;
        }
        const best = Array.from(byProduct.entries()).sort((a, b) => b[1] - a[1])[0];
        return `<li><span>${escapeHtml(category.name)}</span><strong>${escapeHtml(best[0])} (${best[1]})</strong></li>`;
      })
      .join('');
    el.dashBestSellers.innerHTML = bestSellerRows || '<li><small>No best sellers yet.</small></li>';

    const topProductRows = Array.from(soldByProduct.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, qty]) => `<li><span>${escapeHtml(name)}</span><strong>${qty} sold</strong></li>`)
      .join('');
    el.dashTopProducts.innerHTML = topProductRows || '<li><small>No products sold yet.</small></li>';

    const recentRows = state.orders
      .slice(0, 5)
      .map(
        (o) =>
          `<li><span>${escapeHtml(o.id)} • ${escapeHtml(o.customerName)}</span><strong>${money(o.total)}</strong></li>`
      )
      .join('');
    el.dashRecentOrders.innerHTML = recentRows || '<li><small>No recent orders.</small></li>';

  }

  function renderInventory() {
    const query = String(el.inventorySearch.value || '').trim().toLowerCase();
    const visibleProducts = state.products.filter((p) => {
      if (!query) return true;
      const categoryName = state.categories.find((c) => c.id === p.categoryId)?.name || '';
      const haystack = `${p.name} ${p.size || ''} ${categoryName}`.toLowerCase();
      return haystack.includes(query);
    });
    const lowStock = visibleProducts.filter((p) => p.stock <= 5);
    el.lowStockCount.textContent = `${lowStock.length} low stock`;

    if (!visibleProducts.length) {
      el.inventoryList.innerHTML = '<li>No matching products.</li>';
      renderPagination(el.inventoryPagination, 1, 1, 'inventory');
      return;
    }

    const totalPageCount = totalPages(visibleProducts.length, pager.pageSize);
    pager.inventoryPage = clampPage(pager.inventoryPage, totalPageCount);
    const start = (pager.inventoryPage - 1) * pager.pageSize;
    const end = start + pager.pageSize;
    const pagedProducts = visibleProducts.slice(start, end);

    el.inventoryList.innerHTML = pagedProducts
      .map((p) => {
        const categoryName = state.categories.find((c) => c.id === p.categoryId)?.name || '-';
        return `
          <li class="${p.stock <= 5 ? 'low' : ''}" data-product-id="${p.id}">
            <div>
              <strong>${escapeHtml(productDisplayName(p))}</strong>
              <small>${escapeHtml(categoryName)} | ${money(p.price)} | Stock: ${p.stock}</small>
            </div>
            <div class="inventory-controls">
              <button type="button" data-stock="minus">-</button>
              <button type="button" data-stock="plus">+</button>
              <button type="button" class="secondary mini" data-product-action="edit">Edit</button>
              <button type="button" class="secondary mini" data-product-action="delete">Delete</button>
            </div>
          </li>
        `;
      })
      .join('');
    renderPagination(el.inventoryPagination, pager.inventoryPage, totalPageCount, 'inventory');
  }

  function openProductEditor(productId) {
    const product = state.products.find((p) => p.id === productId);
    if (!product) return;
    activeEditProductId = productId;
    el.editProductCategory.innerHTML = state.categories
      .map((category) => `<option value="${category.id}">${escapeHtml(category.name)}</option>`)
      .join('');
    el.editProductId.value = `Product: ${product.id}`;
    el.editProductName.value = product.name;
    el.editProductSize.value = product.size || '';
    el.editProductPrice.value = Number(product.price).toFixed(2);
    el.editProductStock.value = String(product.stock);
    el.editProductCategory.value = product.categoryId;
    el.editProductImage.value = '';
    el.productEditDialog.showModal();
  }

  function closeProductEditor() {
    activeEditProductId = null;
    if (el.productEditForm) el.productEditForm.reset();
    if (el.productEditDialog.open) el.productEditDialog.close();
  }

  async function saveProductEditor() {
    if (!activeEditProductId) return;
    const product = state.products.find((p) => p.id === activeEditProductId);
    if (!product) return;

    const name = String(el.editProductName.value || '').trim();
    const size = String(el.editProductSize.value || '').trim();
    const price = Number(el.editProductPrice.value || 0);
    const stock = Number(el.editProductStock.value || 0);
    const categoryId = String(el.editProductCategory.value || '');
    if (!name || !categoryId || Number.isNaN(price) || price < 0 || Number.isNaN(stock) || stock < 0) {
      window.alert('Enter valid product values.');
      return;
    }

    const imageFile = el.editProductImage.files?.[0];
    const image = imageFile ? await fileToDataUrl(imageFile) : product.image;

    product.name = name;
    product.size = size;
    product.price = price;
    product.stock = stock;
    product.categoryId = categoryId;
    product.image = image;

    const cartItem = state.cart.get(product.id);
    if (cartItem) {
      cartItem.name = productDisplayName(product);
      cartItem.price = product.price;
      if (cartItem.qty > product.stock) {
        cartItem.qty = product.stock;
        if (cartItem.qty <= 0) state.cart.delete(product.id);
      }
    }

    closeProductEditor();
    renderCheckoutProducts();
    renderCart();
    renderInventory();
    renderFinance();
    renderDashboard();
  }

  function deleteProductById(productId) {
    const product = state.products.find((p) => p.id === productId);
    if (!product) return;
    const ok = window.confirm(`Delete ${productDisplayName(product)}?`);
    if (!ok) return;

    state.products = state.products.filter((p) => p.id !== productId);
    state.cart.delete(productId);
    if (activeEditProductId === productId) closeProductEditor();

    renderCheckoutProducts();
    renderCart();
    renderInventory();
    renderFinance();
    renderDashboard();
  }

  function setSettingsForm() {
    el.settingsForm.cafeName.value = state.settings.cafeName;
    el.settingsForm.address.value = state.settings.address;
    el.settingsForm.phone.value = state.settings.phone;
  }

  function updateReceiptActions() {
    const canDownload = lastReceiptMeta.paymentStatus === 'Paid';
    el.downloadReceipt.disabled = !canDownload;
  }

  function openReceipt(text, meta = {}) {
    if (!text) return;
    lastReceipt = text;
    lastReceiptOrder = meta.orderData || lastReceiptOrder;
    lastReceiptMeta = {
      orderId: meta.orderId ?? null,
      paymentStatus: meta.paymentStatus || 'Unpaid',
    };
    el.receiptText.textContent = text;
    updateReceiptActions();
    el.receiptDialog.showModal();
  }

  async function drawThermalReceiptPdf(order) {
    const jsPdfLib = window.jspdf;
    const { jsPDF } = jsPdfLib;
    const width = 80;
    const lineHeight = 4.8;
    const baseHeight = 122;
    const itemsHeight = Math.max(1, order.items.length) * 6.2;
    const height = baseHeight + itemsHeight;

    const doc = new jsPDF({ unit: 'mm', format: [width, height] });
    const centerX = width / 2;
    let y = 10;

    const hr = () => {
      doc.setLineDashPattern([1, 1], 0);
      doc.line(6, y, width - 6, y);
      doc.setLineDashPattern([], 0);
      y += 4;
    };

    setPdfFont(doc, 11);
    doc.text(state.settings.cafeName.toUpperCase(), centerX, y, { align: 'center' });
    y += 5;

    setPdfFont(doc, 8.5);
    doc.text(state.settings.address, centerX, y, { align: 'center' });
    y += 4;
    doc.text(state.settings.phone, centerX, y, { align: 'center' });
    y += 5;
    hr();

    setPdfFont(doc, 8.5);
    doc.text(`Date: ${order.time}`, 6, y);
    y += lineHeight;
    doc.text(`Order: ${order.id}`, 6, y);
    y += lineHeight;
    doc.text(`Customer: ${order.customerName}`, 6, y);
    y += lineHeight;
    doc.text(`Type: ${order.orderType || 'Dine In'}`, 6, y);
    y += 4;
    hr();

    setPdfFont(doc, 8.5);
    doc.text('Item', 6, y);
    doc.text('Total', width - 6, y, { align: 'right' });
    y += 3;
    hr();

    setPdfFont(doc, 8.5);
    order.items.forEach((item) => {
      const itemName = `${item.qty}x ${item.name}`;
      const clipped = itemName.length > 24 ? `${itemName.slice(0, 24)}...` : itemName;
      doc.text(clipped, 6, y);
      doc.text(money(item.qty * item.price), width - 6, y, { align: 'right' });
      y += lineHeight;
    });
    hr();

    setPdfFont(doc, 10.5);
    doc.text('TOTAL', 6, y);
    doc.text(money(order.total), width - 6, y, { align: 'right' });
    y += 6;

    setPdfFont(doc, 8.5);
    if (order.paymentStatus === 'Paid') {
      doc.text('Received', 6, y);
      doc.text(money(order.received || order.total), width - 6, y, { align: 'right' });
      y += lineHeight;
      doc.text('Change', 6, y);
      doc.text(money(order.change || 0), width - 6, y, { align: 'right' });
      y += 4;
    }

    hr();

    const qrSize = 24;
    const qrX = (width - qrSize) / 2;
    const qrY = y + 2;
    const qrDataUrl = state.settings.receiptQrImage || (await buildQrDataUrl(RECEIPT_FB_LINK));
    if (qrDataUrl) {
      doc.addImage(qrDataUrl, 'PNG', qrX, qrY, qrSize, qrSize);
      y = qrY + qrSize + 4;
    } else {
      doc.setFontSize(7);
      doc.text(RECEIPT_FB_LINK, centerX, qrY + 4, { align: 'center' });
      y = qrY + 9;
    }

    setPdfFont(doc, 8);
    doc.text(new Date().toLocaleDateString(), 6, y);
    doc.text(order.id, width - 6, y, { align: 'right' });
    y += 5;

    hr();
    setPdfFont(doc, 9);
    doc.text('Thank you for your purchase!', centerX, y, { align: 'center' });

    doc.save(`receipt-${order.id}.pdf`);
  }

  async function drawThermalReceiptHtmlPdf(order) {
    const jsPdfLib = window.jspdf;
    const html2canvasLib = window.html2canvas;
    if (!jsPdfLib || !jsPdfLib.jsPDF || !html2canvasLib) return false;

    const qrDataUrl = state.settings.receiptQrImage || (await buildQrDataUrl(RECEIPT_FB_LINK));
    const temp = document.createElement('div');
    temp.style.position = 'fixed';
    temp.style.left = '-10000px';
    temp.style.top = '0';
    temp.style.width = '300px';
    temp.style.padding = '16px';
    temp.style.background = '#ffffff';
    temp.style.color = '#111111';
    temp.style.fontFamily = 'Arial, sans-serif';
    temp.style.fontSize = '13px';
    temp.style.lineHeight = '1.4';

    const items = order.items
      .map(
        (item) =>
          `<div style="display:flex;justify-content:space-between;gap:8px;"><span>${escapeHtml(item.qty + 'x ' + item.name)}</span><strong>${money(
            item.qty * item.price
          )}</strong></div>`
      )
      .join('');

    const receivedRows =
      order.paymentStatus === 'Paid'
        ? `<div style="display:flex;justify-content:space-between;"><span>Received</span><strong>${money(
            order.received || order.total
          )}</strong></div>
          <div style="display:flex;justify-content:space-between;"><span>Change</span><strong>${money(order.change || 0)}</strong></div>`
        : '';

    temp.innerHTML = `
      <div style="text-align:center;font-weight:700;font-size:17px;">${escapeHtml(state.settings.cafeName)}</div>
      <div style="text-align:center;">${escapeHtml(state.settings.address)}</div>
      <div style="text-align:center;margin-bottom:8px;">${escapeHtml(state.settings.phone)}</div>
      <div style="border-top:1px dashed #444;margin:8px 0;"></div>
      <div>Date: ${escapeHtml(order.time)}</div>
      <div>Order: ${escapeHtml(order.id)}</div>
      <div>Customer: ${escapeHtml(order.customerName)}</div>
      <div>Type: ${escapeHtml(order.orderType || 'Dine In')}</div>
      <div style="border-top:1px dashed #444;margin:8px 0;"></div>
      ${items}
      <div style="border-top:1px dashed #444;margin:8px 0;"></div>
      <div style="display:flex;justify-content:space-between;font-weight:700;font-size:15px;">
        <span>TOTAL</span><span>${money(order.total)}</span>
      </div>
      ${receivedRows}
      <div style="border-top:1px dashed #444;margin:8px 0;"></div>
      ${
        qrDataUrl
          ? `<div style="text-align:center;"><img src="${qrDataUrl}" alt="QR" style="width:90px;height:90px;object-fit:contain;" /></div>`
          : `<div style="text-align:center;font-size:11px;">${escapeHtml(RECEIPT_FB_LINK)}</div>`
      }
      <div style="text-align:center;margin-top:8px;font-weight:700;">Thank you for your purchase!</div>
    `;

    document.body.appendChild(temp);
    const canvas = await html2canvasLib(temp, { scale: 2, backgroundColor: '#ffffff' });
    document.body.removeChild(temp);

    const imgData = canvas.toDataURL('image/png');
    const { jsPDF } = jsPdfLib;
    const pdfWidth = 80;
    const pdfHeight = (canvas.height / canvas.width) * pdfWidth;
    const doc = new jsPDF({ unit: 'mm', format: [pdfWidth, pdfHeight] });
    doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    doc.save(`receipt-${order.id}.pdf`);
    return true;
  }

  function printReceipt(text) {
    const w = window.open('', '_blank', 'width=420,height=700');
    if (!w) return;
    w.document.write(`<pre style="font-family:monospace; white-space:pre-wrap;">${escapeHtml(text)}</pre>`);
    w.document.close();
    w.print();
  }

  async function downloadReceipt(text) {
    if (lastReceiptMeta.paymentStatus !== 'Paid') {
      window.alert('Cannot download receipt for unpaid order.');
      return;
    }

    const jsPdfLib = window.jspdf;
    if (!jsPdfLib || !jsPdfLib.jsPDF) {
      window.alert('PDF library failed to load. Please refresh and try again.');
      return;
    }
    await ensurePdfFontLoaded();

    if (lastReceiptOrder) {
      const done = await drawThermalReceiptHtmlPdf(lastReceiptOrder);
      if (!done) {
        await drawThermalReceiptPdf(lastReceiptOrder);
      }
      return;
    }

    const { jsPDF } = jsPdfLib;
    const doc = new jsPDF({ unit: 'mm', format: [80, 160] });
    setPdfFont(doc, 8.5);
    const lines = doc.splitTextToSize(text, 66);
    doc.text(lines, 7, 10);
    doc.save(`receipt-${Date.now()}.pdf`);
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  async function fileToDataUrl(file) {
    if (!file) return '';
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  function applyDateFilter(key, fromInput, toInput, renderFn, pageKey) {
    dateFilters[key].from = fromInput?.value || '';
    dateFilters[key].to = toInput?.value || '';
    pager[pageKey] = 1;
    renderFn();
  }

  function clearDateFilter(key, fromInput, toInput, renderFn, pageKey) {
    dateFilters[key].from = '';
    dateFilters[key].to = '';
    if (fromInput) fromInput.value = '';
    if (toInput) toInput.value = '';
    pager[pageKey] = 1;
    renderFn();
  }

  function bindEvents() {
    el.loginDialog.addEventListener('cancel', (event) => {
      if (!state.auth.isLoggedIn) event.preventDefault();
    });
    el.loginDialog.addEventListener('close', () => {
      if (!state.auth.isLoggedIn) requireLogin();
    });
    el.loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const passcode = String(el.loginPasscode.value || '').trim();
      if (passcode !== ADMIN_PASSCODE) {
        el.loginError.textContent = 'Invalid admin passcode.';
        return;
      }
      el.loginError.textContent = '';
      const adminUser = { username: 'admin', role: 'Admin' };
      setAuthUser(adminUser);
      saveAuthSession(adminUser);
      el.loginForm.reset();
      if (el.loginDialog.open) el.loginDialog.close();
    });
    el.logoutBtn.addEventListener('click', () => {
      clearAuthSession();
      setAuthUser(null);
      requireLogin();
    });

    el.menuItems.forEach((btn) => {
      btn.addEventListener('click', () => setSection(btn.dataset.section));
    });

    el.menuToggle.addEventListener('click', () => document.body.classList.toggle('sidebar-open'));
    el.overlay.addEventListener('click', () => document.body.classList.remove('sidebar-open'));

    el.checkoutCategory.addEventListener('change', renderCheckoutProducts);
    el.productCategory.addEventListener('change', updateProductSizeOptions);
    el.productIsDrink.addEventListener('change', updateProductSizeOptions);
    el.inventorySearch.addEventListener('input', () => {
      pager.inventoryPage = 1;
      renderInventory();
    });
    el.ordersFilterBtn.addEventListener('click', () =>
      applyDateFilter('orders', el.ordersFromDate, el.ordersToDate, renderOrders, 'ordersPage')
    );
    el.ordersClearBtn.addEventListener('click', () =>
      clearDateFilter('orders', el.ordersFromDate, el.ordersToDate, renderOrders, 'ordersPage')
    );
    el.customersFilterBtn.addEventListener('click', () =>
      applyDateFilter('customers', el.customersFromDate, el.customersToDate, renderCustomersList, 'customersPage')
    );
    el.customersClearBtn.addEventListener('click', () =>
      clearDateFilter('customers', el.customersFromDate, el.customersToDate, renderCustomersList, 'customersPage')
    );
    el.transactionsFilterBtn.addEventListener('click', () =>
      applyDateFilter(
        'transactions',
        el.transactionsFromDate,
        el.transactionsToDate,
        renderTransactions,
        'transactionsPage'
      )
    );
    el.transactionsClearBtn.addEventListener('click', () =>
      clearDateFilter(
        'transactions',
        el.transactionsFromDate,
        el.transactionsToDate,
        renderTransactions,
        'transactionsPage'
      )
    );
    el.shiftLogsFilterBtn.addEventListener('click', () =>
      applyDateFilter('shiftLogs', el.shiftLogsFromDate, el.shiftLogsToDate, renderShiftLogs, 'shiftLogsPage')
    );
    el.shiftLogsClearBtn.addEventListener('click', () =>
      clearDateFilter('shiftLogs', el.shiftLogsFromDate, el.shiftLogsToDate, renderShiftLogs, 'shiftLogsPage')
    );
    el.expensesFilterBtn.addEventListener('click', () =>
      applyDateFilter('expenses', el.expensesFromDate, el.expensesToDate, renderExpenses, 'expensesPage')
    );
    el.expensesClearBtn.addEventListener('click', () =>
      clearDateFilter('expenses', el.expensesFromDate, el.expensesToDate, renderExpenses, 'expensesPage')
    );

    el.checkoutProducts.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const btn = target.closest('.size-option-btn');
      const productId = btn?.getAttribute('data-product-id');
      if (!productId) return;

      const product = state.products.find((p) => p.id === productId);
      if (!product) return;

      const currentQty = state.cart.get(product.id)?.qty || 0;
      if (currentQty >= product.stock) return;

      state.cart.set(product.id, {
        id: product.id,
        name: productDisplayName(product),
        price: product.price,
        qty: currentQty + 1,
      });

      renderCheckoutProducts();
      renderCart();
    });

    el.cartList.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const action = target.getAttribute('data-action');
      if (!action) return;

      const row = target.closest('.cart-item');
      const productId = row?.getAttribute('data-product-id');
      if (!productId) return;

      const item = state.cart.get(productId);
      const product = state.products.find((p) => p.id === productId);
      if (!item || !product) return;

      if (action === 'plus') {
        if (item.qty < product.stock) item.qty += 1;
      }
      if (action === 'minus') {
        item.qty -= 1;
        if (item.qty <= 0) state.cart.delete(productId);
      }

      renderCheckoutProducts();
      renderCart();
    });

    el.completeSaleBtn.addEventListener('click', completeSale);

    el.ordersTable.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const action = target.getAttribute('data-order-action');
      const orderId = target.getAttribute('data-order-id');
      if (action && orderId) {
        if (target instanceof HTMLButtonElement && target.disabled) return;

        if (action === 'receipt') {
          openOrderReceipt(orderId);
          return;
        }

        if (action === 'edit') {
          openEditOrder(orderId);
          return;
        }

        if (action === 'pay') {
          markOrderPaid(orderId);
          return;
        }

        if (action === 'complete') {
          const order = state.orders.find((o) => o.id === orderId);
          if (!order || !canCompleteOrder(order)) {
            window.alert('This order is still unpaid. Please Mark Paid first.');
            return;
          }
          markOrderComplete(orderId);
          return;
        }
      }

      const row = target.closest('tr[data-order-id]');
      const rowOrderId = row?.getAttribute('data-order-id');
      if (rowOrderId) {
        openOrderView(rowOrderId);
      }
    });

    el.closeReceipt.addEventListener('click', () => el.receiptDialog.close());
    el.printReceipt.addEventListener('click', () => printReceipt(lastReceipt));
    el.downloadReceipt.addEventListener('click', () => downloadReceipt(lastReceipt));
    el.closePayment.addEventListener('click', () => {
      activePaymentOrderId = null;
      el.paymentDialog.close();
    });
    el.closeOrderView.addEventListener('click', () => el.orderViewDialog.close());
    el.closeEditOrder.addEventListener('click', () => {
      activeEditOrderId = null;
      activeEditDraft = [];
      el.editOrderDialog.close();
    });
    el.editOrderItems.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const action = target.getAttribute('data-edit-action');
      if (!action) return;
      const row = target.closest('li[data-edit-item-id]');
      const itemId = row?.getAttribute('data-edit-item-id');
      if (!itemId) return;
      updateEditDraftQty(itemId, action);
    });
    el.editOrderAddItemBtn.addEventListener('click', () => {
      const productId = el.editOrderProductSelect.value;
      if (!productId) return;
      addEditOrderItem(productId);
    });
    el.editOrderForm.addEventListener('submit', (event) => {
      event.preventDefault();
      saveEditedOrder();
    });
    el.closeCustomerView.addEventListener('click', () => el.customerViewDialog.close());
    el.customerFilterBtn.addEventListener('click', renderCustomerView);
    el.paymentReceivedInput.addEventListener('input', updatePaymentChangePreview);
    el.paymentForm.addEventListener('submit', (event) => {
      event.preventDefault();
      submitMarkPaid();
    });
    el.customerList.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const viewBtn = target.closest('button[data-view-customer]');
      const btnCustomerName = viewBtn?.getAttribute('data-view-customer');
      if (btnCustomerName) {
        openCustomerView(btnCustomerName);
        return;
      }
      const row = target.closest('li[data-customer-name]');
      const customerName = row?.getAttribute('data-customer-name');
      if (!customerName) return;
      openCustomerView(customerName);
    });
    el.shiftForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const openingAmount = Number(el.shiftOpenAmount.value || 0);
      if (Number.isNaN(openingAmount) || openingAmount < 0) {
        window.alert('Enter a valid opening amount.');
        return;
      }
      state.shift.isOpen = true;
      state.shift.openingAmount = openingAmount;
      state.shift.drawerAmount = openingAmount;
      state.shift.changeReturned = 0;
      state.expenses = [];
      state.shiftLogs = [];
      addShiftLog('Shift Opened', `Opening amount ${money(openingAmount)}`);
      el.shiftOpenAmount.value = '';
      renderDashboard();
      renderFinance();
    });
    el.closeShiftBtn.addEventListener('click', () => {
      addShiftLog('Shift Closed', `Closing drawer ${money(state.shift.drawerAmount)}`);
      state.shift.isOpen = false;
      renderDashboard();
      renderFinance();
    });
    el.expenseForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!state.shift.isOpen) {
        window.alert('Open shift first before adding expenses.');
        return;
      }
      const note = String(el.expenseNote.value || '').trim();
      const amount = Number(el.expenseAmount.value || 0);
      if (!note || Number.isNaN(amount) || amount <= 0) {
        window.alert('Enter expense note and valid amount.');
        return;
      }
      if (amount > state.shift.drawerAmount) {
        window.alert('Expense exceeds money in drawer.');
        return;
      }
      state.shift.drawerAmount -= amount;
      state.expenses.unshift({ note, amount, time: nowStamp() });
      addShiftLog('Expense', `${note}: -${money(amount)}`);
      el.expenseForm.reset();
      renderDashboard();
      renderFinance();
    });
    el.ordersPagination.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const pageTarget = target.getAttribute('data-page-target');
      const page = Number(target.getAttribute('data-page'));
      if (pageTarget !== 'orders' || Number.isNaN(page)) return;
      pager.ordersPage = page;
      renderOrders();
    });
    el.customersPagination.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const pageTarget = target.getAttribute('data-page-target');
      const page = Number(target.getAttribute('data-page'));
      if (pageTarget !== 'customers' || Number.isNaN(page)) return;
      pager.customersPage = page;
      renderCustomersList();
    });
    el.transactionsPagination.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const pageTarget = target.getAttribute('data-page-target');
      const page = Number(target.getAttribute('data-page'));
      if (pageTarget !== 'transactions' || Number.isNaN(page)) return;
      pager.transactionsPage = page;
      renderTransactions();
    });
    el.shiftLogsPagination.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const pageTarget = target.getAttribute('data-page-target');
      const page = Number(target.getAttribute('data-page'));
      if (pageTarget !== 'shiftLogs' || Number.isNaN(page)) return;
      pager.shiftLogsPage = page;
      renderShiftLogs();
    });
    el.expensesPagination.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const pageTarget = target.getAttribute('data-page-target');
      const page = Number(target.getAttribute('data-page'));
      if (pageTarget !== 'expenses' || Number.isNaN(page)) return;
      pager.expensesPage = page;
      renderExpenses();
    });
    el.inventoryPagination.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const pageTarget = target.getAttribute('data-page-target');
      const page = Number(target.getAttribute('data-page'));
      if (pageTarget !== 'inventory' || Number.isNaN(page)) return;
      pager.inventoryPage = page;
      renderInventory();
    });

    el.customerForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const form = new FormData(el.customerForm);
      state.customers.push({
        id: idGen(),
        name: String(form.get('name') || '').trim(),
        phone: String(form.get('phone') || '').trim(),
        email: String(form.get('email') || '').trim(),
        createdAt: nowStamp(),
      });
      el.customerForm.reset();
      pager.customersPage = 1;
      populateCustomers();
    });

    el.categoryForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const form = new FormData(el.categoryForm);
      const name = String(form.get('categoryName') || '').trim();
      const isDrink = isDrinkCategoryName(name);
      const sizes = isDrink ? normalizeCategorySizes(form.get('categorySizes')) : [];
      if (!name) return;
      state.categories.push({ id: idGen(), name, sizes, isDrink });
      el.categoryForm.reset();
      populateCategorySelectors();
      renderCheckoutProducts();
      renderInventory();
      renderDashboard();
    });

    el.productForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const form = new FormData(el.productForm);
      const imageFile = form.get('image');
      const image = imageFile instanceof File && imageFile.size ? await fileToDataUrl(imageFile) : '';
      const productName = String(form.get('name') || '').trim();
      const stock = Number(form.get('stock') || 0);
      const categoryId = String(form.get('category') || '');
      const sizes = getProductFormSizes();

      if (!productName || !categoryId) return;

      if (!el.productIsDrink.checked || !sizes.length) {
        state.products.push({
          id: idGen(),
          name: productName,
          size: '',
          price: Number(form.get('price') || 0),
          stock,
          categoryId,
          image,
        });
      } else {
        const sizeInputs = Array.from(el.sizePriceFields.querySelectorAll('input[data-size]'));
        for (const input of sizeInputs) {
          const size = String(input.getAttribute('data-size') || '').trim();
          const price = Number(input.value || 0);
          if (!size || Number.isNaN(price)) continue;
          state.products.push({
            id: idGen(),
            name: productName,
            size,
            price,
            stock,
            categoryId,
            image,
          });
        }
      }

      el.productForm.reset();
      el.productIsDrink.checked = false;
      updateProductSizeOptions();
      renderCheckoutProducts();
      renderInventory();
      renderFinance();
      renderDashboard();
    });

    el.inventoryList.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const row = target.closest('li');
      const productId = row?.getAttribute('data-product-id');
      if (!productId) return;

      const productAction = target.getAttribute('data-product-action');
      if (productAction === 'edit') {
        openProductEditor(productId);
        return;
      }
      if (productAction === 'delete') {
        deleteProductById(productId);
        return;
      }

      const action = target.getAttribute('data-stock');
      if (!action) return;
      const product = state.products.find((p) => p.id === productId);
      if (!product) return;

      if (action === 'plus') product.stock += 1;
      if (action === 'minus') product.stock = Math.max(0, product.stock - 1);

      renderInventory();
      renderCheckoutProducts();
      renderFinance();
      renderDashboard();
    });

    el.closeProductEdit.addEventListener('click', closeProductEditor);
    el.productEditForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      await saveProductEditor();
    });
    el.deleteProductBtn.addEventListener('click', () => {
      if (!activeEditProductId) return;
      deleteProductById(activeEditProductId);
    });

    el.settingsForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const form = new FormData(el.settingsForm);
      const qrFile = form.get('receiptQrImage');
      const receiptQrImage =
        qrFile instanceof File && qrFile.size ? await fileToDataUrl(qrFile) : state.settings.receiptQrImage;
      state.settings = {
        cafeName: String(form.get('cafeName') || '').trim(),
        address: String(form.get('address') || '').trim(),
        phone: String(form.get('phone') || '').trim(),
        receiptQrImage,
      };
      renderCart();
    });
  }

  function startClock() {
    const tick = () => {
      el.liveTime.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };
    tick();
    setInterval(tick, 1000 * 30);
  }

  function init() {
    bindEvents();
    setAuthUser(loadAuthSession());
    populateCategorySelectors();
    populateCustomers();
    setSettingsForm();
    renderCheckoutProducts();
    renderCart();
    renderOrders();
    renderInventory();
    renderTransactions();
    renderFinance();
    renderDashboard();
    startClock();
    requireLogin();
  }

  init();



