function selectTab(tabId, element) {
    var triggerEl = document.querySelector('#' + tabId);
    var tabTrigger = new bootstrap.Tab(triggerEl);

    // Hide the content of the last tab
    var lastTabContent = document.querySelector('.tab-pane.show.active');
    lastTabContent.classList.remove('show', 'active');

    tabTrigger.show();

    // Remove active class from all other <li> elements
    var allListItems = document.querySelectorAll('.nav-item');
    allListItems.forEach(item => {
      item.classList.remove('active');
    });

    // Add active class to the parent <li> of the clicked <a> element
    var parentListItem = element.parentNode;
    parentListItem.classList.add('active');
  }